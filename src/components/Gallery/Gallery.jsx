import styles from "./Gallery.module.scss"
import Card from "../Card/Card"
import datas from "../../datas/logements.json"

function Gallery() {
    return ( datas && datas.length>0 && (
        <section aria-label="Galerie appartements" className={styles.gallery}>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </section>
    ))
}

export default Gallery