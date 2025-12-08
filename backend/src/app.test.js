import request from 'supertest'
import app from './app.js'
import { describe, it, expect} from 'vitest';

console.log('DATABASE_URL:', process.env.DATABASE_URL, process.cwd())

describe('POST /tasks', () => {
  it('should create a task with valid input', async () => {
    const validTask = {
      title: 'Test Task',
      description: 'This is a test',
      status: 'pending',
      dueDate: new Date().toISOString(),
    }

    const response = await request(app)
      .post('/tasks')
      .send(validTask)
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body.message).toBe('Task created successfully')
    expect(response.body.task).toHaveProperty('id')
    expect(response.body.task.title).toBe(validTask.title)
    expect(response.body.task.description).toBe(validTask.description)
    expect(response.body.task.status).toBe(validTask.status)
    expect(new Date(response.body.task.dueDate).toISOString()).toBe(
      validTask.dueDate
    )
  })
})
