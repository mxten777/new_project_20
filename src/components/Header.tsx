import { Link } from 'react-router-dom';


import { FaRegHeart, FaUserAlt, FaHome, FaStar } from 'react-icons/fa';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 py-4 px-6 shadow-xl text-white flex items-center justify-between relative z-20">
      <div className="flex items-center gap-3 text-2xl font-extrabold tracking-tight drop-shadow-lg">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 shadow-lg mr-2 animate-bounce-slow">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" fillOpacity="0.2"/><path d="M7 13c1.5 2 5.5 2 7 0" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="10" r="1" fill="#fff"/><circle cx="15" cy="10" r="1" fill="#fff"/></svg>
        </span>
        <Link to="/" className="hover:underline">복지 서비스 추천</Link>
      </div>
      {/* 데스크탑 네비게이션 */}
      <nav className="hidden md:flex gap-2 xl:gap-4 text-base xl:text-lg font-semibold items-center">
        <Link to="/" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition"><FaHome className="mb-0.5"/> 홈</Link>
        <Link to="/profile" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition"><FaUserAlt className="mb-0.5"/> 프로필</Link>
        <Link to="/recommend" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition"><FaStar className="mb-0.5"/> 추천</Link>
        <Link to="/favorites" className="flex items-center gap-1 px-2 xl:px-3 py-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition"><FaRegHeart className="mb-0.5"/> 즐겨찾기</Link>
      </nav>
      {/* 모바일 햄버거버튼 및 네비 */}
      <div className="flex items-center md:hidden">
        <MobileNav />
      </div>
    </header>
  );
}
