# MVP Welfare SPA 프로젝트

## 개요
- 맞춤복지 추천, 대시보드, 즐겨찾기 등 프리미엄 UX/UI SPA
- React + Vite + Tailwind CSS 기반
- 모바일/PC 반응형, 컬러·폰트·아이콘 통일
- 추천엔진, 이력/즐겨찾기 관리, 서비스 상세/도움말 등 고도화 예정

## 주요 기능
- 맞춤복지 찾기: 프로필 입력 후 맞춤 복지서비스 추천
- 대시보드: 추천 결과, 이력, 즐겨찾기 통합 관리
- 즐겨찾기: 관심 서비스 저장 및 관리
- 프리미엄 내비게이션/푸터: SPA 전체 통일 디자인
- 추천엔진 스위칭 UI(예정)
- 서비스 상세/도움말/FAQ(예정)

## 기술 스택
- React (SPA, hooks, router)
- Vite (개발 서버, 빌드)
- Tailwind CSS (유틸리티, 반응형)
- Lucide-react (아이콘)
- TypeScript
- Vercel (배포)

## 폴더 구조
```
src/
  components/   # 공통 UI 컴포넌트
  pages/        # 주요 SPA 페이지
  data/         # 복지 서비스 데이터
  utils/        # 추천엔진 등 유틸리티
  styles/       # 폰트/테마 등 스타일
```

## 주요 파일
- `src/components/PremiumHeader.tsx` : 프리미엄 내비게이션
- `src/components/PremiumFooter.tsx` : 프리미엄 푸터
- `src/components/PremiumRecommendationCard.tsx` : 추천 결과 카드
- `src/pages/ProfilePage.tsx` : 맞춤복지 찾기(프로필 입력)
- `src/pages/ResultsPage.tsx` : 대시보드(추천 결과)
- `src/pages/FavoritesPage.tsx` : 즐겨찾기
- `src/data/welfareServices.ts` : 복지 서비스 데이터
- `src/utils/recommendationEngine.ts` : 추천엔진

## 배포
- Vercel 프로덕션: https://mvp-project-20-54ghfgoec-dongyeol-jungs-projects.vercel.app

## 향후 고도화 계획
- 서비스 상세/도움말/FAQ 페이지 추가
- 추천엔진 스위칭 UI 및 안내
- 전체 컬러/폰트/애니메이션 통일, 다크모드
- 대시보드 이력/통계/관리 기능 강화

## 커밋/배포
- 1차 리팩토링: SPA 프리미엄 UI/UX, 대시보드 구조, 오류 수정
- Vercel 프로덕션 배포 완료

---
문의/기여: mxten777 (GitHub)
