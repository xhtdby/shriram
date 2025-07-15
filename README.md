# Shriram Hospital Management System

A **dramatically simplified** hospital management system built with a single Next.js application.

## ✨ What Changed?

This project was **completely rebuilt** from a complex monorepo with multiple apps, packages, and a separate backend into a **single, clean Next.js application**. 

**Before:** 50+ files across separate frontend/backend/packages  
**After:** ~10 core files in one simple app

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm

### Installation & Run

```bash
# Clone and start in 30 seconds
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

## � Clean Project Structure

```
shriram/
├── app/
│   ├── page.tsx              # Homepage
│   ├── data.ts               # All hospital data (replaces database)
│   ├── departments/
│   │   └── [slug]/page.tsx   # Department details
│   └── api/                  # API routes (if needed)
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

## � Data Management

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

## � Deployment

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

## Planned Work

The original setup plan included the following tasks:

1. **Workspace Setup** – Use pnpm workspaces in the root `package.json` for `apps/*` and `packages/*`, exposing scripts `dev:frontend`, `dev:backend` and `dev` via `concurrently`.
2. **Next.js Frontend** – Scaffold a minimal Next.js 15 project in `apps/frontend` with Tailwind (shadcn preset) and a placeholder “coming soon” page.
3. **Strapi Backend** – Create a Strapi v5 API‑only project in `apps/backend` using SQLite at `./data.db` and starting via `strapi().start()`.
4. **Core Content Types** – Add `Doctor`, `Department` and `Appointment` schemas as described in the project prompts.
5. **UI Package** – Provide `Button`, `Card` and `Container` components from `packages/ui`.
6. **Doctor Directory** – `/doctors` page listing doctors from the API with a simple specialty filter.
7. **Booking Drawer** – Slide‑over component and `/api/book` route to create appointments.
8. **Repository Defaults** – Standard `.gitignore` and a CI workflow running `pnpm lint` and building the frontend.

The repository currently implements only parts of this plan. The workspace uses npm rather than pnpm, the Strapi backend contains additional content types, the frontend landing page is not the placeholder, and the booking flow and doctor directory are missing. Future development should realign with these steps.

## Current Status

- Monorepo with Next.js frontend and Strapi backend present
## 🎯 Why This Approach?

**The original complex setup was overkill** for most hospital management needs. This simplified version:

- **Reduces complexity** by 90%
- **Faster development** - make changes instantly
- **Easier maintenance** - everything in one place  
- **Better for learning** - understand the whole system
- **Perfect for MVPs** - get running in minutes

---

## 📚 What Was Removed

The old version in `backup-complex-structure/` included:
- Separate Strapi CMS backend
- Multiple shared packages
- Complex monorepo setup
- Database configuration
- Multiple build processes

**All of this complexity has been eliminated** while keeping the same functionality.

Ready to build something amazing? Run `npm run dev` and start coding! 🚀

