import React from "react";
import { useState } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

function TasksList({ tasks, setTasks, setCompleted, completedTasks}) {
  const [status, setStatus] = useState(false);
  const onClickHandle = (title) => {
    setCompleted([...completedTasks, title])
    const newTasks = tasks.filter(task => task.status)
    setTasks(newTasks)
  };
  return (
    <>
      {tasks.map((e) => {
        tasks.filter((element) => {
          element
        })
        return (
          <div className="task__card" key={e.title}>
            <h2>{e.title}</h2>
            <h3>{e.status ? 'Completed' : 'Unompleted'}</h3>
            <RiCheckboxCircleLine onClick={() => onClickHandle(e.title)} />

          </div>
        );
      })}
    </>
  );
}

export default TasksList;
