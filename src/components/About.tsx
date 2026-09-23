import { ABOUT_PARAGRAPHS, ACHIEVEMENTS, EDUCATION, type TimelineEntry } from '../data'
import Section from './Section'

function Timeline({ heading, entries }: { heading: string; entries: TimelineEntry[] }) {
  return (
    <div>
      <div className="font-mono text-xs text-accent tracking-widest mb-5 uppercase">{heading}</div>
      <div className="space-y-5">
        {entries.map(t => (
          <div key={t.role} className="flex gap-4 group">
            <div className="font-mono text-xs text-subtle w-24 shrink-0 pt-0.5 group-hover:text-accent transition-colors">
              {t.year}
            </div>
            <div className="border-l border-line pl-4 group-hover:border-line-strong transition-colors">
              <div className="font-mono text-sm text-fg mb-0.5">{t.role}</div>
              <div className="font-mono text-xs text-accent mb-1">{t.place}</div>
              <div className="text-xs text-subtle leading-relaxed">{t.note}</div>
              {t.links && t.links.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                  {t.links.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:underline underline-offset-4"
                    >
                      {link.label} <span aria-hidden>↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <Section id="about" number="01" title="About">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          {ABOUT_PARAGRAPHS.map(p => (
            <p key={p} className="text-muted leading-relaxed mb-5 last:mb-0">
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-10">
          <Timeline heading="Education" entries={EDUCATION} />
          <Timeline heading="Awards & Certifications" entries={ACHIEVEMENTS} />
        </div>
      </div>
    </Section>
  )
}
