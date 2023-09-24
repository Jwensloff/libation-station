describe('Sad path testing', () => {
  it('should tell the users if they are using the site incorrectly', () => {
    cy.intercept(
      'GET',
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=MadeUpCocktail&api_key=%271%27`,
      { statusCode: 200, fixture: 'empty_cocktail_data.json' }
    ).as('cocktailData');
    cy.visit('http://localhost:3000/search');
    cy.get('.form').get("input[name='input']").type('1234');
    cy.get("input[name='input']").should('have.value', '1234');
    cy.get('.input-btn').click();
    cy.get('.error-message')
      .should('exist')
      .contains('Please enter a valid cocktail');
    cy.get('.form').get("input[name='input']").type('MadeUpCocktail');
    cy.get('.input-btn').click();
    cy.wait('@cocktailData');
    cy.get('.error-message')
      .should('exist')
      .contains("Appologies, we don't recognize that cocktail");
  });

  it('should throw an error if the user gets a 404 error or navigates to a bad url', () => {
    cy.intercept(
      'GET',
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=MadeUpCocktail&api_key=%271%27`,
      { statusCode: 404, fixture: 'empty_cocktail_data.json' }
    ).as('404Error');
    cy.visit('http://localhost:3000/search');
    cy.get('.form').get("input[name='input']").type('MadeUpCocktail');
    cy.get("input[name='input']").should('have.value', 'MadeUpCocktail');
    cy.get('.input-btn').click();
    cy.wait('@404Error');
    cy.get('.error-message').should('exist').contains('404, Page not found');
    cy.visit('http://localhost:3000/');
    cy.get('.error-message').should('not.exist');
    cy.visit('http://localhost:3000/potato');
    cy.get('.error-message').should('exist').contains('404 page not found');
  });
});
