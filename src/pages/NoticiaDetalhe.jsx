import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  Newspaper,
  User,
} from 'lucide-react'
import { noticias } from '../data/noticias'

export default function NoticiaDetalhe() {
  const { slug } = useParams()

  const noticia = noticias.find(
    (item) => item.slug === slug,
  )

  if (!noticia) {
    return (
      <section className="flex min-h-[60vh] items-center bg-earth-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
            <Newspaper className="h-8 w-8" />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-earth-900">
            Notícia não encontrada
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-earth-600">
            A notícia que você está procurando não existe ou não está mais
            disponível.
          </p>

          <Link
            to="/noticias"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para notícias
          </Link>
        </div>
      </section>
    )
  }

  const formattedDate = new Date(
    `${noticia.publishedAt}T12:00:00`,
  ).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <article className="bg-white">
      <header className="bg-earth-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para notícias
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
              {noticia.category}
            </span>

            <h1 className="mt-5 break-words text-3xl font-bold leading-tight tracking-tight text-earth-900 sm:text-4xl lg:text-5xl">
              {noticia.title}
            </h1>

            <p className="mt-5 text-base leading-7 text-earth-600 sm:text-xl sm:leading-8">
              {noticia.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-earth-500">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />

                <time dateTime={noticia.publishedAt}>
                  {formattedDate}
                </time>
              </div>

              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{noticia.author}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-earth-100 shadow-sm">
          <img
            src={noticia.coverImage}
            alt={noticia.title}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
          />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="break-words space-y-5 text-base leading-7 text-earth-700 sm:space-y-6 sm:text-lg sm:leading-8">
            {noticia.content
              .split('\n')
              .filter((paragraph) => paragraph.trim())
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>

          {noticia.images?.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-earth-900">
                Mais registros
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {noticia.images.map((image, index) => {
                  const src =
                    typeof image === 'string'
                      ? image
                      : image.src

                  const alt =
                    typeof image === 'string'
                      ? `${noticia.title} - imagem ${index + 1}`
                      : image.alt ||
                        `${noticia.title} - imagem ${index + 1}`

                  return (
                    <img
                      key={`${src}-${index}`}
                      src={src}
                      alt={alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                    />
                  )
                })}
              </div>
            </section>
          )}

          <div className="mt-12 border-t border-earth-200 pt-8">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 font-semibold text-primary-700 transition hover:text-primary-800"
            >
              <ArrowLeft className="h-4 w-4" />
              Ver todas as notícias
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}