import { useEffect, useRef } from 'react'
import weddingData from '../data/weddingData'

function OpenInvitationButton({ label, onClick, disabled = false }) {
  const { waxSeal, waxSealVideo } = weddingData.images
  const videoRef = useRef(null)
  const openedRef = useRef(false)
  const onClickRef = useRef(onClick)
  const disabledRef = useRef(disabled)

  useEffect(() => {
    onClickRef.current = onClick
  }, [onClick])

  useEffect(() => {
    disabledRef.current = disabled
  }, [disabled])

  const openInvitation = () => {
    if (disabledRef.current || openedRef.current) return
    openedRef.current = true
    onClickRef.current?.()
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      openInvitation()
    }

    video.addEventListener('ended', handleEnded)

    if (disabled) {
      video.pause()
    } else {
      video.currentTime = 0
      const play = video.play()
      if (play && typeof play.catch === 'function') {
        play.catch(() => {})
      }
    }

    return () => {
      video.removeEventListener('ended', handleEnded)
    }
  }, [disabled])

  return (
    <button
      type="button"
      className="opening-open"
      onClick={openInvitation}
      disabled={disabled}
      aria-label="Open wedding invitation"
    >
      <video
        ref={videoRef}
        className="opening-open__video"
        src={waxSealVideo}
        poster={waxSeal}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <span className="opening-open__veil" aria-hidden="true" />
      <span className="opening-open__label">{label}</span>
    </button>
  )
}

export default OpenInvitationButton
