import Form from './Form';
import Preview from './Preview';
import {useEffect, useState} from 'react';
import local from "../services/localStorage"


function Page() {

  const [data, setData] = useState({name:"", slogan:"", technologies:"", repo:"", demo:"", desc:"", autor:"", job:"", image:"", photo:""});


  const [url, setUrl] = useState('');
 

  const updateAvatar = (key, value) => {
    setData({...data, [key]: value});
  };

  // const changeForm. Debe recibir como parametro id y value del input para que dentro se haga el setForm. Se ejecuta en Form, cuando ocurra el evento en los inputs. Dentro de handleInputChange se ejecuta changeForm

  const changeForm = (id, value) =>{
    

    //Función que sustituye a todos los if. Llamamos a la función setForm porque es la que renderiza el valor recogido de los input, por eso tiene paréntesis, dentro de paréntesis metemos el objeto entre llaves, que en este caso es form, los ... lo que hacen es copiar en lugar de reescribir. Le indicamos la propiedad que queremos cambiar, que es lo que está entre corchetes, en este caso es id, porque los id coinciden con los nombres de las propiedades, y se le pone tras los : el valor a introducir, que lo tenemos recodigo en la variable value. 
    setData({...data, [id]:value});

  
 /*    if(id === "name"){
      setForm({...form, name: value})
    }else if(id === "slogan"){
      setForm({...form, slogan: value})
    }else if(id === "technologies"){
      setForm({...form, technologies: value})
    }else if(id === "repo"){
      setForm({...form, repo: value})
    }else if(id === "demo"){
      setForm({...form, demo: value})
    }else if(id === "desc"){
      setForm({...form, desc: value})
    }else if(id === "autor"){
      setForm({...form, autor: value})
    }else if(id === "job"){
      setForm({...form, job: value})
    } */
   
  };

  const postData = () =>{
    fetch('https://dev.adalab.es/api/projectCard',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(dataResponse => {
        console.log(dataResponse);

        if(dataResponse.success){
            setUrl(dataResponse.cardURL);
        }else if (dataResponse.error){
            setUrl("Debes rellenar todos los campos");
        }

    })

}

const loadDataFromLocalStorage = () => {
  const storedData = local.get("card", null);
  if (storedData) {
    setData(storedData);
  }
};

useEffect(() => {
  loadDataFromLocalStorage();
}, []);

useEffect (()=>{
 if (data.name || data.slogan || data.technologies || data.repo || data.demo || data.desc || data.autor || data.job || data.image || data.photo) {
    local.set("card", data);
  }
}, [data]);

  return (
    <main className="main">
    <Preview formData={data}/>
    <Form formData={data} form={changeForm} updateAvatar={updateAvatar} postData={postData} setData={setData} url={url} setUrl={setUrl}/>
 
  </main>
  )
}

export default Page
