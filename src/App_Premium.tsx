import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastManager } from './components/ToastManager.tsx';
import { SettingsProvider } from './contexts/SettingsContext.tsx';
import SettingsPanel from './components/SettingsPanel.tsx';
import HeaderNew from './components/HeaderNew.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import TestimonialsSection from './components/TestimonialsSection.tsx';
import BookingCalendar from './components/BookingCalendar.tsx';
import FooterNew from './components/FooterNew.tsx';

const App_Premium: React.FC = () => {
  return (
    <SettingsProvider>
      <ToastManager>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <HeaderNew />
            
            <Routes>
              <Route 
                path="/" 
                element={
                  <main>
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <TestimonialsSection />
                  </main>
                } 
              />
              <Route 
                path="/about" 
                element={<AboutSection />} 
              />
              <Route 
                path="/services" 
                element={<ServicesSection />} 
              />
              <Route 
                path="/testimonials" 
                element={<TestimonialsSection />} 
              />
              <Route 
                path="/booking" 
                element={<BookingCalendar />} 
              />
            </Routes>
            
            <FooterNew />
            <SettingsPanel />
          </div>
        </Router>
      </ToastManager>
    </SettingsProvider>
  );
};

export default App_Premium;