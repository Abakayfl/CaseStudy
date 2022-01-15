
describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://kasa.com/")

cy.get('[id^=full-screen-hero-search-input]').type('Orlando')

cy.get('[id^=full-screen-hero-check-in-input]').type('01/20/2022')

cy.get('[id^=full-screen-hero-check-out-input]').type('01/21/2022')

cy.get("button[type='submit']").click()

cy.get("p[class='fs:14-rem mb:8-rem']").should('have.text', ' Minimum  2-night stays at this property. ')

})
})
