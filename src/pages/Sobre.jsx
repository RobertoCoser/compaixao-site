import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { Heart, Shield, Users, Leaf, HandHeart, Globe } from 'lucide-react'

const valores = [
  { icon: Heart, title: 'Solidariedade', desc: 'Ato de unir-se aos outros em prol do bem comum.' },
  { icon: HandHeart, title: 'Empatia', desc: 'Compromisso com o outro e com suas necessidades.' },
  { icon: Shield, title: 'Ética', desc: 'Conduta baseada em valores e respeito mútuo.' },
  { icon: Users, title: 'Respeito', desc: 'Dignidade humana em todas as ações.' },
  { icon: Globe, title: 'Cidadania', desc: 'Engajamento ativo na comunidade.' },
  { icon: Leaf, title: 'Sustentabilidade', desc: 'Ações que respeitam o meio ambiente.' },
]

const timeline = [
  { year: '2022', title: 'Início do projeto', desc: 'Criação do Projeto COMpaixão como extensão do IFRS Campus Bento Gonçalves.' },
  { year: '2023', title: 'Expansão das ações', desc: 'Ampliação das campanhas e novas parcerias com instituições da comunidade.' },
  { year: '2024', title: 'Horta do Bem', desc: 'Consolidação da Horta do Bem e novas campanhas de arrecadação.' },
]

export default function Sobre() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <SectionTitle title="Sobre o Projeto" subtitle="Conheça" />
            <p className="text-lg text-earth-600 leading-relaxed">
              O Projeto COMpaixão possui caráter de extensão e busca aproximar o ambiente acadêmico da comunidade através de ações voluntárias, solidariedade, ética, cidadania e formação humana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Missão</h3>
                <p className="text-earth-600 leading-relaxed">
                  Promover ações de solidariedade e voluntariado, aproximando a comunidade acadêmica da sociedade.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Visão</h3>
                <p className="text-earth-600 leading-relaxed">
                  Fortalecer uma cultura de solidariedade, cidadania e responsabilidade social.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-earth-100">
                <h3 className="text-xl font-bold text-primary-700 mb-3">Valores</h3>
                <p className="text-earth-600 leading-relaxed">
                  Solidariedade, empatia, ética, respeito, cidadania, inclusão, sustentabilidade e trabalho coletivo.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossos Valores" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon
              return (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-earth-50 hover:bg-primary-50 transition-colors border border-earth-100">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-earth-900 mb-1">{v.title}</h4>
                      <p className="text-sm text-earth-600">{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-earth-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossa História" subtitle="Timeline" />
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-earth-300 before:to-transparent">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary-600 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-earth-100">
                    <span className="text-primary-600 font-bold text-sm">{item.year}</span>
                    <h4 className="text-lg font-bold text-earth-900 mt-1 mb-2">{item.title}</h4>
                    <p className="text-sm text-earth-600">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}