import { Link } from 'react-router-dom';


import { FaRegHeart, FaUserAlt, FaHome, FaStar } from 'react-icons/fa';
import MobileNav from './MobileNav';

export default function Header() {
  return (
  <header className="w-full bg-white/90 backdrop-blur-lg shadow-lg border-b border-border/60 py-2.5 px-2 sm:px-8 flex items-center justify-between sticky top-0 z-40 animate-fade-in rounded-b-2xl md:rounded-b-3xl transition-all duration-300">
  <div className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-primary drop-shadow-lg select-none">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow/80 shadow-card mr-2 animate-bounce-slow">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.2"/><path d="M7 13c1.5 2 5.5 2 7 0" stroke="#3C82F6" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#3C82F6"/><circle cx="15" cy="10" r="1" fill="#3C82F6"/></svg>
        </span>
        <Link to="/" className="hover:underline">
          복지 서비스 추천
        </Link>
      </div>
      <nav className="hidden md:flex gap-2 xl:gap-4 text-base xl:text-lg font-semibold items-center">
        <Link to="/" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-accent-yellow/40 hover:text-primary transition"><FaHome className="mb-0.5"/> 홈</Link>
        <Link to="/profile" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-accent-yellow/40 hover:text-primary transition"><FaUserAlt className="mb-0.5"/> 프로필</Link>
        <Link to="/recommend" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-accent-yellow/40 hover:text-primary transition"><FaStar className="mb-0.5"/> 추천</Link>
        <Link to="/favorites" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-accent-yellow/40 hover:text-primary transition"><FaRegHeart className="mb-0.5"/> 즐겨찾기</Link>
      </nav>
      <div className="flex items-center md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
