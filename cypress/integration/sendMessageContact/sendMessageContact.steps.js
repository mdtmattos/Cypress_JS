/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'
import ContactPageObjects from '../../support/pages/contact.po'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects
const contactPageObjects = new ContactPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I login',() => {
	mainPageObjects.clickLoginMenu();
	mainPageObjects.login();
	loginPageObjects.clickLogin();
})

When('I navigate to Contact page',() => {
	mainPageObjects.clickContactMenu();
})

When('I fill the message fields',() => {
	mainPageObjects.waitSeconds(1000);
	contactPageObjects.typeContactEmail();
	contactPageObjects.typeContactName();
	contactPageObjects.typeMessage();
})

Then('I click on Send Message button',() => {
	contactPageObjects.clickSendMessage();
})

Then('I assert the message {string}',(message) => {
	cy.wait(1500);
	mainPageObjects.assertWindowsAlert(message);
})