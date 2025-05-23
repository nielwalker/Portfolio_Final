import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaCode, FaLaptopCode, FaLightbulb, FaTrophy } from 'react-icons/fa'

const About = () => {
  const achievements = [
    {
      icon: <FaCode className="w-8 h-8 text-cyan-500" />,
      title: "Coding Experience",
      description: "3+ years of experience in web development and software engineering"
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-cyan-500" />,
      title: "Projects Completed",
      description: "Successfully delivered 20+ projects across various domains"
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-cyan-500" />,
      title: "Problem Solving",
      description: "Strong analytical skills and creative problem-solving abilities"
    },
    {
      icon: <FaTrophy className="w-8 h-8 text-cyan-500" />,
      title: "Achievements",
      description: "Multiple hackathon wins and coding competition awards"
    }
  ]

  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* About video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/about-bg.mp4"
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
            <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 dark:bg-gray-700/50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4">
                  I'm a passionate vibe coder developer with a keen eye for creating beautiful, 
                  functional, and user-friendly websites. My journey in web development started 
                  with a curiosity about how things work on the internet, which led me to dive 
                  deep into the world of coding.
                </p>
                <p className="text-gray-200 dark:text-gray-300">
                  I believe in writing clean, efficient code and creating intuitive user 
                  experiences. When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge through 
                  technical writing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 dark:bg-gray-700/50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaGraduationCap className="w-6 h-6 text-cyan-500" />
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-medium">Bachelor of Computer Science</h4>
                      <p className="text-gray-300">University Name</p>
                      <p className="text-gray-400 text-sm">2018 - 2022</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Web Development Bootcamp</h4>
                      <p className="text-gray-300">Coding Academy</p>
                      <p className="text-gray-400 text-sm">2022</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 dark:bg-gray-700/50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FaBriefcase className="w-6 h-6 text-cyan-500" />
                    <h3 className="text-xl font-semibold text-white">Experience</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-medium">Senior Developer</h4>
                      <p className="text-gray-300">Tech Company</p>
                      <p className="text-gray-400 text-sm">2022 - Present</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Junior Developer</h4>
                      <p className="text-gray-300">Startup Inc.</p>
                      <p className="text-gray-400 text-sm">2020 - 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/10 dark:bg-gray-700/50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4">
                  I approach each project with a focus on creating scalable, maintainable, 
                  and efficient solutions. My development process involves:
                </p>
                <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 space-y-2">
                  <li>Thorough planning and architecture design</li>
                  <li>Writing clean, documented code</li>
                  <li>Implementing best practices and design patterns</li>
                  <li>Rigorous testing and quality assurance</li>
                  <li>Continuous learning and improvement</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 dark:bg-gray-700/50 p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      {achievement.icon}
                      <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                    </div>
                    <p className="text-gray-200 dark:text-gray-300">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 