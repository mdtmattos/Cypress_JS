class MainCategoriesElements {
    
    image() {
        return cy.get('img[class="card-img-top img-fluid"]');
    }

    grid() {
        return cy.get('div[id="tbodyid"]');
    }

    title() {
        return cy.get('h4[class="card-title"]');
    }

    information() {
        return cy.get('p[id="article"]');
    }
}
export default MainCategoriesElements