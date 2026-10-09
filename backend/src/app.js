import express from 'express'
import cors from 'cors'
import healthRoutes from './routes/healthRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(express.json({ limit: '100kb' }))

app.use('/api/v1/health', healthRoutes)
app.use('/api/v1/auth', authRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
