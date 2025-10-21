import { useState } from 'react'
import { Sparkles, User, Menu, X, Home, Info, Heart, Users, Bell, Settings, LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function PremiumHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  const location = useLocation()
  const navItems = [
    { to: '/', label: '홈', icon: <Home className="w-5 h-5 mr-2" /> },
    { to: '/profile', label: '맞춤복지 찾기', icon: <Info className="w-5 h-5 mr-2" /> },
    { to: '/results', label: '대시보드', icon: <Heart className="w-5 h-5 mr-2" /> },
    { to: '/favorites', label: '즐겨찾기', icon: <Users className="w-5 h-5 mr-2" /> },
  ]
  return (
  <header className="w-full bg-gradient-to-r from-purple-800 via-purple-400 to-green-400 shadow-xl border-b border-purple-700 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
          <span className="font-extrabold text-2xl md:text-3xl text-white tracking-tight font-premium drop-shadow-lg">MVP Welfare</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center text-white font-bold text-lg px-3 py-1 rounded-lg hover:bg-blue-800/60 transition duration-150 ${location.pathname === item.to ? 'bg-blue-800/80 shadow text-yellow-300' : ''}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="relative" onClick={() => setProfileMenuOpen(v => !v)} aria-label="프로필 메뉴 열기">
            <User className="w-7 h-7 text-white drop-shadow-lg" />
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-12 bg-surface rounded-xl premium-shadow border border-primary-light z-50 min-w-[160px] animate-fadein">
              <button className="w-full flex items-center gap-2 px-4 py-3 text-primary hover:bg-primary-light rounded-xl font-bold transition-premium" aria-label="설정">
                <Settings className="w-5 h-5" /> 설정
              </button>
              <button className="w-full flex items-center gap-2 px-4 py-3 text-error hover:bg-error-light rounded-xl font-bold transition-premium" aria-label="로그아웃">
                <LogOut className="w-5 h-5" /> 로그아웃
              </button>
            </div>
          )}
          <button className="relative" aria-label="알림">
            <Bell className="w-7 h-7 text-yellow-300 drop-shadow-lg" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-error rounded-full border-2 border-surface"></span>
          </button>
          <button className="relative" aria-label="설정">
            <Settings className="w-7 h-7 text-primary-light drop-shadow-lg" />
          </button>
          <button className="md:hidden p-2 rounded-lg bg-blue-800 hover:bg-blue-900 shadow" onClick={() => setMenuOpen(true)} aria-label="메뉴 열기">
            <Menu className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>
  {/* 모바일 메뉴 오버레이 */}
      {menuOpen && (
        <div className="fixed inset-0 z-[120] bg-black/50 flex">
          <div className="w-4/5 max-w-xs bg-gradient-to-br from-purple-800 via-purple-400 to-green-400 shadow-2xl h-full flex flex-col pt-6 pb-8 px-6 animate-slide-in-left border-r-2 border-purple-700">
            <div className="flex items-center justify-between mb-8">
              <span className="font-extrabold text-xl text-white tracking-tight font-premium drop-shadow-lg">MVP Welfare</span>
              <button onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기" className="p-2 rounded-lg hover:bg-blue-800">
                <X className="w-7 h-7 text-yellow-300" />
              </button>
            </div>
            <nav className="flex flex-col gap-5">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center text-lg font-bold text-white px-3 py-2 rounded-lg hover:bg-blue-800/60 transition duration-150 ${location.pathname === item.to ? 'bg-blue-800/80 shadow text-yellow-300' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 text-xs text-gray-200">© 2025 MVP Welfare</div>
          </div>
          {/* 오버레이 클릭 시 메뉴 닫기 */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
  </header>
  )
}
