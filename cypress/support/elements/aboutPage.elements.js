class AboutPageElements {
    
    playVideoButton() {
        return cy.get('button[title="Play Video"]');
    }

    vjsProgressControl() {
        return cy.get('div[class="vjs-progress-control vjs-control"]');
    }

    vjsRemainingTimeDisplay() {
        return cy.get('span[class="vjs-remaining-time-display"]');
    }
}
export default AboutPageElements