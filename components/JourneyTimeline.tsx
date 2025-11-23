'use client'

import { motion } from 'framer-motion'
import { Award, Star } from 'lucide-react'

interface TimelineMilestone {
  year: string
  event: string
  isFirst?: boolean
}

const milestones: TimelineMilestone[] = [
  { 
    year: '2011', 
    event: 'Brought first CT Scan to the city', 
    isFirst: true 
  },
  { 
    year: '2012', 
    event: '1st 100-bedded private multispecialty hospital in the region', 
    isFirst: true 
  },
  { 
    year: '2012', 
    event: 'Introduced ICU & Ventilator care in Shahdol for the first time', 
    isFirst: true 
  },
  { 
    year: '2017', 
    event: 'Established first Dialysis unit in the region', 
    isFirst: true 
  },
  { 
    year: '2020', 
    event: '1st Oxygen plant in the region during COVID times', 
    isFirst: true 
  },
  { 
    year: '2024', 
    event: 'First MRI in the city', 
    isFirst: true 
  }
]

export default function JourneyTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line - vertical on all screens, positioned left */}
        <div className="absolute left-8 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-hospital-gold via-hospital-green to-hospital-blue"></div>
        
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative flex items-start"
            >
              {/* Year Badge */}
              <div className={`relative z-10 flex-shrink-0 rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm shadow-xl ${
                milestone.isFirst 
                  ? 'bg-gradient-to-br from-gold-accent to-yellow-500 text-white' 
                  : 'bg-gradient-to-br from-hospital-green to-hospital-blue text-white'
              }`}>
                <div className="text-center">
                  <div className="text-base leading-tight">{milestone.year}</div>
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-8 flex-1 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                milestone.isFirst 
                  ? 'bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-50 border-l-4 border-gold-accent' 
                  : 'bg-white border-l-4 border-hospital-green'
              }`}>
                <div className="flex items-start justify-between">
                  <p className={`font-semibold leading-relaxed pr-4 ${
                    milestone.isFirst ? 'text-gray-800' : 'text-gray-800'
                  }`}>
                    {milestone.event}
                  </p>
                  {milestone.isFirst && (
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gold-accent text-white shadow-md">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        FIRST
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: milestones.length * 0.1, duration: 0.5 }}
          className="relative flex items-center justify-start mt-8 ml-8"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-hospital-green to-hospital-blue rounded-full flex items-center justify-center shadow-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div className="ml-6">
            <p className="font-bold text-hospital-green text-lg">Continuing Our Legacy</p>
            <p className="text-gray-600 text-sm">Leading healthcare innovation in Central India</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
