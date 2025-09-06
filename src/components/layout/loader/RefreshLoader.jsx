import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './RefreshLoader.css'

const RefreshLoader = ({ name = 'NGUYỄN LÊ KHÔI', onDone, inDuration = 650, holdMs = 600, outDuration = 450 }) => {
  const nameRef = useRef(null)
  const [show, setShow] = useState(true)

  const centerReveal = (el, duration = 600) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const start = performance.now()
      const animate = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const scale = 0.9 + 0.1 * t
        const blur = 12 * (1 - t)
        const ls = 0.08 * (1 - t)
        el.style.transform = `scale(${scale})`
        el.style.filter = `blur(${blur}px)`
        el.style.letterSpacing = `${ls}em`
        el.style.opacity = String(t)
        if (t < 1) requestAnimationFrame(animate)
        else {
          el.style.transform = ''
          el.style.filter = ''
          el.style.letterSpacing = ''
          el.style.opacity = ''
          resolve()
        }
      }
      requestAnimationFrame(animate)
    })
  }

  const eraseOut = (el, duration = 500) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const original = el.textContent || ''
      const chars = original.split('')
      const indices = chars.map((ch, i) => ({ ch, i })).filter(({ ch }) => ch !== ' ').map(({ i }) => i)
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indices[i], indices[j]] = [indices[j], indices[i]]
      }
      const interval = Math.max(16, Math.floor(duration / Math.max(1, indices.length)))
      let step = 0
      const timer = setInterval(() => {
        const idx = indices[step]
        chars[idx] = '\u00A0'
        el.textContent = chars.join('')
        step += 1
        if (step >= indices.length) {
          clearInterval(timer)
          el.textContent = ''
          resolve()
        }
      }, interval)
    })
  }

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      if (cancelled) return
      await centerReveal(nameRef.current, inDuration)
      await new Promise((r) => setTimeout(r, holdMs))
      await eraseOut(nameRef.current, outDuration)
      setShow(false)
      // wait for exit fade
      setTimeout(() => onDone && onDone(), 650)
    }
    run()
    return () => { cancelled = true }
  }, [inDuration, holdMs, outDuration, onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="refresh-loader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="refresh-loader-inner">
            <div className="refresh-loader-stack">
              <div className="refresh-loader-name" ref={nameRef}>{name}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default RefreshLoader


