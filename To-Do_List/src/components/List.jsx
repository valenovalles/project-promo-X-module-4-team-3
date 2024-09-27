import React, { useState } from 'react';

const CONFIRMATION = "done"

function List({ task }) {
  const [clickedItems, setClickedItems] = useState({});
  const [confirm, setConfirm] = useState(false);
  const [valueInput, setvalueInput] = useState("");
  const [confirmedItems, setConfirmedItems] = useState({}); 

  function handleClick(index) {
    // Cambia el estado del item clickeado (tacha o destacha)
    if (confirmedItems[index]) {
      const updatedConfirmedItems = { ...confirmedItems };
      delete updatedConfirmedItems[index]; // Elimina la tarea confirmada
      setConfirmedItems(updatedConfirmedItems);

      const updatedClickedItems = { ...clickedItems };
      delete updatedClickedItems[index]; // Resetea su estado de clickeado
      setClickedItems(updatedClickedItems);
    } else {
      // Cambia el estado del ítem clickeado (tacha o destacha)
      const updatedItems = {
        ...clickedItems,
        [index]: !clickedItems[index]
      };
      setClickedItems(updatedItems);

      const hasClickedItems = Object.values(updatedItems).some((item) => item === true);
      setConfirm(hasClickedItems);
    }
  }

  function handleConfirm() {
    if (valueInput.toLowerCase() === CONFIRMATION) {
      // Confirma los ítems seleccionados (clickeados)
      const updatedConfirmedItems = { ...confirmedItems };

      // Solo los ítems clickeados serán confirmados
      Object.keys(clickedItems).forEach((key) => {
        if (clickedItems[key]) {
          updatedConfirmedItems[key] = true;
        }
      });

      setConfirmedItems(updatedConfirmedItems);
      setvalueInput(""); // Resetea el campo de texto
      setConfirm(false); // Oculta la sección de confirmación
    } else {
      alert("Escribe 'DONE' para confirmar.");
    }
  }

  return (
    
    <div>
      <h2>Mis tareas</h2>
         <ul className='ppal__list'>
         {task.map((singleTask, index) => (
           <li
             key={index}
             onClick={() => handleClick(index)}
             className={confirmedItems[index] ? "list__item clicked" : "list__item"}
           >
             {singleTask.task}
           </li>
         ))}
       </ul>
      
       {confirm &&
        <div>
       <p>Escribe DONE para confirmar</p>
       <input type="text" value={valueInput} onChange={(ev)=>{setvalueInput(ev.target.value)}}/>
       <button onClick={handleConfirm}>Confirmar</button>
       </div>
       }

    </div>
  );
  
}

export default List;
