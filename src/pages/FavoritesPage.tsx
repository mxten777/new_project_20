import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PremiumHeader from '../components/PremiumHeader'
import PremiumFooter from '../components/PremiumFooter'
import { ExternalLink, Share2, Heart } from 'lucide-react'
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
    <div className="min-h-screen bg-surface text-neutral-dark flex flex-col font-sans transition-premium">
      <PremiumHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 drop-shadow-premium animate-fadein">즐겨찾기</h1>
        <div className="divider" />
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 animate-fadein">
            <div className="text-6xl mb-6">💔</div>
            <h2 className="text-2xl font-bold text-neutral-dark mb-4">즐겨찾기가 비어있습니다</h2>
            <p className="text-neutral-dark mb-8">관심 있는 복지서비스를 추가해보세요!</p>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/results')}
                className="bg-primary text-white px-6 py-3 rounded-2xl font-medium hover:bg-primary-dark transition-premium mr-4 shadow-premium"
              >
                추천 서비스 보기
              </button>
              <button
                onClick={() => navigate('/profile')}
                className="bg-neutral text-neutral-dark px-6 py-3 rounded-2xl font-medium hover:bg-neutral-dark hover:text-neutral transition-premium shadow-card"
              >
                프로필 다시 입력
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteServices.map((service) => (
              <div key={service.id} className="p-5 rounded-2xl premium-shadow bg-surface flex flex-col gap-2 animate-fadein transition-premium hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl mr-1">{getCategoryIcon(service.category)}</span>
                  <span className="font-bold text-lg text-primary">{service.title}</span>
                  <span className="ml-auto px-2 py-1 rounded-full border text-xs font-bold bg-primary-light text-primary-dark border-primary">{service.category}</span>
                </div>
                <div className="text-neutral-dark text-sm mb-2">{service.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {service.benefits.slice(0, 2).map((benefit, idx) => (
                    <span key={idx} className="px-2 py-1 rounded bg-accent-light text-accent-dark text-xs border border-accent">{benefit}</span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2">
                  <a href={service.website || '#'} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-2xl bg-primary text-white text-xs font-bold flex items-center gap-1 hover:bg-primary-dark transition-premium shadow-premium">
                    <ExternalLink className="w-4 h-4" /> 신청/상세
                  </a>
                  <button type="button" onClick={() => shareService(service)} aria-label="공유" className="px-3 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1 bg-surface text-primary border-primary hover:bg-primary-light hover:text-primary-dark transition-premium shadow-card">
                    <Share2 className="w-4 h-4" /> 공유
                  </button>
                  <button type="button" onClick={() => removeFavorite(service.id)} aria-label="즐겨찾기 삭제" className="px-3 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1 bg-surface text-error border-error hover:bg-error-light hover:text-error-dark transition-premium shadow-card">
                    <Heart className="w-4 h-4" /> 삭제
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <PremiumFooter />
    </div>
  )
}