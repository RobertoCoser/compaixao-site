import {
  Accessibility,
  Baby,
  Heart,
  Recycle,
  Sprout,
  Users,
} from 'lucide-react'

const iconMap = {
  Heart,
  Sprout,
  Baby,
  Users,
  Accessibility,
  Recycle,
}

export default function ActionCard({ action }) {
  const Icon = iconMap[action.icon] || Heart

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md md:flex-row">
      <div className="aspect-[4/3] overflow-hidden md:w-2/5 md:aspect-auto">
        <img
          src={action.image}
          alt={action.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-center p-6 md:w-3/5">
        <div
          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${action.bg}`}
        >
          <Icon className={`h-5 w-5 ${action.color}`} />
        </div>

        <h2 className="mb-2 text-xl font-bold text-earth-900">
          {action.title}
        </h2>

        <p className="mb-3 text-sm leading-relaxed text-earth-600">
          {action.description}
        </p>

        <p className="text-sm leading-relaxed text-earth-500">
          {action.longDescription}
        </p>
      </div>
    </article>
  )
}