/// <reference types="Cypress" />
import ContactElements from '../elements/contact.elements'

const contactElements = new ContactElements

class ContactPageObjects {
 
    clickSendMessage() {
        contactElements.sendMessageButton().click();
    }

    typeContactEmail() {
        contactElements.contactEmail().type('test@test.com')
    }

    typeContactName() {
        contactElements.contactName().type('Murilo_QA')
    }

    typeMessage() {
        contactElements.messageField().type('Automation Test - TheoremOne - Test Automation Engineer ')
    }
    
}

export default ContactPageObjects