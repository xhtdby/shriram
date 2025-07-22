// Appointment and Consultation Configuration
export const APPOINTMENT_CONFIG = {
  // Time slots for appointments
  timeSlots: [
    { id: 1, time: '9:00 AM', available: true },
    { id: 2, time: '9:30 AM', available: true },
    { id: 3, time: '10:00 AM', available: true },
    { id: 4, time: '10:30 AM', available: true },
    { id: 5, time: '11:00 AM', available: true },
    { id: 6, time: '11:30 AM', available: true },
    { id: 7, time: '12:00 PM', available: true },
    { id: 8, time: '12:30 PM', available: true },
    { id: 9, time: '2:00 PM', available: true },
    { id: 10, time: '2:30 PM', available: true },
    { id: 11, time: '3:00 PM', available: true },
    { id: 12, time: '3:30 PM', available: true },
    { id: 13, time: '4:00 PM', available: true },
    { id: 14, time: '4:30 PM', available: true },
    { id: 15, time: '5:00 PM', available: true },
    { id: 16, time: '5:30 PM', available: true }
  ],

  // Appointment types
  appointmentTypes: [
    {
      id: 1,
      name: 'Regular Consultation',
      duration: 30,
      description: 'Standard doctor consultation'
    },
    {
      id: 2,
      name: 'Follow-up',
      duration: 15,
      description: 'Follow-up visit for existing patients'
    },
    {
      id: 3,
      name: 'Health Checkup',
      duration: 60,
      description: 'Comprehensive health assessment'
    },
    {
      id: 4,
      name: 'Emergency Consultation',
      duration: 20,
      description: 'Urgent medical consultation'
    }
  ],

  // Booking settings
  settings: {
    advanceBookingDays: 30,
    cancellationHours: 24,
    rescheduleLimit: 2,
    waitingListEnabled: true,
    confirmationRequired: true
  }
};

// Video Consultation Configuration
export const VIDEO_CONSULTATION_CONFIG = {
  availability: {
    enabled: true,
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    startTime: '9:00 AM',
    endTime: '6:00 PM',
    slotDuration: 30 // minutes
  },

  pricing: {
    general: 300,
    specialist: 500,
    followUp: 200,
    emergency: 800
  },

  platforms: [
    {
      name: 'Hospital App',
      description: 'Our secure in-house video consultation platform',
      recommended: true
    },
    {
      name: 'Google Meet',
      description: 'Google Meet video calls',
      recommended: false
    },
    {
      name: 'Zoom',
      description: 'Zoom video conferences',
      recommended: false
    }
  ],

  requirements: [
    'Stable internet connection (minimum 2 Mbps)',
    'Smartphone, tablet, or computer with camera',
    'Microphone and speakers/headphones',
    'Well-lit, quiet environment',
    'Previous medical records (if any)'
  ],

  limitations: [
    'Not suitable for emergency conditions',
    'Physical examination limitations',
    'Prescription medicines subject to regulations',
    'Follow-up may require physical visit'
  ],

  process: [
    {
      step: 1,
      title: 'Book Appointment',
      description: 'Schedule your video consultation online or by phone'
    },
    {
      step: 2,
      title: 'Payment',
      description: 'Complete payment through secure online gateway'
    },
    {
      step: 3,
      title: 'Preparation',
      description: 'Receive consultation link and prepare medical history'
    },
    {
      step: 4,
      title: 'Consultation',
      description: 'Join the video call at scheduled time'
    },
    {
      step: 5,
      title: 'Follow-up',
      description: 'Receive prescription and follow-up instructions'
    }
  ]
};

// Estimate Request Configuration
export const ESTIMATE_CONFIG = {
  procedures: [
    {
      id: 1,
      category: 'General Surgery',
      procedures: [
        { name: 'Appendectomy', code: 'GS001', estimateRange: '₹25,000 - ₹35,000' },
        { name: 'Hernia Repair', code: 'GS002', estimateRange: '₹20,000 - ₹30,000' },
        { name: 'Gallbladder Surgery', code: 'GS003', estimateRange: '₹30,000 - ₹45,000' },
        { name: 'Thyroid Surgery', code: 'GS004', estimateRange: '₹35,000 - ₹50,000' }
      ]
    },
    {
      id: 2,
      category: 'Orthopedics',
      procedures: [
        { name: 'Knee Replacement', code: 'OR001', estimateRange: '₹1,50,000 - ₹2,00,000' },
        { name: 'Hip Replacement', code: 'OR002', estimateRange: '₹1,20,000 - ₹1,80,000' },
        { name: 'Fracture Treatment', code: 'OR003', estimateRange: '₹15,000 - ₹40,000' },
        { name: 'Arthroscopy', code: 'OR004', estimateRange: '₹25,000 - ₹40,000' }
      ]
    },
    {
      id: 3,
      category: 'Cardiology',
      procedures: [
        { name: 'Angioplasty', code: 'CR001', estimateRange: '₹1,00,000 - ₹1,50,000' },
        { name: 'Bypass Surgery', code: 'CR002', estimateRange: '₹2,50,000 - ₹4,00,000' },
        { name: 'Pacemaker Implant', code: 'CR003', estimateRange: '₹80,000 - ₹1,20,000' },
        { name: 'Valve Replacement', code: 'CR004', estimateRange: '₹2,00,000 - ₹3,50,000' }
      ]
    },
    {
      id: 4,
      category: 'Obstetrics & Gynecology',
      procedures: [
        { name: 'Normal Delivery', code: 'OG001', estimateRange: '₹15,000 - ₹25,000' },
        { name: 'C-Section', code: 'OG002', estimateRange: '₹25,000 - ₹40,000' },
        { name: 'Hysterectomy', code: 'OG003', estimateRange: '₹30,000 - ₹50,000' },
        { name: 'Laparoscopy', code: 'OG004', estimateRange: '₹20,000 - ₹35,000' }
      ]
    }
  ],

  includesInEstimate: [
    'Doctor\'s consultation fees',
    'Hospital accommodation charges',
    'Operation theater charges',
    'Nursing care',
    'Basic medications',
    'Routine investigations'
  ],

  excludesFromEstimate: [
    'Complications and extended stay',
    'Additional procedures',
    'Special medications',
    'Blood transfusion (if required)',
    'Implants and prosthesis',
    'Post-operative complications'
  ],

  disclaimer: 'The estimates provided are approximate and may vary based on individual patient condition, complications, duration of stay, and additional procedures required. Final billing will be done based on actual services provided.'
};
