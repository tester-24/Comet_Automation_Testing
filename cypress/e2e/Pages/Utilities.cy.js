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
   cy.get('[formcontrolname="otp1"]').type('0');
   cy.get('[formcontrolname="otp2"]').type('0');
   cy.get('[formcontrolname="otp3"]').type('0');
   cy.get('[formcontrolname="otp4"]').type('0');
   cy.wait(4000);
   
   cy.get('.continue_button_wrap > p').click()
   cy.wait(3000)

 
   
    //Click on form
    cy.get('#AddNomineeDetail > .modal-dialog > .modal-content > .modal-body > .close').click({ force: true })
    cy.wait(5000);
  


    //Click on Utilities 

    cy.get('#UtilitiesDropdown').click()
    cy.wait(3000)

    //Click on Corporate Actions 

    //cy.get('#UtilitiesDropdown').click()
    cy.get('[href="#/corporate-actions"]').click()
    cy.wait(3000)

    //Click on CLICK HERE Link 
    cy.get('.timeline_div > ul > li > a').click()
    cy.wait(3000)

    // Corporate Actions
    cy.get('.py-4 > .heading-text > .d-flex > .col-12')
    cy.wait(3000)

    

    cy.window().scrollTo('bottom')

    cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    // Click on 2 Page
    cy.get('.bid-section').click()

    //Transaction History

    //Click on PLEASE SELECT 
    cy.wait(3000)
    cy.get('.col-lg-5 > .form-control')
    cy.get('select').select('Please Select')
        //.select('HGS (B)')
    //.should('have.value', 'HGS (B)')

    cy.wait(3000)
    cy.get('select').select('KSCL (B)', { force: true })
    //.should('have.value', 'KSCL (B)')

    cy.wait(3000)
    cy.get('select').select('ZYDUSLIFE (B)', { force: true })
    //.should('have.value', ZYDUSLIFE (B)')

    cy.wait(3000)
    cy.get('select').select('ORBTEXP (B)', { force: true })
    //.should('have.value',ORBTEXP (B)')

    cy.wait(3000)
    cy.get('select').select('DAIKAFFI (T)', { force: true })
    //.should('have.value', DAIKAFFI (T)')

    cy.wait(3000)
    cy.get('select').select('GLS (T)', { force: true })
    //.should('have.value', GLS (T)')

    cy.wait(3000)
    cy.get('select').select('CHAMBLFERT (B)', { force: true })
    //.should('have.value',CHANBLFERT (B)')

    cy.wait(3000)
    cy.get('select').select('DHAMPURSUG (B)', { force: true })
    //.should('have.value',DHAMPURSUG (B)')

    cy.wait(3000)
    cy.get('select').select('ELEMARB (B)', { force: true })
    //.should('have.value', ELEMARB (B)')

    cy.wait(3000)
    cy.get('select').select('SOMANYCERA (B)', { force: true })
    //.should('have.value', SOMANYCERA (B)')

    cy.wait(3000)
    cy.get('select').select('SIS (B)', { force: true })
    //.should('have.value',  SIS (B)')

    cy.wait(3000)
    cy.get('select').select('CFL (T)', { force: true })
    //.should('have.value', CFL (T)')

    cy.wait(3000)
    cy.get('select').select('TCS (B)', { force: true })
    //.should('have.value', TCS (B)')

    cy.wait(3000)
    cy.get('select').select('GNFC (B)', { force: true })
    //.should('have.value', GNFC (B)')

    cy.wait(3000)
    cy.get('select').select('SUVENPHAR (T)', { force: true })
    //.should('have.value', SUVENPHAR (T)')

    cy.wait(3000)
    cy.get('select').select('SHREYASCO (D)', { force: true })
    //.should('have.value', SHREYASCO (D)')

    cy.wait(3000)
    cy.get('select').select('SINCLAIR (B)', { force: true })
    //.should('have.value', SINCLAIR (B)')

    cy.wait(3000)
    cy.get('select').select('BSE (B)', { force: true })
    //.should('have.value', BSE (B)')

    cy.wait(3000)
    cy.get('select').select('SIYSIL (B)', { force: true })
    //.should('have.value', SIYSIL (B)')

    cy.wait(3000)
    cy.get('select').select('LT (B)', { force: true })
    //.should('have.value', LT (B)')

    cy.wait(3000)
    cy.get('select').select('SHREYAS (D)', { force: true })
    //.should('have.value', SHREYAS (D)')

    //cy.wait(3000)
    //cy.get('select').select('UNICHEMLAB (T)', { force: true })
    //.should('have.value', UNICHEMLAB (T)')

    cy.wait(3000)
    cy.get('select').select('FDC (B)', { force: true })
    //.should('have.value', FDC (B)')

    
    cy.wait(3000)
    cy.get('select').select('INDIAMART (B)', { force: true })
    //.should('have.value', INDIAMART (B)')

    cy.wait(3000)
    cy.get('select').select('KRBL (B)', { force: true })
    //.should('have.value', KRBL (B)')

    cy.wait(3000)
    cy.get('select').select('PEL (B)', { force: true })
    //.should('have.value', PEL (B)')
   



})