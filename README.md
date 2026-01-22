🩺 Health – Digital Health Management Platform

Health is a modern, responsive web application designed to simplify how users access, manage, and interact with health-related information.
The platform provides a centralized, secure, and scalable foundation for building real-world healthcare solutions.

It focuses on accessibility, reliability, and performance, making it suitable for both academic projects and production-ready health platforms.

✨ Features

⚡ Built with Next.js (App Router)

🧠 TypeScript for reliable, type-safe code

🎨 Tailwind CSS for fast and responsive UI design

🔥 Firebase integration for backend services

🔐 Firestore security rules included

☁️ Deployment-ready for Vercel and Firebase Hosting

🧩 Modular and reusable component structure

🩺 Application Overview

Healthcare systems often suffer from fragmented data, poor user experience, and limited accessibility.
Health addresses this gap by offering a unified digital platform where users can interact with health services through a single, user-friendly interface.

The application is designed to support:

Personal health record management

Secure user authentication

Organized access to health-related data

Scalable backend support for future healthcare services

Its modular architecture allows it to evolve into a complete healthcare ecosystem such as a hospital portal, telemedicine platform, or health analytics dashboard.

🎯 Objectives

Provide a clean and intuitive interface for health-related applications

Ensure secure handling of user and health data

Offer a scalable foundation for advanced healthcare features

Support cloud-based deployment for real-world usage

🧠 Key Highlights

User-centric design focused on simplicity and clarity

Secure backend integration for data storage and access control

Modular architecture supporting future feature expansion

Optimized performance across devices and screen sizes

🗂️ Project Structure
health/
├── docs/                    # Documentation files
├── src/                     # Application source code
│   ├── app/                 # Next.js App Router pages
│   └── components/          # Reusable UI components
├── .gitignore
├── apphosting.yaml          # Hosting configuration
├── components.json
├── firestore.rules          # Firestore security rules
├── next.config.ts           # Next.js configuration
├── package.json             # Project dependencies & scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation

🛠 Tech Stack
Technology	Purpose
Next.js	Server-side rendering & routing
TypeScript	Type-safe JavaScript
Tailwind CSS	Utility-first styling
Firebase	Database & backend services
Vercel / Firebase Hosting	Production deployment
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/Bhanutejanallamothu/health.git
cd health

2️⃣ Install Dependencies
npm install
# or
yarn

3️⃣ Environment Configuration

Create a .env.local file in the root directory and add:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

🔐 Demo Login Credentials

Use the following credentials to access the application:

Login ID: volunteer
Password: volunteer


⚠️ These credentials are for demo/testing purposes only.

🧪 Development

Start the development server:

npm run dev


Visit http://localhost:3000
 to view the app.
