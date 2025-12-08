import express from 'express'
import cors from 'cors'
import { z } from 'zod'
import 'dotenv/config'
import { PrismaClient } from '../generated/client/index.js'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const app = express()

const url = `${process.env.DATABASE_URL}`

const adapter = new PrismaBetterSqlite3({ url })
const prisma = new PrismaClient({ adapter })

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('HMCTS Task Management API is running')
})

const taskSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title must be a string',
    })
    .nonempty('Title cannot be empty'),

  status: z
    .string({
      required_error: 'Status is required',
      invalid_type_error: 'Status must be a string',
    })
    .nonempty('Status cannot be empty'),

  dueDate: z
    .string({
      required_error: 'Due date is required',
      invalid_type_error: 'Due date must be a string',
    })
    .nonempty('Due date cannot be empty')
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Due date must be a valid date string',
    }),

  description: z.string().optional(),
})

app.post('/tasks', async (req, res, next) => {
  try {
    const validatedTask = taskSchema.parse(req.body)
    const createdTask = await prisma.task.create({
      data: {
        title: validatedTask.title,
        description: validatedTask.description || null,
        status: validatedTask.status,
        dueDate: new Date(validatedTask.dueDate),
      },
    })
    res.status(201).json({
      message: 'Task created successfully',
      task: createdTask,
    })
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: err.issues,
    })
  }
  console.error(err)
  res.status(500).json({ message: 'Internal server error' })
})

export default app
