
import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Sparkles, Users, ArrowRight, Star, Globe, Smile } from 'lucide-react'
import PremiumHeader from '../components/PremiumHeader'
import PremiumFooter from '../components/PremiumFooter'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-50 to-green-50 flex flex-col">
  {/* PremiumHeader - SPA 공통 프리미엄 네비게이션 */}
  <PremiumHeader />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center px-4 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary-light/60 rounded-full mb-4 animate-fade-in">
            <ShieldCheck className="w-5 h-5 text-primary-dark" />
            <span className="text-primary-dark text-sm font-semibold tracking-wide">국가·지자체 공식 데이터 기반</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-blue-500 to-green-400 bg-clip-text text-transparent">맞춤형 복지 서비스</span> <br className="hidden sm:block" />
            <span className="text-gray-800">최고의 추천 플랫폼</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 animate-fade-in-up delay-100">
            내 상황에 꼭 맞는 복지 혜택, <span className="font-semibold text-primary">한 번에</span> 찾으세요.<br className="hidden sm:block" />
            쉽고 빠른 정보, 신뢰할 수 있는 안내, 최신 데이터까지 모두 제공합니다.
          </p>
          <Link
            to="/profile"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white text-lg font-bold rounded-full shadow-lg hover:scale-105 hover:from-primary-dark hover:to-blue-700 transition-all duration-200 animate-fade-in-up delay-200"
          >
            <Heart className="h-6 w-6" />
            <span>맞춤 복지 혜택 찾기</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* 신뢰 요소 */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl shadow border border-gray-100">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">공식·최신 데이터</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl shadow border border-gray-100">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-700">전국 모든 지역 지원</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl shadow border border-gray-100">
            <Users className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-gray-700">모든 연령·가구 대상</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 rounded-xl shadow border border-gray-100">
            <Smile className="w-5 h-5 text-pink-400" />
            <span className="text-sm font-medium text-gray-700">쉬운 사용·빠른 결과</span>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-10 animate-fade-in-up delay-500">
          <div className="text-center p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-5">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">AI 기반 맞춤 추천</h3>
            <p className="text-gray-600">내 정보에 딱 맞는 복지 서비스만 똑똑하게 추천</p>
          </div>
          <div className="text-center p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <ShieldCheck className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">간편·신뢰 신청 안내</h3>
            <p className="text-gray-600">복잡한 절차 없이 쉽고 빠르게, 공식 안내로 안전하게</p>
          </div>
          <div className="text-center p-8 bg-white/90 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">최신·풍부한 정보</h3>
            <p className="text-gray-600">항상 업데이트되는 전국 복지 정보, 상세 설명까지 제공</p>
          </div>
        </div>
      </main>

      {/* PremiumFooter - SPA 공통 프리미엄 푸터 */}
      <PremiumFooter />
    </div>
  )
}
