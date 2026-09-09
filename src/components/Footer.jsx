import { Link } from 'react-router-dom'
import { Heart, MapPin, Mail, ExternalLink } from 'lucide-react'

const footerLinks = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/acoes', label: 'Ações' },
  { to: '/noticias', label: 'Notícias' },
  { to: '/galeria', label: 'Galeria' },
  { to: '/como-participar', label: 'Como Participar' },
  { to: '/contato', label: 'Contato' },
]

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">COMpaixão</h3>
                <p className="text-xs text-earth-400">Solidariedade em ação!</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Projeto de extensão do IFRS Campus Bento Gonçalves dedicado à solidariedade, voluntariado e transformação social.
            </p>
            <a
              href="https://www.instagram.com/projetocompaixaoifrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>Instagram</span>
              @projetocompaixaoifrs
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                <span>Av. Osvaldo Aranha, 540<br />Bairro Juventude da Enologia<br />Bento Gonçalves — RS</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary-500 shrink-0" />
                <span>[E-mail institucional]</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">IFRS</h4>
            <p className="text-sm mb-3">Projeto de Extensão — IFRS Campus Bento Gonçalves</p>
            <a
              href="https://bento.ifrs.edu.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              Site institucional do IFRS
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-800 text-center text-xs text-earth-500">
          <p>© {new Date().getFullYear()} Projeto COMpaixão — IFRS Campus Bento Gonçalves. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}