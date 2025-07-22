// Blog Posts and Content Management
export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'monsoon-health-tips',
    title: '5 Essential Health Tips for the Monsoon Season',
    author: 'Dr. Amit Kumar Verma',
    authorId: 4,
    publishedDate: '2024-07-15',
    lastUpdated: '2024-07-15',
    excerpt: 'The monsoon brings relief from the heat, but also a host of health issues. Here are some essential tips to stay healthy during the rainy season.',
    content: `The monsoon season, while beautiful, is also a time when infections are rampant. It is crucial to take extra precautions to safeguard your health.

**1. Stay Hydrated with Safe Water**
Ensure you drink only boiled or purified water to avoid water-borne diseases like typhoid and cholera. Avoid ice and drinks from unknown sources.

**2. Boost Your Immunity**
Include Vitamin C-rich foods in your diet such as citrus fruits, amla, and green leafy vegetables. Regular exercise and adequate sleep also help strengthen immunity.

**3. Avoid Street Food**
Street food may be contaminated during monsoon. Stick to home-cooked meals and ensure proper hygiene in food preparation.

**4. Prevent Water Stagnation**
Keep your surroundings clean and prevent water stagnation to avoid mosquito-borne illnesses like dengue and malaria.

**5. Maintain Personal Hygiene**
Wash your hands frequently, keep your feet dry, and wear clean, dry clothes to prevent fungal infections.

Stay healthy and enjoy the monsoon season safely!`,
    category: 'Health Tips',
    tags: ['monsoon', 'health-tips', 'prevention', 'immunity'],
    image: '/images/blog/monsoon-health.jpg',
    readTime: 5,
    isPublished: true,
    isFeatured: true,
    seoTitle: '5 Essential Monsoon Health Tips | Shriram Hospital Shahdol',
    seoDescription: 'Stay healthy during monsoon season with these 5 essential health tips from medical experts at Shriram Hospital Shahdol.',
    views: 1250,
    likes: 89
  },
  {
    id: 2,
    slug: 'understanding-cardiac-health',
    title: 'Understanding Cardiac Health: A Comprehensive Guide for All Ages',
    author: 'Dr. Amit Kumar',
    authorId: 4,
    publishedDate: '2024-07-10',
    lastUpdated: '2024-07-10',
    excerpt: 'Heart disease is a leading cause of mortality, but it is largely preventable. Learn about the key aspects of cardiac health and prevention strategies.',
    content: `Maintaining a healthy heart is vital for overall well-being. Here's a comprehensive guide to understanding and maintaining cardiac health.

**Understanding Your Heart**
The heart is a muscular organ that pumps blood throughout your body. It beats approximately 100,000 times per day, delivering oxygen and nutrients to every cell.

**Key Risk Factors**
- High blood pressure
- High cholesterol
- Diabetes
- Smoking
- Obesity
- Sedentary lifestyle
- Family history
- Stress

**Prevention Strategies**

**1. Maintain a Heart-Healthy Diet**
- Reduce saturated fats and sodium
- Include fruits, vegetables, and whole grains
- Choose lean proteins
- Limit processed foods

**2. Regular Physical Activity**
At least 30 minutes of moderate exercise daily strengthens the heart muscle and improves circulation.

**3. Manage Stress**
Practice relaxation techniques like meditation, yoga, or deep breathing exercises.

**4. Regular Health Check-ups**
Monitor blood pressure, cholesterol levels, and blood sugar regularly.

**5. Quit Smoking and Limit Alcohol**
These lifestyle changes significantly reduce cardiovascular risk.

**Warning Signs**
Seek immediate medical attention for:
- Chest pain or discomfort
- Shortness of breath
- Unusual fatigue
- Irregular heartbeat
- Swelling in legs or feet

Remember, prevention is always better than cure when it comes to heart health.`,
    category: 'Cardiology',
    tags: ['cardiology', 'heart-health', 'prevention', 'lifestyle'],
    image: '/images/blog/cardiac-health.jpg',
    readTime: 8,
    isPublished: true,
    isFeatured: true,
    seoTitle: 'Complete Guide to Cardiac Health | Heart Care at Shriram Hospital',
    seoDescription: 'Comprehensive guide to heart health, prevention strategies, and cardiac care from expert cardiologists at Shriram Hospital Shahdol.',
    views: 2100,
    likes: 156
  },
  {
    id: 3,
    slug: 'new-gynecology-wing',
    title: 'Shriram Hospital Inaugurates New State-of-the-Art Gynecology Wing',
    author: 'Hospital Administration',
    authorId: null,
    publishedDate: '2024-07-05',
    lastUpdated: '2024-07-05',
    excerpt: 'We are thrilled to announce the opening of our new gynecology wing, equipped with the latest technology and designed for patient comfort.',
    content: `We are excited to announce the inauguration of our new state-of-the-art Gynecology Wing at Shriram Hospital, Shahdol.

**New Facilities Include:**

**Advanced Equipment**
- Latest ultrasound machines with 4D imaging
- Modern labor and delivery rooms
- Well-equipped operation theaters
- NICU facilities for newborn care

**Expert Medical Team**
Our gynecology wing is staffed by experienced gynecologists and trained nursing staff dedicated to providing the highest quality care.

**Patient-Centric Design**
- Comfortable private rooms
- Family-friendly environment
- Dedicated lactation support
- 24x7 nursing care

**Services Offered**
- Antenatal care and monitoring
- Normal and cesarean deliveries
- High-risk pregnancy management
- Gynecological surgeries
- Infertility treatment
- Family planning counseling

**Commitment to Women's Health**
This new facility represents our continued commitment to providing comprehensive women's healthcare services in the Mahakaushal region.

**Advanced Technology**
The wing features the latest medical technology to ensure safe deliveries and comprehensive gynecological care.

We invite you to visit our new facility and experience the difference in women's healthcare.

For appointments and more information, please contact us at 07652-248248.`,
    category: 'Hospital News',
    tags: ['hospital-news', 'gynecology', 'new-facility', 'womens-health'],
    image: '/images/blog/gynecology-wing.jpg',
    readTime: 6,
    isPublished: true,
    isFeatured: false,
    seoTitle: 'New Gynecology Wing at Shriram Hospital | Advanced Women\'s Healthcare',
    seoDescription: 'Shriram Hospital Shahdol inaugurates new state-of-the-art gynecology wing with modern facilities and expert care.',
    views: 890,
    likes: 67
  }
];

