import './App.css'

export default function App() {
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl bg-white rounded-xl shadow-lg p-6'>
        <header className='mb-6'>
          <h1 className='text-2xl font-semibold text-gray-800 text-center'>
            Create New Task
          </h1>
          <p className='text-gray-500 text-center mt-1'>
            Use the form below to add a new task to the system.
          </p>
        </header>

        {/* Form will be added in later commits (21+) */}
        <div className='text-center text-gray-400 py-10 border border-dashed rounded-lg'>
          Form component will go here
        </div>
      </div>
    </div>
  )
}
