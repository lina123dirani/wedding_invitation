import weddingData from '../data/weddingData'
import '../styles/Hero.css'

function Hero({ isActive = false, isTransitioning = false }) {
  const { couple, date, copy, images } = weddingData

  const stateClass = [
    isActive ? 'hero--revealed' : '',
    isTransitioning ? 'hero--awakening' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section
      className={`hero ${stateClass}`.trim()}
      aria-label="دعوة الزفاف"
      aria-hidden={!isActive}
    >
      <div className="hero__ambiance" aria-hidden="true" />
      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__card">
        <img
          className="hero__card-art"
          src={images.envelope.card}
          alt=""
          draggable={false}
        />

        <div className="hero__composition">
          <p className="hero__eyebrow hero__reveal hero__reveal--1">
            {copy.heroEyebrow}
          </p>

          <div
            className="hero__masthead"
            aria-label={`${couple.bride} و ${couple.groom}`}
          >
            <h1 className="hero__names hero__reveal hero__reveal--2">
              <span className="hero__name">{couple.bride}</span>
              <span className="hero__ampersand" aria-hidden="true">
                و
              </span>
              <span className="hero__name">{couple.groom}</span>
            </h1>
          </div>

          <div className="hero__rule hero__reveal hero__reveal--3" aria-hidden="true" />

          <p className="hero__date hero__reveal hero__reveal--4">
            <time dateTime={date.iso}>{date.display}</time>
          </p>

          <p className="hero__invite hero__reveal hero__reveal--5">{copy.heroInvite}</p>
        </div>
      </div>

      <div className="hero__scroll hero__reveal hero__reveal--6">
        <span className="hero__scroll-label">{copy.scrollHint}</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
