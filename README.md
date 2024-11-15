# a11y-as-t9y

## Project Summary

This project demonstrates how accessibility (a11y) can be leveraged to improve testability (t9y) of web applications. The primary application under test is [Open MCT](https://github.com/nasa/openmct), a web-based mission control framework.

## Contents

- **Makefile**: Contains various commands to set up the environment, install dependencies, and manage the project.
- **Tests**: Includes test scripts written for the k6 load testing tool, utilizing both HTTP and browser-based testing.
  - `tests/k6/openmct/createAndSearch.js`: A script to test the create and search functionality in Open MCT.
  - `tests/k6/examples/script.js`: A simple HTTP test script.
  - `tests/k6/examples/browserScript.js`: A browser-based test script for login functionality.
  - **Playwright Tests**: End-to-end tests using Playwright.
    - `tests/playwright`: Directory containing Playwright test scripts.

## Setup and Usage

1. **Install Dependencies**:
   - Install Homebrew (if on macOS):
     ```sh
     make install-brew
     ```
   - Install NVM:
     ```sh
     make install-nvm
     ```
   - Install NPM dependencies:
     ```sh
     make npm-install
     ```

2. **Run Tests**:
   - To run the Open MCT create and search test:
     ```sh
     npm run test:openmct
     ```
   - To run Playwright end-to-end tests:
     ```sh
     npm run test:e2e
     ```

3. **Clean the Project**:
   - To clean up generated files:
     ```sh
     make clean
     ```

## Links

- [Open MCT GitHub Repository](https://github.com/nasa/openmct)
- [k6 Documentation](https://k6.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
