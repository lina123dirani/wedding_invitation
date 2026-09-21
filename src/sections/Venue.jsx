import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/Venue.css'

function Venue() {
  const { venue } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.18 })

  return (
    <section
      ref={sectionRef}
      className={`venue${isInView ? ' venue--in-view' : ''}`}
      aria-label="مكان الزفاف"
    >
      <div className="venue__atmosphere" aria-hidden="true" />
      <div className="organic-blob organic-blob--champagne venue__blob" aria-hidden="true" />
      <VineDecoration
        className="venue__vine"
        variant="branch"
        size="md"
        rotate={12}
        opacity={0.4}
        flip
      />

      <div className="venue__inner">
        <header className="venue__header venue__enter venue__enter--heading">
          <p className="venue__eyebrow">{venue.eyebrow}</p>
          <h2 className="venue__title">{venue.title}</h2>
          <p className="venue__intro">{venue.intro}</p>
        </header>

        <div className="venue__details venue__enter venue__enter--details">
          <div className="venue__rule" aria-hidden="true" />

          <dl className="venue__meta">
            <div className="venue__meta-item">
              <dt className="venue__meta-label">{venue.labels.venue}</dt>
              <dd className="venue__meta-value venue__meta-value--name">
                {venue.name}
              </dd>
            </div>

            <div className="venue__meta-item">
              <dt className="venue__meta-label">{venue.labels.address}</dt>
              <dd className="venue__meta-value">{venue.address}</dd>
            </div>

            <div className="venue__meta-row">
              <div className="venue__meta-item">
                <dt className="venue__meta-label">{venue.labels.date}</dt>
                <dd className="venue__meta-value">{venue.date}</dd>
              </div>

              <div className="venue__meta-item">
                <dt className="venue__meta-label">{venue.labels.time}</dt>
                <dd className="venue__meta-value">{venue.time}</dd>
              </div>
            </div>
          </dl>

          <a
            className="ui-btn venue__maps-btn"
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="ui-btn__label">{venue.mapsLabel}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Venue
