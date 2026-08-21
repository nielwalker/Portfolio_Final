import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaLaptop, FaLightbulb } from 'react-icons/fa'

const About = () => {
  const achievements = [
    {
      icon: <FaLaptop className="w-8 h-8 text-cyan-500" />,
      title: "Projects Completed",
      description: "Successfully edited 20+ projects across various clients"
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-cyan-500" />,
      title: "Problem Solving",
      description: "Strong analytical skills and creative problem-solving abilities"
    }
  ]

  return (
    <section id="about" className="relative min-h-screen w-full border-t-4 border-yellow-300 flex items-center justify-center overflow-hidden">
      {/* About video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/about-bg.mp4"
      />
      <div className="pixel-section relative z-10 w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="pixel-title text-3xl font-bold text-white mb-4">About Me</h2>
          </motion.div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="pixel-card flex h-full flex-col p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4">
                  I’m a video editor who loves turning raw footage into meaningful,
                  emotionally driven stories. What excites me most about editing is the blend
                  of creativity and precision finding the rhythm, pacing, and visual style that
                  brings a project to life. Whether I’m crafting short-form content, social media
                  edits, or full narrative pieces, 
                </p>
                <p className="text-gray-200 dark:text-gray-300">
                  I focus on making every cut intentional and
                  every scene engaging. I enjoy collaborating with creators, brands, and teams to
                  shape ideas into compelling visuals that connect with audiences. For me, editing
                  isn’t just a skill it’s the way I turn moments into stories people feel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="pixel-card flex h-full flex-col p-6">
                <h3 className="text-xl font-semibold text-white mb-4">My Approach</h3>
                <p className="text-gray-200 dark:text-gray-300 mb-4">
                  My approach to video editing is grounded in understanding the story first.
                  Before I touch the timeline, I take time to learn the message, the emotion, and
                  the audience the project is meant for. My development process involves:
                </p>
                <ul className="list-disc list-inside text-gray-200 dark:text-gray-300 space-y-2">
                  <li>Discovery & Understanding</li>
                  <li>Project Brief & Goal Alignment</li>
                  <li>Organizing & Reviewing Footage</li>
                  <li>Client Feedback & Revisions</li>
                  <li>Final Export & Delivery</li>
                </ul>
              </div>
            </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="pixel-card h-full p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="w-6 h-6 text-cyan-500" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <h4 className="text-white font-medium">Bachelor of Information Technology</h4>
                <p className="text-gray-300">University of Science and Technology of Southern Philippines</p>
                <p className="text-gray-400 text-sm">2020 - 2026</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="pixel-card h-full p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="w-6 h-6 text-cyan-500" />
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-medium">Video Editing</h4>
                    <p className="text-gray-300">Vloggers Videos</p>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Photoshop Editing</h4>
                    <p className="text-gray-300">Local Tarpaulin</p>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                  </div>
                </div>
              </motion.div>

              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
                  viewport={{ once: true }}
                  className="pixel-card h-full p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    {achievement.icon}
                    <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                  </div>
                  <p className="text-gray-200 dark:text-gray-300">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 
