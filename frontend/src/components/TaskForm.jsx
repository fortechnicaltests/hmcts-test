export default function TaskForm() {
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
        >
          <option value=''>Select status</option>
          <option value='OPEN'>Open</option>
          <option value='IN_PROGRESS'>In Progress</option>
          <option value='DONE'>Done</option>
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
