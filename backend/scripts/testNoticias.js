
import 'dotenv/config'
import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = createInterface({ input, output })
const baseURL = 'http://localhost:5000/api/v1'

async function request(path, options = {}) {
  const response = await fetch(`${baseURL}${path}`, options)
  const data = await response.json()

  return {
    status: response.status,
    data,
  }
}

function verificar(nome, resultado, statusEsperado) {
  const aprovado = resultado.status === statusEsperado

  console.log(
    `${aprovado ? 'OK' : 'FALHOU'} | ${nome} | HTTP ${resultado.status}`,
  )

  if (!aprovado) {
    console.log('Resposta:', JSON.stringify(resultado.data, null, 2))
    throw new Error(`Falha no teste: ${nome}`)
  }

  return resultado.data
}

async function main() {
  let token
  let noticiaId

  try {
    const email = await rl.question('E-mail do administrador: ')
    const password = await rl.question('Senha do administrador: ')

    const login = await request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    const loginData = verificar('Login', login, 200)
    token = loginData.token

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }

    const slug = `teste-api-${Date.now()}`

    const novaNoticia = {
      title: 'Notícia temporária de teste',
      slug,
      excerpt: 'Registro criado exclusivamente para testar a API.',
      content: 'Este conteúdo será removido ao final dos testes.',
      coverImage: 'https://example.com/imagem-teste.jpg',
      category: 'Testes',
      author: 'Projeto COMpaixão',
      publishedAt: '2026-10-09',
      images: [],
    }

    const criacao = await request('/noticias', {
      method: 'POST',
      headers,
      body: JSON.stringify(novaNoticia),
    })

    const noticiaCriada = verificar('Criar notícia', criacao, 201)
    noticiaId = noticiaCriada.data._id

    const consulta = await request(`/noticias/${slug}`)
    verificar('Consultar notícia pelo slug', consulta, 200)

    const atualizacao = await request(`/noticias/${noticiaId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        title: 'Notícia temporária atualizada',
      }),
    })

    const noticiaAtualizada = verificar(
      'Atualizar notícia',
      atualizacao,
      200,
    )

    if (
      noticiaAtualizada.data.title !==
      'Notícia temporária atualizada'
    ) {
      throw new Error('O título não foi atualizado corretamente')
    }

    const exclusao = await request(`/noticias/${noticiaId}`, {
      method: 'DELETE',
      headers,
    })

    verificar('Excluir notícia', exclusao, 200)
    noticiaId = null

    const consultaFinal = await request(`/noticias/${slug}`)
    verificar('Confirmar exclusão', consultaFinal, 404)

    console.log('\nTodos os testes do CRUD foram aprovados!')
  } catch (error) {
    console.error('\nErro:', error.message)
    process.exitCode = 1
  } finally {
    if (noticiaId && token) {
      console.log('\nTentando remover o registro de teste restante...')

      try {
        const response = await request(`/noticias/${noticiaId}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        console.log('Limpeza:', response.status)
      } catch (error) {
        console.error('Falha na limpeza:', error.message)
      }
    }

    rl.close()
  }
}

main()
