# MVP 복지 서비스 추천 앱 프로젝트 요약

## 프로젝트 개요
- **이름:** new_project_20 (Vercel: mvp-project-20)
- **설명:** 사용자 프로필(연령, 가구 유형, 소득, 지역) 기반 맞춤형 복지 서비스 추천 SPA
- **주요 목표:** 최고의 UI/UX, 모바일/PC 완벽 대응, MVP 기능 우선 구현, 추후 백엔드 연동

## 기술 스택
- **Frontend:** React (Vite, TypeScript)
- **Styling:** Tailwind CSS (커스텀 폰트, 반응형, 애니메이션)
- **상태관리:** useState, LocalStorage (MVP 단계)
- **라우팅:** react-router-dom
- **컴포넌트:** Header, Footer, Layout, HeroSection, UserProfileForm, ServiceDetailModal, MobileNav, Toast 등
- **폰트:** Noto Sans KR, Inter (Google Fonts)
- **배포:** Vercel (Framework Preset: Vite)
- **버전관리:** GitHub (mxten777/new_project_20)

## 주요 기능
- 프로필 입력 및 수정 (이름, 나이, 가구 유형, 소득, 지역)
- 맞춤형 복지 서비스 추천 카드 리스트
- 서비스 상세 모달
- 즐겨찾기(로컬 저장)
- 모바일/PC 네비게이션, 햄버거 메뉴
- 세련된 폰트, 은은한 배경, 카드/폼/모달 UI/UX 고도화
- Toast 알림

## UI/UX 특징
- Tailwind 기반 반응형 레이아웃, 카드, 폼, 모달, 네비게이션
- 모바일/PC 환경별 네비게이션 자동 전환
- 카드 잘림, 오버플로우, 배경색 등 세부 UI 버그 반복 개선
- 글로벌 폰트 적용, Google Fonts 연동

## 배포 및 운영
- Vercel에 Vite 프로젝트로 연결, production 배포 성공
- GitHub Actions 등 CI는 미구현(수동 배포)

## 앞으로 개선/추가할 일
1. **백엔드 연동**
   - Firebase, Supabase, 혹은 자체 Node.js/Express 서버 연동
   - 사용자 인증, DB 기반 즐겨찾기/추천 서비스 관리
2. **실제 복지 서비스 데이터 연동**
   - 공공 API, 크롤링, 또는 수동 데이터 입력
3. **고급 추천 알고리즘**
   - 조건별 필터링, 점수화, AI 추천 등
4. **테스트/품질**
   - 단위/통합 테스트, E2E 테스트 도입
   - 타입/런타임 에러 방지 및 CI/CD 자동화
5. **접근성/국제화**
   - a11y, 다국어(i18n) 지원
6. **UI/UX 추가 고도화**
   - 다크모드, 애니메이션, 사용자 피드백 반영
7. **PWA/모바일 앱화**
   - PWA 지원, 앱 아이콘, 오프라인 모드 등
8. **운영/모니터링**
   - Sentry, Google Analytics, Vercel Analytics 등 연동

---

> 이 마크다운 파일은 프로젝트의 전체 구조, 기술, 기능, 개선 방향을 한눈에 파악할 수 있도록 정리한 문서입니다. 앞으로의 개선/확장 작업 시 참고용으로 활용하세요.
