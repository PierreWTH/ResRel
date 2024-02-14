# Variables
DOCKER_COMPOSE = docker-compose
EXEC =  docker exec -it www_resrel bash
NPM = $(EXEC) npm
SYMFONY_CONSOLE = bin/console

# Colors
GREEN = /bin/echo -e "\x1b[32m\#\# $1\x1b[0m"
RED = /bin/echo -e "\x1b[31m\#\# $1\x1b[0m"

## —— 🔥 App ——
init: ## Init the project
	$(MAKE) docker-start
	cp .env.example .env
	$(MAKE) composer-install
	$(MAKE) database-init
	$(MAKE) jwt-keys

	@$(call GREEN,"Symfony is available at: http://127.0.0.1:8000/.")
	@$(call GREEN,"React is available at: http://127.0.0.1:3000/.")
	@$(call GREEN,"PhpMyAdmin is available at: http://127.0.0.1:8080/.")

cache-clear: ## Clear cache
	$(EXEC) -c "bin/console cache:clear; exit"

## —— 🐳 Docker ——

docker-start: 
	$(DOCKER_COMPOSE) up -d

jwt-keys: ## Generate JWT keys
	$(EXEC) -c "bin/console lexik:jwt:generate-keypair; exit"

## —— 🎻 Composer ——
composer-install: ## Install dependencies
	composer install

composer-update: ## Update dependencies
	$(COMPOSER) update

## —— 📊 Database ——
database-init: ## Init database
	$(MAKE) database-drop
	$(MAKE) database-create
	$(MAKE) database-migrate
	$(MAKE) database-fixtures-load

database-drop: ## Create database
	$(EXEC) -c "bin/console d:d:d --force --if-exists; exit"

database-create: ## Create database
	$(EXEC) -c "bin/console d:d:c --if-not-exists"

database-remove: ## Drop database
	$(SYMFONY_CONSOLE) d:d:d --force --if-exists

database-migration: ## Make migration
	$(SYMFONY_CONSOLE) make:migration

migration: ## Alias : database-migration
	$(MAKE) database-migration

database-migrate: ## Migrate migrations
	$(SYMFONY_CONSOLE) d:m:m --no-interaction

migrate: ## Alias : database-migrate
	$(MAKE) database-migrate

database-fixtures-load: ## Load fixtures
	$(SYMFONY_CONSOLE) d:f:l --no-interaction

fixtures: ## Alias : database-fixtures-load
	$(MAKE) database-fixtures-load

## —— 🛠️  Others ——
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


