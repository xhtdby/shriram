'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PaymentInterface from '@/components/PaymentInterface';
import { useBasket } from '@/contexts/BasketContext';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PatientInfo {
  name: string;
  email: string;
  phone: string;
  age: string;
  gender: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
}

export default function PaymentPage() {
  const router = useRouter();
  const { basketItems, clearBasket, getTotalAmount } = useBasket();
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);

  useEffect(() => {
    // Load patient info from checkout
    const checkoutPatient = localStorage.getItem('shriram_checkout_patient');
    if (checkoutPatient) {
      try {
        setPatientInfo(JSON.parse(checkoutPatient));
      } catch (error) {
        console.error('Error loading patient info:', error);
      }
    }

    // Redirect to basket if no items
    if (basketItems.length === 0) {
      router.push('/basket');
    }
  }, [basketItems, router]);

  const handlePaymentSuccess = (transactionId: string) => {
    console.log('Payment successful:', transactionId);
    
    // Store successful payment and appointment details
    const appointments = JSON.parse(localStorage.getItem('shriram_appointments') || '[]');
    const newAppointments = basketItems
      .filter(item => item.type === 'appointment')
      .map(item => ({
        id: Date.now() + Math.random(),
        patientName: patientInfo?.name || 'N/A',
        email: patientInfo?.email || 'N/A',
        phone: patientInfo?.phone || 'N/A',
        doctorName: item.doctor || 'N/A',
        department: item.department || 'N/A',
        appointmentDate: item.date || 'N/A',
        appointmentTime: item.time || 'N/A',
        amount: item.amount,
        transactionId,
        status: 'confirmed',
        bookedAt: new Date().toISOString(),
        bookingNumber: `APP${Date.now().toString().slice(-6)}`
      }));

    appointments.push(...newAppointments);
    localStorage.setItem('shriram_appointments', JSON.stringify(appointments));
    
    // Clear checkout data
    localStorage.removeItem('shriram_checkout_patient');
    clearBasket();
    
    alert(`Payment successful! Transaction ID: ${transactionId}`);
    
    // Redirect to receipt or home
    router.push('/');
  };

  const handlePaymentCancel = () => {
    router.push('/basket');
  };

  if (basketItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Redirecting to basket...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Secure Checkout</h1>
              <p className="text-gray-600 mt-1">Complete your payment securely</p>
            </div>
            
            <Link
              href="/basket"
              className="flex items-center text-hospital-green hover:text-hospital-green-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Basket
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <PaymentInterface
          items={basketItems.map(item => ({
            id: item.id,
            name: item.name,
            amount: item.amount * (item.quantity || 1),
            type: item.type,
            description: item.description,
            doctor: item.doctor,
            date: item.date,
            time: item.time
          }))}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
          patientInfo={patientInfo ? {
            name: patientInfo.name,
            email: patientInfo.email,
            phone: patientInfo.phone
          } : undefined}
        />
      </div>
    </div>
  );
}
