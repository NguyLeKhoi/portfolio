import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

const randomChar = (letters) => letters[Math.floor(Math.random() * letters.length)]

const useScrambler = () => {
  const buildPool = (text) => {
    const onlyLetters = (text || '').replace(/\s/g, '')
    const unique = Array.from(new Set(onlyLetters.split('')))
    return unique
  }

  const scrambleTo = (el, target, duration = 800) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const original = target
      const pool = buildPool(original)
      if (pool.length === 0) {
        // nothing to scramble (e.g., only spaces). Set directly after timing.
        const timer = setTimeout(() => {
          if (el) el.textContent = original
          resolve()
        }, duration)
        return
      }
      let frame = 0
      const total = Math.max(1, Math.floor(duration / 16))
      const timer = setInterval(() => {
        frame++
        const out = original
          .split('')
          .map((ch, i) => {
            if (ch === ' ') return ' '
            return i / original.length < frame / total ? ch : randomChar(pool)
          })
          .join('')
        el.textContent = out
        if (frame >= total) {
          clearInterval(timer)
          el.textContent = original
          resolve()
        }
      }, 16)
    })
  }

  const scrambleOut = (el, duration = 700) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const original = el.textContent || ''
      const pool = buildPool(original)
      let frame = 0
      const total = Math.max(1, Math.floor(duration / 16))
      const timer = setInterval(() => {
        frame++
        const keep = Math.max(0, original.length - Math.floor((frame / total) * original.length))
        const out = original
          .split('')
          .map((ch, idx) => {
            if (idx < keep) return ch
            if (ch === ' ') return ' '
            if (pool.length === 0) return ''
            return randomChar(pool)
          })
          .join('')
        el.textContent = out
        if (frame >= total) {
          clearInterval(timer)
          el.textContent = ''
          resolve()
        }
      }, 16)
    })
  }

  const eraseOut = (el, duration = 600) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const original = el.textContent || ''
      const chars = original.split('')
      const indices = chars
        .map((ch, i) => ({ ch, i }))
        .filter(({ ch }) => ch !== ' ')
        .map(({ i }) => i)
      if (indices.length === 0) {
        el.textContent = ''
        return resolve()
      }
      // shuffle indices for patchy removal
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[indices[i], indices[j]] = [indices[j], indices[i]]
      }
      const stepInterval = Math.max(16, Math.floor(duration / indices.length))
      let step = 0
      const timer = setInterval(() => {
        const idx = indices[step]
        chars[idx] = '\u00A0' // non-breaking space to avoid collapsing layout
        el.textContent = chars.join('')
        step += 1
        if (step >= indices.length) {
          clearInterval(timer)
          el.textContent = ''
          resolve()
        }
      }, stepInterval)
    })
  }

  // combined slide + scramble out; direction: 'left' | 'right'
  const slideScrambleOut = (el, direction = 'left', duration = 600, distance = 140, scrambleDuration) => {
    if (!el) return Promise.resolve()
    return new Promise((resolve) => {
      const start = performance.now()
      const animate = (now) => {
        const t = Math.min(1, (now - start) / duration)
        const x = (direction === 'left' ? -1 : 1) * distance * t
        el.style.transform = `translateX(${x}px)`
        el.style.opacity = String(1 - t)
        if (t < 1) {
          requestAnimationFrame(animate)
        } else {
          el.style.transform = ''
          el.style.opacity = ''
          resolve()
        }
      }
      requestAnimationFrame(animate)
      // run text scramble simultaneously
      scrambleOut(el, scrambleDuration ?? Math.round(duration * 1.5))
    })
  }

  // center reveal (from inside): scale up, unblur, tighten letter-spacing
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
        if (t < 1) requestAnimationFrame(animate); else { el.style.transform = ''; el.style.filter = ''; el.style.letterSpacing = ''; el.style.opacity = ''; resolve() }
      }
      requestAnimationFrame(animate)
    })
  }

  return { scrambleTo, scrambleOut, eraseOut, slideScrambleOut, centerReveal }
}

