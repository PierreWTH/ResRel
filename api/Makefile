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
	$(EXEC) -c "bin/console lexik:jwt:generate-keypair"

## —— 🎻 Composer ——
composer-install: ## Install dependencies
	composer install

composer-update: ## Update dependencies
	$(COMPOSER) update

## —— Tests ——

all-tests: ## Run tests
	$(EXEC) -c "bin/phpunit"

## —— 📊 Database ——
database-init: ## Init database
	$(MAKE) database-drop
	$(MAKE) database-create
	$(MAKE) database-migrate
	$(MAKE) database-fixtures-load
	$(MAKE) database-drop-test
	$(MAKE) database-create-test
	$(MAKE) database-migrate-test
	$(MAKE) database-fixtures-load-test
	@$(call GREEN,"Database and test database have been initialized.")

database-drop: ## Drop database
	$(EXEC) -c "bin/console d:d:d --force --if-exists"

database-create: ## Create database
	$(EXEC) -c "bin/console d:d:c --if-not-exists"

database-migration: ## Make migration
	$(EXEC) -c "bin/console make:migration"

migration: ## Alias : database-migration
	$(EXEC) -c "bin/console database-migration"

database-migrate: ## Migrate migrations
	$(EXEC) -c "bin/console d:m:m --no-interaction"

migrate: ## Alias : database-migrate
	$(EXEC) -c "bin/console database-migrate"

database-fixtures-load: ## Load fixtures
	$(EXEC) -c "bin/console d:f:l --no-interaction"



fixtures: ## Alias : database-fixtures-load
	$(EXEC) -c "bin/console database-fixtures-load"

## —— 📊 Database test ——

database-drop-test: ## Drop database
	$(EXEC) -c "bin/console d:d:d --env=test --force --if-exists"

database-create-test: ## Create test database
	$(EXEC) -c "bin/console d:d:c --env=test --if-not-exists"

database-migrate-test: ## Migrate migrations
	$(EXEC) -c "bin/console d:m:m --env=test --no-interaction"

database-fixtures-load-test: ## Load test fixtures
	$(EXEC) -c "bin/console d:f:l --env=test --no-interaction"


## —— 🛠️  Others ——
help: ## List of commands
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'


