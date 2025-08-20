import { useEffect, useState } from 'react';
import { sampleServices, type WelfareService } from '../data/sampleServices';
import { getFavorites, toggleFavorite } from '../utils/favorites';
import { FaRegSadTear } from 'react-icons/fa';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<WelfareService[]>([]);

  useEffect(() => {
    const ids = getFavorites();
    setFavorites(sampleServices.filter(s => ids.includes(s.id)));
  }, []);

  const handleToggle = (id: string) => {
    toggleFavorite(id);
    const ids = getFavorites();
    setFavorites(sampleServices.filter(s => ids.includes(s.id)));
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-2 md:px-0 py-10 md:py-14">
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-500 mb-2 drop-shadow">즐겨찾기 복지 서비스</h2>
          <p className="text-base md:text-lg text-gray-600 font-medium">내가 저장한 복지 서비스만 한눈에 모아볼 수 있어요.</p>
        </div>
      </div>
  <div className="relative min-h-[200px] w-full overflow-x-visible box-border">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-60 text-yellow-400 animate-fadeIn">
            <FaRegSadTear className="text-5xl mb-2 animate-bounce"/>
            <span className="mt-2 text-lg font-bold">즐겨찾기한 복지 서비스가 없습니다.</span>
            <span className="text-sm mt-2 text-gray-400">추천 페이지에서 별 아이콘을 눌러 즐겨찾기를 추가해보세요!</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 animate-fadeInUp px-0.5 sm:px-0 w-full box-border">
            {favorites.map(service => (
              <div key={service.id} className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-7 flex flex-col justify-between border-2 border-yellow-200 relative group overflow-hidden animate-fadeInUp w-full min-w-0 box-border" style={{ maxWidth: '100%' }}>
                <button
                  type="button"
                  className="absolute top-3 right-3 text-3xl text-yellow-400 hover:text-yellow-500 drop-shadow-lg animate-bounce-slow"
                  title="즐겨찾기 해제"
                  onClick={() => handleToggle(service.id)}
                  aria-label="즐겨찾기 해제"
                >
                  ★
                </button>
                <div>
                  <h3 className="text-xl font-extrabold text-blue-800 mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="inline-block bg-gradient-to-r from-yellow-300 to-yellow-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-1 shadow">{service.category}</span>
                  </h3>
                  <p className="text-gray-700 mb-2 line-clamp-2">{service.description}</p>
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded text-xs">{service.region}</span>
                    <span className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded text-xs">{service.eligibility}</span>
                  </div>
                </div>
                <a href={service.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 font-bold text-base shadow-md transition-all">자세히 보기</a>
                <div className="absolute inset-0 pointer-events-none group-hover:bg-yellow-50/30 transition-all duration-200 rounded-3xl" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
