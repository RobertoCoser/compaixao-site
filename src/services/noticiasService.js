
const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, '')

async function request(path, options = {}) {
  if (!API_URL) {
    throw new Error('A URL da API não está configurada')
  }

  let response

  try {
    response = await fetch(`${API_URL}${path}`, options)
  } catch {
    throw new Error(
      'Não foi possível conectar à API. Verifique se o backend está em execução.',
    )
  }

  let data

  try {
    data = await response.json()
  } catch {
    throw new Error('A API retornou uma resposta inválida')
  }

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao consultar a API')
  }

  return data
}

export async function listarNoticias() {
  const response = await request('/noticias')

  return response.data
}

export async function buscarNoticiaPorSlug(slug) {
  const response = await request(
    `/noticias/${encodeURIComponent(slug)}`,
  )

  return response.data
}
