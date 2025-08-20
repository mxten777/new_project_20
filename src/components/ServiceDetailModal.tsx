
import { type WelfareService } from '../data/sampleServices';
import { isFavorite, toggleFavorite } from '../utils/favorites';

interface Props {
  service: WelfareService;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative border-2 border-blue-100 animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-blue-600 text-3xl font-bold focus:outline-none"
          aria-label="닫기"
        >
          &times;
        </button>
        <button
          type="button"
          className="absolute top-3 left-3 text-3xl text-yellow-400 hover:text-yellow-500 focus:outline-none"
          title={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          aria-label={isFavorite(service.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          onClick={() => { toggleFavorite(service.id); onClose(); }}
        >
          {isFavorite(service.id) ? '★' : '☆'}
        </button>
        <h2 className="text-3xl font-extrabold text-blue-700 mb-3 flex items-center gap-2">
          {service.title}
          <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-semibold px-2 py-0.5 rounded-full ml-1 shadow">{service.category}</span>
        </h2>
        <div className="mb-4 text-gray-700 text-base leading-relaxed">{service.description}</div>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs">{service.region}</span>
          <span className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded text-xs">{service.eligibility}</span>
        </div>
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 font-bold text-base shadow-md transition-all"
        >
          공식 사이트 바로가기
        </a>
      </div>
    </div>
  );
}
