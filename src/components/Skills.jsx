import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMongodb } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-12 h-12 text-blue-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12 text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12 text-blue-600" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-12 h-12 text-green-500" /> },
    { name: 'Python', icon: <FaPython className="w-12 h-12 text-yellow-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12 text-green-600" /> },
    { name: 'SQL', icon: <FaDatabase className="w-12 h-12 text-blue-700" /> },
    { name: 'Git', icon: <FaGitAlt className="w-12 h-12 text-orange-600" /> },
  ]

  // Split skills into two rows
  const firstRow = skills.slice(0, 4)
  const secondRow = skills.slice(4)

  return (
    <section id="skills" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Skills video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/skills-bg.mp4"
      />
      <div className="relative z-10 bg-gray-900/70 dark:bg-gray-900/80 w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {/* First Row - Moving Right */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...firstRow, ...firstRow].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex-none w-[200px] mx-4 flex flex-col items-center p-6 bg-white/10 dark:bg-gray-700/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill.icon}
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Left */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...secondRow, ...secondRow].map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className="flex-none w-[200px] mx-4 flex flex-col items-center p-6 bg-white/10 dark:bg-gray-700/50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill.icon}
                    <h3 className="mt-4 text-lg font-semibold text-white">
                      {skill.name}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 