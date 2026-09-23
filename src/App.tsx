import { NAME } from './data'
import { useActiveSection } from './hooks'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Writing from './components/Writing'
import Resume from './components/Resume'
import Contact from './components/Contact'

// Order must match the order of sections on the page (used for nav highlighting).
const SECTIONS = ['about', 'experience', 'projects', 'skills', 'writing', 'resume', 'contact']
const SCROLL_SPY_IDS = ['home', ...SECTIONS]

export default function App() {
  const active = useActiveSection(SCROLL_SPY_IDS)

  return (
    <div className="min-h-screen bg-bg text-fg overflow-x-clip">
      <Nav sections={SECTIONS} active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Writing />
        <Resume />
        <Contact />
      </main>
      <footer className="border-t border-line-faint py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 items-center justify-between">
          <span className="font-mono text-xs text-subtle">
            © {new Date().getFullYear()} {NAME}
          </span>
          <span className="font-mono text-xs text-faint">built with React + Vite · posts via Flask</span>
        </div>
      </footer>
    </div>
  )
}
