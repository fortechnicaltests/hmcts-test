import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  res.send('HMCTS Task Management API is running')
})

app.post('/tasks', (req, res) => {
  res.status(201).json({
    message: 'Task creation endpoint hit',
    received: req.body,
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
