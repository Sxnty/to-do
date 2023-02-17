import React from "react";
import { useState } from "react";
import TasksList from "./TasksList";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const onChangeHandle = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks([...tasks, { title: newTask, status: false }]);
        }}
      >
        <h1>Todo</h1>
        <input
          type="text"
          placeholder="go to gym..."
          onChange={onChangeHandle}
        />
      </form>
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default Todo;
