import { Link } from 'react-router-dom'
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Megaphone,
  MessageCircle,
  Users,
} from 'lucide-react'

const participationOptions = [
  {
    icon: Users,
    title: 'Seja voluntário',
    description:
      'Participe das ações do projeto e contribua com seu tempo, suas habilidades e sua vontade de fazer a diferença.',
    items: [
      'Participe das atividades e ações',
      'Colabore na organização de campanhas',
      'Compartilhe conhecimentos e habilidades',
    ],
  },
  {
    icon: HandHeart,
    title: 'Contribua',
    description:
      'Ajude a fortalecer nossas iniciativas por meio de contribuições destinadas às campanhas e ações desenvolvidas pelo projeto.',
    items: [
      'Apoie campanhas de arrecadação',
      'Contribua com materiais necessários',
      'Ajude iniciativas em andamento',
    ],
  },
  {
    icon: Megaphone,
    title: 'Apoie e divulgue',
    description:
      'Você também pode fazer parte ampliando o alcance das ações e ajudando mais pessoas a conhecerem o projeto.',
    items: [
      'Compartilhe nossas ações',
      'Divulgue campanhas e iniciativas',
      'Ajude a conectar novos apoiadores',
    ],
  },
]

const steps = [
  {
    number: '01',
    title: 'Escolha como participar',
    description:
      'Conheça as possibilidades e encontre a forma de colaboração que mais combina com você.',
  },
  {
    number: '02',
    title: 'Entre em contato',
    description:
      'Envie uma mensagem demonstrando seu interesse em participar ou contribuir com o projeto.',
  },
  {
    number: '03',
    title: 'Conecte-se ao projeto',
    description:
      'Nossa equipe poderá apresentar as ações e oportunidades disponíveis para colaboração.',
  },
]

export default function ComoParticipar() {
  return (
    <>
      <section className="bg-earth-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <HeartHandshake className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Como Participar
            </h1>

            <p className="mt-4 text-base leading-7 text-earth-600 sm:text-lg">
              Existem diferentes formas de fazer parte do Projeto COMpaixão.
              Escolha como você gostaria de contribuir e venha construir essa
              história conosco.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3 md:gap-6">
            {participationOptions.map((option) => {
              const Icon = option.icon

              return (
                <article
                  key={option.title}
                  className="flex h-full flex-col rounded-2xl border border-earth-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-earth-900">
                    {option.title}
                  </h2>

                  <p className="mt-3 leading-7 text-earth-600">
                    {option.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {option.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-earth-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contato"
                    className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
                  >
                    Quero participar
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-700">
              É simples participar
            </span>

            <h2 className="mt-3 text-3xl font-bold text-earth-900">
              Como funciona?
            </h2>

            <p className="mt-4 text-earth-600">
              O primeiro passo para contribuir é demonstrar seu interesse.
              Depois disso, você poderá conhecer melhor as possibilidades de
              participação.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <span className="text-4xl font-bold text-primary-200">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-earth-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-earth-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-700 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
            <MessageCircle className="h-7 w-7" />
          </div>

          <h2 className="mt-5 text-3xl font-bold text-white">
            Quer fazer parte?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Entre em contato e descubra como você pode contribuir com as ações
            e iniciativas do Projeto COMpaixão.
          </p>

          <Link
            to="/contato"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 shadow-sm transition hover:bg-earth-50 sm:w-auto"
          >
            Entre em contato
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}