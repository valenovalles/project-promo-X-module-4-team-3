import React, { useState } from 'react'

function Form({addList}) {

    function handleInput(ev){
        setInputTask(ev.target.value);
        console.log(inputTask)
    }

    const [inputTask, setInputTask] = useState(" ")

    function handleClickPlus(event){
        addList(inputTask);
        setInputTask(" ")
    }

    
    
  return (
    <div>
        <h2>Nueva tarea</h2>
            <form>
                <label htmlFor="">Añade una nueva tarea</label>
                <input type="text" id='new' onChange={handleInput} value={inputTask}/>
                <button onClick={handleClickPlus}>Agregar</button>
            </form>
    </div>
  )
}

export default Form