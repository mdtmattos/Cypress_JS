class MainElements {
    fieldEmail() {
        return cy.get('[name=email]').should('be.visible');
    }

    fieldPassword() {
        return cy.get('[name=password]');
    }

    btnLogin() {
        return cy.get('button[type="submit"]');
    }

    deelLogo() {
        return cy.get('div[class="logo"]');
    }

    load() {
        return cy.get('div[class="spinner"]');
    }
}

export default MainElements