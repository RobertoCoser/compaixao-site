import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: '',
      }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!form.name.trim()) {
      newErrors.name = 'Informe seu nome.'
    }

    if (!form.email.trim()) {
      newErrors.email = 'Informe seu e-mail.'
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Informe um e-mail válido.'
    }

    if (!form.type) {
      newErrors.type = 'Selecione o motivo do contato.'
    }

    if (!form.message.trim()) {
      newErrors.message = 'Escreva uma mensagem.'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.'
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="rounded-2xl border border-earth-100 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-earth-900">
        Envie uma mensagem
      </h2>

      <p className="mt-2 text-sm leading-6 text-earth-600">
        Preencha o formulário e conte como podemos ajudar.
      </p>

      {submitted && (
        <div
          className="mt-6 flex items-start gap-3 rounded-xl bg-primary-50 p-4 text-primary-800"
          role="status"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-semibold">Mensagem enviada!</p>
            <p className="mt-1 text-sm">
              Esta é uma demonstração. O envio real será disponibilizado
              posteriormente.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-7 space-y-5" noValidate>
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-earth-800"
          >
            Nome *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Seu nome"
            autoComplete="name"
            className={`w-full rounded-xl border bg-white px-4 py-3 text-earth-900 outline-none transition placeholder:text-earth-400 focus:ring-2 focus:ring-primary-200 ${
              errors.name
                ? 'border-red-400'
                : 'border-earth-200 focus:border-primary-500'
            }`}
          />

          {errors.name && (
            <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-earth-800"
            >
              E-mail *
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              autoComplete="email"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-earth-900 outline-none transition placeholder:text-earth-400 focus:ring-2 focus:ring-primary-200 ${
                errors.email
                  ? 'border-red-400'
                  : 'border-earth-200 focus:border-primary-500'
              }`}
            />

            {errors.email && (
              <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-earth-800"
            >
              Telefone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              autoComplete="tel"
              className="w-full rounded-xl border border-earth-200 bg-white px-4 py-3 text-earth-900 outline-none transition placeholder:text-earth-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-sm font-semibold text-earth-800"
          >
            Motivo do contato *
          </label>

          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-earth-900 outline-none transition focus:ring-2 focus:ring-primary-200 ${
              errors.type
                ? 'border-red-400'
                : 'border-earth-200 focus:border-primary-500'
            }`}
          >
            <option value="">Selecione uma opção</option>
            <option value="voluntariado">Quero ser voluntário</option>
            <option value="contribuicao">Quero contribuir</option>
            <option value="parceria">Parcerias e apoio</option>
            <option value="duvida">Dúvidas</option>
            <option value="outro">Outro assunto</option>
          </select>

          {errors.type && (
            <p className="mt-1.5 text-sm text-red-600">{errors.type}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-earth-800"
          >
            Mensagem *
          </label>

          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem..."
            className={`w-full resize-none rounded-xl border bg-white px-4 py-3 text-earth-900 outline-none transition placeholder:text-earth-400 focus:ring-2 focus:ring-primary-200 ${
              errors.message
                ? 'border-red-400'
                : 'border-earth-200 focus:border-primary-500'
            }`}
          />

          {errors.message && (
            <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-primary-700 sm:w-auto"
        >
          <Send className="h-4 w-4" />
          Enviar mensagem
        </button>
      </form>
    </div>
  )
}