const Loader = ({
  onDone,
  durationMs = 4200,
  holdMs = 400,
  name = 'NGUYỄN LÊ KHÔI',
  lines = ['Frontend Developer', 'Software Engineering Student', 'JavaScript / TypeScript', 'React / Next.js']
}) => {
  const { scrambleTo, scrambleOut, eraseOut, slideScrambleOut } = useScrambler()
  const nameRef = useRef(null)
  const topRefs = useRef([])
  const bottomRefs = useRef([])
  const welcomeTopRef = useRef(null)
  const welcomeBottomRef = useRef(null)
  const [show, setShow] = useState(true)

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      await new Promise((r) => setTimeout(r, 300))
      if (cancelled) return
      // Name fades in (no scramble). Shorter wait for tighter pacing
      await new Promise((r) => setTimeout(r, 800))

      // Phase 2: multiple sub lines (top-left and bottom-right) — all scramble at the same time
      const topTexts = lines.filter((_, i) => i % 2 === 0)
      const bottomTexts = lines.filter((_, i) => i % 2 === 1)
      await Promise.all([
        ...topTexts.map((text, i) => (topRefs.current[i] ? scrambleTo(topRefs.current[i], text, 1200) : Promise.resolve())),
        ...bottomTexts.map((text, i) => (bottomRefs.current[i] ? scrambleTo(bottomRefs.current[i], text, 1200) : Promise.resolve())),
      ])

      // Shorter hold then start previous elements' exit
      await new Promise((r) => setTimeout(r, 400))
      const eraseDuration = 500
      const outs = Promise.all([
        ...topRefs.current.map((el) => slideScrambleOut(el, 'right', 450, 240, 650)),
        ...bottomRefs.current.map((el) => slideScrambleOut(el, 'left', 450, 240, 650)),
        eraseOut(nameRef.current, eraseDuration)
      ])

      // Overlap welcome with previous outs (no gap)
      // Start when name erase is ~80% done
      await new Promise((r) => setTimeout(r, Math.round(eraseDuration * 0.8)))
      const welcomeTop = 'WELCOME TO'
      const welcomeBottom = 'MY PORTFOLIO'
      if (welcomeTopRef.current) welcomeTopRef.current.style.transform = 'translateX(-40px)'
      if (welcomeBottomRef.current) welcomeBottomRef.current.style.transform = 'translateX(-40px)'
      if (welcomeTopRef.current) welcomeTopRef.current.style.opacity = '0'
      if (welcomeBottomRef.current) welcomeBottomRef.current.style.opacity = '0'
      await Promise.all([
        scrambleTo(welcomeTopRef.current, welcomeTop, 800),
        scrambleTo(welcomeBottomRef.current, welcomeBottom, 800)
      ])
      await new Promise((resolve) => {
        const start = performance.now()
        const duration = 300
        const anim = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const x = (1 - t) * -40
          if (welcomeTopRef.current) {
            welcomeTopRef.current.style.transform = `translateX(${x}px)`
            welcomeTopRef.current.style.opacity = String(t)
          }
          if (welcomeBottomRef.current) {
            welcomeBottomRef.current.style.transform = `translateX(${x}px)`
            welcomeBottomRef.current.style.opacity = String(t)
          }
          if (t < 1) requestAnimationFrame(anim); else resolve()
        }
        requestAnimationFrame(anim)
      })
      await new Promise((r) => setTimeout(r, 150))
      await slideScrambleOut(welcomeTopRef.current, 'right', 500, 240, 700)
      await new Promise((r) => setTimeout(r, 10))
      await slideScrambleOut(welcomeBottomRef.current, 'right', 500, 240, 700)
      await outs

      // Done
      await new Promise((r) => setTimeout(r, holdMs))
      if (cancelled) return
      setShow(false)
      // wait for exit fade-out to finish before unmounting from parent
      await new Promise((r) => setTimeout(r, 650))
      onDone && onDone()
    }

    run()
    return () => {
      cancelled = true
    }
  }, [scrambleTo, scrambleOut, name, lines, durationMs, holdMs, onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="loader-inner">
            <div className="loader-stack">
              <div className="loader-lines top">
                {lines.filter((_, i) => i % 2 === 0).map((_, idx) => (
                  <div key={`t-${idx}`} className="loader-line left" ref={(el) => (topRefs.current[idx] = el)} />
                ))}
              </div>
              <motion.div
                className="loader-name"
                ref={nameRef}
                initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)', letterSpacing: '0.08em' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '0em' }}
                transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
              >
                {name}
              </motion.div>
              <div className="loader-lines bottom">
                {lines.filter((_, i) => i % 2 === 1).map((_, idx) => (
                  <div key={`b-${idx}`} className="loader-line right" ref={(el) => (bottomRefs.current[idx] = el)} />
                ))}
              </div>
              <div className="welcome-lines">
                <div className="welcome-line left" ref={welcomeTopRef} />
                <div className="welcome-line right" ref={welcomeBottomRef} />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader


