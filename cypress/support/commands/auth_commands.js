Cypress.Commands.add('login', (username, password) => {
  cy.visit('/login')

  cy.get('input[name="email"]').type(username)
  cy.get('input[name="password"]').type(`${password}{enter}`, { log: false })

  cy.get('#sidemenu_items')
    .should('contain', 'Home')
})

Cypress.Commands.add('login_as', (key) => {
  cy.fixture('users').then((users) => {
    cy.login(users[key]['email'], users[key]['password'])
  })
})

Cypress.Commands.add('login_default', () => {
  cy.login(Cypress.env('DEFAULT_USERNAME'), Cypress.env('DEFAULT_PASSWORD'))
})

Cypress.Commands.add('login_system', () => {
  cy.login(Cypress.env('SYSTEM_USERNAME'), Cypress.env('SYSTEM_PASSWORD'))
})

Cypress.Commands.add('logout', () => {

})
