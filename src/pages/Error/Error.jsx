import { Link } from "react-router-dom"
import "./Error.scss"

function Error() {
  return (
    <main role="main" className="error-page">
      <h2 className="error">404</h2>
      <div>Oups ! La page que vous demandez n'existe pas.</div>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  )
}

export default Error
