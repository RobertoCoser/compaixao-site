
import mongoose from 'mongoose'

function isValidDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false
  }

  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

const imageSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
      trim: true,
    },
    alt: {
      type: String,
      trim: true,
      default: '',
    },
  },
  { _id: false },
)

const noticiaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    coverImage: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      default: 'Projeto COMpaixão',
    },
    publishedAt: {
      type: String,
      required: true,
      validate: {
        validator: isValidDate,
        message: 'A data de publicação deve ser uma data válida no formato AAAA-MM-DD',
      },
    },
    images: {
      type: [imageSchema],
      default: [],
    },
  },
  { timestamps: true },
)

noticiaSchema.index({ publishedAt: -1 })

const Noticia = mongoose.model('Noticia', noticiaSchema)

export default Noticia
