
import 'dotenv/config'
import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = createInterface({ input, output })
const baseURL = 'http://localhost:5000/api/v1'
const prefixoSlug = 'teste-visual-compaixao-'

async function request(path, options = {}) {
  const response = await fetch(`${baseURL}${path}`, options)

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.message || `Erro HTTP ${response.status}`,
    )
  }

  return data
}

async function autenticarAdministrador() {
  const email = await rl.question('E-mail do administrador: ')
  const password = await rl.question('Senha do administrador: ')

  const resultado = await request('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })

  if (!resultado.token) {
    throw new Error('A API não retornou um token de autenticação')
  }

  console.log('\nAutenticação realizada com sucesso.')

  return resultado.token
}

function getHeaders(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
}

function getDataAtual() {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

async function criarNoticia() {
  console.log('\n=== CRIAR NOTÍCIA VISUAL DE TESTE ===\n')

  const token = await autenticarAdministrador()

  const slug = `${prefixoSlug}${Date.now()}`

  const novaNoticia = {
    title: 'Notícia de teste da integração COMpaixão',
    slug,
    excerpt:
      'Esta publicação temporária foi criada para validar a integração entre React, Express e MongoDB.',
    content:
      'Esta é uma notícia temporária utilizada para testar o funcionamento do site do Projeto COMpaixão.\n\nO objetivo é confirmar que o conteúdo cadastrado no MongoDB aparece corretamente na página inicial, na listagem de notícias e na página de detalhes.\n\nApós a conclusão dos testes, esta publicação será excluída do banco de dados.',
    coverImage:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
    category: 'Testes',
    author: 'Projeto COMpaixão',
    publishedAt: getDataAtual(),
    images: [],
  }

  const resultado = await request('/noticias', {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify(novaNoticia),
  })

  console.log('\nNotícia criada com sucesso!')
  console.log(`ID: ${resultado.data._id}`)
  console.log(`Título: ${resultado.data.title}`)
  console.log(`Slug: ${resultado.data.slug}`)

  console.log('\nAcesse no navegador:')
  console.log('Página inicial: /')
  console.log('Listagem: /noticias')
  console.log(`Detalhes: /noticias/${slug}`)

  console.log('\nPara excluir depois do teste, execute:')
  console.log(`node scripts/testNoticiaVisual.js excluir ${slug}`)
}

async function excluirNoticia(slug) {
  console.log('\n=== EXCLUIR NOTÍCIA VISUAL DE TESTE ===\n')

  if (
    !slug ||
    !new RegExp(`^${prefixoSlug}\\d+$`).test(slug)
  ) {
    throw new Error(
      'Informe um slug válido de notícia visual de teste',
    )
  }

  const consulta = await request(
    `/noticias/${encodeURIComponent(slug)}`,
  )

  const noticia = consulta.data

  console.log(`Título: ${noticia.title}`)
  console.log(`Slug: ${noticia.slug}`)
  console.log(`ID: ${noticia._id}`)

  const confirmacao = await rl.question(
    '\nConfirma a exclusão desta notícia de teste? (s/N): ',
  )

  if (confirmacao.trim().toLowerCase() !== 's') {
    console.log('\nExclusão cancelada.')
    return
  }

  const token = await autenticarAdministrador()

  await request(`/noticias/${noticia._id}`, {
    method: 'DELETE',
    headers: getHeaders(token),
  })

  console.log('\nNotícia de teste excluída com sucesso!')
}

async function main() {
  try {
    const [acao, slug] = process.argv.slice(2)

    if (acao === 'criar') {
      await criarNoticia()
    } else if (acao === 'excluir') {
      await excluirNoticia(slug)
    } else {
      console.log('Utilização:')
      console.log('node scripts/testNoticiaVisual.js criar')
      console.log(
        'node scripts/testNoticiaVisual.js excluir <slug>',
      )
      process.exitCode = 1
    }
  } catch (error) {
    console.error('\nErro:', error.message)
    process.exitCode = 1
  } finally {
    rl.close()
  }
}

main()
