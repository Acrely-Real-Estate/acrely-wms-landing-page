# Backend

The production backend for Acrely WMS runs as a separate service on Render:

**URL**: `https://wms-landing-backend.onrender.com`

This directory is reserved for:
- Future Vercel serverless functions (e.g. `/api/` routes)
- Local development API stubs
- Backend service documentation

## Current Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/api/book-demo` | Submit enterprise demo request |

## Architecture

```
React UI (Vite SPA)
       ↓
Frontend Service Layer (src/services/)
       ↓
Backend API (Render)
       ↓
Email Provider / Database
```
