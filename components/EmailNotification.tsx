'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle, X } from 'lucide-react';

interface EmailNotificationProps {
  transactionData: {
    transactionId: string;
    amount: number;
    paymentMethod: string;
    patientInfo?: {
      name: string;
      email: string;
      phone: string;
    };
    items: Array<{
      name: string;
      amount: number;
      doctor?: string;
      date?: string;
      time?: string;
    }>;
  };
  onClose: () => void;
}

export default function EmailNotification({ transactionData, onClose }: EmailNotificationProps) {
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [customEmail, setCustomEmail] = useState(transactionData.patientInfo?.email || '');

  const handleSendEmail = async () => {
    setIsLoading(true);
    
    // Simulate email sending (in real app, this would call an API)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Store email notification preference
    localStorage.setItem('emailNotificationsEnabled', 'true');
    localStorage.setItem(`receipt-email-${transactionData.transactionId}`, customEmail);
    
    setEmailSent(true);
    setIsLoading(false);
  };

  if (emailSent) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-md w-full p-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Sent!</h3>
            <p className="text-gray-600 mb-6">
              Your payment receipt has been sent to <strong>{customEmail}</strong>
            </p>
            <button
              onClick={onClose}
              className="w-full bg-hospital-green text-white py-2 px-4 rounded-lg hover:bg-hospital-green/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-hospital-green" />
            <h3 className="text-xl font-semibold text-gray-900">Email Receipt</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Would you like to receive your payment receipt via email?
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-gray-900 mb-2">Receipt Summary</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Transaction ID: {transactionData.transactionId}</div>
              <div>Amount: ₹{transactionData.amount.toLocaleString()}</div>
              <div>Payment Method: {transactionData.paymentMethod}</div>
              <div>Items: {transactionData.items.length} service(s)</div>
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={customEmail}
              onChange={(e) => setCustomEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
              placeholder="Enter email address"
            />
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleSendEmail}
            disabled={!customEmail || isLoading}
            className="flex-1 flex items-center justify-center space-x-2 bg-hospital-green text-white px-4 py-2 rounded-lg hover:bg-hospital-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            ) : (
              <Send className="w-4 h-4" />
            )}
            <span>{isLoading ? 'Sending...' : 'Send Email'}</span>
          </button>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          By providing your email, you agree to receive transaction receipts and important updates about your appointments.
        </div>
      </div>
    </div>
  );
}
