import {
  Globe,
  HandHeart,
  Heart,
  Leaf,
  Shield,
  Users,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'

const valores = [
  {
    icon: Heart,
    title: 'Solidariedade',
    desc: 'Ato de unir-se aos outros em prol do bem comum.',
  },
  {
    icon: HandHeart,
    title: 'Empatia',
    desc: 'Compromisso com o outro e com suas necessidades.',
  },
  {
    icon: Shield,
    title: 'Ética',
    desc: 'Conduta baseada em valores e respeito mútuo.',
  },
  {
    icon: Users,
    title: 'Respeito',
    desc: 'Dignidade humana em todas as ações.',
  },
  {
    icon: Globe,
    title: 'Cidadania',
    desc: 'Engajamento ativo na comunidade.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    desc: 'Ações que respeitam o meio ambiente.',
  },
]

const timeline = [
  {
    year: '2022',
    title: 'Início do projeto',
    desc: 'Criação do Projeto COMpaixão como extensão do IFRS Campus Bento Gonçalves.',
  },
  {
    year: '2023',
    title: 'Expansão das ações',
    desc: 'Ampliação das campanhas e novas parcerias com instituições da comunidade.',
  },
  {
    year: '2024',
    title: 'Horta do Bem',
    desc: 'Consolidação da Horta do Bem e novas campanhas de arrecadação.',
  },
]

export default function Sobre() {
  return (
    <>
      {/* INTRODUÇÃO */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionTitle
              title="Sobre o Projeto"
              subtitle="Conheça"
            />

            <p className="mx-auto max-w-3xl text-base leading-7 text-earth-600 sm:text-lg sm:leading-relaxed">
              O Projeto COMpaixão possui caráter de extensão e busca
              aproximar o ambiente acadêmico da comunidade através de
              ações voluntárias, solidariedade, ética, cidadania e
              formação humana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* MISSÃO, VISÃO E VALORES */}
      <section className="bg-earth-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            <ScrollReveal className="h-full">
              <article className="h-full rounded-2xl border border-earth-100 bg-white p-6 shadow-sm sm:p-8">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-primary-500">
                  Nosso propósito
                </span>

                <h2 className="text-xl font-bold text-primary-700">
                  Missão
                </h2>

                <p className="mt-3 leading-7 text-earth-600">
                  Promover ações de solidariedade e voluntariado,
                  aproximando a comunidade acadêmica da sociedade.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal
              delay={100}
              className="h-full"
            >
              <article className="h-full rounded-2xl border border-earth-100 bg-white p-6 shadow-sm sm:p-8">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-primary-500">
                  Onde queremos chegar
                </span>

                <h2 className="text-xl font-bold text-primary-700">
                  Visão
                </h2>

                <p className="mt-3 leading-7 text-earth-600">
                  Fortalecer uma cultura de solidariedade, cidadania
                  e responsabilidade social.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal
              delay={200}
              className="h-full"
            >
              <article className="h-full rounded-2xl border border-earth-100 bg-white p-6 shadow-sm sm:p-8">
                <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-primary-500">
                  O que nos orienta
                </span>

                <h2 className="text-xl font-bold text-primary-700">
                  Valores
                </h2>

                <p className="mt-3 leading-7 text-earth-600">
                  Solidariedade, empatia, ética, respeito, cidadania,
                  inclusão, sustentabilidade e trabalho coletivo.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NOSSOS VALORES */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossos Valores" />

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {valores.map((valor, index) => {
              const Icon = valor.icon

              return (
                <ScrollReveal
                  key={valor.title}
                  delay={index * 100}
                  className="h-full"
                >
                  <article className="flex h-full items-start gap-4 rounded-2xl border border-earth-100 bg-earth-50 p-5 transition-colors hover:bg-primary-50 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-5 w-5 text-primary-600" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-earth-900">
                        {valor.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-earth-600">
                        {valor.desc}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* HISTÓRIA */}
      <section className="bg-earth-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossa História"
            subtitle="Timeline"
          />

          <div className="relative mt-2 space-y-6 sm:space-y-8">
            <div className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-earth-300 to-transparent md:left-1/2" />

            {timeline.map((item, index) => (
              <ScrollReveal
                key={item.year}
                delay={index * 150}
              >
                <div
                  className={`relative flex items-start gap-4 md:gap-0 ${index % 2 !== 0
                      ? 'md:flex-row-reverse'
                      : 'md:flex-row'
                    }`}
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-600 text-sm font-bold text-white shadow md:absolute md:left-1/2 md:-translate-x-1/2">
                    {item.year.slice(-2)}
                  </div>

                  <div
                    className={`min-w-0 flex-1 rounded-2xl border border-earth-100 bg-white p-5 shadow-sm sm:p-6 md:w-[calc(50%-2.5rem)] md:flex-none ${index % 2 !== 0
                        ? 'md:ml-[calc(50%+2.5rem)]'
                        : 'md:mr-[calc(50%+2.5rem)]'
                      }`}
                  >
                    <span className="text-sm font-bold text-primary-600">
                      {item.year}
                    </span>

                    <h3 className="mt-1 text-lg font-bold text-earth-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-earth-600">
                      {item.desc}
                    </p>
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