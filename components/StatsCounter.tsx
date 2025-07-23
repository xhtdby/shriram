'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { hospitalInfo } from '@/app/data';
import { Award, Users, HeartPulse, Bed } from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

function StatItem({ value, label, suffix = '', prefix = '', icon, delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center group"
    >
      {icon && (
        <motion.div
          className="flex justify-center mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-hospital-green text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </motion.div>
      )}
      
      <motion.div
        className="text-3xl lg:text-4xl xl:text-5xl font-headline text-hospital-blue-dark mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </motion.div>
      
      <motion.p
        className="text-gray-600 text-sm lg:text-base font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.6 }}
        viewport={{ once: true }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function StatsCounter() {
  const stats = [
    {
      value: new Date().getFullYear() - 2004, // Years of service
      label: 'Years of Excellence',
      suffix: '+',
      icon: <Award className="w-12 h-12 lg:w-16 lg:h-16" />,
      delay: 0
    },
    {
      value: hospitalInfo.totalStaff,
      label: 'Expert Medical Staff',
      suffix: '+',
      icon: <Users className="w-12 h-12 lg:w-16 lg:h-16" />,
      delay: 0.1
    },
    {
      value: hospitalInfo.patientsServed,
      label: 'Patients Served',
      suffix: '+',
      icon: <HeartPulse className="w-12 h-12 lg:w-16 lg:h-16" />,
      delay: 0.2
    },
    {
      value: hospitalInfo.beds,
      label: 'Patient Beds',
      suffix: '+',
      icon: <Bed className="w-12 h-12 lg:w-16 lg:h-16" />,
      delay: 0.3
    }
  ];

  return (
    <section className="py-section bg-gradient-to-br from-hospital-green-light/10 to-hospital-blue-light/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-headline text-hospital-blue-dark mb-4">
            Healthcare Excellence
            <span className="block text-hospital-green">by the Numbers</span>
          </h2>
          <p className="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
            Trusted by thousands of patients for quality healthcare and compassionate service
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-hospital-green to-hospital-blue rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
