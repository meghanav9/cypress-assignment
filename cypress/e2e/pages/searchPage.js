/*
Each step in the test scenario is separated into
functions within the searchPage.js, promoting
modularity.
*/
class SearchPage {
  visitSearchEngine(searchEngine) {
    const searchEngineUrl = Cypress.env('searchEngines')[searchEngine];
    cy.visit(searchEngineUrl);
  }

  submitSearchTerm(searchTerm) {
    cy.get('textarea[name="q"], input[name="p"]').type(`${searchTerm}`).wait(3000).type('{enter}');
  }

  assertFirstResult(expectedDescription) {
    cy.get('h3[class="LC20lb MBeuO DKV0Md"], .b_title a, h3 a[data-matarget="algo"]').first().should('contain.text', expectedDescription);
  }

  assertFirstResultURLHasLink() {
    cy.get('a[jsname="UWckNb"], .b_title a, h3 a[data-matarget="algo"]').first().should('have.attr', 'href').and('include', 'https');
  }

  assertFirstResultURL(expectedUrl) {
    cy.get('a[jsname="UWckNb"], .b_title a, h3 a[data-matarget="algo"]').should('have.attr', 'href').and('include', expectedUrl);
  }

  assertErrorMessage(errorMessage) {
    cy.get('#botstuff li').first().should('contain.text', errorMessage);
  }
}

export default SearchPage;
