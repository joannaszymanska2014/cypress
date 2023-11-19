/// <reference types="cypress" />

context("GET /api/productsList", () => {
 
it.only("gets a list of products", () =>{
    cy.request("GET", "api/productsList").then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
})

})