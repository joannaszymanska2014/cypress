/// <reference types="cypress" />

import user from "../../fixtures/userData.json"

beforeEach(() => {
    cy.visit('/')
    cy.url().should('include', 'automationexercise')
})

it('First test', () => {
let naszaZmienna = randomInteger(1,1000)
let email = ('joanna.szymanska111' + naszaZmienna + '@jit.team')
cy.log('naszaZmienna')


cy.log('jakis tekst')
//cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.contains('Login').click()
//cy.get('.signup-form > h2').should('have.test', 'New User Signip!')
cy.contains('New User Signup!').should('exist')
cy.get('[data-qa="signup-name"]').type(user.jsasia.login)
cy.get('[data-qa="signup-email"]').type(email)
cy.get('[data-qa="login-email"]').type('joanna.szymanska@jit.team')
cy.get('[data-qa="signup-button"]').click()
cy.contains('Enter Account Information').should('exist')
cy.get('[data-qa="name"]').should('have.value', 'jsasia')
cy.get('[data-qa="email"]').should('have.value',email)
cy.get('[data-qa="password"]').type('1234567890')
cy.get('[data-qa="days"]').select('1')
cy.get('[data-qa="months"]').select('January')
cy.get('[data-qa="years"]').select('1990')
cy.get('#newsletter').check()
cy.get('#optin').check()
cy.get('[data-qa="first_name"]').type('Asia')
cy.get('[data-qa="last_name"]').type('Szymanska')
cy.get('[data-qa="address"]').type('Stryjewskiego')
cy.get('[data-qa="country"]').select('India')
cy.get('[data-qa="state"]').type('India')
cy.get('[data-qa="city"]').type('gdansk')
cy.get('[data-qa="zipcode"]').type('12-234')
cy.get('[data-qa="mobile_number"]').type(555256514)
cy.get('[data-qa="create-account"]').click()

cy.get('b').should('have.text', 'Account Created!')
cy.get('[data-qa="continue-button"]').click()
cy.contains('Logged in as jsasia').should('exist')
cy.contains('Delete Account').click()
cy.contains('Account Deleted!').should('exist')


});

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


it('drugi test', () => {

    cy.contains('Signup / Login').click()
    cy.get('[data-qa="login-email"]').type('joanna.szymanska111717@jit.team')
    cy.get('[data-qa="login-password"]').type('1234567890')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as jsasia').should('exist')


})

