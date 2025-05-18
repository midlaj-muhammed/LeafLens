import React, { useState, useEffect } from 'react';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader: React.FC<AppLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading LeafLens...');
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    // Set up a timeout to handle the loading state
    const timeout = setTimeout(() => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading application:', error);
        setHasError(true);
        setIsLoading(false);
      }
    }, 3000);

    // Clean up
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  // Update loading message based on progress
  useEffect(() => {
    if (loadingProgress < 30) {
      setLoadingMessage('Loading LeafLens...');
    } else if (loadingProgress < 60) {
      setLoadingMessage('Preparing plant database...');
    } else if (loadingProgress < 90) {
      setLoadingMessage('Almost ready...');
    } else {
      setLoadingMessage('Ready!');
    }
  }, [loadingProgress]);

  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    setLoadingProgress(0);
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="w-24 h-24 mb-6">
          <img src="/logo.svg" alt="LeafLens Logo" className="w-full h-full" />
        </div>
        <LoadingSpinner size="lg" color="green" />
        <p className="mt-4 text-leaflens-green-dark font-medium">{loadingMessage}</p>
        <div className="w-64 h-2 bg-gray-100 rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-leaflens-green rounded-full transition-all duration-300"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">{loadingProgress}%</p>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="w-24 h-24 mb-6">
          <img src="/logo.svg" alt="LeafLens Logo" className="w-full h-full" />
        </div>
        <h2 className="text-2xl font-serif font-semibold mb-2 text-red-600">Something went wrong</h2>
        <p className="text-muted-foreground mb-6 text-center max-w-md px-4">
          We're having trouble loading LeafLens. This could be due to a network issue or a temporary problem with our service.
        </p>
        <Button onClick={handleRetry} className="bg-leaflens-green hover:bg-leaflens-green-dark text-white">
          <RefreshCw className="mr-2 h-4 w-4" />
          Retry
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default AppLoader;
