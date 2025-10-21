export interface WelfareService {
  id: string
  title: string
  description: string
  category: string
  targetAge: string[]
  targetGender: string[]
  targetRegion: string[]
  targetIncome: string[]
  targetFamily: string[]
  targetInterests: string[]
  benefits: string[]
  requirements: string[]
  applicationMethod: string
  applicationPeriod: string
  contactInfo: string
  website?: string
  documents: string[]
  processingTime: string
  amount?: string
  isPopular: boolean
  tags: string[]
}

export const welfareServices: WelfareService[] = [
  // 주거 지원
  {
    id: 'housing-001',
    title: '청년 전세임대주택',
    description: '무주택 청년을 위한 전세임대주택 지원 사업입니다. 시중 전세금의 5% 이내 저금리로 대출을 지원합니다.',
    category: '주거',
    targetAge: ['20대', '30대'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산'],
    targetIncome: ['low', 'middle-low', 'middle'],
    targetFamily: ['single', 'couple'],
    targetInterests: ['housing'],
    benefits: [
      '전세보증금 지원 (호당 최대 2억원)',
      '연 1~2% 저금리 대출',
      '최대 10년간 거주 가능',
      '중도상환 수수료 면제'
    ],
    requirements: [
      '만 19~39세 무주택 청년',
      '소득이 전년도 도시근로자 가구원수별 가구당 월평균소득의 100% 이하',
      '자산이 LH 자산보유기준 이하',
      '대학생, 취업준비생, 사회초년생 등'
    ],
    applicationMethod: 'LH청약센터 온라인 신청',
    applicationPeriod: '연 2회 (상반기, 하반기)',
    contactInfo: 'LH콜센터 1600-1004',
    website: 'https://apply.lh.or.kr',
    documents: ['신분증', '소득증명서', '재학증명서', '졸업증명서', '건강보험료 납부확인서'],
    processingTime: '신청 후 약 1~2개월',
    isPopular: true,
    tags: ['청년', '전세', '임대주택', '저금리']
  },
  {
    id: 'housing-002',
    title: '신혼부부 매입임대주택',
    description: '신혼부부와 예비신혼부부를 위한 공공임대주택으로, 시세 대비 저렴한 임대료로 제공됩니다.',
    category: '주거',
    targetAge: ['20대', '30대', '40대'],
    targetGender: ['남성', '여성'],
    targetRegion: ['서울', '경기', '인천', '부산', '대구', '광주', '대전', '울산', '세종'],
    targetIncome: ['middle-low', 'middle'],
    targetFamily: ['couple', 'family-child'],
    targetInterests: ['housing'],
    benefits: [
      '시세 대비 저렴한 임대료',
      '최대 6년간 거주 가능',
      '신혼부부 우선 배정',
      '임대료 인상률 제한 (연 5% 이내)'
    ],
    requirements: [
      '혼인신고일로부터 7년 이내인 신혼부부',
      '무주택세대구성원',
      '소득이 전년도 도시근로자 가구원수별 월평균소득의 100% 이하',
      '자산이 LH 자산보유기준 이하'
    ],
    applicationMethod: 'LH청약센터 온라인 신청',
    applicationPeriod: '수시모집',
    contactInfo: 'LH콜센터 1600-1004',
    website: 'https://apply.lh.or.kr',
    documents: ['혼인관계증명서', '소득증명서', '건강보험료 납부확인서', '자산 관련 서류'],
    processingTime: '신청 후 약 1~3개월',
    isPopular: true,
    tags: ['신혼부부', '매입임대', '저렴한 임대료']
  },

  // 취업/창업 지원
  {
    id: 'employment-001',
    title: '청년구직활동지원금',
    description: '취업을 준비하는 청년에게 구직활동비를 지원하여 경제적 부담을 덜어주는 사업입니다.',
    category: '취업/창업',
    targetAge: ['20대', '30대'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low'],
    targetFamily: ['single', 'couple', 'family-child', 'single-parent'],
    targetInterests: ['employment'],
    benefits: [
      '월 50만원씩 6개월간 지원',
      '총 300만원 지급',
      '취업활동 프로그램 참여 기회',
      '멘토링 서비스 제공'
    ],
    requirements: [
      '만 18~34세 미취업 청년',
      '가구소득이 기준 중위소득 150% 이하',
      '재산이 3억원 이하 (주거용 재산 제외 시 1.8억원 이하)',
      '최근 2년 이내 고용보험 가입이력이 없는 자'
    ],
    applicationMethod: '주소지 관할 주민센터 방문 신청',
    applicationPeriod: '연중 수시',
    contactInfo: '주민센터 또는 지자체 일자리센터',
    documents: ['신분증', '소득·재산 확인서류', '취업활동계획서', '고용보험 이력확인서'],
    processingTime: '신청 후 약 2~3주',
    amount: '월 50만원 × 6개월',
    isPopular: true,
    tags: ['청년', '구직활동', '월 50만원', '취업지원']
  },
  {
    id: 'employment-002',
    title: '청년창업지원금',
    description: '창업을 준비하는 청년에게 창업자금과 멘토링을 지원하는 사업입니다.',
    category: '취업/창업',
    targetAge: ['20대', '30대'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low', 'middle'],
    targetFamily: ['single', 'couple', 'family-child'],
    targetInterests: ['employment'],
    benefits: [
      '창업자금 최대 1억원 지원',
      '3년간 멘토링 서비스',
      '창업교육 프로그램 제공',
      '네트워킹 기회 제공'
    ],
    requirements: [
      '만 18~39세 예비창업자 또는 창업 3년 이내 기업',
      '사업계획서 심사 통과',
      '창업교육 이수 (40시간 이상)',
      '기술창업 또는 혁신창업 분야'
    ],
    applicationMethod: '중소벤처기업부 온라인 신청',
    applicationPeriod: '연 1~2회 공모',
    contactInfo: '중소벤처기업부 창업지원과 02-2100-0000',
    website: 'https://www.k-startup.go.kr',
    documents: ['사업계획서', '창업교육 이수증', '기술개발계획서', '재무계획서'],
    processingTime: '신청 후 약 2~3개월',
    amount: '최대 1억원',
    isPopular: true,
    tags: ['청년창업', '창업자금', '멘토링', '기술창업']
  },

  // 교육 지원
  {
    id: 'education-001',
    title: '국가장학금 (다자녀)',
    description: '다자녀 가구의 대학생 자녀에게 등록금을 지원하는 장학금입니다.',
    category: '교육',
    targetAge: ['20대', '30대'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low', 'middle'],
    targetFamily: ['family-child'],
    targetInterests: ['education'],
    benefits: [
      '등록금 전액 지원 (소득분위에 따라 차등)',
      '생활비 지원 (월 최대 40만원)',
      '교재비 지원',
      '해외연수 기회 제공'
    ],
    requirements: [
      '3자녀 이상 다자녀 가구의 대학생',
      '국내 대학 재학생',
      '성적 기준 충족 (직전학기 평점 2.5 이상)',
      '가구소득 8분위 이하'
    ],
    applicationMethod: '한국장학재단 온라인 신청',
    applicationPeriod: '매 학기 신청 (1학기: 11~12월, 2학기: 5~6월)',
    contactInfo: '한국장학재단 콜센터 1599-2000',
    website: 'https://www.kosaf.go.kr',
    documents: ['가족관계증명서', '소득증명서', '성적증명서', '재학증명서'],
    processingTime: '신청 후 약 1개월',
    isPopular: true,
    tags: ['다자녀', '장학금', '등록금', '생활비']
  },

  // 의료/건강 지원
  {
    id: 'healthcare-001',
    title: '건강보험료 경감',
    description: '저소득층의 건강보험료 부담을 줄여주는 지원 사업입니다.',
    category: '의료/건강',
    targetAge: ['20대 미만', '20대', '30대', '40대', '50대', '60대 이상'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low'],
    targetFamily: ['single', 'couple', 'family-child', 'single-parent', 'extended'],
    targetInterests: ['healthcare'],
    benefits: [
      '건강보험료 최대 30% 경감',
      '본인부담금 경감',
      '건강검진 지원',
      '의료비 지원'
    ],
    requirements: [
      '기준 중위소득 50% 이하',
      '건강보험 가입자',
      '재산 기준 충족',
      '거주지 제한 없음'
    ],
    applicationMethod: '국민건강보험공단 지사 방문 또는 온라인 신청',
    applicationPeriod: '연중 수시',
    contactInfo: '국민건강보험공단 1577-1000',
    website: 'https://www.nhis.or.kr',
    documents: ['소득증명서', '재산증명서', '건강보험증', '통장사본'],
    processingTime: '신청 후 약 2주',
    isPopular: false,
    tags: ['건강보험료', '경감', '의료비', '저소득층']
  },

  // 육아 지원
  {
    id: 'childcare-001',
    title: '아동수당',
    description: '만 8세 미만 아동에게 매월 지급되는 수당입니다.',
    category: '육아',
    targetAge: ['20대', '30대', '40대'],
    targetGender: ['남성', '여성'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low', 'middle', 'middle-high', 'high'],
    targetFamily: ['family-child', 'single-parent'],
    targetInterests: ['childcare'],
    benefits: [
      '월 10만원 지급',
      '소득수준 관계없이 지급',
      '온라인 신청 가능',
      '자동 계좌이체'
    ],
    requirements: [
      '만 8세 미만 아동',
      '국내 거주',
      '아동의 주민등록이 정상적으로 등재',
      '소득수준 제한 없음'
    ],
    applicationMethod: '주민센터 방문 또는 온라인 신청',
    applicationPeriod: '연중 수시',
    contactInfo: '주민센터 또는 보건복지상담센터 129',
    website: 'https://www.bokjiro.go.kr',
    documents: ['아동 및 신청인 신분증', '통장사본', '가족관계증명서'],
    processingTime: '신청 후 약 1주',
    amount: '월 10만원',
    isPopular: true,
    tags: ['아동수당', '월 10만원', '육아', '전계층']
  },
  {
    id: 'childcare-002',
    title: '첫만남이용권',
    description: '2022년 이후 출생아에게 지급되는 육아지원금입니다.',
    category: '육아',
    targetAge: ['20대', '30대', '40대'],
    targetGender: ['남성', '여성'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low', 'middle', 'middle-high', 'high'],
    targetFamily: ['family-child', 'single-parent'],
    targetInterests: ['childcare'],
    benefits: [
      '출생아 1명당 200만원 지급',
      '국민행복카드로 지급',
      '육아용품 구매 가능',
      '의료비 지출 가능'
    ],
    requirements: [
      '2022년 1월 1일 이후 출생아',
      '출생신고 완료',
      '부모 중 1명이 국내 거주',
      '소득수준 제한 없음'
    ],
    applicationMethod: '주민센터 방문 또는 온라인 신청',
    applicationPeriod: '출생 후 2년 이내',
    contactInfo: '주민센터 또는 보건복지상담센터 129',
    website: 'https://www.bokjiro.go.kr',
    documents: ['출생증명서', '신분증', '통장사본', '국민행복카드 신청서'],
    processingTime: '신청 후 약 1주',
    amount: '200만원',
    isPopular: true,
    tags: ['첫만남이용권', '200만원', '신생아', '육아용품']
  },

  // 노인돌봄 지원
  {
    id: 'eldercare-001',
    title: '기초연금',
    description: '만 65세 이상 어르신의 안정적인 소득보장을 위한 연금입니다.',
    category: '노인돌봄',
    targetAge: ['60대 이상'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low'],
    targetFamily: ['single', 'couple', 'extended'],
    targetInterests: ['eldercare'],
    benefits: [
      '월 최대 334,810원 지급 (2024년 기준)',
      '매월 정기 지급',
      '물가상승률 반영',
      '의료비 지원 연계'
    ],
    requirements: [
      '만 65세 이상',
      '소득인정액이 선정기준액 이하 (단독가구 213만원, 부부가구 340.8만원)',
      '국내 거주',
      '대한민국 국적'
    ],
    applicationMethod: '주민센터 방문 또는 온라인 신청',
    applicationPeriod: '만 65세 생일이 속하는 달의 1개월 전부터 신청 가능',
    contactInfo: '국민연금공단 1355 또는 보건복지상담센터 129',
    website: 'https://www.nps.or.kr',
    documents: ['신분증', '통장사본', '소득·재산 관련 서류'],
    processingTime: '신청 후 약 1개월',
    amount: '최대 월 334,810원',
    isPopular: true,
    tags: ['기초연금', '65세 이상', '월 33만원', '노인']
  },

  // 장애지원
  {
    id: 'disability-001',
    title: '장애인연금',
    description: '중증장애인의 근로능력 상실 또는 현저한 감소로 인한 소득보장을 위한 연금입니다.',
    category: '장애지원',
    targetAge: ['20대 미만', '20대', '30대', '40대', '50대', '60대 이상'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low'],
    targetFamily: ['single', 'couple', 'family-child', 'single-parent', 'extended'],
    targetInterests: ['disability'],
    benefits: [
      '기초급여: 월 334,810원 (2024년 기준)',
      '부가급여: 월 최대 90,000원',
      '의료비 지원',
      '활동지원서비스 연계'
    ],
    requirements: [
      '만 18세 이상',
      '중증장애인 (1급, 2급, 3급 중 일부)',
      '본인과 배우자의 소득인정액이 선정기준액 이하',
      '장애인등록증 보유'
    ],
    applicationMethod: '주민센터 방문 신청',
    applicationPeriod: '연중 수시',
    contactInfo: '보건복지상담센터 129',
    website: 'https://www.bokjiro.go.kr',
    documents: ['장애인등록증', '소득·재산 관련 서류', '통장사본', '신분증'],
    processingTime: '신청 후 약 1개월',
    amount: '월 최대 424,810원',
    isPopular: false,
    tags: ['장애인연금', '중증장애인', '소득보장', '의료비']
  },

  // 금융지원
  {
    id: 'finance-001',
    title: '서민금융진흥원 소액생계대출',
    description: '긴급한 생계자금이 필요한 서민을 위한 소액대출 상품입니다.',
    category: '금융지원',
    targetAge: ['20대', '30대', '40대', '50대', '60대 이상'],
    targetGender: ['남성', '여성', '선택안함'],
    targetRegion: ['서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주'],
    targetIncome: ['low', 'middle-low'],
    targetFamily: ['single', 'couple', 'family-child', 'single-parent', 'extended'],
    targetInterests: ['finance'],
    benefits: [
      '최대 300만원 대출',
      '연 15.9% 고정금리',
      '3년 원리금균등분할상환',
      '중도상환수수료 면제'
    ],
    requirements: [
      '연소득 3,500만원 이하',
      '신용점수 하위 20%',
      '연체정보 없음',
      '타 금융기관 이용 제한자'
    ],
    applicationMethod: '서민금융통합지원센터 방문',
    applicationPeriod: '연중 수시',
    contactInfo: '서민금융통합지원센터 1397',
    website: 'https://www.kinfa.or.kr',
    documents: ['신분증', '소득증명서', '통장사본', '신용정보조회동의서'],
    processingTime: '신청 후 약 1주',
    amount: '최대 300만원',
    isPopular: false,
    tags: ['소액대출', '저금리', '생계자금', '서민금융']
  }
]