#!/bin/bash

echo "🏥 Setting up Shriram Hospital Management System..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18+ required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build shared packages
echo "🔨 Building shared packages..."
pnpm --filter "@shriram/*" build

# Setup backend environment
echo "⚙️ Setting up backend environment..."
if [ ! -f "apps/backend/.env" ]; then
    cp apps/backend/.env.example apps/backend/.env
    echo "✅ Created backend .env file"
else
    echo "ℹ️ Backend .env file already exists"
fi

echo "🎉 Setup complete!"
echo ""
echo "To start development:"
echo "  pnpm dev          # Start both frontend and backend"
echo "  pnpm dev:frontend # Start frontend only"
echo "  pnpm dev:backend  # Start backend only"
echo ""
echo "URLs:"
echo "  Frontend: http://localhost:3000"
echo "  Backend:  http://localhost:1337"
echo "  Admin:    http://localhost:1337/admin"
