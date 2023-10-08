# TheGameExercice
Exercice JS pour un stage

## Description du Projet

Ce projet est un exercice JavaScript qui gère une liste de personnes avec des données telles que le nom, l'âge et des dettes de repas. Il fournit également une interface utilisateur simple pour trier et rechercher des informations spécifiques.

## Comment ça Fonctionne

### Liste de Personnes
Le projet contient une liste de personnes représentées sous forme d'objets JavaScript. Chaque objet a les propriétés suivantes :
- `id`: Un identifiant unique pour la personne.
- `name`: Le nom de la personne.
- `age`: L'âge de la personne.
- `dept`: Un tableau représentant les dettes de repas de la personne, où chaque élément du tableau est l'ID de la personne à qui la dette est due.

### Fonctionnalités Principales
Le projet propose les fonctionnalités suivantes :

#### 1. Afficher la Liste de Noms
- Lorsque la page est chargée, la liste de noms des personnes est affichée dans l'ordre d'origine.

#### 2. Trier par Nom ou Âge
- Vous pouvez trier la liste de noms par ordre alphabétique (nom) ou par âge en cliquant sur les boutons "Ordre alphabétique" ou "Trier par âge".

#### 3. Personne avec le Plus de Dettes
- Le projet identifie automatiquement la personne qui doit le plus de repas et l'affiche.

#### 4. Personne à Qui l'On Doit le Plus de Repas
- Le projet identifie également la personne à qui l'on doit le plus de repas et affiche cette information.

#### 5. Obtenir des Infos
- Vous pouvez utiliser le bouton "Obtenir des Infos" pour rechercher une personne spécifique. Lorsque vous entrez le nom d'une personne, le projet affiche combien de repas cette personne doit et à qui. (Attention il faut l'ortographe exacte ! Ne pas oublier la majuscule !)

### Comment Utiliser le Projet
1. Clonez ou téléchargez ce projet depuis le dépôt GitHub.
2. Ouvrer le dossier contenant le projet
3. Ouvrez le fichier `index.html` dans votre navigateur web.
4. Vous verrez une liste de noms de personnes, ainsi que des boutons pour trier et rechercher des dettes.
5. Pour trier, cliquez sur les boutons "Ordre alphabétique" ou "Trier par âge".
6. Pour rechercher une dette, cliquez sur le bouton "Obtenir des Infos" et entrez le nom de la personne.
7. Les informations de la personne s'afficheront en dessous de la liste de noms.

## Auteur
Ce projet a été créé par Amaury Bariety dans le cadre d'un exercice JavaScript pour un stage à TheGame.

N'hésitez pas à explorer le code source dans le fichier `TheGame.js` pour en savoir plus sur l'implémentation de ce projet.

Bonne journée à tous !

projet fait en 2h - remerciement à StackOverflow pour quelques bugs sortis d'une autre dimension