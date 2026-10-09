import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export async function login(req, res) {
  const { email, password } = req.body ?? {}

  if (
    typeof email !== 'string' ||
    typeof password !== 'string' ||
    !email.trim() ||
    !password
  ) {
    return res.status(400).json({
      success: false,
      message: 'E-mail e senha são obrigatórios',
    })
  }

  const user = await User.findOne({
    email: email.trim().toLowerCase(),
    role: 'admin',
  }).select('+password')

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({
      success: false,
      message: 'Credenciais inválidas',
    })
  }

  const token = jwt.sign(
    { role: 'admin' },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRES_IN || '2h',
      algorithm: 'HS256',
    },
  )

  return res.status(200).json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  })
}

export async function getMe(req, res) {
  return res.status(200).json({
    success: true,
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  })
}
