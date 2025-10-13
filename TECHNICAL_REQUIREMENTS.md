# 기술적 요구사항 및 디자인 가이드

## 기술 스택 권장사항

### Frontend Framework
- **React 18+** (또는 Next.js 14+)
- **TypeScript** (타입 안정성)
- **Vite** (빠른 개발 환경)

### Styling
- **Tailwind CSS** (유틸리티 우선)
- **CSS Modules** (컴포넌트 격리)
- 또는 **Styled Components** (CSS-in-JS)

### 상태 관리 (필요시)
- **Zustand** (간단한 상태)
- 또는 **React Query** (서버 상태)

### 추가 라이브러리
- **Framer Motion** (애니메이션)
- **React Hook Form** (폼 처리)
- **React Router** (라우팅)
- **Lucide React** (아이콘)

## 디자인 시스템

### 색상 팔레트

#### Primary Colors (브랜드 컬러)
```css
--primary-50: #eff6ff
--primary-100: #dbeafe  
--primary-500: #3b82f6  /* 메인 브랜드 */
--primary-600: #2563eb
--primary-900: #1e3a8a
```

#### Secondary Colors
```css
--secondary-50: #f0fdf4
--secondary-500: #22c55e  /* 액센트 */
--secondary-600: #16a34a
```

#### Neutral Colors
```css  
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-500: #6b7280
--gray-700: #374151
--gray-900: #111827
```

### Typography

#### Font Family
```css
font-family: 'Pretendard', 'Noto Sans KR', -apple-system, sans-serif
```

#### Font Sizes (모바일 우선)
```css
/* Mobile */
--text-sm: 0.875rem    /* 14px */
--text-base: 1rem      /* 16px */  
--text-lg: 1.125rem    /* 18px */
--text-xl: 1.25rem     /* 20px */
--text-2xl: 1.5rem     /* 24px */
--text-3xl: 1.875rem   /* 30px */
--text-4xl: 2.25rem    /* 36px */

/* Desktop */
--text-sm: 1rem        /* 16px */
--text-base: 1.125rem  /* 18px */
--text-lg: 1.25rem     /* 20px */
--text-xl: 1.5rem      /* 24px */
--text-2xl: 2rem       /* 32px */  
--text-3xl: 2.5rem     /* 40px */
--text-4xl: 3rem       /* 48px */
```

### 간격 시스템
```css
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-4: 1rem     /* 16px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
--space-12: 3rem    /* 48px */
--space-16: 4rem    /* 64px */
--space-20: 5rem    /* 80px */
```

### Border Radius
```css
--radius-sm: 0.25rem   /* 4px */
--radius-md: 0.375rem  /* 6px */ 
--radius-lg: 0.5rem    /* 8px */
--radius-xl: 0.75rem   /* 12px */
--radius-2xl: 1rem     /* 16px */
--radius-full: 9999px  /* 완전 둥글게 */
```

### 그림자
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
```

## 반응형 브레이크포인트

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## 컴포넌트 설계 원칙

### 1. 원자 단위 설계
- **Atoms**: Button, Input, Typography
- **Molecules**: Card, Form Group
- **Organisms**: Header, Hero, Services
- **Templates**: Layout, Page Structure

### 2. 접근성 (a11y)
- **시맨틱 HTML** 사용
- **ARIA 속성** 적용
- **키보드 네비게이션** 지원
- **색상 대비** WCAG AA 준수 (4.5:1)

### 3. 성능 최적화
- **이미지 최적화** (WebP, lazy loading)
- **코드 스플리팅** (동적 import)
- **번들 크기 최적화**
- **Core Web Vitals** 점수 향상

## 필수 페이지 구조

### 1. 홈페이지 (Single Page)
```
Header (고정)
├── Hero Section
├── Services Section  
├── About Section
├── Campaign Section
├── Contact Section
└── Footer
```

### 2. 추가 페이지 (선택사항)
- `/booking` - 예약 페이지
- `/services/[service]` - 개별 서비스 상세
- `/about` - 병원 소개 상세
- `/contact` - 연락처 & 오시는 길

## SEO 최적화

### Meta Tags
```html
<title>박영진치과 | 후암동 프리미엄 치과 - 20년 경력 전문의</title>
<meta name="description" content="후암동 박영진치과. 20년 경력 전문의가 직접 진료하는 신뢰할 수 있는 치과. 최첨단 장비와 개인 맞춤형 치료로 건강한 미소를 선사합니다.">
<meta name="keywords" content="후암동치과, 용산구치과, 임플란트, 치아미백, 박영진치과">
```

### 구조화된 데이터
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist", 
  "name": "박영진치과",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "서울시 용산구",
    "addressRegion": "후암동"
  },
  "telephone": "02-712-5678"
}
```

## 배포 환경

### 권장 호스팅
- **Vercel** (Next.js 최적화)
- **Netlify** (React SPA)
- **AWS Amplify** (확장성)

### 도메인 예시
- `parkyoungjindental.co.kr`
- `후암동치과.kr`
- `pyjdental.com`

### SSL 인증서
- **Let's Encrypt** (무료)
- **CloudFlare** (CDN + SSL)

---

이 가이드를 바탕으로 다른 개발자나 팀이 
동일한 품질의 웹사이트를 구현할 수 있습니다.