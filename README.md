# 📊 EyeGoTask - Modern Dashboard & Analytics Platform

A high-performance, enterprise-grade dashboard application built with modern web technologies, robust state management, and strict TypeScript safety. Designed with a clean UI/UX and dark/light token harmony.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router & Middleware protection)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & React-Redux
* **Networking:** [Axios](https://axios-http.com/) (MockAPI integration)
* **Containerization:** [Docker](https://www.docker.com/) (Standalone production build)

---

## 📂 Project Architecture

```text
eyegotask/
├── app/
│   ├── layout.tsx                 # Root layout + Redux Provider wrapper
│   ├── page.tsx                   # Route redirect (/login or /dashboard)
│   ├── login/
│   │   └── page.tsx               # Authentication page
│   └── dashboard/
│       ├── layout.tsx             # Protected layout (Sidebar & Topbar wrapper)
│       └── page.tsx               # Main analytics overview
├── components/
│   ├── ui/                        # Reusable atomic UI elements (button, input, card, etc.)
│   ├── layout/                    # Layout structure components (Sidebar, Topbar, AsideLink)
│   ├── auth/                      # Authentication components (LoginForm)
│   ├── dashboard/                 # Domain-specific components (MainDashboardTable, OverviewPage)
│   └── shared/                    # Shared components (Tag, SearchBar, MainCard, etc.)
├── mainStore/
│   └── store.ts                   # Central Redux store configuration
├── slices/
│   ├── login/                     # Login & authentication slice
│   ├── users/                     # Users management slice
│   └── cartsData/                 # Carts and metrics slice
├── lib/
│   ├── api.ts                     # Configured Axios instance
│   ├── cookies.ts                 # Cookie management helpers
│   └── utils.ts                   # Utility functions & formatters
├── middleware.ts                  # Route protection & session management
├── Dockerfile                     # Multi-stage production Docker build
└── tailwind.config.ts             # Custom design system configuration



🎨 Design System & Color Tokens
The UI follows a precise modern design system for optimal visual hierarchy:

Backgrounds: General BG (#F5F6F8) | Cards & Panels (#FFFFFF) | Inputs (#FAFAFB)

Borders: Subtle (#E3E5EA) | Strong (#CBCFD6)

Typography: Primary Ink (#14161A) | Secondary (#4B4F58) | Muted (#8A8F99)

Brand & Accents: Navy Primary (#1E2A44) | Deep Navy (#10182B) | Amber Accent (#E2A33B)

Status Badges:

Success/Paid: #2F9E63 (Text) / #E5F5EC (BG)

Pending: #7A4E0B (Text) / #FBF0DE (BG)

Failed/Danger: #D64545 (Text) / #FBEAEA (BG)

🚀 Getting Started Locally
Prerequisites
Node.js (v20+ recommended)

npm or yarn

git clone [https://github.com/your-username/eyegotask.git](https://github.com/your-username/eyegotask.git)
cd eyegotask


2. Install dependencies

npm install

3. Run the development server

npm run dev


Open http://localhost:3000 in your browser.

🐳 Docker Deployment (Containerization)
This project includes a production-ready Multi-stage Dockerfile optimized for Next.js standalone output, ensuring a lightweight and secure image.

1. Build the Docker Image
Run the following command in the root directory to build the container image:

docker build -t frontend-dashboard .

2. Run the Container
To run the container and map it to your local machine (e.g., port 3001 or 3000):

docker run -p 3001:3000 frontend-dashboard

Note: If port 3000 is already in use by another local service, mapping to port 3001 (-p 3001:3000) allows you to smoothly access the app at http://localhost:3001.

🔐 Route Protection
Protected views (such as /dashboard) are guarded via Next.js Middleware (middleware.ts), ensuring that unauthenticated users are automatically redirected to the /login screen.
