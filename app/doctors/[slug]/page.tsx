'use client'

import { useState, use } from 'react'
import { getDoctorBySlug, getBlogPosts } from '@/app/data'
import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft, Calendar, User, Tag, Share2, MapPin, GraduationCap, Briefcase, Award, Languages, Star, Clock, Phone
} from 'lucide-react'
import type { Metadata } from 'next'
import PaymentInterface from '@/components/PaymentInterface'

interface Props {
  params: Promise<{ slug: string }>
}

export default function DoctorProfilePage({ params }: Props) {
  const { slug } = use(params)
  const router = useRouter()
  const doctor = getDoctorBySlug(slug)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentItems, setPaymentItems] = useState<any[]>([])

  if (!doctor) {
    notFound()
  }

  const handleScheduleAppointment = () => {
    if (!selectedSlot) {
      alert('Please select a time slot.')
      return
    }
    const paymentItem = {
      id: `appt_${doctor.id}_${selectedDate.toISOString().split('T')[0]}_${selectedSlot}`,
      name: `Appointment with ${doctor.fullName}`,
      amount: parseInt(doctor.consultationFee?.replace('₹', '') || '0'),
      type: 'appointment' as const,
      description: `On ${selectedDate.toLocaleDateString()} at ${selectedSlot}`
    }
    setPaymentItems([paymentItem])
    setShowPayment(true)
  }

  const handlePaymentSuccess = (transactionId: string) => {
    const bookings = JSON.parse(localStorage.getItem('shriram_appointments') || '[]')
    const newBooking = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.fullName,
      amount: paymentItems[0]?.amount,
      transactionId,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
      appointmentDate: selectedDate.toISOString().split('T')[0],
      appointmentSlot: selectedSlot,
      bookingNumber: `APP${Date.now().toString().slice(-6)}`
    }
    bookings.push(newBooking)
    localStorage.setItem('shriram_appointments', JSON.stringify(bookings))
    
    alert(`Appointment booked successfully! Booking ID: ${newBooking.bookingNumber}`)
    setShowPayment(false)
    setPaymentItems([])
  }

  const handlePaymentCancel = () => {
    setShowPayment(false)
    setPaymentItems([])
  }
  
  const handlePayAtHospital = () => {
    if (!selectedSlot) {
      alert('Please select a time slot.')
      return
    }
    const bookings = JSON.parse(localStorage.getItem('shriram_appointments') || '[]')
    const newBooking = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.fullName,
      amount: doctor.consultationFee,
      transactionId: 'PAY_AT_HOSPITAL',
      status: 'pending_payment',
      bookedAt: new Date().toISOString(),
      appointmentDate: selectedDate.toISOString().split('T')[0],
      appointmentSlot: selectedSlot,
      bookingNumber: `APP${Date.now().toString().slice(-6)}`
    }
    bookings.push(newBooking)
    localStorage.setItem('shriram_appointments', JSON.stringify(bookings))
    
    // Redirect to the receipt page
    router.push(`/receipt/${newBooking.id}`)
  }

  if (showPayment) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <button
              onClick={() => setShowPayment(false)}
              className="flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Profile</span>
            </button>
          </div>
          
          <PaymentInterface
            items={paymentItems}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
          />
        </div>
      </div>
    )
  }

  const today = new Date()
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    return date
  })

  const timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Doctors Link */}
        <div className="mb-6">
          <Link 
            href="/doctors" 
            className="inline-flex items-center text-hospital-green hover:text-hospital-green-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            All Doctors
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Doctor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8 flex items-start space-x-6">
              <div className="relative flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.fullName}
                  width={128}
                  height={128}
                  className="rounded-full object-cover object-top border-4 border-hospital-green/20"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-800">{doctor.fullName}</h1>
                    <p className="text-lg text-hospital-blue font-medium">{doctor.specialization}</p>
                    <p className="text-gray-600 mt-1">{doctor.experience} years experience</p>
                  </div>
                  <button className="text-gray-500 hover:text-hospital-green">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
                <div className="mt-4 space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-hospital-green" />
                    <span>{doctor.qualifications}</span>
                  </div>
                  <div className="flex items-center">
                    <Languages className="w-4 h-4 mr-2 text-hospital-green" />
                    <span>English, Hindi</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-hospital-green" />
                    <span>Shriram Hospital, Shahdol</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4">About {doctor.fullName}</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {doctor.bio}
              </p>
            </div>

            {/* Tabs Section */}
            {/* This is a placeholder for more detailed tabs */}
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a href="#" className="border-hospital-green text-hospital-green whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Patient Reviews
                  </a>
                  <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Education & Work
                  </a>
                  <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Memberships
                  </a>
                </nav>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-4">Patient Reviews (1)</h3>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <p className="font-semibold text-gray-800">V. Sharma</p>
                    <p>2 months ago</p>
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-700">
                    Dr. {doctor.fullName.split(' ').pop()} was very professional and explained everything clearly. Highly recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Card */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-md sticky top-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Hospital Visit</h2>
                <p className="text-xl font-bold text-hospital-green">{doctor.consultationFee}</p>
              </div>

              {/* Calendar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <p className="font-semibold">{selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ArrowLeft className="w-5 h-5 rotate-180" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {dates.map(date => (
                    <button 
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-2 rounded-lg transition-colors ${
                        selectedDate.toDateString() === date.toDateString()
                          ? 'bg-hospital-green text-white'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <p className="text-xs">{date.toLocaleDateString('default', { weekday: 'short' })}</p>
                      <p className="font-bold">{date.getDate()}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 flex items-center text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  Afternoon Slots
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2 rounded-lg border text-sm transition-colors ${
                        selectedSlot === slot
                          ? 'bg-hospital-green text-white border-hospital-green'
                          : 'border-gray-300 hover:bg-gray-100'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button 
                  onClick={handleScheduleAppointment}
                  className="w-full bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green-dark transition-colors"
                >
                  Pay Now & Schedule
                </button>
                <button 
                  onClick={handlePayAtHospital}
                  className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Pay at Hospital
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">No additional booking fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
