import React from 'react'

const iconPaths: Record<string, React.ReactElement> = {
  menu: <>
    <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="12" x2="17" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="3" y1="18" x2="17" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  search: <>
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  microphone: <>
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" fill="currentColor" stroke="none"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="23" x2="16" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  videoCall: <>
    <path d="M23 7l-7 5 7 5V7z" fill="currentColor" stroke="none"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2"/>
  </>,
  camera: <>
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="13" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
  </>,
  notifications: <>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeWidth="2"/>
  </>,
  like: <>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" stroke="none"/>
  </>,
  dislike: <>
    <path d="M14 18a5.5 5.5 0 0 1-5.5-5.5l2-2a5.5 5.5 0 0 1 7.78 0l2 2A5.5 5.5 0 0 1 14 18z" fill="currentColor" stroke="none"/>
  </>,
  share: <>
    <circle cx="18" cy="5" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="6" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <circle cx="18" cy="19" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  download: <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <polyline points="7 10 12 15 17 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="15" x2="12" y2="3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  save: <>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  playCircle: <div className="yt-play-circle">
    <svg viewBox="0 0 24 24" width="20" height="20">
      <polygon points="8,5 19,12 8,19" fill="currentColor"/>
    </svg>
  </div>,
  clock: <>
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <polyline points="12 6 12 12 16 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  bell: <>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0" fill="none" stroke="currentColor" strokeWidth="2"/>
  </>,
  bookmark: <>
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </>,
  cloud: <>
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="none" stroke="currentColor" strokeWidth="2"/>
  </>,
  heart: <>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" stroke="none"/>
  </>,
}

interface IconButtonProps {
  icon: string
  size?: number
  className?: string
  style?: React.CSSProperties
  whileHover?: { scale?: number; backgroundColor?: string }
  whileTap?: { scale?: number }
  onClick?: () => void
}

function IconButton({
  icon,
  size = 20,
  className = '',
  style,
  whileHover = { scale: 1.15 },
  whileTap = { scale: 0.9 },
  onClick,
}: IconButtonProps) {
  const iconNode = iconPaths[icon] || iconPaths['menu']

  return (
    <div
      className={`icon-button yt-3d-hover ${className}`}
      style={{
        width: size + 8,
        height: size + 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = `scale(${whileHover?.scale ?? 1.15})`
        if (whileHover?.backgroundColor) {
          (el as HTMLDivElement).style.backgroundColor = whileHover.backgroundColor
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = 'scale(1)'
        el.style.backgroundColor = ''
      }}
      onClick={onClick}
      onMouseDown={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = `scale(${whileTap?.scale ?? 0.9})`
      }}
      onMouseUp={(e) => {
        const el = e.currentTarget as HTMLDivElement
        el.style.transform = `scale(${whileHover?.scale ?? 1.15})`
      }}
    >
      <span style={{ fontSize: size, lineHeight: 1, display: 'flex', alignItems: 'center' }}>
        {iconNode}
      </span>
    </div>
  )
}

export default IconButton
