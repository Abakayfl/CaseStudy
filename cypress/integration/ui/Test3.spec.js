/// <reference types="cypress" />
describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://kasa.com/")

cy.get('[id^=full-screen-hero-search-input]').type('Orlando')

cy.get('[id^=full-screen-hero-check-in-input]').type('01/5/2022')

cy.get('[id^=full-screen-hero-check-out-input]').type('01/21/2022')

cy.get('#full-screen-hero-invalid-check-in-error').should('have.text', '  Enter a valid check-in date (MM/DD/YYYY)')



})
})