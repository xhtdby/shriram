'use client';

import { useState, useEffect } from 'react';
import { 
  CreditCard, 
  Smartphone, 
  Building2, 
  Wallet, 
  Shield, 
  Lock, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Receipt,
  Download
} from 'lucide-react';
import { PAYMENT_CONFIG, PAYMENT_STATUS, TRANSACTION_TYPES } from '@/constants/payments';
import PaymentReceipt from './PaymentReceipt';
import EmailNotification from './EmailNotification';

interface PaymentItem {
  id: string;
  name: string;
  amount: number;
  type: 'appointment' | 'package' | 'consultation';
  description?: string;
  doctor?: string;
  date?: string;
  time?: string;
}

interface PaymentProps {
  items: PaymentItem[];
  onSuccess: (transactionId: string) => void;
  onCancel: () => void;
  patientInfo?: {
    name: string;
    email: string;
    phone: string;
  };
}

export default function PaymentInterface({ items, onSuccess, onCancel, patientInfo }: PaymentProps) {
  const [currentStep, setCurrentStep] = useState<'summary' | 'payment' | 'processing' | 'success' | 'failed'>('summary');
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [promoCode, setPromoCode] = useState('');
  const [appliedOffer, setAppliedOffer] = useState<any>(null);
  const [paymentData, setPaymentData] = useState<any>({});
  const [transactionId, setTransactionId] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [showEmailNotification, setShowEmailNotification] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
  const discount = appliedOffer ? 
    Math.min(
      appliedOffer.type === 'percentage' 
        ? (subtotal * appliedOffer.discount) / 100 
        : appliedOffer.discount,
      appliedOffer.maxDiscount || Infinity
    ) : 0;
  const taxableAmount = subtotal - discount;
  const gst = (taxableAmount * PAYMENT_CONFIG.tax.gst) / 100;
  const processingFee = selectedMethod ? 
    (taxableAmount * (PAYMENT_CONFIG.methods.find(m => m.id === selectedMethod)?.processingFee || 0)) / 100 : 0;
  const total = taxableAmount + gst + processingFee;

  const applyPromoCode = () => {
    const offer = PAYMENT_CONFIG.offers.find(
      o => o.code.toLowerCase() === promoCode.toLowerCase() && 
           o.active && 
           subtotal >= o.minAmount &&
           o.validFor.some(type => items.some(item => item.type === type))
    );
    
    if (offer) {
      setAppliedOffer(offer);
    } else {
      alert('Invalid or expired promo code');
    }
  };

  const processPayment = async () => {
    setLoading(true);
    setCurrentStep('processing');
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate transaction ID
      const txnId = `TXN${Date.now()}${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setTransactionId(txnId);
      
      // Simulate success/failure (90% success rate)
      if (Math.random() > 0.1) {
        setCurrentStep('success');
        onSuccess(txnId);
      } else {
        throw new Error('Payment failed');
      }
    } catch (error) {
      setCurrentStep('failed');
    } finally {
      setLoading(false);
    }
  };

  const renderSummaryStep = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-0">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{item.name}</h4>
                {item.description && <p className="text-sm text-gray-600">{item.description}</p>}
                {item.doctor && <p className="text-sm text-hospital-green">Dr. {item.doctor}</p>}
                {item.date && item.time && (
                  <p className="text-sm text-gray-500">{item.date} at {item.time}</p>
                )}
              </div>
              <div className="text-right">
                <span className="font-semibold">₹{item.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="mt-6 pt-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
            />
            <button
              onClick={applyPromoCode}
              className="px-4 py-2 bg-hospital-green text-white rounded-lg hover:bg-hospital-green/90 transition-colors"
            >
              Apply
            </button>
          </div>
          {appliedOffer && (
            <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">
              ✓ {appliedOffer.description} applied
            </div>
          )}
        </div>

        {/* Price Breakdown */}
        <div className="mt-6 pt-4 border-t space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount</span>
              <span>-₹{discount.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹{gst.toLocaleString()}</span>
          </div>
          {processingFee > 0 && (
            <div className="flex justify-between text-sm text-gray-600">
              <span>Processing Fee</span>
              <span>₹{processingFee.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Available Offers */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Available Offers</h4>
        <div className="space-y-1">
          {PAYMENT_CONFIG.offers.filter(o => o.active).map((offer, index) => (
            <div key={index} className="text-sm text-blue-700">
              <strong>{offer.code}</strong>: {offer.description}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setCurrentStep('payment')}
        className="w-full bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green/90 transition-colors"
      >
        Proceed to Payment
      </button>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PAYMENT_CONFIG.methods.filter(method => method.enabled).map((method) => (
            <div
              key={method.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedMethod === method.id
                  ? 'border-hospital-green bg-hospital-green/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedMethod(method.id)}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{method.icon}</span>
                <div className="flex-1">
                  <h4 className="font-medium">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                  {method.processingFee > 0 && (
                    <p className="text-xs text-gray-500">+{method.processingFee}% processing fee</p>
                  )}
                </div>
                {selectedMethod === method.id && (
                  <CheckCircle className="w-5 h-5 text-hospital-green" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Form */}
      {selectedMethod && (
        <div className="bg-white rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
          {selectedMethod === 'card' && <CardPaymentForm onDataChange={setPaymentData} />}
          {selectedMethod === 'upi' && <UPIPaymentForm onDataChange={setPaymentData} />}
          {selectedMethod === 'netbanking' && <NetBankingForm onDataChange={setPaymentData} />}
          {selectedMethod === 'wallet' && <WalletPaymentForm onDataChange={setPaymentData} />}
        </div>
      )}

      {/* Security Info */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="w-4 h-4" />
          <span>Your payment is secured with 256-bit SSL encryption</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => setCurrentStep('summary')}
          className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <button
          onClick={processPayment}
          disabled={!selectedMethod || loading}
          className="flex-1 bg-hospital-green text-white py-3 rounded-lg font-semibold hover:bg-hospital-green/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Pay ₹{total.toLocaleString()}
        </button>
      </div>
    </div>
  );

  const renderProcessingStep = () => (
    <div className="text-center py-12">
      <Loader2 className="w-12 h-12 text-hospital-green animate-spin mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Processing Payment</h3>
      <p className="text-gray-600">Please wait while we process your payment...</p>
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-700">
          <Lock className="w-4 h-4 inline mr-1" />
          Do not refresh or close this page
        </p>
      </div>
    </div>
  );

  const renderSuccessStep = () => {
    if (showReceipt) {
      return (
        <div>
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setShowReceipt(false)}
              className="flex items-center space-x-2 text-hospital-green hover:text-hospital-green/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Summary</span>
            </button>
            <h3 className="text-xl font-semibold">Payment Receipt</h3>
          </div>
          <PaymentReceipt
            transactionData={{
              transactionId,
              amount: total,
              paymentMethod: PAYMENT_CONFIG.methods.find(m => m.id === selectedMethod)?.name || '',
              items: items.map(item => ({
                name: item.name,
                amount: item.amount,
                type: item.type,
                description: item.description,
                doctor: item.doctor,
                date: item.date,
                time: item.time
              })),
              patientInfo,
              discount: appliedOffer?.discount || 0,
              tax: Math.round(subtotal * 0.18),
              processingFee: Math.round(subtotal * 0.02),
              timestamp: new Date().toISOString()
            }}
          />
        </div>
      );
    }

    return (
    <div className="text-center py-12">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-green-700">Payment Successful!</h3>
      <p className="text-gray-600 mb-6">Your transaction has been completed successfully.</p>
      
      <div className="bg-white border rounded-lg p-6 mb-6 text-left max-w-md mx-auto">
        <h4 className="font-semibold mb-3">Transaction Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Transaction ID:</span>
            <span className="font-mono">{transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount Paid:</span>
            <span>₹{total.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Payment Method:</span>
            <span>{PAYMENT_CONFIG.methods.find(m => m.id === selectedMethod)?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date & Time:</span>
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={() => setShowReceipt(true)}
          className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Receipt className="w-4 h-4" />
          <span>View Receipt</span>
        </button>
        <button
          onClick={() => setShowEmailNotification(true)}
          className="flex items-center space-x-2 px-4 py-2 border border-hospital-green text-hospital-green rounded-lg hover:bg-hospital-green/5"
        >
          <span>Email Receipt</span>
        </button>
        <button
          onClick={() => {
            if (onSuccess) {
              onSuccess(transactionId);
            }
          }}
          className="flex items-center space-x-2 px-4 py-2 bg-hospital-green text-white rounded-lg hover:bg-hospital-green/90"
        >
          <span>Continue</span>
        </button>
      </div>
    </div>
    );
  };

  const renderFailedStep = () => (
    <div className="text-center py-12">
      <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
      <h3 className="text-2xl font-semibold mb-2 text-red-700">Payment Failed</h3>
      <p className="text-gray-600 mb-6">We couldn&apos;t process your payment. Please try again.</p>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
        <div className="flex items-start space-x-2">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
          <div className="text-sm text-red-700">
            <p className="font-medium">Common reasons for payment failure:</p>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>Insufficient funds</li>
              <li>Network connectivity issues</li>
              <li>Incorrect payment details</li>
              <li>Bank server downtime</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={() => setCurrentStep('payment')}
          className="px-6 py-3 bg-hospital-green text-white rounded-lg hover:bg-hospital-green/90"
        >
          Try Again
        </button>
        <button
          onClick={onCancel}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-2 ${currentStep === 'summary' ? 'text-hospital-green' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'summary' ? 'bg-hospital-green text-white' : 'bg-gray-200'}`}>1</div>
            <span className="font-medium">Summary</span>
          </div>
          <div className={`flex items-center space-x-2 ${currentStep === 'payment' ? 'text-hospital-green' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'payment' ? 'bg-hospital-green text-white' : 'bg-gray-200'}`}>2</div>
            <span className="font-medium">Payment</span>
          </div>
          <div className={`flex items-center space-x-2 ${['processing', 'success', 'failed'].includes(currentStep) ? 'text-hospital-green' : 'text-gray-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${['processing', 'success', 'failed'].includes(currentStep) ? 'bg-hospital-green text-white' : 'bg-gray-200'}`}>3</div>
            <span className="font-medium">Complete</span>
          </div>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 'summary' && renderSummaryStep()}
      {currentStep === 'payment' && renderPaymentStep()}
      {currentStep === 'processing' && renderProcessingStep()}
      {currentStep === 'success' && renderSuccessStep()}
      {currentStep === 'failed' && renderFailedStep()}
    </div>
  );
}

