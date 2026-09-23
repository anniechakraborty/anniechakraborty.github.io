import { useEffect, useState } from 'react'
import { NAME, RESUME_URL } from '../data'
import { useInView } from '../hooks'
import Section from './Section'

const buttonClass =
  'inline-flex items-center gap-2 font-mono text-xs px-4 py-2 border border-accent/40 text-accent hover:bg-accent/10 transition-colors'

export default function Resume() {
  // Only load the PDF once the section scrolls into view, so it doesn't slow the first page load.
  const [ref, visible] = useInView<HTMLDivElement>()
  const [status, setStatus] = useState<'checking' | 'ok' | 'missing'>('checking')

  // If the file is missing, the dev server (and some hosts) answer with index.html instead of a 404,
  // and embedding that would nest the whole site inside itself. Confirm it's really a PDF first.
  useEffect(() => {
    fetch(RESUME_URL, { method: 'HEAD' })
      .then(res => setStatus(res.ok && res.headers.get('content-type')?.includes('pdf') ? 'ok' : 'missing'))
      .catch(() => setStatus('missing'))
  }, [])

  return (
    <Section id="resume" number="06" title="Resume">
      {status === 'missing' ? (
        <p className="font-mono text-xs text-muted">
          <span className="text-danger">✕</span> resume.pdf not found
        </p>
      ) : (
        <div className="flex flex-wrap gap-3">
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className={buttonClass}>
            Open in new tab <span aria-hidden>↗</span>
          </a>
          <a href={RESUME_URL} download={`${NAME} - CV.pdf`} className={buttonClass}>
            Download PDF <span aria-hidden>↓</span>
          </a>
        </div>
      )}

      {/* Mobile browsers can't reliably show embedded PDFs, so the preview is desktop-only. */}
      {status !== 'missing' && (
        <div ref={ref} className="hidden md:block mt-6 border border-line bg-surface h-[85vh]">
          {visible && status === 'ok' && (
            <object data={`${RESUME_URL}#view=FitH`} type="application/pdf" className="w-full h-full">
              <p className="p-6 font-mono text-xs text-muted">
                Your browser can't display the PDF here —{' '}
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                  open it in a new tab ↗
                </a>
              </p>
            </object>
          )}
        </div>
      )}
    </Section>
  )
}
