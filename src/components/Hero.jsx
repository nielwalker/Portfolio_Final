import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const fullName = 'Niel'
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout
    if (!isDeleting) {
      if (index < fullName.length) {
        timeout = setTimeout(() => setIndex(index + 1), 200)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 800)
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => setIndex(index - 1), 200)
      } else {
        timeout = setTimeout(() => setIsDeleting(false), 500)
      }
    }
    return () => clearTimeout(timeout)
  }, [index, isDeleting, fullName.length])

  const displayedName = fullName.slice(0, index)

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center"
          >
            <h1 className="pixel-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-yellow-300">{displayedName}</span>
            </h1>
            <p className="pixel-panel text-xl text-gray-200 dark:text-gray-300 mb-8">
              A Video Editor focused on transforming concepts into polished, compelling videos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="pixel-button"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="pixel-button-secondary"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
