# 🎬 Chainsaw Man: Reze Arc

<div align="center">

[![Chainsaw Man](https://img.shields.io/badge/Chainsaw%20Man-Reze%20Arc-8b5cf6?style=for-the-badge)](https://irenevantar.github.io/webprogramming-project/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.18.2-ff69b4?style=for-the-badge)](https://www.framer.com/motion/)

---

## 🌐 **[🔗 Live Demo](https://irenevantar.github.io/webprogramming-project/)**

*체인소 맨 레제편 극장판 티저를 테마로 한 시네마틱 인터랙티브 웹사이트*

</div>

---

## ✨ 주요 기능

### 🎥 YouTube 배경 영상
- 메인 화면에 자동재생되는 극장판 티저 영상
- 무한 반복, 음소거 처리
- 원본 밝기 유지 (오버레이 제거)
- 16:9 비율로 모든 화면 크기 대응

### 🧭 스크롤 기반 네비게이션
- 고정형 사이드 네비게이션 (좌측)
- 스크롤 위치에 따른 활성 섹션 자동 감지
- 시안(Cyan) 그라데이션 인디케이터
- 부드러운 스크롤 이동

### 🎭 캐릭터 섹션
- **4명의 주요 캐릭터** 소개: 덴지, 레제, 마키마, 아키
- **GSAP ScrollTrigger** 기반 3D 회전 애니메이션
- **양방향 스크롤 애니메이션** (나타남/사라짐)
- **ScrollReveal 텍스트 효과**: 단어별 블러 → 선명 애니메이션
- 400x550px 캐릭터 이미지 (contain 모드)

### 📖 시놉시스 섹션
- 나무위키 기반 극장판 줄거리
- 영화감 있는 세리프 폰트 (Georgia/Times New Roman)
- 반응형 폰트 크기 및 줄 간격

### 🖼️ 포스터 갤러리
- **3개의 공식 포스터** 전시
- 2:3 비율 (극장판 포스터 비율)
- **클릭-투-인라지**: 포스터 클릭 시 모달로 확대
- Framer Motion Spring 애니메이션

### 🎨 시각 디자인
- **다크 테마**: 순수 블랙 배경 (#000000)
- **Purple & Cyan 컬러 스킴**: 레제편 분위기 반영
- **커스텀 로딩 화면**: 2.5초 페이드 인/아웃
- **반응형 디자인**: 모바일부터 4K까지 대응

---

## 🛠️ 기술 스택

### Core Technologies
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18.3.1 | UI 프레임워크 |
| **Vite** | 5.4.21 | 빌드 도구 & 개발 서버 |
| **GSAP** | 3.13.0 | 프로페셔널 애니메이션 라이브러리 |
| **Framer Motion** | 11.18.2 | React 애니메이션 라이브러리 |

### Animation Plugins
- **GSAP ScrollTrigger**: 스크롤 기반 3D 애니메이션
- **Custom ScrollReveal**: 단어별 블러/투명도 애니메이션

### Deployment & CI/CD
- **GitHub Pages**: 호스팅
- **GitHub Actions**: 자동 배포 워크플로우
- **pnpm**: 패키지 관리자 (10.19.0)

### External Resources
- **YouTube Iframe API**: 배경 비디오 임베드
- **Google Fonts**: Inter, Space Mono, Georgia 폰트

---

## 🚀 로컬 개발 가이드

### 사전 요구사항
- **Node.js**: v22.21.0 이상
- **pnpm**: v10.19.0 이상

### 1️⃣ 저장소 클론

```bash
git clone https://github.com/irenevantar/webprogramming-project.git
cd webprogramming-project
```

### 2️⃣ 의존성 설치

```bash
pnpm install
```

### 3️⃣ 개발 서버 실행

```bash
pnpm dev
```

개발 서버가 **http://localhost:3000**에서 실행됩니다.

### 4️⃣ 프로덕션 빌드

```bash
pnpm build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 5️⃣ 빌드 미리보기

```bash
pnpm preview
```

---

## 📁 프로젝트 구조

```
webprogramming/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions 배포 워크플로우
├── public/
│   └── assets/
│       └── images/              # 캐릭터 & 포스터 이미지
│           ├── denji.png
│           ├── reze.png
│           ├── makima.png
│           ├── aki.png
│           ├── reze-poster.jpg
│           ├── reze-poster-2.jpg
│           └── reze-poster-3.png
├── src/
│   ├── components/
│   │   ├── Hero.jsx             # YouTube 배경 영상 섹션
│   │   ├── SideNav.jsx          # 고정 사이드 네비게이션
│   │   ├── Characters.jsx       # 캐릭터 소개 (GSAP 애니메이션)
│   │   ├── ScrollReveal.jsx     # 커스텀 텍스트 애니메이션 컴포넌트
│   │   ├── Story.jsx            # 시놉시스 섹션
│   │   ├── Gallery.jsx          # 포스터 갤러리 (클릭-투-인라지)
│   │   ├── Footer.jsx           # 푸터
│   │   └── Loader.jsx           # 로딩 스크린
│   ├── App.jsx                  # 메인 앱 컴포넌트
│   ├── main.jsx                 # React 진입점
│   └── index.css                # 글로벌 스타일
├── vite.config.js               # Vite 설정 (GitHub Pages base path)
├── package.json                 # 프로젝트 메타데이터 & 스크립트
└── README.md                    # 이 파일
```

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
/* 배경 */
--bg-primary: #000000;          /* Pure Black */

/* Purple 계열 (주요 텍스트) */
--purple-light: #c4b5fd;        /* 비활성 요소 */
--purple-main: #a78bfa;         /* 메인 텍스트 */

/* Cyan 계열 (강조 요소) */
--cyan-light: #5eead4;          /* 활성 요소, 하이라이트 */
--cyan-main: #2dd4bf;           /* 그라데이션, 버튼 */
```

### 타이포그래피
| Font Family | Weights | Usage |
|------------|---------|-------|
| **Inter** | 700, 800, 900 | 제목, 헤딩, 네비게이션 |
| **Space Mono** | 400, 700 | 캐릭터 이름, 역할 |
| **Georgia / Times New Roman** | 400 | 시놉시스 본문 (영화감) |

### 반응형 폰트 크기
```css
/* 캐릭터 설명 */
font-size: clamp(1.25rem, 2vw, 1.5rem);

/* 시놉시스 본문 */
font-size: clamp(1rem, 2vw, 1.125rem);
```

### 애니메이션 타이밍
- **로딩 화면**: 2.5초 (1초 페이드인 + 1.5초 페이드아웃)
- **스크롤 애니메이션**: scrub 모드 (스크롤 위치 동기화)
- **모달 전환**: spring 애니메이션 (stiffness: 300, damping: 30)

---

## 🎬 주요 컴포넌트 설명

### Hero.jsx
```jsx
// YouTube 티저 영상을 전체화면 배경으로 표시
// - iframe API 사용
// - 16:9 비율 유지
// - 오버레이 제거로 원본 밝기 유지
```

### SideNav.jsx
```jsx
// 고정 사이드바 네비게이션
// - 스크롤 이벤트 리스너로 활성 섹션 감지
// - 현재 섹션: Cyan 컬러 + 그라데이션 라인
// - 부드러운 스크롤 이동
```

### Characters.jsx
```jsx
// GSAP ScrollTrigger 기반 캐릭터 소개
// - 3D rotateY 애니메이션
// - 양방향 스크롤 효과
// - ScrollReveal로 텍스트 애니메이션
```

### ScrollReveal.jsx
```jsx
// 커스텀 텍스트 애니메이션 컴포넌트
// - 텍스트를 단어 단위로 분할
// - GSAP로 블러, 투명도, 회전 애니메이션
// - 설정 가능한 파라미터:
//   - enableBlur: true/false
//   - baseOpacity: 0-1
//   - baseRotation: 각도
//   - blurStrength: px
```

### Gallery.jsx
```jsx
// 포스터 갤러리
// - 2:3 비율 (극장판 포스터 표준)
// - 클릭 시 모달로 확대
// - AnimatePresence + Spring 애니메이션
```

### Story.jsx
```jsx
// 시놉시스 섹션
// - 나무위키 기반 줄거리
// - 세리프 폰트 (영화 자막 느낌)
// - justify 정렬 + 넓은 줄 간격
```

---

## 🌐 배포 정보

### 자동 배포
- **플랫폼**: GitHub Pages
- **URL**: https://irenevantar.github.io/webprogramming-project/
- **트리거**: `main` 브랜치에 push 시 자동 배포
- **워크플로우**: `.github/workflows/deploy.yml`

### 배포 과정
1. `main` 브랜치에 코드 푸시
2. GitHub Actions 워크플로우 실행
   - Node.js 22 환경 설정
   - pnpm 설치
   - 의존성 설치 (`pnpm install`)
   - 프로덕션 빌드 (`pnpm build`)
   - GitHub Pages에 배포
3. 약 2-3분 후 사이트 업데이트 완료

### Vite 설정
```javascript
// vite.config.js
export default defineConfig({
  base: '/webprogramming-project/',  // GitHub Pages base path
  publicDir: 'public',        // 정적 파일 경로
  server: {
    port: 3000,               // 개발 서버 포트
  },
})
```

---

## 📦 패키지 의존성

### Production Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "framer-motion": "^11.18.2",
  "gsap": "^3.13.0"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^5.4.21"
}
```

### Scripts
```json
{
  "dev": "vite",              // 개발 서버 시작
  "build": "vite build",      // 프로덕션 빌드
  "preview": "vite preview"   // 빌드 미리보기
}
```

---

## � 프로젝트 하이라이트

### 1. 시네마틱 경험
- 극장판 티저 영상을 배경으로 사용
- 다크 테마 + Purple/Cyan 컬러로 분위기 연출
- 영화 자막 스타일 폰트 사용

### 2. 고급 애니메이션
- **GSAP ScrollTrigger**: 프로페셔널한 스크롤 애니메이션
- **3D Transforms**: rotateY를 활용한 입체감
- **Custom ScrollReveal**: 단어별 블러 효과

### 3. 인터랙티브 UX
- 스크롤 위치 기반 네비게이션 하이라이트
- 포스터 클릭-투-인라지 기능
- 부드러운 섹션 전환

### 4. 최적화된 성능
- Vite의 빠른 빌드 속도
- 이미지 최적화 (WebP/PNG)
- Code splitting으로 초기 로딩 최소화

---

## 🔧 개발 환경

### VS Code 확장 권장
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Vite**

### 디버깅 설정
프로젝트에 `.vscode/launch.json`이 포함되어 있어 VS Code에서 바로 디버깅 가능합니다.

```json
{
  "type": "chrome",
  "request": "launch",
  "name": "Launch Chrome",
  "url": "http://localhost:3000",
  "webRoot": "${workspaceFolder}"
}
```

---

## 📚 참고 자료

### 영감을 받은 사이트
- [kprverse.com](https://kprverse.com) - 애니메이션 레퍼런스
- [anantagame.com](https://anantagame.com) - 캐릭터 섹션 레이아웃

### 공식 자료
- [체인소 맨 레제편 공식 사이트](https://chainsawman-anime.com/)
- [나무위키 - 체인소 맨/폭탄의 악마편](https://namu.wiki/w/%EC%B2%B4%EC%9D%B8%EC%86%8C%20%EB%A7%A8/%ED%8F%AD%ED%83%84%EC%9D%98%20%EC%95%85%EB%A7%88%ED%8E%B8)

### 기술 문서
- [React 공식 문서](https://react.dev/)
- [GSAP 공식 문서](https://greensock.com/docs/)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [Vite 공식 문서](https://vitejs.dev/)

---

## 🐛 알려진 이슈

현재 알려진 이슈가 없습니다. 문제를 발견하셨다면 [Issues](https://github.com/irenevantar/webprogramming-project/issues)에 제보해주세요.

---

## 📝 라이선스

이 프로젝트는 개인 포트폴리오 및 학습 목적으로 제작되었습니다.

**저작권 안내:**
- 체인소 맨 © 후지모토 타츠키 / 슈에이샤
- 이미지 및 영상 저작권은 각 권리자에게 있습니다.
- 본 프로젝트는 비상업적 용도로 제작되었습니다.

---

## 👤 개발자

**Irene Vantar**
- GitHub: [@irenevantar](https://github.com/irenevantar)
- Repository: [webprogramming-project](https://github.com/irenevantar/webprogramming-project)

---

<div align="center">

**⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요! ⭐**

Made with 💜 by Irene Vantar

</div>
