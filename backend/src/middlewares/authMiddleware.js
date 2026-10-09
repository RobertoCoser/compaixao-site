import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export async function requireAdmin(req, res, next) {
  const authorization = req.headers.authorization || ''
  const [scheme, token] = authorization.split(' ')

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      success: false,
      message: 'Token de autenticação não informado',
    })
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ['HS256'],
    })

    if (
      typeof payload !== 'object' ||
      payload.role !== 'admin' ||
      !payload.sub
    ) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido',
      })
    }

    const user = await User.findById(payload.sub)

    if (!user || user.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Acesso não autorizado',
      })
    }

    req.user = user
    return next()
  } catch (error) {
    if (
      error.name === 'JsonWebTokenError' ||
      error.name === 'TokenExpiredError' ||
      error.name === 'NotBeforeError' ||
      error.name === 'CastError'
    ) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido ou expirado',
      })
    }

    return next(error)
  }
}
