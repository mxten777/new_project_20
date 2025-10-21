import { Heart, ShieldCheck, Star, Globe, Mail } from 'lucide-react'

export default function PremiumFooter() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-800 via-purple-400 to-green-400 border-t border-purple-700 shadow-inner mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8 text-base text-white">
        {/* 서비스 소개 및 신뢰 요소 */}
        <div className="flex-1 flex flex-col gap-3 min-w-[220px]">
          <div className="font-extrabold text-lg md:text-xl tracking-tight mb-1 flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-300" /> MVP Welfare
          </div>
          <div className="text-sm text-white/80 font-medium">
            맞춤형 복지 서비스 추천 플랫폼<br />공식 데이터 기반, 전국 모든 지역·가구 대상, 최신 정보 제공
          </div>
          <div className="flex gap-3 mt-2">
            <ShieldCheck className="w-5 h-5 text-green-300" aria-label="공식·최신 데이터" />
            <Globe className="w-5 h-5 text-blue-200" aria-label="전국 지원" />
            <Star className="w-5 h-5 text-yellow-300" aria-label="신뢰·품질" />
          </div>
        </div>
        {/* 공식 복지 사이트 및 문의 */}
        <div className="flex-1 flex flex-col gap-3 items-end min-w-[220px]">
          <div className="flex gap-4 text-sm font-semibold">
            <a href="https://www.bokjiro.go.kr" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">복지로</a>
            <a href="https://www.gov.kr" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">정부24</a>
            <a href="https://www.nps.or.kr" target="_blank" rel="noopener noreferrer" className="hover:text-green-200 transition-colors">국민연금</a>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="mailto:contact@mvpwelfare.com" className="flex items-center gap-2 hover:text-pink-200 transition-colors">
              <Mail className="w-5 h-5" /> 문의
            </a>
            <a href="/privacy" className="hover:text-green-200">개인정보처리방침</a>
            <a href="/terms" className="hover:text-green-200">이용약관</a>
          </div>
          <div className="text-xs text-white/60 mt-3">© 2025 MVP Welfare. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
