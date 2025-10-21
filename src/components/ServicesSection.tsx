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
      title: '기초생활수급',
      description: '생계급여, 주거급여, 의료급여, 교육급여 등 기초생활보장 지원',
      details: [
        '생계급여 신청 및 지원',
        '주거급여 맞춤 상담',
        '의료급여 혜택 안내',
        '교육급여 신청 지원'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Leaf,
      title: '장애인복지',
      description: '장애인연금, 활동지원, 보조기구 지원 등 장애인 맞춤 복지서비스',
      details: [
        '장애인연금 신청 지원',
        '활동지원서비스 연결',
        '보조기구 지원 안내',
        '재활서비스 정보 제공'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Stethoscope,
      title: '노인복지',
      description: '기초연금, 노인돌봄서비스, 요양보험 등 어르신 전용 복지혜택',
      details: [
        '기초연금 신청 지원',
        '노인돌봄서비스 연결',
        '장기요양보험 안내',
        '노인일자리 정보 제공'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Sparkles,
      title: '아동·청소년복지',
      description: '아동수당, 양육수당, 청소년 지원금 등 아이들을 위한 복지서비스',
      details: [
        '아동수당 신청 지원',
        '양육수당 안내',
        '청소년 특별지원',
        '교육비 지원 정보'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: Wrench,
      title: '청년복지',
      description: '청년수당, 취업지원, 주거지원 등 청년을 위한 맞춤 복지정책',
      details: [
        '청년수당 신청 지원',
        '취업지원서비스 연결',
        '청년 주거지원 안내',
        '창업지원 정보 제공'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Crown,
      title: '긴급복지',
      description: '긴급지원, 위기가구 지원, 한시적 생계지원 등 응급상황 복지서비스',
      details: [
        '긴급생계지원 신청',
        '의료비 긴급지원',
        '주거비 긴급지원',
        '위기상황 상담지원'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const campaignOffers = [
    {
      icon: Sparkles,
      title: '복지급여 통합 신청',
      description: '모든 복지급여를 한 번에 신청하고 맞춤 혜택을 받아보세요',
      badge: 'HOT'
    },
    {
      icon: Shield,
      title: '복지 전문 상담',
      description: '1:1 맞춤 상담으로 놓치는 복지혜택 없이 완벽 지원',
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
            복지 서비스
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            전국민을 위한 맞춤형 복지 정보와 신청 지원으로 누구나 쉽게 복지 혜택을 받을 수 있습니다
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
              복지 혜택 특별 안내
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
              📅 2025년 연중 상시 지원 (무료 상담)
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
              href="tel:1544-2025"
              className="inline-flex items-center gap-3 bg-white text-primary-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>지금 바로 복지 상담받기</span>
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
            복지 신청 과정
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: '복지 상담', desc: '간편한 전화 상담' },
              { step: '02', title: '자격 확인', desc: '복지 대상 여부 확인' },
              { step: '03', title: '신청 지원', desc: '맞춤 신청서 작성' },
              { step: '04', title: '혜택 수령', desc: '복지급여 지급 완료' }
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