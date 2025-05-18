import React from 'react';
import Navbar from '@/components/Navbar';
import PlantDatabase from '@/components/PlantDatabase';
import Footer from '@/components/Footer';

const DatabasePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-10 pb-6 px-6 bg-leaflens-green/5">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Plant Database</h1>
          <p className="text-muted-foreground max-w-3xl">
            Explore our comprehensive collection of plant species with detailed information about care requirements, 
            growth patterns, and more. Use the search and filter options to find the perfect plants for your space.
          </p>
        </div>
      </div>
      
      <PlantDatabase />
      
      <Footer />
    </div>
  );
};

export default DatabasePage;
