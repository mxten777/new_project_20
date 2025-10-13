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
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-xl flex items-center justify-center transition-colors duration-300"
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
              className="fixed inset-0 bg-black/50 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  설정
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  aria-label="설정 닫기"
                >
                  <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Theme Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    테마 설정
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={toggleTheme}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300
                        ${theme === 'light' 
                          ? 'bg-primary-50 border-2 border-primary-200 text-primary-800' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Sun className="w-5 h-5" />
                        <span className="font-medium">라이트 모드</span>
                      </div>
                      {theme === 'light' && <div className="w-3 h-3 bg-primary-600 rounded-full" />}
                    </button>

                    <button
                      onClick={toggleTheme}
                      className={`
                        w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300
                        ${theme === 'dark' 
                          ? 'bg-primary-50 border-2 border-primary-200 text-primary-800' 
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className="flex items-center gap-3">
                        <Moon className="w-5 h-5" />
                        <span className="font-medium">다크 모드</span>
                      </div>
                      {theme === 'dark' && <div className="w-3 h-3 bg-primary-600 rounded-full" />}
                    </button>
                  </div>
                </div>

                {/* Font Size Settings */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
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
                            ? 'bg-primary-50 border-2 border-primary-200 text-primary-800' 
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Type className="w-5 h-5" />
                          <span className={`font-medium ${size.size}`}>{size.label}</span>
                        </div>
                        {fontSize === size.value && <div className="w-3 h-3 bg-primary-600 rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">미리보기</h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                  className="w-full py-3 px-4 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors"
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