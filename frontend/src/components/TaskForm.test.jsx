import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import TaskForm from './TaskForm'
import apiClient from '../api'

vi.mock('../api', () => ({
  default: {
    post: vi.fn(),
  },
}))

describe('TaskForm', () => {
  it('renders all required form fields and button', () => {
    render(<TaskForm />)

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Status/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Create Task/i })
    ).toBeInTheDocument()
  })

  it('updates title and status fields on user input', () => {
    render(<TaskForm />)
    const titleInput = screen.getByLabelText(/Title/i)
    const statusSelect = screen.getByLabelText(/Status/i)

    fireEvent.change(titleInput, { target: { value: 'New Test Task' } })
    expect(titleInput).toHaveValue('New Test Task')

    fireEvent.change(statusSelect, { target: { value: 'done' } })
    expect(statusSelect).toHaveValue('done')
  })

  it('calls the API client with correct data on submission', async () => {
    apiClient.post.mockResolvedValueOnce({
      data: {
        message: 'Task created successfully',
        task: { id: 1, title: 'Test Task' },
      },
    })

    render(<TaskForm />)

    fireEvent.change(screen.getByLabelText(/Title/i), {
      target: { value: 'Submit Test' },
    })
    fireEvent.change(screen.getByLabelText(/Status/i), {
      target: { value: 'in_progress' },
    })
    fireEvent.change(screen.getByLabelText(/Due Date/i), {
      target: { value: '2025-01-01' },
    })

    fireEvent.click(screen.getByRole('button', { name: /Create Task/i }))

    await waitFor(() => {
      expect(apiClient.post).toHaveBeenCalledTimes(1)

      expect(apiClient.post).toHaveBeenCalledWith('/tasks', {
        title: 'Submit Test',
        description: null,
        status: 'in_progress',
        dueDate: expect.any(String),
      })

      expect(
        screen.getByText(/Task "Test Task" created successfully./i)
      ).toBeInTheDocument()
    })
  })
})
