import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

const Story = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="story"
      style={{
        padding: '8rem 0',
        background: '#0a0a0a',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            fontFamily: "'Nanum Gothic', sans-serif",
            letterSpacing: '0.02em',
            marginBottom: '4rem',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            color: '#fff'
          }}
        >
          <ScrollReveal as="span" style={{ color: '#f97316' }}>[</ScrollReveal>
          <ScrollReveal as="span" baseRotation={5} enableBlur={true}>
            시놉시스
          </ScrollReveal>
          <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
        </h2>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              fontWeight: 500,
              lineHeight: 1.8,
              color: '#c4b5fd',
              textAlign: 'justify',
              letterSpacing: '-0.01em',
              wordBreak: 'keep-all',
            }}
          >
            인기 애니메이션 '체인소 맨' 첫 공식 극장판 국내 상륙! 압도적 배틀 액션이 스크린에서 폭발한다! 데블 헌터로 일하는 소년 '덴지'는 조직의 배신으로 죽음을 맞이하지만, 체인소의 악마 '포치타'의 심장을 이식받아 '체인소 맨'으로 부활한다. 공안 데빌 헌터 특이 4과에 소속되어 비범한 악마 사냥 실력을 뽐내던 덴지는 동경하던 상사 '마키마'와의 데이트로 들떠 있던 중, 갑자기 나타난 소녀 '레제'의 부탁으로 그녀와 함께 시간을 보내게 된다. 평범한 소녀로 보이는 레제는 사실 '폭탄의 악마'이자, 국제 암살자 조직이 보낸 최강의 자객! 덴지의 심장 '체인소 맨'을 노리고 있었던 것. 서로의 진실을 모른 채 꿈같은 시간을 보내던 두 사람. 하지만 덴지와 레제, 서로를 향한 감정이 싹트는 찰나, 엄청난 전투가 시작되는데…
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default Story
