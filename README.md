# Cypress assignment on search engine

The cypress assignment to create a test framework using any language and tool(s) that does the following:
1. Visit one or more search engine(s); i.e google, bing, yahoo, etc...
2. Submit a search term
3. On the results page, take the first returned item and assert it as the expected result.
 
While this may seem like a simple test, you should take into consideration the following requirements.
1. The framework when implemented should use industry standard design patterns and principles.
2. The framework should be capable of supporting enterprise level applications.
3. The framework should minimize the presence of code anti-patterns.
4. The framework should be easily extended and/or modified to satisfy changes in requirements


## Usage - Development
run e2e Tests in Cypress dashboard:

```shell
npx cypress open
```
run e2e Tests headless:

```shell
npx run cypress
```

### Software requirements
- node.js
- npm


### Steps to install and run:
<details>
<summary>
  Steps to Setup and run the e2e tests
</summary>

1. Download and install node.js and npm packages for your OS
2. Run `npm install` in the shell
2. Run `npx run cypress` in the shell to run the e2e tests headless
</details>

### Architecture of the Test framework and things to note:
Page Object Model (POM): The framework uses the POM to organize and maintain page-specific actions and assertions in the searchPage.js.

Modularity: Each step in the test scenario is separated into functions within the searchPage.js, promoting modularity.

Reusable Components: The framework uses reusable components and keeps the test logic separate from the implementation details.

Extendability: Additional functionalities can be easily added by extending the SearchPage class or creating new page classes.

Separation of Concerns: The test steps (search.cy.js) focus on the test scenario, while the page-related actions and assertions are encapsulated in the searchPage.js.

Feature: The feature file helps a non-technical person understand clearly what is being tested and also expand it to write more tests.

This design should help in building a scalable and maintainable test framework that adheres to industry standards and principles.