import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Sun, Moon, Type, X } from 'lucide-react';
import { useSettings } from '../contexts/SettingsContext.tsx';

const SettingsPanel: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, fontSize, toggleTheme, setFontSize } = useSettings();

  const fontSizes = [
    { value: 'small' as const, label: '작게', size: 'text-sm' },
    { value: 'medium' as const, label: '보통', size: 'text-base' },
    { value: 'large' as const, label: '크게', size: 'text-lg' }
  ];

  return (
    <>
      {/* Settings Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-br from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 text-gold-400 rounded-xl shadow-xl flex items-center justify-center border border-gold-500/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="설정 열기"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-cream-50 shadow-2xl z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-cream-300/50 bg-white">
                <h2 className="text-xl font-black text-navy-800">
                  설정
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-navy-50 rounded-lg transition-colors"
                  aria-label="설정 닫기"
                >
                  <X className="w-5 h-5 text-navy-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Theme Settings */}
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-4">
                    테마 설정
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={toggleTheme}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300
                        ${theme === 'light' 
                          ? 'bg-gold-50 border-2 border-gold-300 text-navy-800' 
                          : 'bg-white text-navy-600 hover:bg-navy-50 border border-cream-300/50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Sun className="w-5 h-5" />
                        <span className="font-bold">라이트 모드</span>
                      </div>
                      {theme === 'light' && <div className="w-3 h-3 bg-gold-500 rounded-full" />}
                    </button>

                    <button
                      onClick={toggleTheme}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-gold-50 border-2 border-gold-300 text-navy-800' 
                          : 'bg-white text-navy-600 hover:bg-navy-50 border border-cream-300/50'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Moon className="w-5 h-5" />
                        <span className="font-bold">다크 모드</span>
                      </div>
                      {theme === 'dark' && <div className="w-3 h-3 bg-gold-500 rounded-full" />}
                    </button>
                  </div>
                </div>

                {/* Font Size Settings */}
                <div>
                  <h3 className="text-lg font-bold text-navy-800 mb-4">
                    글자 크기
                  </h3>
                  <div className="space-y-3">
                    {fontSizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setFontSize(size.value)}
                        className={`
                          w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300
                          ${fontSize === size.value 
                            ? 'bg-gold-50 border-2 border-gold-300 text-navy-800' 
                            : 'bg-white text-navy-600 hover:bg-navy-50 border border-cream-300/50'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Type className="w-5 h-5" />
                          <span className={`font-bold ${size.size}`}>{size.label}</span>
                        </div>
                        {fontSize === size.value && <div className="w-3 h-3 bg-gold-500 rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="p-4 bg-white rounded-xl border border-cream-300/50">
                  <h4 className="font-bold text-navy-800 mb-2">미리보기</h4>
                  <p className="text-navy-600/70 leading-relaxed text-sm">
                    박영진치과의원에서는 20년 경력의 전문의가 직접 진료하는 신뢰할 수 있는 치과 서비스를 제공합니다.
                  </p>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setFontSize('medium');
                    localStorage.removeItem('dental-theme');
                    localStorage.removeItem('dental-font-size');
                  }}
                  className="w-full py-3 px-4 bg-navy-100 hover:bg-navy-200 text-navy-700 rounded-xl font-bold transition-colors"
                >
                  설정 초기화
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsPanel;