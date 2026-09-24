import React, { useState } from 'react'

const iconPaths: Record<string, React.ReactNode> = {
  menu: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  microphone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  videoCall: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
  notifications: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
}

function IconButton({
  icon,
  size = 20,
  className = '',
  style,
}: {
  icon: string
  size?: number
  className?: string
  style?: React.CSSProperties
}) {
  const node = iconPaths[icon] || iconPaths['menu']
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        flexShrink: 0,
        color: 'inherit',
        ...style,
      }}
    >
      {node}
    </span>
  )
}

function Header() {
  const [search, setSearch] = useState('')

  const handleSearch = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    if (search.trim()) {
      alert(`Searching for: ${search}`)
      setSearch('')
    }
  }
  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <header className="yt-header">
      <div className="yt-header-left">
        <button className="yt-header-menu-btn" title="Menu">
          <IconButton icon="menu" size={22} />
        </button>

        <div className="yt-header-search">
          <div className="yt-search-box">
            <span className="yt-search-icon">
              <IconButton icon="search" size={18} />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearchEnter}
              className="yt-search-input"
            />
            <button className="yt-search-btn" onClick={handleSearch} title="Search">
              <IconButton icon="search" size={18} />
            </button>
          </div>
        </div>

        <div className="yt-header-actions">
          <button className="yt-header-action-btn" title="Voice search">
            <IconButton icon="microphone" size={20} />
          </button>
          <button className="yt-upload-btn yt-3d-raised" title="Create">
            <IconButton icon="videoCall" size={16} />
            <span className="yt-upload-text">Create</span>
          </button>
          <button className="yt-header-action-btn" title="Notifications">
            <IconButton icon="notifications" size={20} />
          </button>

          <button className="yt-user-menu" title="Account">
            <div className="yt-user-avatar">
              <svg viewBox="0 0 24 24" width="28" height="28">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#626262"/>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="yt-header-center">
        <div className="yt-header-tabs">
          <button className="yt-header-tab yt-header-tab-active">Home</button>
          <button className="yt-header-tab">Explore</button>
          <button className="yt-header-tab">Subscriptions</button>
          <button className="yt-header-tab">Library</button>
        </div>
      </div>
    </header>
  )
}

export default Header
