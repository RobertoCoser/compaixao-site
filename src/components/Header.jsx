import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/acoes', label: 'Ações' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/como-participar', label: 'Como Participar' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-earth-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center group-hover:bg-primary-700 transition-colors">
              <Heart className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-earth-900 leading-tight">COMpaixão</span>
              <span className="text-[10px] text-earth-500 leading-tight uppercase tracking-wider">IFRS - Bento Gonçalves</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-earth-600 hover:text-primary-700 hover:bg-earth-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/como-participar"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors shadow-sm hover:shadow"
            >
              Quero participar
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-earth-600 hover:bg-earth-100"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-earth-200 bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${
                  location.pathname === link.to
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-earth-600 hover:bg-earth-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/como-participar"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-3 py-2.5 rounded-xl bg-primary-600 text-white text-sm font-semibold text-center"
            >
              Quero participar
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}