import React from "react";

function TasksList({tasks}) {
  return (
    <>
      {tasks.map((e) => {
        return <h1>{e}</h1>;
      })}
    </>
  );
}

export default TasksList;
