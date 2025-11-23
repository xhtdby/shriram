'use client'

import { getDepartments, hospitalInfo, getDoctorBySlug } from '@/app/data'
import { useState, FormEvent, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, Phone, Mail, MapPin, FileText, AlertCircle, CheckCircle, ShoppingCart, ArrowLeft, Shield, Lock } from 'lucide-react'
import PaymentInterface from '@/components/PaymentInterface'
import { useBasket } from '@/contexts/BasketContext'

function BookingFormComponent() {
  const departments = getDepartments()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { addToBasket, basketItems, getTotalAmount } = useBasket()
  
  // Get doctor from URL parameters
  const doctorSlug = searchParams.get('doctor')
  const preselectedDoctor = doctorSlug ? getDoctorBySlug(doctorSlug) : null
  
  // Form state with auto-filled doctor information
  const [formData, setFormData] = useState({
    patientName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    department: searchParams.get('department') || preselectedDoctor?.departmentId || '',
    doctor: searchParams.get('doctor') || preselectedDoctor?.fullName || '',
    doctorId: preselectedDoctor?.id || '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    urgency: 'normal',
    previousPatient: false,
    medicalHistory: '',
    currentMedications: '',
    allergies: ''
  })
  
  const [currentStep, setCurrentStep] = useState<'form' | 'payment' | 'success'>('form')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [paymentItems, setPaymentItems] = useState<any[]>([])
  const [transactionId, setTransactionId] = useState('')
  const [privacyConsent, setPrivacyConsent] = useState(false)
  const [termsConsent, setTermsConsent] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'validating' | 'processing' | 'confirmed'>('idle')

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ]

  // Get available doctors for selected department
  const availableDoctors = formData.department 
    ? departments.find(d => d.name === formData.department)?.doctors || []
    : []

  // Generate next 30 days for date selection
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date.toISOString().split('T')[0])
      }
    }
    return dates
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.age) newErrors.age = 'Age is required'
    if (!formData.gender) newErrors.gender = 'Gender is required'
    if (!formData.department) newErrors.department = 'Department is required'
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required'
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required'
    if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required'
    
    // Consent validation
    if (!privacyConsent) newErrors.privacyConsent = 'Privacy consent is required'
    if (!termsConsent) newErrors.termsConsent = 'Terms acceptance is required'
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    // Step 1: Validate
    setSubmissionStatus('validating')
    await new Promise(resolve => setTimeout(resolve, 800)) // Show validation state
    
    if (!validateForm()) {
      setSubmissionStatus('idle')
      return
    }

    // Step 2: Process
    setSubmissionStatus('processing')
    await new Promise(resolve => setTimeout(resolve, 1200)) // Simulate processing

    // Calculate consultation fee based on urgency and doctor
    const selectedDoctor = availableDoctors.find(d => `${d.firstName} ${d.lastName}` === formData.doctor)
    const baseFee = selectedDoctor?.consultationFee ? parseInt(selectedDoctor.consultationFee.replace('₹', '')) : 500
    const consultationFee = formData.urgency === 'urgent' ? baseFee + 250 : baseFee

    // Create payment item
    const paymentItem = {
      id: `apt_${Date.now()}`,
      name: 'Doctor Consultation',
      amount: consultationFee,
      type: 'appointment' as const,
      description: `${formData.urgency === 'urgent' ? 'Urgent ' : ''}consultation with ${formData.doctor}`,
      doctor: formData.doctor,
      date: formData.preferredDate,
      time: formData.preferredTime,
      patientInfo: {
        name: formData.patientName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender
      }
    }

    // Step 3: Confirm
    setSubmissionStatus('confirmed')
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setPaymentItems([paymentItem])
    setCurrentStep('payment')
    setSubmissionStatus('idle')
  }

  const handleAddToBasket = () => {
    if (!validateForm()) {
      return
    }

    // Calculate consultation fee based on urgency and doctor
    const selectedDoctor = availableDoctors.find(d => `${d.firstName} ${d.lastName}` === formData.doctor)
    const baseFee = selectedDoctor?.consultationFee ? parseInt(selectedDoctor.consultationFee.replace('₹', '')) : 500
    const consultationFee = formData.urgency === 'urgent' ? baseFee + 250 : baseFee

    // Create basket item
    const basketItem = {
      id: `apt_${Date.now()}_${formData.patientName.replace(/\s+/g, '')}`,
      name: `Consultation - ${formData.doctor}`,
      amount: consultationFee,
      type: 'appointment' as const,
      description: `${formData.urgency === 'urgent' ? 'Urgent ' : ''}consultation with ${formData.doctor}`,
      doctor: formData.doctor,
      doctorId: String(formData.doctorId),
      date: formData.preferredDate,
      time: formData.preferredTime,
      department: typeof formData.department === 'string' ? formData.department : departments[formData.department]?.name || '',
      patientInfo: {
        name: formData.patientName,
        email: formData.email,
        phone: formData.phone,
        age: formData.age,
        gender: formData.gender
      }
    }

    addToBasket(basketItem)
    
    // Redirect to basket page
    router.push('/basket')
  }

  const handlePaymentSuccess = async (txnId: string) => {
    setTransactionId(txnId)
    setIsSubmitting(true)
    
    try {
      // Simulate API call to create appointment after payment
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Store appointment in localStorage
      const appointments = JSON.parse(localStorage.getItem('shriram_appointments') || '[]')
      const newAppointment = {
        id: Date.now(),
        ...formData,
        status: 'confirmed',
        appointmentNumber: `SH${Date.now().toString().slice(-6)}`,
        createdAt: new Date().toISOString(),
        paymentStatus: 'paid',
        transactionId: txnId,
        consultationFee: paymentItems[0]?.amount || 500
      }
      appointments.push(newAppointment)
      localStorage.setItem('shriram_appointments', JSON.stringify(appointments))
      
      setCurrentStep('success')
      setSubmitted(true)
    } catch (error) {
      alert('Appointment booking failed. Please contact support.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePaymentCancel = () => {
    setCurrentStep('form')
    setPaymentItems([])
  }

  // Payment step
  if (currentStep === 'payment') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <button
                onClick={() => setCurrentStep('form')}
                className="flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
              >
                <span>← Back to Appointment Form</span>
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Summary</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patient Information</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Name:</strong> {formData.patientName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Age:</strong> {formData.age}</p>
                    <p><strong>Gender:</strong> {formData.gender}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Appointment Details</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><strong>Department:</strong> {formData.department}</p>
                    <p><strong>Doctor:</strong> {formData.doctor}</p>
                    <p><strong>Date:</strong> {formData.preferredDate}</p>
                    <p><strong>Time:</strong> {formData.preferredTime}</p>
                    <p><strong>Type:</strong> {formData.urgency === 'urgent' ? 'Urgent Consultation' : 'Regular Consultation'}</p>
                  </div>
                </div>
              </div>
            </div>

            <PaymentInterface
              items={paymentItems}
              onSuccess={handlePaymentSuccess}
              onCancel={handlePaymentCancel}
              patientInfo={{
                name: formData.patientName,
                email: formData.email,
                phone: formData.phone
              }}
            />
          </div>
        </div>
      </div>
    )
  }

  if (submitted && currentStep === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Appointment Requested Successfully!</h1>
              <p className="text-gray-600">Your appointment request has been received and is being processed.</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-800 mb-3">Appointment Details:</h3>
              <div className="text-left space-y-2 text-green-700">
                <p><strong>Patient:</strong> {formData.patientName}</p>
                <p><strong>Department:</strong> {formData.department}</p>
                {formData.doctor && <p><strong>Doctor:</strong> Dr. {formData.doctor.replace('_', ' ')}</p>}
                <p><strong>Date:</strong> {new Date(formData.preferredDate).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {formData.preferredTime}</p>
                <p><strong>Contact:</strong> {formData.phone}</p>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>Next Steps:</strong> You will receive a confirmation call within 24 hours. 
                Please arrive 15 minutes before your scheduled time with a valid ID and any relevant medical documents.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    patientName: '', email: '', phone: '', age: '', gender: '',
                    department: '', doctor: '', doctorId: '', preferredDate: '', preferredTime: '',
                    reason: '', urgency: 'normal', previousPatient: false,
                    medicalHistory: '', currentMedications: '', allergies: ''
                  })
                }}
                className="bg-hospital-green text-white px-6 py-3 rounded-lg hover:bg-hospital-green-dark transition-colors"
              >
                Book Another Appointment
              </button>
              <Link 
                href="/" 
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Book an Appointment</h1>
            <p className="text-xl text-hospital-green-light">Schedule your visit with our expert medical team</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              {/* Patient Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <User className="w-6 h-6 mr-2 text-hospital-green" />
                  Patient Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="patientName"
                      value={formData.patientName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.patientName ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter full name"
                    />
                    {errors.patientName && <p className="text-red-500 text-sm mt-1">{errors.patientName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter email address"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter 10-digit phone number"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      min="1"
                      max="120"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Enter age"
                    />
                    {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                  </div>
                </div>
              </div>

              {/* Appointment Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-hospital-green" />
                  Appointment Details
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.department ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                  </div>
                  
                  {availableDoctors.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Doctor (Optional)
                      </label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      >
                        <option value="">Any available doctor</option>
                        {availableDoctors.map(doctor => (
                          <option key={doctor.id} value={`${doctor.firstName}_${doctor.lastName}`}>
                            Dr. {doctor.firstName} {doctor.lastName}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <select
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.preferredDate ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select date</option>
                      {getAvailableDates().map(date => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </option>
                      ))}
                    </select>
                    {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason for Visit *
                    </label>
                    <textarea
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent ${errors.reason ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Please describe your symptoms or reason for visit"
                    />
                    {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent</option>
                      <option value="emergency">Emergency</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Medical History */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-hospital-green" />
                  Medical Information (Optional)
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="previousPatient"
                      checked={formData.previousPatient}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-hospital-green bg-gray-100 border-gray-300 rounded focus:ring-hospital-green focus:ring-2"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">
                      I am a previous patient at Shriram Hospital
                    </label>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Medications
                    </label>
                    <textarea
                      name="currentMedications"
                      value={formData.currentMedications}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="List any current medications or supplements"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Known Allergies
                    </label>
                    <textarea
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="List any known allergies to medications, foods, or other substances"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Relevant Medical History
                    </label>
                    <textarea
                      name="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Any relevant past medical conditions, surgeries, or family history"
                    />
                  </div>
                </div>
              </div>

              {/* Emergency Contact Info */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-1">For Emergency Cases</h3>
                    <p className="text-yellow-700 text-sm">
                      If this is a medical emergency, please call our emergency line immediately at{' '}
                      <a href="tel:07652-248248" className="font-semibold underline">07652-248248</a>{' '}
                      or visit our emergency department directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy & Terms Consent */}
              <div className="mb-8 space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy & Consent
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="privacyConsent"
                        checked={privacyConsent}
                        onChange={(e) => {
                          setPrivacyConsent(e.target.checked)
                          if (errors.privacyConsent) {
                            setErrors(prev => ({ ...prev, privacyConsent: '' }))
                          }
                        }}
                        className="w-5 h-5 text-hospital-green bg-gray-100 border-gray-300 rounded focus:ring-hospital-green focus:ring-2 mt-0.5"
                      />
                      <label htmlFor="privacyConsent" className="ml-3 text-sm text-blue-900">
                        <span className="font-semibold">I consent to data processing</span> - I understand that my personal and medical information will be stored securely and used only for appointment scheduling, medical care, and communication purposes in compliance with applicable privacy regulations (GDPR/Data Protection Act).
                      </label>
                    </div>
                    {errors.privacyConsent && <p className="text-red-500 text-sm ml-8">{errors.privacyConsent}</p>}
                    
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="termsConsent"
                        checked={termsConsent}
                        onChange={(e) => {
                          setTermsConsent(e.target.checked)
                          if (errors.termsConsent) {
                            setErrors(prev => ({ ...prev, termsConsent: '' }))
                          }
                        }}
                        className="w-5 h-5 text-hospital-green bg-gray-100 border-gray-300 rounded focus:ring-hospital-green focus:ring-2 mt-0.5"
                      />
                      <label htmlFor="termsConsent" className="ml-3 text-sm text-blue-900">
                        <span className="font-semibold">I accept the terms</span> - I agree to the hospital&apos;s{' '}
                        <Link href="/patient-rights" className="text-hospital-green underline hover:text-hospital-green/80">
                          patient rights & responsibilities
                        </Link>
                        , cancellation policy (24-hour notice required), and understand that appointment confirmation is subject to doctor availability.
                      </label>
                    </div>
                    {errors.termsConsent && <p className="text-red-500 text-sm ml-8">{errors.termsConsent}</p>}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-xs text-blue-700">
                      <Lock className="w-3 h-3 inline mr-1" />
                      Your data is encrypted and protected. We never share your information with third parties without your explicit consent.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleAddToBasket}
                  disabled={submissionStatus !== 'idle'}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {submissionStatus !== 'idle' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Add to Basket
                    </>
                  )}
                </button>
                
                <button
                  type="submit"
                  disabled={submissionStatus !== 'idle'}
                  className="bg-hospital-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-hospital-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  {submissionStatus === 'validating' && (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Validating Information...
                    </>
                  )}
                  {submissionStatus === 'processing' && (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing Request...
                    </>
                  )}
                  {submissionStatus === 'confirmed' && (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Confirmed! Proceeding...
                    </>
                  )}
                  {submissionStatus === 'idle' && (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Now
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 py-16">
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
  )
}

export default function BookAppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <BookingFormComponent />
    </Suspense>
  )
}
