import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, ExternalLink, Share2 } from 'lucide-react'
import PremiumHeader from '../components/PremiumHeader'
import PremiumFooter from '../components/PremiumFooter'
import { welfareServices } from '../data/welfareServices'

export default function FavoritesPage() {
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState<string[]>([])

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  const removeFavorite = (serviceId: string) => {
    const newFavorites = favorites.filter(id => id !== serviceId)
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  const shareService = async (service: any) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: service.title,
          text: service.description,
          url: window.location.href
        })
      } catch (error) {
        console.log('공유 취소됨')
      }
    } else {
      navigator.clipboard.writeText(`${service.title}: ${service.description}`)
      alert('링크가 클립보드에 복사되었습니다!')
    }
  }

  const favoriteServices = welfareServices.filter(service => favorites.includes(service.id))

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: any } = {
      '주거': '🏠',
      '취업/창업': '💼',
      '교육': '📚',
      '의료/건강': '🏥',
      '육아': '👶',
      '노인돌봄': '👵',
      '장애지원': '♿',
      '금융지원': '💰',
      '문화/여가': '🎭'
    }
    return icons[category] || '📋'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      <PremiumHeader />
      <div className="container mx-auto px-4 py-8 flex-1 w-full">
        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">💔</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">즐겨찾기가 비어있습니다</h2>
            <p className="text-gray-600 mb-8">관심 있는 복지서비스를 추가해보세요!</p>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/results')}
                className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors mr-4"
              >
                추천 서비스 보기
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                프로필 다시 입력
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {favoriteServices.map((service) => (
              <div key={service.id} className="p-5 rounded-2xl border-2 shadow-lg bg-white/90 flex flex-col gap-2 animate-fade-in-up transition-transform hover:scale-[1.02]" style={{ borderColor: '#e0e7ff' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl mr-1">{getCategoryIcon(service.category)}</span>
                  <span className="font-bold text-lg text-primary-700">{service.title}</span>
                  <span className="ml-auto px-2 py-1 rounded-full border text-xs font-bold bg-primary-100 text-primary-700 border-primary-300">{service.category}</span>
                </div>
                <div className="text-gray-600 text-sm mb-2">{service.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-green-50 text-green-700 text-xs border border-green-200">{benefit}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <a href={service.website || '#'} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-primary-600 text-white text-xs font-bold flex items-center gap-1 hover:bg-primary-700 transition">
                    <ExternalLink className="w-4 h-4" /> 신청/상세
                  </a>
                  <button type="button" onClick={() => shareService(service)} aria-label="공유" className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1 bg-white text-gray-600 border-gray-300 hover:bg-blue-50 transition">
                    <Share2 className="w-4 h-4" /> 공유
                  </button>
                  <button type="button" onClick={() => removeFavorite(service.id)} aria-label="즐겨찾기 삭제" className="px-3 py-2 rounded-xl border text-xs font-bold flex items-center gap-1 bg-white text-pink-600 border-pink-300 hover:bg-pink-50 transition">
                    <Heart className="w-4 h-4" /> 삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <PremiumFooter />
    </div>
  )
}