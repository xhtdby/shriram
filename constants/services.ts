// Medical Services & Facilities
export const SERVICES = {
  emergency: [
    {
      id: 1,
      name: '24x7 Emergency Care',
      description: 'Round-the-clock emergency medical services with trauma care',
      icon: '/images/services/emergency.svg',
      available: true
    },
    {
      id: 2,
      name: 'Ambulance Service',
      description: 'Well-equipped ambulances with trained paramedical staff',
      icon: '/images/services/ambulance.svg',
      available: true
    },
    {
      id: 3,
      name: 'Blood Bank',
      description: 'Safe blood storage and transfusion services',
      icon: '/images/services/blood-bank.svg',
      available: true
    },
    {
      id: 4,
      name: 'ICU & Critical Care',
      description: 'Advanced intensive care with ventilator support',
      icon: '/images/services/icu.svg',
      available: true
    }
  ],

  diagnostic: [
    {
      id: 5,
      name: 'Laboratory Services',
      description: 'Comprehensive pathological and biochemical testing',
      icon: '/images/services/laboratory.svg',
      available: true
    },
    {
      id: 6,
      name: 'Radiology & Imaging',
      description: 'X-Ray, Ultrasound, CT Scan, and other imaging services',
      icon: '/images/services/radiology.svg',
      available: true
    },
    {
      id: 7,
      name: 'ECG & Echo',
      description: 'Cardiac diagnostic services',
      icon: '/images/services/ecg.svg',
      available: true
    },
    {
      id: 8,
      name: 'Endoscopy',
      description: 'Advanced endoscopic procedures',
      icon: '/images/services/endoscopy.svg',
      available: true
    }
  ],

  specialized: [
    {
      id: 9,
      name: 'Dialysis Center',
      description: 'Modern hemodialysis facility',
      icon: '/images/services/dialysis.svg',
      available: true
    },
    {
      id: 10,
      name: 'Operation Theaters',
      description: 'Modern OTs with advanced surgical equipment',
      icon: '/images/services/operation-theater.svg',
      available: true
    },
    {
      id: 11,
      name: 'Maternity Ward',
      description: 'Complete maternity care with NICU facilities',
      icon: '/images/services/maternity.svg',
      available: true
    },
    {
      id: 12,
      name: 'Physiotherapy',
      description: 'Rehabilitation and physiotherapy services',
      icon: '/images/services/physiotherapy.svg',
      available: true
    }
  ],

  support: [
    {
      id: 13,
      name: 'Pharmacy',
      description: '24x7 in-house pharmacy with medicine availability',
      icon: '/images/services/pharmacy.svg',
      available: true
    },
    {
      id: 14,
      name: 'Canteen & Cafeteria',
      description: 'Nutritious food services for patients and visitors',
      icon: '/images/services/canteen.svg',
      available: true
    },
    {
      id: 15,
      name: 'Guest House',
      description: 'Accommodation facility for patient attendants',
      icon: '/images/services/guest-house.svg',
      available: false
    },
    {
      id: 16,
      name: 'Parking',
      description: 'Ample parking space for vehicles',
      icon: '/images/services/parking.svg',
      available: true
    }
  ]
};

// Health Packages
export const HEALTH_PACKAGES = [
  {
    id: 1,
    name: 'Basic Health Checkup',
    description: 'Essential health screening for early detection of common health issues',
    price: 2500,
    duration: '2-3 hours',
    includes: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting & PP)',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Thyroid Function Test',
      'Urine Routine',
      'ECG',
      'Chest X-Ray',
      'General Physician Consultation'
    ],
    ageGroup: '18-40 years',
    recommended: 'Annual checkup for healthy adults',
    category: 'basic'
  },
  {
    id: 2,
    name: 'Comprehensive Health Checkup',
    description: 'Detailed health assessment with advanced screening tests',
    price: 4500,
    duration: '4-5 hours',
    includes: [
      'All Basic Health Checkup tests',
      'HbA1c',
      'Vitamin D3',
      'Vitamin B12',
      'Iron Studies',
      'Cardiac Markers',
      'Tumor Markers (Basic)',
      'Ultrasound Abdomen',
      'ECHO',
      'Stress Test',
      'Specialist Consultation (if required)'
    ],
    ageGroup: '40+ years',
    recommended: 'Annual comprehensive screening for adults above 40',
    category: 'comprehensive'
  },
  {
    id: 3,
    name: 'Cardiac Health Package',
    description: 'Specialized cardiac screening for heart health assessment',
    price: 3500,
    duration: '3-4 hours',
    includes: [
      'Lipid Profile',
      'Blood Sugar',
      'ECG',
      'ECHO',
      'Stress Test',
      'Chest X-Ray',
      'Cardiac Markers',
      'Homocysteine',
      'CRP',
      'Cardiologist Consultation'
    ],
    ageGroup: 'All ages',
    recommended: 'For those with family history of heart disease',
    category: 'cardiac'
  },
  {
    id: 4,
    name: 'Women\'s Health Package',
    description: 'Comprehensive health screening designed specifically for women',
    price: 4000,
    duration: '3-4 hours',
    includes: [
      'Complete Blood Count',
      'Thyroid Function Test',
      'Blood Sugar',
      'Lipid Profile',
      'Iron Studies',
      'Calcium & Vitamin D',
      'Pap Smear',
      'Breast Examination',
      'Pelvic Ultrasound',
      'Mammography (above 40 years)',
      'Gynecologist Consultation'
    ],
    ageGroup: '18+ years',
    recommended: 'Annual screening for women\'s health',
    category: 'womens'
  },
  {
    id: 5,
    name: 'Diabetes Management Package',
    description: 'Comprehensive diabetes screening and management assessment',
    price: 3000,
    duration: '2-3 hours',
    includes: [
      'HbA1c',
      'Fasting & PP Blood Sugar',
      'Lipid Profile',
      'Kidney Function Test',
      'Urine Microalbumin',
      'Fundus Examination',
      'ECG',
      'Diabetic Foot Assessment',
      'Diabetologist Consultation',
      'Dietitian Consultation'
    ],
    ageGroup: 'Diabetic patients',
    recommended: 'Quarterly monitoring for diabetic patients',
    category: 'diabetes'
  },
  {
    id: 6,
    name: 'Senior Citizen Package',
    description: 'Tailored health checkup for elderly patients (65+ years)',
    price: 5000,
    duration: '4-6 hours',
    includes: [
      'Complete Blood Count',
      'Comprehensive Metabolic Panel',
      'Thyroid Function',
      'Vitamin B12 & D3',
      'Prostate Specific Antigen (for men)',
      'Bone Density Scan',
      'ECG & ECHO',
      'Chest X-Ray',
      'Ultrasound Abdomen',
      'Cognitive Assessment',
      'Geriatrician Consultation'
    ],
    ageGroup: '65+ years',
    recommended: 'Bi-annual checkup for senior citizens',
    category: 'senior'
  }
];
