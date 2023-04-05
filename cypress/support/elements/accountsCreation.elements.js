class AccountCreationElements {
    
    userNameInput() {
        return cy.get('input[id="sign-username"]');
    }

    passwordInput() {
        return cy.get('input[id="sign-password"]');
    }

    closeButton() {
        return cy.contains('button', "Close");
    }

    signupButton() {
        return cy.contains('button', "Sign up");
    }
}
export default AccountCreationElements