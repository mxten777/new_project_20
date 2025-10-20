import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Star, Award, Heart, Shield } from 'lucide-react';
import PremiumButton from './PremiumButton.tsx';

const HeroSection: React.FC = () => {
  // 복지 서비스 추천 SPA용 features 예시 (필요시 사용)
  const features = [
    { icon: Star, text: '맞춤형 복지 추천' },
    { icon: Award, text: '실시간 서비스' },
    { icon: Heart, text: '개인 프로필 기반' }
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

            {/* Features */}
            {/* 필요시 features 영역 사용 가능 */}

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
                to="/profile"
              >
                내게 맞는 복지 찾기
              </PremiumButton>
            </motion.div>
          </div>

          {/* Visual Element */}
          {/* 필요시 시각적 요소 추가 가능 */}
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
<<<<<<< HEAD
=======
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight drop-shadow-lg text-center animate-fade-in">
          <span className="block">지역 복지 서비스</span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-primary px-3 py-1 rounded-2xl shadow-lg font-black inline-block animate-bounce-slow">추천 앱</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-text-subtle mb-8 font-medium">
          나에게 꼭 맞는 정부·지자체 복지 혜택을 쉽고 빠르게 찾으세요.<br />
          연령, 가구 유형, 소득, 지역만 입력하면{' '}
          <span className="text-primary font-bold">맞춤형 복지 서비스</span>를 추천해드립니다.
        </p>
        <Link
          to="/profile"
          className="inline-block bg-accent-yellow text-primary font-extrabold py-4 px-10 rounded-2xl shadow-card hover:bg-primary hover:text-white transition text-xl animate-bounce-slow"
        >
          내게 맞는 복지 찾기
        </Link>
>>>>>>> d868896 (프리미엄급 UI/UX 및 모바일/PC 반응형 개선 완료)
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