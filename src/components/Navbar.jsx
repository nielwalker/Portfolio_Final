import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      const sectionIds = navItems.map(item => item.href.replace('#', ''))
      let current = 'Home'
      for (let id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.offsetTop <= scrollPosition) {
          current = navItems.find(item => item.href === `#${id}`).name
        }
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (name) => {
    setActiveSection(name)
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-16">
        {/* Removed Portfolio logo/title */}
        
        {/* Desktop menu */}
        <div className="hidden md:block w-full">
          <div className="flex justify-center items-center space-x-4 w-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`pixel-nav text-sm transition-colors
                  ${activeSection === item.name
                    ? 'pixel-nav-active font-bold'
                    : 'font-medium'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="pixel-button-secondary p-2 text-cyan-100 focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="block h-6 w-6" />
            ) : (
              <Bars3Icon className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pixel-panel mx-4 px-2 pt-2 pb-3 space-y-3 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`block pixel-nav text-base transition-colors
                  ${activeSection === item.name
                    ? 'pixel-nav-active font-bold'
                    : 'font-medium'}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 
