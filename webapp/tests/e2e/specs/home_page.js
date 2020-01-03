describe('The home page', () => {
  it('Visits the home URL', () => {
    cy.visit('/')
    cy.contains('h1', 'Home Server Manager')
  })
  it('Visits the home URL', () => {
    cy.visit('/')
    cy.contains('h1', 'Server status');
  })
  it('Visits the home URL', () => {
    cy.visit('/')
    cy.contains('button', 'On / Off')
  })
  it('Visits the home URL', () => {
    cy.visit('/')
    cy.contains('button', 'Add an action')
  })
})
