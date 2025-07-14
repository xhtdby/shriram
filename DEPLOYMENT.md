# Deployment Guide

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:1337/api
```

### Backend (.env)
```
# Development
NODE_ENV=development
HOST=0.0.0.0
PORT=1337

# Secrets (generate new ones for production)
APP_KEYS=your-app-key1,your-app-key2,your-app-key3,your-app-key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database - SQLite for development
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Database - PostgreSQL for production
# DATABASE_CLIENT=postgres
# DATABASE_HOST=your-host
# DATABASE_PORT=5432
# DATABASE_NAME=shriram
# DATABASE_USERNAME=your-username
# DATABASE_PASSWORD=your-password
# DATABASE_SSL=true
```

## Deployment Instructions

### 1. Vercel (Frontend)

1. Connect repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `apps/frontend/.next`
4. Set install command: `pnpm install`
5. Set root directory: `apps/frontend`
6. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL

### 2. Railway (Backend)

1. Connect repository to Railway
2. Set start command: `cd apps/backend && npm start`
3. Set build command: `cd apps/backend && npm run build`
4. Add PostgreSQL service
5. Add environment variables (see above)

### 3. Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or build individually
docker build -f apps/frontend/Dockerfile -t shriram-frontend .
docker build -f apps/backend/Dockerfile -t shriram-backend .
```

### 4. Local Development

```bash
# Install dependencies
pnpm install

# Start development servers
pnpm dev

# Access applications
# Frontend: http://localhost:3000
# Backend: http://localhost:1337
```

## Database Setup

### Development (SQLite)
Automatically created when Strapi starts.

### Production (PostgreSQL)
1. Create PostgreSQL database
2. Update environment variables
3. Restart Strapi to run migrations

## Security Notes

- Generate unique secrets for production
- Use environment variables for sensitive data
- Enable HTTPS in production
- Configure CORS properly
- Set up database backups

## Monitoring

Consider adding:
- Error tracking (Sentry)
- Performance monitoring
- Database monitoring
- Uptime monitoring
