describe('My first test', () => {
  /* it('Does not do much', () => {
    // Arrange - setup initial app state
    // - visit a web page
    // - query a element
    // Act - take an action
    // - interact with that element
    // Assert - make an assertion
    // - make an assertion
    // expect(true).to.equal(false); // simple example
  }); */

  it('Visits the Looke site, finds a element', () => {
    cy.visit('https://www.looke.com.br');
    cy.get('.gdl').click({ force: true });
    cy.contains('Atire Duas').click({ force: true });
  });
});
