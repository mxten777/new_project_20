import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart, Award, Users, Phone, Sparkles } from 'lucide-react';

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
    <section className="section-padding section-warm relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy-100/20 to-transparent rounded-full blur-3xl" />

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
            <span className="text-gold-600 text-xs font-bold tracking-[0.2em] uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-navy-800 mb-4 tracking-tight">
            환자 후기
          </h2>
          <div className="gold-divider" />
          <p className="text-lg text-navy-600/70 max-w-3xl mx-auto mt-6 leading-relaxed">
            박영진치과에서 치료받으신 환자분들의 생생한 후기를 확인해보세요
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(27,77,142,0.06)] hover:shadow-[0_15px_40px_rgba(200,164,94,0.12)] border border-cream-300/50 hover:border-gold-300/50 transition-all duration-400"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-6 h-6 text-gold-400" />
              </div>
              <div className="text-3xl font-black text-gradient mb-2">{stat.number}</div>
              <div className="font-bold text-navy-800 mb-1">{stat.label}</div>
              <div className="text-sm text-navy-600/60">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative bg-white rounded-3xl p-8 lg:p-14 shadow-[0_10px_50px_rgba(27,77,142,0.08)] mb-20 border border-cream-300/50 overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top gold accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full flex items-center justify-center border-2 border-gold-300/50">
              <Quote className="w-8 h-8 text-gold-600" />
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
              <div className="flex justify-center mb-6 gap-1">
                {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 bg-gold-50 text-gold-700 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-gold-200/70">
                <Sparkles className="w-4 h-4" />
                {testimonials[currentTestimonial].highlight}
              </div>

              {/* Content */}
              <blockquote className="text-lg lg:text-xl text-navy-700 leading-relaxed mb-8 max-w-4xl mx-auto font-medium italic" style={{ fontFamily: "'Noto Serif KR', serif" }}>
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Patient Info */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center text-gold-400 font-bold text-lg mb-3 shadow-md">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div className="font-bold text-navy-800">
                  {testimonials[currentTestimonial].name} ({testimonials[currentTestimonial].age}세)
                </div>
                <div className="text-gold-600 font-bold text-sm">
                  {testimonials[currentTestimonial].treatment} 치료
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-navy-50 hover:bg-navy-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-cream-300/50 hover:border-navy-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-navy-600 group-hover:text-white" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-gradient-to-r from-gold-500 to-gold-600 w-8'
                      : 'bg-navy-200 hover:bg-gold-300 w-2.5'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-navy-50 hover:bg-navy-600 rounded-full flex items-center justify-center transition-all duration-300 group border border-cream-300/50 hover:border-navy-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-navy-600 group-hover:text-white" />
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
              className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(27,77,142,0.06)] hover:shadow-[0_15px_40px_rgba(200,164,94,0.12)] border border-cream-300/50 hover:border-gold-300/50 transition-all duration-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Stars */}
              <div className="flex mb-3 gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                ))}
              </div>

              {/* Content Preview */}
              <p className="text-navy-600/70 text-sm leading-relaxed mb-4">
                "{testimonial.content.slice(0, 80)}..."
              </p>

              {/* Patient Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-navy-800 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gold-600 text-xs font-bold">
                    {testimonial.treatment}
                  </div>
                </div>
                <div className="w-9 h-9 bg-gradient-to-br from-navy-600 to-navy-800 rounded-full flex items-center justify-center text-gold-400 font-bold text-sm shadow-md">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-navy-700 via-navy-800 to-navy-900 rounded-3xl p-8 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-black mb-4">
                여러분도 건강한 미소의 주인공이 되어보세요
              </h3>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                20년 경력의 전문의가 여러분의 소중한 치아를 책임지겠습니다
              </p>
              <motion.a
                href="tel:02-712-5678"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-extrabold py-4 px-10 rounded-xl shadow-gold-lg hover:shadow-gold transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5" />
                <span>지금 바로 상담 예약</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;