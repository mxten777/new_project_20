import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, XCircle, ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { TimeSlot, DaySchedule, Appointment, AppointmentFormData } from '../types/appointment';
import PremiumButton from './PremiumButton';

const BookingCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<AppointmentFormData>({
    patientName: '',
    phoneNumber: '',
    email: '',
    treatmentType: '',
    notes: ''
  });

  // 진료 시간 설정 (월-금 09:00-18:00, 토 09:00-15:00)
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0; // 일요일 휴진
    const isSaturday = dayOfWeek === 6;
    
    if (isWeekend) return [];
    
    const slots: TimeSlot[] = [];
    const startHour = 9;
    const endHour = isSaturday ? 15 : 18;
    const lunchStart = 12;
    const lunchEnd = 13;
    
    for (let hour = startHour; hour < endHour; hour++) {
      // 점심시간 제외
      if (hour >= lunchStart && hour < lunchEnd + 1) continue;
      
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const isBooked = appointments.some(apt => 
          apt.date.toDateString() === date.toDateString() && 
          apt.time === timeString && 
          apt.status !== 'cancelled'
        );
        
        slots.push({
          time: timeString,
          available: !isBooked,
          doctorName: '박영진 원장'
        });
      }
    }
    
    return slots;
  };

  // 달력 데이터 생성
  const generateCalendarDays = (): DaySchedule[] => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days: DaySchedule[] = [];
    
    // 이전 달 빈 날짜들
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevDate = new Date(year, month, -startingDayOfWeek + i + 1);
      days.push({
        date: prevDate,
        slots: [],
        isHoliday: false
      });
    }
    
    // 현재 달 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isHoliday = date.getDay() === 0; // 일요일
      
      days.push({
        date,
        slots: generateTimeSlots(date),
        isHoliday,
        holidayName: isHoliday ? '휴진' : undefined
      });
    }
    
    // 다음 달 빈 날짜들
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({
        date: nextDate,
        slots: [],
        isHoliday: false
      });
    }
    
    return days;
  };

  const [calendarDays, setCalendarDays] = useState<DaySchedule[]>([]);

  useEffect(() => {
    setCalendarDays(generateCalendarDays());
  }, [currentDate, appointments]);

  // 폼 처리
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot) return;

    const newAppointment: Appointment = {
      id: `apt_${Date.now()}`,
      ...formData,
      date: selectedDate,
      time: selectedTimeSlot.time,
      status: 'confirmed',
      createdAt: new Date()
    };

    setAppointments(prev => [...prev, newAppointment]);
    
    // 폼 초기화
    setFormData({
      patientName: '',
      phoneNumber: '',
      email: '',
      treatmentType: '',
      notes: ''
    });
    setShowBookingForm(false);
    setSelectedDate(null);
    setSelectedTimeSlot(null);
  };

  const treatmentTypes = [
    '일반 검진',
    '충치 치료',
    '스케일링',
    '임플란트',
    '교정 상담',
    '미백 치료',
    '신경 치료',
    '잇몸 치료'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            온라인 예약
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            간편하고 빠른 온라인 예약으로 원하는 시간에 진료를 받으세요
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 캘린더 */}
          <motion.div
            className="lg:col-span-2 glass-card bg-white/90 dark:bg-gray-800/90 rounded-3xl p-6 lg:p-8 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 캘린더 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Calendar className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {currentDate.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' })}
                </h3>
              </div>
              
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
                
                <motion.button
                  onClick={() => setCurrentDate(new Date())}
                  className="px-4 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                >
                  오늘
                </motion.button>
                
                <motion.button
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-800 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </motion.button>
              </div>
            </div>

            {/* 요일 헤더 */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
                <div key={day} className={`text-center py-2 text-sm font-medium ${
                  index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : 'text-gray-600 dark:text-gray-400'
                }`}>
                  {day}
                </div>
              ))}
            </div>

            {/* 달력 그리드 */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((daySchedule, index) => {
                const isCurrentMonth = daySchedule.date.getMonth() === currentDate.getMonth();
                const isToday = daySchedule.date.toDateString() === new Date().toDateString();
                const isSelected = selectedDate?.toDateString() === daySchedule.date.toDateString();
                const availableSlots = daySchedule.slots.filter(slot => slot.available).length;
                
                return (
                  <motion.button
                    key={index}
                    onClick={() => {
                      if (isCurrentMonth && !daySchedule.isHoliday && daySchedule.date >= new Date()) {
                        setSelectedDate(daySchedule.date);
                      }
                    }}
                    className={`
                      aspect-square p-1 rounded-lg text-sm font-medium transition-all duration-200
                      ${!isCurrentMonth ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                        daySchedule.isHoliday ? 'text-red-400 bg-red-50 dark:bg-red-900/20 cursor-not-allowed' :
                        daySchedule.date < new Date() ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' :
                        isSelected ? 'bg-primary-600 text-white shadow-lg' :
                        isToday ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400' :
                        'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }
                    `}
                    whileHover={isCurrentMonth && !daySchedule.isHoliday && daySchedule.date >= new Date() ? { scale: 1.05 } : {}}
                    whileTap={isCurrentMonth && !daySchedule.isHoliday && daySchedule.date >= new Date() ? { scale: 0.95 } : {}}
                    disabled={!isCurrentMonth || daySchedule.isHoliday || daySchedule.date < new Date()}
                  >
                    <div className="flex flex-col items-center">
                      <span>{daySchedule.date.getDate()}</span>
                      {isCurrentMonth && !daySchedule.isHoliday && availableSlots > 0 && (
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-1"></div>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* 시간 선택 및 예약 정보 */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 선택된 날짜 정보 */}
            {selectedDate && (
              <div className="glass-card bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  {selectedDate.toLocaleDateString('ko-KR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    weekday: 'long'
                  })}
                </h4>
                
                {/* 시간 슬롯 */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {calendarDays.find(day => day.date.toDateString() === selectedDate.toDateString())?.slots.map((slot, index) => (
                    <motion.button
                      key={index}
                      onClick={() => slot.available ? setSelectedTimeSlot(slot) : null}
                      className={`
                        p-3 rounded-lg text-sm font-medium transition-all duration-200
                        ${!slot.available ? 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' :
                          selectedTimeSlot?.time === slot.time ? 'bg-primary-600 text-white shadow-lg' :
                          'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500'
                        }
                      `}
                      whileHover={slot.available ? { scale: 1.02 } : {}}
                      whileTap={slot.available ? { scale: 0.98 } : {}}
                      disabled={!slot.available}
                    >
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        {slot.time}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {selectedTimeSlot && (
                  <PremiumButton
                    variant="primary"
                    size="md"
                    onClick={() => setShowBookingForm(true)}
                    className="w-full"
                    icon={CheckCircle}
                  >
                    예약하기
                  </PremiumButton>
                )}
              </div>
            )}

            {/* 예약 안내 */}
            <div className="glass-card bg-white/90 dark:bg-gray-800/90 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">예약 안내</h4>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>진료시간: 월-금 09:00-18:00, 토 09:00-15:00</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>점심시간: 12:30-13:30 (예약 불가)</span>
                </div>
                <div className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>일요일 및 공휴일 휴진</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>예약 변경 및 취소는 진료 1일 전까지 가능</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 예약 폼 모달 */}
        <AnimatePresence>
          {showBookingForm && selectedDate && selectedTimeSlot && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="glass-card bg-white/95 dark:bg-gray-800/95 rounded-3xl p-6 lg:p-8 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">예약 신청</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedDate.toLocaleDateString('ko-KR')} {selectedTimeSlot.time}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      성함
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.patientName}
                      onChange={(e) => setFormData({...formData, patientName: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="이름을 입력하세요"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      연락처
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      이메일
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      진료 종류
                    </label>
                    <select
                      required
                      value={formData.treatmentType}
                      onChange={(e) => setFormData({...formData, treatmentType: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="">진료 종류를 선택하세요</option>
                      {treatmentTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      <FileText className="w-4 h-4 inline mr-1" />
                      참고사항 (선택)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="기타 전달사항이나 증상을 입력하세요"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <PremiumButton
                      type="button"
                      variant="secondary"
                      size="md"
                      onClick={() => setShowBookingForm(false)}
                      className="flex-1"
                    >
                      취소
                    </PremiumButton>
                    <PremiumButton
                      type="submit"
                      variant="primary"
                      size="md"
                      className="flex-1"
                      icon={CheckCircle}
                    >
                      예약 신청
                    </PremiumButton>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingCalendar;