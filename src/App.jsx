import { useState, useEffect, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Loader from './components/Loader'
import SideNav from './components/SideNav'
import Cursor from './components/Cursor'

const Characters = lazy(() => import('./components/Characters'))
const Story = lazy(() => import('./components/Story'))
const Gallery = lazy(() => import('./components/Gallery'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Cursor />
          <SideNav isVisible={isScrolled} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <main>
              <Hero onScroll={setIsScrolled} />
              <Suspense fallback={<div style={{ height: '50vh' }}></div>}>
                <Characters />
                <Story />
                <Gallery />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        </>
      )}
    </>
  )
}

export default App
