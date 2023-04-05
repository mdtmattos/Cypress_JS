class ProductElements {
    
    addToCartButton() {
        return cy.contains('a', 'Add to cart');
    }

    productTitle() {
        return cy.get('h2[class="name"]');
    }

    deleteButton() {
        return cy.contains('a', 'Delete');
    }
}
export default ProductElements