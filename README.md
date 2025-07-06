# Viroc Gym - Personal Fitness Training Platform

A modern, responsive web application for personal trainers to manage their clients' workout plans. Built with React, TypeScript, Material-UI, and Firebase.

## Features

- 🔐 Google Authentication
- 📋 User Onboarding Form
- 💪 Personalized Workout Plans
- 📱 Responsive Design
- 👩‍💼 Admin Panel for Trainers
- 🎯 Progress Tracking

## Tech Stack

- React + TypeScript
- Material-UI for styling
- Firebase (Authentication & Firestore)
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd viroc-gym
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a Firebase project and get your configuration:
- Go to Firebase Console
- Create a new project
- Enable Authentication (Google provider)
- Enable Firestore Database
- Get your Firebase configuration

4. Set up environment variables:
```bash
cp .env.example .env
```
Then fill in your Firebase configuration in the `.env` file.

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This project is configured for easy deployment to Netlify:

1. Create a new site on Netlify
2. Connect your repository
3. Set the build command to `npm run build`
4. Set the publish directory to `dist`
5. Add your environment variables in Netlify's dashboard

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/          # Page components
  ├── firebase.ts     # Firebase configuration
  ├── theme.ts        # Material-UI theme configuration
  ├── App.tsx         # Main application component
  └── main.tsx        # Application entry point
```

## Admin Access

To access the admin panel:
1. Set your admin email in the environment variables
2. Log in with the same email using Google authentication
3. Access the admin panel through the navigation menu

## License

This project is licensed under the MIT License - see the LICENSE file for details.