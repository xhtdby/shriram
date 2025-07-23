'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/app/data';
import 'keen-slider/keen-slider.min.css';

export default function TestimonialsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 32 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
    },
    drag: true,
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const nextSlide = () => {
    instanceRef.current?.next();
  };

  const prevSlide = () => {
    instanceRef.current?.prev();
  };

  return (
    <div className="relative">
      <div ref={sliderRef} className={`keen-slider transition-opacity duration-500 ${!loaded ? 'opacity-0' : 'opacity-100'}`}>
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="keen-slider__slide"
          >
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3) }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col relative overflow-hidden">
                {/* Quote icon background */}
                <div className="absolute top-4 right-4 text-hospital-green/10">
                  <Quote className="w-16 h-16" fill="currentColor" />
                </div>

                {/* Star rating */}
                <div className="flex text-hospital-gold mb-6 relative z-10">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote text */}
                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6 flex-grow relative z-10">
                  <span className="text-2xl text-hospital-green">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-2xl text-hospital-green">&rdquo;</span>
                </blockquote>

                {/* Patient info */}
                <div className="flex items-center relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-hospital-green to-hospital-blue rounded-full flex items-center justify-center mr-4 text-white font-bold text-lg shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-hospital-green text-sm font-medium">Verified Patient</span>
                      <div className="w-1 h-1 bg-hospital-green rounded-full"></div>
                      <span className="text-gray-500 text-sm">Shahdol</span>
                    </div>
                  </div>
                </div>

                {/* Decorative gradient border */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-hospital-green via-hospital-blue to-hospital-gold"></div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-hospital-green focus-visible:ring-opacity-70"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-hospital-green" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-hospital-green focus-visible:ring-opacity-70"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-hospital-green" />
          </button>
        </>
      )}

      {/* Slide indicators */}
      {loaded && instanceRef.current && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const slideIndex = idx * 3;
                instanceRef.current?.moveToIdx(slideIndex);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 3) === idx
                  ? 'bg-hospital-green w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to testimonial group ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Auto-advance indicator */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
          <div className="w-2 h-2 bg-hospital-green rounded-full animate-pulse"></div>
          <span className="text-xs text-gray-600 font-medium">Patient Reviews</span>
        </div>
      </div>
    </div>
  );
}
