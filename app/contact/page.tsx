'use client'

import { hospitalInfo } from '@/app/data'
import { useState, FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, MessageSquare, User, FileText, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: '',
    preferredContact: 'email'
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'appointment', label: 'Appointment Related' },
    { value: 'billing', label: 'Billing & Insurance' },
    { value: 'medical', label: 'Medical Information' },
    { value: 'complaint', label: 'Complaint/Concern' },
    { value: 'suggestion', label: 'Suggestion' },
    { value: 'media', label: 'Media Inquiry' },
    { value: 'partnership', label: 'Partnership/Business' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Store inquiry in localStorage (in real app, this would be sent to backend)
      const inquiries = JSON.parse(localStorage.getItem('shriram_inquiries') || '[]')
      const newInquiry = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'received',
        ticketNumber: `TK${Date.now().toString().slice(-6)}`
      }
      inquiries.push(newInquiry)
      localStorage.setItem('shriram_inquiries', JSON.stringify(inquiries))
      
      setSubmitted(true)
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We have received your inquiry and will respond within 24 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm">
                <strong>Ticket Number:</strong> TK{Date.now().toString().slice(-6)}
              </p>
              <p className="text-green-700 text-sm mt-1">
                Please save this number for future reference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setSubmitted(false)
                  setFormData({
                    name: '', email: '', phone: '', subject: '', inquiryType: 'general',
                    message: '', preferredContact: 'email'
                  })
                }}
                className="bg-hospital-green text-white px-6 py-3 rounded-lg hover:bg-hospital-green-dark transition-colors"
              >
                Send Another Message
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
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-hospital-green-light">Get in touch with our team for any questions or assistance</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2 text-hospital-green" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
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
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Brief subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Method
                  </label>
                  <select
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="both">Either Email or Phone</option>
                  </select>
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({
                      name: '', email: '', phone: '', subject: '', inquiryType: 'general',
                      message: '', preferredContact: 'email'
                    })}
                    className="bg-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Clear Form
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-hospital-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600 mt-1">{hospitalInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-hospital-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
                    <p className="text-gray-600 mt-1">Main: {hospitalInfo.phone}</p>
                    <p className="text-gray-600">Emergency: {hospitalInfo.ambulance}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-hospital-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600 mt-1">{hospitalInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-hospital-green mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hours</h4>
                    <div className="text-gray-600 mt-1">
                      <p>Emergency: 24/7</p>
                      <p>OPD: 9:00 AM - 6:00 PM</p>
                      <p>Mon - Sat</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-hospital-green text-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="/book-appointment" 
                  className="block bg-white text-hospital-green px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Book Appointment
                </a>
                <a 
                  href={`tel:${hospitalInfo.ambulance}`} 
                  className="block bg-red-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
                >
                  Emergency: {hospitalInfo.ambulance}
                </a>
                <a 
                  href="/feedback" 
                  className="block bg-gold-accent text-white px-4 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors text-center"
                >
                  Leave Feedback
                </a>
              </div>
            </div>

            {/* Department Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Popular Departments</h3>
              <div className="space-y-2">
                {['Cardiology', 'Emergency', 'Orthopedics', 'General Medicine', 'Pediatrics'].map(dept => (
                  <a 
                    key={dept}
                    href={`/departments/${dept.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block text-gray-600 hover:text-hospital-green transition-colors py-1"
                  >
                    {dept}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Section */}
      <section id="emergency" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Emergency Contact</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              For medical emergencies, contact us immediately. Our emergency services are available 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-red-500">
              <Phone className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Hotline</h3>
              <a href={`tel:${hospitalInfo.ambulance}`} className="text-2xl font-bold text-red-600 hover:text-red-700">
                {hospitalInfo.ambulance}
              </a>
              <p className="text-gray-600 mt-2">Available 24/7</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-red-500">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Response Time</h3>
              <p className="text-lg font-semibold text-red-600">5-10 minutes</p>
              <p className="text-gray-600 mt-2">Average ambulance response</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 border-red-500">
              <MapPin className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Entrance</h3>
              <p className="text-gray-700">Main Hospital Building</p>
              <p className="text-gray-600 mt-2">Ground Floor, East Wing</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-red-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-3">Emergency Services Available</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Trauma Care</div>
                <div>• Cardiac Emergency</div>
                <div>• Stroke Treatment</div>
                <div>• Accident Care</div>
                <div>• Critical Care</div>
                <div>• Emergency Surgery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-semibold">Interactive Map</p>
                <p className="mt-2">Pali Road, Jaistham Chowk, Shahdol – 484 001</p>
                <a 
                  href="https://maps.google.com/?q=Shriram+Hospital+Shahdol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-hospital-green text-white px-6 py-2 rounded-lg hover:bg-hospital-green-dark transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
