import React from "react";
import { useState } from "react";
import TasksList from "./TasksList";
import CompletedTasks from "./CompletedTasks";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompleted] = useState([]);
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
      <TasksList tasks={tasks} setTasks={setTasks} setCompleted={setCompleted} completedTasks={completedTasks} />
      <CompletedTasks completedTasks={completedTasks} setCompleted={setCompleted}/>
    </>
  );
}

export default Todo;
