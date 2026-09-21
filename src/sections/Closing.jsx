import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/Closing.css'

function Closing() {
  const { closing, studio } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.22 })

  return (
    <section
      ref={sectionRef}
      className={`closing${isInView ? ' closing--in-view' : ''}`}
      aria-label="شكر ختامي"
    >
      <div className="closing__atmosphere" aria-hidden="true" />
      <div className="closing__grain" aria-hidden="true" />
      <VineDecoration
        className="closing__vine closing__vine--a"
        variant="branch"
        size="md"
        rotate={-20}
        opacity={0.34}
      />
      <VineDecoration
        className="closing__vine closing__vine--b"
        variant="branch"
        size="sm"
        rotate={18}
        opacity={0.3}
        flip
      />

      <div className="closing__inner">
        <p className="closing__eyebrow closing__enter closing__enter--1">
          {closing.eyebrow}
        </p>

        <h2 className="closing__title closing__enter closing__enter--2">
          {closing.title}
        </h2>

        <div className="closing__ornament closing__enter closing__enter--3" aria-hidden="true">
          <span className="closing__ornament-line" />
          <span className="closing__ornament-dot" />
          <span className="closing__ornament-line" />
        </div>

        <p className="closing__message closing__enter closing__enter--4">
          {closing.message}
        </p>

        <p className="closing__signature closing__enter closing__enter--5">
          {closing.signature}
        </p>

        <footer className="closing__studio closing__enter closing__enter--6">
          <div className="closing__studio-rule" aria-hidden="true" />
          <p className="closing__studio-credit">{studio.credit}</p>
          <img
            className="closing__studio-logo"
            src={studio.logo}
            alt={`${studio.name} — استوديو دعوات رقمية`}
          />
        </footer>
      </div>
    </section>
  )
}

export default Closing
