'use client';

import { useState } from 'react';
import { Calculator, FileText, Phone, Mail, AlertCircle, CheckCircle, User, Calendar } from 'lucide-react';
import { ESTIMATE_CONFIG } from '@/constants/appointments';
import Link from 'next/link';

interface EstimateForm {
  patientName: string;
  phoneNumber: string;
  email: string;
  age: string;
  procedure: string;
  procedureCode: string;
  category: string;
  urgency: string;
  medicalHistory: string;
  insuranceAvailable: boolean;
  insuranceProvider: string;
  additionalNotes: string;
}

export default function EstimateRequestPage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProcedure, setSelectedProcedure] = useState('');
  const [estimateRange, setEstimateRange] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<EstimateForm>({
    patientName: '',
    phoneNumber: '',
    email: '',
    age: '',
    procedure: '',
    procedureCode: '',
    category: '',
    urgency: 'routine',
    medicalHistory: '',
    insuranceAvailable: false,
    insuranceProvider: '',
    additionalNotes: ''
  });

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedProcedure('');
    setEstimateRange('');
    setFormData(prev => ({ ...prev, category: categoryId, procedure: '', procedureCode: '' }));
  };

  const handleProcedureChange = (procedure: any) => {
    setSelectedProcedure(procedure.name);
    setEstimateRange(procedure.estimateRange);
    setFormData(prev => ({ 
      ...prev, 
      procedure: procedure.name, 
      procedureCode: procedure.code 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage (in real app, this would be an API call)
    const estimateRequest = {
      ...formData,
      requestDate: new Date().toISOString(),
      status: 'pending',
      id: Date.now()
    };
    
    const existingRequests = JSON.parse(localStorage.getItem('shriram_estimates') || '[]');
    existingRequests.push(estimateRequest);
    localStorage.setItem('shriram_estimates', JSON.stringify(existingRequests));
    
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
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Request Submitted Successfully!</h2>
          <p className="text-gray-600 mb-6">
            Your cost estimate request has been received. Our team will contact you within 24 hours with detailed pricing information.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  patientName: '',
                  phoneNumber: '',
                  email: '',
                  age: '',
                  procedure: '',
                  procedureCode: '',
                  category: '',
                  urgency: 'routine',
                  medicalHistory: '',
                  insuranceAvailable: false,
                  insuranceProvider: '',
                  additionalNotes: ''
                });
                setSelectedCategory('');
                setSelectedProcedure('');
                setEstimateRange('');
              }}
              className="w-full bg-hospital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
            >
              Submit Another Request
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Treatment Cost Estimate</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get an estimate for your medical procedure to help you plan your healthcare expenses
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Estimate Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-hospital-green mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Request Cost Estimate</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Patient Information */}
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
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Patient Age
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Enter age"
                    />
                  </div>
                </div>

                {/* Procedure Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Department *
                  </label>
                  <select
                    required
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="">Select Department</option>
                    {ESTIMATE_CONFIG.procedures.map((category) => (
                      <option key={category.id} value={category.category}>
                        {category.category}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCategory && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Procedure/Treatment *
                    </label>
                    <select
                      required
                      value={selectedProcedure}
                      onChange={(e) => {
                        const category = ESTIMATE_CONFIG.procedures.find(cat => cat.category === selectedCategory);
                        const procedure = category?.procedures.find(proc => proc.name === e.target.value);
                        if (procedure) handleProcedureChange(procedure);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    >
                      <option value="">Select Procedure</option>
                      {ESTIMATE_CONFIG.procedures
                        .find(cat => cat.category === selectedCategory)
                        ?.procedures.map((procedure) => (
                          <option key={procedure.code} value={procedure.name}>
                            {procedure.name} - {procedure.estimateRange}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                  >
                    <option value="routine">Routine (within 2 weeks)</option>
                    <option value="urgent">Urgent (within 1 week)</option>
                    <option value="emergency">Emergency (immediate)</option>
                  </select>
                </div>

                {/* Insurance Information */}
                <div>
                  <div className="flex items-center mb-3">
                    <input
                      type="checkbox"
                      id="insurance"
                      checked={formData.insuranceAvailable}
                      onChange={(e) => handleInputChange('insuranceAvailable', e.target.checked)}
                      className="w-4 h-4 text-hospital-green border-gray-300 rounded focus:ring-hospital-green"
                    />
                    <label htmlFor="insurance" className="ml-2 text-sm font-medium text-gray-700">
                      I have health insurance
                    </label>
                  </div>
                  
                  {formData.insuranceAvailable && (
                    <input
                      type="text"
                      value={formData.insuranceProvider}
                      onChange={(e) => handleInputChange('insuranceProvider', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                      placeholder="Insurance provider name"
                    />
                  )}
                </div>

                {/* Medical History */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Relevant Medical History
                  </label>
                  <textarea
                    rows={3}
                    value={formData.medicalHistory}
                    onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Any relevant medical conditions, previous surgeries, allergies, etc."
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
                    placeholder="Any specific questions or additional information"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-hospital-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
                >
                  Request Estimate
                </button>
              </form>
            </div>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-6">
            {/* Current Estimate */}
            {estimateRange && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Estimated Cost Range</h3>
                <div className="text-2xl font-bold text-hospital-green mb-2">{estimateRange}</div>
                <p className="text-sm text-gray-600">
                  This is a preliminary estimate. Final cost may vary based on individual case requirements.
                </p>
              </div>
            )}

            {/* What's Included */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Estimate Includes</h3>
              <ul className="space-y-2">
                {ESTIMATE_CONFIG.includesInEstimate.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Not Included */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Charges May Apply</h3>
              <ul className="space-y-2">
                {ESTIMATE_CONFIG.excludesFromEstimate.map((item, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 mr-2 text-yellow-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-hospital-green text-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">07652-248248</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">estimates@shriramhospital.in</span>
                </div>
              </div>
              <p className="text-sm text-white/90 mt-4">
                Our team is available 24/7 to assist you with cost estimates and payment options.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
              <p className="text-yellow-700 text-sm">
                {ESTIMATE_CONFIG.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
