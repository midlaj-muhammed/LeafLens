
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useGeminiApi } from '@/hooks/useGeminiApi';

const ApiKeyConfig = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState<boolean>(false);
  const { toast } = useToast();
  const { setGeminiApiKey } = useGeminiApi();
  
  // Check if API key exists in localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      setGeminiApiKey(savedApiKey);
      setIsConfigured(true);
    }
  }, [setGeminiApiKey]);

  const handleSaveApiKey = () => {
    if (apiKey.trim().length < 10) {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid Google Gemini API key",
        variant: "destructive"
      });
      return;
    }

    // Save API key to localStorage and update the hook
    localStorage.setItem('gemini_api_key', apiKey);
    const success = setGeminiApiKey(apiKey);
    
    if (success) {
      setIsConfigured(true);
      toast({
        title: "API Key Configured",
        description: "Your Google Gemini API key has been saved successfully"
      });
    } else {
      toast({
        title: "Configuration Failed",
        description: "Failed to configure the API key. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleRemoveApiKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey('');
    setIsConfigured(false);
    toast({
      title: "API Key Removed",
      description: "Your Google Gemini API key has been removed"
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={isConfigured ? "outline" : "default"} className={isConfigured ? "border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10" : "bg-leaflens-green hover:bg-leaflens-green-dark"}>
          {isConfigured ? "Update API Key" : "Configure API Key"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Google Gemini API Configuration</DialogTitle>
          <DialogDescription>
            Enter your Google Gemini API key to enable plant identification features.
            {isConfigured && " Your API key is currently configured."}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <Label htmlFor="apiKey" className="mb-2 block">API Key</Label>
          <Input 
            id="apiKey" 
            type="password" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={isConfigured ? "••••••••••••••••••••" : "Enter your Google Gemini API key"}
          />
          <p className="text-xs text-muted-foreground mt-2">
            Don't have an API key? <a 
              href="https://ai.google.dev/tutorials/setup" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-leaflens-green hover:underline"
            >
              Get one here
            </a>
          </p>
        </div>
        
        <DialogFooter>
          {isConfigured && (
            <Button 
              variant="outline" 
              onClick={handleRemoveApiKey}
              className="mr-auto"
            >
              Remove Key
            </Button>
          )}
          <Button 
            onClick={handleSaveApiKey}
            className="bg-leaflens-green hover:bg-leaflens-green-dark"
            disabled={apiKey.trim().length < 10}
          >
            Save API Key
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyConfig;
