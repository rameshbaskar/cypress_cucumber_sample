Feature: Happy path scenarios

   Happy path scenarios

Scenario: Search in Google
  Given I goto the Google home page
  When I search for "Cypress"
  Then I should see "https://www.cypress.io" listed in the search results
