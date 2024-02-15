## Installation du projet 

Ce projet est un projet de test afin d'améliorer mes connaissances dans la mise en place d'un environnement Docker, de la création et de la manipulation d'une API Symfony, et de l'interaction avec celle-ci grâce à React. 

Il comporte : 
* Le back en Symfony sous forme d'API
* Le front en react
* Une base de donnée MySQL
* PHPMyAdmin

Chaque partie de l'application est dans un container docker.

### Initialiser le projet

Pour installer l'application, lancez simplement cette commande à la racine du projet :

```
cd api && make init
```
Elle va lancer les containers, mettre en place l'environnement, créer la base de donnée et celle de test, et générer les clés JWT. 

### Renseigner la passphrase

Il ne reste plus qu'a ajouter la passphrase dans le .env pour la connexion. 

```
JWT_PASSPHRASE=your_passhrase
```
### L'application est disponible : 

[Symfony](http://localhost:8000) 

[PHPMyAdmin](http://localhost:8080)

[React](http://localhost:3000)




