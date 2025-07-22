'use client'

import { testimonials, hospitalInfo } from '@/app/data'
import { Star, MessageSquare, User, Mail, Phone, MapPin, CheckCircle, Calendar } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    patientId: '',
    visitDate: '',
    department: '',
    doctor: '',
    overallRating: 0,
    serviceRating: 0,
    facilityRating: 0,
    staffRating: 0,
    recommendation: '',
    experience: '',
    improvement: '',
    visitType: 'outpatient',
    anonymous: false
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const departments = ['General Medicine', 'Cardiology', 'Orthopedics', 'Pediatrics', 'Gynecology', 'Surgery', 'Emergency', 'Other']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({ ...prev, [category]: rating }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Store feedback in localStorage (in real app, this would be sent to backend)
      const feedbacks = JSON.parse(localStorage.getItem('shriram_feedbacks') || '[]')
      const newFeedback = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'received'
      }
      feedbacks.push(newFeedback)
      localStorage.setItem('shriram_feedbacks', JSON.stringify(feedbacks))
      
      setSubmitted(true)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const StarRating = ({ rating, onRatingChange, label }: { rating: number, onRatingChange: (rating: number) => void, label: string }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRatingChange(star)}
            className="focus:outline-none hover:scale-110 transition-transform"
          >
            <Star
              className={`w-8 h-8 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            />
          </button>
        ))}
        <span className="ml-2 text-sm text-gray-600">
          {rating > 0 && (
            <>({rating}/5 - {rating === 5 ? 'Excellent' : rating === 4 ? 'Good' : rating === 3 ? 'Average' : rating === 2 ? 'Fair' : 'Poor'})</>
          )}
        </span>
      </div>
    </div>
  )

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You for Your Feedback!</h1>
            <p className="text-gray-600 mb-6">
              Your feedback has been received and is very important to us. We use patient feedback to continuously improve our services.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm">
                <strong>Reference ID:</strong> FB{Date.now().toString().slice(-6)}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '', email: '', phone: '', patientId: '', visitDate: '', department: '', doctor: '',
                    overallRating: 0, serviceRating: 0, facilityRating: 0, staffRating: 0,
                    recommendation: '', experience: '', improvement: '', visitType: 'outpatient', anonymous: false
                  })
                }}
                className="bg-hospital-green text-white px-6 py-3 rounded-lg hover:bg-hospital-green-dark transition-colors"
              >
                Submit Another Feedback
              </button>
              <a 
                href="/" 
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Return to Home
              </a>
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
            <h1 className="text-4xl font-bold mb-4">Patient Feedback</h1>
            <p className="text-xl text-hospital-green-light">Your experience matters to us. Share your feedback to help us improve.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-hospital-green" />
                Share Your Experience
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter your full name"
                    />
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
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient ID (if available)
                    </label>
                    <input
                      type="text"
                      name="patientId"
                      value={formData.patientId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Your patient ID"
                    />
                  </div>
                </div>

                {/* Visit Information */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visit Date *
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department Visited
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    >
                      <option value="">Select department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Visit Type
                    </label>
                    <select
                      name="visitType"
                      value={formData.visitType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    >
                      <option value="outpatient">Outpatient</option>
                      <option value="inpatient">Inpatient</option>
                      <option value="emergency">Emergency</option>
                      <option value="surgery">Surgery</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor/Staff Member Name (if applicable)
                  </label>
                  <input
                    type="text"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Doctor or staff member you interacted with"
                  />
                </div>

                {/* Ratings */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Rate Your Experience</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <StarRating 
                      rating={formData.overallRating} 
                      onRatingChange={(rating) => handleRatingChange('overallRating', rating)} 
                      label="Overall Experience" 
                    />
                    <StarRating 
                      rating={formData.serviceRating} 
                      onRatingChange={(rating) => handleRatingChange('serviceRating', rating)} 
                      label="Quality of Medical Care" 
                    />
                    <StarRating 
                      rating={formData.facilityRating} 
                      onRatingChange={(rating) => handleRatingChange('facilityRating', rating)} 
                      label="Hospital Facilities" 
                    />
                    <StarRating 
                      rating={formData.staffRating} 
                      onRatingChange={(rating) => handleRatingChange('staffRating', rating)} 
                      label="Staff Behavior" 
                    />
                  </div>
                </div>

                {/* Detailed Feedback */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe Your Experience *
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Please share details about your experience at our hospital"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Would you recommend Shriram Hospital to others?
                  </label>
                  <select
                    name="recommendation"
                    value={formData.recommendation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="">Please select</option>
                    <option value="definitely">Definitely Yes</option>
                    <option value="probably">Probably Yes</option>
                    <option value="maybe">Maybe</option>
                    <option value="probably_not">Probably Not</option>
                    <option value="definitely_not">Definitely Not</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suggestions for Improvement
                  </label>
                  <textarea
                    name="improvement"
                    value={formData.improvement}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="How can we improve our services?"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-hospital-green bg-gray-100 border-gray-300 rounded focus:ring-hospital-green focus:ring-2"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    Submit this feedback anonymously
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-hospital-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-hospital-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Submit Feedback
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({
                      name: '', email: '', phone: '', patientId: '', visitDate: '', department: '', doctor: '',
                      overallRating: 0, serviceRating: 0, facilityRating: 0, staffRating: 0,
                      recommendation: '', experience: '', improvement: '', visitType: 'outpatient', anonymous: false
                    })}
                    className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us Directly</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-hospital-green mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{hospitalInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-hospital-green mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{hospitalInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-hospital-green mr-3 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{hospitalInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Testimonials */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What Patients Say</h3>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map(testimonial => (
                  <div key={testimonial.id} className="border-l-4 border-hospital-green pl-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-gray-700 italic text-sm mb-2">"{testimonial.quote}"</p>
                    <p className="text-gray-600 text-sm font-medium">- {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
