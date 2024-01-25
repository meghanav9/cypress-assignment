/*
The test steps (search.cy.js) focus on the test
scenario, while the page-related actions and 
assertions are encapsulated in the searchPage.js.
*/

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../pages/searchPage'

const searchPage = new SearchPage();

Given('I open the {string} search engine', (searchEngine) => {
  searchPage.visitSearchEngine(searchEngine);
});

When('I submit a search term {string}', (searchTerm) => {
  searchPage.submitSearchTerm(searchTerm);
});

Then('I assert the first returned item as the {string}', (expectedDescription) => {
  searchPage.assertFirstResult(expectedDescription);
});

Then('I assert the first returned item\'s url has https', () => {
  searchPage.assertFirstResultURLHasLink();
});

Then('I assert the first returned item\'s url as {string}', (expectedUrl) => {
  searchPage.assertFirstResultURL(expectedUrl);
});

Then('I assert there are no results returned with an error message {string}', (errorMessage) => {
  searchPage.assertErrorMessage(errorMessage);
});
