
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import { ArrowRight, Camera, Leaf, TreePine } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-1rem)] w-full pt-16 sm:pt-20 pb-10 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-leaflens-green-light/20">
      {/* Animated background decorations - optimized for mobile */}
      <div className="absolute -top-20 -right-20 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-leaflens-green/10 blur-3xl animate-float opacity-70"></div>
      <div className="absolute top-40 left-10 sm:left-20 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-leaflens-green-lightest/30 blur-3xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute -bottom-20 -left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-leaflens-yellow/10 blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>

      {/* Subtle leaf decorations - hidden on smallest screens */}
      <div className="absolute top-1/4 right-5 sm:right-10 w-10 sm:w-16 h-10 sm:h-16 opacity-10 animate-leaf-sway hidden sm:block" style={{ animationDelay: '0.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-dark">
          <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-1/4 left-5 sm:left-10 w-8 sm:w-12 h-8 sm:h-12 opacity-10 animate-leaf-sway hidden sm:block" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green">
          <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
        </svg>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left side - Title and description */}
          <div className="w-full lg:w-1/2 animate-slide-in-left">
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 rounded-full bg-leaflens-green-lightest text-leaflens-green-darkest font-medium shadow-sm animate-fade-in text-sm sm:text-base" style={{ animationDelay: '0.3s' }}>
              <Leaf className="inline-block w-4 h-4 mr-1 text-leaflens-green" />
              Your Plant Care Companion
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.5s' }}>
              Discover the <span className="text-leaflens-green relative">
                Beauty
                <span className="absolute bottom-1 left-0 w-full h-1 bg-leaflens-green-light/50 rounded-full"></span>
              </span> of Plants
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              LeafLens helps you identify, learn about, and care for your plants with detailed information and personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button
                asChild
                className="bg-leaflens-green hover:bg-leaflens-green-dark text-white px-4 sm:px-6 py-5 sm:py-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple min-h-[44px] min-w-[44px] group"
              >
                <Link to="/dashboard">
                  <span className="relative z-10 flex items-center">
                    <Camera className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                    Identify Plants
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10 px-4 sm:px-6 py-5 sm:py-6 hover:border-leaflens-green-dark transition-all duration-300 min-h-[44px] min-w-[44px] group"
              >
                <Link to="/database">
                  <span className="flex items-center">
                    <TreePine className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Explore Database
                  </span>
                </Link>
              </Button>
            </div>

            <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: '1.1s' }}>
              <div className="flex -space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-leaflens-green flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm min-w-[44px] min-h-[44px]">10K+</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-leaflens-yellow flex items-center justify-center text-leaflens-brown shadow-md hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm min-w-[44px] min-h-[44px]">5K+</div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-leaflens-beige flex items-center justify-center text-leaflens-brown shadow-md hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm min-w-[44px] min-h-[44px]">2K+</div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Thousands of plant species identified by our community
              </p>
            </div>
          </div>

          {/* Right side - Plant illustration */}
          <div className="w-full lg:w-1/2 animate-slide-in-right">
            <div className="relative w-full max-w-[500px] mx-auto">
              {/* Main plant illustration */}
              <div className="relative z-10 leaflens-gradient-animated p-1 rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-500">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 relative">
                        <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green animate-float">
                          <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <TreePine className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-semibold mb-3 text-center text-leaflens-green-darkest">Plant Care Made Simple</h3>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-leaflens-green-lightest/50 p-3 rounded-lg flex flex-col items-center hover:bg-leaflens-green-lightest transition-colors">
                        <div className="w-10 h-10 rounded-full bg-leaflens-green-light/50 flex items-center justify-center mb-2">
                          <Camera className="w-5 h-5 text-leaflens-green-dark" />
                        </div>
                        <p className="text-xs text-center text-leaflens-green-dark font-medium">Identify Plants</p>
                      </div>
                      <div className="bg-leaflens-green-lightest/50 p-3 rounded-lg flex flex-col items-center hover:bg-leaflens-green-lightest transition-colors">
                        <div className="w-10 h-10 rounded-full bg-leaflens-green-light/50 flex items-center justify-center mb-2">
                          <Leaf className="w-5 h-5 text-leaflens-green-dark" />
                        </div>
                        <p className="text-xs text-center text-leaflens-green-dark font-medium">Care Instructions</p>
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-leaflens-green hover:bg-leaflens-green-dark text-white shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple"
                    >
                      <Link to="/dashboard">
                        <span className="relative z-10 flex items-center justify-center">
                          Go to Dashboard
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </Button>
                  </div>

                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-leaflens-green-lightest/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-leaflens-yellow/20 rounded-full translate-y-1/3 -translate-x-1/3"></div>
                </div>
              </div>

              {/* Visual decorations around the main illustration */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-leaflens-green-light/20 rounded-full blur-xl animate-pulse-green"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-leaflens-yellow/20 rounded-full blur-xl animate-pulse-green" style={{ animationDelay: '1s' }}></div>

              {/* Floating leaf decorations */}
              <div className="absolute top-1/4 -right-4 w-12 h-12 animate-float opacity-70" style={{ animationDelay: '0.7s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-light">
                  <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 -left-4 w-10 h-10 animate-float opacity-70" style={{ animationDelay: '1.3s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-light">
                  <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
