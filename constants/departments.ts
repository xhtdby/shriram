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
        doctorIds: [9], // Dr. A.A. Ansari (Visiting)
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
        doctorIds: [5], // Dr. Amol Prabhakar Pandey
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
        doctorIds: [3, 4], // Dr. S.P. Chaturvedi, Dr. Geetika Shukla
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
        doctorIds: [8], // Dr. Amit Gaur (Visiting)
        isEmergency: false,
        isActive: true
    },
    {
        id: 9,
        name: 'Pediatrics',
        slug: 'pediatrics',
        description: 'Comprehensive care for infants, children, and adolescents.',
        icon: '/images/dept-icons/pediatrics.svg',
        image: '/images/departments/pediatrics.jpg',
        services: [
            'Well-baby Checkups',
            'Vaccinations',
            'Childhood Illness Treatment',
            'Developmental Screening',
            'Nutritional Guidance'
        ],
        equipment: ['Pediatric Scales', 'Incubators', 'Phototherapy Units'],
        doctorIds: [6], // Dr. T.N. Chaturvedi
        isEmergency: true,
        isActive: true
    },
    {
        id: 10,
        name: 'General Medicine',
        slug: 'general-medicine',
        description: 'Primary care services for adults, focusing on prevention, diagnosis, and treatment of a wide range of illnesses.',
        icon: '/images/dept-icons/general-medicine.svg',
        image: '/images/departments/general-medicine.jpg',
        services: [
            'General Health Checkups',
            'Chronic Disease Management',
            'Infectious Disease Treatment',
            'Preventive Care',
            'Health Counseling'
        ],
        equipment: ['Stethoscope', 'Blood Pressure Monitor', 'ECG Machine'],
        doctorIds: [7], // Dr. Amit Kumar Verma
        isEmergency: true,
        isActive: true
    },
    {
        id: 11,
        name: 'Anesthesiology',
        slug: 'anesthesiology',
        description: 'Anesthesia services for surgical procedures and pain management.',
        icon: '/images/dept-icons/anesthesiology.svg',
        image: '/images/departments/anesthesiology.jpg',
        services: [
            'Pre-operative Evaluation',
            'General Anesthesia',
            'Regional Anesthesia',
            'Post-operative Pain Management',
            'Critical Care Support'
        ],
        equipment: ['Anesthesia Machines', 'Patient Monitors', 'Ventilators'],
        doctorIds: [1], // Dr. Rohit Dubey
        isEmergency: true,
        isActive: true
    },
    {
        id: 12,
        name: 'Maxillofacial Surgery',
        slug: 'maxillofacial-surgery',
        description: 'Surgical treatment of diseases, injuries, and defects in the head, neck, face, and jaws.',
        icon: '/images/dept-icons/maxillofacial.svg',
        image: '/images/departments/maxillofacial.jpg',
        services: [
            'Dental Implants',
            'Facial Trauma Surgery',
            'Corrective Jaw Surgery',
            'TMJ Disorder Treatment',
            'Oral Cancer Surgery'
        ],
        equipment: ['Dental Chairs', 'X-Ray Machines', 'Surgical Instruments'],
        doctorIds: [10], // Dr. Siddharth Singh
        isEmergency: true,
        isActive: true
    }
];

// Emergency Departments
export const EMERGENCY_DEPARTMENTS = DEPARTMENTS.filter(dept => dept.isEmergency);

// Department categories for easier management
export const DEPARTMENT_CATEGORIES = {
    medical: [1, 9, 10], // Cardiology, Pediatrics, General Medicine
    surgical: [2, 5, 7, 8, 11, 12], // Critical Care, Orthopaedics, General Surgery, Urology, Anesthesiology, Maxillofacial Surgery
    specialized: [6], // Obstetrics & Gynaecology
    emergency: EMERGENCY_DEPARTMENTS.map(dept => dept.id)
};
