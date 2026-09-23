import { useEffect, useState } from 'react'
import { HANDLE } from '../data'
import { useTheme } from '../hooks'

type Props = { sections: string[]; active: string }

export default function Nav({ sections, active }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#home" className="font-mono text-sm text-accent tracking-wider">
            {HANDLE}
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              {sections.map(s => (
                <a
                  key={s}
                  href={`#${s}`}
                  className={`nav-link font-mono text-xs tracking-widest uppercase hover:text-fg-soft ${active === s ? 'text-accent active' : 'text-subtle'}`}
                >
                  {s}
                </a>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              className="w-8 h-8 -mr-1 flex items-center justify-center border border-line text-subtle hover:text-accent hover:border-accent/40 transition-colors"
            >
              <span aria-hidden className="text-sm leading-none">{theme === 'dark' ? '☀' : '☾'}</span>
            </button>

            <button
              className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 relative z-50"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block h-px bg-fg transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block h-px bg-fg transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block h-px bg-fg transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-surface border-r border-line md:hidden flex flex-col pt-20 pb-10 px-8 transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="font-mono text-xs text-faint mb-8 tracking-widest">NAVIGATION</div>
        <nav className="flex flex-col gap-1">
          {sections.map((s, i) => (
            <a
              key={s}
              href={`#${s}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 py-3 border-b border-line-faint font-mono text-sm uppercase tracking-widest transition-colors ${active === s ? 'text-accent' : 'text-subtle hover:text-fg-soft'}`}
            >
              <span className="text-faint text-xs">0{i + 1}</span>
              {s}
            </a>
          ))}
        </nav>
        <div className="mt-auto font-mono text-xs text-faint">{HANDLE}</div>
      </div>
    </>
  )
}
