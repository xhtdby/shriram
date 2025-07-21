# Shriram Hospital Management System

A **dramatically simplified** hospital management system built with a single Next.js application.

## ✨ What Changed?

This project was **completely rebuilt** from a complex monorepo with multiple apps, packages, and a separate backend into a **single, clean Next.js application**. 

**Before:** 50+ files across separate frontend/backend/packages  
**After:** ~10 core files in one simple app

## 🚀 Quick Start

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

