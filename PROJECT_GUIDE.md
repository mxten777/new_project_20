# 복지 서비스 추천 SPA 프로젝트 가이드

## 프로젝트 개요
사용자의 개인 정보(연령, 가구 유형, 소득 수준, 지역 등)를 입력받아 맞춤형 복지 서비스를 추천하는 Single Page Application을 개발합니다.

## 기술 스택
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: useState + localStorage
- **Build Tool**: Vite
- **Deployment**: Vercel

## 프로젝트 구조
```
src/
├── components/           # 재사용 가능한 컴포넌트
│   ├── Header.tsx       # 네비게이션 헤더
│   ├── Footer.tsx       # 푸터
│   ├── HeroSection.tsx  # 메인 히어로 섹션
│   ├── ProfileForm.tsx  # 사용자 프로필 입력 폼
│   └── ServiceCard.tsx  # 복지 서비스 카드
├── pages/               # 페이지 컴포넌트
│   ├── HomePage.tsx     # 메인 페이지
│   ├── ProfilePage.tsx  # 프로필 입력 페이지
│   ├── ResultsPage.tsx  # 추천 결과 페이지
│   └── FavoritesPage.tsx # 즐겨찾기 페이지
├── data/                # 데이터 및 타입
│   ├── services.ts      # 복지 서비스 데이터
│   └── types.ts         # TypeScript 타입 정의
├── utils/               # 유틸리티 함수
│   ├── storage.ts       # localStorage 관리
│   └── matching.ts      # 복지 서비스 매칭 로직
├── App.tsx              # 메인 앱 컴포넌트
├── main.tsx             # 엔트리 포인트
└── index.css            # 글로벌 스타일
```

## 주요 기능
1. **메인 페이지**: 서비스 소개 및 시작하기 버튼
2. **프로필 입력**: 연령, 가구 유형, 소득 수준, 거주 지역 입력
3. **추천 결과**: 입력된 정보 기반 맞춤형 복지 서비스 목록
4. **즐겨찾기**: 관심 있는 서비스 저장 기능
5. **서비스 상세**: 각 복지 서비스의 상세 정보 모달

## 디자인 테마
- **Primary Color**: Blue (#3B82F6)
- **Background**: Light Gray (#F9FAFB)
- **Text**: Dark Gray (#1F2937)
- **Cards**: White with subtle shadow
- **Typography**: Inter 폰트

## 개발 순서
1. **기본 구조 설정**: App.tsx, 라우팅, 기본 스타일
2. **메인 페이지**: HeroSection, 서비스 소개
3. **프로필 폼**: 사용자 정보 입력 컴포넌트
4. **데이터 구조**: 복지 서비스 데이터 및 매칭 로직
5. **결과 페이지**: 추천 서비스 목록 및 카드
6. **즐겨찾기**: localStorage 기반 즐겨찾기 기능
7. **반응형 디자인**: 모바일/데스크톱 최적화
8. **애니메이션**: Framer Motion으로 부드러운 전환 효과

## 사용자 플로우
1. 메인 페이지 진입 → 서비스 소개 확인
2. "복지 찾기" 버튼 클릭 → 프로필 입력 페이지
3. 개인 정보 입력 → 추천 결과 페이지 이동
4. 추천 서비스 목록 확인 → 관심 서비스 즐겨찾기
5. 서비스 카드 클릭 → 상세 정보 모달 확인

## 배포 준비
- package.json에서 프로젝트명 설정
- index.html에서 메타 정보 설정
- 빌드 테스트 후 Vercel 배포
- 도메인 연결 및 최종 테스트

---

## 시작 프롬프트

**"React 19 + TypeScript + Vite + Tailwind CSS로 복지 서비스 추천 SPA를 개발해주세요.**

**주요 요구사항:**
- 사용자가 연령, 가구유형, 소득수준, 지역을 입력하면 맞춤형 복지 서비스를 추천
- 깔끔한 UI/UX with 파란색 테마
- React Router로 페이지 라우팅 (메인/프로필입력/추천결과/즐겨찾기)
- localStorage로 사용자 데이터 및 즐겨찾기 관리
- Framer Motion으로 부드러운 애니메이션
- 완전 반응형 디자인
- Vercel 배포 준비된 상태

**개발 순서: App.tsx 기본 구조 → 메인 페이지 → 프로필 폼 → 추천 로직 → 결과 화면 → 즐겨찾기 → 반응형 → 배포**

**첫 번째로 기본 App.tsx와 라우팅 구조부터 만들어주세요."**