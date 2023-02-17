import React from "react";

function CompletedTasks({ completedTasks, setCompleted }) {
  return (
    <section className="completed__tasks">
      <h2>Completed Tasks</h2>
      {completedTasks.map((e) => {
        return (
          <div className="completed__task" key={e}>
            <h1>{e}</h1>
          </div>
        );
      })}
    </section>
  );
}

export default CompletedTasks;
