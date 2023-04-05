class CartElements {
    
    placeOrder() {
        return cy.contains('button', 'Place Order');
    }

    okButton() {
        return cy.contains('button', 'OK');
    }

    purchaseButton() {
        return cy.contains('button', 'Purchase');
    }

    deleteButton() {
        return cy.contains('a', 'Delete');
    }

    nameInput() {
        return cy.get('input[id="name"]');
    }

    countryInput() {
        return cy.get('input[id="country"]');
    }

    cityInput() {
        return cy.get('input[id="city"]');
    }

    cardInput() {
        return cy.get('input[id="card"]');
    }

    monthInput() {
        return cy.get('input[id="month"]');
    }

    yearInput() {
        return cy.get('input[id="year"]');
    }
}
export default CartElements