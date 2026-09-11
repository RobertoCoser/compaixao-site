import { useMemo, useState } from 'react'
import { Camera } from 'lucide-react'
import Lightbox from '../components/Lightbox'
import { galeria } from '../data/galeria'

export default function Galeria() {
  const [category, setCategory] = useState('Todos')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const categories = useMemo(
    () => [
      'Todos',
      ...new Set(galeria.map((item) => item.category)),
    ],
    [],
  )

  const filteredImages = useMemo(() => {
    if (category === 'Todos') {
      return galeria
    }

    return galeria.filter(
      (item) => item.category === category,
    )
  }, [category])

  const selectedImage =
    selectedIndex !== null
      ? filteredImages[selectedIndex]
      : null

  const openImage = (index) => {
    setSelectedIndex(index)
  }

  const closeImage = () => {
    setSelectedIndex(null)
  }

  const previousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === 0
        ? filteredImages.length - 1
        : current - 1
    })
  }

  const nextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return null

      return current === filteredImages.length - 1
        ? 0
        : current + 1
    })
  }

  const changeCategory = (newCategory) => {
    setCategory(newCategory)
    setSelectedIndex(null)
  }

  return (
    <>
      <section className="min-h-screen bg-earth-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <Camera className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Galeria
            </h1>

            <p className="mt-4 text-base leading-7 text-earth-600 sm:text-lg">
              Conheça alguns dos momentos, ações e histórias que fazem parte
              do Projeto COMpaixão.
            </p>
          </div>

          <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-10 sm:overflow-visible sm:px-0">
            <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap sm:justify-center">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => changeCategory(item)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                    category === item
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-white text-earth-600 shadow-sm ring-1 ring-earth-200 hover:bg-earth-100 hover:text-primary-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openImage(index)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-earth-200 text-left shadow-sm outline-none transition-shadow hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                aria-label={`Abrir foto: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                    {image.category} · {image.year}
                  </p>

                  <h2 className="mt-1 line-clamp-2 text-base font-semibold sm:text-lg">
                    {image.event}
                  </h2>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="mt-10 rounded-2xl border border-earth-100 bg-white p-8 text-center shadow-sm sm:p-10">
              <Camera className="mx-auto h-10 w-10 text-earth-400" />

              <p className="mt-3 text-earth-600">
                Nenhuma foto disponível nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Lightbox
        image={selectedImage}
        onClose={closeImage}
        onPrevious={previousImage}
        onNext={nextImage}
      />
    </>
  )
}