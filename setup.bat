@echo off
echo 🏥 Setting up Shriram Hospital Management System...

REM Check if pnpm is installed
where pnpm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ pnpm is not installed. Please install pnpm first:
    echo npm install -g pnpm
    exit /b 1
)

echo ✅ Prerequisites check passed

REM Install dependencies
echo 📦 Installing dependencies...
pnpm install

REM Build shared packages
echo 🔨 Building shared packages...
pnpm --filter "@shriram/*" build

REM Setup backend environment
echo ⚙️ Setting up backend environment...
if not exist "apps\backend\.env" (
    copy "apps\backend\.env.example" "apps\backend\.env"
    echo ✅ Created backend .env file
) else (
    echo ℹ️ Backend .env file already exists
)

echo 🎉 Setup complete!
echo.
echo To start development:
echo   pnpm dev          # Start both frontend and backend
echo   pnpm dev:frontend # Start frontend only
echo   pnpm dev:backend  # Start backend only
echo.
echo URLs:
echo   Frontend: http://localhost:3000
echo   Backend:  http://localhost:1337
echo   Admin:    http://localhost:1337/admin
