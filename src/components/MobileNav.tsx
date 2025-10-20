import { Link } from 'react-router-dom';
import { FaRegHeart, FaUserAlt, FaHome, FaStar, FaBars, FaTimes } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logOut } from '../firebase';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

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
        className="md:hidden fixed top-1.5 right-4 flex items-center justify-center w-12 h-12 text-3xl text-primary bg-gradient-to-br from-yellow-100 via-white to-blue-100 rounded-full shadow-2xl border border-primary/30 hover:bg-primary hover:text-white transition z-[70] focus:outline-none focus:ring-2 focus:ring-primary/40 animate-float"
        style={{ pointerEvents: open ? 'none' : 'auto' }}
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <FaBars className="drop-shadow-md" />
      </button>
      {open && (
        <div className="fixed inset-0 z-[55] bg-gradient-to-br from-blue-100/40 via-yellow-100/30 to-white/60 backdrop-blur-[3px] animate-fadeIn transition-all duration-300" onClick={() => setOpen(false)} />
      )}
  <nav className={`fixed top-0 right-0 h-full w-[70vw] max-w-[320px] bg-gradient-to-br from-yellow-50 via-white to-blue-50 shadow-2xl z-[70] transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-400 flex flex-col p-0 pt-2 gap-0 border-l-2 border-primary/10 rounded-l-3xl backdrop-blur-2xl ring-2 ring-primary/10`} aria-label="모바일 메뉴" style={{ pointerEvents: open ? 'auto' : 'none' }}>
        {/* 상단 미니 로고/닫기 */}
        <div className="flex items-center justify-between px-5 pt-3 pb-2 mb-2 border-b border-primary/10 bg-gradient-to-r from-primary/10 to-white/0 rounded-tl-3xl">
          <span className="inline-flex items-center gap-2 text-lg font-extrabold text-primary drop-shadow select-none animate-float">
            <FaHome className="text-xl" /> 복지추천
          </span>
          <button
            className="text-2xl text-primary hover:text-accent-yellow transition p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-md bg-white/80"
            onClick={() => setOpen(false)}
            aria-label="메뉴 닫기"
          >
            <FaTimes />
          </button>
        </div>
        {/* 메뉴 항목 */}
        <div className="flex flex-col gap-1 px-3 pt-2 pb-5">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-primary rounded-xl px-4 py-3 mb-1 bg-gradient-to-r from-yellow-50/80 to-blue-50/80 hover:bg-primary hover:text-white shadow-lg transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaHome className="text-xl" /> 홈</Link>
          <Link to="/profile" className="flex items-center gap-2 text-lg font-bold text-primary rounded-xl px-4 py-3 mb-1 bg-gradient-to-r from-yellow-50/80 to-blue-50/80 hover:bg-primary hover:text-white shadow-lg transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaUserAlt className="text-xl" /> 프로필</Link>
          <Link to="/recommend" className="flex items-center gap-2 text-lg font-bold text-primary rounded-xl px-4 py-3 mb-1 bg-gradient-to-r from-yellow-50/80 to-blue-50/80 hover:bg-primary hover:text-white shadow-lg transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaStar className="text-xl" /> 추천</Link>
          <Link to="/favorites" className="flex items-center gap-2 text-lg font-bold text-primary rounded-xl px-4 py-3 mb-1 bg-gradient-to-r from-yellow-50/80 to-blue-50/80 hover:bg-primary hover:text-white shadow-lg transition-all duration-150 active:scale-95" onClick={() => setOpen(false)}><FaRegHeart className="text-xl" /> 즐겨찾기</Link>
        </div>
        <div className="px-3 pb-6 mt-auto">
          {user ? (
            <button
              onClick={async () => {
                await logOut();
                setUser(null);
                setOpen(false);
                navigate('/');
              }}
              className="w-full bg-gradient-to-r from-primary via-blue-400 to-primary-dark text-white py-3 rounded-xl font-bold text-lg shadow-xl hover:bg-primary-dark transition-all duration-150 mt-2 animate-bounce-slow"
            >
              로그아웃
            </button>
          ) : (
            <button
              onClick={() => { setOpen(false); navigate('/login'); }}
              className="w-full bg-gradient-to-r from-yellow-300 via-primary to-blue-300 text-primary py-3 rounded-xl font-bold text-lg shadow-xl hover:bg-primary hover:text-white transition-all duration-150 mt-2 animate-bounce-slow"
            >
              로그인
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
