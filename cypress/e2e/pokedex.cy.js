describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Test squirtle page', function() {
    cy.visit('http://localhost:3000')
    cy.contains('squirtle').click()
    cy.contains('torrent')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

// To run test locally on the system run below steps in order
// 1. npm run build && node app.js
// 2. In a separate tab run "npm run cypress:open"