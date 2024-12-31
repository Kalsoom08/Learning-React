import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaTrash } from "react-icons/fa"; 

export const Task = () => {
  const [taskInput, setTaskInput] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);


  const handleAddTask = () => {
    if (taskInput.trim()) {
      dispatch({ type: "ADD_TASK", payload: taskInput });
      setTaskInput(""); 
    }
  };

  const handleDeleteTask = (index) => {
    dispatch({ type: "DELETE_TASK", payload: index }); 
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-44 border border-gray-400">
      <h1 className="text-2xl font-bold text-center mb-6 ">Task List</h1>

     
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter new task"
          className="flex-grow p-3 border border-gray-300 rounded-l-md "
        />
        <button
          onClick={handleAddTask}
          className="p-3 bg-black text-white rounded-r-md transition duration-200"
        >
          <FaPlus className="h-6 w-6" /> 
        </button>
      </div>

      
      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition duration-150"
          >
            <span className="text-gray-800">{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="ml-4 p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
            >
              <FaTrash className="h-6 w-6" /> 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
