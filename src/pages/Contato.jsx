import {
  HeartHandshake,
  Mail,
  MessageCircle,
  Users,
} from 'lucide-react'
import ContactForm from '../components/ContactForm'

const contactReasons = [
  {
    icon: Users,
    title: 'Participação',
    description:
      'Entre em contato para saber mais sobre possibilidades de voluntariado e participação nas ações.',
  },
  {
    icon: HeartHandshake,
    title: 'Apoio e parcerias',
    description:
      'Instituições, grupos e apoiadores podem conversar conosco sobre formas de colaboração.',
  },
  {
    icon: MessageCircle,
    title: 'Dúvidas e informações',
    description:
      'Envie sua mensagem para conhecer melhor o projeto, suas iniciativas e atividades.',
  },
]

export default function Contato() {
  return (
    <>
      <section className="bg-earth-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
              <Mail className="h-7 w-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-earth-900 sm:text-4xl">
              Entre em Contato
            </h1>

            <p className="mt-4 text-base leading-7 text-earth-600 sm:text-lg">
              Quer participar, apoiar ou conhecer melhor o Projeto COMpaixão?
              Envie uma mensagem e fique mais perto das nossas iniciativas.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <div>
              <h2 className="text-2xl font-bold text-earth-900">
                Como podemos ajudar?
              </h2>

              <p className="mt-3 leading-7 text-earth-600">
                Este espaço foi pensado para aproximar pessoas interessadas
                em conhecer, participar ou contribuir com o projeto.
              </p>

              <div className="mt-8 space-y-4">
                {contactReasons.map((reason) => {
                  const Icon = reason.icon

                  return (
                    <div
                      key={reason.title}
                      className="flex items-start gap-3 rounded-2xl border border-earth-100 bg-white p-4 shadow-sm sm:gap-4 sm:p-5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-bold text-earth-900">
                          {reason.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-earth-600">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 rounded-2xl bg-primary-50 p-5">
                <p className="text-sm leading-6 text-primary-900">
                  As informações oficiais de contato e atendimento serão
                  disponibilizadas posteriormente.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}