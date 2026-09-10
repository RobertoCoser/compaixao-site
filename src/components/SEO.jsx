import { useEffect } from 'react'

const SITE_NAME = 'Projeto COMpaixão'
const SITE_URL = 'https://projetocompaixao.vercel.app'

const DEFAULT_DESCRIPTION =
  'Conheça o Projeto COMpaixão, iniciativa do IFRS Campus Bento Gonçalves voltada à solidariedade, cidadania e participação comunitária.'

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = '/favicon.svg',
  type = 'website',
  noIndex = false,
}) {
  useEffect(() => {
    const pageTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | IFRS Campus Bento Gonçalves`

    const normalizedPath = path.startsWith('/')
      ? path
      : `/${path}`

    const pageUrl = `${SITE_URL}${normalizedPath}`

    const imageUrl = image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`

    document.title = pageTitle

    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`,
      )

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    const setCanonical = (url) => {
      let canonical = document.head.querySelector(
        'link[rel="canonical"]',
      )

      if (!canonical) {
        canonical = document.createElement('link')
        canonical.setAttribute('rel', 'canonical')
        document.head.appendChild(canonical)
      }

      canonical.setAttribute('href', url)
    }

    setMeta(
      'name',
      'description',
      description,
    )

    setMeta(
      'name',
      'robots',
      noIndex ? 'noindex, nofollow' : 'index, follow',
    )

    setMeta(
      'property',
      'og:title',
      pageTitle,
    )

    setMeta(
      'property',
      'og:description',
      description,
    )

    setMeta(
      'property',
      'og:type',
      type,
    )

    setMeta(
      'property',
      'og:url',
      pageUrl,
    )

    setMeta(
      'property',
      'og:site_name',
      SITE_NAME,
    )

    setMeta(
      'property',
      'og:locale',
      'pt_BR',
    )

    setMeta(
      'property',
      'og:image',
      imageUrl,
    )

    setMeta(
      'name',
      'twitter:card',
      'summary_large_image',
    )

    setMeta(
      'name',
      'twitter:title',
      pageTitle,
    )

    setMeta(
      'name',
      'twitter:description',
      description,
    )

    setMeta(
      'name',
      'twitter:image',
      imageUrl,
    )

    setCanonical(pageUrl)
  }, [
    title,
    description,
    path,
    image,
    type,
    noIndex,
  ])

  return null
}