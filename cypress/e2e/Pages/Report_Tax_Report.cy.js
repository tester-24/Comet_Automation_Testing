/// <reference types="cypress"/>

import { LoginPage } from "./comet_login.cy.js"
const loginPage = new LoginPage

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
    cy.wait(35000)


    //Click on form
    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click()
    cy.wait(35000)

    // click on Reports
    cy.get('#ReportDropdown').click()
    cy.get('[href="#/tax"]').click()
    cy.wait(4000)

    // // 5) Tax P&L
    // cy.get('#ReportDropdown').click()
    // cy.get('[href="#/tax"]').click()
    // cy.wait(3000)

    //Click on Tax P&L
    cy.get('.btn').click()
    cy.wait(4000)
    // cy.log('log this to the console');


    // // Click on Download PDF Tax P&L report for Equity Segment 
    // cy.get(':nth-child(3) > .download-summary-btn').click()
    // cy.wait(4000)



})