// Hospital Configuration - Main Information
export const HOSPITAL_CONFIG = {
  name: 'Shriram Hospital, Shahdol',
  tagline: 'Compassionate Care • Advanced Treatment • Trusted Since 2004',
  shortName: 'Shriram Hospital',
  yearEstablished: 2004,
  
  // Contact Information
  contact: {
    phone: '07652-248248',
    ambulance: '07652-248248',
    email: 'info@shriramhospital.in',
    website: 'www.shriramhospital.in',
    address: {
      street: 'Pali Road, Jaistham Chowk',
      city: 'Shahdol',
      state: 'Madhya Pradesh',
      pincode: '484 001',
      fullAddress: 'Pali Road, Jaistham Chowk, Shahdol – 484 001, Madhya Pradesh'
    }
  },

  // Hospital Stats
  stats: {
    beds: 105,
    icuBeds: 20,
    totalStaff: 150,
    patientsServed: 120000,
    patientsRated: 4.8,
    yearsOfService: new Date().getFullYear() - 2004
  },

  // Certifications & Accreditations
  certifications: {
    nabhAccredited: false, // set true once certified
    iso: false,
    nabh: false,
    jci: false
  },

  // Emergency Services
  emergency: {
    available24x7: true,
    ambulanceService: true,
    traumaCenter: true,
    bloodBank: true
  },

  // Operating Hours
  operatingHours: {
    opd: '9:00 AM - 6:00 PM',
    emergency: '24x7',
    pharmacy: '24x7',
    laboratory: '7:00 AM - 9:00 PM'
  }
};

// Social Media & Online Presence
export const SOCIAL_LINKS = {
  facebook: '',
  twitter: '',
  instagram: '',
  linkedin: '',
  youtube: '',
  whatsapp: '+91-7652-248248'
};

// SEO & Meta Information
export const SEO_CONFIG = {
  defaultTitle: 'Shriram Hospital Shahdol - Quality Healthcare in Madhya Pradesh',
  defaultDescription: 'Shriram Hospital Shahdol offers comprehensive healthcare services with modern facilities, experienced doctors, and compassionate care since 2004.',
  keywords: 'hospital shahdol, healthcare madhya pradesh, medical services, emergency care, specialist doctors',
  ogImage: '/images/hospital-exterior.jpg'
};
