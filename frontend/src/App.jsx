import TaskForm from './components/TaskForm.jsx'

export default function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-xl p-8'>
        <header className='mb-8 text-center'>
          <h1 className='text-3xl font-semibold text-gray-800'>
            Create New Task
          </h1>
          <p className='text-gray-500 mt-2'>
            Fill in the details below to add a new task.
          </p>
        </header>

        <TaskForm />
      </div>
    </div>
  )
}
