/// <reference types="Cypress" />
import AboutPageElements from '../../support/elements/aboutPage.elements'

const aboutPageElements = new AboutPageElements

class AboutPageObjects {
 
    clickPlayVideo() {
        aboutPageElements.playVideoButton().click();
    }

    assertProgressControl() {
        aboutPageElements.vjsProgressControl().should('be.visible');
    }

    assertRemainingTimeDisplay() {
        aboutPageElements.vjsRemainingTimeDisplay().should('be.visible');
    }
}

export default AboutPageObjects