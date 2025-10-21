import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, Users } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: '이○○',
      age: 34,
      service: '청년 주거복지',
      rating: 5,
      content: '복지 서비스 추천 플랫폼을 통해 내게 꼭 맞는 주거 지원 정책을 쉽게 찾을 수 있었어요. 신청 방법도 상세히 안내해줘서 큰 도움이 됐습니다.',
      highlight: '맞춤형 주거복지 추천'
    },
    {
      name: '박○○',
      age: 47,
      service: '노인 돌봄 서비스',
      rating: 5,
      content: '부모님을 위한 돌봄 서비스 정보를 한눈에 비교할 수 있어 편리했습니다. 실제 이용자 후기도 많아 신뢰가 갔어요.',
      highlight: '신뢰도 높은 후기 제공'
    },
    {
      name: '최○○',
      age: 29,
      service: '청년 취업 지원',
      rating: 5,
      content: '취업 준비에 필요한 다양한 복지 혜택을 한 번에 확인할 수 있어 시간과 노력을 아꼈습니다. 추천 시스템이 정말 유용해요!',
      highlight: '효율적인 복지 정보 탐색'
    },
    {
      name: '정○○',
      age: 52,
      service: '장애인 복지',
      rating: 5,
      content: '장애인 복지 정책과 지원금 정보를 쉽게 비교하고 신청할 수 있었습니다. 복지 서비스 추천 덕분에 실질적인 도움을 받았어요.',
      highlight: '실질적 지원 정보 제공'
    },
    {
      name: '김○○',
      age: 38,
      service: '가족 복지',
      rating: 5,
      content: '가족을 위한 다양한 복지 혜택을 한눈에 볼 수 있어 좋았습니다. 상담 서비스도 친절해서 만족도가 높아요.',
      highlight: '친절한 상담 서비스'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: '누적 이용자',
      description: '전국 복지 서비스 추천 누적 이용자 수'
    },
    {
      icon: Star,
      number: '97%',
      label: '만족도',
      description: '실제 이용자 후기 기반 높은 만족도'
    },
    {
      icon: Award,
      number: '1위',
      label: '추천 플랫폼',
      description: '복지 서비스 추천 분야 1위'
    },
    {
      icon: Heart,
      number: '365일',
      label: '상담 지원',
      description: '연중무휴 온라인 상담 지원'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
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
            이용자 후기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            복지 서비스 추천 플랫폼을 통해 실제로 도움을 받은 이용자들의 생생한 후기를 확인해보세요.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2 transition-colors duration-300">{stat.number}</div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative glass-card bg-white/90 dark:bg-gray-800/90 rounded-3xl p-8 lg:p-12 shadow-xl mb-16 transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary-600" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 transition-colors duration-300">
                <Heart className="w-4 h-4" />
                {testimonials[currentTestimonial].highlight}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto transition-colors duration-300">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                  {testimonials[currentTestimonial].name} ({testimonials[currentTestimonial].age}세)
                </div>
                <div className="text-primary-600 dark:text-primary-400 font-medium transition-colors duration-300">
                  {testimonials[currentTestimonial].service}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-600 dark:bg-primary-400 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 dark:hover:bg-primary-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-gray-100 dark:bg-gray-700 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 rounded-full flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Reviews Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content Preview */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 transition-colors duration-300">
                "{testimonial.content.slice(0, 80)}..."
              </p>

              {/* Patient Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 text-xs font-medium transition-colors duration-300">
                    {testimonial.service}
                  </div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-3xl p-8 lg:p-12 text-white transition-colors duration-300">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              나에게 꼭 맞는 복지 혜택, 지금 확인해보세요!
            </h3>
            <p className="text-lg opacity-90 mb-8">
              다양한 복지 서비스와 지원 정책을 쉽고 빠르게 추천받고, 전문가 상담까지 한 번에!
            </p>
            <motion.a
              href="#recommend"
              className="inline-flex items-center gap-3 bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>복지 서비스 추천받기</span>
              <span className="text-lg">🎯</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;