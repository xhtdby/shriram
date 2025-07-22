'use client';

import { useState } from 'react';
import { Video, Calendar, Clock, Shield, CheckCircle, X, Wifi, Camera, Mic, Monitor, Phone, Mail } from 'lucide-react';
import { VIDEO_CONSULTATION_CONFIG } from '@/constants/appointments';
import { DOCTORS } from '@/constants/staff';
import Link from 'next/link';

interface BookingForm {
  patientName: string;
  phoneNumber: string;
  email: string;
  age: string;
  preferredDate: string;
  preferredTime: string;
  consultationType: string;
  symptoms: string;
  previousConsultation: boolean;
  doctorPreference: string;
}

export default function VideoConsultationPage() {
  const [activeTab, setActiveTab] = useState('info');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<BookingForm>({
    patientName: '',
    phoneNumber: '',
    email: '',
    age: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: 'general',
    symptoms: '',
    previousConsultation: false,
    doctorPreference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage (in real app, this would be an API call)
    const consultation = {
      ...formData,
      bookingDate: new Date().toISOString(),
      status: 'confirmed',
      id: Date.now(),
      meetingLink: `https://meet.shriramhospital.in/room/${Date.now()}`
    };
    
    const existingConsultations = JSON.parse(localStorage.getItem('shriram_video_consultations') || '[]');
    existingConsultations.push(consultation);
    localStorage.setItem('shriram_video_consultations', JSON.stringify(existingConsultations));
    
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consultation Booked!</h2>
          <p className="text-gray-600 mb-6">
            Your video consultation has been scheduled. You will receive a confirmation email with the meeting link shortly.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setIsBookingModalOpen(false);
                setFormData({
                  patientName: '',
                  phoneNumber: '',
                  email: '',
                  age: '',
                  preferredDate: '',
                  preferredTime: '',
                  consultationType: 'general',
                  symptoms: '',
                  previousConsultation: false,
                  doctorPreference: ''
                });
              }}
              className="w-full bg-hospital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
            >
              Book Another Consultation
            </button>
            <Link
              href="/"
              className="block w-full bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hospital-green to-hospital-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Consultation</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Consult with our expert doctors from the comfort of your home
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'info'
                  ? 'bg-hospital-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => setActiveTab('requirements')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'requirements'
                  ? 'bg-hospital-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Requirements
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'pricing'
                  ? 'bg-hospital-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="px-6 py-3 bg-hospital-blue text-white rounded-lg font-medium hover:bg-hospital-blue/90 transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Content based on active tab */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {activeTab === 'info' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">How Video Consultation Works</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                {VIDEO_CONSULTATION_CONFIG.process.map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="w-16 h-16 bg-hospital-green text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits of Video Consultation</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Consult from anywhere, anytime</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">No travel time or waiting rooms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Access to specialist doctors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Secure and private consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">Digital prescription and reports</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Limitations</h3>
                  <ul className="space-y-3">
                    {VIDEO_CONSULTATION_CONFIG.limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Technical Requirements</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wifi className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Internet</h3>
                  <p className="text-gray-600 text-sm">Stable connection (min 2 Mbps)</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Camera</h3>
                  <p className="text-gray-600 text-sm">Working camera for video call</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Audio</h3>
                  <p className="text-gray-600 text-sm">Microphone and speakers</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Device</h3>
                  <p className="text-gray-600 text-sm">Phone, tablet, or computer</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Preparation Checklist</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    {VIDEO_CONSULTATION_CONFIG.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Before Your Consultation:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Test your camera and microphone</li>
                      <li>• Find a quiet, well-lit space</li>
                      <li>• Keep your medical records handy</li>
                      <li>• Prepare a list of current medications</li>
                      <li>• Note down your symptoms and questions</li>
                      <li>• Ensure good network connectivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Consultation Pricing</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">General Consultation</h3>
                  <div className="text-3xl font-bold text-hospital-green mb-2">₹{VIDEO_CONSULTATION_CONFIG.pricing.general}</div>
                  <p className="text-gray-600 text-sm">Basic medical consultation</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Specialist</h3>
                  <div className="text-3xl font-bold text-hospital-blue mb-2">₹{VIDEO_CONSULTATION_CONFIG.pricing.specialist}</div>
                  <p className="text-gray-600 text-sm">Specialist doctor consultation</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow-up</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹{VIDEO_CONSULTATION_CONFIG.pricing.followUp}</div>
                  <p className="text-gray-600 text-sm">Follow-up consultation</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Emergency</h3>
                  <div className="text-3xl font-bold text-red-600 mb-2">₹{VIDEO_CONSULTATION_CONFIG.pricing.emergency}</div>
                  <p className="text-gray-600 text-sm">Urgent consultation</p>
                </div>
              </div>

              <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Hours</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Service Days:</h4>
                    <p className="text-gray-600">{VIDEO_CONSULTATION_CONFIG.availability.days.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Service Hours:</h4>
                    <p className="text-gray-600">
                      {VIDEO_CONSULTATION_CONFIG.availability.startTime} - {VIDEO_CONSULTATION_CONFIG.availability.endTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-800">Book Video Consultation</h2>
              <button
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Enter patient name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Enter age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    required
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consultation Type *
                  </label>
                  <select
                    required
                    value={formData.consultationType}
                    onChange={(e) => handleInputChange('consultationType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="general">General Consultation - ₹300</option>
                    <option value="specialist">Specialist Consultation - ₹500</option>
                    <option value="followUp">Follow-up - ₹200</option>
                    <option value="emergency">Emergency - ₹800</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Doctor Preference
                  </label>
                  <select
                    value={formData.doctorPreference}
                    onChange={(e) => handleInputChange('doctorPreference', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="">Any available doctor</option>
                    {DOCTORS.map(doctor => (
                      <option key={doctor.id} value={doctor.fullName}>
                        {doctor.fullName} - {doctor.specialization}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Symptoms and Concerns *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.symptoms}
                  onChange={(e) => handleInputChange('symptoms', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  placeholder="Describe your symptoms and concerns..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="previousConsultation"
                  checked={formData.previousConsultation}
                  onChange={(e) => handleInputChange('previousConsultation', e.target.checked)}
                  className="w-4 h-4 text-hospital-green border-gray-300 rounded focus:ring-hospital-green"
                />
                <label htmlFor="previousConsultation" className="ml-2 text-sm font-medium text-gray-700">
                  This is a follow-up for a previous consultation at Shriram Hospital
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setIsBookingModalOpen(false)}
                  className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-hospital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
                >
                  Book Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className="py-12 bg-hospital-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Technical Support?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Our technical support team is available to help you with video consultation setup
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:07652-248248"
              className="inline-flex items-center bg-white text-hospital-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Support
            </a>
            <a
              href="mailto:videoconsult@shriramhospital.in"
              className="inline-flex items-center bg-white/10 text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
