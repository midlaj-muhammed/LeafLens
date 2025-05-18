
import React from 'react';
import Navbar from '@/components/Navbar';
import PlantDatabase from '@/components/PlantDatabase';
import PlantIdentifier from '@/components/PlantIdentifier';
import Footer from '@/components/Footer';

const PlantDatabasePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-6">
        <div className="container mx-auto py-12">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Plant Database</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover and identify plants with our comprehensive database and AI-powered identification tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <PlantIdentifier />
            </div>

            <div className="bg-leaflens-beige/30 p-8 rounded-xl flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-semibold mb-4">How Plant Identification Works</h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">1</span>
                  </div>
                  <p>Upload a clear photo of the plant or provide a detailed description</p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">2</span>
                  </div>
                  <p>Our AI-powered system analyzes the image or text using Google Gemini API</p>
                </li>
                <li className="flex gap-3">
                  <div className="bg-leaflens-green-light/30 h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-leaflens-green-dark font-semibold">3</span>
                  </div>
                  <p>Receive accurate plant identification with care instructions</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <PlantDatabase limit={24} />
      </div>
      <Footer />
    </div>
  );
};

export default PlantDatabasePage;
