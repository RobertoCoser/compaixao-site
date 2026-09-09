import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import NewsCard from '../components/NewsCard'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { noticias } from '../data/noticias'

const categorias = ['Todas', ...new Set(noticias.map((news) => news.category))]

export default function Noticias() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtradas = useMemo(() => {
    return noticias
      .filter((news) => {
        const termo = busca.toLowerCase()

        const matchBusca =
          news.title.toLowerCase().includes(termo) ||
          news.excerpt.toLowerCase().includes(termo)

        const matchCategoria =
          categoria === 'Todas' || news.category === categoria

        return matchBusca && matchCategoria
      })
      .sort(
        (a, b) =>
          new Date(b.publishedAt) - new Date(a.publishedAt),
      )
  }, [busca, categoria])

  const destaque = filtradas[0]
  const restantes = filtradas.slice(1)

  return (
    <section className="min-h-screen bg-earth-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Notícias"
          subtitle="Fique por dentro"
        />

        <div className="mb-10 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-earth-400" />

            <input
              type="search"
              placeholder="Buscar notícias..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              aria-label="Buscar notícias"
              className="w-full rounded-xl border border-earth-200 bg-white py-3 pl-10 pr-4 outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categorias.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setCategoria(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  categoria === category
                    ? 'bg-primary-600 text-white'
                    : 'border border-earth-200 bg-white text-earth-600 hover:border-primary-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {destaque && (
          <ScrollReveal>
            <div className="mb-10">
              <NewsCard news={destaque} featured />
            </div>
          </ScrollReveal>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {restantes.map((news, index) => (
            <ScrollReveal key={news.id} delay={index * 100}>
              <NewsCard news={news} />
            </ScrollReveal>
          ))}
        </div>

        {filtradas.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-earth-500">
              Nenhuma notícia encontrada.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}