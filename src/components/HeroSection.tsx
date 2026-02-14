import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowDown, Star, Shield, Award, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  const features = [
    { icon: Star, text: '20년 경력 전문의', desc: '검증된 전문성' },
    { icon: Award, text: '최첨단 장비 완비', desc: '3D CT · 디지털 스캐너' },
    { icon: Shield, text: '개인 맞춤 치료', desc: '1:1 맞춤 상담' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Aurora Background */}
      <div className="absolute inset-0 aurora-bg">
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(200,164,94,0.12) 0%, transparent 70%)' }}
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(27,77,142,0.15) 0%, transparent 70%)' }}
          animate={{ 
            x: [0, -30, 40, 0],
            y: [0, 30, -20, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(200,164,94,0.08) 0%, transparent 60%)' }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative z-10 container-max section-padding text-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-gold-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-sm font-semibold text-gold-300 tracking-wide">Premium Dental Care · Since 2005</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="mobile-title font-display font-black leading-[1.1] mb-4"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="block text-white drop-shadow-lg">박영진치과</span>
                <span className="block text-2xl md:text-4xl lg:text-5xl mt-3 text-white/90 font-bold">
                  새로운 공간에서
                </span>
                <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 font-black">
                  <span className="text-gradient-gold inline-block">더 나은 치료를</span>
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              className="mb-10 space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="mobile-subtitle text-white/90 font-semibold drop-shadow-md">
                20년 경력의 전문의가 직접 진료하는
              </p>
              <p className="mobile-body text-white/70 leading-relaxed">
                최첨단 디지털 장비와 개인 맞춤형 치료로<br className="hidden sm:block" />
                건강한 미소를 선사합니다
              </p>
            </motion.div>

            {/* Feature Badges */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2.5 bg-white/[0.07] backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 hover:border-gold-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.12)' }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="font-bold text-sm text-white block leading-tight">{feature.text}</span>
                    <span className="text-[11px] text-white/50">{feature.desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 max-w-md mx-auto lg:max-w-none lg:mx-0 lg:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="tel:02-712-5678"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-extrabold py-4 px-8 rounded-2xl shadow-gold-lg transition-all duration-400 w-full lg:w-auto min-h-[60px] text-lg tracking-wide"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                <div className="text-center lg:text-left">
                  <div className="text-xs opacity-70 font-semibold">지금 바로 예약</div>
                  <div className="text-lg font-black tracking-wider">02-712-5678</div>
                </div>
              </motion.a>
              
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white hover:bg-white/20 font-bold py-4 px-8 rounded-2xl transition-all duration-300 w-full lg:w-auto min-h-[60px]"
                whileHover={{ scale: 1.03, y: -2, borderColor: 'rgba(200,164,94,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                진료 안내 보기
              </motion.a>
            </motion.div>
          </div>

          {/* Premium Visual */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                className="relative bg-white/[0.08] backdrop-blur-xl rounded-3xl p-10 border border-white/10 shadow-premium-lg"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Gold accent */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 flex items-center justify-center border border-gold-500/20">
                    <Sparkles className="w-10 h-10 text-gold-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">Grand Opening</h3>
                  <p className="text-gold-400 font-serif text-lg mb-6">특별 혜택</p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-white/70 text-sm">모든 치료</span>
                      <div className="text-gold-400 font-black text-3xl mt-1">30% 할인</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-white/70 text-sm">프리미엄 검진 패키지</span>
                      <div className="text-white font-bold text-base mt-1">3D CT + 정밀 검진 + 1:1 상담</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="text-white/50 text-sm">📅 한정 특가 · 2025.10 - 12</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 rounded-2xl w-20 h-20 flex flex-col items-center justify-center font-black shadow-gold-lg"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[10px] font-bold">OPENING</span>
                <span className="text-lg leading-none">NEW</span>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                className="absolute -bottom-3 -left-3 bg-white/10 backdrop-blur-xl rounded-xl px-5 py-3 border border-white/10"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="font-bold text-sm text-white">20년 신뢰</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-gold-400/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;