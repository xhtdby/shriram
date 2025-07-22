// Hospital Information
export const hospitalInfo = {
  name: 'Shriram Hospital, Shahdol',
  tagline: 'Compassionate Care • Advanced Treatment • Trusted Since 1998',
  beds: 105,
  icuBeds: 20,
  phone: '07652-248248',
  ambulance: '07652-248248',
  email: 'info@shriramhospital.in',
  address: 'Pali Road, Jaistham Chowk, Shahdol – 484 001, Madhya Pradesh',
  nabhAccredited: false, // set true once certified
  patientsRated: 4.8,
  yearEstablished: 1998,
  totalStaff: 150,
  patientsServed: 120000,
  leadership: {
    chiefDoctor: 'Dr. Rohit Dubey',
    chiefTitle: 'Chief Medical Officer & Senior Anesthesiologist',
    chiefQualifications: 'MD (Anesthesia), FIPM',
    chiefExperience: '15+ years',
    chiefImage: '/images/doctors/dr-rohit-dubey.jpg'
  }
};

// Department names for carousel
export const departmentNames = [
  'Cardiology', 'Critical Care', 'Nephrology', 'Neurology', 'Orthopaedics',
  'Obstetrics & Gynaecology', 'General Surgery', 'Urology', 'Dermatology',
  'ENT', 'Pulmonology', 'Diabetology & Endocrinology',
];

export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  doctors: Doctor[];
}

export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  specialization: string;
  departmentId: number;
  qualifications?: string;
  image?: string;
  experience?: string;
  consultationTime?: string;
  isChief?: boolean;
  availableDays?: string[];
  consultationFee?: string;
  bio?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  author: string;
  publishedDate: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
}

export interface TPA {
  id: number;
  name: string;
  logo?: string;
  website?: string;
}

