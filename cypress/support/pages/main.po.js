/// <reference types="Cypress" />

import MainElements from '../../support/elements/main.elements'
import LoginPageObjects from '../../support/pages/login.po'

const mainElements = new MainElements
const loginPageObjects = new LoginPageObjects

const url = "https://www.demoblaze.com/"
const userName = "Murilo_TestAutomation"
const password = "test_123456"

class MainPageObjects { 
    accessApplication(){
        cy.visit(url);
    }

    login(){
        loginPageObjects.inputUsername(userName);
        loginPageObjects.inputPassword(password);
    }    

    clickSignUpMenu(){
        mainElements.signUpMenu().click();
    }

    clickLoginMenu(){
        mainElements.logInMenu().click();
    }

    clickLogoutMenu(){
        mainElements.logoutMenu().click();
    }

    clickAboutMenu(){
        mainElements.aboutUsMenu().click();
    }

    clickContactMenu(){
        mainElements.contactMenu().click();
    }

    clickCartMenu(){
        mainElements.cartMenu().click();
    }

    assertLoginMenu(){
        mainElements.logInMenu().should('be.visible');
    }

    assertWindowsAlert(message){
        cy.on('window:alert', (str) => {
            expect(str).to.equal(message)
          })
    }

    assertNameOfUser(){
        mainElements.nameOfUser().should('contain', "Welcome " + userName)
    }

    waitSeconds(seconds){
        cy.wait(seconds)
    }
}
export default MainPageObjects