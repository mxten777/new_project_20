import { useState } from 'react'
import { recommendationEngine, RecommendationResult } from '../utils/recommendationEngine'
import { User, MapPin, Heart, Users, Briefcase, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react'
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
  // const navigate = useNavigate()
  const [formData, setFormData] = useState<ProfileData>({
    age: '',
    gender: '',
    region: '',
    income: '',
    familyType: '',
    interests: []
  })
  const [currentStep, setCurrentStep] = useState(1)
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

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1: return formData.age !== ''
      case 2: return formData.gender !== ''
      case 3: return formData.region !== ''
      case 4: return formData.income !== ''
      case 5: return formData.familyType !== ''
      case 6: return formData.interests.length > 0
      default: return false
    }
  }

  const canProceed = isStepComplete(currentStep)
  const isFormComplete = Array.from({ length: totalSteps }, (_, i) => isStepComplete(i + 1)).every(Boolean)

  // 디버깅용 로그
  console.log('현재 단계:', currentStep, '폼 데이터:', formData, 'canProceed:', canProceed)

  // 다음 단계로 이동
  const goNextStep = () => {
    if (currentStep < totalSteps && canProceed) {
      setCurrentStep(currentStep + 1)
    }
  }

  // 이전 단계로 이동
  const goPrevStep = () => {
    setCurrentStep(Math.max(1, currentStep - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* 프리미엄 헤더 */}
      <PremiumHeader />

      <div className="container mx-auto px-4 py-8 max-w-2xl animate-fade-in-up" style={{paddingBottom: '120px'}}>
        {/* 맞춤복지 찾기 타이틀 */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-primary-700">맞춤복지 찾기</span>
            <span className="text-sm font-medium text-primary-600">{currentStep}/{totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-500">
            {['나이', '성별', '거주지역', '소득수준', '가족구성', '관심분야'].map((label, idx) => (
              <span key={label} className={`px-2 py-1 rounded-full border ${
                currentStep === idx + 1
                  ? 'border-primary-500 bg-primary-50 text-primary-700 font-bold'
                  : isStepComplete(idx + 1)
                  ? 'border-primary-300 bg-primary-100 text-primary-600'
                  : 'border-gray-200 bg-gray-50'
              }`}>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Form Card (조건 입력) */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 mb-6 border border-gray-100 animate-fade-in-up" style={{position: 'relative', zIndex: 5}}>
        </div>

        {/* 추천결과 카드 리스트: 버튼 클릭 시에만 노출 */}
        {recommendations && (
          <div className="mt-10">
            <h3 className="text-lg font-bold text-primary-700 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary-500" /> 맞춤 추천결과
            </h3>
            {recommendations.length === 0 ? (
              <div className="text-gray-400 text-center py-8">조건에 맞는 추천 결과가 없습니다.</div>
            ) : (
              <div className="grid gap-4">
                {recommendations.map((rec: RecommendationResult) => (
                  <div key={rec.service.id} className="p-4 rounded-xl border-2 border-primary-100 bg-white shadow-md flex flex-col gap-2 animate-fade-in-up">
                    <div className="font-bold text-primary-700 text-base">{rec.service.title}</div>
                    <div className="text-gray-600 text-sm">{rec.service.description}</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {rec.matchReasons.map((reason: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-primary-50 text-primary-600 text-xs border border-primary-200">{reason}</span>
                      ))}
                    </div>
                    <div className="mt-2 text-xs text-gray-400">우선순위: <span className={`font-bold ${rec.priority === 'high' ? 'text-red-500' : rec.priority === 'medium' ? 'text-yellow-500' : 'text-gray-400'}`}>{rec.priority}</span></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
          {/* Step 1: 나이 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <User className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">연령대를 선택해주세요</h2>
                <p className="text-gray-600">연령대별 맞춤 복지서비스를 추천해드립니다.<br />정확한 추천을 위해 실제 연령대에 맞게 선택해 주세요.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['20대 미만', '20대', '30대', '40대', '50대', '60대 이상'].map((age) => (
                  <div
                    key={age}
                    onClick={() => setFormData(prev => ({ ...prev, age }))}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all duration-150 shadow-sm cursor-pointer flex items-center justify-center ${
                      formData.age === age
                        ? 'border-primary-500 bg-primary-50 text-primary-700 scale-105 ring-2 ring-primary-300'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={formData.age === age}
                  >
                    {formData.age === age && <span className="mr-2 text-primary-500">✔️</span>}
                    {age}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: 성별 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <User className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">성별을 선택해주세요</h2>
                <p className="text-gray-600">성별에 따라 받을 수 있는 복지서비스가 달라집니다.<br />선택하지 않아도 추천은 가능합니다.</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {['남성', '여성', '선택안함'].map((gender) => (
                  <div
                    key={gender}
                    onClick={() => setFormData(prev => ({ ...prev, gender }))}
                    className={`p-6 rounded-xl border-2 font-semibold transition-all duration-150 shadow-sm cursor-pointer flex items-center justify-center ${
                      formData.gender === gender
                        ? 'border-primary-500 bg-primary-50 text-primary-700 scale-105 ring-2 ring-primary-300'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={formData.gender === gender}
                  >
                    {formData.gender === gender && <span className="mr-2 text-primary-500">✔️</span>}
                    {gender}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: 거주지역 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">거주지역을 선택해주세요</h2>
                <p className="text-gray-600">지역별로 받을 수 있는 복지서비스가 다릅니다.<br />실제 거주지역을 선택해 주세요.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
                  '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'
                ].map((region) => (
                  <div
                    key={region}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, region: region }))
                      setTimeout(goNextStep, 300)
                    }}
                    className={`p-3 rounded-lg border-2 font-semibold transition-all duration-150 shadow-sm text-sm cursor-pointer ${
                      formData.region === region
                        ? 'border-primary-500 bg-primary-50 text-primary-700 scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    {region}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: 소득수준 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">소득수준을 선택해주세요</h2>
                <p className="text-gray-600">소득수준에 따라 받을 수 있는 복지 혜택이 달라집니다.<br />정확한 추천을 위해 실제 소득수준을 선택해 주세요.</p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'low', label: '기초생활수급자 또는 차상위계층', desc: '월 소득 150만원 미만' },
                  { value: 'middle-low', label: '중위소득 50% 이하', desc: '월 소득 150~250만원' },
                  { value: 'middle', label: '중위소득 80% 이하', desc: '월 소득 250~400만원' },
                  { value: 'middle-high', label: '중위소득 100% 이하', desc: '월 소득 400~500만원' },
                  { value: 'high', label: '중위소득 100% 초과', desc: '월 소득 500만원 이상' }
                ].map((income) => (
                  <div
                    key={income.value}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, income: income.value }))
                      setTimeout(goNextStep, 300)
                    }}
                    className={`w-full p-4 rounded-xl border-2 font-semibold transition-all duration-150 shadow-sm text-left cursor-pointer ${
                      formData.income === income.value
                        ? 'border-primary-500 bg-primary-50 scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium text-gray-800">{income.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{income.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: 가족구성 */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">가족구성을 선택해주세요</h2>
                <p className="text-gray-600">가족 형태에 따라 받을 수 있는 복지서비스가 달라집니다.<br />실제 가족구성을 선택해 주세요.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { value: 'single', label: '1인 가구', desc: '혼자 거주' },
                  { value: 'couple', label: '부부 가구', desc: '부부만 거주' },
                  { value: 'family-child', label: '자녀가 있는 가족', desc: '미성년 자녀 포함' },
                  { value: 'single-parent', label: '한부모 가족', desc: '한부모 + 자녀' },
                  { value: 'extended', label: '다세대 가족', desc: '3세대 이상 함께 거주' },
                  { value: 'other', label: '기타', desc: '위에 해당하지 않는 경우' }
                ].map((family) => (
                  <div
                    key={family.value}
                    onClick={() => {
                      setFormData(prev => ({ ...prev, familyType: family.value }))
                      setTimeout(goNextStep, 300)
                    }}
                    className={`p-4 rounded-xl border-2 font-semibold transition-all duration-150 shadow-sm text-left cursor-pointer ${
                      formData.familyType === family.value
                        ? 'border-primary-500 bg-primary-50 scale-105'
                        : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium text-gray-800">{family.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{family.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: 관심분야 */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary-500 mx-auto mb-4 animate-fade-in-up" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">관심분야를 선택해주세요</h2>
                <p className="text-gray-600">여러 개 선택 가능합니다.<br />관심 분야에 따라 더 정교한 추천이 가능합니다.</p>
              </div>
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
                      key={interest.value}
                      onClick={() => handleInterestToggle(interest.value)}
                      className={`relative p-4 rounded-xl border-2 font-semibold transition-all duration-150 shadow-sm flex flex-col items-center justify-center
                        ${selected
                          ? 'border-primary-600 bg-primary-50 text-primary-700 scale-105'
                          : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'}
                      `}
                    >
                      <div className="text-2xl mb-2">{interest.icon}</div>
                      <div className="text-sm font-medium">{interest.label}</div>
                      {selected && (
                        <span className="absolute top-2 right-2 text-primary-600 text-lg">
                          ✔️
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
              {/* 하단 버튼 항상 표시, 선택 전에는 disabled */}
              <div className="text-center mt-6">
                <button
                  onClick={handleSubmit}
                  disabled={formData.interests.length === 0}
                  className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 mx-auto transition-all
                    ${formData.interests.length > 0
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800'
                      : 'bg-gray-100 text-gray-400 border border-gray-300 cursor-not-allowed'}
                  `}
                  style={{opacity: 1}}
                  aria-label="맞춤 서비스 추천받기"
                >
                  <Sparkles className="w-5 h-5" /> 맞춤 서비스 추천받기
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons - 하단 고정(sticky) */}
  <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-primary-200 shadow-2xl z-[100] flex justify-center items-center py-6 px-4 gap-4" style={{maxWidth: '100vw', pointerEvents: 'auto', minHeight: '80px', opacity: 1, background: '#fff'}}>
    <button
      onClick={goPrevStep}
      disabled={currentStep === 1}
      className={`px-6 py-3 rounded-xl border font-bold shadow-md flex items-center gap-2 transition-all
        ${currentStep === 1
          ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
          : 'bg-white text-gray-900 border-primary-300 hover:bg-primary-50'}
      `}
      aria-label="이전 단계"
      style={{opacity: 1}}
    >
      <ArrowLeft className="w-5 h-5" /> <span style={{fontSize: '1.1em'}}>이전</span>
    </button>

    <div className="flex space-x-2">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            i + 1 === currentStep
              ? 'bg-primary-500 w-6'
              : isStepComplete(i + 1)
              ? 'bg-primary-300'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>

    {currentStep < totalSteps && (
      <button
        onClick={goNextStep}
        disabled={!canProceed}
        className={`px-6 py-3 rounded-xl border font-bold shadow-md flex items-center gap-2 transition-all
          ${canProceed
            ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
            : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'}
        `}
        style={{opacity: 1}}
        aria-label="다음 단계"
      >
        <span style={{fontSize: '1.1em'}}>다음</span> <ArrowRight className="w-5 h-5" />
        {!canProceed && <span className="text-xs ml-2">(선택 필요)</span>}
      </button>
    )}
    {currentStep === totalSteps && (
      <button
        onClick={handleSubmit}
        disabled={!isFormComplete}
        className={`px-8 py-3 rounded-xl border font-bold shadow-md flex items-center gap-2 transition-all
          ${isFormComplete
            ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
            : 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'}
        `}
        style={{opacity: 1, fontSize: '1.1em'}}
        aria-label="맞춤 서비스 추천받기"
      >
        <Sparkles className="w-5 h-5" /> 맞춤 서비스 추천받기
      </button>
    )}
  </div>
  </div>
  )
}

