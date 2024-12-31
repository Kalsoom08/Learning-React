import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "./components/Task";

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <Task />
    
    </div>
  );
};

export default App;
