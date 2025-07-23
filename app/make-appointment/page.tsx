'use client'

import { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getDoctorBySlug, getDepartments, getDoctors, hospitalInfo } from '@/app/data'
import { useBasket } from '@/contexts/BasketContext'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, MapPin, Phone, Mail } from 'lucide-react'

function CalendarBookingComponent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const doctorSlug = searchParams.get('doctor')
  const preselectedDoctor = doctorSlug ? getDoctorBySlug(doctorSlug) : null
  
  const departments = getDepartments()
  const doctors = getDoctors()
  const { addToBasket } = useBasket()
  
  const [selectedDoctor, setSelectedDoctor] = useState(preselectedDoctor || null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

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

  const handleScheduleAppointment = () => {
    if (!selectedDoctor) {
      alert('Please select a doctor.')
      return
    }
    if (!selectedSlot) {
      alert('Please select a time slot.')
      return
    }
    
    const basketItem = {
      id: `appt_${selectedDoctor.id}_${selectedDate.toISOString().split('T')[0]}_${selectedSlot}`,
      name: `Consultation - ${selectedDoctor.fullName}`,
      amount: parseInt(selectedDoctor.consultationFee?.replace('₹', '') || '0'),
      type: 'appointment' as const,
      description: `On ${selectedDate.toLocaleDateString()} at ${selectedSlot}`,
      doctor: selectedDoctor.fullName,
      doctorId: String(selectedDoctor.id),
      date: selectedDate.toISOString().split('T')[0],
      time: selectedSlot,
      department: selectedDoctor.specialization
    }
    
    addToBasket(basketItem)
    
    // Redirect to basket
    router.push('/basket')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Calendar Booking</h1>
            <p className="text-xl text-hospital-green-light">Select your preferred doctor and schedule</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-hospital-green hover:text-hospital-green-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Doctor Selection */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <User className="w-6 h-6 mr-2 text-hospital-green" />
              Select Doctor
            </h2>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {doctors.map((doctor) => (
                <div 
                  key={doctor.id}
                  onClick={() => setSelectedDoctor(doctor)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDoctor?.id === doctor.id
                      ? 'border-hospital-green bg-hospital-green/5'
                      : 'border-gray-200 hover:border-hospital-green/50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{doctor.fullName}</h3>
                      <p className="text-gray-600 text-sm">{doctor.specialization}</p>
                      <p className="text-gray-500 text-sm">{doctor.experience}</p>
                    </div>
                    <p className="text-hospital-green font-bold">{doctor.consultationFee}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar and Booking */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-hospital-green" />
              Schedule Appointment
            </h2>

            {selectedDoctor ? (
              <div>
                {/* Selected Doctor Info */}
                <div className="bg-hospital-green/5 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold">{selectedDoctor.fullName}</h3>
                  <p className="text-gray-600 text-sm">{selectedDoctor.specialization}</p>
                  <p className="text-hospital-green font-bold">{selectedDoctor.consultationFee}</p>
                </div>

                {/* Date Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Select Date</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {dates.map((date) => (
                      <button
                        key={date.toISOString()}
                        onClick={() => {
                          setSelectedDate(date)
                          setSelectedSlot(null)
                        }}
                        className={`p-3 rounded-lg border text-center transition-colors ${
                          selectedDate.toDateString() === date.toDateString()
                            ? 'bg-hospital-green text-white border-hospital-green'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-sm font-medium">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {date.getDate()}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Selection */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Select Time</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => (
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

                {/* Book Button */}
                <button 
                  onClick={handleScheduleAppointment}
                  disabled={!selectedSlot}
                  className="w-full bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Add to Basket
                </button>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Please select a doctor to continue</p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <section className="bg-gray-100 py-16 mt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Phone className="w-12 h-12 text-hospital-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600">{hospitalInfo.phone}</p>
                  <p className="text-gray-600">Emergency: {hospitalInfo.ambulance}</p>
                </div>
                <div className="text-center">
                  <Mail className="w-12 h-12 text-hospital-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <p className="text-gray-600">{hospitalInfo.email}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-hospital-green mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Address</h3>
                  <p className="text-gray-600">{hospitalInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function MakeAppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <CalendarBookingComponent />
    </Suspense>
  )
}
