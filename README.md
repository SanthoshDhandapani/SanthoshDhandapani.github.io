# Santhosh Dhandapani - Portfolio Website

A modern, animated portfolio website built with React, Framer Motion, and Aceternity UI components.

## ✨ Features

- **Modern Animations**: Smooth transitions, scroll-based animations, and interactive effects
- **Dark Theme**: Always loads in dark mode with optional light theme toggle
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Interactive Navigation**: Active section detection and smooth scrolling
- **Professional Sections**: Skills, Experience, Education, Awards, Certifications, and Projects

## 🌙 Theme System

- **Default**: Always starts in dark theme (no localStorage persistence)
- **Toggle**: Available in both desktop and mobile navigation
- **Implementation**: Tailwind CSS class-based dark mode with React Context
- **Transitions**: Smooth 300ms color transitions between themes

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: Tailwind CSS, Framer Motion
- **UI Components**: Aceternity UI, Custom reusable components
- **Icons**: Lucide React, Custom emoji icons

## 🚀 Getting Started

```bash
# Clone and install
git clone https://github.com/santhoshdhandapani/portfolio
cd santhosh-portfolio
npm install

# Development
npm start

# Production build
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   └── ...             # Section components
├── config/
│   └── portfolioConfig.js # Portfolio data
├── contexts/            # Theme context
└── App.js              # Main component
```

## 🎨 Design System

### Dark Theme (Default)
- Background: Black (#000000)
- Cards: Gray-900 (#111827)
- Text: White (#FFFFFF)
- Accent: Blue (#60A5FA)

### Light Theme
- Background: White (#FFFFFF)
- Cards: White with shadows
- Text: Gray-900 (#111827)
- Accent: Blue (#2563EB)

## 🔗 Live Demo

[View Live Portfolio](https://santhoshdhandapani.github.io)

## 👨‍💻 About

**Santhosh Dhandapani** - Staff Software Engineer with 13+ years of experience specializing in frontend development. Currently at FourKites, previously at Walmart Global Tech.

---

*Built with ❤️ using React, Framer Motion, and Aceternity UI*
