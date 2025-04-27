# gardenAPI

## Description du projet

Le projet `GardenAPI` est une API RESTful conçue pour gérer une base de données de plantes d’intérieur et d’extérieur ainsi qu’une section FAQ (Foire aux Questions). Cette API permet aux utilisateurs de consulter, ajouter, modifier ou supprimer des informations sur les plantes et les questions/réponses fréquemment posées.

## Principales fonctionnalités :

Gestion des plantes :
Plantes extérieures et intérieures : Le projet permet de gérer des informations sur diverses plantes, incluant des données comme le nom scientifique, le nom commun, le cycle de vie, les besoins en lumière et en eau, et une image par défaut.

Recherche par nom : Il est possible de rechercher des plantes par leur nom scientifique ou leur nom commun, offrant ainsi une flexibilité dans l'utilisation de l'API.

Consultation des plantes : Les utilisateurs peuvent obtenir une liste de toutes les plantes extérieures ou intérieures, ainsi que des informations détaillées sur une plante spécifique.

Gestion des FAQ :
Questions et réponses : Le projet inclut une section FAQ permettant de répondre aux interrogations courantes concernant les plantes. Chaque entrée dans la FAQ comprend une question, une réponse et éventuellement des images explicatives.

CRUD pour les FAQ : Les utilisateurs peuvent ajouter de nouvelles questions et réponses, mettre à jour les réponses existantes, ou supprimer des entrées. Il est aussi possible de consulter toutes les questions, ou uniquement les réponses.

## Routes CRUD :

### <span style="color: green">Gestion des plantes :</span>

-   GET /plantes/exterieures/all : Renvoie toutes les plantes extérieures.

-   GET /plantes/exterieures/:id : Renvoie les informations d'une plante extérieure spécifique par ID.

-   GET /plantes/exterieures/name/:name : Recherche une plante extérieure par nom commun.

-   GET /plantes/exterieures/scientific/:name : Recherche une plante extérieure par nom scientifique.

-   GET /plantes/interieur/all : Renvoie toutes les plantes d'intérieur.

-   GET /plantes/interieur/:id : Renvoie les informations d'une plante d'intérieur spécifique par ID.

-   GET /plantes/interieur/name/:name : Recherche une plante d'intérieur par nom commun.

### Gestion des FAQ :

-   GET /faq/all : Renvoie toutes les questions et réponses de la FAQ.

-   GET /faq/question : Renvoie toutes les questions de la FAQ.

-   GET /faq/answer : Renvoie toutes les réponses de la FAQ.

-   POST /faq/add : Ajoute une nouvelle question et réponse à la FAQ.

-   PUT /faq/update/:id : Met à jour une question et une réponse spécifiques de la FAQ.

-   DELETE /faq/delete/:id : Supprime une question et une réponse spécifiques de la FAQ.

-   POST /faq/answer/add : Ajoute une nouvelle réponse à la FAQ.

-   PUT /faq/answer/update/:id : Met à jour une réponse spécifique de la FAQ.

## Technologies utilisées :

**_Express.js :_** Framework pour la gestion des routes et des requêtes HTTP.

**_Node.js :_** Environnement d'exécution JavaScript côté serveur.

**_Data en mémoire :_** Les données sont stockées en mémoire pour simplifier le développement, mais elles peuvent être adaptées pour une base de données à long terme.

**_Route RESTful :_** Utilisation de bonnes pratiques REST pour la gestion des données.
