class LoginElements {
    
    userNameInput() {
        return cy.get('input[id="loginusername"]');
    }

    passwordInput() {
        return cy.get('input[id="loginpassword"]');
    }

    closeButton() {
        return cy.contains('button', "Close");
    }

    loginButton() {
        return cy.contains('button', "Log in");
    }
}
export default LoginElements