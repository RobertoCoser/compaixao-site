import express from 'express'
import cors from 'cors'
import healthRoutes from './routes/healthRoutes.js'
import { notFound } from './middlewares/notFound.js'
import { errorHandler } from './middlewares/errorHandler.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/health', healthRoutes)

app.use(notFound)
app.use(errorHandler)

export default app