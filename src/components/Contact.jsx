import { motion } from 'framer-motion'
import { FaGithub, FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

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
  ]

  const handleSend = (e) => {
    e.preventDefault()
    setSending(true)
    setSent(false)
    setError(null)
    emailjs
      .sendForm(
        'service_8u1o40y',    // e.g. 'service_xxxxx'
        'template_8kqbyfg',   // e.g. 'template_xxxxx'
        formRef.current,
        'NH01IA84_e9HZrU_m'     // e.g. 'user_xxxxx'
      )
      .then(
        (result) => {
          setSending(false)
          setSent(true)
        },
        (error) => {
          setSending(false)
          setError('Failed to send message. Please try again.')
        }
      )
  }

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
      <div className="relative z-10 bg-gray-900/70 dark:bg-gray-900/80 w-full h-full flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
            <div className="w-24 h-1 bg-cyan-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center"
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8"
            >
              <form ref={formRef} onSubmit={handleSend} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-2xl border-none bg-white/10 text-white placeholder-gray-300 shadow-md focus:ring-2 focus:ring-cyan-500 focus:bg-white/20 transition-all py-3 px-4 text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-2xl border-none bg-white/10 text-white placeholder-gray-300 shadow-md focus:ring-2 focus:ring-cyan-500 focus:bg-white/20 transition-all py-3 px-4 text-base"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-2xl border-none bg-white/10 text-white placeholder-gray-300 shadow-md focus:ring-2 focus:ring-cyan-500 focus:bg-white/20 transition-all py-3 px-4 text-base"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <input type="hidden" name="title" value="Contact from Portfolio" />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 shadow-lg transition-colors font-semibold tracking-wide text-lg"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
                {sent && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
                {error && <p className="text-red-400 text-center mt-2">{error}</p>}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 