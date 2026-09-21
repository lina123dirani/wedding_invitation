import { useEffect, useRef, useState } from 'react'
import weddingData from '../data/weddingData'
import useInViewToggle from '../hooks/useInViewToggle'
import '../styles/WeddingTimeline.css'

function TimelineEvent({ event, side, index }) {
  const [eventRef, isVisible] = useInViewToggle({
    threshold: 0.28,
    rootMargin: '0px 0px -8% 0px',
  })

  return (
    <li
      ref={eventRef}
      className={[
        'wedding-timeline__event',
        `wedding-timeline__event--${side}`,
        isVisible ? 'wedding-timeline__event--visible' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ '--event-index': index }}
    >
      <div className="wedding-timeline__card">
        <p className="wedding-timeline__time">{event.time}</p>
        <h3 className="wedding-timeline__event-title">{event.title}</h3>
        <p className="wedding-timeline__description">{event.description}</p>
      </div>
    </li>
  )
}

function WeddingTimeline() {
  const { timeline, images } = weddingData
  const [sectionRef, isInView] = useInViewToggle({
    threshold: 0.08,
    rootMargin: '0px 0px -4% 0px',
  })
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    let frame = 0

    const updateProgress = () => {
      const rect = track.getBoundingClientRect()
      const viewLine = window.innerHeight * 0.42
      const start = rect.top
      const span = Math.max(rect.height, 1)
      const next = Math.min(1, Math.max(0, (viewLine - start) / span))
      setProgress((prev) => (Math.abs(prev - next) > 0.001 ? next : prev))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const bloomStyle = {
    top: `${progress * 100}%`,
  }

  const fillStyle = {
    height: `${progress * 100}%`,
  }

  return (
    <section
      ref={sectionRef}
      className={`wedding-timeline${isInView ? ' wedding-timeline--in-view' : ''}`}
      aria-label="Wedding day timeline"
    >
      <div className="wedding-timeline__atmosphere" aria-hidden="true" />

      <div className="wedding-timeline__inner">
        <header
          className={`wedding-timeline__header${isInView ? ' wedding-timeline__header--visible' : ''}`}
        >
          <p className="wedding-timeline__eyebrow">{timeline.eyebrow}</p>
          <h2 className="wedding-timeline__title">{timeline.title}</h2>
        </header>

        <div className="wedding-timeline__track" ref={trackRef}>
          <span className="wedding-timeline__axis" aria-hidden="true">
            <span className="wedding-timeline__axis-fill" style={fillStyle} />
          </span>

          <span
            className="wedding-timeline__bloom"
            style={bloomStyle}
            aria-hidden="true"
          >
            <img
              src={images.timelineFlower}
              alt=""
              draggable={false}
            />
          </span>

          <ol className="wedding-timeline__list">
            {timeline.events.map((event, index) => {
              const side = index % 2 === 0 ? 'left' : 'right'

              return (
                <TimelineEvent
                  key={`${event.time}-${event.title}`}
                  event={event}
                  side={side}
                  index={index}
                />
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default WeddingTimeline
