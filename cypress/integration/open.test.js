context('Opening', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000');
    });

    it('can navigate to landing page', () => {
        cy.location('pathname').should('include', '');
    });
});
