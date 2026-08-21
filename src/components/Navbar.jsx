import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  const handleNavClick = (event, name) => {
    event.preventDefault()
    onSectionChange(name)
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-cyan-900 bg-slate-950/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        
        {/* Desktop menu */}
        <div className="hidden md:block w-full">
          <div className="flex justify-center items-center space-x-4 w-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.name)}
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
                onClick={(event) => handleNavClick(event, item.name)}
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
