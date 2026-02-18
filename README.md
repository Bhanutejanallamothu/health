🩺 Hospital Management System – Digital Health Management Platform

A modern, responsive web application designed to simplify how users access, manage, and interact with health-related information. The platform provides a centralized, secure, and scalable foundation for building real-world healthcare solutions.

It focuses on accessibility, reliability, and performance, making it suitable for both academic projects and production-ready health platforms.

### Overview of App Features

**Core Platform & Technology:**
*   **Modern Web Stack**: Built with **Next.js (App Router)** and **React** for a performant, server-driven UI, and written in **TypeScript** for robust, type-safe code.
*   **Responsive UI/UX**: Utilizes **Tailwind CSS** and **ShadCN UI** components for a polished, accessible, and fully responsive design that works seamlessly across desktops and mobile devices.
*   **Backend Services**: Integrated with **Firebase** for backend-as-a-service, leveraging **Firebase Authentication** for secure user management and **Firestore** for a scalable, real-time database.

**Key Functional Modules:**

1.  **Dual-Role Authentication System**:
    *   Provides distinct user roles: **Admin** and **Volunteer**.
    *   Features secure user login (by email or username) and a separate signup flow for new volunteers.
    *   Role-based redirects ensure users land on the correct dashboard after login.

2.  **Volunteer Dashboard & Workflow Management**:
    *   A centralized dashboard serves as the main hub for all volunteer activities, providing quick access to various modules.
    *   **Patient Registration**: A comprehensive form to register new patients or retrieve and update the details of existing ones using a unique "Book Number."
    *   **Vitals & Prescription**: Dedicated forms for recording patient vitals (BP, pulse, etc.) and for doctors to create detailed prescriptions with automated quantity calculation.
    *   **Queue & Status Management**: Includes modules for assigning patients to doctors, viewing patient queues, and tracking a patient's status throughout their visit (e.g., "Waiting for Doctor," "In Lab," "Awaiting Pharmacy").
    *   **Service & Support Forms**: Specialized forms for requesting lab tests, doctor assistance, counselling sessions, and managing medicine delivery.
    *   **Profile Management**: Volunteers can view and edit their personal profile information, which is securely stored and updated in Firestore.

3.  **Admin Dashboard**:
    *   An administrative interface for managing core hospital data.
    *   Features a searchable and filterable table of all patient registrations.
    *   Admins can view detailed registration information and perform management actions like deleting records.

4.  **Public-Facing Portal**:
    *   **Appointment Booking**: An intuitive public form allows new patients to register for appointments with different hospital departments.
    *   **Informational Pages**: Includes an "About" page detailing the hospital's mission and team, and a "Contact" page for inquiries.

**Noteworthy UI/UX Enhancements:**
*   **Engaging Animations**: The login/signup pages feature a dynamic animated background, and the application includes a unique animated logout button for a polished user experience.
*   **Real-time Feedback**: The system uses toast notifications for immediate user feedback on actions like form submissions and login events.
*   **Optimistic UI**: Loading skeletons and states are used throughout the application to improve perceived performance while data is being fetched from the backend.

This feature set makes it a robust and scalable foundation for a real-world hospital management platform.


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
