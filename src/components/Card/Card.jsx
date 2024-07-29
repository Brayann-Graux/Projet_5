import styles from "./Card.module.scss"
import { Link } from "react-router-dom"

function Card({ id, cover, title }) {
    return (
        <article className={styles.article}>
            <Link to={`/logements/${id}`}>
                <img className={styles.img} src={cover} alt={title} title={title} />
                <h3 className={styles.title}>{title}</h3>
            </Link>
        </article>
    )
}

export default Card