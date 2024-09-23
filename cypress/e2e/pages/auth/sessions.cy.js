describe('Pages / Auth / Sessions', () => {

  it('logins as a default user', () => {
    cy.login_default()
  })

  context('when email or password are invalid', () => {
    it.skip('fails on invalid email or password', () => {
      cy.visit('/')
    })
  })

})
