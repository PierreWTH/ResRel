## Installation du projet

Ce projet est un projet de groupe réalisé dans le cadre de la formation Concepteur Développeur d'Application du CESI.

Réalisé par :

- Mellah Yassine
- Michel Faustine
- Kirchhofer Raoul
- Wietrich Pierre

Il comporte :

- Le back en Symfony sous forme d'API avec API Platform
- Le front en react et Typescript
- Une base de donnée MySQL
- PHPMyAdmin

Chaque partie de l'application est dans un container docker.

### Initialiser le projet

Pour installer l'application, lancez simplement cette commande à la racine du projet :

```
cd api && make init
```

Elle va lancer les containers, mettre en place l'environnement, créer la base de donnée et celle de test, et générer les clés JWT.

### L'application est disponible :

[Symfony](http://localhost:8000)

[PHPMyAdmin](http://localhost:8080)

[React](http://localhost:3000)
