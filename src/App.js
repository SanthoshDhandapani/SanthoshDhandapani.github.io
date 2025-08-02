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

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-black text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
            <div className="hidden md:flex space-x-8">
              {portfolioConfig.navigation.map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
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
