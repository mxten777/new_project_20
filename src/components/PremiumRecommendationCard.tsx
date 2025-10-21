import React from 'react';
import { Star, Heart, ExternalLink, Share2 } from 'lucide-react';
import { RecommendationResult } from '../utils/recommendationEngine';

interface PremiumRecommendationCardProps {
  rec: RecommendationResult;
  onFavorite?: (id: string) => void;
  isFavorite?: boolean;
  onShare?: (service: any) => void;
}

const categoryIcons: { [key: string]: string } = {
  '주거': '🏠',
  '취업/창업': '💼',
  '교육': '📚',
  '의료/건강': '🏥',
  '육아': '👶',
  '노인돌봄': '👵',
  '장애지원': '♿',
  '금융지원': '💰',
  '문화/여가': '🎭',
};

const priorityColors = {
  high: 'bg-red-100 text-red-700 border-red-300',
  medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
  low: 'bg-gray-100 text-gray-500 border-gray-300',
};

export default function PremiumRecommendationCard({ rec, onFavorite, isFavorite, onShare }: PremiumRecommendationCardProps) {
  const { service, matchReasons, priority } = rec;
  return (
    <div className={`p-5 rounded-2xl border-2 shadow-lg bg-white/90 flex flex-col gap-2 animate-fade-in-up transition-transform hover:scale-[1.02] ${priorityColors[priority]}`}
      style={{ borderColor: '#e0e7ff' }}
      aria-label={`추천카드: ${service.title}`}
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-2xl mr-1">{categoryIcons[service.category] || '✨'}</span>
        <span className="font-bold text-lg text-primary-700">{service.title}</span>
        <span className={`ml-auto px-2 py-1 rounded-full border text-xs font-bold ${priorityColors[priority]}`}>{priority === 'high' ? '우선추천' : priority === 'medium' ? '추천' : '참고'}</span>
      </div>
      <div className="text-gray-600 text-sm mb-2">{service.description}</div>
      <div className="flex flex-wrap gap-2 mb-2">
        {matchReasons.map((reason, idx) => (
          <span key={idx} className="px-2 py-1 rounded-full bg-primary-50 text-primary-600 text-xs border border-primary-200">{reason}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {service.benefits.slice(0, 2).map((benefit, idx) => (
          <span key={idx} className="px-2 py-1 rounded bg-green-50 text-green-700 text-xs border border-green-200">{benefit}</span>
        ))}
      </div>
      <div className="flex gap-3 mt-2">
        <a href={service.website || '#'} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-primary-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-primary-700 transition">
          <ExternalLink className="w-4 h-4" /> 신청/상세
        </a>
        <button type="button" onClick={() => onFavorite && onFavorite(service.id)} aria-label="즐겨찾기" className={`px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1 transition ${isFavorite ? 'bg-pink-100 text-pink-600 border-pink-300' : 'bg-white text-gray-600 border-gray-300 hover:bg-pink-50'}`}>
          <Heart className="w-4 h-4" /> 즐겨찾기
        </button>
        <button type="button" onClick={() => onShare && onShare(service)} aria-label="공유" className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1 bg-white text-gray-600 border-gray-300 hover:bg-blue-50 transition">
          <Share2 className="w-4 h-4" /> 공유
        </button>
      </div>
    </div>
  );
}
