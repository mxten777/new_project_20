export default function HeroSection() {
  return (
    <section className="relative w-full max-w-4xl mx-auto text-center py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 animate-float">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="58" fill="#e0e7ff" stroke="#a5b4fc" strokeWidth="4"/><ellipse cx="60" cy="80" rx="32" ry="12" fill="#c7d2fe"/><ellipse cx="60" cy="60" rx="36" ry="28" fill="#f1f5f9"/><ellipse cx="60" cy="60" rx="18" ry="14" fill="#a5b4fc" fillOpacity="0.2"/></svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight drop-shadow-lg">지역 복지 서비스 <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-2 py-1 rounded-xl shadow">추천 앱</span></h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">나에게 꼭 맞는 정부·지자체 복지 혜택을 쉽고 빠르게 찾으세요.<br />
          연령, 가구 유형, 소득, 지역만 입력하면 <span className="text-blue-500 font-bold">맞춤형 복지 서비스</span>를 추천해드립니다.</p>
        <a href="#profile" className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 px-10 rounded-2xl shadow-xl hover:from-blue-600 hover:to-purple-600 transition text-xl animate-bounce-slow">내게 맞는 복지 찾기</a>
      </div>
    </section>
  );
}
