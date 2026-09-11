import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import NewsCard from '../components/NewsCard'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { noticias } from '../data/noticias'

const categorias = [
  'Todas',
  ...new Set(noticias.map((news) => news.category)),
]

export default function Noticias() {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase()

    return noticias
      .filter((news) => {
        const matchBusca =
          !termo ||
          news.title.toLowerCase().includes(termo) ||
          news.excerpt.toLowerCase().includes(termo)

        const matchCategoria =
          categoria === 'Todas' || news.category === categoria

        return matchBusca && matchCategoria
      })
      .sort(
        (a, b) =>
          new Date(`${b.publishedAt}T12:00:00`) -
          new Date(`${a.publishedAt}T12:00:00`),
      )
  }, [busca, categoria])

  const destaque = filtradas[0]
  const restantes = filtradas.slice(1)

  return (
    <section className="min-h-screen bg-earth-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Notícias"
          subtitle="Fique por dentro"
        />

        <div className="mb-8 space-y-4 sm:mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-earth-400" />

            <input
              type="search"
              placeholder="Buscar notícias..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              aria-label="Buscar notícias"
              className="w-full rounded-xl border border-earth-200 bg-white py-3 pl-10 pr-4 text-earth-900 outline-none transition-all placeholder:text-earth-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
              {categorias.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setCategoria(category)}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    categoria === category
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'border border-earth-200 bg-white text-earth-600 hover:border-primary-300 hover:text-primary-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {destaque && (
          <ScrollReveal>
            <div className="mb-8 sm:mb-10">
              <NewsCard
                news={destaque}
                featured
              />
            </div>
          </ScrollReveal>
        )}

        {restantes.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {restantes.map((news, index) => (
              <ScrollReveal
                key={news.id}
                delay={index * 100}
                className="h-full"
              >
                <NewsCard news={news} />
              </ScrollReveal>
            ))}
          </div>
        )}

        {filtradas.length === 0 && (
          <div className="rounded-2xl border border-earth-100 bg-white px-5 py-12 text-center shadow-sm sm:py-16">
            <Search className="mx-auto h-9 w-9 text-earth-300" />

            <p className="mt-4 font-medium text-earth-700">
              Nenhuma notícia encontrada.
            </p>

            <p className="mt-1 text-sm text-earth-500">
              Tente alterar o termo da busca ou selecionar outra categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}