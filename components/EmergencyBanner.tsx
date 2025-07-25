'use client'

import { Phone, AlertTriangle, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function EmergencyBanner() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isExpanded ? (
          // Collapsed floating button with 24x7 indicator
          <div className="relative">
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse group"
            >
              <AlertTriangle className="w-6 h-6" />
              <span className="sr-only">Emergency Contact</span>
            </button>
            {/* 24x7 indicator */}
            <div className="absolute -top-2 -right-2 bg-yellow-400 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
              24/7
            </div>
          </div>
        ) : (
          // Expanded emergency panel with image
          <div className="bg-red-600 text-white rounded-lg shadow-lg overflow-hidden min-w-[300px] animate-in slide-in-from-bottom-2 duration-300">
            {/* Header with 24x7 service image */}
            <div className="relative h-20 bg-gradient-to-r from-red-700 to-red-600">
              <Image
                src="/images/services/24x7-service.jpg"
                alt="24x7 Emergency Service"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  <div>
                    <span className="font-bold text-sm block">Emergency Contact</span>
                    <span className="text-xs opacity-90">Available 24/7</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white hover:text-red-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-2">
              <a
                href="tel:+91-761-4004200"
                className="flex items-center bg-white text-red-600 px-3 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors text-sm w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Ambulance
              </a>
              <a
                href="tel:+91-761-4004200"
                className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-red-400 transition-colors text-sm w-full"
              >
                <Phone className="w-4 h-4 mr-2" />
                Emergency Line
              </a>
            </div>
            
            <p className="text-xs text-red-100 mt-2 text-center">
              24/7 Emergency Services Available
            </p>
          </div>
        )}
      </div>
    </>
  )
}