// Payment method forms
function CardPaymentForm({ onDataChange }: { onDataChange: (data: any) => void }) {
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  });

  useEffect(() => {
    onDataChange(cardData);
  }, [cardData, onDataChange]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <input
          type="text"
          placeholder="1234 5678 9012 3456"
          value={cardData.number}
          onChange={(e) => setCardData({...cardData, number: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={cardData.expiry}
            onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <input
            type="text"
            placeholder="123"
            value={cardData.cvv}
            onChange={(e) => setCardData({...cardData, cvv: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
        <input
          type="text"
          placeholder="John Doe"
          value={cardData.name}
          onChange={(e) => setCardData({...cardData, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
        />
      </div>
    </div>
  );
}

function UPIPaymentForm({ onDataChange }: { onDataChange: (data: any) => void }) {
  const [upiId, setUpiId] = useState('');

  useEffect(() => {
    onDataChange({ upiId });
  }, [upiId, onDataChange]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
        <input
          type="text"
          placeholder="yourname@paytm"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
        />
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-700">
          <Smartphone className="w-4 h-4 inline mr-1" />
          You will receive a payment request on your UPI app
        </p>
      </div>
    </div>
  );
}

function NetBankingForm({ onDataChange }: { onDataChange: (data: any) => void }) {
  const [selectedBank, setSelectedBank] = useState('');

  useEffect(() => {
    onDataChange({ bank: selectedBank });
  }, [selectedBank, onDataChange]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Bank</label>
        <select
          value={selectedBank}
          onChange={(e) => setSelectedBank(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hospital-green focus:border-transparent"
        >
          <option value="">Choose your bank</option>
          {PAYMENT_CONFIG.banks.map((bank) => (
            <option key={bank.code} value={bank.code}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-700">
          <Building2 className="w-4 h-4 inline mr-1" />
          You will be redirected to your bank&apos;s secure website
        </p>
      </div>
    </div>
  );
}

function WalletPaymentForm({ onDataChange }: { onDataChange: (data: any) => void }) {
  const [walletType, setWalletType] = useState('');

  useEffect(() => {
    onDataChange({ wallet: walletType });
  }, [walletType, onDataChange]);

  const wallets = ['Paytm', 'Amazon Pay', 'PhonePe', 'Google Pay', 'Mobikwik'];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Wallet</label>
        <div className="grid grid-cols-2 gap-3">
          {wallets.map((wallet) => (
            <button
              key={wallet}
              onClick={() => setWalletType(wallet)}
              className={`p-3 border rounded-lg text-center transition-all ${
                walletType === wallet
                  ? 'border-hospital-green bg-hospital-green/5 text-hospital-green'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              {wallet}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-sm text-blue-700">
          <Wallet className="w-4 h-4 inline mr-1" />
          You will be redirected to complete the payment
        </p>
      </div>
    </div>
  );
}
