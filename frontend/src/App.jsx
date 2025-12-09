import TaskForm from './components/TaskForm.jsx'

function App() {
  return (
    // Updated container classes for responsive design
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 flex justify-center items-start">
      <main className="w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          HMCTS Task Creator
        </h1>
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
          <TaskForm />
        </div>
      </main>
    </div>
  )
}

export default App