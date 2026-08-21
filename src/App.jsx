import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { useRef, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const credentials = [
  { label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { label: 'Phone No.', value: '0955 928 4872', href: 'tel:09559284872' },
  { label: 'Birthday', value: 'Add your birthday' },
  { label: 'Address', value: 'Add your address' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/nielwalkers', icon: FaFacebookF },
  { label: 'Twitter', href: 'https://twitter.com/yourusername', icon: FaTwitter },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: FaInstagram },
]

function App() {
  const [activeSection, setActiveSection] = useState('About')
  const contentScrollRef = useRef(null)

  const handleSectionChange = (section) => {
    setActiveSection(section)
    contentScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden lg:h-screen lg:overflow-hidden">
      <img
        src="/background.jpg"
        alt=""
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="pixel-screen relative z-10 min-h-screen w-full lg:grid lg:h-screen lg:grid-cols-[20rem_minmax(0,1fr)]">
        <aside className="border-b-2 border-cyan-300 bg-slate-950/95 px-5 py-6 sm:px-8 sm:py-8 lg:h-screen lg:overflow-hidden lg:border-b-0 lg:border-r-2">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <img
              src="/profile_pic-1.png"
              alt="Niel R. Caspillo"
              className="pixel-image mx-auto h-32 w-32 object-cover sm:h-40 sm:w-40 lg:h-36 lg:w-36 xl:h-44 xl:w-44"
            />
            <div className="mt-5 text-center sm:mt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Video Editor</p>
              <h1 className="pixel-title mt-2 text-2xl font-bold">Niel R. Caspillo</h1>
            </div>

            <dl className="mt-6 space-y-3 border-y-2 border-cyan-900 py-5 text-sm xl:mt-8 xl:space-y-4 xl:py-6">
              {credentials.map((credential) => (
                <div key={credential.label}>
                  <dt className="text-xs font-bold uppercase tracking-widest text-cyan-300">{credential.label}</dt>
                  <dd className="mt-1 break-words text-slate-200">
                    {credential.href ? (
                      <a className="hover:text-yellow-300" href={credential.href}>{credential.value}</a>
                    ) : credential.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex justify-center gap-3 xl:mt-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center border-2 border-cyan-300 text-cyan-100 transition-colors hover:border-yellow-300 hover:bg-yellow-300 hover:text-slate-950"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        <main ref={contentScrollRef} id="content-scroll" className="min-w-0 lg:h-screen lg:overflow-y-auto lg:overscroll-contain">
          <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
          {activeSection === 'About' && <About />}
          {activeSection === 'Skills' && <Skills />}
          {activeSection === 'Projects' && <Projects />}
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default App
