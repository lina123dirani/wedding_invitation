/**
 * Live countdown until a local-calendar wedding date (YYYY-MM-DD).
 */
import { useEffect, useState } from 'react'

function parseLocalDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day, 0, 0, 0, 0)
}

function getTimeRemaining(isoDate) {
  const target = parseLocalDate(isoDate).getTime()
  const now = Date.now()
  const diff = target - now

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isComplete: true,
    }
  }

  const totalSeconds = Math.floor(diff / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days,
    hours,
    minutes,
    seconds,
    isComplete: false,
  }
}

function useCountdown(isoDate) {
  const [remaining, setRemaining] = useState(() => getTimeRemaining(isoDate))

  useEffect(() => {
    const tick = () => setRemaining(getTimeRemaining(isoDate))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [isoDate])

  return remaining
}

export default useCountdown
