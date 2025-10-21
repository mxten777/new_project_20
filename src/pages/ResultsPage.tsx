import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, ExternalLink, Clock, DollarSign, Star, Share2 } from 'lucide-react'
import PremiumHeader from '../components/PremiumHeader'
import PremiumFooter from '../components/PremiumFooter'
import { recommendationEngine, RecommendationResult, UserProfile } from '../utils/recommendationEngine'

export default function ResultsPage() {
  const navigate = useNavigate()
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // localStorage에서 사용자 프로필 불러오기
    const savedProfile = localStorage.getItem('userProfile')
    if (!savedProfile) {
      navigate('/profile')
      return
    }
    const profile = JSON.parse(savedProfile) as UserProfile
    setUserProfile(profile)
    // 추천 결과 생성
    const results = recommendationEngine.recommend(profile)
    setRecommendations(results)
    // 즐겨찾기 불러오기
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
    setLoading(false)
  }, [navigate])

  const toggleFavorite = (serviceId: string) => {
    const newFavorites = favorites.includes(serviceId)
      ? favorites.filter(id => id !== serviceId)
      : [...favorites, serviceId]
    
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
      // 클립보드에 복사
      navigator.clipboard.writeText(`${service.title}: ${service.description}`)
      alert('링크가 클립보드에 복사되었습니다!')
    }
  }

  const getCategories = () => {
    const categories = ['all', ...new Set(recommendations.map(rec => rec.service.category))]
    return categories
  }

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(rec => rec.service.category === selectedCategory)

  const getPriorityBadge = (priority: string) => {
    const badges = {
      high: 'bg-red-100 text-red-800 border-red-200',
      medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      low: 'bg-gray-100 text-gray-800 border-gray-200'
    }
    const labels = {
      high: '높음',
      medium: '보통',
      low: '낮음'
    }
    return { className: badges[priority as keyof typeof badges], label: labels[priority as keyof typeof labels] }
  }

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">맞춤 복지서비스를 분석 중입니다...</p>
        </div>
      </div>
    )
  }

  if (!userProfile || recommendations.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">😔</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">해당하는 복지서비스가 없습니다</h2>
          <p className="text-gray-600 mb-6">입력하신 조건에 맞는 복지서비스를 찾을 수 없습니다. 프로필을 다시 확인해보세요.</p>
          <button
            onClick={() => navigate('/profile')}
            className="bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
          >
            프로필 다시 입력하기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex flex-col">
      {/* PremiumHeader - SPA 프리미엄 네비게이션 */}
      <PremiumHeader />

      <div className="container mx-auto px-4 py-8 flex-1 w-full">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">높은 적합도</p>
                <p className="text-2xl font-bold text-red-600">
                  {recommendations.filter(r => r.priority === 'high').length}개
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <Star className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">중간 적합도</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {recommendations.filter(r => r.priority === 'medium').length}개
                </p>
              </div>
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">즐겨찾기</p>
                <p className="text-2xl font-bold text-primary-600">{favorites.length}개</p>
              </div>
              <div className="p-3 bg-primary-100 rounded-lg">
                <Heart className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">카테고리별 필터</h3>
          <div className="flex flex-wrap gap-2">
            {getCategories().map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                }`}
              >
                {category === 'all' ? '전체' : `${getCategoryIcon(category)} ${category}`}
              </button>
            ))}
          </div>
        </div>

        {/* Recommendations List */}
        <div className="space-y-6">
          {filteredRecommendations.map((recommendation) => {
            const { service, matchScore, matchReasons, priority } = recommendation
            const priorityBadge = getPriorityBadge(priority)
            const isFavorite = favorites.includes(service.id)

            return (
              <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                        <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityBadge.className}`}>
                          {priorityBadge.label}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{service.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <span>📊</span>
                          <span>적합도 {matchScore}%</span>
                        </span>
                        {service.amount && (
                          <span className="flex items-center space-x-1">
                            <DollarSign className="w-4 h-4" />
                            <span>{service.amount}</span>
                          </span>
                        )}
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.processingTime}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => toggleFavorite(service.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isFavorite
                            ? 'bg-red-100 text-red-600 hover:bg-red-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                      </button>
                      <button
                        onClick={() => shareService(service)}
                        className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Match Reasons */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">추천 이유:</p>
                    <div className="flex flex-wrap gap-2">
                      {matchReasons.map((reason, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                        >
                          {reason}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">주요 혜택:</p>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">신청 요건:</p>
                    <ul className="space-y-1">
                      {service.requirements.slice(0, 2).map((requirement, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                      신청하기
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      자세히 보기
                    </button>
                    {service.website && (
                      <button
                        onClick={() => window.open(service.website, '_blank')}
                        className="p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* No Results */}
        {filteredRecommendations.length === 0 && selectedCategory !== 'all' && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">해당 카테고리에 추천 서비스가 없습니다</h3>
            <p className="text-gray-600">다른 카테고리를 선택해보세요.</p>
          </div>
        )}
      </div>
      <PremiumFooter />
    </div>
  )
}
