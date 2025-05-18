
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "relative group p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-leaflens-green/10 hover:shadow-lg transition-all duration-300 hover:border-leaflens-green/30 hover-lift animate-fade-in",
        className
      )}
    >
      {/* Animated icon container */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-leaflens-green-lightest flex items-center justify-center mb-4 sm:mb-5 text-leaflens-green-dark group-hover:bg-leaflens-green-light group-hover:text-leaflens-green-darkest transition-colors duration-300 group-hover:animate-pulse-green min-w-[44px] min-h-[44px]">
        <div className="transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3 group-hover:text-leaflens-green-dark transition-colors duration-300">{title}</h3>

      <p className="text-xs sm:text-sm text-muted-foreground">{description}</p>

      {/* Decorative elements - hidden on smallest screens */}
      <div className="absolute top-2 right-2 w-16 sm:w-24 h-16 sm:h-24 bg-leaflens-green/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-leaflens-green-lightest/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

      {/* Subtle leaf decoration - hidden on smallest screens */}
      <div className="absolute bottom-3 right-3 w-6 sm:w-8 h-6 sm:h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500 hidden sm:block">
        <svg viewBox="0 0 100 100" className="w-full h-full text-leaflens-green-dark animate-leaf-sway">
          <path d="M50,10 C30,15 20,40 20,50 C20,75 50,90 50,90 C50,90 80,75 80,50 C80,25 70,15 50,10 Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default FeatureCard;
