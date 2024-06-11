

import logoSponsor from '/images/logo-wedding.png';

function Header() {
  return (
    <header className="header">
          <a className="header__brand" href="https://project-promo-x-module-4-team-3-1.onrender.com/" title="Haz click para volver a la página inicial">Ada_Moon_Wedding</a>
          <a href="https://project-promo-x-module-4-team-3-1.onrender.com/"><img className="logoSponsor" src={logoSponsor} alt="Logo"/></a>
    </header>
  )
}

export default Header