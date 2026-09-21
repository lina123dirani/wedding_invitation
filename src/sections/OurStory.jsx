import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/OurStory.css'

function OurStory() {
  const { story } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.18 })

  return (
    <section
      ref={sectionRef}
      className={`our-story${isInView ? ' our-story--in-view' : ''}`}
      aria-label="Our story"
    >
      <div className="our-story__atmosphere" aria-hidden="true" />
      <div className="our-story__grain" aria-hidden="true" />
      <div className="organic-blob organic-blob--blush our-story__blob" aria-hidden="true" />
      <VineDecoration
        className="our-story__vine"
        variant="symmetric"
        size="lg"
        rotate={0}
        opacity={0.38}
      />

      <div className="our-story__inner">
        <header className="our-story__header our-story__enter our-story__enter--heading">
          <p className="our-story__eyebrow">{story.eyebrow}</p>
          <h2 className="our-story__title">{story.title}</h2>
          <div className="our-story__rule" aria-hidden="true" />
        </header>

        <div className="our-story__copy our-story__enter our-story__enter--text">
          <p className="our-story__text">{story.text}</p>
        </div>
      </div>
    </section>
  )
}

export default OurStory
