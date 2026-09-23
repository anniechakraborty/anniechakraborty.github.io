import { HERO_INTRO, NAME, TERMINAL, TYPING_STRINGS } from '../data'
import { useTypingEffect } from '../hooks'

export default function Hero() {
  const typed = useTypingEffect(TYPING_STRINGS)

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-14">
      <div className="mb-4">
        <span className="font-mono text-xs text-subtle tracking-widest">$ whoami</span>
      </div>
      <h1
        className="font-mono text-5xl md:text-7xl font-bold leading-none mb-4 animate-slide-up"
        style={{ letterSpacing: '-0.02em' }}
      >
        {NAME}
      </h1>
      <div className="h-12 flex items-center mb-8">
        <span className="font-mono text-xl md:text-2xl text-muted">
          {typed}
          <span className="cursor-blink text-accent">▌</span>
        </span>
      </div>
      <p className="text-muted text-lg max-w-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {HERO_INTRO}
      </p>
      <div className="flex gap-4 flex-wrap animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <a
          href="#projects"
          className="font-mono text-sm px-5 py-2.5 bg-accent text-on-accent font-semibold hover:bg-accent-hover transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="font-mono text-sm px-5 py-2.5 border border-line-strong text-muted hover:border-accent hover:text-accent transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <div className="mt-20 border border-line bg-surface p-5 max-w-lg animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <div className="flex gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-danger/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warn/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
        </div>
        <div className="font-mono text-xs space-y-1">
          {TERMINAL.map(({ cmd, arg, output }, i) => (
            <div key={arg} className={i > 0 ? 'mt-2' : ''}>
              <div>
                <span className="text-accent">→</span> <span className="text-muted">{cmd}</span>{' '}
                <span className="text-muted">{arg}</span>
              </div>
              {output.map(line => (
                <div key={line} className="text-subtle pl-4">
                  {line}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
