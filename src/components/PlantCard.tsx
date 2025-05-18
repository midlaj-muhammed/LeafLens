
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

interface PlantCardProps {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  careLevel: 'easy' | 'medium' | 'hard';
  sunlight: string;
  water: string;
  onClick?: () => void;
  className?: string;
}

const PlantCard = ({
  id,
  name,
  scientificName,
  image,
  careLevel,
  sunlight,
  water,
  onClick,
  className
}: PlantCardProps) => {
  const careLevelColors = {
    easy: "bg-leaflens-green-lightest text-leaflens-green-darkest",
    medium: "bg-leaflens-yellow/30 text-leaflens-brown",
    hard: "bg-red-100 text-red-800"
  };

  return (
    <div
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden border border-leaflens-green/10 hover:shadow-lg hover:border-leaflens-green/30 transition-all duration-300 hover-lift animate-fade-in",
        className
      )}
    >
      {/* Decorative leaf shape in the corner - hidden on smallest screens */}
      <div className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 bg-leaflens-green-lightest rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-0"></div>

      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" // Add lazy loading for better mobile performance
          width="300"
          height="300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 sm:p-5 relative z-10">
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <div className="transform group-hover:translate-x-0 translate-x-0 transition-transform duration-300 pr-2">
            <h3 className="font-serif font-medium text-base sm:text-lg group-hover:text-leaflens-green-dark transition-colors duration-300 line-clamp-1">{name}</h3>
            <p className="text-xs text-muted-foreground italic line-clamp-1">{scientificName}</p>
          </div>

          <span className={cn(
            "inline-block text-xs px-2 py-1 rounded-full transform group-hover:scale-105 transition-transform duration-300 whitespace-nowrap",
            careLevelColors[careLevel]
          )}>
            {careLevel.charAt(0).toUpperCase() + careLevel.slice(1)} Care
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4 mb-3 sm:mb-4">
          <div className="bg-muted rounded-md p-2 sm:p-2.5 text-xs group-hover:bg-leaflens-green-lightest/50 transition-colors duration-300">
            <span className="block text-muted-foreground">Sunlight</span>
            <span className="font-medium line-clamp-1">{sunlight}</span>
          </div>
          <div className="bg-muted rounded-md p-2 sm:p-2.5 text-xs group-hover:bg-leaflens-green-lightest/50 transition-colors duration-300">
            <span className="block text-muted-foreground">Water</span>
            <span className="font-medium line-clamp-1">{water}</span>
          </div>
        </div>

        <Button
          onClick={onClick}
          variant="outline"
          className="w-full border-leaflens-green hover:bg-leaflens-green hover:text-white transition-all duration-300 relative overflow-hidden btn-ripple group-hover:shadow-sm min-h-[44px]"
        >
          <span className="relative z-10">View Details</span>
          <span className="absolute inset-0 bg-leaflens-green-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
        </Button>
      </div>
    </div>
  );
};

export default PlantCard;
