import { Given, And } from 'cypress-cucumber-preprocessor/steps';

Given('I goto the Google home page', async () => {
  cy.log('Visiting Google home page');
  await cy.visit('http://www.google.com/');
});

And('refresh the page', async () => {
  cy.log('Refresh the page');
  await cy.reload();
});
