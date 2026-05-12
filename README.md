# 🚗 AutoSouk — Car Listing Platform

A modern, responsive car listing platform built with React + Tailwind CSS. Inspired by PakWheels and Cars24.

---

## 📁 Project Structure

```
car-listing-platform/
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite bundler config
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS config
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root component
    ├── index.css               # Tailwind directives + global styles
    ├── components/
    │   ├── Navbar.jsx          # Top nav with logo and search
    │   ├── SearchBar.jsx       # Reusable search input
    │   └── CarCard.jsx         # Individual car card
    └── pages/
        └── Home.jsx            # Main page (data fetching + grid)
```

---

## ⚙️ Installation & Setup

### Step 1 — Prerequisites
Make sure you have **Node.js 18+** installed:
```bash
node --version   # Should be v18.x or higher
```

### Step 2 — Create Project (Fresh Start)
If starting fresh with Vite:
```bash
npm create vite@latest car-listing-platform -- --template react
cd car-listing-platform
```
Then replace the generated files with the files from this project.

### Step 3 — Install Dependencies
```bash
npm install
```
This installs React, Axios, and Vite.

### Step 4 — Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 5 — Connect Your API
Open `src/pages/Home.jsx` and replace line 10:
```js
// Before
const API_URL = "YOUR_API_URL_HERE";

// After (example)
const API_URL = "https://yourapi.com/api/cars";
```

### Step 6 — Run the Project
```bash
npm run dev
```
Open your browser at: **http://localhost:5173**

---

## 🔍 Features

| Feature                  | Details                                          |
|--------------------------|--------------------------------------------------|
| 🔎 Live Search           | Filter by name, brand, city, or model            |
| 📦 Loading Skeletons     | Animated placeholder cards while fetching        |
| 🖼️ Image Fallback        | Placeholder shown if image URL fails             |
| 📱 Fully Responsive      | Works on mobile, tablet, and desktop             |
| 🌙 Dark Theme            | Slate-950 dark background with amber accents     |
| ❌ No Results State      | Friendly message when search has no matches      |
| ⚡ Vite Bundler          | Fast hot-reload development experience           |

---

## 🛠️ Build for Production

```bash
npm run build
```
Output will be in the `dist/` folder. Ready to deploy on Vercel, Netlify, etc.

---

## 🚀 Deploy to Vercel (Free)

```bash
npm install -g vercel
vercel
```

---

## 📦 Expected API Response Format

```json
[
  {
    "name": "Honda Civic",
    "price": "4500000",
    "city": "Peshawar",
    "model": "2020",
    "kms": "35000",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "brand": "Honda",
    "link": "https://example.com/car.jpg"
  }
]
```
