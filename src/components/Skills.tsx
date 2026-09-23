import { useState } from 'react'
import { SKILLS, type Skill } from '../data'
import { useInView } from '../hooks'
import Section from './Section'

function SkillChip({ name, learnedAt, visible, delay }: Skill & { visible: boolean; delay: number }) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(8px)',
        transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms`,
      }}
    >
      <button
        type="button"
        onClick={() => setShowTooltip(s => !s)}
        onBlur={() => setShowTooltip(false)}
        className={`font-mono text-xs px-3 py-1.5 border transition-colors ${showTooltip && learnedAt ? 'border-accent/50 text-accent' : 'border-line-strong text-fg-soft hover:border-line-hover'}`}
      >
        {name}
      </button>

      {showTooltip && learnedAt && (
        <div className="absolute bottom-full left-0 mb-2 z-20 pointer-events-none w-max max-w-[16rem]">
          <div className="bg-surface-2 border border-line-strong px-3 py-2 shadow-xl">
            <div className="font-mono text-[10px] text-subtle mb-0.5 uppercase tracking-widest">learned at</div>
            <div className="font-mono text-xs text-fg-soft leading-relaxed">{learnedAt}</div>
          </div>
          <div className="w-2 h-2 bg-surface-2 border-r border-b border-line-strong rotate-45 ml-3 -mt-1" />
        </div>
      )}
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <Section id="skills" number="04" title="Skills" hint="hover a skill for context">
      <div ref={ref} className="grid md:grid-cols-3 gap-10">
        {SKILLS.map((cat, catIdx) => (
          <div key={cat.category}>
            <div className="font-mono text-xs text-accent tracking-widest mb-5 uppercase">{cat.category}</div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, i) => (
                <SkillChip key={item.name} {...item} visible={visible} delay={catIdx * 120 + i * 35} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
