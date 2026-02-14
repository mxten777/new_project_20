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
  Heart,
  Shield,
  Award,
  ArrowUp,
  Send,
  Gem
} from 'lucide-react';
import { useToast } from './ToastManager.tsx';

const FooterNew: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      showToast('success', '뉴스레터 구독이 완료되었습니다!');
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
      label: '전화번호',
      value: '02-712-5678',
      link: 'tel:02-712-5678'
    },
    {
      icon: MapPin,
      label: '주소',
      value: '서울시 용산구 후암동',
      link: '#'
    },
    {
      icon: Clock,
      label: '진료시간',
      value: '월-금 09:00-18:00',
      link: '#'
    },
    {
      icon: Mail,
      label: '이메일',
      value: 'info@pyjdental.co.kr',
      link: 'mailto:info@pyjdental.co.kr'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', link: '#' },
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Youtube, name: 'Youtube', link: '#' }
  ];

  const quickLinks = [
    { name: '병원 소개', href: '#about' },
    { name: '진료 안내', href: '#services' },
    { name: '환자 후기', href: '#testimonials' },
    { name: '진료 예약', href: '#booking' },
    { name: '오시는 길', href: '#location' },
    { name: '공지사항', href: '#notice' }
  ];

  const stats = [
    { number: '20+', label: '년 경력' },
    { number: '5,000+', label: '치료 환자' },
    { number: '98%', label: '만족도' },
    { number: '24/7', label: '응급 대응' }
  ];

  return (
    <footer className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Newsletter Section */}
      <motion.div
        className="bg-gradient-to-r from-navy-700 via-navy-800 to-navy-700 py-14 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-full blur-3xl" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-flex items-center gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Gem className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 text-sm font-bold tracking-wider uppercase">Newsletter</span>
            </motion.div>
            <motion.h3 
              className="text-2xl lg:text-3xl font-black mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              구강 건강 정보 뉴스레터 구독
            </motion.h3>
            <motion.p 
              className="text-lg text-white/60 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              전문의가 직접 전하는 구강 건강 관리법과 최신 치과 정보를 받아보세요
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
                className="flex-1 px-5 py-3.5 rounded-xl text-navy-800 bg-white/95 placeholder-navy-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50 border border-white/20"
                required
              />
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 px-7 py-3.5 rounded-xl font-extrabold hover:shadow-gold transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
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
      <div className="py-14">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 bg-gradient-to-br from-navy-500 to-navy-700 rounded-xl flex items-center justify-center border border-gold-500/20 shadow-lg">
                  <span className="text-gold-400 font-black text-lg">P</span>
                </div>
                <div>
                  <h3 className="text-xl font-black">박영진치과의원</h3>
                  <p className="text-xs text-gold-400/80 font-bold tracking-wider">Premium Dental Care</p>
                </div>
              </div>
              
              <p className="text-white/50 mb-6 leading-relaxed text-sm">
                환자 중심의 개인 맞춤 치료를 통해 자연치아를 최대한 보존하며, 
                편안하고 안전한 진료환경을 제공합니다.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: Heart, text: '20년 경력' },
                  { icon: Shield, text: '안전한 치료' },
                  { icon: Award, text: '높은 만족도' }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-white/40">
                    <badge.icon className="w-4 h-4 text-gold-500/70" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-white/[0.06] hover:bg-gold-500/20 rounded-xl flex items-center justify-center transition-all border border-white/[0.06] hover:border-gold-500/30"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-gold-400" />
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
              <h4 className="text-lg font-bold mb-6 text-white/90">연락처 정보</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-3 text-white/50 hover:text-white/80 transition-colors group"
                    whileHover={{ x: 3 }}
                  >
                    <info.icon className="w-5 h-5 mt-0.5 text-gold-500/70 group-hover:text-gold-400 transition-colors" />
                    <div>
                      <div className="text-sm font-bold text-white/30">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Operating Hours */}
              <div className="mt-6 p-4 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                <h5 className="font-bold mb-3 text-gold-400 text-sm">진료 시간</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/40">월 - 금</span>
                    <span className="text-white/70 font-medium">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">토요일</span>
                    <span className="text-white/70 font-medium">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">점심시간</span>
                    <span className="text-white/70 font-medium">12:30 - 13:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40">일요일</span>
                    <span className="text-rose-400 font-medium">휴진</span>
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
              <h4 className="text-lg font-bold mb-6 text-white/90">빠른 메뉴</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="text-white/50 hover:text-gold-400 py-2 hover:pl-2 transition-all duration-300 text-sm font-medium"
                    whileHover={{ x: 5 }}
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
              <h4 className="text-lg font-bold mb-6 text-white/90">치료 실적</h4>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 bg-white/[0.04] rounded-xl border border-white/[0.06] hover:bg-gold-500/10 hover:border-gold-500/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-black text-gold-400">{stat.number}</div>
                    <div className="text-xs text-white/40 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <motion.div
                className="mt-6 p-4 bg-gradient-to-br from-navy-600 to-navy-700 rounded-xl text-center border border-gold-500/15 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
                <h5 className="font-bold mb-2 text-sm">응급 상황 시</h5>
                <a
                  href="tel:02-712-5678"
                  className="text-lg font-black text-gold-400 hover:underline"
                >
                  02-712-5678
                </a>
                <p className="text-xs mt-1 text-white/50">24시간 응급 대응</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06] py-6">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/40 text-sm">
                Copyright © 2025 박영진치과의원. All rights reserved.
              </p>
              <p className="text-white/25 text-xs mt-1">
                서울시 용산구 후암동 | 사업자등록번호: 000-00-00000
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-xs text-white/30">
                <a href="#" className="hover:text-gold-400 transition-colors">개인정보처리방침</a>
                <a href="#" className="hover:text-gold-400 transition-colors">이용약관</a>
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-gold transition-all text-navy-900"
                whileHover={{ scale: 1.1, y: -3 }}
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