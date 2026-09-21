import VineDecoration from '../components/VineDecoration'
import weddingData from '../data/weddingData'
import useCountdown from '../hooks/useCountdown'
import useInView from '../hooks/useInView'
import '../styles/WeddingDate.css'

function padTime(value) {
  return String(value).padStart(2, '0')
}

function WeddingDate() {
  const { date, copy } = weddingData
  const remaining = useCountdown(date.iso)
  const [sectionRef, isInView] = useInView()

  const units = [
    { value: String(remaining.days), label: copy.countdownLabels.days },
    { value: padTime(remaining.hours), label: copy.countdownLabels.hours },
    { value: padTime(remaining.minutes), label: copy.countdownLabels.minutes },
    { value: padTime(remaining.seconds), label: copy.countdownLabels.seconds },
  ]

  return (
    <section
      ref={sectionRef}
      className={`wedding-date${isInView ? ' wedding-date--in-view' : ''}`}
      aria-label="Wedding date and countdown"
    >
      <div className="wedding-date__atmosphere" aria-hidden="true" />
      <div className="organic-blob organic-blob--blush wedding-date__blob" aria-hidden="true" />
      <VineDecoration
        className="wedding-date__vine"
        variant="branch"
        size="md"
        rotate={-18}
        opacity={0.42}
      />

      <div className="wedding-date__inner">
        <p className="wedding-date__heading wedding-date__enter wedding-date__enter--1">
          {copy.weddingDayHeading}
        </p>

        <div className="wedding-date__calendar wedding-date__enter wedding-date__enter--2">
          <span className="wedding-date__day">{date.day}</span>
          <span className="wedding-date__month">{date.month}</span>
          <span className="wedding-date__year">{date.year}</span>
        </div>

        <div className="wedding-date__rule wedding-date__enter wedding-date__enter--3" aria-hidden="true" />

        {remaining.isComplete ? (
          <p className="wedding-date__arrived wedding-date__enter wedding-date__enter--4">
            {copy.dayArrived}
          </p>
        ) : (
          <div
            className="wedding-date__countdown wedding-date__enter wedding-date__enter--4"
            aria-live="polite"
            aria-atomic="true"
          >
            {units.map((unit) => (
              <div key={unit.label} className="wedding-date__unit">
                <span className="wedding-date__value">{unit.value}</span>
                <span className="wedding-date__label">{unit.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default WeddingDate