export const departments: Department[] = [
  {
    id: 1,
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Our General Surgery department offers a wide range of surgical procedures. Our experienced surgeons are equipped to handle everything from routine operations to complex emergency cases, using the latest minimally invasive techniques to ensure faster recovery.',
    doctors: [
      { 
        id: 1, 
        firstName: 'S.C.', 
        lastName: 'Tripathi', 
        specialization: 'Senior General Surgeon', 
        departmentId: 1, 
        qualifications: 'MS (General Surgery)',
        experience: '12+ years',
        image: '/images/doctors/dr-sc-tripathi.jpg',
        consultationTime: '10:00 AM - 5:00 PM',
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        consultationFee: '₹400',
        bio: 'Dr. S.C. Tripathi is a highly experienced general surgeon specializing in laparoscopic and minimally invasive surgical procedures. He has performed over 2000 successful surgeries and is known for his precision and patient care.'
      }
    ]
  },
  {
    id: 2,
    name: 'Gynecology',
    slug: 'gynecology',
    description: 'We provide comprehensive care for women\'s health, from routine check-ups to advanced procedures. Our services include maternity care, menopause management, and treatment for a variety of gynecological conditions, all in a supportive and compassionate environment.',
    doctors: [
      { id: 2, firstName: 'S.P.', lastName: 'Chaturvedi', specialization: 'Gynecologist', departmentId: 2, qualifications: 'MD, DGO' },
      { id: 3, firstName: 'Geetika', lastName: 'Shukla', specialization: 'Gynecologist', departmentId: 2, qualifications: 'MS (Obs & Gynae)' }
    ]
  },
  {
    id: 3,
    name: 'Orthopedic',
    slug: 'orthopedic',
    description: 'The Orthopedic department specializes in the diagnosis and treatment of injuries and diseases of the musculoskeletal system. We offer joint replacement, sports medicine, trauma care, and physical therapy to help you regain mobility and live pain-free.',
    doctors: [
      { id: 4, firstName: 'Amol Prabhakar', lastName: 'Pandey', specialization: 'Orthopedic Surgeon', departmentId: 3, qualifications: 'MS (Ortho)' }
    ]
  },
  {
    id: 4,
    name: 'Pediatric',
    slug: 'pediatric',
    description: 'Our Pediatric department is dedicated to the health and well-being of children from infancy through adolescence. We offer a child-friendly environment with services ranging from regular check-ups and immunizations to specialized care for childhood illnesses.',
    doctors: [
      { id: 5, firstName: 'TN', lastName: 'Chaturvedi', specialization: 'Pediatrician', departmentId: 4, qualifications: 'MD (Pediatrics)' }
    ]
  },
  {
    id: 5,
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'The General Medicine department is the first point of contact for most patients. Our physicians are skilled in diagnosing a wide range of health issues, managing chronic conditions, and providing comprehensive primary care for adults.',
    doctors: [
      { id: 6, firstName: 'Amit Kumar', lastName: 'Verma', specialization: 'General Physician', departmentId: 5, qualifications: 'MD (Medicine)' }
    ]
  },
  {
    id: 6,
    name: 'Anesthesia',
    slug: 'anesthesia',
    description: 'Our Anesthesia team plays a crucial role in ensuring patient safety and comfort during surgical procedures. We provide expert anesthetic care before, during, and after surgery, as well as comprehensive pain management services.',
    doctors: [
      { 
        id: 7, 
        firstName: 'Rohit', 
        lastName: 'Dubey', 
        specialization: 'Chief Medical Officer & Senior Anesthesiologist', 
        departmentId: 6, 
        qualifications: 'MD (Anesthesia), FIPM',
        experience: '15+ years',
        image: '/images/doctors/dr-rohit-dubey.jpg',
        consultationTime: '9:00 AM - 6:00 PM',
        isChief: true,
        availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        consultationFee: '₹500',
        bio: 'Dr. Rohit Dubey serves as the Chief Medical Officer and Senior Anesthesiologist at Shriram Hospital. With over 15 years of experience in anesthesiology and critical care, he leads our medical team with expertise in perioperative care, pain management, and emergency medicine. He is committed to providing the highest standards of patient safety and comfort.'
      }
    ]
  },
  {
    id: 7,
    name: 'Urology',
    slug: 'urology',
    description: 'Specializing in the urinary tract and male reproductive system, our Urology department offers advanced diagnostic and treatment options for conditions like kidney stones, prostate issues, and urinary incontinence. We offer both medical and surgical solutions.',
    doctors: [
      { id: 8, firstName: 'Amit', lastName: 'Gaur', specialization: 'Urologist (Visiting)', departmentId: 7, qualifications: 'MS, M.Ch (Urology)' }
    ]
  },
  {
    id: 8,
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Our Cardiology department provides top-tier care for heart-related conditions. With advanced diagnostic imaging, and a full range of interventional procedures, we are committed to helping our patients maintain a healthy heart.',
    doctors: [
      { id: 9, firstName: 'A.A.', lastName: 'Ansari', specialization: 'Cardiologist (Visiting)', departmentId: 8, qualifications: 'MD, DM (Cardiology)' }
    ]
  },
  {
    id: 9,
    name: 'Maxillofacial Surgery',
    slug: 'maxillofacial-surgery',
    description: 'This specialized department focuses on surgery of the face, mouth, and jaws. We treat a variety of conditions, including facial trauma, corrective jaw surgery, and complex dental extractions, blending surgical skill with an aesthetic approach.',
    doctors: [
      { id: 10, firstName: 'Siddharth', lastName: 'Singh', specialization: 'Maxillofacial Surgeon', departmentId: 9, qualifications: 'MDS' }
    ]
  }
];

export const hospitalStats = {
  beds: 160,
  ccuBeds: 36,
  ots: 5,
  departments: departments.length,
  doctors: departments.reduce((acc, dept) => acc + dept.doctors.length, 0),
};

export const healthPackages = [
  { id: 1, name: 'Basic Health Checkup', price: '₹1,200', tests: ['Complete Blood Count', 'Blood Sugar', 'Urine Analysis', 'ECG'] },
  { id: 2, name: 'Comprehensive Heart Check', price: '₹4,500', tests: ['ECHO', 'TMT', 'Lipid Profile', 'Cardiac Enzymes'] },
  { id: 3, name: 'Women Wellness Package', price: '₹3,500', tests: ['Pap Smear', 'Mammogram', 'Thyroid Profile', 'Vitamin D'] },
];

