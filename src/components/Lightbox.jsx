import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({
    image,
    onClose,
    onPrevious,
    onNext,
}) {
    useEffect(() => {
        if (!image) return

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

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            document.body.style.overflow = ''
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [image, onClose, onPrevious, onNext])

    if (!image) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Visualizando ${image.alt}`}
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Fechar galeria"
            >
                <X className="h-6 w-6" />
            </button>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation()
                    onPrevious()
                }}
                className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Imagem anterior"
            >
                <ChevronLeft className="h-7 w-7" />
            </button>

            <div
                className="flex max-h-[90vh] max-w-6xl flex-col items-center"
                onClick={(event) => event.stopPropagation()}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
                />

                <div className="mt-4 text-center text-white">
                    <h2 className="text-lg font-semibold">{image.event}</h2>

                    <p className="mt-1 text-sm text-white/70">
                        {image.category} · {image.year}
                    </p>
                </div>
            </div>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation()
                    onNext()
                }}
                className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Próxima imagem"
            >
                <ChevronRight className="h-7 w-7" />
            </button>
        </div>
    )
}