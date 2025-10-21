import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, ExternalLink, Clock, DollarSign, Star, User, Sparkles } from 'lucide-react'
import PremiumHeader from '../components/PremiumHeader'
import PremiumFooter from '../components/PremiumFooter'
import { recommendationEngine, RecommendationResult, UserProfile } from '../utils/recommendationEngine'

export default function ResultsPage() {
  const [notifications, setNotifications] = useState<any[]>([])
  const navigate = useNavigate()
  const [recommendations, setRecommendations] = useState<RecommendationResult[]>([])
  const [engineType, setEngineType] = useState<string>('ai')
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [favorites, setFavorites] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [recentHistory, setRecentHistory] = useState<any[]>([])
  const [recentApplications, setRecentApplications] = useState<any[]>([])

  useEffect(() => {
    // 최근 알림/공지 불러오기
    const savedNotifications = localStorage.getItem('notifications')
    if (savedNotifications) {
      setNotifications(JSON.parse(savedNotifications))
    }
    // localStorage에서 사용자 프로필 불러오기
    const savedProfile = localStorage.getItem('userProfile')
    if (!savedProfile) {
      setUserProfile(null)
      setRecommendations([])
    } else {
      const profile = JSON.parse(savedProfile) as UserProfile
      setUserProfile(profile)
      // 추천엔진 타입 불러오기
      const savedEngineType = localStorage.getItem('engineType') || 'ai'
      setEngineType(savedEngineType)
      // 추천 결과 생성 (엔진 타입별 분기)
      let results: RecommendationResult[] = []
      if (savedEngineType === 'ai') {
        results = recommendationEngine.recommend(profile)
      } else if (savedEngineType === 'rule') {
        // 룰 기반 추천: 매칭 점수 60점 이상만 추천
        results = recommendationEngine.recommend(profile).filter(r => r.matchScore >= 60)
      } else if (savedEngineType === 'hybrid') {
        // 혼합: 상위 3개 AI + 2개 룰 기반(중복 제외)
        const aiResults = recommendationEngine.recommend(profile).slice(0, 3)
        const ruleResults = recommendationEngine.recommend(profile).filter(r => r.matchScore >= 60 && !aiResults.some(a => a.service.id === r.service.id)).slice(0, 2)
        results = [...aiResults, ...ruleResults]
      }
      setRecommendations(results)
    }
    // 즐겨찾기 불러오기
    const savedFavorites = localStorage.getItem('favorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
    // 최근 추천/조회/히스토리 불러오기
    const savedHistory = localStorage.getItem('recentHistory')
    if (savedHistory) {
      setRecentHistory(JSON.parse(savedHistory))
    }
    // 최근 신청 현황 불러오기
    const savedApplications = localStorage.getItem('recentApplications')
    if (savedApplications) {
      setRecentApplications(JSON.parse(savedApplications))
    }
    setLoading(false)
  }, [navigate])



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
      <div className="min-h-screen bg-surface text-neutral-dark flex items-center justify-center font-sans transition-premium">
        <div className="text-center animate-fadein">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-dark">맞춤 복지서비스를 분석 중입니다...</p>
        </div>
      </div>
    )
  }

  // ...existing code...

  return (
    <div className="min-h-screen bg-surface text-neutral-dark flex flex-col font-sans transition-premium">
      <PremiumHeader />
      <main className="container mx-auto px-4 py-8 flex-1 w-full">
        {/* 프리미엄 대시보드 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
          {/* 내 프로필 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-primary-light">
            <div className="flex items-center gap-2 mb-2">
              <User className="w-7 h-7 text-primary-600" />
              <span className="font-bold text-lg text-primary-700">내 프로필</span>
            </div>
            {userProfile ? (
              <ul className="text-sm text-gray-700 space-y-1">
                <li>연령: <span className="font-semibold">{userProfile.age}</span></li>
                <li>성별: <span className="font-semibold">{userProfile.gender}</span></li>
                <li>지역: <span className="font-semibold">{userProfile.region}</span></li>
                <li>소득: <span className="font-semibold">{userProfile.income}</span></li>
                <li>가족: <span className="font-semibold">{userProfile.familyType}</span></li>
                <li>관심: <span className="font-semibold">{userProfile.interests.join(', ')}</span></li>
              </ul>
            ) : (
              <div className="text-gray-400">프로필 정보 없음</div>
            )}
          </div>
          {/* 추천엔진 스위치 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-primary-light">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-7 h-7 text-primary-600" />
              <span className="font-bold text-lg text-primary-700">추천엔진</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">현재 엔진: <span className="font-semibold">
              {engineType === 'ai' ? 'AI 기반' : engineType === 'rule' ? '룰 기반' : '혼합'}
            </span></div>
            <div className="flex gap-2">
              <button
                className={`px-3 py-2 rounded-lg text-sm font-bold shadow transition ${engineType === 'ai' ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border border-primary-300 hover:bg-primary-50'}`}
                onClick={() => {
                  setEngineType('ai');
                  localStorage.setItem('engineType', 'ai');
                  if (userProfile) {
                    setRecommendations(recommendationEngine.recommend(userProfile));
                  }
                }}
              >AI 기반</button>
              <button
                className={`px-3 py-2 rounded-lg text-sm font-bold shadow transition ${engineType === 'rule' ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border border-primary-300 hover:bg-primary-50'}`}
                onClick={() => {
                  setEngineType('rule');
                  localStorage.setItem('engineType', 'rule');
                  if (userProfile) {
                    setRecommendations(recommendationEngine.recommend(userProfile).filter(r => r.matchScore >= 60));
                  }
                }}
              >룰 기반</button>
              <button
                className={`px-3 py-2 rounded-lg text-sm font-bold shadow transition ${engineType === 'hybrid' ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border border-primary-300 hover:bg-primary-50'}`}
                onClick={() => {
                  setEngineType('hybrid');
                  localStorage.setItem('engineType', 'hybrid');
                  if (userProfile) {
                    const aiResults = recommendationEngine.recommend(userProfile).slice(0, 3);
                    const ruleResults = recommendationEngine.recommend(userProfile).filter(r => r.matchScore >= 60 && !aiResults.some(a => a.service.id === r.service.id)).slice(0, 2);
                    setRecommendations([...aiResults, ...ruleResults]);
                  }
                }}
              >혼합</button>
            </div>
          </div>
          {/* 즐겨찾기 요약 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-primary-light">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-7 h-7 text-pink-500" />
              <span className="font-bold text-lg text-pink-700">즐겨찾기</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">총 <span className="font-semibold">{favorites.length}</span>개</div>
            <button className="px-4 py-2 rounded-lg bg-pink-100 text-pink-700 font-bold text-sm shadow hover:bg-pink-200 transition" onClick={()=>window.location.href='/favorites'}>전체보기</button>
          </div>
          {/* 맞춤 알림/공지 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-primary-light">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-7 h-7 text-yellow-500" />
              <span className="font-bold text-lg text-yellow-700">맞춤 알림</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">복지 서비스 신청기간, 신규 서비스, 업데이트 안내 등</div>
            <ul className="text-xs text-gray-600 space-y-1 max-h-16 overflow-y-auto">
              {notifications.slice(0, 3).map((item, idx) => (
                <li key={idx}>{item.title || item.message}</li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700 font-bold text-sm shadow hover:bg-yellow-200 transition" onClick={()=>window.location.href='/notifications'}>더보기</button>
          </div>
          {/* 최근 추천/조회/히스토리 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-primary-light">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-7 h-7 text-blue-500" />
              <span className="font-bold text-lg text-blue-700">최근 추천/조회</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">최근 추천: <span className="font-semibold">{recentHistory.length}</span>건</div>
            <ul className="text-xs text-gray-600 space-y-1 max-h-16 overflow-y-auto">
              {recentHistory.slice(0, 3).map((item, idx) => (
                <li key={idx}>{item.title || item.serviceTitle}</li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-bold text-sm shadow hover:bg-blue-200 transition" onClick={()=>window.location.href='/history'}>전체보기</button>
          </div>
          {/* 신청 현황 카드 */}
          <div className="bg-surface rounded-2xl premium-shadow p-6 flex flex-col items-start gap-2 border border-success-light">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-7 h-7 text-success-600" />
              <span className="font-bold text-lg text-success-700">신청 현황</span>
            </div>
            <div className="text-sm text-gray-700 mb-2">최근 신청: <span className="font-semibold">{recentApplications.length}</span>건</div>
            <ul className="text-xs text-gray-600 space-y-1 max-h-16 overflow-y-auto">
              {recentApplications.slice(0, 3).map((item, idx) => (
                <li key={idx}>{item.title || item.serviceTitle}</li>
              ))}
            </ul>
            <button className="px-4 py-2 rounded-lg bg-success-100 text-success-700 font-bold text-sm shadow hover:bg-success-200 transition" onClick={()=>window.location.href='/applications'}>전체보기</button>
          </div>
        </div>

        {/* 통계/추천 결과 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface rounded-xl card-shadow p-6">
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
          <div className="bg-surface rounded-xl card-shadow p-6">
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
          <div className="bg-surface rounded-xl card-shadow p-6">
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
  <div className="bg-surface rounded-xl card-shadow p-6 mb-8">
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
          {filteredRecommendations.length > 0 ? (
            filteredRecommendations.map((recommendation) => {
              const { service, priority } = recommendation;
              const priorityBadge = getPriorityBadge(priority);
              return (
                <div key={service.id} className="p-5 rounded-2xl premium-shadow bg-surface flex flex-col gap-2 animate-fadein transition-premium hover:scale-[1.02] border border-primary-light">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl mr-1">{getCategoryIcon(service.category)}</span>
                    <span className="font-bold text-lg text-primary">{service.title}</span>
                    <span className="ml-auto px-2 py-1 rounded-full border text-xs font-bold bg-primary-light text-primary-dark border-primary">{service.category}</span>
                    <span className={`ml-2 px-2 py-1 rounded-full border text-xs font-bold ${priorityBadge.className}`}>{priorityBadge.label}</span>
                  </div>
                  <div className="text-neutral-dark text-sm mb-2">{service.description}</div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {service.benefits.slice(0, 2).map((benefit: string, idx: number) => (
                      <span key={idx} className="px-2 py-1 rounded bg-accent-light text-accent-dark text-xs border border-accent">{benefit}</span>
                    ))}
                  </div>
                  {service.amount && (
                    <div className="text-sm text-primary font-semibold mb-1">지원금액: <span>{service.amount}</span></div>
                  )}
                  {service.processingTime && (
                    <div className="text-xs text-neutral-dark mb-1">처리기간: <span>{service.processingTime}</span></div>
                  )}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-neutral-dark mb-2">신청 요건:</p>
                    <ul className="space-y-1">
                      {service.requirements.slice(0, 2).map((requirement: string, idx: number) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-neutral-dark">
                          <span className="w-1.5 h-1.5 bg-neutral-dark rounded-full"></span>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <a href={service.website || '#'} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-2xl bg-primary text-white text-xs font-bold flex items-center gap-1 hover:bg-primary-dark transition-premium shadow-premium">
                      <ExternalLink className="w-4 h-4" /> 신청/상세
                    </a>
                    <button type="button" className="px-3 py-2 rounded-2xl border text-xs font-bold flex items-center gap-1 bg-surface text-primary border-primary hover:bg-primary-light hover:text-primary-dark transition-premium shadow-card">
                      자세히 보기
                    </button>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 animate-fadein">
              <div className="text-6xl mb-4">😔</div>
              <h3 className="text-xl font-semibold text-neutral-dark mb-2">추천 결과가 없습니다</h3>
              <p className="text-neutral-dark mb-4">입력하신 조건에 맞는 복지서비스를 찾을 수 없습니다. 프로필을 다시 확인해보세요.</p>
              <button
                onClick={() => navigate('/profile')}
                className="bg-primary text-white px-6 py-3 rounded-2xl font-medium hover:bg-primary-dark transition-premium shadow-premium"
              >
                프로필 다시 입력하기
              </button>
            </div>
          )}
        </div>
      </main>
      <PremiumFooter />
    </div>
  )
}
