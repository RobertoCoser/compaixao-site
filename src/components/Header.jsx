import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import MobileMenu from './MobileMenu'

const navLinks = [
  {
    label: 'Início',
    to: '/',
  },
  {
    label: 'Sobre',
    to: '/sobre',
  },
  {
    label: 'Ações',
    to: '/acoes',
  },
  {
    label: 'Notícias',
    to: '/noticias',
  },
  {
    label: 'Galeria',
    to: '/galeria',
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileOpen((current) => !current)
  }

  const closeMobileMenu = () => {
    setMobileOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-earth-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2"
          aria-label="Projeto COMpaixão - Página inicial"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-sm font-bold text-white">
            C
          </div>

          <span className="text-lg font-bold text-earth-900">
            COMpaixão
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-earth-600 hover:bg-earth-50 hover:text-earth-900',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contato"
            className="rounded-lg px-3 py-2 text-sm font-medium text-earth-600 transition hover:bg-earth-50 hover:text-earth-900"
          >
            Contato
          </Link>

          <Link
            to="/como-participar"
            className="rounded-xl bg-primary-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
          >
            Como participar
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-earth-700 transition hover:bg-earth-100 lg:hidden"
          aria-label={
            mobileOpen
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={closeMobileMenu}
      />
    </header>
  )
}