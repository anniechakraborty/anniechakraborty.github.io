import { useRef, useState } from 'react'
import { PROJECTS, type Project } from '../data'
import Section from './Section'

const INITIAL_SHOWN = 4

function ProjectCard({ project, isExpanded, onToggle }: { project: Project; isExpanded: boolean; onToggle: () => void }) {
  const detailRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className={`border bg-surface transition-colors duration-200 ${isExpanded ? 'border-accent/40' : 'border-line hover:border-line-strong'}`}
    >
      {/* Card header — always visible */}
      <button onClick={onToggle} aria-expanded={isExpanded} className="w-full text-left p-6 group">
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-xs text-faint">{project.id}</span>
          <span className="font-mono text-xs text-subtle">{project.period}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-mono text-lg font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
          <span className={`font-mono text-xs text-subtle transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
        </div>
        <p className="text-sm text-muted leading-relaxed mt-2">{project.desc}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map(t => (
            <span key={t} className="font-mono text-xs px-2 py-0.5 border border-line-strong text-subtle">
              {t}
            </span>
          ))}
        </div>
      </button>

      {/* Expandable detail: animates max-height between 0 and the content's real height */}
      <div
        ref={detailRef}
        style={{
          maxHeight: isExpanded ? `${detailRef.current?.scrollHeight ?? 400}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="border-t border-line mx-6" />
        <div className="px-6 py-5">
          <p className="text-sm text-fg-soft leading-relaxed">{project.longDesc}</p>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5">
              {project.links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isExpanded ? 0 : -1}
                  className="inline-flex items-center gap-2 font-mono text-xs px-4 py-2 border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_SHOWN)

  return (
    <Section id="projects" number="03" title="Projects" hint="click a card to expand">
      <div className="space-y-3">
        {visibleProjects.map(p => (
          <ProjectCard
            key={p.id}
            project={p}
            isExpanded={expandedProject === p.id}
            onToggle={() => setExpandedProject(prev => (prev === p.id ? null : p.id))}
          />
        ))}
      </div>

      {PROJECTS.length > INITIAL_SHOWN &&
        (showAll ? (
          <button
            onClick={() => {
              setShowAll(false)
              setExpandedProject(null)
            }}
            className="mt-6 w-full font-mono text-xs border border-line py-3 text-subtle hover:border-line-hover hover:text-muted transition-colors"
          >
            Show fewer ↑
          </button>
        ) : (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 w-full font-mono text-xs border border-line py-3 text-subtle hover:border-accent/40 hover:text-accent transition-colors"
          >
            Show {PROJECTS.length - INITIAL_SHOWN} more projects ↓
          </button>
        ))}
    </Section>
  )
}
