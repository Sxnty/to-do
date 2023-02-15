import React from "react";

import { RiCheckboxCircleLine } from "react-icons/ri";

function TasksList({tasks}) {
  return (
    <>
      {tasks.map((e) => {
        return (
            <div className="task__card" key={e.title}>
                <h2>{e.title}</h2>
                <RiCheckboxCircleLine/>

            </div>
        )
      })}
    </>
  );
}

export default TasksList;
