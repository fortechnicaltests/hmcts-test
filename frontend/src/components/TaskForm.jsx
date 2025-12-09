import { useState } from 'react'
import apiClient from '../api'

const formatDueDate = (dateString) => {
  if (!dateString) return null;
  return new Date(`${dateString}T00:00:00`).toISOString();
};


export default function TaskForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo',
    dueDate: '',
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);
    setIsLoading(true);

    try {
      const dataToSend = {
        title: formData.title,
        description: formData.description || null, 
        status: formData.status,
        dueDate: formatDueDate(formData.dueDate), 
      };

      const res = await apiClient.post('/tasks', dataToSend);

      setResponse(res.data);
      setError(null);

      setFormData({
        title: '',
        description: '',
        status: 'todo',
        dueDate: '',
      });

    } catch (err) {
      console.error('Task Submission Failed:', err);
      setError(err.response ? err.response.data : { message: 'An unexpected network error occurred.' });
      setResponse(null);

    } finally {
      setIsLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className='space-y-6'> 
      
      {response && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          <p className="font-semibold">{response.message || 'Success!'}</p>
          <p className="text-sm mt-1">Task "{response.task.title}" created successfully.</p>
        </div>
      )}
      
      {error && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="font-semibold">{error.message || 'Submission Failed'}</p>
          {error.errors && error.errors.map((issue, index) => (
            <p key={index} className="text-sm mt-1">
              Field **{issue.path.join('.')}**: {issue.message}
            </p>
          ))}
        </div>
      )}
      
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
          value={formData.title}
          onChange={handleChange}
          required
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
          value={formData.description}
          onChange={handleChange}
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
          value={formData.status}
          onChange={handleChange}
          required
        >
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
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium
                     hover:bg-blue-700 active:bg-blue-800 transition shadow-sm
                     disabled:opacity-50'
        disabled={isLoading}
      >
        {isLoading ? 'Creating Task...' : 'Create Task'}
      </button>
    </form>
  )
}