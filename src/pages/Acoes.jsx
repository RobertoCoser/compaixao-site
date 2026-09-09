import ActionCard from '../components/ActionCard'
import SectionTitle from '../components/SectionTitle'
import ScrollReveal from '../components/ScrollReveal'
import { acoes } from '../data/acoes'

export default function Acoes() {
  return (
    <section className="min-h-screen bg-earth-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Nossas Ações"
          subtitle="Conheça nosso trabalho"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {acoes.map((action, index) => (
            <ScrollReveal
              key={action.id}
              delay={index * 100}
            >
              <ActionCard action={action} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}