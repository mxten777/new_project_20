import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  CheckCircle,
  Shield,
  Award
} from 'lucide-react';

const RecommendPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    location: '',
    phone: '',
    email: '',
    situation: '',
    preferences: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // 실제 API 호출 시뮬레이션
    setTimeout(() => {
      alert('복지 추천 신청이 완료되었습니다! 24시간 내에 맞춤 복지 정보를 안내해드릴 예정입니다.');
      setIsSubmitted(false);
      setFormData({
        name: '',
        age: '',
        location: '',
        phone: '',
        email: '',
        situation: '',
        preferences: []
      });
    }, 1000);
  };

  const welfareCategories = [
    '기초생활수급',
    '장애인복지',
    '노인복지',
    '청년복지',
    '아동복지',
    '긴급복지'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            맞춤 복지 추천받기
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            개인 상황에 맞는 복지 혜택을 무료로 추천해드립니다. 간단한 정보만 입력하시면 24시간 내에 전문 상담사가 연락드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    이름 *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="성함을 입력하세요"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    나이 *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="나이를 입력하세요"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  거주지역 *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                    required
                  >
                    <option value="">거주지역을 선택하세요</option>
                    <option value="서울">서울특별시</option>
                    <option value="부산">부산광역시</option>
                    <option value="대구">대구광역시</option>
                    <option value="인천">인천광역시</option>
                    <option value="광주">광주광역시</option>
                    <option value="대전">대전광역시</option>
                    <option value="울산">울산광역시</option>
                    <option value="세종">세종특별자치시</option>
                    <option value="경기">경기도</option>
                    <option value="강원">강원도</option>
                    <option value="충북">충청북도</option>
                    <option value="충남">충청남도</option>
                    <option value="전북">전라북도</option>
                    <option value="전남">전라남도</option>
                    <option value="경북">경상북도</option>
                    <option value="경남">경상남도</option>
                    <option value="제주">제주특별자치도</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    연락처 *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="010-0000-0000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    이메일
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  현재 상황 *
                </label>
                <textarea
                  name="situation"
                  value={formData.situation}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-300"
                  placeholder="현재 상황이나 필요한 복지 지원에 대해 간단히 설명해주세요"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  관심 복지 분야 (선택)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {welfareCategories.map((category, index) => (
                    <label key={index} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <Heart className="w-5 h-5 animate-pulse" />
                    신청 중...
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    무료 복지 추천 신청하기
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Service Features */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                왜 복지 서비스 추천을 선택해야 할까요?
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: Shield, title: '무료 서비스', desc: '모든 상담과 추천 서비스가 완전 무료입니다' },
                  { icon: Award, title: '전문 상담', desc: '복지 전문가가 1:1 맞춤 상담을 제공합니다' },
                  { icon: CheckCircle, title: '빠른 응답', desc: '24시간 내에 맞춤 복지 정보를 안내해드립니다' },
                  { icon: Heart, title: '지속 지원', desc: '신청 후에도 지속적인 사후 관리를 제공합니다' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">문의 및 상담</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>상담전화: 1544-2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>이메일: help@welfare-service.kr</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>주소: 서울시 복지로 100</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/20 rounded-xl">
                <p className="text-sm opacity-90">
                  <strong>상담시간:</strong> 평일 09:00-18:00 (토,일,공휴일 휴무)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RecommendPage;