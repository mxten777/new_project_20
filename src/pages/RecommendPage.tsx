import { sampleServices, type WelfareService } from '../data/sampleServices';
import { useEffect, useState } from 'react';
import ServiceDetailModal from '../components/ServiceDetailModal';
import { isFavorite, toggleFavorite } from '../utils/favorites';

function getUserProfile() {
  try {
    return JSON.parse(localStorage.getItem('userProfile') || '{}');
  } catch {
    return {};
  }
}

import { FaRegSmileWink } from 'react-icons/fa';

export default function RecommendPage() {
  const [filtered, setFiltered] = useState<WelfareService[]>(sampleServices);
  const [selected, setSelected] = useState<WelfareService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const profile = getUserProfile();
      let result = sampleServices;
      // 필터 조건이 하나라도 있으면 필터링, 모두 없으면 전체 노출
      const hasProfile = profile && (profile.region || profile.familyType || profile.incomeLevel || profile.age);
      if (hasProfile) {
        if (profile.region) {
          result = result.filter(s => s.region === profile.region || s.region === '전국');
        }
        if (profile.familyType && profile.familyType.includes('한부모')) {
          result = result.filter(s => s.eligibility.includes('한부모') || !s.eligibility);
        }
        if (profile.incomeLevel && profile.incomeLevel === '저소득') {
          result = result.filter(s => s.eligibility.includes('저소득') || s.eligibility.includes('기초생활') || !s.eligibility);
        }
        if (profile.age) {
          const age = Number(profile.age);
          if (age >= 65) result = result.filter(s => s.eligibility.includes('65') || !s.eligibility);
          if (age >= 19 && age <= 34) result = result.filter(s => s.eligibility.includes('청년') || !s.eligibility);
        }
      }
      setFiltered(result);
      setLoading(false);
    }, 600); // UX용 로딩 딜레이
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto px-2 md:px-0 py-10 md:py-14">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-2 drop-shadow">맞춤형 복지 서비스 추천</h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">입력하신 프로필 정보를 바탕으로<br className="md:hidden"/> 아래 복지 서비스를 추천합니다.</p>
        </div>
        <div className="flex items-center gap-2 text-blue-400 bg-blue-50 px-4 py-2 rounded-xl shadow font-semibold animate-fadeInUp">
          <FaRegSmileWink className="text-2xl"/>
          <span>카드를 클릭하면 상세정보를 볼 수 있어요!</span>
        </div>
      </div>
  <div className="relative min-h-[200px] w-full overflow-x-visible box-border">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-60 text-blue-400 animate-pulse">
            <svg width="60" height="60" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" stroke="#a5b4fc" strokeWidth="4"/><path d="M20 35c3 4 17 4 20 0" stroke="#6366f1" strokeWidth="3" strokeLinecap="round"/><circle cx="25" cy="27" r="2" fill="#6366f1"/><circle cx="35" cy="27" r="2" fill="#6366f1"/></svg>
            <span className="mt-4 text-lg font-bold">맞춤형 복지 서비스를 찾는 중...</span>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 text-gray-400 animate-fadeIn">
            <svg width="60" height="60" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" stroke="#e0e7ef" strokeWidth="4"/><path d="M20 35c3 4 17 4 20 0" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/><circle cx="25" cy="27" r="2" fill="#cbd5e1"/><circle cx="35" cy="27" r="2" fill="#cbd5e1"/></svg>
            <span className="mt-4 text-lg font-bold">조건에 맞는 복지 서비스가 없습니다.</span>
            <span className="text-sm mt-2">프로필 정보를 다시 입력해보세요.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 animate-fadeInUp px-0.5 sm:px-0 w-full box-border">
            {filtered.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-7 flex flex-col justify-between border-2 border-blue-100 cursor-pointer hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-200 group relative overflow-hidden animate-fadeInUp w-full min-w-0 box-border"
                style={{ maxWidth: '100%' }}
                onClick={() => setSelected(service)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-extrabold text-blue-800 mb-2 flex items-center gap-2">
                      {service.title}
                      <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-1 shadow">{service.category}</span>
                    </h3>
                    <p className="text-gray-700 mb-2 line-clamp-2">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-1">
                      <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">{service.region}</span>
                      <span className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded text-xs">{service.eligibility}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-2 text-2xl text-yellow-400 hover:text-yellow-500 z-10 drop-shadow-lg"
                    title={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                    onClick={e => { e.stopPropagation(); toggleFavorite(service.id); setFiltered([...filtered]); }}
                    aria-label={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                  >
                    {isFavorite(service.id) ? '★' : '☆'}
                  </button>
                </div>
                <span className="mt-4 inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold group-hover:bg-blue-200 group-hover:scale-105 transition-all">자세히 보기</span>
                <div className="absolute inset-0 pointer-events-none group-hover:bg-blue-50/30 transition-all duration-200 rounded-3xl" />
              </div>
            ))}
          </div>
        )}
      </div>
      {selected && <ServiceDetailModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
