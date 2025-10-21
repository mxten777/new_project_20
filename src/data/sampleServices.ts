export interface WelfareService {
  id: string;
  name: string;
  description: string;
  category: string;
  eligibility: string;
  agency: string;
  benefit: string;
  applicationMethod: string;
  requiredDocuments: string[];
  contactInfo: string;
}

export const sampleServices: WelfareService[] = [
  {
    id: '1',
    name: '기초생활수급자 생활급여',
    description: '소득이 최저생계비 이하인 가구에 생활비를 지원하는 제도입니다.',
    category: '기초생활보장',
    eligibility: '기초생활수급자, 소득인정액이 생계급여 선정기준 이하',
    agency: '주민센터',
    benefit: '월 생활급여 지급 (가구원수별 차등)',
    applicationMethod: '거주지 주민센터 방문 신청',
    requiredDocuments: ['신분증', '가족관계증명서', '소득증명서', '재산증명서'],
    contactInfo: '129 (보건복지콜센터)'
  },
  {
    id: '2',
    name: '청년 월세 한시 특별지원',
    description: '청년층의 주거비 부담 완화를 위한 월세 지원 사업입니다.',
    category: '주거지원',
    eligibility: '만 19-34세, 무주택자, 소득 기준 충족',
    agency: '한국토지주택공사',
    benefit: '월 최대 20만원, 최대 12개월 지원',
    applicationMethod: '복지로 온라인 신청',
    requiredDocuments: ['신분증', '임대차계약서', '소득증명서', '통장사본'],
    contactInfo: '1600-1004'
  },
  {
    id: '3',
    name: '기초연금',
    description: '만 65세 이상 어르신의 안정적인 소득보장을 위한 연금제도입니다.',
    category: '노인복지',
    eligibility: '만 65세 이상, 소득인정액 기준 충족',
    agency: '국민연금공단',
    benefit: '월 최대 334,810원 (2024년 기준)',
    applicationMethod: '국민연금공단 지사 또는 주민센터 신청',
    requiredDocuments: ['신분증', '통장사본', '소득·재산신고서'],
    contactInfo: '1355 (국민연금공단)'
  },
  {
    id: '4',
    name: '아동수당',
    description: '만 8세 미만 모든 아동에게 지급하는 보편적 수당입니다.',
    category: '아동·청소년지원',
    eligibility: '만 8세 미만 아동 (소득무관)',
    agency: '주민센터',
    benefit: '월 10만원',
    applicationMethod: '거주지 주민센터 방문 또는 온라인 신청',
    requiredDocuments: ['신청서', '아동 및 신청인 신분증', '통장사본'],
    contactInfo: '129 (보건복지콜센터)'
  },
  {
    id: '5',
    name: '장애인연금',
    description: '중증장애인의 근로능력 상실에 대한 소득보장 및 생활안정 지원',
    category: '장애인복지',
    eligibility: '만 18세 이상 중증장애인, 소득인정액 기준 충족',
    agency: '국민연금공단',
    benefit: '기초급여 + 부가급여 (최대 월 40만원대)',
    applicationMethod: '국민연금공단 지사 또는 주민센터 신청',
    requiredDocuments: ['신분증', '장애인등록증', '소득·재산신고서', '통장사본'],
    contactInfo: '1355 (국민연금공단)'
  }
];
