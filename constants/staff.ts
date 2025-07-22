// Leadership & Staff Information
export const LEADERSHIP = {
  chiefMedicalOfficer: {
    name: 'Dr. Rohit Dubey',
    title: 'Chief Medical Officer & Senior Anesthesiologist',
    qualifications: 'MD (Anesthesia), FIPM',
    experience: '15+ years',
    image: '/images/doctors/dr-rohit-dubey.jpg',
    specialization: 'Anesthesiology & Critical Care',
    bio: 'Dr. Rohit Dubey leads our medical team with a vision of providing exceptional healthcare services. With over 15 years of experience in anesthesiology and critical care, he has been instrumental in establishing modern medical practices at Shriram Hospital.',
    consultationDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    consultationTime: '10:00 AM - 2:00 PM',
    consultationFee: 500,
    email: 'rohit.dubey@shriramhospital.in',
    phone: '07652-248248'
  },
  
  // Management Team
  management: [
    {
      id: 1,
      name: 'Mr. Rajesh Shriram',
      title: 'Chairman & Managing Director',
      qualifications: 'MBA (Healthcare Management)',
      experience: '20+ years',
      image: '/images/management/chairman.jpg',
      bio: 'Leading the hospital with a vision to provide world-class healthcare facilities in the Mahakaushal region.'
    },
    {
      id: 2,
      name: 'Mrs. Priya Shriram',
      title: 'Director - Operations',
      qualifications: 'MSc (Hospital Administration)',
      experience: '15+ years',
      image: '/images/management/director.jpg',
      bio: 'Overseeing day-to-day operations and ensuring smooth patient care delivery.'
    }
  ],

  // Department Heads
  departmentHeads: [
    {
      departmentId: 1,
      doctorId: 1,
      title: 'Head of Cardiology'
    },
    {
      departmentId: 2,
      doctorId: 2,
      title: 'Head of Critical Care'
    }
  ]
};

// Doctor Database
export const DOCTORS = [
  {
    id: 1,
    firstName: 'Rohit',
    lastName: 'Dubey',
    fullName: 'Dr. Rohit Dubey',
    specialization: 'Anesthesiology & Critical Care',
    departmentId: 2, // Critical Care
    qualifications: 'MD (Anesthesia), FIPM',
    experience: '15+ years',
    image: '/images/doctors/dr-rohit-dubey.jpg',
    consultationDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    consultationTime: '10:00 AM - 2:00 PM',
    consultationFee: 500,
    isChief: true,
    isAvailable: true,
    bio: 'Highly experienced anesthesiologist with expertise in critical care medicine. Has performed over 5000+ surgeries and managed critical cases.',
    languages: ['Hindi', 'English'],
    awards: ['Best Doctor Award 2023', 'Excellence in Critical Care 2022'],
    email: 'rohit.dubey@shriramhospital.in',
    phone: '07652-248248'
  },
  {
    id: 2,
    firstName: 'S.C.',
    lastName: 'Tripathi',
    fullName: 'Dr. S.C. Tripathi',
    specialization: 'General Surgery',
    departmentId: 7, // General Surgery
    qualifications: 'MS (General Surgery)',
    experience: '20+ years',
    image: '/images/doctors/dr-sc-tripathi.jpg',
    consultationDays: ['Monday', 'Wednesday', 'Friday', 'Saturday'],
    consultationTime: '9:00 AM - 1:00 PM',
    consultationFee: 400,
    isChief: false,
    isAvailable: true,
    bio: 'Senior surgeon with extensive experience in general and laparoscopic surgeries. Known for precision and patient care.',
    languages: ['Hindi', 'English'],
    awards: ['Surgical Excellence Award 2021'],
    email: 'sc.tripathi@shriramhospital.in',
    phone: '07652-248248'
  },
  {
    id: 3,
    firstName: 'Priya',
    lastName: 'Sharma',
    fullName: 'Dr. Priya Sharma',
    specialization: 'Obstetrics & Gynaecology',
    departmentId: 6, // Obstetrics & Gynaecology
    qualifications: 'MD (Obstetrics & Gynaecology)',
    experience: '12+ years',
    image: '/images/doctors/dr-priya-sharma.jpg',
    consultationDays: ['Tuesday', 'Thursday', 'Friday', 'Saturday'],
    consultationTime: '10:00 AM - 2:00 PM, 4:00 PM - 6:00 PM',
    consultationFee: 450,
    isChief: false,
    isAvailable: true,
    bio: 'Experienced gynecologist specializing in high-risk pregnancies and minimally invasive surgeries.',
    languages: ['Hindi', 'English'],
    awards: ['Women\'s Health Excellence 2023'],
    email: 'priya.sharma@shriramhospital.in',
    phone: '07652-248248'
  },
  {
    id: 4,
    firstName: 'Amit',
    lastName: 'Kumar',
    fullName: 'Dr. Amit Kumar',
    specialization: 'Cardiology',
    departmentId: 1, // Cardiology
    qualifications: 'DM (Cardiology), MD (Medicine)',
    experience: '18+ years',
    image: '/images/doctors/dr-amit-kumar.jpg',
    consultationDays: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
    consultationTime: '11:00 AM - 3:00 PM',
    consultationFee: 600,
    isChief: true,
    isAvailable: true,
    bio: 'Leading cardiologist with expertise in interventional cardiology and cardiac catheterization.',
    languages: ['Hindi', 'English'],
    awards: ['Cardiac Care Excellence 2022', 'Lifetime Achievement in Cardiology 2021'],
    email: 'amit.kumar@shriramhospital.in',
    phone: '07652-248248'
  }
];

// Staff Categories
export const STAFF_CATEGORIES = {
  doctors: 25,
  nurses: 45,
  technicians: 30,
  administrative: 25,
  support: 25
};
