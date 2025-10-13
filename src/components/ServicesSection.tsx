import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Leaf, 
  Stethoscope, 
  Sparkles, 
  Wrench, 
  Crown,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Activity,
      title: '충치치료',
      description: '정밀한 진단과 개인 맞춤형 치료로 자연치아를 최대한 보존합니다',
      details: [
        '미세현미경을 활용한 정밀 치료',
        '자연치아 보존 우선 원칙',
        '무통 마취 시스템',
        '당일 치료 완료 가능'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Leaf,
      title: '잇몸치료',
      description: '체계적인 잇몸 관리와 예방 프로그램으로 건강한 치아를 유지합니다',
      details: [
        '스케일링 및 잇몸 치료',
        '치주질환 전문 치료',
        '개인별 관리 프로그램',
        '정기검진 시스템'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Stethoscope,
      title: '신경치료',
      description: '첨단 장비를 활용한 정확하고 안전한 근관치료를 시행합니다',
      details: [
        '디지털 장비 활용',
        '정확한 근관 치료',
        '감염 차단 시스템',
        '치료 성공률 극대화'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Sparkles,
      title: '미백치료',
      description: '안전하고 효과적인 전문가 미백으로 자신감 넘치는 미소를 선사합니다',
      details: [
        '전문가용 미백 시스템',
        '개인별 맞춤 농도',
        '안전한 성분 사용',
        '지속적인 사후 관리'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Wrench,
      title: '임플란트',
      description: '3D CT 정밀 진단과 1:1 맞춤 상담으로 최적의 임플란트 치료를 제공합니다',
      details: [
        '3D CT 정밀 진단',
        '가이드 수술 시스템',
        '프리미엄 임플란트',
        '평생 보장 서비스'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Crown,
      title: '보철치료',
      description: '개인별 맞춤 제작으로 자연스럽고 편안한 보철물을 제공합니다',
      details: [
        '디지털 스캔 정밀 제작',
        '자연스러운 색상 매칭',
        '편안한 착용감',
        '내구성 극대화'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const campaignOffers = [
    {
      icon: Sparkles,
      title: '전 치료 30% 할인',
      description: '모든 진료과목 30% 특가 + 추가 케어 서비스 무료 제공',
      badge: 'HOT'
    },
    {
      icon: Shield,
      title: '프리미엄 검진 패키지',
      description: '3D CT + 정밀 검진 + 전문의 1:1 맞춤 상담',
      badge: 'NEW'
    }
  ];

  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            진료 서비스
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            최신 의료 장비와 전문적인 기술로 개개인에게 최적화된 맞춤형 치료 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mobile-card-grid mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative glass-card bg-white/85 dark:bg-gray-800/85 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 dark:border-gray-700/50 card-3d"
              initial={{ opacity: 0, y: 50, rotateY: -10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.05,
                rotateX: 3,
                rotateY: 3,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                {service.description}
              </p>

              {/* Details Toggle */}
              <motion.button
                className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedService === index && (
                  <motion.div
                    className={`mt-6 p-4 ${service.bgColor} dark:bg-gray-700/50 rounded-xl`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Campaign Section */}
        <motion.div
          className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 lg:p-12 text-white mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Grand Opening 특별 혜택
            </motion.h3>
            <motion.div
              className="inline-flex items-center gap-2 bg-yellow-400 dark:bg-yellow-500 text-primary-900 dark:text-gray-900 px-4 py-2 rounded-full font-bold transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.3 },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              animate={{ 
                opacity: 1,
                scale: [1, 1.05, 1],
              }}
            >
              <Clock className="w-4 h-4" />
              📅 2025년 10월 ~ 12월 (한정 특가)
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignOffers.map((offer, index) => (
              <motion.div
                key={index}
                className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
              >
                {/* Badge */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold ${
                  offer.badge === 'HOT' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}>
                  {offer.badge}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/30 dark:bg-gray-700/50 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                    <offer.icon className="w-6 h-6 text-white dark:text-gray-200" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white dark:text-gray-100">{offer.title}</h4>
                    <p className="opacity-90 leading-relaxed text-white/90 dark:text-gray-300/90">{offer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="tel:02-712-5678"
              className="inline-flex items-center gap-3 bg-white text-primary-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>지금 바로 예약하고 혜택 받기</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-300">
            치료 과정
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '전화 상담', desc: '간편한 전화 예약' },
              { step: '02', title: '정밀 검진', desc: '3D CT 정밀 진단' },
              { step: '03', title: '치료 계획', desc: '개인 맞춤 상담' },
              { step: '04', title: '안전한 치료', desc: '전문적인 시술' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">{process.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{process.desc}</p>
                </div>
                
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6 transition-colors duration-300" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;