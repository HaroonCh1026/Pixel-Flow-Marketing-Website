# PixelFlow Marketing Website

A modern static marketing website built with React, Tailwind CSS, and Vite. The website showcases PixelFlow's services with four main pages: Home, About, Clients, and Contact.

## Features
- Responsive design with Tailwind CSS
- Four main pages: Home, About, Clients, and Contact
- Contact form powered by Web3Forms
- Fast performance with Vite
- Clean component-based architecture

## Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

## Installation
1. Clone the repository:

2. cd pixelflow-website

3. npm install

# Configuration

Create a .env file in the root directory

Add your Web3Forms API key (get it from web3forms.com):

VITE_WEB3FORM_API_KEY=your-api-key-here

# Running the Project

Development mode:

npm run dev

Open http://localhost:5173 to view in browser.

Production build:

npm run build

The build artifacts will be stored in the dist/ directory.

# Project Structure

src/
├── assets/            # Static assets (images, icons, etc.)
├── Components/        # Reusable components
├── Pages/             # Page components
│   ├── About/         # About page components
│   ├── Clients/       # Clients page
│   ├── Contact/       # Contact page
│   └── Home/          # Home page components
├── App.css            # Main styles
├── App.jsx            # Root component
├── index.css          # Global styles
└── main.jsx           # Entry point

# Deployment
The project is configured for easy deployment to Vercel, Netlify, or any static hosting service.

# Website Demo URl

The Website is Live in

https://pixel-flow-marketing-website-cz9w.vercel.app/

