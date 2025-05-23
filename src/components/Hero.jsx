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
    <section id="home" className="pt-20 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="text-cyan-500 dark:text-cyan-400">{displayedName}</span>
            </h1>
            <p className="text-xl text-gray-200 dark:text-gray-300 mb-8">
              A Student Vibe coder developer creating amazing web experiences
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-cyan-500 text-cyan-500 dark:text-cyan-400 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {/* Profile image inside the circle */}
              <img
                src="/profile.jpg"
                alt="Profile"
                className="rounded-full w-full h-full object-cover border-4 border-cyan-500 shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 