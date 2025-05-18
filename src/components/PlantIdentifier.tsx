
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, TreePine, Search, Upload, FileUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGeminiApi } from '@/hooks/useGeminiApi';
import { isMobileDevice } from '@/utils/deviceDetection';

interface IdentificationResult {
  name: string;
  scientificName: string;
  confidence: number;
  description?: string;
  nativeRegion?: string;
  commonUses?: string;
  lightRequirements?: string;
  wateringNeeds?: string;
  temperatureRange?: string;
  additionalTips?: string[];
  careInfo?: string;
  imageSource?: string;
}

const PlantIdentifier = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [textDescription, setTextDescription] = useState("");
  const [result, setResult] = useState<IdentificationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();
  const { identifyPlantWithText, identifyPlantWithImage, setGeminiApiKey } = useGeminiApi();

  // Check if device is mobile on component mount
  useEffect(() => {
    try {
      setIsMobile(isMobileDevice());
    } catch (error) {
      console.error('Error detecting mobile device:', error);
      setIsMobile(false);
    }
  }, []);

  // Use the provided API key
  useEffect(() => {
    try {
      const apiKey = "AIzaSyC-h15bSl2_SJGn17-LMqTpbVCj1S_AebQ";
      localStorage.setItem('gemini_api_key', apiKey);
      setGeminiApiKey(apiKey);
    } catch (error) {
      console.error('Error setting Gemini API key:', error);
      toast({
        title: "Configuration Error",
        description: "There was an error configuring the plant identification service. Some features may not work correctly.",
        variant: "destructive"
      });
    }
  }, [setGeminiApiKey, toast]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImage(selectedFile);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Function to handle native camera capture on mobile devices
  const handleNativeCameraCapture = () => {
    try {
      // Create a file input element
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.capture = 'environment'; // Use the rear camera by default

      // Handle the file selection
      input.onchange = (e: Event) => {
        try {
          const target = e.target as HTMLInputElement;
          if (target.files && target.files[0]) {
            const selectedFile = target.files[0];
            setImage(selectedFile);

            const reader = new FileReader();
            reader.onload = (event) => {
              try {
                setImagePreview(event.target?.result as string);
              } catch (error) {
                console.error('Error setting image preview:', error);
                toast({
                  title: "Error",
                  description: "Failed to process the captured image. Please try again.",
                  variant: "destructive"
                });
              }
            };
            reader.onerror = () => {
              toast({
                title: "Error",
                description: "Failed to read the captured image. Please try again.",
                variant: "destructive"
              });
            };
            reader.readAsDataURL(selectedFile);
          }
        } catch (error) {
          console.error('Error handling camera capture:', error);
          toast({
            title: "Camera Error",
            description: "There was an error capturing the image. Please try again or use the upload option.",
            variant: "destructive"
          });
        }
      };

      // Trigger the file input click
      input.click();
    } catch (error) {
      console.error('Error initializing camera capture:', error);
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please try uploading an image instead.",
        variant: "destructive"
      });
    }
  };

  const handleTextSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!textDescription.trim()) {
      toast({
        title: "Description needed",
        description: "Please enter a description of the plant to identify.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await identifyPlantWithText(textDescription);
      setResult(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Identification failed",
        description: error instanceof Error ? error.message : "There was an error identifying the plant. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      toast({
        title: "Image needed",
        description: "Please upload an image of the plant to identify.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    try {
      const result = await identifyPlantWithImage(image);
      // Keep the image preview in the component state
      // No need to modify the result object since we're using the imagePreview state
      setResult(result);
    } catch (error) {
      console.error(error);
      toast({
        title: "Identification failed",
        description: error instanceof Error ? error.message : "There was an error identifying the plant. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const resetIdentification = () => {
    setResult(null);
    setImage(null);
    setImagePreview(null);
    setTextDescription("");
  };

  if (result) {
    return (
      <div className="text-center animate-scale-up">
        {result.imageSource === "upload" && imagePreview ? (
          <div className="w-32 h-32 mx-auto mb-5 shadow-md rounded-full overflow-hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img
              src={imagePreview}
              alt="Uploaded plant"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-24 h-24 bg-leaflens-green-lightest rounded-full flex items-center justify-center mx-auto mb-5 shadow-md animate-pulse-green">
            <TreePine className="text-leaflens-green-dark h-12 w-12 animate-fade-in" style={{ animationDelay: '0.3s' }} />
          </div>
        )}

        {/* Standardized Plant Prediction Result Format */}
        <div className="text-left bg-white p-6 rounded-xl border border-leaflens-green/20 shadow-sm mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-xl font-serif font-semibold mb-4 text-leaflens-green-dark text-center">
            🌿 <span className="text-leaflens-green-darkest">Plant Prediction Result</span>
          </h3>

          <p className="text-center text-sm text-leaflens-green mb-4">
            {result.imageSource === "upload" ? "📸 Uploaded Image Analysis Complete!" : "📝 Text Description Analysis Complete!"}
          </p>

          <div className="space-y-3">
            <div>
              <h4 className="text-md font-medium text-leaflens-green-dark">🔍 Predicted Plant Name:</h4>
              <p className="ml-6">{result.scientificName} (commonly known as {result.name})</p>
            </div>

            <div>
              <h4 className="text-md font-medium text-leaflens-green-dark">🧠 Confidence Level:</h4>
              <p className="ml-6">{Math.round(result.confidence * 100)}%</p>
            </div>

            {result.nativeRegion && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">🌎 Native Region:</h4>
                <p className="ml-6">{result.nativeRegion}</p>
              </div>
            )}

            {result.commonUses && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">🌱 Common Uses:</h4>
                <p className="ml-6">{result.commonUses}</p>
              </div>
            )}

            {result.lightRequirements && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">☀️ Light Requirements:</h4>
                <p className="ml-6">{result.lightRequirements}</p>
              </div>
            )}

            {result.wateringNeeds && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">💧 Watering Needs:</h4>
                <p className="ml-6">{result.wateringNeeds}</p>
              </div>
            )}

            {result.temperatureRange && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">🌡️ Ideal Temperature Range:</h4>
                <p className="ml-6">{result.temperatureRange}</p>
              </div>
            )}

            {result.additionalTips && result.additionalTips.length > 0 && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">🧪 Additional Tips:</h4>
                <ul className="ml-6 list-disc pl-4">
                  {result.additionalTips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {result.description && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">📋 Description:</h4>
                <p className="ml-6 text-sm">{result.description}</p>
              </div>
            )}

            {result.careInfo && (
              <div>
                <h4 className="text-md font-medium text-leaflens-green-dark">🌿 Care Information:</h4>
                <p className="ml-6 text-sm">{result.careInfo}</p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <h4 className="text-md font-medium text-leaflens-green-dark mb-3">🌱 Want to Learn More?</h4>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10"
                onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(result.scientificName || result.name)}+plant+care+guide`, '_blank')}
              >
                📖 View Care Guide
              </Button>
              <Button
                variant="outline"
                className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10"
                onClick={() => window.open(`https://www.google.com/search?q=buy+${encodeURIComponent(result.name)}+plant`, '_blank')}
              >
                🛍️ Buy This Plant
              </Button>
            </div>
          </div>
        </div>

        <Button
          onClick={resetIdentification}
          className="w-full bg-leaflens-green hover:bg-leaflens-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <span className="relative z-10">Identify Another Plant</span>
          <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
        </Button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-serif font-semibold mb-2 text-center text-leaflens-green-darkest">Plant Identifier</h2>
      <p className="text-muted-foreground text-sm mb-6 text-center">Upload a photo or describe your plant</p>

      <Tabs defaultValue="image" className="w-full">
        <TabsList className="grid grid-cols-2 mb-6 p-1 bg-leaflens-green-lightest/50">
          <TabsTrigger
            value="image"
            className="data-[state=active]:bg-leaflens-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload
          </TabsTrigger>
          <TabsTrigger
            value="text"
            className="data-[state=active]:bg-leaflens-green data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
          >
            <Search className="mr-2 h-4 w-4" />
            Text
          </TabsTrigger>
        </TabsList>

        <TabsContent value="image" className="animate-fade-in">
          <form onSubmit={handleImageSubmit}>
            {imagePreview ? (
              <div className="mb-6 animate-scale-up">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-dashed border-leaflens-green hover:border-leaflens-green-dark transition-colors shadow-md">
                  <img
                    src={imagePreview}
                    alt="Plant preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setImage(null);
                      setImagePreview(null);
                    }}
                    className="absolute top-3 right-3 bg-white/90 hover:bg-white shadow-sm hover:shadow transition-all duration-300"
                  >
                    Change
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <Label className="block mb-2 text-leaflens-green-dark font-medium">Choose an option</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload from device option */}
                  <div className="relative rounded-lg overflow-hidden border-2 border-dashed border-leaflens-green-light hover:border-leaflens-green transition-all duration-300 hover:shadow-md group">
                    <Input
                      id="plant-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center justify-center h-40 p-4">
                      <div className="w-14 h-14 rounded-full bg-leaflens-green-lightest flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                        <FileUp className="w-7 h-7 text-leaflens-green-dark" />
                      </div>
                      <p className="text-sm text-leaflens-green-dark font-medium text-center">Upload from device</p>
                      <p className="text-xs text-muted-foreground mt-1 text-center">Select from your gallery</p>
                    </div>
                  </div>

                  {/* Capture image option - only shown on mobile */}
                  {isMobile && (
                    <div
                      className="relative rounded-lg overflow-hidden border-2 border-dashed border-leaflens-green-light hover:border-leaflens-green transition-all duration-300 hover:shadow-md group cursor-pointer"
                      onClick={handleNativeCameraCapture}
                    >
                      <div className="flex flex-col items-center justify-center h-40 p-4">
                        <div className="w-14 h-14 rounded-full bg-leaflens-green-lightest flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Camera className="w-7 h-7 text-leaflens-green-dark" />
                        </div>
                        <p className="text-sm text-leaflens-green-dark font-medium text-center">Capture image</p>
                        <p className="text-xs text-muted-foreground mt-1 text-center">Take a photo with your camera</p>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">For best results, ensure the plant is well-lit and clearly visible</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-leaflens-green hover:bg-leaflens-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple"
              disabled={loading || !image}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Identifying...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Identify Plant</span>
                  <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </>
              )}
            </Button>
          </form>
        </TabsContent>



        <TabsContent value="text" className="animate-fade-in">
          <form onSubmit={handleTextSubmit}>
            <div className="mb-6">
              <Label htmlFor="plant-description" className="block mb-2 text-leaflens-green-dark font-medium">Describe the plant</Label>
              <Textarea
                id="plant-description"
                placeholder="Describe the plant's appearance, leaf shape, flower color, size, etc."
                value={textDescription}
                onChange={(e) => setTextDescription(e.target.value)}
                className="min-h-32 resize-none border-leaflens-green/20 focus:border-leaflens-green focus:ring-leaflens-green shadow-sm"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-leaflens-green hover:bg-leaflens-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple"
              disabled={loading || !textDescription.trim()}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Identifying...
                </span>
              ) : (
                <>
                  <span className="relative z-10">Identify Plant</span>
                  <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </>
              )}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlantIdentifier;
