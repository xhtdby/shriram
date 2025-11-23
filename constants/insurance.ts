// TPA & Insurance Partners
export const TPA_PARTNERS = [
  {
    id: 1,
    name: 'ICICI Lombard General Insurance',
    shortName: 'ICICI Lombard',
    logo: '/images/tpa/icici-lombard.png',
    category: 'General Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-2666',
    website: 'www.icicilombard.com',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 2,
    name: 'Star Health and Allied Insurance',
    shortName: 'Star Health',
    logo: '/images/tpa/star-health.png',
    category: 'Health Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-425-2255',
    website: 'www.starhealth.in',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 3,
    name: 'HDFC ERGO General Insurance',
    shortName: 'HDFC ERGO',
    logo: '/images/tpa/hdfc-ergo.png',
    category: 'General Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-2575',
    website: 'www.hdfcergo.com',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 4,
    name: 'Bajaj Allianz General Insurance',
    shortName: 'Bajaj Allianz',
    logo: '/images/tpa/bajaj-allianz.png',
    category: 'General Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-209-5858',
    website: 'www.bajajallianz.com',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 5,
    name: 'New India Assurance Company',
    shortName: 'New India Assurance',
    logo: '/images/tpa/new-india.png',
    category: 'Public Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-209-1415',
    website: 'www.newindia.co.in',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 6,
    name: 'Oriental Insurance Company',
    shortName: 'Oriental Insurance',
    logo: '/images/tpa/oriental.png',
    category: 'Public Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-118-485',
    website: 'www.orientalinsurance.org.in',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 7,
    name: 'United India Insurance Company',
    shortName: 'United India',
    logo: '/images/tpa/united-india.png',
    category: 'Public Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-4253-003',
    website: 'www.uiic.co.in',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 8,
    name: 'National Insurance Company',
    shortName: 'National Insurance',
    logo: '/images/tpa/national.png',
    category: 'Public Insurance',
    cashlessAvailable: true,
    contactNumber: '1800-200-7710',
    website: 'www.nationalinsuranceindia.nic.co.in',
    services: ['Cashless Treatment', 'Reimbursement', 'Pre-authorization']
  },
  {
    id: 9,
    name: 'Ayushman Bharat (आयुष्मान भारत)',
    shortName: 'Ayushman Bharat',
    logo: '/images/tpa/ayushman-bharat.png',
    category: 'Government Scheme',
    cashlessAvailable: true,
    contactNumber: '14555',
    website: 'pmjay.gov.in',
    services: ['Cashless Treatment', 'Pre-authorization', 'Free Healthcare']
  },
  {
    id: 10,
    name: 'Railways Medical Services',
    shortName: 'Railways',
    logo: '/images/tpa/railways.png',
    category: 'Government',
    cashlessAvailable: true,
    contactNumber: '139',
    website: 'indianrailways.gov.in',
    services: ['Cashless Treatment', 'Railway Employee Coverage']
  },
  {
    id: 11,
    name: 'BSNL Medical Services',
    shortName: 'BSNL',
    logo: '/images/tpa/bsnl.png',
    category: 'PSU',
    cashlessAvailable: true,
    contactNumber: '1800-180-1503',
    website: 'bsnl.co.in',
    services: ['Cashless Treatment', 'BSNL Employee Coverage']
  },
  {
    id: 12,
    name: 'SECC (State Employee Cashless Care)',
    shortName: 'SECC',
    logo: '/images/tpa/secc.png',
    category: 'Government',
    cashlessAvailable: true,
    contactNumber: 'N/A',
    website: 'N/A',
    services: ['Cashless Treatment', 'State Employee Coverage']
  },
  {
    id: 13,
    name: 'OPM (Office of Personnel Management)',
    shortName: 'OPM',
    logo: '/images/tpa/opm.png',
    category: 'Government',
    cashlessAvailable: true,
    contactNumber: 'N/A',
    website: 'N/A',
    services: ['Cashless Treatment', 'Government Employee Coverage']
  },
  {
    id: 14,
    name: 'ONGC Medical Services',
    shortName: 'ONGC',
    logo: '/images/tpa/ongc.png',
    category: 'PSU',
    cashlessAvailable: true,
    contactNumber: '1800-103-5050',
    website: 'ongcindia.com',
    services: ['Cashless Treatment', 'ONGC Employee Coverage']
  }
];

// Cashless Process Steps
export const CASHLESS_PROCESS = [
  {
    step: 1,
    title: 'Present Insurance Card',
    description: 'Present your insurance card at the time of admission',
    icon: 'card'
  },
  {
    step: 2,
    title: 'Verification',
    description: 'Our TPA desk will verify your coverage and eligibility',
    icon: 'verify'
  },
  {
    step: 3,
    title: 'Pre-Authorization',
    description: 'Pre-authorization will be obtained from your insurance company',
    icon: 'authorize'
  },
  {
    step: 4,
    title: 'Treatment',
    description: 'Receive cashless treatment as per your policy coverage',
    icon: 'treatment'
  },
  {
    step: 5,
    title: 'Discharge',
    description: 'Smooth discharge process with minimal paperwork',
    icon: 'discharge'
  }
];

// Required Documents for Cashless Treatment
export const CASHLESS_DOCUMENTS = [
  'Original Insurance Policy Document',
  'Insurance Card/E-Card',
  'Valid Photo ID (Aadhar/PAN/Driving License)',
  'Pre-authorization Form (if available)',
  'Medical Records (if any previous treatment)',
  'Employer Certificate (for Group Insurance)'
];
