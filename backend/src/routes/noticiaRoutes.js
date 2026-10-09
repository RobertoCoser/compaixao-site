
import { Router } from 'express'
import {
  listarNoticias,
  buscarNoticiaPorSlug,
  criarNoticia,
  atualizarNoticia,
  excluirNoticia,
} from '../controllers/noticiaController.js'
import { requireAdmin } from '../middlewares/authMiddleware.js'

const router = Router()

router.get('/', listarNoticias)
router.get('/:slug', buscarNoticiaPorSlug)

router.post('/', requireAdmin, criarNoticia)
router.put('/:id', requireAdmin, atualizarNoticia)
router.delete('/:id', requireAdmin, excluirNoticia)

export default router
