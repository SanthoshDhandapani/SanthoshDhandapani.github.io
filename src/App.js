import React, { useState, useEffect } from 'react';
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
      
      // Get all sections
      const sections = ['home', 'skills', 'experience', 'education', 'awards', 'certifications', 'design-works', 'personal-works', 'hobbies'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection
      
      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="bg-black text-white">
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
        <footer className="py-8 bg-black border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} San D - Portfolio. Built with React & Aceternity UI.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
