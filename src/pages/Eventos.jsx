import {
  CalendarDays,
  Clock,
  MapPin,
} from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { eventos } from '../data/eventos'

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString(
    'pt-BR',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  )
}

function EventCard({ event }) {
  const completed = event.status === 'completed'

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-earth-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[16/10] overflow-hidden bg-earth-100">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span
          className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold ${
            completed
              ? 'bg-earth-100 text-earth-600'
              : 'bg-primary-100 text-primary-700'
          }`}
        >
          {completed ? 'Evento realizado' : 'Próximo evento'}
        </span>

        <h3 className="text-xl font-bold text-earth-900">
          {event.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-earth-600">
          {event.description}
        </p>

        <div className="mt-6 space-y-3 border-t border-earth-100 pt-5 text-sm text-earth-600">
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
            <span>{formatDate(event.date)}</span>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Eventos() {
  const upcomingEvents = eventos.filter(
    (event) => event.status === 'upcoming',
  )

  const completedEvents = eventos.filter(
    (event) => event.status === 'completed',
  )

  return (
    <>
      <section className="bg-earth-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <CalendarDays className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Eventos
            </h1>

            <p className="mt-4 text-base leading-7 text-earth-600 sm:text-lg">
              Acompanhe os próximos eventos e confira atividades
              realizadas pelo Projeto COMpaixão.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Próximos Eventos"
            subtitle="Participe"
          />

          {upcomingEvents.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal
                  key={event.id}
                  delay={index * 100}
                  className="h-full"
                >
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-earth-100 bg-earth-50 p-8 text-center">
              <CalendarDays className="mx-auto h-8 w-8 text-earth-400" />

              <p className="mt-3 text-earth-600">
                Nenhum evento programado no momento.
              </p>
            </div>
          )}
        </div>
      </section>

      {completedEvents.length > 0 && (
        <section className="bg-earth-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Eventos Realizados"
              subtitle="Nossa trajetória"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {completedEvents.map((event, index) => (
                <ScrollReveal
                  key={event.id}
                  delay={index * 100}
                  className="h-full"
                >
                  <EventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}