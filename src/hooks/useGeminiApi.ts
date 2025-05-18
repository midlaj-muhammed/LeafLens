
import { useState } from 'react';

interface PlantIdentificationResult {
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

export const useGeminiApi = () => {
  const [apiKey, setApiKey] = useState<string>('');

  // Function to identify plant based on text description
  const identifyPlantWithText = async (description: string): Promise<PlantIdentificationResult> => {
    if (!apiKey) {
      const savedKey = localStorage.getItem('gemini_api_key');
      if (savedKey) {
        setApiKey(savedKey);
      } else {
        throw new Error('API key not configured');
      }
    }

    try {
      // Updated to use gemini-1.5-flash model
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Based on this plant description, identify the most likely plant species. Description: ${description}.
              Return the response as a JSON object with the following structure:
              {
                "name": "Common name of the plant",
                "scientificName": "Scientific name of the plant",
                "confidence": 0.XX (a number between 0 and 1 indicating confidence),
                "description": "A short description of the plant",
                "nativeRegion": "Geographic origin of the plant",
                "commonUses": "List primary uses separated by commas",
                "lightRequirements": "Specific light needs",
                "wateringNeeds": "Frequency and conditions",
                "temperatureRange": "Temperature in both Celsius and Fahrenheit",
                "additionalTips": ["Tip 1", "Tip 2", "Tip 3"],
                "careInfo": "Brief care instructions for the plant"
              }

              Make sure to include all fields in the response, even if you need to make an educated guess based on typical characteristics of the plant species.`
            }]
          }]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'Failed to identify plant');
      }

      // Parse the response text as JSON
      const textResponse = data.candidates[0]?.content?.parts?.[0]?.text;
      if (!textResponse) {
        throw new Error('Invalid response from API');
      }

      // Extract the JSON part from the text response
      let jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Could not parse plant data from response');
      }

      const plantData = JSON.parse(jsonMatch[0]);

      return {
        name: plantData.name,
        scientificName: plantData.scientificName || "Unknown",
        confidence: plantData.confidence || 0.7,
        description: plantData.description,
        nativeRegion: plantData.nativeRegion,
        commonUses: plantData.commonUses,
        lightRequirements: plantData.lightRequirements,
        wateringNeeds: plantData.wateringNeeds,
        temperatureRange: plantData.temperatureRange,
        additionalTips: plantData.additionalTips || [],
        careInfo: plantData.careInfo,
        imageSource: "text"
      };
    } catch (error) {
      console.error('Error identifying plant with text:', error);
      throw error;
    }
  };

  // Function to identify plant based on image
  const identifyPlantWithImage = async (image: File): Promise<PlantIdentificationResult> => {
    if (!apiKey) {
      const savedKey = localStorage.getItem('gemini_api_key');
      if (savedKey) {
        setApiKey(savedKey);
      } else {
        throw new Error('API key not configured');
      }
    }

    try {
      // Convert the image to base64
      const base64Image = await fileToBase64(image);

      // Updated to use gemini-1.5-flash model
      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [
              {
                text: `Identify this plant in the image. Return the response as a JSON object with the following structure:
                {
                  "name": "Common name of the plant",
                  "scientificName": "Scientific name of the plant",
                  "confidence": 0.XX (a number between 0 and 1 indicating confidence),
                  "description": "A short description of the plant",
                  "nativeRegion": "Geographic origin of the plant",
                  "commonUses": "List primary uses separated by commas",
                  "lightRequirements": "Specific light needs",
                  "wateringNeeds": "Frequency and conditions",
                  "temperatureRange": "Temperature in both Celsius and Fahrenheit",
                  "additionalTips": ["Tip 1", "Tip 2", "Tip 3"],
                  "careInfo": "Brief care instructions for the plant"
                }

                Make sure to include all fields in the response, even if you need to make an educated guess based on typical characteristics of the plant species.`
              },
              {
                inline_data: {
                  mime_type: image.type,
                  data: base64Image.split(',')[1]
                }
              }
            ]
          }]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'Failed to identify plant');
      }

      // Parse the response text as JSON
      const textResponse = data.candidates[0]?.content?.parts?.[0]?.text;
      if (!textResponse) {
        throw new Error('Invalid response from API');
      }

      // Extract the JSON part from the text response
      let jsonMatch = textResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Could not parse plant data from response');
      }

      const plantData = JSON.parse(jsonMatch[0]);

      return {
        name: plantData.name,
        scientificName: plantData.scientificName || "Unknown",
        confidence: plantData.confidence || 0.85,
        description: plantData.description,
        nativeRegion: plantData.nativeRegion,
        commonUses: plantData.commonUses,
        lightRequirements: plantData.lightRequirements,
        wateringNeeds: plantData.wateringNeeds,
        temperatureRange: plantData.temperatureRange,
        additionalTips: plantData.additionalTips || [],
        careInfo: plantData.careInfo,
        imageSource: "upload"
      };
    } catch (error) {
      console.error('Error identifying plant with image:', error);
      throw error;
    }
  };

  // Function to configure API key
  const setGeminiApiKey = (key: string) => {
    setApiKey(key);
    return true;
  };

  // Helper function to convert File to base64 string
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  return {
    identifyPlantWithText,
    identifyPlantWithImage,
    setGeminiApiKey
  };
};
