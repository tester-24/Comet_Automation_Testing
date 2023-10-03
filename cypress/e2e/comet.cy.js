/// <reference types="cypress"/>

import { LoginPage } from "./Pages/comet_login.cy.js"
const loginPage = new LoginPage
import './support/commands';

it('Comet_Jainam', () => {
    cy.visit('https://comet.jainam.in/#/startup')
    cy.wait(3000)
    cy.get('.login-space-btn').click()

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickLogin()
    cy.wait(3000)

    //Pin Page
    cy.get('.form_wrap').click()
    cy.wait(2000)

    //Enter Pin
    cy.wait(1000);
    cy.get('[formcontrolname="otp1"]').type('0')
    cy.get('[formcontrolname="otp2"]').type('0')
    cy.get('[formcontrolname="otp3"]').type('0')
    cy.get('[formcontrolname="otp4"]').type('0')
    cy.wait(4000)


    //Click on [X] Button
    // cy.get('.close > span').click({ force: true })
    // cy.get('.close > span').click()
    // cy.wait(4000)

    // Click on LAS
    cy.get('.menu_hover.ng-star-inserted > .nav-link').click()
    cy.wait(7000)

    //Click on Approve Stock List
    cy.get('.approve-stock').click()
    cy.wait(3000)

    
})