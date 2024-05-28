
import proyect from '/images/example.jpg';
import autor from '/images/avatar2.jpeg'; 


function Card({formData}) {
  
  const imageProyect = formData.image === "" ? proyect : formData.image;

  const imageAutor = formData.photo === "" ? autor : formData.photo;

  console.log(formData.image)

  console.log(formData.demo)


  return (
    <section className="preview">
      <div className="projectImage" style={{ backgroundImage: `url(${imageProyect})` }}>
    
      </div>
      <article className="card">
        <h2 className="card__projectTitle"><span className="card__projectTitle--text">¡OS INVITAMOS A NUESTRA BODA!</span></h2>

        <div className="card__author">
          <div className="card__authorPhoto" style={{ backgroundImage: `url(${imageAutor})` }}>
 
          </div>
          <p className="card__job">{ formData.job || "¡Hasta el infinito y más allá!"}</p>
          <h3 className="card__name">{formData.autor || "Vuestros nombres"}</h3>
        </div>
  
        <div className="card__project">            
          <h3 className="card__name">{formData.name || "Nombre de los invitados"}</h3>
          <p className="card__slogan">{formData.slogan || "Fecha del enlace"}</p>
        {/*   <h3 className="card__descriptionTitle">Información del evento</h3> */}
          <p className="card__description">{formData.desc || "Unas bonitas palabras para tus invitados"} </p>

          <div className="card__technicalInfo">
            <p className="card__technologies">Contacto: {formData.technologies || "666 555 444"}</p>

              
              <a className="icon icon__github" href={formData.repo } target= "_blank" title="Haz click para ver el listado de regalos"><span className="material-symbols-outlined">
              distance </span>{"Ubicación"}</a>

              <a className="icon icon__www" href={formData.demo || ""} target= "_blank" title="Haz click para ver la ubicación del evento" ><span className="material-symbols-outlined">
              featured_seasonal_and_gifts</span>{"Regalos"}</a>

        
            
          </div>
        </div>
      </article>
    </section>
  )
}

export default Card
