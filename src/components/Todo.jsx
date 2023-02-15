import React from "react";
import { useState } from "react";

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
          setTasks([...tasks, newTask]);
        }}
      >
        <h1>Todo</h1>
        <input
          type="text"
          placeholder="go to gym..."
          onChange={onChangeHandle}
        />
        {tasks.map((e) => {
          return <h1>{e}</h1>;
        })}
      </form>
    </>
  );
}

export default Todo;
