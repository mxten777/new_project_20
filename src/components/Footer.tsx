import { FaGithub, FaRegSmile } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-600 text-center py-6 mt-10 border-t border-blue-100 shadow-inner relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="flex items-center gap-2 font-semibold text-base md:text-lg">
          <FaRegSmile className="text-blue-400 animate-spin-slow"/>
          © {new Date().getFullYear()} 복지 서비스 추천 앱
        </span>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-500 hover:underline hover:text-purple-500 transition">
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
