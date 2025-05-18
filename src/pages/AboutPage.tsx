
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Leaf, TreePine } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-white to-leaflens-green/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-leaflens-green/10 text-leaflens-green-dark font-medium">
                Our Story
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                About <span className="text-leaflens-green">LeafLens</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                LeafLens was created by a team of plant enthusiasts and technologists with a shared vision: to make plant identification and care accessible to everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to bridge the gap between technology and nature, helping people identify, understand, and care for the plants in their lives.
              </p>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 overflow-hidden rounded-full group">
                <img
                  src="/images/about/hero-image.jpg"
                  alt="Plant care and monitoring"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-leaflens-yellow/20 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-leaflens-green/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-leaflens-green/10 text-center hover:shadow-md transition-shadow hover-lift">
              <div className="w-16 h-16 bg-leaflens-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group">
                <Leaf className="h-8 w-8 text-leaflens-green-dark transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-leaflens-green-dark">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe plant knowledge should be accessible to everyone, regardless of experience level or background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-leaflens-green/10 text-center hover:shadow-md transition-shadow hover-lift">
              <div className="w-16 h-16 bg-leaflens-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group">
                <Leaf className="h-8 w-8 text-leaflens-green-dark transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-leaflens-green-dark">Accuracy</h3>
              <p className="text-muted-foreground">
                We strive for precision in our plant identification and care recommendations, backed by botanical science.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-leaflens-green/10 text-center hover:shadow-md transition-shadow hover-lift">
              <div className="w-16 h-16 bg-leaflens-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group">
                <Leaf className="h-8 w-8 text-leaflens-green-dark transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-leaflens-green-dark">Environmental Stewardship</h3>
              <p className="text-muted-foreground">
                We promote sustainable plant care practices and foster a deeper appreciation for the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 px-6 bg-leaflens-green/5">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-leaflens-green/10 overflow-hidden group hover:shadow-md transition-shadow hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about/team-member-1.jpg"
                  alt="Jane Doe - Founder & Botanist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-1 text-leaflens-green-dark">Jane Doe</h3>
                <p className="text-sm text-leaflens-green mb-3">Founder & Botanist</p>
                <p className="text-sm text-muted-foreground">
                  Plant enthusiast with over 10 years of experience in botanical research.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-leaflens-green/10 overflow-hidden group hover:shadow-md transition-shadow hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about/team-member-2.jpg"
                  alt="John Smith - CTO & AI Specialist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-1 text-leaflens-green-dark">John Smith</h3>
                <p className="text-sm text-leaflens-green mb-3">CTO & AI Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Expert in machine learning and computer vision for plant identification.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-leaflens-green/10 overflow-hidden group hover:shadow-md transition-shadow hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about/team-member-3.jpg"
                  alt="Maria Garcia - Plant Care Specialist"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-1 text-leaflens-green-dark">Maria Garcia</h3>
                <p className="text-sm text-leaflens-green mb-3">Plant Care Specialist</p>
                <p className="text-sm text-muted-foreground">
                  Certified horticulturist who develops our plant care recommendations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-leaflens-green/10 overflow-hidden group hover:shadow-md transition-shadow hover-lift">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/about/team-member-4.jpg"
                  alt="James Wilson - UX Designer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-semibold mb-1 text-leaflens-green-dark">James Wilson</h3>
                <p className="text-sm text-leaflens-green mb-3">UX Designer</p>
                <p className="text-sm text-muted-foreground">
                  Creates the intuitive user experience that makes LeafLens easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl bg-white rounded-2xl shadow-md border border-leaflens-green/10 p-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-center">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-8">
            Have questions or feedback? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>Email: contact@leaflens.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Botanical Garden St<br/>Plantville, CA 94123</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-leaflens-green/10 flex items-center justify-center">
                  <span className="text-leaflens-green-dark">FB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-leaflens-green/10 flex items-center justify-center">
                  <span className="text-leaflens-green-dark">IG</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-leaflens-green/10 flex items-center justify-center">
                  <span className="text-leaflens-green-dark">TW</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-leaflens-green/10 flex items-center justify-center">
                  <span className="text-leaflens-green-dark">YT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
