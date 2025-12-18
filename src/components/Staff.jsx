import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const STAFF_DATA = [
  { role: '감독', name: '나카야마 류' },
  { role: '각본', name: '세코 히로시' },
  { role: '부감독', name: '나카조노 마토' },
  { role: '캐릭터 디자인', name: '스기야마 카즈타카' },
  { role: '서브 캐릭터 디자인', name: '야마자키 소타 / 슌' },
  { role: '메인 애니메이터', name: '쇼이치' },
  { role: '액션 디렉터', name: '시게츠구 소타' },
  { role: '악마 디자인', name: '마츠우라 리키 / 오시야마 시쿄타카' },
  { role: '의상 디자인', name: '야마토 아야' },
  { role: '미술감독', name: '타케다 유스케' },
  { role: '색채설계', name: '나카노 나오미' },
  { role: '컬러 스크립트', name: '리쿠' },
  { role: '3DCG 디렉터', name: '와타나베 다이키 / 타마이 마시로' },
  { role: '촬영감독', name: '이토 텟페이' },
  { role: '편집', name: '요시타케 마사토' },
  { role: '음악', name: '우시오 켄스케' },
  { role: '배급', name: '토호' },
  { role: '제작', name: 'MAPPA' },
]

const Staff = () => {
  return (
    <section
      id="staff"
      style={{
        padding: '8rem 0',
        background: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 700,
            fontFamily: "'Nanum Gothic', sans-serif",
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}>
            <ScrollReveal as="span" style={{ color: '#f97316' }}>[</ScrollReveal>
            <ScrollReveal as="span">제작진</ScrollReveal>
            <ScrollReveal as="span" style={{ color: '#f97316' }}>]</ScrollReveal>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          textAlign: 'center',
        }}>
          {STAFF_DATA.map((staff, index) => (
            <ScrollReveal key={index} delay={index * 0.1} baseOpacity={0} enableBlur={true}>
              <div
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  transition: 'transform 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.5)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                }}
              >
                <h3 style={{
                  color: '#f97316',
                  fontSize: '1rem',
                  fontWeight: 700,
                  marginBottom: '0.5rem',
                  fontFamily: "'Nanum Gothic', sans-serif",
                }}>
                  {staff.role}
                </h3>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: '#e5e7eb',
                }}>
                  {staff.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Staff
