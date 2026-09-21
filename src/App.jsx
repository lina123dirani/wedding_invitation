import { useEffect, useState } from 'react'
import OpeningScreen from './components/OpeningScreen'
import Hero from './sections/Hero'
import WeddingDate from './sections/WeddingDate'
import OurStory from './sections/OurStory'
import WeddingTimeline from './sections/WeddingTimeline'
import Gallery from './sections/Gallery'
import Venue from './sections/Venue'
import DressCode from './sections/DressCode'
import RSVP from './sections/RSVP'
import Closing from './sections/Closing'
import weddingData from './data/weddingData'
import './styles/App.css'

function App() {
  const [isExiting, setIsExiting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { bride, groom } = weddingData.couple
  const pageTitleSuffix = weddingData.copy.pageTitleSuffix
  const isRevealing = isExiting || isOpen

  useEffect(() => {
    document.title = `${bride} و ${groom} — ${pageTitleSuffix}`
  }, [bride, groom, pageTitleSuffix])

  useEffect(() => {
    document.body.classList.toggle('invitation-locked', !isOpen)
    return () => document.body.classList.remove('invitation-locked')
  }, [isOpen])

  const handleOpen = () => {
    if (isExiting || isOpen) return
    setIsExiting(true)
  }

  const handleExitComplete = () => {
    setIsOpen(true)
    setIsExiting(false)
  }

  return (
    <div className={`app-shell${isRevealing ? ' app-shell--open' : ''}`}>
      <main className="invitation">
        <Hero isActive={isRevealing} isTransitioning={isExiting} />
        <WeddingDate />
        <OurStory />
        <WeddingTimeline />
        <Gallery />
        <Venue />
        <DressCode />
        <RSVP />
        <Closing />
      </main>

      {!isOpen && (
        <OpeningScreen
          isExiting={isExiting}
          onOpen={handleOpen}
          onExitComplete={handleExitComplete}
        />
      )}
    </div>
  )
}

export default App
