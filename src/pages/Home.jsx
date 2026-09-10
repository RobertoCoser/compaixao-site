import { Link } from 'react-router-dom'
import {
  Accessibility,
  ArrowRight,
  Baby,
  Heart,
  Recycle,
  Sprout,
  Users,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ImpactCounter from '../components/ImpactCounter'
import ScrollReveal from '../components/ScrollReveal'
import NewsCard from '../components/NewsCard'
import { impacto } from '../data/impacto'
import { acoes } from '../data/acoes'
import { noticias } from '../data/noticias'

const iconMap = {
  Heart,
  Sprout,
  Baby,
  Users,
  Accessibility,
  Recycle,
}

export default function Home() {
  const latestNews = noticias.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden lg:min-h-[85vh]">
        <div className="absolute inset-0 bg-earth-900">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Voluntariado"
            className="h-full w-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/95 via-earth-900/75 to-earth-900/40" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-primary-500/30 bg-primary-600/20 px-3 py-1.5 text-xs font-medium leading-5 text-primary-200 sm:mb-6 sm:px-4 sm:text-sm">
              <Heart
                className="h-4 w-4 shrink-0"
                fill="currentColor"
              />
              <span>
                Projeto de Extensão — IFRS Campus Bento Gonçalves
              </span>
            </span>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
              COMpaixão:
              <br />
              <span className="text-primary-400">
                Solidariedade em ação!
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-earth-200 sm:text-xl sm:leading-relaxed">
              Um projeto de extensão do IFRS Campus Bento Gonçalves que
              transforma solidariedade em atitudes concretas, conectando
              estudantes, servidores e comunidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/sobre"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:bg-primary-700 hover:shadow-xl sm:w-auto sm:px-8"
              >
                Conheça o projeto
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/como-participar"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:w-auto sm:px-8"
              >
                Quero participar
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O QUE É */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                    alt="Ação do COMpaixão"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 rounded-2xl bg-primary-100 lg:block" />
                <div className="absolute -left-6 -top-6 -z-10 hidden h-24 w-24 rounded-2xl bg-warm-100 lg:block" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Sobre nós
              </span>

              <h2 className="mt-2 text-3xl font-bold text-earth-900 sm:text-4xl">
                O que é o COMpaixão?
              </h2>

              <p className="mt-5 text-base leading-7 text-earth-600 sm:text-lg sm:leading-relaxed">
                O COMpaixão é um projeto de extensão do IFRS Campus Bento
                Gonçalves que conecta estudantes, servidores e comunidade em
                ações de solidariedade, voluntariado e cidadania.
              </p>

              <p className="mt-4 leading-7 text-earth-600">
                Nosso propósito é promover ações que aproximem o ambiente
                acadêmico da sociedade, fortalecendo uma cultura de empatia,
                ética e responsabilidade social.
              </p>

              <Link
                to="/sobre"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-primary-700 transition-colors hover:text-primary-800"
              >
                Conheça nossa história
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="bg-primary-900 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nosso Impacto"
            subtitle="Resultados"
            light
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {impacto.map((item) => (
              <ScrollReveal
                key={item.id}
                delay={item.id * 100}
              >
                <div className="h-full overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-sm transition duration-300 hover:bg-white/[0.09]">
                  <ImpactCounter
                    value={item.value}
                    suffix={item.suffix}
                    label={item.label}
                    isDynamic={item.isDynamic}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AÇÕES */}
      <section className="bg-earth-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nossas Ações"
            subtitle="O que fazemos"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {acoes.map((acao, index) => {
              const Icon = iconMap[acao.icon] || Heart

              return (
                <ScrollReveal
                  key={acao.id}
                  delay={index * 100}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={acao.image}
                        alt={acao.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div
                        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-lg ${acao.bg}`}
                      >
                        <Icon
                          className={`h-5 w-5 ${acao.color}`}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-earth-900">
                        {acao.title}
                      </h3>

                      <p className="mt-2 flex-1 text-sm leading-relaxed text-earth-600">
                        {acao.description}
                      </p>

                      <Link
                        to="/acoes"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
                      >
                        Saiba mais
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* HORTA DO BEM */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-primary-100 bg-primary-50 p-5 sm:p-8 lg:p-16">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <ScrollReveal>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                  Destaque
                </span>

                <h2 className="mt-2 text-3xl font-bold text-earth-900 sm:text-4xl">
                  Horta do Bem
                </h2>

                <p className="mt-4 text-base leading-7 text-earth-600 sm:text-lg">
                  Do conhecimento cultivado no Campus para a mesa de quem
                  precisa.
                </p>

                <div className="mt-7 space-y-5">
                  {[
                    {
                      step: 'Plantio',
                      desc: 'Cultivo no Campus com conhecimento técnico',
                    },
                    {
                      step: 'Cuidado',
                      desc: 'Manutenção sustentável pelos voluntários',
                    },
                    {
                      step: 'Colheita',
                      desc: 'Hortaliças frescas e saudáveis',
                    },
                    {
                      step: 'Doação',
                      desc: 'Distribuição a instituições parceiras',
                    },
                    {
                      step: 'Impacto',
                      desc: 'Segurança alimentar para famílias',
                    },
                  ].map((item, index) => (
                    <div
                      key={item.step}
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                        {index + 1}
                      </div>

                      <div className="min-w-0">
                        <span className="font-semibold text-earth-900">
                          {item.step}
                        </span>

                        <p className="mt-0.5 text-sm leading-6 text-earth-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl sm:aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                    alt="Horta do Bem"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS */}
      <section className="bg-earth-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
                Acompanhe
              </span>

              <h2 className="mt-2 text-3xl font-bold text-earth-900 sm:text-4xl">
                Últimas Notícias
              </h2>
            </div>

            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 font-semibold text-primary-700 transition-colors hover:text-primary-800"
            >
              Ver todas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {latestNews.map((news, index) => (
              <ScrollReveal
                key={news.id}
                delay={index * 100}
                className="h-full"
              >
                <NewsCard news={news} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="border-t border-earth-100 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-sm font-bold text-pink-700">
              IG
            </div>

            <h2 className="text-2xl font-bold text-earth-900 sm:text-3xl">
              Acompanhe também pelo Instagram
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-earth-600">
              Fique por dentro das ações em tempo real e faça parte da nossa
              comunidade digital.
            </p>

            <a
              href="https://www.instagram.com/projetocompaixaoifrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-opacity hover:opacity-90 sm:w-auto sm:px-8"
            >
              <span className="font-semibold">IG</span>
              Seguir no Instagram
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary-600 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Faça parte dessa história.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-100 sm:text-lg">
              Seja como voluntário, doador ou parceiro. Sua participação
              transforma solidariedade em ações concretas que beneficiam a
              nossa comunidade.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/como-participar"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-primary-700 shadow-lg transition-colors hover:bg-earth-100 sm:w-auto sm:px-8"
              >
                Quero participar
              </Link>

              <Link
                to="/contato"
                className="inline-flex w-full items-center justify-center rounded-xl border border-primary-500 bg-primary-700 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-800 sm:w-auto sm:px-8"
              >
                Entrar em contato
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}