import React from "react";
import { useState } from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

function TasksList({ tasks, setTasks }) {
  const [status, setStatus] = useState(false);
  const onClickHandle = (title) => {
    const updatedTasks = tasks.map((element) => {
      console.log(element)
      return element.title === title
        ? { ...element, status: true }
        : { ...element }
    })
    setTasks(updatedTasks)
  };
  return (
    <>
      {tasks.map((e) => {
        return (
          <div className="task__card" key={e.title}>
            <h2>{e.title}</h2>
            <RiCheckboxCircleLine onClick={() => onClickHandle(e.title)} />
          </div>
        );
      })}
    </>
  );
}

export default TasksList;
