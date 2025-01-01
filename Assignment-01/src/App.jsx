import React, { useState } from 'react';
import { FaTrashAlt, FaPlus } from 'react-icons/fa';

const App = () => {
  const [todo, setTodo] = useState("");
  const [arr, setArr] = useState([]);

  const handleDelete = (indexToDelete) => {
    setArr(arr.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 to-blue-200 flex items-center justify-center font-sans">
      <div className="border rounded-lg text-center bg-white shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-8">Todo App</h1>

        <div className="mb-6 flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Enter a task"
            value={todo}
            onChange={(event) => setTodo(event.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => {
              if (todo.trim() !== "") {
                setArr([...arr, todo]);
                setTodo("");
              } else {
                alert("Task cannot be empty");
              }
            }}
            className="text-black bg-gray-300 border border-blue-500 rounded-lg px-4 hover:bg-blue-600 focus:outline-none"
          >
            <FaPlus size={20} />
          </button>
        </div>

        <div className='flex justify-center'>
          <ul className="list-none w-full space-y-3">
            {arr.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-gray-800 font-medium break-words">{task}</span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-gray-500 hover:text-red-600 focus:outline-none"
                >
                  <FaTrashAlt size={18} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;