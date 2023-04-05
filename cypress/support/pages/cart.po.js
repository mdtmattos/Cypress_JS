/// <reference types="Cypress" />
import CartElements from '../elements/cart.elements'

const cartElements = new CartElements

class CartPageObjects {
 
    clickPlaceOrderButton() {
        cartElements.placeOrder().click();
    }

    clickOKButton() {
        cartElements.okButton().click();
    }

    clickPurchaseButton() {
        cartElements.purchaseButton().click();
    }

    typeName(name) {
        cartElements.nameInput().type(name);
    }

    typeCountry(country) {
        cartElements.countryInput().type(country);
    }

    typeCity(city) {
        cartElements.cityInput().type(city);
    }

    typeCreditCard(card) {
        cartElements.cardInput().type(card);
    }

    typeMonth(month) {
        cartElements.monthInput().type(month);
    }

    typeYear(year) {
        cartElements.yearInput().type(year);
    }

    assertPurchaseSuccessMessage(message) {
        cy.get('h2').should('contain', message);
    }
}

export default CartPageObjects