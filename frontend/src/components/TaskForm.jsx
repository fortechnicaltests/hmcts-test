import { useState } from 'react'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [dueDate, setDueDate] = useState('')

  return (
    <form className='space-y-6'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='title' className='text-sm font-medium text-gray-700'>
          Title
        </label>
        <input
          id='title'
          name='title'
          type='text'
          className='border border-gray-300 rounded-lg px-3 py-2
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition bg-white'
          placeholder='Enter task title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label
          htmlFor='description'
          className='text-sm font-medium text-gray-700'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          rows='3'
          className='border border-gray-300 rounded-lg px-3 py-2
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition bg-white resize-none'
          placeholder='Optional task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='status' className='text-sm font-medium text-gray-700'>
          Status
        </label>
        <select
          id='status'
          name='status'
          className='border border-gray-300 rounded-lg px-3 py-2 bg-white
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value=''>Select status</option>
          <option value='todo'>To Do</option>
          <option value='in_progress'>In Progress</option>
          <option value='done'>Done</option>
        </select>
      </div>

      <div className='flex flex-col gap-1'>
        <label htmlFor='dueDate' className='text-sm font-medium text-gray-700'>
          Due Date
        </label>
        <input
          id='dueDate'
          name='dueDate'
          type='date'
          className='border border-gray-300 rounded-lg px-3 py-2 bg-white
                       shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium
                     hover:bg-blue-700 active:bg-blue-800 transition shadow-sm'
      >
        Create Task
      </button>
    </form>
  )
}
