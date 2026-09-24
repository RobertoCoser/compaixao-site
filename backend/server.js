import 'dotenv/config'
import app from './src/app.js'
import { connectDatabase } from './src/config/database.js'

const PORT = process.env.PORT || 5000

async function startServer() {
  await connectDatabase()

  app.listen(PORT, () => {
    console.log(
      `Servidor rodando em http://localhost:${PORT}`,
    )
  })
}

startServer()