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
    <nav className="fixed w-full bg-transparent shadow-md z-50">
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
                className={`px-3 py-2 rounded-md text-lg transition-colors
                  ${activeSection === item.name
                    ? 'text-white font-bold'
                    : 'text-gray-600 dark:text-gray-300 font-medium'}`}
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
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.name)}
                className={`block px-3 py-2 rounded-md text-xl transition-colors
                  ${activeSection === item.name
                    ? 'text-white font-bold'
                    : 'text-gray-600 dark:text-gray-300 font-medium'}`}
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