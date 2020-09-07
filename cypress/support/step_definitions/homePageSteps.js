import { When, Then } from 'cypress-cucumber-preprocessor/steps';

When('I search for {string}', async (searchTerm) => {
  cy.log(`Searching for term: ${searchTerm}`);
  await cy.get('input[name="q"]').type(searchTerm).type('Enter');
});

Then('I should see {string} listed in the search results', async (expectedResult) => {
  cy.log(`Checking if ${expectedResult} appears in the search results`);
  await cy.get(expectedResult).should('be.visible');
});
