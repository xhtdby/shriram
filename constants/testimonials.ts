// Patient Testimonials Configuration
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'R. Sharma',
        location: 'Jabalpur',
        department: 'General Medicine',
        rating: 5,
        quote: 'The care I received at Shriram Hospital was exceptional. The doctors and staff were professional and compassionate throughout my stay.',
        date: '2024-12-15',
        treatment: 'General Health Checkup',
        isVerified: true,
        isActive: true
    },
    {
        id: 2,
        name: 'S. Gupta',
        location: 'Katni',
        department: 'Orthopaedics',
        rating: 5,
        quote: 'A very clean and well-maintained hospital. The orthopedic department is top-notch. Highly recommended for any surgical needs.',
        date: '2024-11-28',
        treatment: 'Knee Replacement Surgery',
        isVerified: true,
        isActive: true
    },
    {
        id: 3,
        name: 'P. Verma',
        location: 'Jabalpur',
        department: 'Pediatrics',
        rating: 5,
        quote: 'My daughter was treated in the pediatric ward, and we couldn\'t have asked for better care. The doctors were wonderful with her.',
        date: '2024-12-02',
        treatment: 'Pediatric Care',
        isVerified: true,
        isActive: true
    },
    {
        id: 4,
        name: 'A. Singh',
        location: 'Mandla',
        department: 'Cardiology',
        rating: 5,
        quote: 'Dr. Ansari provided excellent cardiac care. The heart checkup package was comprehensive and the staff was very supportive during my recovery.',
        date: '2024-11-15',
        treatment: 'Cardiac Evaluation',
        isVerified: true,
        isActive: true
    },
    {
        id: 5,
        name: 'M. Patel',
        location: 'Jabalpur',
        department: 'Obstetrics & Gynaecology',
        rating: 5,
        quote: 'The maternity care at Shriram Hospital was outstanding. Dr. Chaturvedi and the nursing staff made my delivery experience comfortable and safe.',
        date: '2024-10-20',
        treatment: 'Maternity Care',
        isVerified: true,
        isActive: true
    },
    {
        id: 6,
        name: 'R. Kumar',
        location: 'Seoni',
        department: 'General Surgery',
        rating: 4,
        quote: 'Had my appendix surgery here. Dr. Tripathi is very skilled and the post-operative care was excellent. Quick recovery thanks to the team.',
        date: '2024-12-01',
        treatment: 'Appendectomy',
        isVerified: true,
        isActive: true
    },
    {
        id: 7,
        name: 'S. Dubey',
        location: 'Jabalpur',
        department: 'Critical Care',
        rating: 5,
        quote: 'My father was in the ICU for a week. The critical care team led by Dr. Rohit Dubey was exceptional. They saved his life with their expertise.',
        date: '2024-11-10',
        treatment: 'Critical Care',
        isVerified: true,
        isActive: true
    },
    {
        id: 8,
        name: 'K. Jain',
        location: 'Narsinghpur',
        department: 'Urology',
        rating: 4,
        quote: 'Dr. Gaur handled my kidney stone treatment with great care. The procedure was smooth and recovery was faster than expected.',
        date: '2024-10-05',
        treatment: 'Kidney Stone Treatment',
        isVerified: true,
        isActive: true
    },
    {
        id: 9,
        name: 'V. Tiwari',
        location: 'Jabalpur',
        department: 'Maxillofacial Surgery',
        rating: 5,
        quote: 'Dr. Siddharth Singh performed my dental implant surgery perfectly. The results are amazing and the process was pain-free.',
        date: '2024-11-25',
        treatment: 'Dental Implant Surgery',
        isVerified: true,
        isActive: true
    },
    {
        id: 10,
        name: 'N. Agrawal',
        location: 'Chhindwara',
        department: 'General Medicine',
        rating: 4,
        quote: 'The executive health package was very comprehensive. Dr. Verma explained everything clearly and provided excellent health guidance.',
        date: '2024-12-08',
        treatment: 'Executive Health Package',
        isVerified: true,
        isActive: true
    }
];

// Testimonial Categories
export const TESTIMONIAL_CATEGORIES = {
    highRating: TESTIMONIALS.filter(testimonial => testimonial.rating === 5),
    recent: TESTIMONIALS.filter(testimonial => {
        const testDate = new Date(testimonial.date);
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        return testDate >= thirtyDaysAgo;
    }),
    surgical: TESTIMONIALS.filter(testimonial => 
        ['Orthopaedics', 'General Surgery', 'Maxillofacial Surgery', 'Urology'].includes(testimonial.department)
    ),
    medical: TESTIMONIALS.filter(testimonial => 
        ['General Medicine', 'Cardiology', 'Pediatrics', 'Critical Care'].includes(testimonial.department)
    ),
    womens: TESTIMONIALS.filter(testimonial => 
        testimonial.department === 'Obstetrics & Gynaecology'
    ),
    verified: TESTIMONIALS.filter(testimonial => testimonial.isVerified)
};

// Featured Testimonials (highest rated and most recent)
export const FEATURED_TESTIMONIALS = TESTIMONIALS
    .filter(testimonial => testimonial.rating === 5 && testimonial.isVerified)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6);

// Department-wise testimonials
export const TESTIMONIALS_BY_DEPARTMENT = TESTIMONIALS.reduce((acc, testimonial) => {
    if (!acc[testimonial.department]) {
        acc[testimonial.department] = [];
    }
    acc[testimonial.department].push(testimonial);
    return acc;
}, {} as Record<string, typeof TESTIMONIALS>);
