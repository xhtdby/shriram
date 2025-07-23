// Payment Configuration
export const PAYMENT_CONFIG = {
  // Payment methods
  methods: [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, RuPay',
      icon: '💳',
      enabled: true,
      processingFee: 2.5, // percentage
      minAmount: 1
    },
    {
      id: 'upi',
      name: 'UPI Payment',
      description: 'Google Pay, PhonePe, Paytm',
      icon: '📱',
      enabled: true,
      processingFee: 0,
      minAmount: 1
    },
    {
      id: 'netbanking',
      name: 'Net Banking',
      description: 'All major banks supported',
      icon: '🏦',
      enabled: true,
      processingFee: 1.5,
      minAmount: 10
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      description: 'Paytm, Amazon Pay, etc.',
      icon: '👛',
      enabled: true,
      processingFee: 1.0,
      minAmount: 1
    },
    {
      id: 'pay_at_hospital',
      name: 'Pay at Hospital',
      description: 'Pay when you visit the hospital',
      icon: '🏥',
      enabled: true,
      processingFee: 0,
      minAmount: 1
    }
  ],

  // Supported banks for net banking
  banks: [
    { code: 'SBI', name: 'State Bank of India' },
    { code: 'HDFC', name: 'HDFC Bank' },
    { code: 'ICICI', name: 'ICICI Bank' },
    { code: 'AXIS', name: 'Axis Bank' },
    { code: 'KOTAK', name: 'Kotak Mahindra Bank' },
    { code: 'PNB', name: 'Punjab National Bank' },
    { code: 'BOB', name: 'Bank of Baroda' },
    { code: 'CANARA', name: 'Canara Bank' }
  ],

  // Discount & offer codes
  offers: [
    {
      code: 'FIRST10',
      description: '10% off on first appointment',
      discount: 10,
      type: 'percentage',
      minAmount: 200,
      maxDiscount: 100,
      validFor: ['appointment'],
      active: true
    },
    {
      code: 'HEALTH20',
      description: '20% off on health packages',
      discount: 20,
      type: 'percentage',
      minAmount: 1000,
      maxDiscount: 500,
      validFor: ['package'],
      active: true
    },
    {
      code: 'SENIOR15',
      description: '15% off for senior citizens',
      discount: 15,
      type: 'percentage',
      minAmount: 100,
      maxDiscount: 200,
      validFor: ['appointment', 'package'],
      active: true
    }
  ],

  // Payment security features
  security: {
    encryption: 'AES-256',
    pciCompliant: true,
    sslEnabled: true,
    twoFactorAuth: true
  },

  // Currency and tax configuration
  currency: {
    code: 'INR',
    symbol: '₹',
    locale: 'en-IN'
  },

  tax: {
    gst: 18, // percentage
    serviceCharge: 0 // flat fee
  }
};

// Payment transaction statuses
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SUCCESS: 'success',
  FAILED: 'failed',
  CANCELLED: 'cancelled',
  REFUNDED: 'refunded'
};

// Transaction types
export const TRANSACTION_TYPES = {
  APPOINTMENT: 'appointment',
  PACKAGE: 'package',
  CONSULTATION: 'consultation',
  REFUND: 'refund'
};
