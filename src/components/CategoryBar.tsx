import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = ['All', 'Music', 'Gaming', 'Live', 'News', 'Sports', 'Learning', 'Fashion & Beauty', 'Tech', 'Science', 'Podcasts']

function CategoryBar() {
  const [active, setActive] = useState('All')

  return (
    <motion.div
      className="yt-category-bar"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      <button
        className={`yt-category-chip ${active === 'All' ? 'active-3d' : ''}`}
        onClick={() => setActive('All')}
      >
        All
      </button>
      {categories.slice(1).map((cat) => (
        <button
          key={cat}
          className={`yt-category-chip ${active === cat ? 'active-3d' : ''}`}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
      <button className="yt-category-show-more">
        <i className="fa-solid fa-arrow-down" />
      </button>
    </motion.div>
  )
}

export default CategoryBar
