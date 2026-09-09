import { Link, useLocation } from 'react-router-dom'

export default function MobileMenu({
  links,
  onClose,
}) {
  const location = useLocation()

  return (
    <div className="border-t border-earth-200 bg-white lg:hidden">
      <nav
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6"
        aria-label="Navegação mobile"
      >
        <div className="space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.to

            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-earth-600 hover:bg-earth-50 hover:text-primary-700'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <Link
          to="/como-participar"
          onClick={onClose}
          className="mt-3 block rounded-xl bg-primary-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
        >
          Quero participar
        </Link>
      </nav>
    </div>
  )
}