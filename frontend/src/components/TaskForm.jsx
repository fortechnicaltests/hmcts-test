export default function TaskForm() {
  return (
    <form className='space-y-6'>
      <div className='flex flex-col'>
        <label htmlFor='title' className='text-sm font-medium text-gray-700'>
          Title
        </label>
        <input
          id='title'
          name='title'
          type='text'
          className='mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Enter task title'
        />
      </div>

      <div className='flex flex-col'>
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
          className='mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Optional task description'
        />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='status' className='text-sm font-medium text-gray-700'>
          Status
        </label>
        <select
          id='status'
          name='status'
          className='mt-1 border border-gray-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          <option value=''>Select status</option>
          <option value='OPEN'>Open</option>
          <option value='IN_PROGRESS'>In Progress</option>
          <option value='DONE'>Done</option>
        </select>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='dueDate' className='text-sm font-medium text-gray-700'>
          Due Date
        </label>
        <input
          id='dueDate'
          name='dueDate'
          type='date'
          className='mt-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition'
      >
        Create Task
      </button>
    </form>
  )
}
