import { useEffect, useRef, useState } from 'react'

/** Types out each string, pauses, deletes it, then moves to the next one. */
export function useTypingEffect(strings: string[], speed = 80, pause = 2000) {
  const [idx, setIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const current = strings[idx]

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed)
    } else if (!deleting) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2)
    } else {
      setDeleting(false)
      setIdx(i => (i + 1) % strings.length)
    }
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, current, strings.length, speed, pause])

  return current.slice(0, charIdx)
}

/** Returns a ref and whether that element has scrolled into view (latches to true once seen). */
export function useInView<T extends Element>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, visible] as const
}

/** Tracks which section id the user has scrolled to, for highlighting the nav. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop) setActive(id)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids])

  return active
}

type Theme = 'dark' | 'light'

/**
 * Light/dark mode. The theme is stored on <html data-theme="…">, which index.css uses to swap colours,
 * and remembered in localStorage. index.html applies the saved theme before React loads to avoid a flash.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#fafaf7' : '#080808')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Storage can be blocked (e.g. private browsing); the toggle still works for this visit.
    }
  }, [theme])

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle] as const
}
