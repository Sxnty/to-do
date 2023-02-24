import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
function CompletedTasks({ completedTasks, setCompleted, tasks }) {
  console.log(completedTasks)
  const deleteTask = (e) => {

    const deletedTaskIndex = completedTasks.findIndex((element) => element === e);
    if (deletedTaskIndex !== -1) {
      const deletedTask = completedTasks.splice(deletedTaskIndex, 1)[0];
      console.log(deletedTask);
      setCompleted([...completedTasks]);
    }
  }


  return (
    <section className="completed__tasks">
      <h2>Completed Tasks</h2>
      {completedTasks.map((e) => {
        console.log(e)
        return (
          <div className="completed__task" key={e}>
            <h1>{e}</h1>
            <RiDeleteBin6Line onClick={()=> {
              deleteTask(e)
            }}/>
          </div>
        );
      })}
    </section>
  );
}

export default CompletedTasks;
