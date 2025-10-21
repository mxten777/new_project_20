import { Link, useLocation } from 'react-router-dom'
import { Home, User, Heart, Bookmark } from 'lucide-react'

const navItems = [
  { to: '/', label: '홈', icon: <Home className="w-5 h-5" /> },
  { to: '/profile', label: '프로필', icon: <User className="w-5 h-5" /> },
  { to: '/results', label: '추천결과', icon: <Bookmark className="w-5 h-5" /> },
  { to: '/favorites', label: '즐겨찾기', icon: <Heart className="w-5 h-5" /> },
]

export default function NavBar() {
  const location = useLocation()
  return (
    <nav className="bg-white/80 backdrop-blur shadow-sm border-b sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <span className="text-xl font-extrabold tracking-tight text-primary">복지추천</span>
          <div className="flex gap-2">
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors text-gray-600 hover:text-primary hover:bg-primary/10 ${
                  location.pathname === item.to ? 'bg-primary/10 text-primary font-bold' : ''
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
