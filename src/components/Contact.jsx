import { motion } from 'framer-motion'
import { FaGithub, FaFacebook, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/yourusername',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/nielwalkers',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-6 h-6" />,
      url: 'https://twitter.com/yourusername',
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-6 h-6" />,
      url: 'mailto:your.email@example.com',
    },
    {
      name: '09559284872',
      icon: <FaPhoneAlt className="w-6 h-6" />,
      url: 'tel:09559284872',
    },
  ]

  return (
    <section id="contact" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Contact video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/contact-bg.mp4"
      />
      <div className="pixel-section relative z-10 w-full h-full flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="pixel-title text-3xl font-bold text-white mb-4">Contact Me</h2>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="pixel-panel max-w-3xl space-y-6 flex flex-col justify-center items-center"
            >
              <h3 className="text-2xl font-semibold text-white">Let's Connect</h3>
              <p className="text-gray-200">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 
