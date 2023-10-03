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
    cy.get('#ReportDropdown').click({ force: true })
    cy.get('[href="#/fnotax"]').click()
    cy.wait(4000)

    //Click on Segment
    cy.get('form.ng-pristine > :nth-child(2) > :nth-child(1)').click()
    cy.wait(2000)

    // 1) NSE_FNO

    cy.get('form.ng-pristine > :nth-child(2) > :nth-child(1)')
    //.type("{downArrow}{Enter}")
    cy.wait(2000)

    // Click on year
    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)')
        .type("{downArrow}{downArrow}{Enter}")
    cy.wait(5000)

    // Click on Download
    cy.get('.btn').click()
    cy.wait(1000)



    // 2) CURRENCY 

    cy.get('form.ng-valid > :nth-child(2) > :nth-child(1)').type("{downArrow}{Enter}")
    //.type("{downArrow}{Enter}")
    cy.wait(2000)

    //Click on Download 
    cy.get('.btn').click()
    cy.wait(3000)

    //3) MCX 

    cy.get('form.ng-valid > :nth-child(2) > :nth-child(3)')
        .type("{downArrow}{downArrow}{Enter}")
    cy.wait(2000)


    cy.get('form.ng-valid > :nth-child(2) > :nth-child(1)').type("{downArrow}{downArrow}{Enter}")
    cy.wait(1000)

    // Click on year
    cy.get(':nth-child(2) > .d-block').click()
    // .type("{downArrow}{downArrow}{Enter}")
    cy.wait(2000)

    cy.get('form.ng-valid > :nth-child(2) > :nth-child(2)').click()
    cy.wait(2000)

    cy.get('.btn').click()

    // // // Click on Download
    // // cy.get('form.ng-valid > :nth-child(2) > :nth-child(3)').click()
    // // cy.wait(1000)






})