import { useState } from 'react'

const videos = [
  { id: '1', title: 'I Built a 3D YouTube Clone with React Three Fiber', channel: 'Web Dev Pro', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#FF0000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="white" font-size="22" font-family="sans-serif" font-weight="bold">W</text></svg>'), views: '2.1M views', time: '3 days ago', duration: '14:32', verified: true },
  { id: '2', title: 'The Future of Web Graphics is 3D', channel: 'Tech Vision', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#0F0F0F"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#00AAFF" font-size="22" font-family="sans-serif" font-weight="bold">T</text></svg>'), views: '856K views', time: '1 week ago', duration: '8:45' },
  { id: '3', title: 'React Three Fiber Tutorial - Build 3D Websites', channel: 'Code Academy', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#1a1a2e"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#00FF88" font-size="20" font-family="sans-serif" font-weight="bold">C</text></svg>'), views: '1.5M views', time: '2 weeks ago', duration: '22:10', verified: true },
  { id: '4', title: 'Best 3D Websites of 2026 - Gallery', channel: 'Design Daily', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#2d1b69"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#FF6B6B" font-size="22" font-family="sans-serif" font-weight="bold">D</text></svg>'), views: '423K views', time: '5 days ago', duration: '6:30' },
  { id: '5', title: 'Three.js vs React Three Fiber - Which to Choose?', channel: 'Dev Simplified', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#1a1a2e"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#FFD700" font-size="18" font-family="sans-serif" font-weight="bold">D</text></svg>'), views: '987K views', time: '1 month ago', duration: '12:20', verified: true },
  { id: '6', title: 'Creating Immersive 3D UI Components', channel: 'UI Lab', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#3d0000"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#FF4444" font-size="20" font-family="sans-serif" font-weight="bold">U</text></svg>'), views: '654K views', time: '3 weeks ago', duration: '18:45' },
  { id: '7', title: 'How to Optimize 3D Performance in Browser', channel: 'Performance First', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#0a2a0a"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#44FF44" font-size="18" font-family="sans-serif" font-weight="bold">P</text></svg>'), views: '345K views', time: '2 days ago', duration: '9:15' },
  { id: '8', title: 'Building a 3D Portfolio with Three.js', channel: 'Creative Dev', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#2a1a0a"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#FFAA00" font-size="20" font-family="sans-serif" font-weight="bold">C</text></svg>'), views: '1.2M views', time: '1 week ago', duration: '15:00', verified: true },
  { id: '9', title: '3D CSS Magic - Transform Your UI', channel: 'CSS Wizards', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#1a0a2a"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#CC66FF" font-size="18" font-family="sans-serif" font-weight="bold">C</text></svg>'), views: '890K views', time: '4 days ago', duration: '7:50' },
  { id: '10', title: 'WebGL for Beginners - Complete Course', channel: 'Learn WebGL', avatar: 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="#0a1a2a"/><text x="50%" y="55%" text-anchor="middle" dominant-baseline="middle" fill="#66CCFF" font-size="18" font-family="sans-serif" font-weight="bold">W</text></svg>'), views: '2.3M views', time: '3 weeks ago', duration: '45:20', verified: true },
]

const thumbColors = [
  '#FF4444', '#0066FF', '#00AA55', '#8833CC', '#FF8800',
  '#CC2222', '#22AA44', '#DD6600', '#6633CC', '#3388DD',
]

const iconPaths: Record<string, React.ReactNode> = {
  menu: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  search: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  ),
  videoCall: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>
    </svg>
  ),
  notifications: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  ),
  microphone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
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
  const node = iconPaths[icon] || iconPaths['search']
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

function VideoGrid() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [preview, setPreview] = useState(false)

  const handleEnter = (idx: number) => { setHovered(idx); setPreview(true) }
  const handleLeave = () => { setHovered(null); setPreview(false) }

  return (
    <div className="yt-video-grid">
      {videos.map((video, idx) => (
        <div
          key={video.id}
          className="yt-video-card yt-3d-card"
          onMouseEnter={() => handleEnter(idx)}
          onMouseLeave={handleLeave}
          onFocus={() => handleEnter(idx)}
          onBlur={handleLeave}
          tabIndex={0}
          role="button"
          aria-label={video.title}
        >
          <div className="yt-video-thumb-wrap yt-3d">
            <div
              className="yt-video-thumb"
              style={{ background: `linear-gradient(135deg, ${thumbColors[idx]}, ${thumbColors[idx]}88)` }}
            >
              <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
                <text x="160" y="80" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.12)" fontFamily="sans-serif" fontSize="36" fontWeight="bold">
                  {video.duration}
                </text>
              </svg>
            </div>
            <span className="yt-video-duration">{video.duration}</span>
            <div className="yt-video-play-overlay">
              <div className="yt-play-icon-yt-3d">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="white" stroke="none">
                  <polygon points="8,5 19,12 8,19"/>
                </svg>
              </div>
            </div>
            {idx === 4 && (
              <div className="yt-video-trending-badge yt-3d">
                <svg viewBox="0 0 24 24" width="8" height="8" fill="white" style={{ marginRight: 3, verticalAlign: 'middle' }}>
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                TRENDING
              </div>
            )}
          </div>

          <div className="yt-video-info yt-3d-depth">
            <div className="yt-video-info-top">
              <img src={video.avatar} alt={video.channel} className="yt-avatar yt-3d" style={{ width: 28, height: 28 }} loading="lazy" />
              <div className="yt-video-meta">
                <div className="yt-video-channel-row">
                  <span className="yt-video-channel">
                    {video.channel}
                    {video.verified && (
                      <svg className="yt-verified" viewBox="0 0 20 20" width="12" height="12" fill="#AAAAAA">
                        <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 12h-2v-2h2v2zm0-4h-2V8h2v4z"/>
                      </svg>
                    )}
                  </span>
                  <button className="yt-video-menu-btn yt-3d-hover yt-icon-btn" title="More options">
                    <IconButton icon="menu" size={16} />
                  </button>
                </div>
                <span className="yt-video-views">{video.views} &bull; {video.time}</span>
              </div>
            </div>
            <h3 className="yt-video-title">{video.title}</h3>
          </div>
        </div>
      ))}
      {preview && hovered !== null && (
        <div className="yt-video-preview-panel yt-3d-panel">
          <div className="yt-preview-header">
            <h3 className="yt-preview-title">{videos[hovered].title}</h3>
          </div>
          <div className="yt-preview-content">
            <div className="yt-preview-thumb yt-3d">
              <div style={{ position: 'relative', padding: '56.25% 0 0 0' }}>
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${thumbColors[hovered]}, ${thumbColors[hovered]}88)` }}>
                  <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', inset: 0 }}>
                    <text x="160" y="80" textAnchor="middle" dominantBaseline="middle" fill="rgba(255,255,255,0.12)" fontFamily="sans-serif" fontSize="36" fontWeight="bold">
                      {videos[hovered].duration}
                    </text>
                  </svg>
                </div>
              </div>
              <div className="yt-preview-play-3d">
                <svg viewBox="0 0 24 24" width="52" height="52" fill="white" stroke="none">
                  <polygon points="8,5 19,12 8,19"/>
                </svg>
              </div>
            </div>
            <div className="yt-preview-info">
              <img src={videos[hovered].avatar} alt={videos[hovered].channel} className="yt-avatar yt-3d" style={{ width: 44, height: 44 }} />
              <div>
                <span className="yt-preview-channel">
                  {videos[hovered].channel}
                  {videos[hovered].verified && (
                    <svg className="yt-verified-lg" viewBox="0 0 20 20" width="14" height="14" fill="#AAAAAA">
                      <path d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 12h-2v-2h2v2zm0-4h-2V8h2v4z"/>
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <div className="yt-preview-actions">
              <button className="yt-preview-action-btn yt-3d-hover" title="Like">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <button className="yt-preview-action-btn yt-3d-hover" title="Dislike">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M14 18a5.5 5.5 0 0 1-5.5-5.5l2-2a5.5 5.5 0 0 1 7.78 0l2 2A5.5 5.5 0 0 1 14 18z"/>
                </svg>
              </button>
              <button className="yt-preview-action-btn yt-3d-hover" title="Share">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </button>
              <button className="yt-preview-action-btn yt-3d-hover" title="Download">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </button>
              <button className="yt-preview-action-btn yt-3d-hover" title="Save">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
              <button className="yt-preview-action-btn yt-3d-hover yt-preview-more-btn" title="More">
                <IconButton icon="menu" size={16} />
              </button>
            </div>
            <p className="yt-preview-desc">
              Watch this video from {videos[hovered].channel}. Discover the latest in web development, 3D graphics, and creative coding.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default VideoGrid
