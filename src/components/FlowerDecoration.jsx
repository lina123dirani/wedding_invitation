import { useEffect, useState } from 'react'
import weddingData from '../data/weddingData'
import '../styles/FlowerDecoration.css'

/**
 * Signature botanical motif — one asset, many compositions.
 */
function FlowerDecoration({
  className = '',
  size = 'md',
  rotate = 0,
  opacity,
  flip = false,
  flipY = false,
  style = {},
}) {
  const src = weddingData.images.flower
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    setReady(false)

    const preload = new window.Image()
    preload.onload = () => {
      if (!cancelled) setReady(true)
    }
    preload.onerror = () => {
      if (!cancelled) setReady(false)
    }
    preload.src = src

    return () => {
      cancelled = true
      preload.onload = null
      preload.onerror = null
    }
  }, [src])

  if (!ready) return null

  const sizeClass = `flower-decoration--${size}`
  const flipClass = [
    flip ? 'flower-decoration--flip-x' : '',
    flipY ? 'flower-decoration--flip-y' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      className={`flower-decoration ${sizeClass} ${flipClass} ${className}`.trim()}
      src={src}
      alt=""
      aria-hidden="true"
      decoding="async"
      loading="lazy"
      style={{
        ...(opacity != null ? { '--flower-opacity': opacity } : null),
        '--flower-rotate': `${rotate}deg`,
        ...style,
      }}
    />
  )
}

export default FlowerDecoration
