import { Link } from 'react-router-dom';
import { FaRegHeart, FaUserAlt, FaHome, FaStar, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // 메뉴 오픈 시 body 스크롤 차단
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [open]);

  return (
    <>
      <button
        className="md:hidden fixed top-4 right-4 flex items-center justify-center w-11 h-11 text-3xl text-primary bg-white/90 rounded-full shadow-lg border border-primary/30 hover:bg-primary hover:text-white transition z-[70] focus:outline-none focus:ring-2 focus:ring-primary/40"
        style={{ pointerEvents: open ? 'none' : 'auto' }}
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <FaBars className="drop-shadow-md" />
      </button>
      {open && (
        <div className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-[2.5px] animate-fadeIn transition-all duration-300" onClick={() => setOpen(false)} />
      )}
  <nav className={`fixed top-0 right-0 h-full w-[65vw] max-w-[260px] bg-gradient-to-br from-[#eaffd0] via-[#f6ffe7] to-[#ffffff] shadow-2xl z-[70] transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 flex flex-col p-0 pt-2 gap-0 border-l-2 border-primary/10 rounded-l-3xl backdrop-blur-xl`} aria-label="모바일 메뉴" style={{ pointerEvents: open ? 'auto' : 'none' }}>
        {/* 상단 미니 로고/닫기 */}
        <div className="flex items-center justify-between px-4 pt-2 pb-1 mb-2 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-white/0 rounded-tl-3xl">
          <span className="inline-flex items-center gap-1 text-base font-extrabold text-primary drop-shadow-sm select-none">
            <FaHome className="text-lg" /> 복지추천
          </span>
          <button
            className="text-2xl text-primary hover:text-accent-yellow transition p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
          >
            <FaTimes />
          </button>
        </div>
        {/* 메뉴 항목 */}
        <div className="flex flex-col gap-0.5 px-2 pt-1 pb-4">
          <Link to="/" className="flex items-center gap-2 text-base font-semibold text-primary rounded-lg px-3 py-2 mb-0.5 bg-gradient-to-r from-[#eaffd0]/80 to-[#f6ffe7]/80 hover:bg-primary hover:text-white shadow transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaHome className="text-lg" /> 홈</Link>
          <Link to="/profile" className="flex items-center gap-2 text-base font-semibold text-primary rounded-lg px-3 py-2 mb-0.5 bg-gradient-to-r from-[#eaffd0]/80 to-[#f6ffe7]/80 hover:bg-primary hover:text-white shadow transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaUserAlt className="text-lg" /> 프로필</Link>
          <Link to="/recommend" className="flex items-center gap-2 text-base font-semibold text-primary rounded-lg px-3 py-2 mb-0.5 bg-gradient-to-r from-[#eaffd0]/80 to-[#f6ffe7]/80 hover:bg-primary hover:text-white shadow transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaStar className="text-lg" /> 추천</Link>
          <Link to="/favorites" className="flex items-center gap-2 text-base font-semibold text-primary rounded-lg px-3 py-2 mb-0.5 bg-gradient-to-r from-[#eaffd0]/80 to-[#f6ffe7]/80 hover:bg-primary hover:text-white shadow transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaRegHeart className="text-lg" /> 즐겨찾기</Link>
        </div>
        {/* 하단 미니 프로필/슬로건 등 추가 가능 */}
      </nav>
    </>
  );
}
