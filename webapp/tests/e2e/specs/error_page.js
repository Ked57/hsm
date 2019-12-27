describe('The error page', () => {
    it('Visits the error URL', () => {
      cy.visit('#/error')
      cy.contains('h1', 'Error')
    })
    it('Visits the error URL', () => {
        cy.visit('#/error')
        cy.contains('h2', 'Something bad happened')
      })
  })
  