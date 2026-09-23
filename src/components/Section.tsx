import type { ReactNode } from 'react'
import { useInView } from '../hooks'

type Props = {
  id: string
  number: string
  title: string
  hint?: string
  children: ReactNode
}

/** A page section with the numbered heading, which fades up when scrolled into view. */
export default function Section({ id, number, title, hint, children }: Props) {
  const [ref, visible] = useInView<HTMLDivElement>()

  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto border-t border-line-faint scroll-mt-14">
      <div ref={ref} className={`section-enter ${visible ? 'visible' : ''}`}>
        <div className="font-mono text-xs text-faint mb-2 tracking-widest">{number} /</div>
        <div className="flex items-end justify-between gap-4 mb-12">
          <h2 className="font-mono text-3xl font-bold">{title}</h2>
          {hint && <span className="font-mono text-xs text-faint hidden sm:block">{hint}</span>}
        </div>
        {children}
      </div>
    </section>
  )
}
