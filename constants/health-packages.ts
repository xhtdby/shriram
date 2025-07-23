// Health Package Configuration

export interface HealthPackage {
  id: number;
  name: string;
  slug: string;
  price: number;
  formattedPrice: string;
  description: string;
  duration: string;
  category: string;
  ageGroup: string;
  recommended: string;
  tests: string[];
  benefits: string[];
  includes: string[];
  isPopular: boolean;
  isActive: boolean;
}

export const HEALTH_PACKAGES: HealthPackage[] = [
    {
        id: 1,
        name: 'Basic Health Checkup',
        slug: 'basic-health-checkup',
        price: 2500,
        formattedPrice: '₹2,500',
        description: 'Essential health screening tests for overall wellness assessment.',
        duration: '2-3 hours',
        category: 'Basic',
        ageGroup: 'Adults 18-60 years',
        recommended: 'Annual health screening for working professionals and general wellness monitoring',
        tests: [
            'Complete Blood Count',
            'Blood Sugar',
            'Urine Analysis',
            'ECG'
        ],
        benefits: [
            'Early detection of health issues',
            'Baseline health assessment',
            'Peace of mind',
            'Preventive care guidance'
        ],
        includes: [
            'Doctor consultation',
            'Detailed report',
            'Health recommendations'
        ],
        isPopular: false,
        isActive: true
    },
    {
        id: 2,
        name: 'Comprehensive Heart Check',
        slug: 'comprehensive-heart-check',
        price: 3500,
        formattedPrice: '₹3,500',
        description: 'Complete cardiac evaluation package for heart health assessment.',
        duration: '3-4 hours',
        category: 'Cardiac',
        ageGroup: 'Adults 35+ years',
        recommended: 'People with family history of heart disease, high cholesterol, diabetes, or hypertension',
        tests: [
            'ECHO',
            'ECG',
            'Lipid Profile',
            'Chest X-Ray'
        ],
        benefits: [
            'Heart disease risk assessment',
            'Cardiac function evaluation',
            'Early intervention guidance',
            'Lifestyle recommendations'
        ],
        includes: [
            'Cardiologist consultation',
            'Detailed cardiac report',
            'Diet & exercise plan',
            'Follow-up recommendations'
        ],
        isPopular: true,
        isActive: true
    },
    {
        id: 3,
        name: 'Women Wellness Package',
        slug: 'women-wellness-package',
        price: 4000,
        formattedPrice: '₹4,000',
        description: 'Comprehensive women\'s health screening package tailored for modern women.',
        duration: '4-5 hours',
        category: 'Women\'s Health',
        ageGroup: 'Women 18-50 years',
        recommended: 'Women of reproductive age, those planning pregnancy, or requiring regular gynecological screening',
        tests: [
            'Pelvic Ultrasound',
            'Thyroid Profile',
            'CBC',
            'Gynecologist Consultation'
        ],
        benefits: [
            'Women-specific health screening',
            'Reproductive health assessment',
            'Hormonal balance evaluation',
            'Preventive care guidance'
        ],
        includes: [
            'Gynecologist consultation',
            'Detailed women\'s health report',
            'Nutritional counseling',
            'Health maintenance tips'
        ],
        isPopular: true,
        isActive: true
    },
    {
        id: 4,
        name: 'Senior Citizen Package',
        slug: 'senior-citizen-package',
        price: 5000,
        formattedPrice: '₹5,000',
        description: 'Specialized health package designed for adults above 60 years.',
        duration: '5-6 hours',
        category: 'Senior Care',
        ageGroup: 'Adults 60+ years',
        recommended: 'Senior citizens requiring comprehensive health monitoring and age-related disease screening',
        tests: [
            'Complete Blood Count',
            'Diabetes Screening',
            'Lipid Profile',
            'Kidney Function Tests',
            'Liver Function Tests',
            'ECG',
            'Chest X-Ray',
            'Bone Density Test'
        ],
        benefits: [
            'Age-specific health screening',
            'Chronic disease detection',
            'Mobility assessment',
            'Medication review'
        ],
        includes: [
            'Geriatrician consultation',
            'Comprehensive health report',
            'Medication optimization',
            'Lifestyle guidance for seniors'
        ],
        isPopular: false,
        isActive: true
    },
    {
        id: 5,
        name: 'Executive Health Package',
        slug: 'executive-health-package',
        price: 8000,
        formattedPrice: '₹8,000',
        description: 'Premium comprehensive health package for busy professionals.',
        duration: '6-8 hours',
        category: 'Premium',
        ageGroup: 'Professionals 25-55 years',
        recommended: 'Busy executives, entrepreneurs, and professionals requiring comprehensive health assessment',
        tests: [
            'Complete Blood Count',
            'Comprehensive Metabolic Panel',
            'Lipid Profile',
            'Thyroid Function Tests',
            'Liver Function Tests',
            'Kidney Function Tests',
            'ECG',
            'ECHO',
            'Chest X-Ray',
            'Stress Test',
            'Vision & Hearing Tests'
        ],
        benefits: [
            'Comprehensive health assessment',
            'Stress-related health evaluation',
            'Executive fitness certificate',
            'Priority scheduling'
        ],
        includes: [
            'Multiple specialist consultations',
            'Detailed executive health report',
            'Stress management counseling',
            'Nutrition & fitness plan',
            'Annual follow-up reminder'
        ],
        isPopular: true,
        isActive: true
    }
];

// Package Categories
export const PACKAGE_CATEGORIES = {
    basic: HEALTH_PACKAGES.filter(pkg => pkg.category === 'Basic'),
    cardiac: HEALTH_PACKAGES.filter(pkg => pkg.category === 'Cardiac'),
    womens: HEALTH_PACKAGES.filter(pkg => pkg.category === 'Women\'s Health'),
    senior: HEALTH_PACKAGES.filter(pkg => pkg.category === 'Senior Care'),
    premium: HEALTH_PACKAGES.filter(pkg => pkg.category === 'Premium')
};

// Popular Packages
export const POPULAR_PACKAGES = HEALTH_PACKAGES.filter(pkg => pkg.isPopular);

// Package Price Ranges
export const PACKAGE_PRICE_RANGES = {
    budget: HEALTH_PACKAGES.filter(pkg => pkg.price <= 3000),
    standard: HEALTH_PACKAGES.filter(pkg => pkg.price > 3000 && pkg.price <= 6000),
    premium: HEALTH_PACKAGES.filter(pkg => pkg.price > 6000)
};
