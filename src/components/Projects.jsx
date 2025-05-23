import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Payroll Management System',
      description: 'A brief description of your first project. Explain what it does and what technologies you used.',
      image: '/payroll.png',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Book Keeping System',
      description: 'A brief description of your second project. Explain what it does and what technologies you used.',
      image: '/book keeping.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Attendance Management System',
      description: 'A brief description of your third project. Explain what it does and what technologies you used.',
      image: '/attendance management.png',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
    {
      title: 'Pet Adoption System',
      description: 'A brief description of your fourth project. Explain what it does and what technologies you used.',
      image: '/pet adoption.jpg',
      technologies: ['React', 'Firebase', 'Material UI'],
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4.com',
    },
    {
      title: 'Shop Management System',
      description: 'A brief description of your fifth project. Explain what it does and what technologies you used.',
      image: '/shop-management-system.jpg',
      technologies: ['React', 'GraphQL', 'Apollo'],
      github: 'https://github.com/yourusername/project5',
      live: 'https://project5.com',
    },
    {
      title: 'Weather Web App',
      description: 'A brief description of your sixth project. Explain what it does and what technologies you used.',
      image: '/weather.png',
      technologies: ['React', 'Redux', 'Sass'],
      github: 'https://github.com/yourusername/project6',
      live: 'https://project6.com',
    },
    {
      title: 'Paraphrasing Web Tool',
      description: 'A brief description of your seventh project. Explain what it does and what technologies you used.',
      image: '/paraphrasing.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project7',
      live: 'https://project7.com',
    },
  ]

  // Split projects into two rows with exactly 4 projects each
  const firstRow = projects.slice(0, 4)
  const secondRow = projects.slice(4, 8)

  return (
    <section id="projects" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Projects video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/projects-bg.mp4"
      />
      <div className="relative z-10 bg-gray-900/70 dark:bg-gray-900/80 w-full h-full flex flex-col">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col h-[calc(100vh-8rem)]">
            {/* First Row - Fixed Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {firstRow.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 dark:bg-gray-700/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-[320px]"
                >
                  <div className="relative h-32 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 dark:text-gray-300 mb-3 flex-grow text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-200 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-200 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row - Same Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {secondRow.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 dark:bg-gray-700/50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col h-[320px]"
                >
                  <div className="relative h-32 flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-white mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 dark:text-gray-300 mb-3 flex-grow text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-200 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm"
                      >
                        <FaGithub className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-200 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 text-sm"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 