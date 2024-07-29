import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import styles from "./Logements.module.scss"
import Slideshow from "../../components/Slideshow/Slideshow"
import datas from "../../datas/logements.json"
import Collapse from "../../components/Collapse/Collapse"

function Logements() {
  // Récupération de l'id dans les paramètres de l"URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Vérification de l'existence de données et redirection si ce n'est pas le cas
  const dataLogements = datas.find(data => data.id === id)
  useEffect(() => {
    if (dataLogements === undefined) {
      navigate("/error")
    }
  }, [dataLogements])
  
  const equipments = dataLogements && dataLogements.equipments
  // Création des tags
  const tags = dataLogements && dataLogements.tags
  const createTags = () => dataLogements && tags.map(tag => <span className={styles.tags} key={`${tag}-${dataLogements.id}`}>{tag}</span>)
  // Séparation du nom de l'hôte en plusieurs parties
  const nameArray = dataLogements &&  dataLogements.host.name.split(" ")
  const name =  dataLogements && nameArray.map((word, index) => <span key={`${word}-${index}-${dataLogements.id}`}>{word}</span>)
  // Transformation de la note en "étoiles"
  const stars =  dataLogements && [1, 2, 3, 4, 5]
  const rating = () => dataLogements && stars.map((star) => Math.round(dataLogements.rating) >= star ? <i key={`${star}-${dataLogements.id}`} className={styles.star + " fa-solid fa-star"}></i> : <i key={`${star}-${dataLogements.id}`} className={styles.star + " " + styles.starNocolor + " fa-solid fa-star"}></i>)

	return (
   dataLogements && (
      <main role="main" className={styles.main}>
        <section aria-label="Carousel">
          <Slideshow
            pictures={dataLogements.pictures}
            title={dataLogements.title}
          />
        </section>
        <section aria-label="Informations principales" className={styles.introduction}>
          <div className={styles.mainIntroduction}>
            <h2 className={styles.h2}>{dataLogements.title}</h2>
            <div>{dataLogements.location}</div>
            <div className={styles.tagsContainer}>
              {createTags()}
            </div>
          </div>
          <div className={styles.hostInformations}>
              <div className={styles.host}>
                <div className={styles.nameHost}>{name}</div>
                <img className={styles.pictureHost} src={dataLogements.host.picture} alt={`${dataLogements.host.name}`} />
              </div>
              <div className={styles.rating}>
                {rating()}
              </div>
          </div>
        </section>
        <section aria-label="Détails du logement" className={styles.details}>
              <Collapse
                titleCollapse="Description"
                textCollapse={dataLogements.description}
              />
              <Collapse
                titleCollapse="Équipements"
                textCollapse={
                  <ul>
                    {equipments.map(equipment => {
                      return (<li key={`${equipment}-${dataLogements.id}`}>{equipment}</li>)
                    })}
                  </ul>
                }
              />
        </section>
      </main>
    )
  )
}

export default Logements
