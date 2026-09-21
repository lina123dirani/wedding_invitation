import weddingData from '../data/weddingData'
import '../styles/OpeningScreen.css'

function OpeningScreen({ isExiting, onOpen, onExitComplete }) {
  const { couple, date, copy, images } = weddingData
  const envelope = images.envelope

  const handleOpen = () => {
    if (isExiting) return
    onOpen?.()
  }

  const handleAnimationEnd = (event) => {
    if (event.target !== event.currentTarget) return
    if (isExiting && event.animationName === 'opening-stage-exit') {
      onExitComplete?.()
    }
  }

  return (
    <section
      className={`opening-screen${isExiting ? ' opening-screen--exiting' : ''}`}
      aria-label="دعوة زفاف مغلقة"
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="opening-screen__stage">
        <div className="envelope">
          {/* Card sits inside the pocket and is drawn out slowly */}
          <div className="envelope__pocket" aria-hidden={!isExiting}>
            <div className="envelope__card">
              <img
                className="envelope__card-art"
                src={envelope.card}
                alt=""
                draggable={false}
              />
              <div className="envelope__card-copy">
                <p className="envelope__card-eyebrow">{copy.heroEyebrow}</p>
                <h1
                  className="envelope__card-names"
                  aria-label={`${couple.bride} و ${couple.groom}`}
                >
                  <span>{couple.bride}</span>
                  <span className="envelope__card-amp" aria-hidden="true">
                    و
                  </span>
                  <span>{couple.groom}</span>
                </h1>
                <div className="envelope__card-rule" aria-hidden="true" />
                <p className="envelope__card-date">
                  <time dateTime={date.iso}>{date.display}</time>
                </p>
              </div>
            </div>
          </div>

          <img
            className="envelope__flap envelope__flap--bottom"
            src={envelope.flapBottom}
            alt=""
            draggable={false}
          />
          <img
            className="envelope__flap envelope__flap--left"
            src={envelope.flapLeft}
            alt=""
            draggable={false}
          />
          <img
            className="envelope__flap envelope__flap--right"
            src={envelope.flapRight}
            alt=""
            draggable={false}
          />

          <div className="envelope__flap-top">
            <img
              className="envelope__flap envelope__flap--top-face"
              src={envelope.flapTop}
              alt=""
              draggable={false}
            />
            <span className="envelope__flap-top-back" aria-hidden="true" />
          </div>

          <img
            className="envelope__assembled"
            src={envelope.assembled}
            alt=""
            draggable={false}
          />

          <button
            type="button"
            className="envelope__seal"
            onClick={handleOpen}
            disabled={isExiting}
            aria-label={copy.openInvitationAria}
          >
            <span className="envelope__seal-pulse" aria-hidden="true" />
            <img src={envelope.seal} alt="" draggable={false} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OpeningScreen
