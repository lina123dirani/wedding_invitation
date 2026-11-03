import { useState } from 'react'
import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/RSVP.css'

function RSVP() {
  const { rsvp } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.22 })
  const [response, setResponse] = useState(null)

  const isAccepted = response === 'accept'
  const thanksTitle = isAccepted ? rsvp.acceptThanksTitle : rsvp.declineThanksTitle
  const thanksMessage = isAccepted
    ? rsvp.acceptThanksMessage
    : rsvp.declineThanksMessage

  return (
    <section
      ref={sectionRef}
      className={`rsvp${isInView ? ' rsvp--in-view' : ''}${response ? ' rsvp--answered' : ''}`}
      aria-label="تأكيد الحضور"
    >
      <div className="rsvp__atmosphere" aria-hidden="true" />
      <div className="organic-blob organic-blob--blush rsvp__blob" aria-hidden="true" />
      <VineDecoration
        className="rsvp__vine"
        variant="branch"
        size="md"
        rotate={-14}
        opacity={0.22}
        flip
      />

      <div className="rsvp__inner">
        <div className="rsvp__panel">
          {!response ? (
            <>
              <p className="rsvp__eyebrow rsvp__enter rsvp__enter--1">{rsvp.eyebrow}</p>

              <h2 className="rsvp__title rsvp__enter rsvp__enter--2">{rsvp.title}</h2>

              <p className="rsvp__description rsvp__enter rsvp__enter--3">
                {rsvp.description}
              </p>

              <div className="rsvp__rule rsvp__enter rsvp__enter--4" aria-hidden="true" />

              <p className="rsvp__deadline rsvp__enter rsvp__enter--5">{rsvp.deadline}</p>

              <div className="rsvp__actions rsvp__enter rsvp__enter--6">
                <button
                  type="button"
                  className="ui-btn ui-btn--on-dark rsvp__btn"
                  onClick={() => setResponse('accept')}
                >
                  <span className="ui-btn__label">{rsvp.acceptLabel}</span>
                </button>

                <button
                  type="button"
                  className="ui-btn ui-btn--on-dark rsvp__btn"
                  onClick={() => setResponse('decline')}
                >
                  <span className="ui-btn__label">{rsvp.declineLabel}</span>
                </button>
              </div>
            </>
          ) : (
            <div className="rsvp__thanks" role="status" aria-live="polite">
              <p className="rsvp__thanks-eyebrow">{rsvp.eyebrow}</p>
              <h2 className="rsvp__thanks-title">{thanksTitle}</h2>
              <div className="rsvp__rule" aria-hidden="true" />
              <p className="rsvp__thanks-message">{thanksMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RSVP
