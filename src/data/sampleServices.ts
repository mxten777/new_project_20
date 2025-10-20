export type WelfareService = {
  id: string;
  title: string;
  description: string;
  category: string;
  eligibility: string;
  link: string;
  region: string;
};

export const sampleServices: WelfareService[] = [
  {
    id: '1',
    title: '청년 주거 지원금',
    description: '청년 1인가구 대상 월세 지원',
    category: '주거',
    eligibility: '만 19~34세, 1인가구, 저소득',
    link: 'https://www.bokjiro.go.kr/',
    region: '서울',
  },
  {
    id: '2',
    title: '노인 기초연금',
    description: '만 65세 이상 어르신 대상 기초연금 지급',
    category: '연금',
    eligibility: '만 65세 이상, 소득 하위 70%',
    link: 'https://www.bokjiro.go.kr/',
    region: '전국',
  },
  {
    id: '3',
    title: '한부모가정 양육비 지원',
    description: '한부모가정 자녀 양육비 지원',
    category: '가족',
    eligibility: '한부모가정, 소득 기준 충족',
    link: 'https://www.bokjiro.go.kr/',
    region: '부산',
  },
  {
    id: '4',
    title: '저소득층 에너지 바우처',
    description: '저소득 가구 겨울철 에너지 비용 지원',
    category: '생활',
    eligibility: '기초생활수급자, 차상위계층',
    link: 'https://www.bokjiro.go.kr/',
    region: '전국',
  },
];
