import express from 'express'
import cors from 'cors'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('HMCTS Task Management API is running')
})

const taskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.string().min(1, 'Status is required'),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Due date must be a valid date string',
  }),
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
      errors: err.errors,
    })
  }
  console.error(err)

  res.status(500).json({
    message: 'Internal server error',
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
