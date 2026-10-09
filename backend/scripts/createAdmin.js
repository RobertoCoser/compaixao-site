
import 'dotenv/config'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import { createInterface } from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import User from '../src/models/User.js'

const readline = createInterface({ input, output })

async function createAdmin() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI não configurada')
    }

    const name = (await readline.question('Nome do administrador: ')).trim()
    const email = (await readline.question('E-mail: ')).trim().toLowerCase()
    const password = await readline.question('Senha (mínimo 12 caracteres): ')

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Nome ou e-mail inválido')
    }

    if (password.length < 12) {
      throw new Error('A senha deve conter pelo menos 12 caracteres')
    }

    await mongoose.connect(process.env.MONGODB_URI)

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new Error('Já existe um usuário com esse e-mail')
    }

    const passwordHash = await bcrypt.hash(password, 12)

    const user = await User.create({
      name,
      email,
      password: passwordHash,
      role: 'admin',
    })

    console.log(`Administrador criado: ${user.email}`)
  } catch (error) {
    console.error('Erro:', error.message)
    process.exitCode = 1
  } finally {
    readline.close()
    await mongoose.disconnect()
  }
}

createAdmin()
