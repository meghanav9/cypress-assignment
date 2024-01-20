class SearchPage {
  visitSearchEngine(url) {
    cy.visit(url);
  }

  submitSearchTerm(searchTerm) {
    cy.get('textarea[name="q"]').type(`${searchTerm}`).wait(3000).type('{enter}');
  }

  assertFirstResult(expectedText) {
    cy.get('h3, .b_algo a').should('contain.text', expectedText);
  }
}

export default SearchPage;
