import React from 'react'

const sidebarItems = [
  { label: 'Home', icon: 'search', active: true },
  { label: 'Shorts', icon: 'playCircle', active: false },
  { label: 'Subscriptions', icon: 'bell', active: false },
  { label: 'Library', icon: 'bookmark', active: false },
  { label: 'History', icon: 'clock', active: false },
  { label: 'Your Videos', icon: 'cloud', active: false },
  { label: 'Watch Later', icon: 'clock', active: false },
  { label: 'Liked Videos', icon: 'heart', active: false },
]

const iconPaths: Record<string, React.ReactNode> = {
  menu: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  search: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  playCircle: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none"><circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="2"/><polygon points="8,5 19,12 8,19"/></svg>,
  bell: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  bookmark: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>,
  clock: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  cloud: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  heart: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  settings: <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
}

export default function Sidebar() {
  return (
    <nav className="yt-sidebar">
      <div className="yt-sidebar-logo">
        <svg width="28" height="20" viewBox="0 0 228 72">
          <g transform="translate(0,4)">
            <rect width="188" height="64" rx="4" fill="#FF0000"/>
            <polygon points="44,0 98,0 119,32 98,64 44,64" fill="#282828"/>
          </g>
        </svg>
      </div>

      <div className="yt-sidebar-section">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={`yt-sidebar-item yt-3d ${item.active ? 'active-3d' : ''}`}
          >
            <span className="yt-sidebar-icon">
              {iconPaths[item.icon] || iconPaths['menu']}
            </span>
            <span className="yt-sidebar-label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="yt-sidebar-bottom">
        <button className="yt-sidebar-item yt-3d yt-sidebar-create">
          <span className="yt-sidebar-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
              <path d="M14 2v6h6"/>
            </svg>
          </span>
          <span className="yt-sidebar-label">Create</span>
        </button>

        <div className="yt-sidebar-divider" />

        <button className="yt-sidebar-item yt-3d yt-sidebar-settings">
          <span className="yt-sidebar-icon">
            {iconPaths['settings']}
          </span>
          <span className="yt-sidebar-label">Settings</span>
        </button>

        <div className="yt-sidebar-divider" />

        <p className="yt-sidebar-about">
          About &bull; Press &bull; Copyright &bull; Contact us &bull; Creators &bull; Advertising &bull; Developers
        </p>
        <p className="yt-sidebar-terms">
          Terms &bull; Privacy &bull; Policy &amp; Safety &bull; How YouTube works &bull; Test new features
        </p>
        <p className="yt-sidebar-copyright">
          Copyright &copy; 2026 YouTube 3D Clone
        </p>
      </div>
    </nav>
  )
}