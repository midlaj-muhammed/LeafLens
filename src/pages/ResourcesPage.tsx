
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Book, Image, Database } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-leaflens-green/5">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Plant Care Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our collection of guides, articles, and resources to help you take better care of your plants.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="bg-white rounded-xl shadow-md border border-leaflens-green/10 overflow-hidden hover:shadow-lg transition-shadow hover-lift">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/resources/plant-care-guide.jpg"
                  alt="Plant Care Guide"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-full p-2">
                  <Book className="h-6 w-6 text-leaflens-green-dark" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Beginner's Guide to Houseplants</h3>
                <p className="text-muted-foreground mb-4">Learn the basics of indoor plant care, from watering to light requirements.</p>
                <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white transition-all duration-300 btn-ripple">
                  Read Guide
                </Button>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white rounded-xl shadow-md border border-leaflens-green/10 overflow-hidden hover:shadow-lg transition-shadow hover-lift">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/resources/seasonal-calendar.jpg"
                  alt="Seasonal Plant Care"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-full p-2">
                  <Image className="h-6 w-6 text-leaflens-green-dark" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Seasonal Care Calendar</h3>
                <p className="text-muted-foreground mb-4">Monthly tips and tasks to keep your plants healthy throughout the year.</p>
                <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white transition-all duration-300 btn-ripple">
                  View Calendar
                </Button>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white rounded-xl shadow-md border border-leaflens-green/10 overflow-hidden hover:shadow-lg transition-shadow hover-lift">
              <div className="h-48 relative overflow-hidden">
                <img
                  src="/images/resources/plant-troubleshooting.jpg"
                  alt="Plant Troubleshooting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 rounded-full p-2">
                  <Database className="h-6 w-6 text-leaflens-green-dark" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Common Plant Problems</h3>
                <p className="text-muted-foreground mb-4">Diagnose and solve common issues like yellowing leaves, pests, and diseases.</p>
                <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white transition-all duration-300 btn-ripple">
                  Troubleshoot
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Resources Section */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Resource Item */}
              <div className="p-6 bg-white rounded-lg shadow-sm border border-leaflens-green/10 flex gap-4 items-start hover:shadow-md transition-shadow hover-lift">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/resources/plant-care-guide.jpg"
                    alt="Plant Propagation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-leaflens-green-dark">Plant Propagation Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">Learn different methods to multiply your plant collection.</p>
                  <Button variant="link" className="text-leaflens-green p-0 h-auto hover:text-leaflens-green-dark transition-colors">Read Article</Button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-leaflens-green/10 flex gap-4 items-start hover:shadow-md transition-shadow hover-lift">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/resources/seasonal-calendar.jpg"
                    alt="Sustainable Gardening"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-leaflens-green-dark">Sustainable Gardening</h3>
                  <p className="text-sm text-muted-foreground mb-3">Eco-friendly practices for a greener garden.</p>
                  <Button variant="link" className="text-leaflens-green p-0 h-auto hover:text-leaflens-green-dark transition-colors">Read Article</Button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-leaflens-green/10 flex gap-4 items-start hover:shadow-md transition-shadow hover-lift">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/resources/plant-troubleshooting.jpg"
                    alt="Indoor Plants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-leaflens-green-dark">Indoor Plants for Air Purification</h3>
                  <p className="text-sm text-muted-foreground mb-3">Best plants for improving indoor air quality.</p>
                  <Button variant="link" className="text-leaflens-green p-0 h-auto hover:text-leaflens-green-dark transition-colors">Read Article</Button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-sm border border-leaflens-green/10 flex gap-4 items-start hover:shadow-md transition-shadow hover-lift">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/resources/plant-care-guide.jpg"
                    alt="Container Gardening"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1 text-leaflens-green-dark">Container Gardening Tips</h3>
                  <p className="text-sm text-muted-foreground mb-3">Make the most of your space with potted plants.</p>
                  <Button variant="link" className="text-leaflens-green p-0 h-auto hover:text-leaflens-green-dark transition-colors">Read Article</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-6 bg-leaflens-green/5">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Free Plant Care Guides</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Download our free plant care guides and keep them handy for reference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-leaflens-green hover:bg-leaflens-green-dark text-white">
              Beginner's Plant Care Guide
            </Button>
            <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white">
              Advanced Care Techniques
            </Button>
            <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white">
              Seasonal Care Calendar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
