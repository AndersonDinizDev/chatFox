.PHONY: help build start stop restart destroy

CONTAINER_NAME=my-react-app

help: ## Print help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)

build: ## Build the Docker image for development
	@docker build --no-cache -t $(CONTAINER_NAME) .

start: ## Start the Docker container
	@docker run -d -p 4000:80 --name $(CONTAINER_NAME) $(CONTAINER_NAME)

stop: ## Stop the Docker container
	@docker stop $(CONTAINER_NAME)

restart: stop start ## Restart the Docker container

destroy: stop ## Destroy the Docker container
	@docker rm $(CONTAINER_NAME)
