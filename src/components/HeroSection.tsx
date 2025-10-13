import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Award, Heart, Shield } from 'lucide-react';
import PremiumButton from './PremiumButton.tsx';

const HeroSection: React.FC = () => {
  const features = [
    { icon: Star, text: '20년 경력 전문의' },
    { icon: Award, text: '최첨단 장비' },
    { icon: Heart, text: '개인 맞춤 치료' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg">
        {/* Animated circles */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-16 h-16 bg-white/10 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-primary-500/80 to-primary-400/70" />
      </div>

      <div className="relative z-10 container-max section-padding text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">🏥 후암동 새로운 시작</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mobile-title md:text-5xl lg:text-6xl font-bold leading-tight">
                <motion.span 
                  className="block text-white drop-shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  박영진치과
                </motion.span>
                <motion.span 
                  className="block text-xl md:text-3xl lg:text-5xl mt-2 text-white/95 drop-shadow-md"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  새로운 공간에서
                </motion.span>
                <motion.span 
                  className="block text-xl md:text-3xl lg:text-5xl mt-2 text-yellow-300 drop-shadow-lg font-black"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                >
                  더 나은 치료를
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="mb-8 space-y-3 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="mobile-subtitle md:text-xl lg:text-2xl font-semibold text-white drop-shadow-md">
                20년 경력의 전문의가 직접 진료하는 신뢰할 수 있는 치과
              </p>
              <p className="mobile-body md:text-lg text-white/90 drop-shadow-sm leading-relaxed">
                최첨단 디지털 장비와 개인 맞춤형 치료로 건강한 미소를 선사합니다
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 shadow-lg"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.35)' }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-semibold text-sm lg:text-base high-contrast-text">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 px-4 max-w-md mx-auto lg:max-w-none lg:mx-0 lg:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="tel:02-712-5678"
                className="inline-flex items-center justify-center gap-3 bg-white text-primary-600 hover:bg-gray-50 font-bold py-5 px-6 rounded-2xl shadow-2xl transition-all duration-300 w-full lg:w-auto min-h-[60px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-6 h-6 flex-shrink-0" />
                <div className="text-center lg:text-left">
                  <div className="text-sm opacity-75 font-medium">지금 바로 예약</div>
                  <div className="text-lg font-bold tracking-wide">02-712-5678</div>
                </div>
              </motion.a>
              
              <PremiumButton
                variant="glass"
                size="lg"
                icon={MessageCircle}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                자세히 보기
              </PremiumButton>
            </motion.div>
          </div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="glass-card bg-white/15 rounded-3xl p-8 border border-white/20 floating-animation pulse-glow"
                animate={{ 
                  y: [0, -15, 0],
                  rotateX: [0, 2, 0],
                  rotateY: [0, -2, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-primary-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Grand Opening 특별 혜택</h3>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center justify-between">
                      <span>모든 치료</span>
                      <span className="text-yellow-300 font-bold text-xl">30% 할인</span>
                    </div>
                    <div className="border-t border-white/30 pt-3">
                      <span>프리미엄 검진 패키지</span>
                    </div>
                  </div>
                  <div className="mt-6 text-sm opacity-75">
                    📅 2025년 10월 ~ 12월 (한정 특가)
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-300 text-primary-900 rounded-full w-16 h-16 flex items-center justify-center font-bold"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                NEW
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass-card bg-white/20 rounded-xl p-4"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                  <span className="font-semibold">20년 신뢰</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;