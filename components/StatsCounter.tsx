'use client';
import { useState, useEffect } from 'react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function Stat({ value, label, suffix = '+' }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-')}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [label, isVisible]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = value / 60; // 60 frames for 1 second animation
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.min(value, Math.floor(start)));
        if (start >= value) {
          clearInterval(timer);
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div id={`stat-${label.replace(/\s+/g, '-')}`} className="text-center">
      <p className="text-4xl lg:text-5xl font-bold text-hospital-green">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm lg:text-base text-gray-600 font-medium">{label}</p>
    </div>
  );
}