export const testimonials = [
  { id: 1, name: 'R. Sharma', quote: 'The care I received at Shriram Hospital was exceptional. The doctors and staff were professional and compassionate throughout my stay.' },
  { id: 2, name: 'S. Gupta', quote: 'A very clean and well-maintained hospital. The orthopedic department is top-notch. Highly recommended for any surgical needs.' },
  { id: 3, name: 'P. Verma', quote: 'My daughter was treated in the pediatric ward, and we couldn\'t have asked for better care. The doctors were wonderful with her.' },
];

export const tpaList: TPA[] = [
  { id: 1, name: 'ICICI Lombard', logo: '/images/tpa/icici-lombard.png' },
  { id: 2, name: 'Star Health Insurance', logo: '/images/tpa/star-health.png' },
  { id: 3, name: 'HDFC ERGO', logo: '/images/tpa/hdfc-ergo.png' },
  { id: 4, name: 'Bajaj Allianz', logo: '/images/tpa/bajaj-allianz.png' },
  { id: 5, name: 'New India Assurance', logo: '/images/tpa/new-india.png' },
  { id: 6, name: 'Oriental Insurance', logo: '/images/tpa/oriental.png' },
  { id: 7, name: 'United India Insurance', logo: '/images/tpa/united-india.png' },
  { id: 8, name: 'National Insurance', logo: '/images/tpa/national.png' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'monsoon-health-tips',
    title: '5 Essential Health Tips for the Monsoon Season',
    author: 'Dr. Amit Kumar Verma',
    publishedDate: '2023-07-15',
    excerpt: 'The monsoon brings relief from the heat, but also a host of health issues. Here are some essential tips to stay healthy...',
    content: 'The monsoon season, while beautiful, is also a time when infections are rampant. It is crucial to take extra precautions to safeguard your health. Firstly, ensure you drink only boiled or purified water to avoid water-borne diseases like typhoid and cholera. Secondly, boost your immunity by including Vitamin C-rich foods in your diet. Thirdly, avoid eating street food as it may be contaminated. Fourthly, keep your surroundings clean and prevent water stagnation to avoid mosquito-borne illnesses like dengue and malaria. Lastly, maintain good personal hygiene by washing your hands frequently.',
    category: 'Health Tips',
    image: '/images/blog/monsoon-health.jpg'
  },
  {
    id: 2,
    slug: 'understanding-cardiac-health',
    title: 'Understanding Cardiac Health: A Guide for All Ages',
    author: 'Dr. A.A. Ansari',
    publishedDate: '2023-07-10',
    excerpt: 'Heart disease is a leading cause of mortality, but it is largely preventable. Learn about the key aspects of cardiac health.',
    content: 'Maintaining a healthy heart is vital for overall well-being. A balanced diet low in saturated fats and sodium is fundamental. Regular physical activity, at least 30 minutes a day, strengthens the heart muscle. It is also important to manage stress through techniques like meditation or yoga. Regular health check-ups, especially for blood pressure and cholesterol levels, can help in early detection and management of potential issues. Quitting smoking and limiting alcohol consumption are also critical steps towards a healthier heart.',
    category: 'Cardiology',
    image: '/images/blog/cardiac-health.jpg'
  },
  {
    id: 3,
    slug: 'new-gynecology-wing',
    title: 'Shriram Hospital Inaugurates New State-of-the-Art Gynecology Wing',
    author: 'Hospital Administration',
    publishedDate: '2023-07-05',
    excerpt: 'We are thrilled to announce the opening of our new gynecology wing, equipped with the latest technology and designed for patient comfort.',
    content: 'In our continuous effort to provide the best healthcare services, Shriram Hospital has inaugurated a new gynecology wing. This new facility features advanced diagnostic equipment, modern labor and delivery rooms, and a dedicated team of experienced gynecologists and support staff. The wing is designed to provide a comfortable and supportive environment for women through all stages of life, from adolescence to post-menopause. We are committed to setting new standards in women\'s healthcare in the Mahakaushal region.',
    category: 'Hospital News',
    image: '/images/blog/gynecology-wing.jpg'
  }
];

export function getDepartments() {
  return departments;
}

export function getDepartmentBySlug(slug: string) {
  return departments.find(dept => dept.slug === slug);
}

export function getBlogPosts() {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug);
}

export function getTpaList() {
  return tpaList;
}
