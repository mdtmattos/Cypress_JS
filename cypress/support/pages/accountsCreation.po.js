/// <reference types="Cypress" />
import AccountCreationElements from '../elements/accountsCreation.elements'

const accountCreationElements = new AccountCreationElements()

class AccountsPageObjects {
 
    assertAccountInputFields() {
        accountCreationElements.userNameInput().should('be.visible');
        accountCreationElements.passwordInput().should('be.visible');
    }

    inputUsername(username) {
        accountCreationElements.userNameInput().wait(500).type(username);
    }

    inputPassword(password) {
        accountCreationElements.passwordInput().wait(500).type(password);
    }

    clickSignUp() {
        accountCreationElements.signupButton().click();
    }
}

export default AccountsPageObjects