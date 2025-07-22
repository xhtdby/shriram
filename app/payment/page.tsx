'use client';

import { useState } from 'react';
import PaymentInterface from '@/components/PaymentInterface';
import { DOCTORS } from '@/constants/staff';
import { HEALTH_PACKAGES } from '@/constants/services';
import { Calendar, Clock, User, Package, CreditCard, ArrowLeft } from 'lucide-react';

export default function PaymentPage() {
  const [paymentItems, setPaymentItems] = useState<any[]>([]);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedType, setSelectedType] = useState<'appointment' | 'package' | null>(null);

  // Sample appointment data
  const sampleAppointment = {
    id: 'apt_001',
    name: 'Doctor Consultation',
    amount: 500,
    type: 'appointment' as const,
    description: 'Regular consultation appointment',
    doctor: 'Dr. Rohit Dubey',
    date: '2025-07-25',
    time: '10:00 AM'
  };

  // Sample package data
  const samplePackage = {
    id: 'pkg_001',
    name: 'Basic Health Checkup',
    amount: 2500,
    type: 'package' as const,
    description: 'Comprehensive basic health screening package'
  };

  const handlePaymentSuccess = (transactionId: string) => {
    console.log('Payment successful:', transactionId);
    // Handle successful payment (save to database, send confirmation email, etc.)
    alert(`Payment successful! Transaction ID: ${transactionId}`);
    setShowPayment(false);
    setPaymentItems([]);
  };

  const handlePaymentCancel = () => {
    setShowPayment(false);
    setPaymentItems([]);
  };

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
              <span>Back to Selection</span>
            </button>
          </div>
          
          <PaymentInterface
            items={paymentItems}
            onSuccess={handlePaymentSuccess}
            onCancel={handlePaymentCancel}
            patientInfo={{
              name: 'John Doe',
              email: 'john.doe@example.com',
              phone: '+91 9876543210'
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Portal</h1>
            <p className="text-xl text-gray-600">Book appointments and health packages with secure online payment</p>
          </div>

          {/* Payment Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Appointment Payment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-hospital-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-hospital-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Doctor Appointment</h3>
                <p className="text-gray-600">Book and pay for your doctor consultation</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Sample Consultation</h4>
                    <span className="text-lg font-bold text-hospital-green">₹500</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Dr. Rohit Dubey - Anesthesiologist</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>July 25, 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>10:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setPaymentItems([sampleAppointment]);
                  setSelectedType('appointment');
                  setShowPayment(true);
                }}
                className="w-full bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay for Appointment</span>
              </button>
            </div>

            {/* Package Payment */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Health Package</h3>
                <p className="text-gray-600">Purchase comprehensive health checkup packages</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Basic Health Checkup</h4>
                    <span className="text-lg font-bold text-blue-600">₹2,500</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Comprehensive basic health screening package</p>
                    <div className="text-xs space-y-1">
                      <p>• Complete Blood Count (CBC)</p>
                      <p>• Blood Sugar (Fasting & PP)</p>
                      <p>• Urine Analysis</p>
                      <p>• ECG</p>
                      <p>• Doctor Consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setPaymentItems([samplePackage]);
                  setSelectedType('package');
                  setShowPayment(true);
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="w-5 h-5" />
                <span>Pay for Package</span>
              </button>
            </div>
          </div>

          {/* Multiple Items Example */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Multiple Items Payment</h3>
            <p className="text-gray-600 mb-6">Example of paying for multiple services at once</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="border rounded-lg p-3">
                <h4 className="font-medium">Dr. Consultation</h4>
                <p className="text-sm text-gray-600">Dr. Rohit Dubey</p>
                <p className="text-hospital-green font-semibold">₹500</p>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-medium">Health Package</h4>
                <p className="text-sm text-gray-600">Basic Checkup</p>
                <p className="text-blue-600 font-semibold">₹2,500</p>
              </div>
            </div>

            <button
              onClick={() => {
                setPaymentItems([sampleAppointment, samplePackage]);
                setShowPayment(true);
              }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Pay for All (₹3,000)</span>
            </button>
          </div>

          {/* Features */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Secure Payments</h4>
              <p className="text-sm text-gray-600">256-bit SSL encryption and PCI compliance</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Multiple Options</h4>
              <p className="text-sm text-gray-600">Card, UPI, Net Banking, and Wallet payments</p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Instant Confirmation</h4>
              <p className="text-sm text-gray-600">Immediate booking confirmation and receipts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
