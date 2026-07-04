# FitLoq

**Your AI Fitness Companion for Indian Nutrition & Smart Workouts**

Frontend-only implementation of FitLoq — a premium, AI-powered fitness SaaS product built for Indian users. This repository contains **UI only**: no backend, no database, no real authentication. All data is realistic mock data, structured so a backend can be dropped in later without touching component code.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Language | JavaScript (no TypeScript) |
| Styling | Tailwind CSS |
| Routing | React Router DOM v6 |
| Animation | Framer Motion |
| Icons | React Icons |
| Charts | Recharts |
| HTTP client | Axios (service layer only — not connected to a live API) |
| State | React Context API |

## Getting Started

```bash
npm install
npm run dev
```

App runs at `http://localhost:5173`.

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # eslint
```

## Folder Structure

```
src/
├── assets/          # images, icons, illustrations
├── components/      # reusable UI, organized by feature domain + ui/ for the core library
├── layouts/         # page shells (AppLayout, AuthLayout, etc.)
├── pages/           # route-level views, grouped by feature
├── routes/          # React Router route definitions + protected route wrapper
├── context/         # AuthContext, UIContext (Context API)
├── services/        # Axios service layer — mock-backed for now
├── hooks/           # shared custom hooks
├── utils/           # formatting, class-name helpers, calculations
├── constants/       # design tokens, route paths, nav config
├── data/            # mock datasets (Indian food data, workout plans, etc.)
├── styles/          # Tailwind entry + global CSS
├── App.jsx
└── main.jsx
```

## Design System

- **Primary:** Emerald Green (`#10b981`)
- **Accent:** Blue (`#3b82f6`)
- **Background:** Light Gray (`#f5f7f8`)
- **Cards:** White with soft shadows and rounded corners
- **Typography:** Plus Jakarta Sans
- Full token reference: `tailwind.config.js` and `src/constants/theme.js`

## Build Roadmap

This project is being built module by module. Status:

- [x] 1. Project setup & folder structure
- [ ] 2. Global theme & reusable components
- [ ] 3. Landing page
- [ ] 4. Authentication UI
- [ ] 5. Dashboard
- [ ] 6. Nutrition module
- [ ] 7. AI Food Scanner
- [ ] 8. Workout module
- [ ] 9. AI Coach
- [ ] 10. Progress tracking
- [ ] 11. Habit tracker
- [ ] 12. Profile & Settings
- [ ] 13. Notifications
- [ ] 14. Final UI polish and responsiveness

## Connecting a Real Backend Later

- Swap `VITE_API_BASE_URL` in `.env` (see `.env.example`)
- Replace mock data imports in `src/data/` with calls through `src/services/`
- `src/services/apiClient.js` already handles base URL, auth token injection, and error interception
