const Footer = () => {
  return (
    <footer className="bg-slate-950/90 py-3 border-t-2 border-cyan-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-cyan-100 text-sm uppercase tracking-widest">
            © {new Date().getFullYear()} Niel NicoR. Caspillo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
