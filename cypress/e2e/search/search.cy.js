import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SearchPage from '../pages/searchPage'

const searchPage = new SearchPage();

Given('I open the Google search engine', () => {
  searchPage.visitSearchEngine('https://www.google.com');
});

When('I submit a search term', () => {
  searchPage.submitSearchTerm('Test automation with Cypress and Cucumber');
});

Then('I assert the first returned item as the expected result', () => {
  searchPage.assertFirstResult('How to Run Tests with Cypress and Cucumber');
});

Given('I open the Bing search engine', () => {
  searchPage.visitSearchEngine('https://www.bing.com');
});

When('I submit a search term', () => {
  searchPage.submitSearchTerm('Test automation with Cypress and Cucumber');
});

Then('I assert the first returned item as the expected result', () => {
  searchPage.assertFirstResult('Cypress and Cucumber');
});
