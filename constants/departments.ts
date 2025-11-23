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
        description: 'Advanced orthopedic care with C-ARM guided minimally invasive surgeries, joint replacements, spine surgery, and trauma management.',
        icon: '/images/dept-icons/orthopaedics.svg',
        image: '/images/departments/orthopaedics.jpg',
        services: [
            'C-ARM Guided Minimally Invasive Surgeries',
            'Joint Replacement Surgery',
            'Spine Surgery',
            'Trauma Surgery',
            'Fracture Treatment',
            'Arthroscopy',
            'Sports Medicine'
        ],
        equipment: ['C-ARM Fluoroscopy', 'X-Ray Machines', 'Arthroscopy Equipment', 'Physiotherapy Equipment'],
        doctorIds: [6], // Dr. Amol Prabhakar Pandey
        isEmergency: true,
        isActive: true
    },
    {
        id: 6,
        name: 'Obstetrics & Gynaecology',
        slug: 'obstetrics-gynaecology',
        description: 'Comprehensive women\'s health services led by Dr. Pooja Dubey. Expert care including maternity services with thousands of successful deliveries and C-sections.',
        icon: '/images/dept-icons/obstetrics.svg',
        image: '/images/departments/obstetrics.jpg',
        services: [
            'Antenatal Care',
            'Normal & C-Section Delivery',
            'High-Risk Pregnancy Management',
            'Gynecological Surgery',
            'Infertility Treatment',
            'Family Planning',
            'Women Wellness Programs'
        ],
        equipment: ['Ultrasound Machines', 'CTG Monitor', 'Labor Room Equipment', 'Operation Theater'],
        doctorIds: [2, 5], // Dr. Pooja Dubey, Dr. Geetika
        isEmergency: true,
        isActive: true
    },
    {
        id: 7,
        name: 'General Surgery',
        slug: 'general-surgery',
        description: 'Comprehensive surgical services including minimally invasive and laparoscopic procedures with expert surgeons.',
        icon: '/images/dept-icons/surgery.svg',
        image: '/images/departments/surgery.jpg',
        services: [
            'General Surgery',
            'Laparoscopic Surgery',
            'Hernia Repair',
            'Gallbladder Surgery',
            'Appendectomy',
            'Emergency Surgery',
            'Minimally Invasive Procedures'
        ],
        equipment: ['Operation Theaters', 'Laparoscopy Equipment', 'Surgical Instruments', 'Anesthesia Machines'],
        doctorIds: [12, 13], // Dr. Nilesh Jain, Dr. A.A. Gaj
        isEmergency: true,
        isActive: true
    },
    {
        id: 8,
        name: 'Urology',
        slug: 'urology',
        description: 'Advanced urological care with all endoscopic procedures and minimally invasive treatments for prostate and kidney stones.',
        icon: '/images/dept-icons/urology.svg',
        image: '/images/departments/urology.jpg',
        services: [
            'All Endoscopic Procedures',
            'Minimally Invasive Prostate Surgery',
            'Kidney Stone Treatment (Laser & Endoscopic)',
            'Urinary Tract Infection Treatment',
            'Male Infertility Treatment',
            'Urological Cancer Care',
            'Bladder & Urethral Procedures'
        ],
        equipment: ['Endoscopy Equipment', 'Ultrasound', 'Lithotripsy Machine', 'Laser Equipment'],
        doctorIds: [9], // Dr. Amit Gaur (Visiting)
        isEmergency: false,
        isActive: true
    },
    {
        id: 9,
        name: 'Pediatrics',
        slug: 'pediatrics',
        description: 'Comprehensive pediatric care with dedicated OPD services, 24x7 NICU and PICU facilities for infants, children, and adolescents.',
        icon: '/images/dept-icons/pediatrics.svg',
        image: '/images/departments/pediatrics.jpg',
        services: [
            'Pediatric OPD Services',
            'NICU (Neonatal Intensive Care) - 24x7',
            'PICU (Pediatric Intensive Care) - 24x7',
            'Well-baby Checkups',
            'Vaccinations & Immunization',
            'Childhood Illness Treatment',
            'Developmental Screening',
            'Nutritional Guidance',
            'Newborn Care'
        ],
        equipment: ['Pediatric Ventilators', 'Incubators', 'Phototherapy Units', 'Pediatric Monitors'],
        doctorIds: [7], // Dr. T.N. Chaturvedi
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
            'Health Counseling',
            'Diabetes Management',
            'Hypertension Care'
        ],
        equipment: ['Stethoscope', 'Blood Pressure Monitor', 'ECG Machine', 'Glucometer'],
        doctorIds: [4, 8], // Dr. S.P. Chaturvedi, Dr. Amit Kumar Verma
        isEmergency: true,
        isActive: true
    },
    {
        id: 11,
        name: 'Anesthesiology',
        slug: 'anesthesiology',
        description: 'Expert anesthesia services for surgical procedures, intensive care, and pain management.',
        icon: '/images/dept-icons/anesthesiology.svg',
        image: '/images/departments/anesthesiology.jpg',
        services: [
            'Pre-operative Evaluation',
            'General Anesthesia',
            'Regional Anesthesia',
            'Post-operative Pain Management',
            'Critical Care Support',
            'ICU Management'
        ],
        equipment: ['Anesthesia Machines', 'Patient Monitors', 'Ventilators', 'Infusion Pumps'],
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
        doctorIds: [11], // Dr. Siddharth Singh
        isEmergency: true,
        isActive: true
    },
    {
        id: 13,
        name: 'Diagnostics & Imaging',
        slug: 'diagnostics-imaging',
        description: 'Comprehensive diagnostic facilities with latest imaging technology brought to Shahdol first by Shriram Hospital.',
        icon: '/images/dept-icons/diagnostics.svg',
        image: '/images/departments/diagnostics.jpg',
        services: [
            'CT Scan (First in city - 2011)',
            'MRI (First in city - 2024)',
            'Echo Cardiography',
            'TMT (Treadmill Test)',
            'Spirometry',
            'Digital X-Ray & Imaging',
            'Ultrasound & Doppler',
            'ECG & Cardiac Testing',
            'NABL Certified Laboratory',
            'Pathology Services',
            'Blood Bank Facilities'
        ],
        equipment: ['CT Scanner', 'MRI Machine', 'Echo Machine', 'TMT Equipment', 'Spirometer', 'Digital X-Ray', 'Ultrasound Machines'],
        doctorIds: [],
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
    diagnostics: [13], // Diagnostics & Imaging
    emergency: EMERGENCY_DEPARTMENTS.map(dept => dept.id)
};
