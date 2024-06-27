# Makefile

# Install Homebrew
install-brew:
	/bin/bash -c "$$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install NVM
install-nvm:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# Install NPM dependencies
npm-install:
	npm install

# Clean the project
clean:
	rm -rf node_modules
	rm -rf tests/har

# Checkout openmct on specified branches
checkout-openmct:
	git -C openmct-master checkout master
	git -C openmct-master pull origin master
	git -C openmct-a11y-change1 checkout a11y-change1
	git -C openmct-a11y-change1 pull origin a11y-change1
	git -C openmct-a11y-change2 checkout a11y-change2
	git -C openmct-a11y-change2 pull origin a11y-change2

# Install k6 via Homebrew if macOS
install-k6:
	@if [ "$$(uname)" = "Darwin" ]; then \
		brew install k6; \
	else \
		echo "k6 installation is only supported via Homebrew on macOS."; \
	fi