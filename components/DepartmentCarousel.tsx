'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getDepartments } from '@/app/data';
import Link from 'next/link';
import 'keen-slider/keen-slider.min.css';

// Department icons mapping
const departmentIcons: { [key: string]: string } = {
  'General Medicine': '🩺',
  'Cardiology': '❤️',
  'Orthopedics': '🦴',
  'Gynecology': '👩‍⚕️',
  'Pediatrics': '👶',
  'Neurology': '🧠',
  'Ophthalmology': '👁️',
  'ENT': '👂',
  'Dermatology': '✨',
  'Psychiatry': '🧘',
  'Urology': '💧',
  'Anesthesia': '💤',
  'Radiology': '📱',
  'Pathology': '🔬',
  'Emergency': '🚨'
};

export default function DepartmentCarousel() {
  const departments = getDepartments(); // Show first 8 departments
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: {
      perView: 1.2,
      spacing: 24,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 1.8, spacing: 24 },
      },
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 32 },
      },
      '(min-width: 1280px)': {
        slides: { perView: 3.5, spacing: 32 },
      },
      '(min-width: 1536px)': {
        slides: { perView: 4, spacing: 32 },
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

  return (
    <div className="relative w-full">
      <div ref={sliderRef} className={`keen-slider transition-opacity duration-500 ${!loaded ? 'opacity-0' : 'opacity-100'}`}>
        {departments.map((dept, index) => (
          <div
            key={dept.id}
            className="keen-slider__slide"
          >
            <motion.div
              className="h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.3) }}
            >
              <Link href={`/departments/${dept.slug}`}>
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  {/* Header with icon and gradient */}
                <div className="relative h-24 bg-gradient-to-br from-hospital-green to-hospital-blue p-6 flex items-center">
                  <div className="text-4xl mr-4">
                    {departmentIcons[dept.name] || '🏥'}
                  </div>
                  <div className="text-white">
                    <h3 className="font-bold text-lg line-clamp-1 group-hover:scale-105 transition-transform">
                      {dept.name}
                    </h3>
                    <p className="text-sm opacity-90">
                      {dept.doctors?.length || 0} Specialists
                    </p>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-2 right-6 w-4 h-4 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  {/* Features/Services */}
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="w-2 h-2 bg-hospital-green rounded-full mr-2"></div>
                      Expert Consultation
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="w-2 h-2 bg-hospital-blue rounded-full mr-2"></div>
                      Advanced Diagnostics
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <div className="w-2 h-2 bg-hospital-gold rounded-full mr-2"></div>
                      24/7 Emergency Care
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-hospital-green font-semibold text-sm group-hover:text-hospital-green-dark transition-colors">
                      Learn More →
                    </span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-hospital-green/60 rounded-full group-hover:bg-hospital-green transition-colors"></div>
                      <div className="w-1 h-1 bg-hospital-blue/60 rounded-full group-hover:bg-hospital-blue transition-colors"></div>
                      <div className="w-1 h-1 bg-hospital-gold/60 rounded-full group-hover:bg-hospital-gold transition-colors"></div>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      {loaded && instanceRef.current && departments.length > 3 && (
        <>
          <button
            onClick={(e: any) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-hospital-green focus-visible:ring-opacity-70"
            aria-label="Previous departments"
          >
            <ChevronLeft className="w-5 h-5 text-hospital-green" />
          </button>
          <button
            onClick={(e: any) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl p-3 rounded-full transition-all duration-200 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-hospital-green focus-visible:ring-opacity-70"
            aria-label="Next departments"
          >
            <ChevronRight className="w-5 h-5 text-hospital-green" />
          </button>
        </>
      )}

      {/* Slide indicators */}
      {loaded && instanceRef.current && departments.length > 3 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(departments.length / 3) }, (_, idx) => (
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
              aria-label={`Go to slide group ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
