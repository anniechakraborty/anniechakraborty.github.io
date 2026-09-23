import { useEffect, useState } from 'react'
import { MEDIUM_API, MEDIUM_PROFILE } from '../data'
import Section from './Section'

type Post = { title: string; published: string; summary?: string; link: string }

const MAX_POSTS = 6

/**
 * Medium summaries are HTML that repeat the title as a heading and include the cover image.
 * Drop those and return the paragraph text, with entities decoded.
 */
function toPlainText(html: string) {
  const body = new DOMParser().parseFromString(html, 'text/html').body
  body.querySelectorAll('h1, h2, h3, h4, figure').forEach(el => el.remove())
  const paragraphs = Array.from(body.querySelectorAll('p'), p => p.textContent?.trim()).filter(Boolean)
  return paragraphs.length ? paragraphs.join(' ') : (body.textContent?.trim() ?? '')
}

function truncate(text: string, max = 220) {
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text
}

export default function Writing() {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  useEffect(() => {
    const controller = new AbortController()
    fetch(MEDIUM_API, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data: Post[]) => {
        setPosts(data.slice(0, MAX_POSTS))
        setStatus('ready')
      })
      .catch(err => {
        if (err.name !== 'AbortError') setStatus('error')
      })
    return () => controller.abort()
  }, [])

  const mediumLink = (
    <a
      href={MEDIUM_PROFILE}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline underline-offset-4"
    >
      read them on Medium ↗
    </a>
  )

  return (
    <Section id="writing" number="05" title="Writing" hint="latest posts from Medium">
      {status === 'loading' && (
        <div className="font-mono text-xs text-subtle">
          <span className="text-accent">→</span> fetching posts
          <span className="cursor-blink text-accent">▌</span>
          <div className="mt-2 text-faint">the server may take a few seconds to wake up</div>
        </div>
      )}

      {status === 'error' && (
        <p className="font-mono text-xs text-muted">
          <span className="text-danger">✕</span> couldn't load posts right now — {mediumLink}
        </p>
      )}

      {status === 'ready' && (
        <>
          <div className="grid md:grid-cols-2 gap-3">
            {posts.map(post => (
              <a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-line bg-surface p-6 hover:border-accent/40 transition-colors"
              >
                <div className="font-mono text-xs text-subtle mb-3">
                  {new Date(post.published).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}
                </div>
                <h3 className="font-mono text-base font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                {post.summary && (
                  <p className="text-sm text-muted leading-relaxed mb-4">{truncate(toPlainText(post.summary))}</p>
                )}
                <span className="mt-auto font-mono text-xs text-subtle group-hover:text-accent transition-colors">
                  Read more ↗
                </span>
              </a>
            ))}
          </div>
          <p className="mt-6 font-mono text-xs text-subtle">More posts? {mediumLink}</p>
        </>
      )}
    </Section>
  )
}
