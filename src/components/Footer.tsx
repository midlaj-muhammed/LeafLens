
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border py-8 sm:py-12">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-serif font-bold text-leaflens-green-dark">Leaf<span className="text-leaflens-green">Lens</span></span>
            </Link>
            <p className="mt-3 sm:mt-4 text-muted-foreground text-xs sm:text-sm">
              Plant identification made simple with AI-powered technology.
            </p>
          </div>

          <div className="min-w-[140px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/database"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Plant Database
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Identification Tool
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Care Guides
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-[140px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Plant Care Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-[140px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-leaflens-green transition-colors text-xs sm:text-sm inline-block py-1"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} LeafLens. All rights reserved.
          </p>
          <div className="mt-3 sm:mt-0 flex gap-4 sm:gap-6">
            <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-leaflens-green transition-colors py-1">Privacy Policy</Link>
            <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-leaflens-green transition-colors py-1">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
