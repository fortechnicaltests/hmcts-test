import express from 'express'
import cors from 'cors'
import { z } from 'zod'

const app = express()

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

app.post('/tasks', (req, res, next) => {
  try {
    const validatedTask = taskSchema.parse(req.body)
    // For now, respond immediately
    res.status(201).json({
      message: 'Task validated successfully',
      task: validatedTask,
    })
  } catch (err) {
    next(err) // Pass error to error handling middleware
  }
})

app.use((err, req, res, next) => {
  if (err instanceof z.ZodError) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: err.errors,
    })
  }
  console.error(err) // Log unexpected errors for debugging

  res.status(500).json({
    message: 'Internal server error',
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
