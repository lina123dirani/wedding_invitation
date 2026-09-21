import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/DressCode.css'

function DressCode() {
  const { dressCode } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.25 })

  return (
    <section
      ref={sectionRef}
      className={`dress-code${isInView ? ' dress-code--in-view' : ''}`}
      aria-label="Dress code"
    >
      <div className="dress-code__atmosphere" aria-hidden="true" />
      <div className="organic-blob organic-blob--peach dress-code__blob" aria-hidden="true" />
      <VineDecoration
        className="dress-code__vine"
        variant="symmetric"
        size="lg"
        rotate={-8}
        opacity={0.36}
      />

      <div className="dress-code__inner">
        <p className="dress-code__eyebrow dress-code__enter dress-code__enter--1">
          {dressCode.eyebrow}
        </p>

        <h2 className="dress-code__title dress-code__enter dress-code__enter--2">
          {dressCode.title}
        </h2>

        <div className="dress-code__rule dress-code__enter dress-code__enter--3" aria-hidden="true" />

        <p className="dress-code__description dress-code__enter dress-code__enter--4">
          {dressCode.description}
        </p>

        <p className="dress-code__attire dress-code__enter dress-code__enter--5">
          {dressCode.attire}
        </p>
      </div>
    </section>
  )
}

export default DressCode
