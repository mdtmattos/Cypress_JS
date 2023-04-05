/// <reference types="Cypress" />
import ProductElements from '../elements/product.elements'
import MainCategoriesElements from '../../support/elements/mainCategories.elements'

const productElements = new ProductElements
const mainCategoriesElements = new MainCategoriesElements

class ProductPageObjects {
 
    clickAddToCartButton() {
        productElements.addToCartButton().click();
    }

    clickFirstProduct() {
        cy.wait(2000);
        mainCategoriesElements.image().first().click();
    }

    deleteProduct() {
        cy.wait(2000);
        productElements.deleteButton().click();
    }

    getProductName() {
        mainCategoriesElements.title().first().find('a').invoke('text').then(text => {
            const productName = text;
            cy.wrap(productName).as('productName')
          });
    }

    assertProductName() {
        cy.get('@productName').then(productName => {
            productElements.productTitle().contains(productName).should('be.visible');
        })
    }

    assertProductOnCart() {
        cy.get('@productName').then(productName => {
            cy.get('tr').find('td').contains(productName).should('be.visible');
        })
    }
}

export default ProductPageObjects