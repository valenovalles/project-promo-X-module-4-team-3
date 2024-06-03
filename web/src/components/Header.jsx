

import logoSponsor from '/images/logo-wedding.png';

function Header() {
  return (
    <header className="header">
          <a className="header__brand" href="/project-promo-X-module-3-team-3/" title="Haz click para volver a la página inicial">
       
            <a className="header__title" href="/project-promo-X-module-3-team-3/">Ada_Moon_Wedding</a>
          </a>
          <a href="/project-promo-X-module-3-team-3/"><img className="logoSponsor" src={logoSponsor} alt="Logo"/></a>
    </header>
  )
}

export default Header