import React from "react";
import { useState } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

function TasksList({ tasks, setTasks, setCompleted, completedTasks }) {
  const [status, setStatus] = useState(false);
  const onClickHandle = (title) => {
    setCompleted([...completedTasks, title]);
    const updatedTasks = tasks.map((task) => {
      if (task.title === title) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
      {tasks
        .filter((task) => !task.status)
        .map((e) => {
          return (
            <div className="task__card" key={e.title}>
              <h3>{e.title}</h3>
              <RiCheckboxCircleLine tasks={tasks} onClick={() => onClickHandle(e.title)}  />
            </div>
          );
        })}
    </>
  );
}

export default TasksList;
