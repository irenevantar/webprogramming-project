import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(196, 181, 253, 0.1)',
        padding: '3rem 0',
        marginTop: '8rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: '#a78bfa',
          }}
        >
          <ScrollReveal as="span" baseRotation={2} enableBlur={true}>
            {`© ${currentYear} CHAINSAW MAN: REZE ARC`}
          </ScrollReveal>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <motion.a
              href="https://github.com/irenevantar/Webprogramming"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: '#f97316' }}
              style={{ transition: 'color 0.2s ease' }}
            >
              <ScrollReveal as="span" baseRotation={2} enableBlur={true}>
                GitHub
              </ScrollReveal>
            </motion.a>
            <motion.a
              href="#hero"
              whileHover={{ color: '#5eead4' }}
              style={{ transition: 'color 0.2s ease' }}
            >
              <ScrollReveal as="span" baseRotation={2} enableBlur={true}>
                Back to Top
              </ScrollReveal>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
