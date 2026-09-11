import { useEffect } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react'

export default function Lightbox({
  image,
  onClose,
  onPrevious,
  onNext,
}) {
  useEffect(() => {
    if (!image) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onPrevious()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [image, onClose, onPrevious, onNext])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizando ${image.alt}`}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20 sm:right-5 sm:top-5 sm:h-11 sm:w-11"
        aria-label="Fechar galeria"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div
        className="flex h-full w-full max-w-6xl flex-col items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative flex min-h-0 w-full flex-1 items-center justify-center px-0 sm:px-16">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[calc(100dvh-11rem)] max-w-full rounded-lg object-contain shadow-2xl sm:max-h-[calc(100dvh-10rem)] sm:rounded-xl"
          />

          <button
            type="button"
            onClick={onPrevious}
            className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20 sm:bottom-auto sm:left-2 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20 sm:bottom-auto sm:right-2 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>
        </div>

        <div className="w-full shrink-0 px-12 pb-1 pt-3 text-center text-white sm:px-4 sm:pt-4">
          <h2 className="line-clamp-2 text-base font-semibold sm:text-lg">
            {image.event}
          </h2>

          <p className="mt-1 text-xs text-white/70 sm:text-sm">
            {image.category} · {image.year}
          </p>
        </div>
      </div>
    </div>
  )
}