

import logoSponsor from '/images/logo-wedding.png';

function Header() {
  return (
    <header className="header">
          <a className="header__brand" href="/cards" title="Haz click para volver a la página inicial">Ada_Moon_Wedding</a>
          <a href="/cards"><img className="logoSponsor" src={logoSponsor} alt="Logo"/></a>
    </header>
  )
}

export default Header