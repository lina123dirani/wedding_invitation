import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useInView from '../hooks/useInView'
import '../styles/RSVP.css'

function buildWhatsAppUrl(phoneNumber, message) {
  const normalizedNumber = String(phoneNumber).replace(/[^\d]/g, '')
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`
}

function RSVP() {
  const { rsvp } = weddingData
  const [sectionRef, isInView] = useInView({ threshold: 0.22 })

  const acceptUrl = buildWhatsAppUrl(rsvp.whatsappNumber, rsvp.acceptMessage)
  const declineUrl = buildWhatsAppUrl(rsvp.whatsappNumber, rsvp.declineMessage)

  return (
    <section
      ref={sectionRef}
      className={`rsvp${isInView ? ' rsvp--in-view' : ''}`}
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
          <p className="rsvp__eyebrow rsvp__enter rsvp__enter--1">{rsvp.eyebrow}</p>

          <h2 className="rsvp__title rsvp__enter rsvp__enter--2">{rsvp.title}</h2>

          <p className="rsvp__description rsvp__enter rsvp__enter--3">
            {rsvp.description}
          </p>

          <div className="rsvp__rule rsvp__enter rsvp__enter--4" aria-hidden="true" />

          <p className="rsvp__deadline rsvp__enter rsvp__enter--5">{rsvp.deadline}</p>

          <div className="rsvp__actions rsvp__enter rsvp__enter--6">
            <a
              className="ui-btn ui-btn--on-dark rsvp__btn"
              href={acceptUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${rsvp.acceptLabel} — يفتح واتساب`}
            >
              <span className="ui-btn__label">{rsvp.acceptLabel}</span>
            </a>

            <a
              className="ui-btn ui-btn--on-dark rsvp__btn"
              href={declineUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${rsvp.declineLabel} — يفتح واتساب`}
            >
              <span className="ui-btn__label">{rsvp.declineLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RSVP
