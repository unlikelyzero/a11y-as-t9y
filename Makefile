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
# Checkout openmct on specified branches and set up the project
checkout-openmct:
	git clone https://github.com/nasa/openmct.git openmct
	cd openmct && git checkout master && git pull origin master
	cd ..

start-openmct:
	cd openmct && nvm use && npm install && npm start &

# Install k6 via Homebrew if macOS
install-k6:
	@if [ "$$(uname)" = "Darwin" ]; then \
		brew install k6; \
	else \
		echo "k6 installation is only supported via Homebrew on macOS."; \
	fi