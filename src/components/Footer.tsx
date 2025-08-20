import { FaGithub, FaRegSmile } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-surface text-text-subtle text-center py-6 mt-10 border-t border-border shadow-inner relative z-10 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
        <span className="flex items-center gap-2 font-semibold text-base md:text-lg">
          <FaRegSmile className="text-primary animate-spin-slow"/>
          © {new Date().getFullYear()} 복지 서비스 추천 앱
        </span>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline hover:text-accent transition">
          <FaGithub /> GitHub
        </a>
      </div>
    </footer>
  );
}
