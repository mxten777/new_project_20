import { Link } from 'react-router-dom';
import { FaRegHeart, FaUserAlt, FaHome, FaStar, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 text-2xl text-white hover:text-blue-200 transition z-30"
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <FaBars />
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 animate-fadeIn" onClick={() => setOpen(false)} />
      )}
      <nav className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 shadow-2xl z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col p-8 gap-6`}
        aria-label="모바일 메뉴"
      >
        <button
          className="absolute top-4 right-4 text-3xl text-white hover:text-blue-200"
          onClick={() => setOpen(false)}
          aria-label="메뉴 닫기"
        >
          <FaTimes />
        </button>
        <Link to="/" className="flex items-center gap-2 text-xl text-white font-bold hover:underline" onClick={() => setOpen(false)}><FaHome /> 홈</Link>
        <Link to="/profile" className="flex items-center gap-2 text-xl text-white font-bold hover:underline" onClick={() => setOpen(false)}><FaUserAlt /> 프로필</Link>
        <Link to="/recommend" className="flex items-center gap-2 text-xl text-white font-bold hover:underline" onClick={() => setOpen(false)}><FaStar /> 추천</Link>
        <Link to="/favorites" className="flex items-center gap-2 text-xl text-white font-bold hover:underline" onClick={() => setOpen(false)}><FaRegHeart /> 즐겨찾기</Link>
      </nav>
    </>
  );
}
