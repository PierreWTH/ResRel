## Installation du projet 

### Dans /api copier le fichier .env.example et le renommer .env

` cd api && cp .env.example .env`

### Construire les containers :

`docker compose up -d`

### Installer les dépendances : 

`composer install`

## Créer la base de données

`bin/console m:mi`
`bin/console d:m:m`

### Charger les fixtures

`bin/console doctrine:fixtures:load`

### L'application est disponible : 

[Symfony](http://localhost:8000) 

[PHPMyAdmin](http://localhost:8080)

[React](http://localhost:3000)




