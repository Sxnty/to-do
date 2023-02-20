import React from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
function App() {
  return (
    <>
      <main className="hero">
        <section className="hero__main">
        <Header/>
        <Todo />
        </section>
      </main>
    </>
  );
}

export default App;
