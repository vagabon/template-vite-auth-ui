describe('CNCD HOME', () => {
  it('Given User When go to home page Then Accueil is found', () => {
    cy.visit('/');
    cy.get('.fr-card__link').should('be.visible');
    cy.get('.fr-card__link').contains('Accueil');
  });
});
