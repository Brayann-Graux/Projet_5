import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Logements.scss";
import Slideshow from "../../components/Slideshow/Slideshow";
import datas from "../../datas/logements.json";
import Collapse from "../../components/Collapse/Collapse";

function Logements() {
  // Récupération de l'id dans les paramètres de l"URL
  const { id } = useParams();
  const navigate = useNavigate();

  // Vérification de l'existence de données et redirection si ce n'est pas le cas
  const dataLogements = datas.find((data) => data.id === id);
  useEffect(() => {
    if (dataLogements === undefined) {
      navigate("/error");
    }
  }, [dataLogements, navigate]);

  if (!dataLogements) {
    return null; // ou un loader, ou une redirection
  }

  const equipments = dataLogements.equipments;
  // Création des tags
  const tags = dataLogements.tags;
  const createTags = () =>
    tags.map((tag) => (
      <span className="tags" key={`${tag}-${dataLogements.id}`}>
        {tag}
      </span>
    ));
  // Séparation du nom de l'hôte en plusieurs parties
  const nameArray = dataLogements.host.name.split(" ");
  const name = nameArray.map((word, index) => (
    <span key={`${word}-${index}-${dataLogements.id}`}>{word}</span>
  ));
  // Transformation de la note en "étoiles"
  const stars = [1, 2, 3, 4, 5];
  const rating = () =>
    stars.map((star) =>
      Math.round(dataLogements.rating) >= star ? (
        <i key={`${star}-${dataLogements.id}`} className="star filled fa-solid fa-star"></i>
      ) : (
        <i key={`${star}-${dataLogements.id}`} className="star empty fa-solid fa-star"></i>
      )
    );

  return (
    <main role="main" className="main" >
      <section aria-label="Carousel">
        <Slideshow pictures={dataLogements.pictures} title={dataLogements.title} />
      </section>
      <section aria-label="Informations principales" className="introduction" >
        <div className="mainIntroduction" >
          <h2 className="h2" >{dataLogements.title}</h2>
          <div>{dataLogements.location}</div>
          <div className="tagsContainer">{createTags()}</div>
        </div>
        <div className="hostInformations">
          <div className="host">
            <div className="nameHost">{name}</div>
            <img className="pictureHost" src={dataLogements.host.picture} alt={dataLogements.host.name} />
          </div>
          <div className="rating">{rating()}</div>
        </div>
      </section>
      <section className="details">
        <Collapse titleCollapse="Description" textCollapse={dataLogements.description} />
        <Collapse
          titleCollapse="Équipements"
          textCollapse={
            <ul>
              {equipments.map((equipment) => (
                <li key={`${equipment}-${dataLogements.id}`}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </section>
    </main>
  );
}

export default Logements;
