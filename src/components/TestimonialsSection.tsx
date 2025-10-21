import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, Users } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: '김○○',
      age: 35,
      treatment: '임플란트',
      rating: 5,
      content: '20년 넘게 치과를 무서워해서 치료를 미루다가 박영진 원장님을 만났습니다. 정말 친절하고 자세한 설명으로 불안감을 덜어주셨어요. 임플란트 수술도 전혀 아프지 않았고, 지금은 자연치아처럼 편안합니다.',
      highlight: '전혀 아프지 않은 임플란트'
    },
    {
      name: '이○○',
      age: 42,
      treatment: '미백치료',
      rating: 5,
      content: '결혼식을 앞두고 미백치료를 받았는데 정말 만족스러워요! 색이 너무 자연스럽게 밝아져서 주변에서 다들 놀라워합니다. 원장님이 개인별 맞춤으로 농도를 조절해주셔서 안전했어요.',
      highlight: '자연스러운 미백 효과'
    },
    {
      name: '박○○',
      age: 28,
      treatment: '충치치료',
      rating: 5,
      content: '직장 때문에 시간이 없어서 걱정했는데, 하루 만에 충치치료를 깔끔하게 끝내주셨어요. 마취도 전혀 아프지 않았고, 치료 후에도 불편함이 없어서 정말 감사했습니다.',
      highlight: '당일 치료 완료'
    },
    {
      name: '최○○',
      age: 55,
      treatment: '잇몸치료',
      rating: 5,
      content: '오랫동안 잇몸이 아파서 고생했는데, 체계적인 치료계획으로 완치해주셨어요. 정기검진까지 꼼꼼히 관리해주셔서 이제는 잇몸 건강이 정말 좋아졌습니다.',
      highlight: '체계적인 사후 관리'
    },
    {
      name: '정○○',
      age: 38,
      treatment: '보철치료',
      rating: 5,
      content: '앞니 보철을 했는데 색상이랑 모양이 완전 자연스러워요. 친구들도 치료한 걸 모를 정도입니다. 디지털 장비로 정밀하게 만들어주셔서 착용감도 완벽해요.',
      highlight: '자연스러운 보철물'
    }
  ];

  const stats = [
    {
      icon: Users,
      number: '5,000+',
      label: '치료 환자',
      description: '20년간 축적된 풍부한 임상경험'
    },
    {
      icon: Star,
      number: '98%',
      label: '만족도',
      description: '환자분들의 높은 만족도'
    },
    {
      icon: Award,
      number: '100%',
      label: '재방문율',
      description: '신뢰를 바탕으로 한 지속적 관계'
    },
    {
      icon: Heart,
      number: '24/7',
      label: '응급 대응',
      description: '언제든 도움이 필요할 때'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
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
            환자 후기
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            박영진치과에서 치료받으신 환자분들의 생생한 후기를 확인해보세요
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
                  {testimonials[currentTestimonial].treatment} 치료
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
                    {testimonial.treatment}
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
              여러분도 건강한 미소의 주인공이 되어보세요
            </h3>
            <p className="text-lg opacity-90 mb-8">
              20년 경력의 전문의가 여러분의 소중한 치아를 책임지겠습니다
            </p>
            <motion.a
              href="tel:02-712-5678"
              className="inline-flex items-center gap-3 bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>지금 바로 상담 예약</span>
              <span className="text-lg">📞</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;