import { WelfareService, welfareServices } from '../data/welfareServices'

export interface UserProfile {
  age: string
  gender: string
  region: string
  income: string
  familyType: string
  interests: string[]
}

export interface RecommendationResult {
  service: WelfareService
  matchScore: number
  matchReasons: string[]
  priority: 'high' | 'medium' | 'low'
}

export class WelfareRecommendationEngine {
  private calculateMatchScore(profile: UserProfile, service: WelfareService): number {
    let score = 0
    const maxScore = 100

    // 나이 매칭 (20점)
    if (service.targetAge.includes(profile.age)) {
      score += 20
    }

    // 성별 매칭 (10점)
    if (service.targetGender.includes(profile.gender) || service.targetGender.includes('선택안함')) {
      score += 10
    }

    // 지역 매칭 (15점)
    if (service.targetRegion.includes(profile.region) || service.targetRegion.length === 17) {
      score += 15
    }

    // 소득 매칭 (25점)
    if (service.targetIncome.includes(profile.income)) {
      score += 25
    }

    // 가족구성 매칭 (15점)
    if (service.targetFamily.includes(profile.familyType)) {
      score += 15
    }

    // 관심분야 매칭 (15점)
    const interestMatch = profile.interests.some(interest => 
      service.targetInterests.includes(interest)
    )
    if (interestMatch) {
      score += 15
    }

    return Math.min(score, maxScore)
  }

  private getMatchReasons(profile: UserProfile, service: WelfareService): string[] {
    const reasons: string[] = []

    if (service.targetAge.includes(profile.age)) {
      reasons.push(`${profile.age} 연령대에 적합`)
    }

    if (service.targetIncome.includes(profile.income)) {
      reasons.push('소득수준 조건 충족')
    }

    if (service.targetFamily.includes(profile.familyType)) {
      const familyTypeLabels: { [key: string]: string } = {
        'single': '1인 가구',
        'couple': '부부 가구',
        'family-child': '자녀가 있는 가족',
        'single-parent': '한부모 가족',
        'extended': '다세대 가족',
        'other': '기타'
      }
      reasons.push(`${familyTypeLabels[profile.familyType]} 대상`)
    }

    const matchedInterests = profile.interests.filter(interest => 
      service.targetInterests.includes(interest)
    )
    if (matchedInterests.length > 0) {
      const interestLabels: { [key: string]: string } = {
        'housing': '주거',
        'employment': '취업/창업',
        'education': '교육',
        'healthcare': '의료/건강',
        'childcare': '육아',
        'eldercare': '노인돌봄',
        'disability': '장애지원',
        'finance': '금융지원',
        'culture': '문화/여가'
      }
      const matchedLabels = matchedInterests.map(interest => interestLabels[interest])
      reasons.push(`${matchedLabels.join(', ')} 분야 관심`)
    }

    if (service.targetRegion.includes(profile.region)) {
      reasons.push(`${profile.region} 지역 대상`)
    }

    if (service.isPopular) {
      reasons.push('인기 서비스')
    }

    return reasons
  }

  private getPriority(matchScore: number): 'high' | 'medium' | 'low' {
    if (matchScore >= 80) return 'high'
    if (matchScore >= 60) return 'medium'
    return 'low'
  }

  public recommend(profile: UserProfile): RecommendationResult[] {
    const results: RecommendationResult[] = []

    for (const service of welfareServices) {
      const matchScore = this.calculateMatchScore(profile, service)
      
      // 최소 매칭 점수 (40점) 이상인 서비스만 추천
      if (matchScore >= 40) {
        const matchReasons = this.getMatchReasons(profile, service)
        const priority = this.getPriority(matchScore)

        results.push({
          service,
          matchScore,
          matchReasons,
          priority
        })
      }
    }

    // 매칭 점수 순으로 정렬
    results.sort((a, b) => b.matchScore - a.matchScore)

    return results
  }

  public getRecommendationsByCategory(profile: UserProfile): { [category: string]: RecommendationResult[] } {
    const recommendations = this.recommend(profile)
    const categoryMap: { [category: string]: RecommendationResult[] } = {}

    for (const recommendation of recommendations) {
      const category = recommendation.service.category
      if (!categoryMap[category]) {
        categoryMap[category] = []
      }
      categoryMap[category].push(recommendation)
    }

    return categoryMap
  }

  public getTopRecommendations(profile: UserProfile, limit: number = 5): RecommendationResult[] {
    const recommendations = this.recommend(profile)
    return recommendations.slice(0, limit)
  }

  public getRecommendationsByPriority(profile: UserProfile, priority: 'high' | 'medium' | 'low'): RecommendationResult[] {
    const recommendations = this.recommend(profile)
    return recommendations.filter(rec => rec.priority === priority)
  }
}

// 싱글톤 패턴으로 추천 엔진 인스턴스 생성
export const recommendationEngine = new WelfareRecommendationEngine()