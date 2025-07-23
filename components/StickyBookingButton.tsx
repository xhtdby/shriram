'use client';

import { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function StickyBookingButton() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-hospital-green to-hospital-blue text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Calendar className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">Book Your Appointment</h3>
            <p className="text-sm text-white/90">Choose your preferred doctor and time</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <button
            onClick={() => router.push('/doctors')}
            className="bg-white text-hospital-green px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Browse Doctors
          </button>
          
          <button
            onClick={() => router.push('/make-appointment')}
            className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors border border-white/30"
          >
            Calendar Booking
          </button>
          
          <button
            onClick={() => router.push('/book-appointment')}
            className="bg-hospital-gold text-hospital-green px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            Quick Book
          </button>
          
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
