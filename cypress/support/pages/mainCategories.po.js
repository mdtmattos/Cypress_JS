/// <reference types="Cypress" />
import MainElements from '../../support/elements/main.elements'
import MainCategoriesElements from '../../support/elements/mainCategories.elements'

const mainElements = new MainElements
const mainCategoriesElements = new MainCategoriesElements

class MainCategoriesPageObjects {
 
    clickPhones() {
        mainElements.phonesCategory();
    }

    assertImage() {
        mainCategoriesElements.image().should('be.visible');
    }

    assertTitle() {
        mainCategoriesElements.title().should('be.visible');
    }

    assertDetails() {
        mainCategoriesElements.information().should('be.visible');
    }

    assertGrids() {
        mainCategoriesElements.grid().should('be.visible');
    }

    clickPhones() {
        mainElements.phonesCategory().click();
    }

    clickLaptops() {
        mainElements.laptopsCategory().click();
    }

    clickMonitors() {
        mainElements.monitorsCategory().click();
    }
}

export default MainCategoriesPageObjects