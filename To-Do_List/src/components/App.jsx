import Form from "./Form";
import "../styles/App.scss"
import List from "./List";
import { useState, useEffect } from "react";

function App() {

  const [task, setTask]= useState([]);



  function addList(newTask){
    fetch('http://localhost:3000/newTask', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: newTask }), // El campo que se envía debe coincidir con lo que espera el servidor
  })
  .then((response) => response.json())
  .then((data) => {
    // Si la respuesta es exitosa, actualizamos el estado con la nueva tarea
    if (data.success) {
      setTask([...task, newTask]);
    }
  })
  .catch((error) => {
    console.error('Error adding task:', error);
  });
  }

  useEffect(() => {
    fetch("http://localhost:3000/task")
    .then((response)=>response.json())
    .then(data=>{
      setTask(data.data)
    })
  }, []);

  return (
    <div className="ppal">
      <h1 className="ppal__title">Lista de Tareas</h1>
      <Form addList={addList} className="ppal__form"/>
      <List  task={task} className="ppal__list"/>
    </div>
  );
}

export default App;