
import { type WelfareService } from '../data/sampleServices';
import { isFavorite, toggleFavorite } from '../utils/favorites';

interface Props {
  service: WelfareService;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl shadow-2xl max-w-lg w-full p-10 relative border border-blue-200 animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-blue-600 text-4xl font-extrabold focus:outline-none transition-all"
          aria-label="닫기"
        >
          &times;
        </button>
        <button
          type="button"
          className="absolute top-5 left-5 text-3xl text-yellow-400 hover:text-yellow-500 focus:outline-none transition-all"
          title={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          aria-label={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          onClick={() => { toggleFavorite(service.id); onClose(); }}
        >
          {isFavorite(service.id) ? '★' : '☆'}
        </button>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">{service.category.slice(0,1)}</span>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-blue-700 mb-1 flex items-center gap-2">
              {service.title}
              <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-1 shadow">{service.category}</span>
            </h2>
            <div className="flex flex-wrap gap-2 mt-1">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">{service.region}</span>
              <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-semibold">{service.eligibility}</span>
            </div>
          </div>
        </div>
        <div className="mb-6 text-gray-700 text-lg leading-relaxed font-medium border-t border-blue-100 pt-6">{service.description}</div>
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-blue-600 hover:to-purple-600 font-bold text-lg shadow-lg transition-all"
        >
          공식 사이트 바로가기
        </a>
      </div>
    </div>
  );
}
