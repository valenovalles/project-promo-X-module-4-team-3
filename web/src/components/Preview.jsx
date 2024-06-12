import Card from './Card';

function Preview({formData}) {

  return (
    <div>
    <section className="hero">
     
      <p className="hero__text">Crea tu invitación de boda ideal en unos sencillos pasos.</p>
      <a className="button--large" href="./">Ver invitaciones creadas con Ada Moon</a>
    </section>
        <Card formData={formData} />
    </div>
  )
}

export default Preview
