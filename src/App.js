import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import DesignWorksSection from './components/DesignWorksSection';
import PersonalWorksSection from './components/PersonalWorksSection';
import portfolioConfig from './config/portfolioConfig';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
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
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-center items-center">
              <div className="flex space-x-8">
                {portfolioConfig.navigation.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <a 
                      key={item.name}
                      href={item.href} 
                      className={`transition-colors font-medium ${
                        isActive 
                          ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                          : 'text-gray-300 hover:text-blue-400'
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex justify-between items-center">
              <span className="text-xl font-bold text-blue-400">Portfolio</span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
                <div className="flex flex-col space-y-2 pt-4">
                  {portfolioConfig.navigation.map((item) => {
                    const sectionId = item.href.replace('#', '');
                    const isActive = activeSection === sectionId;
                    return (
                      <a 
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`py-2 px-4 rounded transition-colors font-medium ${
                          isActive 
                            ? 'text-blue-400 bg-blue-900 bg-opacity-20 border-l-4 border-blue-400' 
                            : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        }`}
                      >
                        {item.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

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
          <DesignWorksSection />
          <PersonalWorksSection />

          {/* Interests & Hobbies Section */}
          <section id="hobbies" className="py-20 bg-black">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-white text-center mb-12">Interests & Hobbies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioConfig.interests.map((interest) => (
                  <div key={interest.name} className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors text-center">
                    <div className="text-4xl mb-4">{interest.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{interest.name}</h3>
                    <p className="text-gray-400 text-sm">{interest.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
