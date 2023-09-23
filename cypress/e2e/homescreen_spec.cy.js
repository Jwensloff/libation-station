describe('Homepage to favoriting', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita&api_key=%271%27`,
      { statusCode: 200, fixture: 'dummy_cocktail_data.json' }
    ).as('cocktailData');

    cy.visit('http://localhost:3000/libation-station/home');
  });

  it('Should bring a user to the homepage', () => {
    cy.url().should('eq', 'http://localhost:3000/libation-station/home');
    cy.get('.title').should('contain', 'Libation Station');
    cy.get('.text').should('exist');
    cy.get('.text').should('contain', "It's 5 o'clock somewhere");
  });

  it('Should allow a user to search for cocktails and see ingredients', () => {
    cy.visit('http://localhost:3000/libation-station/home');
    cy.get('.search-btn').should('exist');
    cy.get('.search-btn').click();
    cy.get('.form').should('exist');
    cy.get('.search-btn').should('have.class', 'active');
    cy.get('.form').get("input[name='input']").type('Margarita');
    cy.get("input[name='input']").should('have.value', 'Margarita');
    cy.get('.input-btn').click();
    cy.wait('@cocktailData').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.get('.card').should('have.length', 15);
    cy.url().should('eq', 'http://localhost:3000/libation-station/search/Margarita');
    cy.get('.outter-card-border').should('have.length', 5);
    cy.get('.outter-card-border').first().should('contain', 'Margarita');
    cy.get('.outter-card-border')
      .last()
      .should('contain', 'Strawberry Margarita');
    cy.get('#11007').find('.drop-down').click();
    cy.get('#11007').should('contain', 'Ingredients');
    cy.get('#11007').contains('Instructions');
    cy.get('#11007').find('.drop-down').click();
    cy.get('#11007').should('not.contain', 'Ingredients');
    cy.get('#11007').should('not.contain', 'Instructions');
  });

  it('should allow a user to favorite and unfavorite a cocktail', () => {
    cy.visit('http://localhost:3000/libation-station/home');
    cy.get('.search-btn').should('exist');
    cy.get('.search-btn').click();
    cy.get('.form').should('exist');
    cy.get('.form').get("input[name='input']").type('Margarita');
    cy.get('.input-btn').click();
    cy.wait('@cocktailData').then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
    });
    cy.url().should('eq', 'http://localhost:3000/libation-station/search/Margarita');
    cy.get('.outter-card-border').should('have.length', 5);
    cy.get('#11007').find('.favorite-btn').click();
    cy.get('#16158').find('.favorite-btn').click();
    cy.get('.see-faves-btn').click();
    cy.get('.see-faves-btn').should('have.class', 'active');
    cy.url().should('eq', 'http://localhost:3000/libation-station/favorites');
    cy.get('.outter-card-border').should('have.length', 2);
    cy.get('.single-cocktail').first().should('have.id', '11007');
    cy.get('.single-cocktail').last().should('have.id', '16158');
    cy.get('#11007').find('.favorite-btn').click();
    cy.get('.outter-card-border').should('have.length', 1);
    cy.get('#16158').find('.favorite-btn').click();
    cy.get('.outter-card-border').should('have.length', 0);
    cy.get('.error-message').contains("You don't have any favorites yet");
    cy.get('.home-btn').click();
    cy.get('.home-btn').should('have.class', 'active');
    cy.url().should('eq', 'http://localhost:3000/libation-station/home');
  });
});
