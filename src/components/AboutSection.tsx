import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, Stethoscope, Shield, Heart, Gem } from 'lucide-react';

const AboutSection: React.FC = () => {
  const aboutCards = [
    {
      icon: GraduationCap,
      title: '풍부한 경험',
      description: '치의학 박사 학위와 20년간의 임상 경험을 바탕으로 신뢰할 수 있는 진료를 제공합니다.',
      features: ['치의학 박사', '20년 임상경험', '대학병원 출신'],
      gradient: 'from-navy-500 to-navy-700'
    },
    {
      icon: Award,
      title: '최첨단 장비',
      description: '3D CT, 디지털 스캐너 등 최신 의료 장비로 정확한 진단과 안전한 치료를 실현합니다.',
      features: ['3D CT 장비', '디지털 스캐너', '멸균 시스템'],
      gradient: 'from-gold-600 to-gold-700'
    },
    {
      icon: Heart,
      title: '개인 맞춤 치료',
      description: '환자 한 분 한 분의 상태를 정확히 파악하여 최적의 개인 맞춤형 치료 계획을 제공합니다.',
      features: ['1:1 맞춤 상담', '개인별 치료계획', '사후 관리'],
      gradient: 'from-navy-600 to-navy-800'
    }
  ];

  const stats = [
    { number: '20+', label: '년 경력', suffix: '' },
    { number: '5,000+', label: '치료 케이스', suffix: '' },
    { number: '98%', label: '환자 만족도', suffix: '' },
    { number: '24/7', label: '응급 대응', suffix: '' }
  ];

  return (
    <section id="about" className="section-padding section-warm relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-navy-100/30 to-transparent rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-ornament">
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-4 tracking-tight">
            박영진치과 소개
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-navy-600/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            환자 중심의 개인 맞춤 치료를 통해 자연치아를 최대한 보존하며,
            편안하고 안전한 진료환경을 제공합니다.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="mobile-card-grid mb-20">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(27,77,142,0.06)] hover:shadow-[0_20px_50px_rgba(27,77,142,0.12)] transition-all duration-500 border border-cream-300/50 hover:border-gold-300/50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <card.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-navy-800 mb-3">{card.title}</h3>
              <p className="text-navy-600/70 mb-6 leading-relaxed">{card.description}</p>
              
              <div className="space-y-2.5">
                {card.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                    <span className="text-sm font-medium text-navy-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Profile */}
        <motion.div
          className="bg-white rounded-3xl p-8 lg:p-14 shadow-[0_8px_40px_rgba(27,77,142,0.08)] mb-20 border border-cream-300/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-gold-100/30 to-transparent" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-8 h-8 text-gold-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-navy-800">원장 박영진</h3>
                  <p className="text-gold-600 font-semibold">치의학 박사 · 20년 임상경험</p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-navy-800 mb-3 text-sm tracking-wider uppercase">전문분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {['보존치료', '보철치료', '임플란트', '심미치료'].map((specialty, index) => (
                      <span key={index} className="px-4 py-1.5 bg-cream-100 text-navy-700 rounded-full text-sm font-semibold border border-cream-300">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-navy-800 mb-3 text-sm tracking-wider uppercase">진료철학</h4>
                  <p className="text-navy-600/80 leading-relaxed font-serif-kr text-lg italic">
                    "환자 중심의 개인 맞춤 치료를 통해 자연치아를 최대한 보존하며, 
                    편안하고 안전한 진료환경을 제공하여 건강한 미소를 만들어드립니다."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, text: '대학병원 출신' },
                  { icon: Award, text: '다수 논문 발표' },
                  { icon: Users, text: '5000+ 케이스' },
                  { icon: Clock, text: '20년 경력' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <item.icon className="w-4 h-4 text-gold-500" />
                    <span className="text-sm font-medium text-navy-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doctor Image Placeholder */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-cream-100 via-cream-200 to-gold-100/50 rounded-2xl flex items-center justify-center border border-cream-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-800/20 to-transparent" />
                <div className="text-center relative z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-navy-500 to-navy-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Stethoscope className="w-12 h-12 text-gold-400" />
                  </div>
                  <p className="text-navy-700 font-semibold">원장님 사진</p>
                  <p className="text-sm text-navy-500">준비 중</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(27,77,142,0.06)] border border-cream-300/50 hover:border-gold-300/50 hover:shadow-[0_15px_40px_rgba(200,164,94,0.12)] transition-all duration-400">
                <div className="text-3xl lg:text-4xl font-black text-gradient mb-2 counter-value">
                  {stat.number}
                </div>
                <div className="text-navy-600 font-semibold text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 rounded-3xl p-8 lg:p-14 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gold accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />

          <div className="text-center mb-10 relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Gem className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 text-sm font-bold tracking-wider uppercase">Facilities</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-black mb-3">프리미엄 시설</h3>
            <p className="text-lg text-white/60">최첨단 장비와 편안한 환경을 갖춘 프리미엄 치과</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 relative z-10">
            {[
              { title: '최첨단 3D CT 장비', desc: '정밀한 진단' },
              { title: '디지털 구강스캐너', desc: '정확한 측정' },
              { title: '멸균 시스템 완비', desc: '안전한 치료' },
              { title: '개인 진료실 운영', desc: '프라이버시 보호' },
              { title: '편안한 대기 공간', desc: '쾌적한 환경' },
              { title: '응급 대응 시스템', desc: '24시간 지원' }
            ].map((facility, index) => (
              <motion.div
                key={index}
                className="bg-white/[0.06] backdrop-blur-sm rounded-xl p-5 text-center border border-white/[0.08] hover:bg-white/[0.1] hover:border-gold-500/20 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="font-bold text-white mb-1">{facility.title}</div>
                <div className="text-sm text-gold-400/80">{facility.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;