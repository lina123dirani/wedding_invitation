/**
 * Toggles true/false as the element enters or leaves the viewport.
 * Useful for reversible scroll animations.
 */
import { useEffect, useRef, useState } from 'react'

function useInViewToggle({
  threshold = 0.2,
  rootMargin = '0px 0px -12% 0px',
} = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isInView]
}

export default useInViewToggle
