import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import DesignWorks from './components/DesignWorks';
import PersonalWorks from './components/PersonalWorks';
import Hobbies from './components/Hobbies';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'education', 'awards', 'certifications', 'design-works', 'personal-works', 'hobbies'];
      const scrollPosition = window.scrollY;
      
      // If at the very top, set to home
      if (scrollPosition < 100) {
        if (activeSection !== 'home') {
          setActiveSection('home');
        }
        return;
      }
      
      // Check if we're at the bottom of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;
      
      if (isAtBottom) {
        const lastSection = sections[sections.length - 1];
        if (activeSection !== lastSection) {
          setActiveSection(lastSection);
        }
        return;
      }
      
      // Find the current section based on scroll position
      let currentSection = 'home';
      
      for (let i = 1; i < sections.length; i++) { // Start from 1 to skip 'home'
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition + 200 >= element.offsetTop) {
          currentSection = sections[i];
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Initial call to set the correct section on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <Navigation activeSection={activeSection} />

        {/* Main Content */}
        <main>
          <section id="home">
            <ProfileHeader />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <Experience />
          <Education />
          <Awards />
          <Certifications />
          <DesignWorks />
          <PersonalWorks />

          <Hobbies />
        </main>

          {/* Footer */}
          <footer className="py-8 bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
              <p>&copy; {new Date().getFullYear()} San D - Portfolio. Built with React & Aceternity UI.</p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
