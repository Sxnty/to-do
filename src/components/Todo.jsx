import React from "react";
import { useState } from "react";
import TasksList from "./TasksList";
import CompletedTasks from "./CompletedTasks";
import { RiEnglishInput } from "react-icons/ri";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [completedTasks, setCompleted] = useState([]);
  const onChangeHandle = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      <section className="hero__tasklist">
        <div className="tasks__actives">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (tasks.find((task) => task.title === newTask)) {
                alert("Ya existe una tarea con este título.");
              } else {
                setTasks([...tasks, { title: newTask, status: false }]);
              }
            }}
          >
            <h2>Add a task</h2>
            <input
              type="text"
              placeholder='go to gym'
              onChange={onChangeHandle}
            />
          </form>

          <TasksList
            tasks={tasks}
            setTasks={setTasks}
            setCompleted={setCompleted}
            completedTasks={completedTasks}
          />
        </div>
        <div className="tasks__completed">
          <CompletedTasks
            completedTasks={completedTasks}
            setCompleted={setCompleted}
          />
        </div>
      </section>
    </>
  );
}

export default Todo;
