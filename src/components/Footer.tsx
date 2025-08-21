import { FaGithub, FaRegSmile } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-lg text-text-subtle text-center py-5 px-2 mt-10 border-t border-border shadow-lg rounded-t-2xl md:rounded-t-3xl relative z-20 animate-fade-in transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="flex items-center gap-2 font-semibold text-base md:text-lg select-none">
          <FaRegSmile className="text-primary animate-spin-slow"/>
          © {new Date().getFullYear()} 복지 서비스 추천 앱
        </span>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline hover:text-accent transition px-2 py-1 rounded-lg hover:bg-accent-yellow/30 focus:outline-none focus:ring-2 focus:ring-primary/30">
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
