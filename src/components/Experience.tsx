import { WORK } from '../data'
import Section from './Section'

export default function Experience() {
  return (
    <Section id="experience" number="02" title="Experience">
      <div>
        {WORK.map(w => (
          <div
            key={w.company}
            className="group grid md:grid-cols-[180px_1fr] gap-3 md:gap-6 py-8 border-b border-line-faint last:border-b-0"
          >
            <div className="pt-0.5">
              <div className="font-mono text-xs text-subtle mb-1">{w.period}</div>
              <div className="font-mono text-xs text-faint">{w.location}</div>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h3 className="font-mono text-sm font-semibold text-fg">{w.role}</h3>
                <span className="font-mono text-xs text-accent">@ {w.company}</span>
              </div>
              <ul className="space-y-1.5 mb-4">
                {w.points.map(pt => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                    <span className="text-accent/60 font-mono text-xs mt-1 shrink-0">→</span>
                    {pt}
                  </li>
                ))}
              </ul>
              {w.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {w.tags.map(t => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 border border-line text-subtle group-hover:border-line-strong transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
