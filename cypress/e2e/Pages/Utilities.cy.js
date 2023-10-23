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

    // //Click on Close Buttton
    // cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn').click()
    // cy.wait(3000)





    // Corporate Actions
    cy.get('.py-4 > .heading-text > .d-flex > .col-12')
    cy.wait(3000)

    //Script Name 
    // cy.get('[data-kendo-grid-item-index="1"] > [data-kendo-grid-column-index="0"] > .float-left > .fa').click()
    // cy.wait(3000)

    // //Back Arrow
    // cy.get('[data-kendo-grid-item-index="1"] > [data-kendo-grid-column-index="0"] > .float-left > .fa').click()
    // cy.wait(3000)


    // //Script Name 
    // cy.get('[data-kendo-grid-item-index="2"] > [data-kendo-grid-column-index="0"] > .float-left').click()
    // cy.wait(3000)

    // //Back Arrow
    // cy.get('[data-kendo-grid-item-index="2"] > [data-kendo-grid-column-index="0"] > .float-left > .fa').click()
    // cy.wait(3000)

    cy.window().scrollTo('bottom')

    cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn').click()

    // Click on 2 Page
    cy.get('.bid-section').click()


    cy.get('.corporate-tabel > .table-responsive > .k-grid > .k-pager-wrap > kendo-pager-numeric-buttons.ng-star-inserted > .k-pager-numbers > :nth-child(2) > .k-link').click()
    cy.wait(3000)


    // //Script Name
    // cy.get('[data-kendo-grid-item-index="7"] > [data-kendo-grid-column-index="0"] > .float-left > .fa').click()
    // cy.wait(3000)

    // //Back Arrow
    // cy.get('[data-kendo-grid-item-index="7"] > [data-kendo-grid-column-index="0"] > .float-left > .fa').click()
    // cy.wait(3000)


    // Upcoming Corporate Action

    // //Click on 1st Page 
    // cy.get('.k-pager-numbers > :nth-child(1) > .k-link').click()
    // cy.wait(3000)


    //Transaction History

    //Click on PLEASE SELECT 
    cy.wait(3000)
    cy.get('.col-lg-5 > .form-control')
    cy.get('select').select('Please Select')
        //.select('HGS (B)')
    //.should('have.value', 'HGS (B)')

    cy.wait(3000)
    cy.get('select').select('WELSPUNIND (B)', { force: true })
    //.should('have.value', 'WELSPUNIND (B)')

    cy.wait(3000)
    cy.get('select').select('TEAMLEASE (B)', { force: true })
    //.should('have.value', 'TEAMLEASE (B)')

    cy.wait(3000)
    cy.get('select').select('EMIL (T)', { force: true })
    //.should('have.value', 'EMIL (T)')

    cy.wait(3000)
    cy.get('select').select('SYMPHONY (B)', { force: true })
    //.should('have.value', 'SYMPHONY (B)')


    cy.wait(3000)
    cy.get('select').select('RSYSTEMINT (T)', { force: true })
    //.should('have.value', 'RSYSTEMINT (T)')


    cy.wait(3000)
    cy.get('select').select('GPIL (B)', { force: true })
    //.should('have.value', 'GPIL (B)')


    cy.wait(3000)
    cy.get('select').select('AJANTPHARM (B)', { force: true })
    //.should('have.value', 'AJANTPHARM (B)')

    cy.wait(3000)
    cy.get('select').select('SPORTKING (B)', { force: true })
    //.should('have.value', 'SPORTKING (B)')


    cy.wait(3000)
    cy.get('select').select('VRLLOG (B)', { force: true })
    //.should('have.value', 'VRLLOG (B)')

    cy.wait(3000)
    cy.get('select').select('JAGRAN (B)', { force: true })
    //.should('have.value', 'JAGRAN (B)')

    cy.wait(3000)
    cy.get('select').select('WELENT (B)', { force: true })
    //.should('have.value', 'WELENT (B)')

    cy.wait(3000)
    cy.get('select').select('SOFTSOL (B)', { force: true })
    //.should('have.value', 'SOFTSOL (B)')

    cy.wait(3000)
    cy.get('select').select('TRIVENI', { force: true })
    //.should('have.value', 'TRIVENI')

    cy.wait(3000)
    cy.get('select').select('ECLERX (B)', { force: true })
    //.should('have.value', 'ECLERX (B)')

    cy.wait(3000)
    cy.get('select').select('COSMOFIRST (B)', { force: true })
    //.should('have.value', 'COSMOFIRST (B)')

    cy.wait(3000)
    cy.get('select').select('TIIL (B)', { force: true })
    //.should('have.value', 'TIIL (B)')

    cy.wait(3000)
    cy.get('select').select('KAMAHOLD (B)', { force: true })
    //.should('have.value', 'KAMAHOLD (B)')

    cy.wait(3000)
    cy.get('select').select('TIPSINDLTD (B)', { force: true })
    //.should('have.value', 'TIPSINDLTD (B)')

    cy.wait(3000)
    cy.get('select').select('TRITURBINE (B)', { force: true })
    //.should('have.value', TRITURBINE (B)')

    cy.wait(3000)
    cy.get('select').select('SAVINFOCO (T)', { force: true })
    //.should('have.value', SAVINFOCO (T)')

    cy.wait(3000)
    cy.get('select').select('DHANUKA (B)', { force: true })
    //.should('have.value',DHANUKA (B)')

    cy.wait(3000)
    cy.get('select').select('TANLA (B)', { force: true })
    //.should('have.value',TANLA (B)')

    cy.wait(3000)
    cy.get('select').select('DFM (D)', { force: true })
    //.should('have.value',DFM (D)')

    cy.wait(3000)
    cy.get('select').select('ORBTEXP (B)', { force: true })
    //.should('have.value',ORBTEXP (B)')

    cy.wait(3000)
    cy.get('select').select('GARFIBRES (B)', { force: true })
    //.should('have.value',GARFIBRES (B)')

    cy.wait(3000)
    cy.get('select').select('CARERATING (B)', { force: true })
    //.should('have.value',CARERATING (B)')

    cy.wait(3000)
    cy.get('select').select('KEERTI (T)', { force: true })
    //.should('have.value',KEERTI (T)')

    cy.wait(3000)
    cy.get('select').select('INEOSSTYRO (T)', { force: true })
    //.should('have.value',INEOSSTYRO (T)')

    cy.wait(3000)
    cy.get('select').select('SPAL (B)', { force: true })
    //.should('have.value',SPAL (B)')

    cy.wait(3000)
    cy.get('select').select('SCFL (B)', { force: true })
    //.should('have.value',SCFL (B)')

    cy.wait(3000)
    cy.get('select').select('SIS (B)', { force: true })
    //.should('have.value',SIS (B)')


    cy.wait(3000)
    cy.get('select').select('QUICKHEAL (B)', { force: true })
    //.should('have.value',QUICKHEAL (B)')

    cy.wait(3000)
    cy.get('select').select('GRANULES (B)', { force: true })
    //.should('have.value',GRANULES (B)')

    cy.wait(3000)
    cy.get('select').select('SURAJLTD (B)', { force: true })
    //.should('have.value',SURAJLTD (B)')

    cy.wait(3000)
    cy.get('select').select('BSOFT (B)', { force: true })
    //.should('have.value',BSOFT (B)')

    cy.wait(3000)
    cy.get('select').select('MATRIMONY (B)', { force: true })
    //.should('have.value',MATRIMONY (B)')

    cy.wait(3000)
    cy.get('select').select('SICAGEN (T)', { force: true })
    //.should('have.value',SICAGEN (T)')

    cy.wait(3000)
    cy.get('select').select('AVONMORE (B)', { force: true })
    //.should('have.value',AVONMORE (B)')

    cy.wait(3000)
    cy.get('select').select('MOTILALOFS (B)', { force: true })
    //.should('have.value', MOTILALOFS (B)')

    cy.wait(3000)
    cy.get('select').select('HEXATRADEX (D)', { force: true })
    //.should('have.value', HEXATRADEX (D)')

    cy.wait(3000)
    cy.get('select').select('ASAHISONG (B)', { force: true })
    //.should('have.value', ASAHISONG (B)')

    cy.wait(3000)
    cy.get('select').select('ZYDUSLIFE (B)', { force: true })
    //.should('have.value', ZYDUSLIFE (B)')

    cy.wait(3000)
    cy.get('select').select('IPOWER (T)', { force: true })
    //.should('have.value',  IPOWER (T)')

    cy.wait(3000)
    cy.get('select').select('EVEREADY (T)', { force: true })
    //.should('have.value',EVEREADY (T)')

    cy.wait(3000)
    cy.get('select').select('INDIAMART (B)', { force: true })
    //.should('have.value', INDIAMART (B)')

    cy.wait(3000)
    cy.get('select').select('ESCORTSFIN (T)', { force: true })
    //.should('have.value', ESCORTSFIN (T)')

    cy.wait(3000)
    cy.get('select').select('SINCLAIR (B)', { force: true })
    //.should('have.value', SINCLAIR (B)')

    cy.wait(3000)
    cy.get('select').select('BUTTERFLY (T)', { force: true })
    //.should('have.value', BUTTERFLY (T)')

    cy.wait(3000)
    cy.get('select').select('SARDAEN (B)', { force: true })
    //.should('have.value',SARDAEN (B)')

    cy.wait(3000)
    cy.get('select').select('GAIL (B)', { force: true })
    //.should('have.value', GAIL (B)')

    cy.wait(3000)
    cy.get('select').select('FILATEX (B)', { force: true })
    //.should('have.value', FILATEX (B)')

    cy.wait(3000)
    cy.get('select').select('FDC (B)', { force: true })
    //.should('have.value', FDC (B)')

    cy.wait(3000)
    cy.get('select').select('UNIVPHOTO (D)', { force: true })
    //.should('have.value', UNIVPHOTO (D)')

    cy.wait(3000)
    cy.get('select').select('KPRMILL (B)', { force: true })
    //.should('have.value', KPRMILL (B)')

    cy.wait(3000)
    cy.get('select').select('GULFOILLUB (B)', { force: true })
    //.should('have.value', GULFOILLUB (B)')

    cy.wait(3000)
    cy.get('select').select('MAYURUNIQ (B)', { force: true })
    //.should('have.value', MAYURUNIQ (B)')


    cy.wait(3000)
    cy.get('select').select('TCS (B)', { force: true })
    //.should('have.value', TCS (B)')


    cy.wait(3000)
    cy.get('select').select('JAMESWARTE (B)', { force: true })
    //.should('have.value', JAMESWARTE (B)')

    cy.wait(3000)
    cy.get('select').select('LYKALABS (T)', { force: true })
    //.should('have.value', LYKALABS (T)')

    cy.wait(3000)
    cy.get('select').select('MOIL (B)', { force: true })
    //.should('have.value', MOIL (B)')





})