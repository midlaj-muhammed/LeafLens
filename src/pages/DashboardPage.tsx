
import React from 'react';
import Navbar from '@/components/Navbar';
import PlantIdentifier from '@/components/PlantIdentifier';
import Footer from '@/components/Footer';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="container mx-auto py-12">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Plant Identification Dashboard</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Identify any plant instantly with our AI-powered tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <PlantIdentifier />
            </div>
            
            <div className="bg-leaflens-beige/30 p-8 rounded-xl flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">Recent Identifications</h2>
              <div className="bg-white/60 p-4 rounded-lg mb-4">
                <p className="text-muted-foreground text-sm">Your recent plant identifications will appear here.</p>
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4 mt-6">Tips for Better Results</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">1</span>
                  </div>
                  <p>Take clear, well-lit photos of the plant</p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">2</span>
                  </div>
                  <p>Include close-ups of leaves, flowers, and stems if possible</p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">3</span>
                  </div>
                  <p>For text descriptions, mention color, shape, and unique features</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;
