'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import PaymentReceipt from '@/components/PaymentReceipt';
import { ArrowLeft, Home } from 'lucide-react';

interface Booking {
  id: number;
  doctorId: number;
  doctorName: string;
  amount: string;
  transactionId: string;
  status: string;
  bookedAt: string;
  appointmentDate: string;
  appointmentSlot: string;
  bookingNumber: string;
  paymentStatus?: string;
}

export default function ReceiptPage() {
  const params = useParams();
  const router = useRouter();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bookingId = params.bookingId as string;
    
    // Get bookings from localStorage
    const bookings = JSON.parse(localStorage.getItem('shriram_appointments') || '[]');
    const foundBooking = bookings.find((b: Booking) => 
      b.id.toString() === bookingId || b.bookingNumber === bookingId
    );
    
    setBooking(foundBooking || null);
    setLoading(false);
  }, [params.bookingId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading receipt...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Receipt Not Found</h1>
          <p className="text-gray-600 mb-6">
            The receipt you&apos;re looking for doesn&apos;t exist or may have been removed.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => router.back()}
              className="w-full flex items-center justify-center space-x-2 bg-hospital-green text-white px-4 py-2 rounded-lg hover:bg-hospital-green/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>
            <button
              onClick={() => router.push('/')}
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Convert booking to receipt format
  const receiptData = {
    transactionId: booking.transactionId || booking.bookingNumber,
    amount: parseInt(booking.amount.replace('₹', '').replace(',', '')),
    paymentMethod: booking.transactionId === 'PAY_AT_HOSPITAL' ? 'Pay at Hospital' : 'Online Payment',
    items: [
      {
        name: `Appointment with ${booking.doctorName}`,
        amount: parseInt(booking.amount.replace('₹', '').replace(',', '')),
        type: 'appointment',
        description: `Scheduled for ${new Date(booking.appointmentDate).toLocaleDateString()} at ${booking.appointmentSlot}`,
        doctor: booking.doctorName,
        date: new Date(booking.appointmentDate).toLocaleDateString(),
        time: booking.appointmentSlot
      }
    ],
    patientInfo: {
      name: 'Patient', // In a real app, this would come from a form
      email: '',
      phone: ''
    },
    discount: 0,
    tax: 0,
    processingFee: 0,
    timestamp: booking.bookedAt,
    paymentStatus: (booking.transactionId === 'PAY_AT_HOSPITAL' ? 'pay_at_hospital' : 'paid') as 'pay_at_hospital' | 'paid' | 'pending'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">
            {booking.transactionId === 'PAY_AT_HOSPITAL' ? 'Appointment Confirmation' : 'Payment Receipt'}
          </h1>
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </button>
        </div>

        {/* Receipt */}
        <PaymentReceipt transactionData={receiptData} />

        {/* Additional Information for Pay at Hospital */}
        {booking.transactionId === 'PAY_AT_HOSPITAL' && (
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Important Instructions</h3>
            <div className="space-y-3 text-blue-800">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Arrive at the hospital 15 minutes before your appointment time</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Bring this confirmation receipt and a valid ID proof</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Pay {booking.amount} at the hospital reception before your consultation</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p>Contact {booking.doctorName}&apos;s department if you need to reschedule</p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 flex space-x-4 justify-center">
          <button
            onClick={() => router.push('/doctors')}
            className="px-6 py-3 bg-hospital-green text-white rounded-lg hover:bg-hospital-green/90 transition-colors"
          >
            Book Another Appointment
          </button>
          <button
            onClick={() => router.push('/portal')}
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Patient Portal
          </button>
        </div>
      </div>
    </div>
  );
}
