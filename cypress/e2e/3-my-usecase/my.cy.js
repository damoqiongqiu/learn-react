describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    it('check main container', () => {
        cy.get('.main-area').should('have.length', 1)
    })
});