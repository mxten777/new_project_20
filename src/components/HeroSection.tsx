import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Smile } from 'lucide-react';
import PremiumButton from './PremiumButton.tsx';

const HeroSection: React.FC = () => {
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
            {/* Visual Smile Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-yellow-400 border-4 border-blue-400 flex items-center justify-center shadow-lg">
                <Smile className="text-white" size={56} />
              </div>
            </div>
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-medium">복지 서비스 추천 SPA</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="mobile-title md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg text-center">
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  복지 서비스 추천
                </motion.span>
                <motion.span 
                  className="block text-xl md:text-3xl lg:text-5xl mt-2 text-yellow-300 drop-shadow-lg font-black"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                >
                  내게 꼭 맞는 복지 찾기
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
                입력한 프로필 기반으로 전국 복지 서비스를 추천합니다.
              </p>
              <p className="mobile-body md:text-lg text-white/90 drop-shadow-sm leading-relaxed">
                연령, 가구 유형, 소득, 지역만 입력하면 맞춤형 복지 혜택을 빠르게 확인하세요!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 px-4 max-w-md mx-auto lg:max-w-none lg:mx-0 lg:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <PremiumButton
                variant="glass"
                size="lg"
                icon={MessageCircle}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
                href="/profile"
              >
                내게 맞는 복지 찾기
              </PremiumButton>
            </motion.div>
          </div>
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
