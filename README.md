# Shriram Hospital - Production Website

> **World-Class Care, Local Accessibility**  
> A modern, content-rich hospital management system built with Next.js 14, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-ff0055)](https://www.framer.com/motion/)

---

## 🏥 About Shriram Hospital

Shriram Hospital is a premier multi-specialty healthcare institution located in Shahdol, Madhya Pradesh, serving the region since 2004. As the **first 100-bedded private multispecialty hospital** in the area, we have been pioneers in bringing cutting-edge medical technology and expertise to Central India.

### 🏆 Key Milestones

- **2011** - First CT Scan in the city
- **2012** - First 100-bedded private multispecialty hospital
- **2012** - First ICU & Ventilator care in Shahdol
- **2017** - First Dialysis unit in the region
- **2020** - First Oxygen plant during COVID pandemic
- **2024** - First MRI facility in the city

---

## ✨ Features

### 🎨 **Modern User Experience**
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Interactive Carousels** - Hero slides, department showcase, testimonials
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Accessibility First** - WCAG compliant with keyboard navigation support

### 🩺 **Core Functionality**
- **Doctor Profiles** - Detailed information with booking capabilities
- **Department Showcase** - 13+ specialized medical departments
- **Health Packages** - Comprehensive checkup packages with online booking
- **Appointment Booking** - Calendar-based appointment scheduling system
- **Payment Integration** - Support for Card, UPI, Net Banking, and Cash
- **Insurance Partners** - 14+ TPA partners including Ayushman Bharat
- **Video Consultation** - Telemedicine capabilities
- **Patient Portal** - Secure login for patient records and history

### 📱 **Patient Services**
- 24/7 Emergency contact with floating emergency button
- Online health package booking with basket system
- Estimate request for procedures
- Feedback and rating system
- Patient rights and responsibilities
- Digital payment receipts

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **pnpm** (recommended)
- **Git**

### Option 1: Automated Setup (Recommended)

**Windows:**
```batch
# Double-click setup.bat or run in terminal:
setup.bat
```

**Mac/Linux:**
```bash
# Make executable and run:
chmod +x setup.sh
./setup.sh
```

### Option 2: Manual Setup

```bash
# Prerequisites: Node.js 18+
git clone <repository-url>
cd shriram
npm install
npm run dev
```

🎉 **That's it!** Visit http://localhost:3000

### Available Commands

```bash
npm run dev    # Start development server
npm run build  # Build for production  
npm run start  # Start production server
npm run lint   # Run ESLint
```

## 📁 Clean Project Structure

```
shriram/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Homepage
│   ├── data.ts               # All hospital data (replaces database)
│   ├── departments/
│   │   └── [slug]/page.tsx   # Department details
│   └── api/                  # API routes (if needed)
├── setup.sh                  # Unix setup script
├── setup.bat                 # Windows setup script
├── package.json              # Single package.json
├── tailwind.config.js        # Tailwind setup
└── README.md                 # This file
```

**No more:**
- ❌ Complex monorepo structure
- ❌ Separate backend server
- ❌ Database setup
- ❌ Multiple package.json files
- ❌ Shared packages complexity

## 🏥 Features

All the same hospital functionality, just **much simpler**:

- **Department Listings**: Browse all hospital departments
- **Doctor Profiles**: View doctors and their specializations  
- **Responsive Design**: Mobile-first, looks great everywhere
- **Modern UI**: Clean design with Tailwind CSS and Lucide icons
- **TypeScript**: Full type safety throughout
- **Fast Performance**: Next.js 15 with App Router

## 💾 Data Management

Instead of a complex database setup, all data is stored in `app/data.ts`:

```typescript
// Simple, readable, and easy to modify
export const departments = [
  {
    id: 1,
    name: "Cardiology",
    slug: "cardiology", 
    description: "Heart and cardiovascular care",
    doctors: [...]
  },
  // Add more departments here
]
```

**Benefits:**
- ✅ No database setup required
- ✅ Easy to modify and version control  
- ✅ Perfect for demos and prototypes
- ✅ Can easily migrate to real database later

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
Works on any platform that supports Next.js:
- Netlify
- Railway  
- Heroku
- AWS/Azure/GCP

## 🔄 Migration Path

If you need to scale later, you can:
1. Add a real database (PostgreSQL, MongoDB, etc.)
2. Replace `app/data.ts` with API calls
3. Add authentication
4. Split into microservices

But for most use cases, this simple structure is perfect!

## 🤝 Contributing

1. Fork the repository
2. Make your changes
3. Test with `npm run dev`
4. Submit a pull request

## 📄 License

MIT License - feel free to use this for your own projects!

## 🎯 Why This Approach?

**The original complex setup was overkill** for most hospital management needs. This simplified version:

- **Reduces complexity** by 90%
- **Faster development** - make changes instantly
- **Easier maintenance** - everything in one place  
- **Better for learning** - understand the whole system
- **Perfect for MVPs** - get running in minutes

---

Ready to build something amazing? Run the setup script and start coding! 🚀

