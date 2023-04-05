/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I fill the fields with an existent user',() => {
	mainPageObjects.login();
})

Given('I fill with a nonexistent user',() => {
	loginPageObjects.inputUsername("skdksdkhg");
	loginPageObjects.inputPassword("456456");
})

Given('I dont fill password field',() => {
	loginPageObjects.inputUsername("Murilo_TestAutomation");
})

Given('I dont fill username field',() => {
	loginPageObjects.inputPassword("456456");
})

Given('I dont fill username and password',() => {
	loginPageObjects.assertAccountInputFields();
})

When('I click on Log in menu',() => {
	mainPageObjects.clickLoginMenu();
})

When('I click on Log in button',() => {
	loginPageObjects.clickLogin();
})

Then('I assert the message {string}',(message) => {
	cy.wait(1500);
	mainPageObjects.assertWindowsAlert(message);
})

Then('I assert the application is accessing',() => {
	cy.wait(1500);
	mainPageObjects.assertNameOfUser();
})

Then('I Logout',() => {
	mainPageObjects.clickLogoutMenu();
	mainPageObjects.assertLoginMenu();
})