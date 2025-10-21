import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, Menu, X, Stethoscope, Heart, Shield } from 'lucide-react';

const HeaderNew: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: '홈', href: '/' },
    { name: '복지정보', href: '#services' },
    { name: '플랫폼 소개', href: '#about' },
    { name: '복지 추천받기', href: '/recommend' },
    { name: '이용자후기', href: '#testimonials' },
  ];

  return (
    <>
      {/* Contact Bar */}
      <div className="bg-primary-500 text-white py-3 px-4 text-sm">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 lg:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold">1544-2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span className="text-center sm:text-left">상담: 평일 09:00-18:00</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>서울시 복지로 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass-card border-0 shadow-2xl' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <nav className="container-max py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">복지 서비스 추천</h1>
                  <p className="text-xs text-gray-600">전국 복지 정보 플랫폼</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#recommend"
                className="btn-primary hidden sm:flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                복지 추천받기
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="메뉴 열기"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href="tel:02-712-5678"
                  className="btn-primary inline-flex items-center gap-2 mt-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                >
                  <Phone className="w-4 h-4" />
                  진료 예약
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="border-t bg-gray-50 py-4">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium">전국 복지 정보</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium">맞춤형 복지 추천</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <span className="font-medium">신뢰할 수 있는 정보</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default HeaderNew;