import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <img
        src="/background.jpg"
        alt=""
        aria-hidden="true"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="pixel-screen relative z-10 min-h-screen w-full">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
