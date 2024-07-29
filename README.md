# Kasa - Locations immobilières

Projet n°5

## Contexte :

On ma recruter en tant que développeur front-end freelance pour Kasa, une entreprise leader en France dans la location d'appartements entre particuliers. Ce projet consiste en une refonte complète du site de Kasa, initialement développé en ASP.NET il y a plus de 10 ans, pour passer à une stack moderne entièrement en JavaScript avec NodeJS pour le back-end et React pour le front-end.

![Maquette](/src/assets/images/D_A-Propos.png)
![Maquette](/src/assets/images/D_Fiche-Logement.png)
![Maquette](/src/assets/images/D_Home.png)

## Objectifs :

Démarrage du projet React : Mettre en place l’architecture initiale en utilisant React et React Router selon les maquettes Figma fournies.

Développement Front-end : Construire l'interface utilisateur avec des composants React dynamiques et réactifs, en respectant les designs et spécifications fournies.

Intégration sans Back-end : Utiliser un fichier JSON fourni pour simuler les données en attendant le recrutement d’un développeur back-end.

Design et Fonctionnalités
Maquettes Figma : Vous devez suivre les designs fournis sur Figma, incluant des composants et icônes exportables.

Galerie Photos : Implémenter une navigation circulaire pour les images avec gestion des cas où il n'y a qu'une seule image.

Collapses : Les sections déroulantes doivent être fermées par défaut et doivent pouvoir être ouvertes/fermées à l’interaction.

Contraintes Techniques
Respect des Guidelines : Suivre les coding guidelines de Kasa pour assurer la cohérence et la qualité du code.

Responsive Design : S'assurer que l'application soit responsive et conforme aux attentes sur différents dispositifs.

## Contraintes

### Contraintes fonctionnelles
Pour le défilement des photos dans la galerie (composant Gallery) :
- Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image ;
- Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image ;
- S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" ainsi que la numérotation n'apparaissent pas ;

La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page :
- Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer ;
- Inversement, si le Collapse est fermé, un clic permet de l'ouvrir ;

### Contraintes techniques
- Styling : L’utilisation de Sass est optionnelle. CSS est à utiliser par défaut ;
- Pas de librairie React externe ;
- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible ;
- Il est également recommandé, mais pas imposé, d’utiliser Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement ;
- Il existe une page par route ;
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées ;
- La logique du routeur est réunie dans un seul fichier ;
- Le code ne doit pas produire d'erreur ou de warning dans la console ;