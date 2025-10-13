import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Clock, Stethoscope, Shield, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const aboutCards = [
    {
      icon: GraduationCap,
      title: '풍부한 경험',
      description: '치의학 박사 학위와 20년간의 임상 경험을 바탕으로 신뢰할 수 있는 진료를 제공합니다.',
      features: ['치의학 박사', '20년 임상경험', '대학병원 출신']
    },
    {
      icon: Award,
      title: '최첨단 장비',
      description: '3D CT, 디지털 스캐너 등 최신 의료 장비로 정확한 진단과 안전한 치료를 실현합니다.',
      features: ['3D CT 장비', '디지털 스캐너', '멸균 시스템']
    },
    {
      icon: Heart,
      title: '개인 맞춤 치료',
      description: '환자 한 분 한 분의 상태를 정확히 파악하여 최적의 개인 맞춤형 치료 계획을 제공합니다.',
      features: ['1:1 맞춤 상담', '개인별 치료계획', '사후 관리']
    }
  ];

  const stats = [
    { number: '20+', label: '년 경력' },
    { number: '5000+', label: '치료 케이스' },
    { number: '98%', label: '환자 만족도' },
    { number: '24/7', label: '응급 대응' }
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
            박영진치과 소개
          </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            환자 중심의 개인 맞춤 치료를 통해 자연치아를 최대한 보존하며,
            편안하고 안전한 진료환경을 제공합니다.
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
                  <h3 className="text-2xl font-bold text-gray-900">원장 박영진</h3>
                  <p className="text-primary-600 font-semibold">치의학 박사 · 20년 임상경험</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">전문분야</h4>
                  <div className="flex flex-wrap gap-2">
                    {['보존치료', '보철치료', '임플란트', '심미치료'].map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">진료철학</h4>
                  <p className="text-gray-600 leading-relaxed">
                    "환자 중심의 개인 맞춤 치료를 통해 자연치아를 최대한 보존하며, 
                    편안하고 안전한 진료환경을 제공하여 건강한 미소를 만들어드립니다."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">대학병원 출신</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">다수 논문 발표</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">5000+ 케이스</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium text-gray-700">20년 경력</span>
                </div>
              </div>
            </div>

            {/* Doctor Image Placeholder */}
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
                  <p className="text-gray-600 font-medium">원장님 사진</p>
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
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">시설 특징</h3>
            <p className="text-lg opacity-90">최첨단 장비와 편안한 환경을 갖춘 프리미엄 치과</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="font-semibold mb-1">{facility.title}</div>
                <div className="text-sm opacity-75">{facility.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;