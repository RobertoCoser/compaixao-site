import { Link, NavLink } from 'react-router-dom'

export default function MobileMenu({
  isOpen,
  links,
  onClose,
}) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      id="mobile-menu"
      className="border-t border-earth-200 bg-white lg:hidden"
    >
      <nav
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6"
        aria-label="Navegação mobile"
      >
        <div className="space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-earth-600 hover:bg-earth-50 hover:text-primary-700',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="mt-3 border-t border-earth-100 pt-3">
          <Link
            to="/contato"
            onClick={onClose}
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-earth-600 transition-colors hover:bg-earth-50 hover:text-primary-700"
          >
            Contato
          </Link>

          <Link
            to="/como-participar"
            onClick={onClose}
            className="mt-2 block rounded-xl bg-primary-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
          >
            Quero participar
          </Link>
        </div>
      </nav>
    </div>
  )
}