import { useRef } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import CategoryBar from './components/CategoryBar'
import VideoGrid from './components/VideoGrid'

function App() {
  const rootRef = useRef<HTMLDivElement>(null)

  return (
    <div className="app" ref={rootRef}>
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="content">
          <CategoryBar />
          <VideoGrid />
        </main>
      </div>
    </div>
  )
}

export default App
