/// <reference types="Cypress" />

import MainElements from '../elements/main.elements'

const mainElements = new MainElements()

const urlLogin = "https://app.deel.training/login"
const urlApp = 'https://app.deel.training/'
const emailAddress = "mdtmattos@gmail.com"
const password = "123456789@Mtjl"

class MainPageObjects {
    accessApplication(){
        cy.visit(urlLogin);
    }

    login(){
        mainElements.fieldEmail().type(emailAddress);
        mainElements.fieldPassword().type(password);
        mainElements.btnLogin().click();
    }

    waitLoad(){
        mainElements.load().should('be.visible');
    }
}

export default MainPageObjects