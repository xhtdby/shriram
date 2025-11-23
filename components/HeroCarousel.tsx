'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { hospitalInfo } from '@/app/data';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/images/hero-care.jpg',
    title: 'World-Class Care, Local Accessibility',
    subtitle: 'Excellence in Medical Care',
    description: 'Providing exceptional healthcare services with compassion, integrity, and cutting-edge medical technology right here in Shahdol.',
    cta: {
      text: 'Book Appointment',
      href: '/book-appointment'
    }
  },
  {
    id: 2,
    image: '/images/hero-campus.jpg', 
    title: '24/7 Emergency Services',
    subtitle: 'Always Here When You Need Us',
    description: 'Round-the-clock emergency care with our expert medical team and state-of-the-art facilities.',
    cta: {
      text: 'Book Appointment',
      href: '/book-appointment'
    }
  },
  {
    id: 3,
    image: '/images/hero-tech.jpg',
    title: 'Advanced Medical Technology',
    subtitle: 'First in Shahdol Region',
    description: 'Pioneers in bringing CT Scan (2011), Dialysis (2017), Oxygen Plant (2020), and MRI (2024) to the city.',
    cta: {
      text: 'Book Appointment',
      href: '/book-appointment'
    }
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden p-0 m-0">
      {/* Fixed Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hospital-exterior.jpg"
          alt="Shriram Hospital"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Base overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
      </div>

      {/* Carousel Content with opacity */}
      <div className="relative z-10 h-full">
        {/* Background Images with reduced opacity for carousel effect */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              priority={currentSlide === 0}
              className="object-cover mix-blend-overlay"
              sizes="100vw"
            /> */}
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-20 flex items-center h-full">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
              >
                <motion.p 
                  className="text-hospital-gold text-lg font-semibold mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {hospitalInfo.name}
                </motion.p>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {currentSlideData.title}
                </motion.h1>
                
                <motion.h2 
                  className="text-xl lg:text-2xl font-medium mb-6 text-hospital-green-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {currentSlideData.subtitle}
                </motion.h2>
                
                <motion.p 
                  className="text-lg mb-8 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {currentSlideData.description}
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <Link
                    href={currentSlideData.cta.href}
                    className="inline-block bg-gradient-to-r from-hospital-blue to-hospital-blue-dark hover:from-hospital-blue-dark hover:to-hospital-blue text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    {currentSlideData.cta.text}
                  </Link>
                  <Link
                    href="/departments"
                    className="inline-block bg-white hover:bg-gray-100 text-hospital-blue px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  >
                    View Departments
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-hospital-gold focus-visible:ring-opacity-70 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <button
            onClick={toggleAutoPlay}
            className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-hospital-gold focus-visible:ring-opacity-70"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-hospital-gold focus-visible:ring-opacity-70"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all focus-visible:ring-2 focus-visible:ring-hospital-gold focus-visible:ring-opacity-70"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20 z-20">
        <motion.div
          className="h-full bg-hospital-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: isAutoPlaying ? 6 : 0, 
            ease: "linear",
            repeat: isAutoPlaying ? Infinity : 0 
          }}
          key={`progress-${currentSlide}-${isAutoPlaying}`}
        />
      </div>
    </section>
  );
}
