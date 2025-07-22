 'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import PaymentReceipt from '@/components/PaymentReceipt';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function ReceiptContent() {
  const searchParams = useSearchParams();
  const [receiptData, setReceiptData] = useState(null);
  
  useEffect(() => {
    // This runs only on the client side after component mounts
    const getReceiptData = () => {
      const transactionId = searchParams.get('transactionId') || 'TXN' + Date.now();
      const amount = parseFloat(searchParams.get('amount') || '0');
      const method = searchParams.get('method') || 'Card';
      
      // Try to get detailed data from localStorage
      const storedData = localStorage.getItem(`receipt-${transactionId}`);
      if (storedData) {
        return JSON.parse(storedData);
      }
      
      // Fallback to URL parameters
      return {
        transactionId,
        amount,
        paymentMethod: method,
        items: [
          {
            name: searchParams.get('itemName') || 'Medical Service',
            amount: amount,
            type: searchParams.get('itemType') || 'service',
            description: searchParams.get('itemDescription') || 'Medical consultation or treatment'
          }
        ],
        patientInfo: {
          name: searchParams.get('patientName') || 'Patient',
          email: searchParams.get('patientEmail') || 'patient@example.com',
          phone: searchParams.get('patientPhone') || '+91 9999999999'
        },
        discount: 0,
        tax: Math.round(amount * 0.18),
        processingFee: Math.round(amount * 0.02),
        timestamp: new Date().toISOString()
      };
    };

    setReceiptData(getReceiptData());
  }, [searchParams]);

  // Show loading state while data is being fetched
  if (!receiptData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading receipt...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/payment" 
            className="inline-flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Payment Portal</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Payment Receipt</h1>
          <p className="text-gray-600 mt-2">
            Your payment has been processed successfully. You can print or download this receipt for your records.
          </p>
        </div>

        {/* Receipt */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <PaymentReceipt transactionData={receiptData} />
        </div>

        {/* Additional Actions */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="font-medium text-gray-900">Email Support</div>
                <div className="text-hospital-green">support@shriramhospital.com</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">Phone Support</div>
                <div className="text-hospital-green">+91 9415034735</div>
              </div>
              <div className="text-center">
                <div className="font-medium text-gray-900">Hours</div>
                <div className="text-gray-600">24/7 Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReceiptPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-green mx-auto mb-4"></div>
          <p className="text-gray-600">Loading receipt...</p>
        </div>
      </div>
    }>
      <ReceiptContent />
    </Suspense>
  );
}
