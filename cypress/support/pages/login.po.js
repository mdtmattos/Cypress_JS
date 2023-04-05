/// <reference types="Cypress" />
import LoginElements from '../elements/login.elements';

const loginElements = new LoginElements()

class LoginPageObjects {
 
    assertAccountInputFields() {
        loginElements.userNameInput().should('be.visible');
        loginElements.passwordInput().should('be.visible');
    }

    inputUsername(username) {
        loginElements.userNameInput().wait(500).type(username);
    }

    inputPassword(password) {
        loginElements.passwordInput().wait(500).type(password);
    }

    clickLogin() {
        loginElements.loginButton().click();
    }
}

export default LoginPageObjects