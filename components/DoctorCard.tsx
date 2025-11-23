'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Award, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface DoctorCardProps {
  id: number
  slug: string
  fullName: string
  specialization: string
  qualifications?: string
  image?: string
  experience?: string
  consultationTime?: string
  consultationFee?: string | number
  isChief?: boolean
  departmentName?: string
  availableDays?: string[]
}

export default function DoctorCard({
  slug,
  fullName,
  specialization,
  qualifications,
  image = '/images/doctors/placeholder-doctor.jpg',
  experience,
  consultationTime,
  consultationFee,
  isChief,
  departmentName,
  availableDays
}: DoctorCardProps) {
  
  // Format fee - handle both string ("₹300") and number (300) formats
  const formatFee = (fee: string | number | undefined) => {
    if (!fee) return '₹300'
    if (typeof fee === 'number') return `₹${fee}`
    if (fee.startsWith('₹')) return fee
    return `₹${fee}`
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
    >
      {/* Doctor Image */}
      <div className="relative h-64 bg-gradient-to-br from-hospital-blue/10 to-hospital-green/10 overflow-hidden">
        <Image
          src={image}
          alt={fullName}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        {isChief && (
          <div className="absolute top-4 left-4 bg-hospital-gold text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-lg">
            <Award className="w-3 h-3 mr-1" />
            Director
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <p className="text-white text-sm font-medium">{departmentName || specialization}</p>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-hospital-green transition-colors">
          {fullName}
        </h3>

        {/* Qualifications */}
        {qualifications && (
          <p className="text-hospital-blue font-semibold text-sm mb-3">
            {qualifications}
          </p>
        )}

        {/* Specialization */}
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {specialization}
        </p>

        {/* Experience */}
        {experience && (
          <div className="flex items-center text-gray-700 mb-2 text-sm">
            <Award className="w-4 h-4 mr-2 text-hospital-green flex-shrink-0" />
            <span><strong>Experience:</strong> {experience}</span>
          </div>
        )}

        {/* Consultation Time */}
        {consultationTime && (
          <div className="flex items-center text-gray-700 mb-2 text-sm">
            <Clock className="w-4 h-4 mr-2 text-hospital-blue flex-shrink-0" />
            <span><strong>Timing:</strong> {consultationTime}</span>
          </div>
        )}

        {/* Consultation Fee */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500 mb-1">Consultation Fee</p>
            <p className="text-2xl font-bold text-hospital-green">
              {formatFee(consultationFee)}
            </p>
          </div>
          <Link
            href={`/doctors/${slug}`}
            className="inline-flex items-center px-4 py-2 bg-primary-gradient text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all group"
          >
            View Profile
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Available Days (Optional) */}
        {availableDays && availableDays.length > 0 && availableDays[0] !== 'By Appointment' && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-start text-gray-700 text-xs">
              <Calendar className="w-3 h-3 mr-2 text-hospital-gold flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block mb-1">Available Days:</strong>
                <p className="text-gray-600">{availableDays.join(', ')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
