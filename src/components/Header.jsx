import { useEffect, useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'

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

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-earth-200 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link
            to="/"
            className="group flex min-w-0 items-center gap-2"
            aria-label="Projeto COMpaixão - Página inicial"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 transition-colors group-hover:bg-primary-700">
              <Heart
                className="h-5 w-5 text-white"
                fill="currentColor"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <span className="truncate text-lg font-bold leading-tight text-earth-900">
                COMpaixão
              </span>

              <span className="truncate text-[10px] uppercase leading-tight tracking-wider text-earth-500">
                IFRS - Bento Gonçalves
              </span>
            </div>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-earth-600 hover:bg-earth-100 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/como-participar"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700 hover:shadow"
            >
              Quero participar
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-earth-600 transition-colors hover:bg-earth-100 hover:text-earth-900 lg:hidden"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation">
          <MobileMenu
            links={navLinks}
            onClose={() => setMobileOpen(false)}
          />
        </div>
      )}
    </header>
  )
}