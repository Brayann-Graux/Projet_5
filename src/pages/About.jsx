import React, { useState } from 'react'
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import("../Styles/About.scss");

export function About() {
    return <div>
        < LayoutHeader />
        <div className="banner"></div>
        < AboutList />
        < LayoutFooter />
    </div>
}

const items = [
    { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
    { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
    { title: "Service", content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
    { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];

function AboutList() {
    const [visibleIndexes, setVisibleIndexes] = useState(Array(items.length).fill(false));

    const handleClick = (index) => {
        setVisibleIndexes((prevVisibleIndexes) => 
            prevVisibleIndexes.map((visible, i) => 
                i === index ? !visible : visible
            )
        );
    };

    return (
        <div className="collapse">
            {items.map((item, index) => (
                <div key={index}>
                    <div class="collapseTitle">
                    <h2>
                        {item.title}
                    </h2>
                    <i className={`fa-solid fa-chevron-up chevron ${visibleIndexes[index] ? 'rotate' : ''}`} onClick={() => handleClick(index)}></i>
                    </div>
                    <p className={visibleIndexes[index] ? 'visible' : ''}>{item.content}</p>
                </div>
            ))}
        </div>
    );
}

