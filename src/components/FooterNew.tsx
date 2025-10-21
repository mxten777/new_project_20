import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  Stethoscope,
  Heart,
  Shield,
  Award,
  ArrowUp,
  Send
} from 'lucide-react';
import { useToast } from './ToastManager.tsx';

const FooterNew: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // 실제 API 호출 시뮬레이션
    setTimeout(() => {
      showToast('success', '🎉 뉴스레터 구독이 완료되었습니다!');
      setIsSubmitted(false);
      setEmail('');
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: '상담전화',
      value: '1544-2025',
      link: 'tel:1544-2025'
    },
    {
      icon: MapPin,
      label: '주소',
      value: '서울시 복지로 100',
      link: '#'
    },
    {
      icon: Clock,
      label: '상담시간',
      value: '평일 09:00-18:00',
      link: '#'
    },
    {
      icon: Mail,
      label: '이메일',
      value: 'help@welfare-service.kr',
      link: 'mailto:help@welfare-service.kr'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', link: '#' },
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Youtube, name: 'Youtube', link: '#' }
  ];

  const quickLinks = [
    { name: '플랫폼 소개', href: '#about' },
    { name: '복지정보', href: '#services' },
    { name: '이용자 후기', href: '#testimonials' },
    { name: '복지 추천받기', href: '#recommend' },
    { name: '이용 안내', href: '#guide' },
    { name: '공지사항', href: '#notice' }
  ];

  const stats = [
    { number: '10,000+', label: '누적 이용자' },
    { number: '97%', label: '만족도' },
    { number: '1위', label: '추천 플랫폼' },
    { number: '365일', label: '상담 지원' }
  ];

  return (
        <footer className="bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 dark:from-gray-950 dark:via-primary-950 dark:to-gray-950 text-white relative overflow-hidden transition-colors duration-300">
      {/* Newsletter Section */}
      <motion.div
        className="bg-gradient-to-r from-primary-600 to-primary-700 py-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h3 
              className="text-2xl lg:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              복지 정보 뉴스레터 구독
            </motion.h3>
            <motion.p 
              className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              최신 복지 정책, 지원금, 혜택 정보를 빠르게 받아보세요.
            </motion.p>
            
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-primary-400 transition-colors duration-300"
                required
              />
              <motion.button
                type="submit"
                className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Heart className="w-4 h-4" />
                    구독 완료!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    구독하기
                  </>
                )}
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">복지 서비스 추천</h3>
                  <p className="text-sm text-gray-400 dark:text-gray-500">전국 복지 정보 플랫폼</p>
                </div>
              </div>
              
              <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed transition-colors duration-300">
                이용자 중심의 맞춤형 복지 추천으로 누구나 쉽고 빠르게 다양한 복지 혜택을 누릴 수 있습니다.
                신뢰할 수 있는 정보와 전문 상담을 제공합니다.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: Heart, text: '맞춤형 복지 추천' },
                  { icon: Shield, text: '신뢰할 수 있는 정보' },
                  { icon: Award, text: '이용자 만족도 1위' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 transition-colors duration-300">
                    <badge.icon className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">연락처 정보</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-3 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <info.icon className="w-5 h-5 mt-0.5 text-primary-500 dark:text-primary-400 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-medium text-gray-300 dark:text-gray-400">{info.label}</div>
                      <div>{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold mb-3 text-primary-400">상담 시간</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">월 - 금</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">토요일</span>
                    <span>09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">점심시간</span>
                    <span>12:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400 dark:text-gray-500">일요일</span>
                    <span className="text-red-400 dark:text-red-300">휴무</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">빠른 메뉴</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 py-2 hover:pl-2 transition-all duration-300"
                    whileHover={{ x: 8 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-6">서비스 실적</h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-primary-400 dark:text-primary-300">{stat.number}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-lg text-center transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <h5 className="font-semibold mb-2">긴급 복지 상담</h5>
                <a
                  href="tel:1544-2025"
                  className="text-lg font-bold hover:underline"
                >
                  📞 1544-2025
                </a>
                <p className="text-xs mt-1 opacity-90">365일 상담 지원</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                Copyright © 2025 복지 서비스 추천. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-600 text-xs mt-1 transition-colors duration-300">
                서울시 복지로 100 | 사업자등록번호: 000-00-00000
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-600">
                <a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">이용약관</a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="맨 위로 가기"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;