import Button from "./Button";
import Reset from "./Reset";



function Form({form, updateAvatar, formData, postData, url, setData, setUrl}) {
  
    const handleInputChange =(event)=>{
      const id = event.target.id;
      const value = event.target.value;
      form(id, value);
    }
     const handleClickUrl =(event)=>{
      event.preventDefault();
      postData();
    }

    const urlText = url !== '' ? `Pulsa aquí para ver tu invitación: ${url}`: "";
    const urlTextClass = url !== ''? 'urlText':""; 

  return (
    <form className="addForm">
      <h2 className="title">¡CREA TU INVITACIÓN DE BODA!</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Información del encuentro</legend>
        <input className="addForm__input" type="text" value={formData.NAME} name="name" id="NAME" placeholder="Nombre de los invitados" onChange={handleInputChange}/>
        <input className="addForm__input" type="date" name="slogan" id="date" placeholder="Fecha del enlace" value={formData.date} onChange={handleInputChange}/>
        <div className="addForm__2col">
          <input className="addForm__input" type="url" name="repo" value={formData.ubication} id="ubication" placeholder="Url ubicación" onChange={handleInputChange}/> {/* url de lista de regalo, google maps */}
          <input className="addForm__input" type="url" name="demo" value={formData.gift} id="gift" placeholder="Lista de regalos" onChange={handleInputChange}/>
        </div>         
        <input className="addForm__input" type="text" value={formData.contact} name="technologies" id="contact" placeholder="Escribe aquí cómo quieres que contacten tus invitados" onChange={handleInputChange}/> {/* podría ser un select de si necesitas bus o no */}
        <textarea className="addForm__input" type="text" name="desc" id="message" placeholder="Dedica unas palabras a tus invitados" value={formData.message} rows="5" onChange={handleInputChange}></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el enlace</legend>
        <input className="addForm__input" type="text" value={formData.coupleName} name="autor" id="coupleName" placeholder="Vuestros nombres" onChange={handleInputChange}/>
        <input className="addForm__input" type="text" value={formData.quote} name="job" id="quote" placeholder="Una frase que os represente" onChange={handleInputChange}/>
      </fieldset>

      <fieldset className="addForm__group--upload">
        <Button  labelText="Subir foto que os represente"   id="otherImage"updateAvatar={updateAvatar}/>
        <Button  labelText="Subir foto vuestra"   id="coupleImage" updateAvatar={updateAvatar}/>
        <button className="button--large" onClick= {handleClickUrl}>Crear invitación</button>
       <Reset setUrl={setUrl} setData={setData}/>
      </fieldset>
      <a className={urlTextClass} href={`https://project-promo-x-module-4-team-3-1.onrender.com${url}`} target="_blank">{urlText}</a>
    </form>
  )
}

export default Form
