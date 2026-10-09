import 'dotenv/config'
import app from './src/app.js'
import { connectDatabase } from './src/config/database.js'

const PORT = process.env.PORT || 5000

async function startServer() {
  if (
    !process.env.JWT_SECRET ||
    process.env.JWT_SECRET.length < 32
  ) {
    throw new Error('JWT_SECRET deve conter pelo menos 32 caracteres')
  }

  await connectDatabase()

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })
}

startServer().catch((error) => {
  console.error('Falha ao iniciar servidor:', error.message)
  process.exit(1)
})
