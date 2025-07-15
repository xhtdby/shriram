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
}

export const departments: Department[] = [
  {
    id: 1,
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Our General Surgery department offers a wide range of surgical procedures. Our experienced surgeons are equipped to handle everything from routine operations to complex emergency cases, using the latest minimally invasive techniques to ensure faster recovery.',
    doctors: [
      { id: 1, firstName: 'S.C.', lastName: 'Tripathi', specialization: 'General Surgeon', departmentId: 1 }
    ]
  },
  {
    id: 2,
    name: 'Gynecology',
    slug: 'gynecology',
    description: 'We provide comprehensive care for women\'s health, from routine check-ups to advanced procedures. Our services include maternity care, menopause management, and treatment for a variety of gynecological conditions, all in a supportive and compassionate environment.',
    doctors: [
      { id: 2, firstName: 'S.P.', lastName: 'Chaturvedi', specialization: 'Gynecologist', departmentId: 2 },
      { id: 3, firstName: 'Geetika', lastName: 'Shukla', specialization: 'Gynecologist', departmentId: 2 }
    ]
  },
  {
    id: 3,
    name: 'Orthopedic',
    slug: 'orthopedic',
    description: 'The Orthopedic department specializes in the diagnosis and treatment of injuries and diseases of the musculoskeletal system. We offer joint replacement, sports medicine, trauma care, and physical therapy to help you regain mobility and live pain-free.',
    doctors: [
      { id: 4, firstName: 'Amol Prabhakar', lastName: 'Pandey', specialization: 'Orthopedic Surgeon', departmentId: 3 }
    ]
  },
  {
    id: 4,
    name: 'Pediatric',
    slug: 'pediatric',
    description: 'Our Pediatric department is dedicated to the health and well-being of children from infancy through adolescence. We offer a child-friendly environment with services ranging from regular check-ups and immunizations to specialized care for childhood illnesses.',
    doctors: [
      { id: 5, firstName: 'TN', lastName: 'Chaturvedi', specialization: 'Pediatrician', departmentId: 4 }
    ]
  },
  {
    id: 5,
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'The General Medicine department is the first point of contact for most patients. Our physicians are skilled in diagnosing a wide range of health issues, managing chronic conditions, and providing comprehensive primary care for adults.',
    doctors: [
      { id: 6, firstName: 'Amit Kumar', lastName: 'Verma', specialization: 'General Physician', departmentId: 5 }
    ]
  },
  {
    id: 6,
    name: 'Anesthesia',
    slug: 'anesthesia',
    description: 'Our Anesthesia team plays a crucial role in ensuring patient safety and comfort during surgical procedures. We provide expert anesthetic care before, during, and after surgery, as well as comprehensive pain management services.',
    doctors: [
      { id: 7, firstName: 'Rohit', lastName: 'Dubey', specialization: 'Anesthesiologist', departmentId: 6 }
    ]
  },
  {
    id: 7,
    name: 'Urology',
    slug: 'urology',
    description: 'Specializing in the urinary tract and male reproductive system, our Urology department offers advanced diagnostic and treatment options for conditions like kidney stones, prostate issues, and urinary incontinence. We offer both medical and surgical solutions.',
    doctors: [
      { id: 8, firstName: 'Amit', lastName: 'Gaur', specialization: 'Urologist (Visiting)', departmentId: 7 }
    ]
  },
  {
    id: 8,
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Our Cardiology department provides top-tier care for heart-related conditions. With advanced diagnostic imaging, and a full range of interventional procedures, we are committed to helping our patients maintain a healthy heart.',
    doctors: [
      { id: 9, firstName: 'A.A.', lastName: 'Ansari', specialization: 'Cardiologist (Visiting)', departmentId: 8 }
    ]
  },
  {
    id: 9,
    name: 'Maxillofacial Surgery',
    slug: 'maxillofacial-surgery',
    description: 'This specialized department focuses on surgery of the face, mouth, and jaws. We treat a variety of conditions, including facial trauma, corrective jaw surgery, and complex dental extractions, blending surgical skill with an aesthetic approach.',
    doctors: [
      { id: 10, firstName: 'Siddharth', lastName: 'Singh', specialization: 'Maxillofacial Surgeon', departmentId: 9 }
    ]
  }
];

export function getDepartments() {
  return departments;
}

export function getDepartmentBySlug(slug: string) {
  return departments.find(dept => dept.slug === slug);
}
