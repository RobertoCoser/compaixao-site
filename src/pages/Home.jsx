import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Sprout, Baby, Users, Accessibility, Recycle, Calendar } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ImpactCounter from '../components/ImpactCounter'
import ScrollReveal from '../components/ScrollReveal'
import { impacto } from '../data/impacto'
import { acoes } from '../data/acoes'
import { noticias } from '../data/noticias'

const iconMap = { Heart, Sprout, Baby, Users, Accessibility, Recycle }

export default function Home() {
  const latestNews = noticias.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-earth-900">
          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1600&q=80"
            alt="Voluntariado"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-earth-900/90 to-earth-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-600/20 text-primary-300 text-sm font-medium mb-6 border border-primary-500/30">
              <Heart className="w-4 h-4" fill="currentColor" />
              Projeto de Extensão — IFRS Campus Bento Gonçalves
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              COMpaixão:<br />
              <span className="text-primary-400">Solidariedade em ação!</span>
            </h1>
            <p className="text-lg sm:text-xl text-earth-200 max-w-2xl mb-10 leading-relaxed">
              Um projeto de extensão do IFRS Campus Bento Gonçalves que transforma solidariedade em atitudes concretas, conectando estudantes, servidores e comunidade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                Conheça o projeto
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/como-participar"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                Quero participar
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* O QUE É */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                    alt="Ação do COMpaixão"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-2xl -z-10 hidden lg:block" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-warm-100 rounded-2xl -z-10 hidden lg:block" />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Sobre nós</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-earth-900 mt-2 mb-6">
                O que é o COMpaixão?
              </h2>
              <p className="text-earth-600 text-lg leading-relaxed mb-6">
                O COMpaixão é um projeto de extensão do IFRS Campus Bento Gonçalves que conecta estudantes, servidores e comunidade em ações de solidariedade, voluntariado e cidadania.
              </p>
              <p className="text-earth-600 leading-relaxed mb-8">
                Nosso propósito é promover ações que aproximem o ambiente acadêmico da sociedade, fortalecendo uma cultura de empatia, ética e responsabilidade social.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* IMPACTO */}
      <section className="py-20 lg:py-28 bg-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nosso Impacto" subtitle="Resultados" light />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {impacto.map((item) => (
              <ScrollReveal key={item.id} delay={item.id * 100}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
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
      <section className="py-20 lg:py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Nossas Ações" subtitle="O que fazemos" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {acoes.map((acao, index) => {
              const Icon = iconMap[acao.icon] || Heart
              return (
                <ScrollReveal key={acao.id} delay={index * 100}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-earth-100">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={acao.image}
                        alt={acao.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className={`w-10 h-10 rounded-lg ${acao.bg} flex items-center justify-center mb-4`}>
                        <Icon className={`w-5 h-5 ${acao.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-earth-900 mb-2">{acao.title}</h3>
                      <p className="text-earth-600 text-sm leading-relaxed mb-4">{acao.description}</p>
                      <Link
                        to="/acoes"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Saiba mais <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* HORTA DO BEM DESTAQUE */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-3xl p-8 lg:p-16 border border-primary-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Destaque</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-earth-900 mt-2 mb-4">Horta do Bem</h2>
                <p className="text-lg text-earth-600 leading-relaxed mb-8">
                  "Do conhecimento cultivado no Campus para a mesa de quem precisa."
                </p>
                <div className="space-y-4">
                  {[
                    { step: 'Plantio', desc: 'Cultivo no Campus com conhecimento técnico' },
                    { step: 'Cuidado', desc: 'Manutenção sustentável pelos voluntários' },
                    { step: 'Colheita', desc: 'Hortaliças frescas e saudáveis' },
                    { step: 'Doação', desc: 'Distribuição a instituições parceiras' },
                    { step: 'Impacto', desc: 'Segurança alimentar para famílias' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <span className="font-semibold text-earth-900">{item.step}</span>
                        <p className="text-sm text-earth-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                    alt="Horta do Bem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* NOTÍCIAS */}
      <section className="py-20 lg:py-28 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 lg:mb-14 gap-4">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Acompanhe</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-earth-900 mt-2">Últimas Notícias</h2>
            </div>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
            >
              Ver todas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {latestNews.map((news, index) => (
              <ScrollReveal key={news.id} delay={index * 100}>
                <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-earth-100 h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={news.coverImage}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-earth-500 mb-3">
                      <span className="px-2 py-1 rounded-md bg-primary-50 text-primary-700 font-medium">
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(news.publishedAt).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-earth-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-earth-600 line-clamp-3 mb-4 flex-1">
                      {news.excerpt}
                    </p>
                    <Link
                      to={`/noticias/${news.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
                    >
                      Ler mais <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-16 bg-white border-t border-earth-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center text-pink-600 font-bold">
              IG
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-earth-900 mb-3">Acompanhe também pelo Instagram</h2>
            <p className="text-earth-600 mb-6">
              Fique por dentro das ações em tempo real e faça parte da nossa comunidade digital.
            </p>
            <a
              href="https://www.instagram.com/projetocompaixaoifrs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              <span className="font-semibold">IG</span>
              Seguir no Instagram
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 lg:py-28 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Faça parte dessa história.
            </h2>
            <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
              Seja como voluntário, doador ou parceiro. Sua participação transforma solidariedade em ações concretas que beneficiam a nossa comunidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/como-participar"
                className="px-8 py-3.5 rounded-xl bg-white text-primary-700 font-semibold hover:bg-earth-100 transition-colors shadow-lg"
              >
                Quero participar
              </Link>
              <Link
                to="/contato"
                className="px-8 py-3.5 rounded-xl bg-primary-700 text-white font-semibold hover:bg-primary-800 transition-colors border border-primary-500"
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