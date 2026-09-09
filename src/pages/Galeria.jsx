import { useMemo, useState } from 'react'
import { Camera } from 'lucide-react'
import Lightbox from '../components/Lightbox'
import { galeria } from '../data/galeria'

export default function Galeria() {
  const [category, setCategory] = useState('Todos')
  const [selectedIndex, setSelectedIndex] = useState(null)

  const categories = useMemo(() => {
    return ['Todos', ...new Set(galeria.map((item) => item.category))]
  }, [])

  const filteredImages = useMemo(() => {
    if (category === 'Todos') {
      return galeria
    }

    return galeria.filter((item) => item.category === category)
  }, [category])

  const selectedImage =
    selectedIndex !== null ? filteredImages[selectedIndex] : null

  const openImage = (index) => {
    setSelectedIndex(index)
  }

  const closeImage = () => {
    setSelectedIndex(null)
  }

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredImages.length - 1 : current - 1,
    )
  }

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === filteredImages.length - 1 ? 0 : current + 1,
    )
  }

  const changeCategory = (newCategory) => {
    setCategory(newCategory)
    setSelectedIndex(null)
  }

  return (
    <>
      <section className="bg-earth-50 py-16 sm:py-20">
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

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => changeCategory(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? 'bg-primary-600 text-white shadow-sm'
                    : 'bg-white text-earth-600 shadow-sm ring-1 ring-earth-200 hover:bg-earth-100'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => openImage(index)}
                className="group relative overflow-hidden rounded-2xl bg-earth-200 text-left shadow-sm"
                aria-label={`Abrir foto: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                    {image.category} · {image.year}
                  </p>

                  <h2 className="mt-1 text-lg font-semibold">
                    {image.event}
                  </h2>
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
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