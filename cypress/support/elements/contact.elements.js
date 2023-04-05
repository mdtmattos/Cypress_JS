class ContactElements {
    
    contactEmail() {
        return cy.get('input[id="recipient-email"]');
    }

    contactName() {
        return cy.get('input[id="recipient-name"]');
    }

    messageField() {
        return cy.get('textarea[id="message-text"]');
    }

    sendMessageButton() {
        return cy.get('button[onclick="send()"]');
    }
}
export default ContactElements