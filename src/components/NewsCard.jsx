import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('pt-BR')
}

export default function NewsCard({ news, featured = false }) {
  if (featured) {
    return (
      <article className="overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
            <img
              src={news.coverImage}
              alt={news.title}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="flex flex-col justify-center p-8">
            <span className="mb-3 inline-block w-fit rounded-md bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              {news.category}
            </span>

            <h2 className="mb-3 text-2xl font-bold text-earth-900 transition-colors hover:text-primary-700">
              <Link to={`/noticias/${news.slug}`}>
                {news.title}
              </Link>
            </h2>

            <p className="mb-4 line-clamp-3 text-earth-600">
              {news.excerpt}
            </p>

            <div className="mb-4 flex items-center gap-2 text-sm text-earth-500">
              <Calendar className="h-4 w-4" />
              <time dateTime={news.publishedAt}>
                {formatDate(news.publishedAt)}
              </time>
            </div>

            <Link
              to={`/noticias/${news.slug}`}
              className="inline-flex items-center gap-2 font-semibold text-primary-700 hover:text-primary-800"
            >
              Ler artigo completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={news.coverImage}
          alt={news.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3 text-xs text-earth-500">
          <span className="rounded-md bg-primary-50 px-2 py-1 font-medium text-primary-700">
            {news.category}
          </span>

          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={news.publishedAt}>
              {formatDate(news.publishedAt)}
            </time>
          </span>
        </div>

        <h2 className="mb-2 line-clamp-2 text-lg font-bold text-earth-900 transition-colors group-hover:text-primary-700">
          <Link to={`/noticias/${news.slug}`}>
            {news.title}
          </Link>
        </h2>

        <p className="mb-4 line-clamp-3 flex-1 text-sm text-earth-600">
          {news.excerpt}
        </p>

        <Link
          to={`/noticias/${news.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Ler mais
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}