describe('Flows / Switch Cases to Accounts and Back', () => {
  it('passes', () => {
    cy.login_default()

    cy.get('#sidemenu_items')
      .contains('Accounts')
      .click()

    cy.get('#sidemenu_items')
      .contains('Management')
      .should('exist')
    cy.contains('Commonly Used Transactions')
      .should('exist')

    cy.get('#sidemenu_items')
      .contains('Management')
      .click()

    cy.get('#sidemenu_items')
      .contains('Accounts')
      .should('exist')
  })
})
