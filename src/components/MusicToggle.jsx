import { useEffect, useRef, useState } from 'react'
import weddingData from '../data/weddingData'
import '../styles/MusicToggle.css'

function MusicToggle() {
  const audioRef = useRef(null)
  const unlockedRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const { copy, images } = weddingData

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.55

    const markPlaying = () => setIsPlaying(true)
    const markPaused = () => setIsPlaying(false)

    audio.addEventListener('play', markPlaying)
    audio.addEventListener('pause', markPaused)

    const tryPlay = async () => {
      if (unlockedRef.current) return
      try {
        await audio.play()
        unlockedRef.current = true
      } catch {
        // Browsers block autoplay with sound until the guest taps once.
      }
    }

    const unlockOnGesture = async () => {
      if (unlockedRef.current) return
      try {
        await audio.play()
        unlockedRef.current = true
        window.removeEventListener('pointerdown', unlockOnGesture)
        window.removeEventListener('keydown', unlockOnGesture)
      } catch {
        // Keep listening until a gesture successfully starts playback.
      }
    }

    tryPlay()
    window.addEventListener('pointerdown', unlockOnGesture)
    window.addEventListener('keydown', unlockOnGesture)

    return () => {
      audio.removeEventListener('play', markPlaying)
      audio.removeEventListener('pause', markPaused)
      window.removeEventListener('pointerdown', unlockOnGesture)
      window.removeEventListener('keydown', unlockOnGesture)
    }
  }, [])

  const handleToggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      await audio.play()
      unlockedRef.current = true
    } catch {
      setIsPlaying(false)
    }
  }

  return (
    <div className="music-toggle">
      <audio ref={audioRef} src={images.weddingSong} loop preload="auto" />
      <button
        type="button"
        className={`music-toggle__btn${isPlaying ? ' music-toggle__btn--on' : ''}`}
        onClick={handleToggle}
        aria-label={isPlaying ? copy.musicMute : copy.musicPlay}
        aria-pressed={isPlaying}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="music-toggle__icon">
            <path
              fill="currentColor"
              d="M3 10v4h4l5 5V5L7 10H3zm13.5 2a4.5 4.5 0 0 0-2.3-3.9v7.8A4.5 4.5 0 0 0 16.5 12zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" className="music-toggle__icon">
            <path
              fill="currentColor"
              d="M16.5 12a4.5 4.5 0 0 0-2.3-3.9v2.2l2.2 2.2c.05-.16.1-.33.1-.5zM19 12c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.9 8.9 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a9 9 0 0 0 3.69-1.81L19.73 21 21 19.73 12 10.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}

export default MusicToggle
