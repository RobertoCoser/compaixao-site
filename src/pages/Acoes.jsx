import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { acoes } from '../data/acoes'
import { Heart } from 'lucide-react'

const iconMap = {
  Heart: Heart,
  Sprout: () => <span>🌱</span>,
  Baby: () => <span>👧</span>,
  Users: () => <span>👴</span>,
  Accessibility: () => <span>♿</span>,
  Recycle: () => <span>♻️</span>,
}

export default function Acoes() {
  return (
    <section className="py-20 lg:py-28 bg-earth-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nossas Ações" subtitle="Conheça nosso trabalho" />
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {acoes.map((acao, index) => {
            const Icon = iconMap[acao.icon] || Heart
            return (
              <ScrollReveal key={acao.id} delay={index * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100 flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-[4/3] md:aspect-auto">
                    <img
                      src={acao.image}
                      alt={acao.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-center">
                    <div className={`w-10 h-10 rounded-lg ${acao.bg} flex items-center justify-center mb-3`}>
                      <Icon className={`w-5 h-5 ${acao.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-earth-900 mb-2">{acao.title}</h3>
                    <p className="text-earth-600 text-sm leading-relaxed mb-3">{acao.description}</p>
                    <p className="text-earth-500 text-sm leading-relaxed">{acao.longDescription}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}