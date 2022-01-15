/// <reference types="cypress" />

describe('API', function () {
    let beers;
    let hops;

    it('validate ibus number', function () {
        cy.request('GET', 'https://api.punkapi.com/v2/beers').then((response) => {
            beers = response.body
            for (let i = 0; i < beers.length; i++) {
                if (typeof (beers[i].ibu) === 'number') {
                    expect(typeof (beers[i].ibu)).to.equal('number')
                }

            }

        })
    })
    it('find Wyeast 3522 yeast with Tomahawk ', function () {
        cy.request('GET', 'https://api.punkapi.com/v2/beers').then((response) => {
            beers = response.body
            for (let i = 0; i < beers.length; i++) {
                if (beers[i].ingredients.yeast == 'Wyeast 3522 - Belgian Ardennes™') {
                    hops = beers[i].ingredients.hops
                    for (let j = 0; j < hops.length; j++) {
                        if (hops[j].name == 'Tomahawk') {
                            cy.log(beers[i].name)
                            break

                        }

                    }
                }

            }

        })
    })

})
