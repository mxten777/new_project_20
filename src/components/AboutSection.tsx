import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, Stethoscope, Shield, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const aboutCards = [
    {
      icon: GraduationCap,
      title: '전문 복지 정보',
      description: '정부 공공데이터와 복지 전문가의 검증을 통해 신뢰할 수 있는 복지 정보를 제공합니다.',
      features: ['공공데이터 연동', '전문가 검증', '실시간 업데이트']
    },
    {
      icon: Award,
      title: '맞춤형 추천',
      description: '개인의 상황과 조건을 분석하여 가장 적합한 복지 혜택을 추천해드립니다.',
      features: ['AI 맞춤 분석', '개인별 추천', '최적화 알고리즘']
    },
    {
      icon: Heart,
      title: '간편한 신청 지원',
      description: '복잡한 복지 신청 절차를 간소화하여 누구나 쉽게 복지 혜택을 받을 수 있도록 지원합니다.',
      features: ['1:1 신청 지원', '간편 절차 안내', '사후 관리']
    }
  ];

  const stats = [
    { number: '10,000+', label: '누적 이용자' },
    { number: '500+', label: '복지 정보' },
    { number: '97%', label: '이용자 만족도' },
    { number: '365일', label: '상담 지원' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800 section-bg-light transition-colors duration-300">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            복지 서비스 추천 플랫폼 소개
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            전국의 다양한 복지 정책과 지원 정보를 쉽고 빠르게 안내하는 복지 서비스 추천 플랫폼입니다. 누구나 맞춤형 복지 혜택을 한눈에 확인할 수 있습니다.
          </p>
        </motion.div>

        {/* About Cards */}
        <div className="mobile-card-grid mb-16">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              className="glass-card bg-white/80 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 card-3d"
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6">
                <card.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>
              
              <div className="space-y-2">
                {card.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Doctor Profile */}
        <motion.div
          className="glass-card bg-white/90 rounded-3xl p-8 lg:p-12 shadow-lg mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">복지 서비스 추천</h3>
                  <p className="text-primary-600 font-semibold">전국 복지 정보 플랫폼</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">주요 서비스</h4>
                  <div className="flex flex-wrap gap-2">
                    {['기초생활수급', '장애인복지', '노인복지', '청년복지', '아동복지'].map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">플랫폼 철학</h4>
                  <p className="text-gray-600 leading-relaxed">
                    "누구나 쉽고 빠르게 복지 혜택을 찾고, 신뢰할 수 있는 정보를 통해 더 나은 삶을 누릴 수 있도록 돕습니다."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">공공 데이터 기반</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">이용자 만족도 1위</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">누적 10,000+ 이용자</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">365일 상담 지원</span>
                </div>
              </div>
            </div>

            {/* Platform Image Placeholder */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">플랫폼 이미지</p>
                  <p className="text-sm text-gray-500">준비 중</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">플랫폼 특징</h3>
            <p className="text-lg opacity-90">다양한 복지 정보와 쉽고 빠른 추천 서비스</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: '맞춤형 복지 추천', desc: '개인 상황에 맞는 혜택 안내' },
              { title: '실시간 상담 지원', desc: '365일 온라인 상담' },
              { title: '공공 데이터 연동', desc: '신뢰할 수 있는 정보 제공' },
              { title: '간편한 신청 안내', desc: '복잡한 절차 없이 빠른 신청' },
              { title: '누적 10,000+ 이용자', desc: '전국민 복지 정보 제공' },
              { title: '이용자 만족도 1위', desc: '실제 후기 기반 신뢰도' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-semibold mb-1">{feature.title}</div>
                <div className="text-sm opacity-75">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;