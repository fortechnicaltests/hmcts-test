import './App.css'
import TaskForm from "./components/TaskForm.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 text-center">
            Create New Task
          </h1>
          <p className="text-gray-500 text-center mt-1">
            Fill in the details below to create a new task.
          </p>
        </header>

        <TaskForm />
      </div>
    </div>
  );
}