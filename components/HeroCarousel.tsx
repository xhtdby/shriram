'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
  { 
    src: '/images/hero-campus.svg', 
    alt: 'Hospital exterior', 
    caption: 'World-class Infrastructure',
    fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3Mzg5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkhvc3BpdGFsIENhbXB1czwvdGV4dD4KPHN2Zz4='
  },
  { 
    src: '/images/hero-care.svg', 
    alt: 'Nurse with patient', 
    caption: 'Compassionate Care',
    fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3Mzg5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkNvbXBhc3Npb25hdGUgQ2FyZTwvdGV4dD4KPHN2Zz4='
  },
  { 
    src: '/images/hero-tech.svg', 
    alt: 'MRI machine', 
    caption: 'Advanced Diagnostics',
    fallback: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjQwMCIgeT0iMzAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3Mzg5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkFkdmFuY2VkIERpYWdub3N0aWNzPC90ZXh0Pgo8L3N2Zz4='
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handleImageError = (slideIndex: number) => {
    setImageError(prev => ({ ...prev, [slideIndex]: true }));
  };

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          fill
          priority={i === 0}
          src={imageError[i] ? slide.fallback : slide.src}
          alt={slide.alt}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          onError={() => handleImageError(i)}
        />
      ))}
      <div className="absolute inset-0 bg-black/50 flex items-end pb-12 px-6 lg:px-16">
        <h1 className="text-white text-3xl lg:text-5xl font-semibold drop-shadow-lg max-w-3xl">
          {slides[index].caption}
        </h1>
      </div>
      
      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
