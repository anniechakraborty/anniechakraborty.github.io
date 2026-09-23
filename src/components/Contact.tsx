import { CONTACT_INTRO, CONTACT_LINKS } from '../data'
import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" number="07" title="Contact">
      <p className="text-muted -mt-8 mb-10 max-w-md leading-relaxed">{CONTACT_INTRO}</p>
      <div className="grid md:grid-cols-2 gap-3 max-w-2xl">
        {CONTACT_LINKS.map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 border border-line px-4 py-3 hover:border-line-strong hover:bg-surface transition-colors group"
          >
            <span className="font-mono text-xs text-subtle group-hover:text-accent transition-colors">{link.label}</span>
            <span className="font-mono text-xs text-muted group-hover:text-fg-soft transition-colors truncate">
              {link.value}
            </span>
          </a>
        ))}
      </div>
    </Section>
  )
}