// Blog Categories
export const BLOG_CATEGORIES = [
  {
    id: 1,
    name: 'Health Tips',
    slug: 'health-tips',
    description: 'Practical health advice and wellness tips',
    color: '#10B981'
  },
  {
    id: 2,
    name: 'Hospital News',
    slug: 'hospital-news',
    description: 'Latest updates and announcements from the hospital',
    color: '#3B82F6'
  },
  {
    id: 3,
    name: 'Cardiology',
    slug: 'cardiology',
    description: 'Heart health and cardiac care information',
    color: '#EF4444'
  },
  {
    id: 4,
    name: 'Women\'s Health',
    slug: 'womens-health',
    description: 'Healthcare topics specific to women',
    color: '#F59E0B'
  },
  {
    id: 5,
    name: 'Pediatrics',
    slug: 'pediatrics',
    description: 'Child health and parenting tips',
    color: '#8B5CF6'
  },
  {
    id: 6,
    name: 'Nutrition',
    slug: 'nutrition',
    description: 'Diet and nutrition guidance',
    color: '#059669'
  }
];

// Featured Content
export const FEATURED_CONTENT = {
  heroArticle: BLOG_POSTS[0],
  popularArticles: BLOG_POSTS.filter(post => post.views > 1000),
  recentArticles: BLOG_POSTS.slice(0, 3)
};
