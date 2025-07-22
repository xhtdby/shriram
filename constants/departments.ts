// Department Configuration
export const DEPARTMENTS = [
  {
    id: 1,
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Comprehensive cardiac care with advanced diagnostic and treatment facilities for heart-related conditions.',
    icon: '/images/dept-icons/cardiology.svg',
    image: '/images/departments/cardiology.jpg',
    services: [
      'ECG & Echo Cardiography',
      'Stress Testing',
      'Cardiac Catheterization',
      'Angioplasty',
      'Pacemaker Implantation',
      'Heart Surgery Consultation'
    ],
    equipment: ['ECG Machine', 'Echocardiography', 'Stress Test Equipment', 'Cardiac Monitor'],
    doctorIds: [4], // Dr. Amit Kumar
    isEmergency: true,
    isActive: true
  },
  {
    id: 2,
    name: 'Critical Care',
    slug: 'critical-care',
    description: 'State-of-the-art ICU facilities with 24x7 monitoring and expert critical care management.',
    icon: '/images/dept-icons/critical-care.svg',
    image: '/images/departments/critical-care.jpg',
    services: [
      '24x7 ICU Care',
      'Ventilator Support',
      'Continuous Monitoring',
      'Emergency Resuscitation',
      'Post-operative Care',
      'Trauma Care'
    ],
    equipment: ['Ventilators', 'Patient Monitors', 'Defibrillators', 'Infusion Pumps'],
    doctorIds: [1], // Dr. Rohit Dubey
    isEmergency: true,
    isActive: true
  },
  {
    id: 3,
    name: 'Nephrology',
    slug: 'nephrology',
    description: 'Comprehensive kidney care including dialysis and treatment of kidney-related disorders.',
    icon: '/images/dept-icons/nephrology.svg',
    image: '/images/departments/nephrology.jpg',
    services: [
      'Hemodialysis',
      'Peritoneal Dialysis',
      'Kidney Stone Treatment',
      'Hypertension Management',
      'Chronic Kidney Disease Care',
      'Kidney Transplant Consultation'
    ],
    equipment: ['Dialysis Machines', 'Water Treatment Plant', 'Ultrasound'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  },
  {
    id: 4,
    name: 'Neurology',
    slug: 'neurology',
    description: 'Advanced neurological care for brain, spine, and nervous system disorders.',
    icon: '/images/dept-icons/neurology.svg',
    image: '/images/departments/neurology.jpg',
    services: [
      'Neurological Examination',
      'EEG & EMG',
      'Stroke Management',
      'Epilepsy Treatment',
      'Headache & Migraine Care',
      'Movement Disorder Treatment'
    ],
    equipment: ['EEG Machine', 'EMG Equipment', 'Neurological Instruments'],
    doctorIds: [],
    isEmergency: true,
    isActive: true
  },
  {
    id: 5,
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    description: 'Complete bone and joint care including trauma surgery and joint replacement.',
    icon: '/images/dept-icons/orthopaedics.svg',
    image: '/images/departments/orthopaedics.jpg',
    services: [
      'Fracture Treatment',
      'Joint Replacement',
      'Arthroscopy',
      'Spine Surgery',
      'Sports Medicine',
      'Trauma Surgery'
    ],
    equipment: ['X-Ray Machines', 'C-Arm', 'Arthroscopy Equipment', 'Physiotherapy Equipment'],
    doctorIds: [],
    isEmergency: true,
    isActive: true
  },
  {
    id: 6,
    name: 'Obstetrics & Gynaecology',
    slug: 'obstetrics-gynaecology',
    description: 'Complete women\'s health services including maternity care and gynecological treatments.',
    icon: '/images/dept-icons/obstetrics.svg',
    image: '/images/departments/obstetrics.jpg',
    services: [
      'Antenatal Care',
      'Normal & C-Section Delivery',
      'High-Risk Pregnancy Management',
      'Gynecological Surgery',
      'Infertility Treatment',
      'Family Planning'
    ],
    equipment: ['Ultrasound Machines', 'CTG Monitor', 'Labor Room Equipment', 'Operation Theater'],
    doctorIds: [3], // Dr. Priya Sharma
    isEmergency: true,
    isActive: true
  },
  {
    id: 7,
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Comprehensive surgical services including minimally invasive and laparoscopic procedures.',
    icon: '/images/dept-icons/surgery.svg',
    image: '/images/departments/surgery.jpg',
    services: [
      'General Surgery',
      'Laparoscopic Surgery',
      'Hernia Repair',
      'Gallbladder Surgery',
      'Appendectomy',
      'Emergency Surgery'
    ],
    equipment: ['Operation Theaters', 'Laparoscopy Equipment', 'Surgical Instruments', 'Anesthesia Machines'],
    doctorIds: [2], // Dr. S.C. Tripathi
    isEmergency: true,
    isActive: true
  },
  {
    id: 8,
    name: 'Urology',
    slug: 'urology',
    description: 'Specialized care for urinary tract and male reproductive system disorders.',
    icon: '/images/dept-icons/urology.svg',
    image: '/images/departments/urology.jpg',
    services: [
      'Kidney Stone Treatment',
      'Prostate Surgery',
      'Urinary Tract Infection Treatment',
      'Male Infertility Treatment',
      'Urological Cancer Care',
      'Minimally Invasive Procedures'
    ],
    equipment: ['Ultrasound', 'Endoscopy Equipment', 'Lithotripsy Machine'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  },
  {
    id: 9,
    name: 'Dermatology',
    slug: 'dermatology',
    description: 'Complete skin care services including treatment of skin disorders and cosmetic procedures.',
    icon: '/images/dept-icons/dermatology.svg',
    image: '/images/departments/dermatology.jpg',
    services: [
      'Skin Disease Treatment',
      'Acne & Pigmentation Treatment',
      'Hair Loss Treatment',
      'Cosmetic Dermatology',
      'Skin Cancer Screening',
      'Allergy Testing'
    ],
    equipment: ['Dermatoscope', 'Laser Equipment', 'Phototherapy Units'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  },
  {
    id: 10,
    name: 'ENT',
    slug: 'ent',
    description: 'Comprehensive ear, nose, and throat care with modern diagnostic and surgical facilities.',
    icon: '/images/dept-icons/ent.svg',
    image: '/images/departments/ent.jpg',
    services: [
      'Hearing Assessment',
      'Sinus Treatment',
      'Throat Surgery',
      'Tonsil & Adenoid Surgery',
      'Ear Surgery',
      'Voice Disorder Treatment'
    ],
    equipment: ['ENT Endoscope', 'Audiometer', 'Microscope', 'Surgical Instruments'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  },
  {
    id: 11,
    name: 'Pulmonology',
    slug: 'pulmonology',
    description: 'Specialized respiratory care for lung and breathing disorders.',
    icon: '/images/dept-icons/pulmonology.svg',
    image: '/images/departments/pulmonology.jpg',
    services: [
      'Pulmonary Function Tests',
      'Bronchoscopy',
      'Asthma Management',
      'COPD Treatment',
      'Sleep Study',
      'Lung Cancer Care'
    ],
    equipment: ['Spirometer', 'Bronchoscope', 'Nebulizers', 'Oxygen Concentrators'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  },
  {
    id: 12,
    name: 'Diabetology & Endocrinology',
    slug: 'diabetology-endocrinology',
    description: 'Comprehensive diabetes care and hormone-related disorder treatment.',
    icon: '/images/dept-icons/diabetology.svg',
    image: '/images/departments/diabetology.jpg',
    services: [
      'Diabetes Management',
      'Thyroid Treatment',
      'Hormone Therapy',
      'Insulin Pump Therapy',
      'Diabetic Foot Care',
      'Nutritional Counseling'
    ],
    equipment: ['Glucometers', 'HbA1c Analyzer', 'Insulin Pumps'],
    doctorIds: [],
    isEmergency: false,
    isActive: true
  }
];

// Emergency Departments
export const EMERGENCY_DEPARTMENTS = DEPARTMENTS.filter(dept => dept.isEmergency);

// Department categories for easier management
export const DEPARTMENT_CATEGORIES = {
  medical: [1, 3, 4, 11, 12], // Cardiology, Nephrology, Neurology, Pulmonology, Diabetology
  surgical: [2, 5, 7, 8], // Critical Care, Orthopaedics, General Surgery, Urology
  specialized: [6, 9, 10], // Obstetrics, Dermatology, ENT
  emergency: EMERGENCY_DEPARTMENTS.map(dept => dept.id)
};
