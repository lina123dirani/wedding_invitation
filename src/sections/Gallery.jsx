import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/Gallery.css'

function Gallery() {
  const { memories, date } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.18 })

  return (
    <section
      ref={sectionRef}
      className={`gallery${isInView ? ' gallery--in-view' : ''}`}
      aria-label="Memories"
    >
      <div className="gallery__atmosphere" aria-hidden="true" />
      <div className="gallery__grain" aria-hidden="true" />
      <VineDecoration
        className="gallery__vine gallery__vine--a"
        variant="branch"
        size="md"
        rotate={-22}
        opacity={0.4}
        flip
      />
      <VineDecoration
        className="gallery__vine gallery__vine--b"
        variant="branch"
        size="sm"
        rotate={16}
        opacity={0.34}
      />

      <div className="gallery__inner">
        <header className="gallery__header gallery__enter gallery__enter--heading">
          <p className="gallery__eyebrow">{memories.eyebrow}</p>
          <h2 className="gallery__title">{memories.title}</h2>
          <div className="gallery__rule" aria-hidden="true" />
          <p className="gallery__intro">{memories.intro}</p>
        </header>

        <div className="gallery__editorial gallery__enter gallery__enter--body">
          <p className="gallery__date" aria-hidden="true">
            <span className="gallery__date-day">{date.day}</span>
            <span className="gallery__date-month">{date.month}</span>
            <span className="gallery__date-year">{date.year}</span>
          </p>
          <p className="gallery__line">{memories.line}</p>
        </div>
      </div>
    </section>
  )
}

export default Gallery
