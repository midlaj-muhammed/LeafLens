
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, TreePine, Leaf } from "lucide-react";
import PlantCard from './PlantCard';
import { plants } from '@/lib/plantData';
import { Link } from 'react-router-dom';
import Container from '@/components/ui/container';
import LoadingSpinner from '@/components/ui/loading-spinner';

interface PlantDatabaseProps {
  limit?: number;
  showViewMore?: boolean;
}

const PlantDatabase: React.FC<PlantDatabaseProps> = ({
  limit,
  showViewMore = false
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Filter plants based on search term and filter criteria
  const filteredPlants = plants.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === "all" || plant.careLevel === filter;

    return matchesSearch && matchesFilter;
  });

  // Limit the number of plants shown if limit is provided
  const displayedPlants = limit ? filteredPlants.slice(0, limit) : filteredPlants;

  // Handle search with loading state
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIsSearching(true);
    setIsLoading(true);

    // Simulate network delay for mobile testing
    setTimeout(() => {
      setSearchTerm(value);
      setIsLoading(false);
      setIsSearching(false);
    }, 300);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20" id="database">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-1 sm:mb-2">Plant Database</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Browse our comprehensive collection of plant species</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto mt-4 md:mt-0">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              {isLoading && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <LoadingSpinner size="sm" />
                </div>
              )}
              <Input
                placeholder="Search plants..."
                value={isSearching ? searchTerm : searchTerm}
                onChange={handleSearch}
                className="pl-10 min-h-[44px]"
                aria-label="Search plants"
              />
            </div>

            <Select value={filter} onValueChange={(value) => {
              setIsLoading(true);
              setTimeout(() => {
                setFilter(value);
                setIsLoading(false);
              }, 300);
            }}>
              <SelectTrigger className="w-full md:w-40 min-h-[44px]">
                <SelectValue placeholder="Filter by care" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plants</SelectItem>
                <SelectItem value="easy">Easy Care</SelectItem>
                <SelectItem value="medium">Medium Care</SelectItem>
                <SelectItem value="hard">Hard Care</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <LoadingSpinner size="lg" text="Loading plants..." />
          </div>
        ) : filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {displayedPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                id={plant.id}
                name={plant.name}
                scientificName={plant.scientificName}
                image={plant.image}
                careLevel={plant.careLevel}
                sunlight={plant.sunlight}
                water={plant.water}
                onClick={() => console.log(`View details for ${plant.name}`)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 md:py-20">
            <div className="mb-4 inline-flex h-16 sm:h-20 w-16 sm:w-20 items-center justify-center rounded-full bg-muted">
              <Leaf className="h-8 sm:h-10 w-8 sm:w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">No plants found</h3>
            <p className="text-sm text-muted-foreground mb-6">Try adjusting your search or filter</p>
            <Button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setSearchTerm("");
                  setFilter("all");
                  setIsLoading(false);
                }, 300);
              }}
              variant="outline"
              className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white min-h-[44px] min-w-[44px]"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {showViewMore && filteredPlants.length > 0 && (
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Button
              asChild
              variant="outline"
              className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white min-h-[44px] min-w-[44px]"
            >
              <Link to="/database">
                View More Plants
              </Link>
            </Button>
          </div>
        )}

        {!limit && filteredPlants.length > 0 && filteredPlants.length < plants.length && (
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <Button
              variant="outline"
              className="border-leaflens-green text-leaflens-green hover:bg-leaflens-green hover:text-white min-h-[44px] min-w-[44px]"
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setSearchTerm("");
                  setFilter("all");
                  setIsLoading(false);
                }, 300);
              }}
            >
              Load More Plants
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default PlantDatabase;
