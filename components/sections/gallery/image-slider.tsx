"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageSliderProps {
  interval?: number;
  autoPlay?: boolean;
}

const images = [
  "/images/test.jpeg",
  "/images/test.jpeg",
  "/images/test.jpeg",
  "/images/test.jpeg",
  "/images/test.jpeg",
];

export function ImageSlider({
  interval = 2000,
  autoPlay = true,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  // Handle automatic sliding
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, goToNext]);

  // Pause auto-sliding when user interacts with controls
  const handleUserInteraction = useCallback(() => {
    setIsPaused(true);

    // Resume auto-sliding after 5 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative overflow-hidden shadow-lg rounded-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image container */}
      <div className="relative h-64 sm:h-80 md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
        onClick={() => {
          handleUserInteraction();
          goToNext();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full"
        onClick={() => {
          handleUserInteraction();
          goToPrevious();
        }}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-gray-200/30 backdrop-blur-2xl p-2 rounded-md">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => {
              handleUserInteraction();
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10" id="classes" />
    </div>
  );
}
