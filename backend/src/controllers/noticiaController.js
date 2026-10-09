
import mongoose from 'mongoose'
import Noticia from '../models/Noticia.js'

const allowedFields = [
  'title',
  'slug',
  'excerpt',
  'content',
  'coverImage',
  'category',
  'author',
  'publishedAt',
  'images',
]

function isValidBody(body) {
  return (
    body !== null &&
    typeof body === 'object' &&
    !Array.isArray(body)
  )
}

function getPayload(body) {
  return Object.fromEntries(
    allowedFields
      .filter((field) => Object.hasOwn(body, field))
      .map((field) => [field, body[field]]),
  )
}

function handleError(error, res, next) {
  if (error.code === 11000) {
    return res.status(409).json({
      success: false,
      message: 'Já existe uma notícia com esse slug',
    })
  }

  if (error.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Dados inválidos',
      errors: Object.values(error.errors).map((item) => item.message),
    })
  }

  return next(error)
}

export async function listarNoticias(req, res, next) {
  try {
    const noticias = await Noticia.find()
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean()

    return res.status(200).json({
      success: true,
      count: noticias.length,
      data: noticias,
    })
  } catch (error) {
    return next(error)
  }
}

export async function buscarNoticiaPorSlug(req, res, next) {
  try {
    const noticia = await Noticia.findOne({
      slug: req.params.slug,
    }).lean()

    if (!noticia) {
      return res.status(404).json({
        success: false,
        message: 'Notícia não encontrada',
      })
    }

    return res.status(200).json({
      success: true,
      data: noticia,
    })
  } catch (error) {
    return next(error)
  }
}

export async function criarNoticia(req, res, next) {
  try {
    if (!isValidBody(req.body)) {
      return res.status(400).json({
        success: false,
        message: 'O corpo da requisição deve ser um objeto JSON válido',
      })
    }

    const payload = getPayload(req.body)

    const noticia = await Noticia.create(payload)

    return res.status(201).json({
      success: true,
      message: 'Notícia criada com sucesso',
      data: noticia,
    })
  } catch (error) {
    return handleError(error, res, next)
  }
}

export async function atualizarNoticia(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'ID inválido',
      })
    }

    if (!isValidBody(req.body)) {
      return res.status(400).json({
        success: false,
        message: 'O corpo da requisição deve ser um objeto JSON válido',
      })
    }

    const payload = getPayload(req.body)

    if (Object.keys(payload).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Informe pelo menos um campo válido para atualização',
      })
    }

    const noticia = await Noticia.findById(req.params.id)

    if (!noticia) {
      return res.status(404).json({
        success: false,
        message: 'Notícia não encontrada',
      })
    }

    noticia.set(payload)
    await noticia.save()

    return res.status(200).json({
      success: true,
      message: 'Notícia atualizada com sucesso',
      data: noticia,
    })
  } catch (error) {
    return handleError(error, res, next)
  }
}

export async function excluirNoticia(req, res, next) {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'ID inválido',
      })
    }

    const noticia = await Noticia.findByIdAndDelete(req.params.id)

    if (!noticia) {
      return res.status(404).json({
        success: false,
        message: 'Notícia não encontrada',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Notícia excluída com sucesso',
    })
  } catch (error) {
    return next(error)
  }
}
