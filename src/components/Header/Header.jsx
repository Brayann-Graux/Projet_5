import { Link, NavLink } from "react-router-dom"
import logo from "../../assets/images/logo-header.png"
import "../../style/style.scss"
import "./Header.scss"

function Header() {
  return (
    <header role="banner" >
      <h1 className="visually-hidden">Kasa, location immobilière entre particuliers</h1>
      <Link to="/"><img src={logo} alt="Logo de Kasa" title="Logo de Kasa" /></Link>     
      <nav role="navigation" aria-label="main navigation">
        <ul>
          <li>
            <NavLink className={({ isActive }) =>
                            isActive
                                ? 'nav-active'
                                : ''
                        } to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
                            isActive
                                ? 'nav-active'
                                : ''
                        } to="/about">À Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
