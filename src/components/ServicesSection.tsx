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
  Shield,
  Phone,
  Gem
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Activity,
      title: '충치치료',
      description: '정밀한 진단과 개인 맞춤형 치료로 자연치아를 최대한 보존합니다',
      details: ['미세현미경을 활용한 정밀 치료', '자연치아 보존 우선 원칙', '무통 마취 시스템', '당일 치료 완료 가능'],
      accentColor: 'from-navy-500 to-navy-700',
      lightBg: 'bg-navy-50'
    },
    {
      icon: Leaf,
      title: '잇몸치료',
      description: '체계적인 잇몸 관리와 예방 프로그램으로 건강한 치아를 유지합니다',
      details: ['스케일링 및 잇몸 치료', '치주질환 전문 치료', '개인별 관리 프로그램', '정기검진 시스템'],
      accentColor: 'from-emerald-600 to-emerald-700',
      lightBg: 'bg-emerald-50'
    },
    {
      icon: Stethoscope,
      title: '신경치료',
      description: '첨단 장비를 활용한 정확하고 안전한 근관치료를 시행합니다',
      details: ['디지털 장비 활용', '정확한 근관 치료', '감염 차단 시스템', '치료 성공률 극대화'],
      accentColor: 'from-rose-600 to-rose-700',
      lightBg: 'bg-rose-50'
    },
    {
      icon: Sparkles,
      title: '미백치료',
      description: '안전하고 효과적인 전문가 미백으로 자신감 넘치는 미소를 선사합니다',
      details: ['전문가용 미백 시스템', '개인별 맞춤 농도', '안전한 성분 사용', '지속적인 사후 관리'],
      accentColor: 'from-gold-600 to-gold-700',
      lightBg: 'bg-gold-50'
    },
    {
      icon: Wrench,
      title: '임플란트',
      description: '3D CT 정밀 진단과 1:1 맞춤 상담으로 최적의 임플란트 치료를 제공합니다',
      details: ['3D CT 정밀 진단', '가이드 수술 시스템', '프리미엄 임플란트', '평생 보장 서비스'],
      accentColor: 'from-violet-600 to-violet-700',
      lightBg: 'bg-violet-50'
    },
    {
      icon: Crown,
      title: '보철치료',
      description: '개인별 맞춤 제작으로 자연스럽고 편안한 보철물을 제공합니다',
      details: ['디지털 스캔 정밀 제작', '자연스러운 색상 매칭', '편안한 착용감', '내구성 극대화'],
      accentColor: 'from-navy-600 to-navy-800',
      lightBg: 'bg-navy-50'
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
    <section id="services" className="section-padding section-light relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gradient-to-br from-gold-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-bl from-navy-100/20 to-transparent rounded-full blur-3xl" />

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
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-4 tracking-tight">
            진료 서비스
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-navy-600/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            최신 의료 장비와 전문적인 기술로 개개인에게 최적화된 맞춤형 치료 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mobile-card-grid mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(27,77,142,0.06)] hover:shadow-[0_20px_50px_rgba(27,77,142,0.12)] transition-all duration-500 cursor-pointer border border-cream-300/50 hover:border-gold-300/50 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${service.accentColor} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-navy-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-navy-600/70 mb-5 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Details Toggle */}
              <motion.button
                className="flex items-center gap-2 text-gold-600 font-bold text-sm group-hover:gap-3 transition-all duration-300"
                whileHover={{ x: 3 }}
              >
                <span>자세히 보기</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedService === index && (
                  <motion.div
                    className={`mt-5 p-4 ${service.lightBg} rounded-xl border border-white/50`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-2.5">
                      {service.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-center gap-2.5"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: detailIndex * 0.08 }}
                        >
                          <CheckCircle className="w-4 h-4 text-gold-600 flex-shrink-0" />
                          <span className="text-sm font-medium text-navy-700">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Campaign Section */}
        <motion.div
          className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 rounded-3xl p-8 lg:p-14 text-white mb-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gold-500/5 to-transparent rounded-full blur-3xl" />

          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Gem className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 text-sm font-bold tracking-wider uppercase">Special Offer</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-3">
              Grand Opening 특별 혜택
            </h3>
            <motion.div
              className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 px-5 py-2 rounded-full font-bold text-sm border border-gold-500/20 mt-4"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clock className="w-4 h-4" />
              📅 2025년 10월 ~ 12월 한정
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {campaignOffers.map((offer, index) => (
              <motion.div
                key={index}
                className="relative bg-white/[0.07] backdrop-blur-sm rounded-2xl p-7 border border-white/[0.08] hover:bg-white/[0.1] hover:border-gold-500/20 transition-all duration-300"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className={`absolute -top-2 -right-2 w-12 h-12 rounded-xl flex items-center justify-center text-xs font-black shadow-lg ${
                  offer.badge === 'HOT' 
                    ? 'bg-gradient-to-br from-red-500 to-rose-600 text-white' 
                    : 'bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900'
                }`}>
                  {offer.badge}
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold-500/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-gold-500/10">
                    <offer.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{offer.title}</h4>
                    <p className="text-white/60 leading-relaxed text-sm">{offer.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="tel:02-712-5678"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-extrabold py-4 px-10 rounded-xl shadow-gold-lg hover:shadow-gold transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-5 h-5" />
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
          <div className="section-ornament">
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Process</span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-black text-navy-800 mb-10">
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
                <div className="bg-white rounded-2xl p-7 border border-cream-300/50 hover:border-gold-300/50 hover:shadow-[0_15px_40px_rgba(200,164,94,0.12)] transition-all duration-400">
                  <div className="w-14 h-14 bg-gradient-to-br from-navy-600 to-navy-800 text-gold-400 rounded-xl flex items-center justify-center font-black text-lg mx-auto mb-4 shadow-lg">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-navy-800 mb-1.5">{process.title}</h4>
                  <p className="text-sm text-navy-600/60">{process.desc}</p>
                </div>
                
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-gold-400 w-5 h-5" />
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