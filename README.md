# 🎬 Chainsaw Man: Reze Arc

<div align="center">

[![Chainsaw Man](https://img.shields.io/badge/Chainsaw%20Man-Reze%20Arc-8b5cf6?style=for-the-badge)](https://irenevantar.github.io/webprogramming-project/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.18.2-ff69b4?style=for-the-badge)](https://www.framer.com/motion/)

---

## 🌐 **[🔗 Website Link](https://irenevantar.github.io/webprogramming-project/)**

*“폭발 같은 여름, 소년과 소녀의 이야기”를 키비주얼로 삼은, 「극장판 체인소 맨: 레제편」 시네마틱 프로모션 인터랙티브 웹사이트*

### 📝 프로젝트 소개
- YouTube 티저 영상으로 시작해(히어로), 스크롤로 캐릭터/시놉시스/OST/포스터/예고편/제작진 섹션을 탐색하는 프로모션 페이지입니다.
- 하단 Dock UI로 섹션을 빠르게 이동하고, 콘텐츠(캐릭터·포스터·예고편)는 모달로 몰입감 있게 확대해 볼 수 있도록 구성했습니다.

</div>

---

## ✨ 주요 기능

### 🎥 YouTube 배경 영상
- 메인 화면에 자동재생되는 극장판 티저 영상
- 무한 반복, 음소거 처리
- 원본 밝기 유지 (오버레이 제거)
- 16:9 비율로 모든 화면 크기 대응

### 🧭 하단 Dock 네비게이션
- 화면 하단 고정 Dock UI로 섹션 바로가기 제공
- 마우스 위치(거리) 기반 확대/축소 인터랙션 (Framer Motion)
- 클릭 시 `scrollIntoView({ behavior: 'smooth' })`로 부드러운 이동

### 🎭 캐릭터 섹션
- **확장된 캐릭터 로스터**: 덴지, 레제, 마키마, 아키, 파워, 빔, 천사의 악마, 포치타
- **인터랙티브 카드**: 마우스 호버 시 확대 및 부양 효과
- **상세 모달**: 
  - 캐릭터 클릭 시 상세 정보 모달 표시
  - 고해상도 이미지 및 성우(CV) 정보
  - **악마화 변신**: 특정 캐릭터(덴지, 레제 등) 변신 버튼 제공
  - **이미지 최적화**: 캐릭터별(레제/아키 축소, 포치타 유지, 기타 확대) 맞춤형 크기 및 위치 조정

### 🎵 OST 플레이어 (New!)
- **LP 스타일 디자인**: 회전하는 바이닐 레코드 애니메이션
- **듀얼 트랙**: Opening (IRIS OUT) & Ending (JANE DOE)
- **독립적 재생 제어**: 각 트랙별 재생 상태 및 진행바 분리
- **커스텀 UI**:
  - 오렌지/보라 테마 적용 (트랙별 고유 색상)
  - **정밀한 UI**: 재생바 중앙 정렬 및 나눔고딕 폰트 적용
  - 유튜브 원본 링크 연동 (LP 커버 클릭 시)

### 🎬 예고편 섹션
- 다양한 버전의 예고편 모음 (메인, 15초, 30초, 티저 등)
- 유튜브 썸네일 자동 추출 및 커스텀 재생 버튼 오버레이
- 모달 뷰어: 몰입감 있는 영상 시청 환경 제공

### 📖 시놉시스 섹션
- 나무위키 기반 극장판 줄거리
- 영화감 있는 세리프 폰트 (Georgia/Times New Roman)
- 반응형 폰트 크기 및 줄 간격

### 🖼️ 포스터 갤러리
- **다양한 공식 포스터** 전시 (메인, 캐릭터별 포스터 등)
- **최적화된 배치**: 관련 캐릭터(레제-폭탄의 악마, 카페-포치타 등) 인접 배치
- 2:3 비율 (극장판 포스터 비율)
- **클릭-투-인라지**: 포스터 클릭 시 모달로 확대
- Framer Motion Spring 애니메이션

### 🎨 시각 디자인
- **다크 테마**: 순수 블랙 배경 (#000000)
- **Purple & Cyan 컬러 스킴**: 레제편 분위기 반영
- **커스텀 로딩 화면**: 약 2초 로딩 + 페이드 아웃 전환
- **반응형 디자인**: 모바일부터 4K까지 대응

### 🖱️ UX / UI 개선
- **직관적인 모달 제어**: 모든 확대 화면(등장인물, 예고편, 포스터)에 닫기 버튼(X) 추가
- **커서 가시성**: 모달 위에서도 커스텀 커서가 항상 보이도록 z-index 최적화

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
│   │   ├── Dock.jsx             # 하단 Dock 네비게이션
│   │   ├── Cursor.jsx           # 커스텀 커서
│   │   ├── BackgroundEffect.jsx # 배경 이펙트
│   │   ├── Characters.jsx       # 캐릭터 소개 (GSAP 애니메이션)
│   │   ├── ScrollReveal.jsx     # 커스텀 텍스트 애니메이션 컴포넌트
│   │   ├── Story.jsx            # 시놉시스 섹션
│   │   ├── OST.jsx              # OST 플레이어
│   │   ├── Gallery.jsx          # 포스터 갤러리 (클릭-투-인라지)
│   │   ├── Trailers.jsx         # 예고편 갤러리
│   │   ├── Staff.jsx            # 제작진 섹션
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
- **로딩 화면**: 약 2초 로딩 + 0.5초 페이드아웃
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

### Dock.jsx
```jsx
// 하단 Dock 네비게이션
// - Framer Motion 거리 기반 스케일/폰트 크기 보간
// - 클릭 시 해당 섹션으로 부드러운 스크롤 이동
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

### OST.jsx
```jsx
// 유튜브 IFrame API 기반 OST 플레이어
// - 트랙별 재생 상태/진행률 분리
// - LP(바이닐) 회전 애니메이션으로 재생 상태 표현
```

### Trailers.jsx
```jsx
// 예고편 갤러리
// - 썸네일 그리드 + 모달 뷰어
// - 고정 16:9 비율로 레이아웃 점프 방지
```

### Staff.jsx
```jsx
// 제작진 섹션
// - 스태프 정보 리스트/레이아웃 구성
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
