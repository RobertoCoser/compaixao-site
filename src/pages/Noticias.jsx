import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, ArrowRight } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { noticias } from '../data/noticias'

const categorias = ['Todas', ...new Set(noticias.map(n => n.category))]

export default function Noticias() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtradas = useMemo(() => {
    return noticias.filter(n => {
      const matchBusca = n.title.toLowerCase().includes(busca.toLowerCase()) || 
                         n.excerpt.toLowerCase().includes(busca.toLowerCase())
      const matchCat = categoria === 'Todas' || n.category === categoria
      return matchBusca && matchCat
    }).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
  }, [busca, categoria])

  const destaque = filtradas[0]
  const restantes = filtradas.slice(1)

  return (
    <section className="py-20 lg:py-28 bg-earth-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Notícias" subtitle="Fique por dentro" />

        {/* Filtros */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-earth-400" />
            <input
              type="text"
              placeholder="Buscar notícias..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-earth-200 bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categorias.map(cat => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  categoria === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-earth-600 border border-earth-200 hover:border-primary-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destaque */}
        {destaque && (
          <ScrollReveal>
            <article className="mb-10 bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100">
              <div className="grid md:grid-cols-2">
                <div className="aspect-[16/10] md:aspect-auto">
                  <img src={destaque.coverImage} alt={destaque.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-semibold mb-3">
                    {destaque.category}
                  </span>
                  <h3 className="text-2xl font-bold text-earth-900 mb-3 hover:text-primary-700 transition-colors">
                    <Link to={`/noticias/${destaque.slug}`}>{destaque.title}</Link>
                  </h3>
                  <p className="text-earth-600 mb-4 line-clamp-3">{destaque.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-earth-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    {new Date(destaque.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                  <Link
                    to={`/noticias/${destaque.slug}`}
                    className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-800"
                  >
                    Ler artigo completo <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          </ScrollReveal>
        )}

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {restantes.map((news, index) => (
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
                    <span className="px-2 py-1 rounded-md bg-primary-50 text-primary-700 font-medium">{news.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(news.publishedAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-earth-900 mb-2 line-clamp-2 group-hover:text-primary-700 transition-colors">
                    <Link to={`/noticias/${news.slug}`}>{news.title}</Link>
                  </h3>
                  <p className="text-sm text-earth-600 line-clamp-3 mb-4 flex-1">{news.excerpt}</p>
                  <Link to={`/noticias/${news.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700">
                    Ler mais <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-earth-500">Nenhuma notícia encontrada.</p>
          </div>
        )}
      </div>
    </section>
  )
}