import { useState } from 'react'
import { recommendationEngine, RecommendationResult } from '../utils/recommendationEngine'
import { Sparkles } from 'lucide-react'
import PremiumHeader from '../components/PremiumHeader'


interface ProfileData {
  age: string
  gender: string
  region: string
  income: string
  familyType: string
  interests: string[]
}

export default function ProfilePage() {
  // 폼 초기화 함수
  const handleReset = () => {
    setFormData({
      age: '',
      gender: '',
      region: '',
      income: '',
      familyType: '',
      interests: []
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setRecommendations(null);
  }
  // const navigate = useNavigate()
  const [formData, setFormData] = useState<ProfileData>({
    age: '',
    gender: '',
    region: '',
    income: '',
    familyType: '',
    interests: []
  })
  const totalSteps = 6

  // ...불필요한 함수(handleInputChange) 제거...

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }))
  }

  // 추천결과 실시간 계산
  // 추천결과 상태: 버튼 클릭 시에만 갱신/노출
  const [recommendations, setRecommendations] = useState<RecommendationResult[] | null>(null)
  // 추천결과 이력 저장 (localStorage)
  const saveHistory = (profile: ProfileData, results: RecommendationResult[]) => {
    const prev = JSON.parse(localStorage.getItem('recommendHistory') || '[]')
    const newItem = {
      timestamp: Date.now(),
      profile,
      results
    }
    localStorage.setItem('recommendHistory', JSON.stringify([newItem, ...prev]))
  }

  const handleSubmit = () => {
    // 추천결과 계산
    const result = recommendationEngine.getTopRecommendations(formData, 5)
    setRecommendations(result)
    // 이력 저장
    saveHistory(formData, result)
    // 프로필 데이터도 저장(선택)
    localStorage.setItem('userProfile', JSON.stringify(formData))
  }

  const isFormComplete = formData.age && formData.gender && formData.region && formData.income && formData.familyType && formData.interests.length > 0

  // (불필요한 단계/이동 관련 코드 제거)

  return (
    <div className="min-h-screen bg-surface text-neutral-dark font-sans transition-premium">
      {/* 프리미엄 헤더 */}
      <PremiumHeader />

      <main className="container mx-auto px-4 py-8 max-w-2xl animate-fadein" style={{paddingBottom: '120px'}}>
        {/* 진행도 및 타이틀 */}
        <div className="mb-8">
          <span className="block text-3xl md:text-4xl font-extrabold text-primary mb-2 drop-shadow-premium">맞춤복지 찾기</span>
          <div className="w-full bg-neutral rounded-full h-2 mb-2">
            <div className="bg-gradient-to-r from-primary-light to-primary h-2 rounded-full transition-premium" style={{ width: `${[formData.age, formData.gender, formData.region, formData.income, formData.familyType, formData.interests.length > 0].filter(Boolean).length / totalSteps * 100}%` }} />
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-neutral-dark">
            {['나이', '성별', '거주지역', '소득수준', '가족구성', '관심분야'].map((label, idx) => (
              <span key={label} className={`px-2 py-1 rounded-full border ${
                [formData.age, formData.gender, formData.region, formData.income, formData.familyType, formData.interests.length > 0][idx]
                  ? 'border-primary bg-primary-light text-primary font-bold'
                  : 'border-neutral bg-neutral'
              }`}>{label}</span>
            ))}
          </div>
        </div>

        {/* 수직 조건 입력 폼 */}
  <form className="space-y-8" onSubmit={e => { e.preventDefault(); handleSubmit(); }}>
          {/* 나이 */}
          <div className="pb-8 divider">
            <label className="block text-base font-bold text-gray-800 mb-2">연령대</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['20대 미만', '20대', '30대', '40대', '50대', '60대 이상'].map((age) => (
                <button
                  type="button"
                  key={age}
                  onClick={() => setFormData(prev => ({ ...prev, age }))}
                  className={`p-4 rounded-xl font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center
                    ${formData.age === age
                      ? 'border-2 border-primary-500 bg-primary-50 text-primary-700 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                  `}
                  aria-pressed={formData.age === age}
                >
                  {formData.age === age && <span className="mr-2 text-primary-500">✔️</span>}
                  {age}
                </button>
              ))}
            </div>
          </div>

          {/* 성별 */}
          <div className="py-8 divider">
            <label className="block text-base font-bold text-gray-800 mb-2">성별</label>
            <div className="grid grid-cols-3 gap-4">
              {['남성', '여성', '선택안함'].map((gender) => (
                <button
                  type="button"
                  key={gender}
                  onClick={() => setFormData(prev => ({ ...prev, gender }))}
                  className={`p-6 rounded-xl font-semibold transition-all duration-150 cursor-pointer flex items-center justify-center
                    ${formData.gender === gender
                      ? 'border-2 border-primary-500 bg-primary-50 text-primary-700 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                  `}
                  aria-pressed={formData.gender === gender}
                >
                  {formData.gender === gender && <span className="mr-2 text-primary-500">✔️</span>}
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* 거주지역 */}
          <div className="py-8 divider">
            <label className="block text-base font-bold text-gray-800 mb-2">거주지역</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
                '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'
              ].map((region) => (
                <button
                  type="button"
                  key={region}
                  onClick={() => setFormData(prev => ({ ...prev, region }))}
                  className={`p-3 rounded-lg font-semibold transition-all duration-150 text-sm cursor-pointer flex items-center justify-center
                    ${formData.region === region
                      ? 'border-2 border-primary-500 bg-primary-50 text-primary-700 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                  `}
                  aria-pressed={formData.region === region}
                >
                  {formData.region === region && <span className="mr-2 text-primary-500">✔️</span>}
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* 소득수준 */}
          <div className="py-8 divider">
            <label className="block text-base font-bold text-gray-800 mb-2">소득수준</label>
            <div className="space-y-3">
              {[
                { value: 'low', label: '기초생활수급자 또는 차상위계층', desc: '월 소득 150만원 미만' },
                { value: 'middle-low', label: '중위소득 50% 이하', desc: '월 소득 150~250만원' },
                { value: 'middle', label: '중위소득 80% 이하', desc: '월 소득 250~400만원' },
                { value: 'middle-high', label: '중위소득 100% 이하', desc: '월 소득 400~500만원' },
                { value: 'high', label: '중위소득 100% 초과', desc: '월 소득 500만원 이상' }
              ].map((income) => (
                <button
                  type="button"
                  key={income.value}
                  onClick={() => setFormData(prev => ({ ...prev, income: income.value }))}
                  className={`w-full p-4 rounded-xl font-semibold transition-all duration-150 text-left cursor-pointer flex items-center justify-start
                    ${formData.income === income.value
                      ? 'border-2 border-primary-500 bg-primary-50 text-primary-700 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                  `}
                  aria-pressed={formData.income === income.value}
                >
                  <div className="flex items-center">
                    {formData.income === income.value && <span className="mr-2 text-primary-500">✔️</span>}
                    <span className="font-medium text-gray-800">{income.label}</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{income.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 가족구성 */}
          <div className="py-8 divider">
            <label className="block text-base font-bold text-gray-800 mb-2">가족구성</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: 'single', label: '1인 가구', desc: '혼자 거주' },
                { value: 'couple', label: '부부 가구', desc: '부부만 거주' },
                { value: 'family-child', label: '자녀가 있는 가족', desc: '미성년 자녀 포함' },
                { value: 'single-parent', label: '한부모 가족', desc: '한부모 + 자녀' },
                { value: 'extended', label: '다세대 가족', desc: '3세대 이상 함께 거주' },
                { value: 'other', label: '기타', desc: '위에 해당하지 않는 경우' }
              ].map((family) => (
                <button
                  type="button"
                  key={family.value}
                  onClick={() => setFormData(prev => ({ ...prev, familyType: family.value }))}
                  className={`p-4 rounded-xl font-semibold transition-all duration-150 text-left cursor-pointer flex flex-col items-start justify-center
                    ${formData.familyType === family.value
                      ? 'border-2 border-primary-500 bg-primary-50 text-primary-700 shadow-lg scale-105'
                      : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                  `}
                  aria-pressed={formData.familyType === family.value}
                >
                  <div className="flex items-center font-medium text-gray-800">
                    {formData.familyType === family.value && <span className="mr-2 text-primary-500">✔️</span>}
                    {family.label}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{family.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 관심분야 */}
          <div className="py-8">
            <label className="block text-base font-bold text-gray-800 mb-2">관심분야</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { value: 'housing', label: '주거', icon: '🏠' },
                { value: 'employment', label: '취업/창업', icon: '💼' },
                { value: 'education', label: '교육', icon: '📚' },
                { value: 'healthcare', label: '의료/건강', icon: '🏥' },
                { value: 'childcare', label: '육아', icon: '👶' },
                { value: 'eldercare', label: '노인돌봄', icon: '👵' },
                { value: 'disability', label: '장애지원', icon: '♿' },
                { value: 'finance', label: '금융지원', icon: '💰' },
                { value: 'culture', label: '문화/여가', icon: '🎭' }
              ].map((interest) => {
                const selected = formData.interests.includes(interest.value)
                return (
                  <button
                    type="button"
                    key={interest.value}
                    onClick={() => handleInterestToggle(interest.value)}
                    className={`relative p-4 rounded-xl font-semibold transition-all duration-150 flex flex-col items-center justify-center
                      ${selected
                        ? 'border-2 border-primary-600 bg-primary-50 text-primary-700 shadow-lg scale-105'
                        : 'border border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                    `}
                    aria-pressed={selected}
                  >
                    <div className="flex items-center mb-2 text-2xl">
                      {interest.icon}
                      {selected && <span className="ml-2 text-primary-600 text-xl">✔️</span>}
                    </div>
                    <div className="text-sm font-medium">{interest.label}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 추천받기 버튼 */}
          <div className="pt-8 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={!isFormComplete}
              className={`px-8 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto transition-premium text-lg shadow-premium
                ${isFormComplete
                  ? 'bg-primary text-white hover:bg-primary-dark'
                  : 'bg-neutral text-neutral-dark border border-neutral-dark cursor-not-allowed'}
              `}
              style={{opacity: 1, textShadow: isFormComplete ? '0 1px 8px rgba(0,0,0,0.12)' : undefined}}
              aria-label="맞춤 서비스 추천받기"
            >
              <Sparkles className="w-6 h-6" /> <span className="font-extrabold">맞춤 서비스 추천받기</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2 rounded-xl font-bold text-sm bg-surface border border-neutral-dark text-neutral-dark hover:bg-neutral transition-premium shadow-card"
              aria-label="초기화"
            >
              초기화
            </button>
          </div>
        </form>

        {/* 추천결과 카드 리스트: 버튼 클릭 시에만 노출 */}
        {recommendations && (
          <div className="mt-10 animate-fadein">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> 맞춤 추천결과
            </h3>
            {recommendations.length === 0 ? (
              <div className="text-neutral-dark text-center py-8">조건에 맞는 추천 결과가 없습니다.</div>
            ) : (
              <div className="grid gap-4">
                {recommendations.map((rec: RecommendationResult) => (
                  <div key={rec.service.id} className="p-4 rounded-xl premium-shadow border border-primary bg-surface flex flex-col gap-2 animate-fadein">
                    <div className="font-bold text-primary text-base">{rec.service.title}</div>
                    <div className="text-neutral-dark text-sm">{rec.service.description}</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {rec.matchReasons.map((reason: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-primary-light text-primary text-xs border border-primary">{reason}</span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-neutral-dark">우선순위: <span className={`font-bold ${rec.priority === 'high' ? 'text-error' : rec.priority === 'medium' ? 'text-warning' : 'text-neutral-dark'}`}>{rec.priority}</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

