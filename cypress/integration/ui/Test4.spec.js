describe('My Second Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://kasa.com/")

cy.get('[id^=full-screen-hero-search-input]').type('Orlando')

cy.get('[id^=full-screen-hero-check-in-input]').type('01/20/2022')

cy.get('[id^=full-screen-hero-check-out-input]').type('01/24/2022')

cy.get("button[type='submit']").click()

cy.get("a[class='mt:16-rem recommended-room-type__link button is-primary is-small'] span[class='text-container']").click({force:true})

Cypress.on('uncaught:exception', (err, runnable) => {
    
    return false
  })

cy.contains('Heating').scrollIntoView()

})
})