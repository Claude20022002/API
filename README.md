# gardenAPI

C'est une petite API avec quelque donnée de plantes

#Routes et gestion des plantes extérieures :
GET /plantes/exterieures/all : Renvoie toutes les plantes extérieures.

GET /plantes/exterieures/:id : Renvoie une plante extérieure spécifique en fonction de son ID.

GET /plantes/exterieures/name/:name : Renvoie une plante extérieure spécifique en fonction de son nom commun.

GET /plantes/exterieures/scientific/:name : Renvoie une plante extérieure spécifique en fonction de son nom scientifique.

#Routes et gestion des plantes d’intérieur :
GET /plantes/interieur/all : Renvoie toutes les plantes d’intérieur.

GET /plantes/interieur/:id : Renvoie une plante d’intérieur spécifique en fonction de son ID.

GET /plantes/interieur/name/:name : Renvoie une plante d’intérieur spécifique en fonction de son nom commun.

GET /plantes/interieur/scientific/:name : Renvoie une plante d’intérieur spécifique en fonction de son nom scientifique.

#Routes et gestion des FAQ (Foire aux questions) :
GET /faq/all : Renvoie toutes les questions et réponses de la FAQ.

GET /faq/question : Renvoie toutes les questions de la FAQ.

GET /faq/answer : Renvoie toutes les réponses de la FAQ.

POST /faq/add : Ajoute une nouvelle question et une nouvelle réponse à la FAQ.

PUT /faq/update/:id : Met à jour une question et une réponse spécifiques dans la FAQ.

DELETE /faq/delete/:id : Supprime une question et une réponse spécifiques de la FAQ.

POST /faq/answer/add : Ajoute une nouvelle réponse uniquement à la FAQ.

PUT /faq/answer/update/:id : Met à jour une réponse spécifique dans la FAQ.

Chaque route est donc conçue pour effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) sur les données des plantes ou des FAQ. Les routes de type GET permettent d'obtenir des informations, tandis que celles de type POST, PUT et DELETE permettent de créer, modifier ou supprimer des éléments respectivement.
