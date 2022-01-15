describe('My First Test Suite', function() 
{

it('My FirstTest case',function() {

cy.visit("https://kasa.com/")
cy.get('[id^=full-screen-hero-search-input]').type('Austin, TX')
cy.get('[id^=full-screen-hero-search-input]').clear()
cy.get('[id^=full-screen-hero-search-input]').type('Atlanta, GA')
cy.get('[id^=full-screen-hero-search-input]').clear()
cy.get('[id^=full-screen-hero-search-input]').type('Orlando')

})
})