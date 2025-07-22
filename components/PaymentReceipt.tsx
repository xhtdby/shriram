'use client';

import { Building2, Calendar, Clock, User, CreditCard, FileText, Download, Printer } from 'lucide-react';
import { HOSPITAL_CONFIG } from '@/constants/hospital';

interface ReceiptProps {
  transactionData: {
    transactionId: string;
    amount: number;
    paymentMethod: string;
    items: Array<{
      name: string;
      amount: number;
      type: string;
      description?: string;
      doctor?: string;
      date?: string;
      time?: string;
    }>;
    patientInfo?: {
      name: string;
      email: string;
      phone: string;
    };
    discount?: number;
    tax?: number;
    processingFee?: number;
    timestamp: string;
  };
}

export default function PaymentReceipt({ transactionData }: ReceiptProps) {
  const {
    transactionId,
    amount,
    paymentMethod,
    items,
    patientInfo,
    discount = 0,
    tax = 0,
    processingFee = 0,
    timestamp
  } = transactionData;

  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a downloadable receipt
    const receiptContent = generateReceiptText();
    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${transactionId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateReceiptText = () => {
    return `
${HOSPITAL_CONFIG.name}
${HOSPITAL_CONFIG.contact.address.fullAddress}
Phone: ${HOSPITAL_CONFIG.contact.phone}
Email: ${HOSPITAL_CONFIG.contact.email}

PAYMENT RECEIPT
===============================

Transaction ID: ${transactionId}
Date & Time: ${new Date(timestamp).toLocaleString()}
Payment Method: ${paymentMethod}

PATIENT INFORMATION
-------------------
${patientInfo ? `
Name: ${patientInfo.name}
Email: ${patientInfo.email}
Phone: ${patientInfo.phone}
` : 'N/A'}

SERVICES/ITEMS
--------------
${items.map(item => `
${item.name} - ₹${item.amount.toLocaleString()}
${item.description ? item.description : ''}
${item.doctor ? `Doctor: ${item.doctor}` : ''}
${item.date && item.time ? `Date: ${item.date} at ${item.time}` : ''}
`).join('\n')}

PAYMENT SUMMARY
---------------
Subtotal: ₹${subtotal.toLocaleString()}
${discount > 0 ? `Discount: -₹${discount.toLocaleString()}` : ''}
${tax > 0 ? `Tax (GST): ₹${tax.toLocaleString()}` : ''}
${processingFee > 0 ? `Processing Fee: ₹${processingFee.toLocaleString()}` : ''}
===============================
Total Paid: ₹${amount.toLocaleString()}

Thank you for choosing ${HOSPITAL_CONFIG.name}!

This is a computer-generated receipt.
No signature required.
    `.trim();
  };

  return (
    <div className="max-w-2xl mx-auto bg-white">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .receipt-container, .receipt-container * {
            visibility: visible;
          }
          .receipt-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="receipt-container border border-gray-300 rounded-lg p-8">
        {/* Hospital Header */}
        <div className="text-center border-b border-gray-200 pb-6 mb-6">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Building2 className="w-8 h-8 text-hospital-green" />
            <h1 className="text-2xl font-bold text-gray-900">{HOSPITAL_CONFIG.name}</h1>
          </div>
          <p className="text-gray-600">{HOSPITAL_CONFIG.contact.address.fullAddress}</p>
          <p className="text-gray-600">
            Phone: {HOSPITAL_CONFIG.contact.phone} | Email: {HOSPITAL_CONFIG.contact.email}
          </p>
        </div>

        {/* Receipt Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">PAYMENT RECEIPT</h2>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-700">Transaction ID:</span>
                <p className="font-mono text-gray-900">{transactionId}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Date & Time:</span>
                <p className="text-gray-900">{new Date(timestamp).toLocaleString()}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Payment Method:</span>
                <p className="text-gray-900">{paymentMethod}</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Status:</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  ✓ Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Patient Information */}
        {patientInfo && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Patient Information
            </h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Name:</span>
                  <p className="text-gray-900">{patientInfo.name}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Email:</span>
                  <p className="text-gray-900">{patientInfo.email}</p>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Phone:</span>
                  <p className="text-gray-900">{patientInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services/Items */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Services/Items
          </h3>
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <span className="font-semibold text-gray-900">₹{item.amount.toLocaleString()}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                )}
                {item.doctor && (
                  <p className="text-sm text-hospital-green mb-1">Doctor: {item.doctor}</p>
                )}
                {item.date && item.time && (
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Summary */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2" />
            Payment Summary
          </h3>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Subtotal:</span>
                <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              {tax > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-700">Tax (GST):</span>
                  <span className="text-gray-900">₹{tax.toLocaleString()}</span>
                </div>
              )}
              {processingFee > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Processing Fee:</span>
                  <span className="text-gray-900">₹{processingFee.toLocaleString()}</span>
                </div>
              )}
              <div className="border-t border-gray-300 pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-900">Total Paid:</span>
                  <span className="text-hospital-green">₹{amount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-2">Thank you for choosing {HOSPITAL_CONFIG.name}!</p>
          <p className="text-sm text-gray-500">
            This is a computer-generated receipt. No signature required.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex space-x-4 no-print">
          <button
            onClick={handlePrint}
            className="flex-1 flex items-center justify-center space-x-2 bg-hospital-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Receipt</span>
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 flex items-center justify-center space-x-2 border border-hospital-green text-hospital-green px-4 py-3 rounded-lg font-semibold hover:bg-hospital-green/5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
