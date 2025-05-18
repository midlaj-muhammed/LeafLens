
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PlantDatabase from '@/components/PlantDatabase';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Leaf, Search, TreePine, Droplets, Camera, ArrowRight, Sparkles, User } from "lucide-react";
import Container from '@/components/ui/container';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react';

const Index = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-leaflens-green-lightest/30 to-white/0"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-leaflens-green/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-leaflens-green/5 blur-3xl"></div>

        {/* Decorative leaves */}
        <div className="absolute top-20 right-10 w-16 h-16 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '0.5s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-dark">
            <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-20 left-10 w-12 h-12 opacity-10 animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green">
            <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
          </svg>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 mb-4 sm:mb-6 rounded-full bg-leaflens-green/10 text-leaflens-green-dark font-medium text-sm sm:text-base shadow-sm">
              <Sparkles className="w-4 h-4 mr-2 text-leaflens-green" />
              Why Choose LeafLens
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4">Innovative Features for Plant Lovers</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with extensive botanical knowledge to provide accurate plant identification and personalized care advice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <FeatureCard
                icon={<Camera className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-leaflens-green transition-colors" />}
                title="Plant Identification"
                description="Our AI-powered system can identify thousands of plant species with high accuracy using either photos or text descriptions."
                className="h-full hover:border-leaflens-green hover:shadow-md transition-all duration-300 group-hover:-translate-y-1"
              />
              <div className="mt-3 text-center">
                <Button
                  asChild
                  variant="link"
                  className="text-leaflens-green hover:text-leaflens-green-dark"
                >
                  <Link to="/dashboard" className="flex items-center">
                    Try it now
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <FeatureCard
                icon={<Search className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-leaflens-green transition-colors" />}
                title="Comprehensive Database"
                description="Access our extensive database of plants with detailed information about care requirements, growth patterns, and more."
                className="h-full hover:border-leaflens-green hover:shadow-md transition-all duration-300 group-hover:-translate-y-1"
              />
              <div className="mt-3 text-center">
                <Button
                  asChild
                  variant="link"
                  className="text-leaflens-green hover:text-leaflens-green-dark"
                >
                  <Link to="/database" className="flex items-center">
                    Explore database
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="group">
              <FeatureCard
                icon={<Droplets className="h-5 w-5 sm:h-6 sm:w-6 group-hover:text-leaflens-green transition-colors" />}
                title="Personalized Care Tips"
                description="Get customized care instructions based on your specific plant and growing conditions to help your plants thrive."
                className="h-full hover:border-leaflens-green hover:shadow-md transition-all duration-300 group-hover:-translate-y-1"
              />
              <div className="mt-3 text-center">
                <Button
                  asChild
                  variant="link"
                  className="text-leaflens-green hover:text-leaflens-green-dark"
                >
                  <Link to="/dashboard" className="flex items-center">
                    Get care tips
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Button
              asChild
              className="bg-leaflens-green hover:bg-leaflens-green-dark text-white px-6 py-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple min-h-[44px] min-w-[44px] group"
            >
              <Link to="/dashboard">
                <span className="relative z-10 flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Go to Plant Identification Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Plant Database Section */}
      <PlantDatabase limit={8} showViewMore={true} />

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 leaflens-gradient-animated opacity-10"></div>
        <div className="absolute -top-32 -right-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-leaflens-green/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-leaflens-yellow/20 blur-3xl"></div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-20 h-20 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '0.3s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green">
            <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-10 w-16 h-16 opacity-20 animate-float hidden lg:block" style={{ animationDelay: '1.2s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-dark">
            <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
          </svg>
        </div>

        <Container>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12 border border-leaflens-green/10 relative z-10 animate-fade-in hover-lift transition-all duration-500">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-leaflens-green-lightest text-leaflens-green-dark font-medium text-sm sm:text-base shadow-sm">
                <Sparkles className="w-4 h-4 mr-2 text-leaflens-green" />
                Plant Identification Dashboard
              </div>

              <SignedOut>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">Start Your Plant Journey Today</h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
                  Identify, learn, and care for your plants with LeafLens. Our platform makes plant care simple and enjoyable with our powerful identification tools and comprehensive care guides.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                  <div className="bg-leaflens-green-lightest/50 p-5 rounded-xl flex flex-col items-center hover:bg-leaflens-green-lightest transition-colors">
                    <div className="w-12 h-12 rounded-full bg-leaflens-green-light/50 flex items-center justify-center mb-3">
                      <Camera className="w-6 h-6 text-leaflens-green-dark" />
                    </div>
                    <h3 className="font-medium text-leaflens-green-dark mb-1">Upload Photos</h3>
                    <p className="text-xs text-center text-muted-foreground">Identify plants with your camera</p>
                  </div>

                  <div className="bg-leaflens-green-lightest/50 p-5 rounded-xl flex flex-col items-center hover:bg-leaflens-green-lightest transition-colors">
                    <div className="w-12 h-12 rounded-full bg-leaflens-green-light/50 flex items-center justify-center mb-3">
                      <Search className="w-6 h-6 text-leaflens-green-dark" />
                    </div>
                    <h3 className="font-medium text-leaflens-green-dark mb-1">Text Description</h3>
                    <p className="text-xs text-center text-muted-foreground">Describe plants for identification</p>
                  </div>

                  <div className="bg-leaflens-green-lightest/50 p-5 rounded-xl flex flex-col items-center hover:bg-leaflens-green-lightest transition-colors">
                    <div className="w-12 h-12 rounded-full bg-leaflens-green-light/50 flex items-center justify-center mb-3">
                      <Leaf className="w-6 h-6 text-leaflens-green-dark" />
                    </div>
                    <h3 className="font-medium text-leaflens-green-dark mb-1">Care Instructions</h3>
                    <p className="text-xs text-center text-muted-foreground">Get personalized plant care tips</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-leaflens-green hover:bg-leaflens-green-dark text-white px-6 sm:px-10 py-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple min-h-[44px] min-w-[44px] group"
                  >
                    <Link to="/dashboard">
                      <span className="relative z-10 flex items-center">
                        <Camera className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        Go to Identification Dashboard
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10 px-6 sm:px-8 py-6 hover:border-leaflens-green-dark transition-all duration-300 min-h-[44px] min-w-[44px] group"
                  >
                    <Link to="/resources">
                      <span className="flex items-center">
                        <TreePine className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                        Explore Resources
                      </span>
                    </Link>
                  </Button>
                </div>
              </SignedOut>

              <SignedIn>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6">
                  Welcome back, {user?.firstName || 'Plant Lover'}!
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10">
                  Continue your plant journey with LeafLens. Your personalized dashboard is ready with all your plant identification tools.
                </p>

                <div className="bg-leaflens-green-lightest/30 p-6 rounded-xl max-w-2xl mx-auto mb-8">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-leaflens-green-light/50 flex items-center justify-center">
                      <User className="w-6 h-6 text-leaflens-green-dark" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-medium text-leaflens-green-dark">Your LeafLens Account</h3>
                      <p className="text-xs text-muted-foreground">Access your personalized plant identification tools</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      className="bg-leaflens-green hover:bg-leaflens-green-dark text-white px-6 sm:px-10 py-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden btn-ripple min-h-[44px] min-w-[44px] group"
                    >
                      <Link to="/dashboard">
                        <span className="relative z-10 flex items-center">
                          <Camera className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                          Go to Your Dashboard
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
