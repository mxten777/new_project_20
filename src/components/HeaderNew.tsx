import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, Menu, X, ChevronRight } from 'lucide-react';

const HeaderNew: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: '홈', href: '#home' },
    { name: '병원소개', href: '#about' },
    { name: '진료안내', href: '#services' },
    { name: '환자후기', href: '#testimonials' },
    { name: '온라인 예약', href: '/booking' },
  ];

  return (
    <>
      {/* Premium Top Bar */}
      <div className="bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 text-white py-2.5 px-4 text-sm relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-24 h-24 bg-gold-400 rounded-full blur-2xl" />
        </div>
        <div className="container-max relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1.5 lg:gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <a href="tel:02-712-5678" className="flex items-center gap-2 hover:text-gold-300 transition-colors group">
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-gold-400 group-hover:text-gold-300" />
                <span className="font-semibold tracking-wide">02-712-5678</span>
              </a>
              <div className="hidden sm:block w-px h-3 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
                <span className="text-white/80">월-금 09:00-18:00 | 토 09:00-15:00</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gold-400" />
              <span className="text-white/80">서울시 용산구 후암동</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(27,77,142,0.08)] border-b border-gold-200/50' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <nav className="container-max py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.a 
              href="#home"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl flex items-center justify-center shadow-lg shadow-navy-500/20 group-hover:shadow-navy-500/30 transition-shadow">
                  <span className="text-gold-400 font-serif text-xl font-bold">P</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-gold-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-navy-800 tracking-tight">박영진치과의원</h1>
                <p className="text-[10px] text-gold-600 font-semibold tracking-[0.15em] uppercase">Premium Dental Care</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-navy-700 hover:text-navy-900 font-medium transition-colors text-[15px] group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-3">
              <motion.a
                href="tel:02-712-5678"
                className="hidden sm:flex items-center gap-2 btn-gold text-sm px-5 py-2.5 rounded-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-bold">진료 예약</span>
              </motion.a>

              <button
                className="lg:hidden p-2.5 rounded-xl hover:bg-cream-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="메뉴 열기"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-navy-700" />
                ) : (
                  <Menu className="w-6 h-6 text-navy-700" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gold-100 shadow-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-1">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between py-3 px-4 text-navy-700 hover:text-navy-900 hover:bg-cream-100 font-medium rounded-xl transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 text-gold-500" />
                  </motion.a>
                ))}
                <div className="pt-4">
                  <motion.a
                    href="tel:02-712-5678"
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.length * 0.08 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-bold">진료 예약</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default HeaderNew;