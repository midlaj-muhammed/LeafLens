
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth
} from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-leaflens-green-dark font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-leaflens-green-dark after:rounded-full"
      : "text-foreground hover:text-leaflens-green transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-leaflens-green after:rounded-full hover:after:w-full after:transition-all after:duration-300";
  };

  return (
    <nav className={`w-full py-3 sm:py-4 px-4 sm:px-6 md:px-10 flex items-center justify-between fixed top-0 z-50 border-b transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-leaflens-green/10' : 'bg-white/90 border-transparent'
    } animate-fade-in`}>
      <Link to="/" className="flex items-center gap-2 group">
        <div className="relative overflow-hidden rounded-full">
          <img
            src="/logo.svg"
            alt="LeafLens Logo"
            className="h-9 sm:h-11 w-auto transition-transform duration-500 group-hover:scale-110"
            width="44"
            height="44"
          />
          <div className="absolute inset-0 bg-leaflens-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
        </div>
        <span className="text-2xl sm:text-3xl font-serif font-bold">
          <span className="text-leaflens-green-darkest group-hover:text-leaflens-green-dark transition-colors duration-300">Leaf</span>
          <span className="text-leaflens-green group-hover:text-leaflens-green-light transition-colors duration-300">Lens</span>
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        <Link to="/" className={isActive('/')}>Home</Link>
        <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
        <Link to="/database" className={isActive('/database')}>Plant Database</Link>
        <Link to="/resources" className={isActive('/resources')}>Resources</Link>
        <Link to="/about" className={isActive('/about')}>About</Link>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <SignedOut>
          <div className="hidden md:flex items-center gap-2">
            <SignInButton mode="modal">
              <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10">
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-leaflens-green hover:bg-leaflens-green-dark text-white transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden btn-ripple">
                Sign Up
              </Button>
            </SignUpButton>
          </div>
          <div className="md:hidden">
            <Button
              asChild
              className="bg-leaflens-green hover:bg-leaflens-green-dark text-white transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden btn-ripple h-10 px-3 sm:px-4 min-w-[44px] text-sm sm:text-base"
            >
              <Link to="/dashboard">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            </Button>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="hidden md:block">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  userButtonAvatarBox: "border-2 border-leaflens-green hover:border-leaflens-green-dark transition-colors",
                  userButtonTrigger: "focus:shadow-outline-leaflens-green"
                }
              }}
            />
          </div>
          <div className="md:hidden">
            <Button
              asChild
              className="bg-leaflens-green hover:bg-leaflens-green-dark text-white transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden btn-ripple h-10 px-3 sm:px-4 min-w-[44px] text-sm sm:text-base"
            >
              <Link to="/dashboard">
                <span className="relative z-10">Dashboard</span>
                <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </Link>
            </Button>
          </div>
        </SignedIn>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center h-10 w-10 min-w-[44px] min-h-[44px] rounded-md text-leaflens-green-dark hover:bg-leaflens-green/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMenuOpen(false)}></div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col`}>
        <div className="flex justify-between items-center p-4 border-b border-leaflens-green/10">
          <span className="text-xl font-serif font-bold text-leaflens-green-dark">Menu</span>
          <button
            className="h-10 w-10 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md text-leaflens-green-dark hover:bg-leaflens-green/10 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-4 gap-4">
          <Link
            to="/"
            className={`py-3 px-4 rounded-md hover:bg-leaflens-green/10 transition-colors ${location.pathname === '/' ? 'bg-leaflens-green/10 text-leaflens-green-dark font-medium' : ''}`}
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className={`py-3 px-4 rounded-md hover:bg-leaflens-green/10 transition-colors ${location.pathname === '/dashboard' ? 'bg-leaflens-green/10 text-leaflens-green-dark font-medium' : ''}`}
          >
            Dashboard
          </Link>
          <Link
            to="/database"
            className={`py-3 px-4 rounded-md hover:bg-leaflens-green/10 transition-colors ${location.pathname === '/database' ? 'bg-leaflens-green/10 text-leaflens-green-dark font-medium' : ''}`}
          >
            Plant Database
          </Link>
          <Link
            to="/resources"
            className={`py-3 px-4 rounded-md hover:bg-leaflens-green/10 transition-colors ${location.pathname === '/resources' ? 'bg-leaflens-green/10 text-leaflens-green-dark font-medium' : ''}`}
          >
            Resources
          </Link>
          <Link
            to="/about"
            className={`py-3 px-4 rounded-md hover:bg-leaflens-green/10 transition-colors ${location.pathname === '/about' ? 'bg-leaflens-green/10 text-leaflens-green-dark font-medium' : ''}`}
          >
            About
          </Link>
        </div>
        <div className="mt-auto p-4 border-t border-leaflens-green/10">
          <SignedOut>
            <div className="flex flex-col gap-2">
              <SignInButton mode="modal">
                <Button variant="outline" className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green/10 w-full">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="bg-leaflens-green hover:bg-leaflens-green-dark text-white transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden btn-ripple w-full">
                  Sign Up
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex flex-col gap-2">
              <Button
                asChild
                className="bg-leaflens-green hover:bg-leaflens-green-dark text-white transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden btn-ripple w-full h-12"
              >
                <Link to="/dashboard">
                  <span className="relative z-10">Go to Dashboard</span>
                  <span className="absolute inset-0 bg-leaflens-green-darker opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </Link>
              </Button>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "border-2 border-leaflens-green hover:border-leaflens-green-dark transition-colors",
                      userButtonTrigger: "focus:shadow-outline-leaflens-green"
                    }
                  }}
                />
                <span className="text-sm text-muted-foreground">Your Account</span>
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
