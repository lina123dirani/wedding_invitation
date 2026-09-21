import weddingData from '../data/weddingData'
import '../styles/VineDecoration.css'

/**
 * Embroidered rose vine motifs for section accents.
 */
function VineDecoration({
  className = '',
  variant = 'branch',
  size = 'md',
  rotate = 0,
  opacity,
  flip = false,
  flipY = false,
  style = {},
}) {
  const src =
    variant === 'symmetric'
      ? weddingData.images.vineSymmetric
      : weddingData.images.vineBranch

  const sizeClass = `vine-decoration--${size}`
  const flipClass = [
    flip ? 'vine-decoration--flip-x' : '',
    flipY ? 'vine-decoration--flip-y' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <img
      className={`vine-decoration ${sizeClass} ${flipClass} ${className}`.trim()}
      src={src}
      alt=""
      aria-hidden="true"
      decoding="async"
      loading="lazy"
      style={{
        ...(opacity != null ? { '--vine-opacity': opacity } : null),
        '--vine-rotate': `${rotate}deg`,
        ...style,
      }}
    />
  )
}

export default VineDecoration
