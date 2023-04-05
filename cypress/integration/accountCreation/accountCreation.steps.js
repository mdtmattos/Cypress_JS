/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import AccountsPageObjects from '../../support/pages/accountsCreation.po'
import AccountFactory from '../../support/factory/accountsCreation.factory'

const mainPageObjects = new MainPageObjects
const accountsPageObjects = new AccountsPageObjects
const accountFactory = new AccountFactory()

let accountUsername
let accountPassword

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

When('I click on Sign up menu',() => {
	mainPageObjects.clickSignUpMenu();
})

When('I fill the fields',() => {
	accountUsername = accountFactory.userName();
	accountPassword = accountFactory.password();
	accountsPageObjects.assertAccountInputFields();
	accountsPageObjects.inputUsername(accountUsername);
	accountsPageObjects.inputPassword(accountPassword);
})

When('I dont fill username field',() => {
	accountUsername = accountFactory.userName();
	accountsPageObjects.assertAccountInputFields();
	accountsPageObjects.inputUsername(accountUsername);
})

When('I dont fill password field',() => {
	accountPassword = accountFactory.password();
	accountsPageObjects.assertAccountInputFields();
	accountsPageObjects.inputPassword(accountPassword);
})

When('I dont fill username and password field',() => {
	accountsPageObjects.assertAccountInputFields();
})

When('I click on Sign up button',() => {
	accountsPageObjects.clickSignUp();
})

Then('I assert the message {string}',(message) => {
	cy.wait(1500);
	mainPageObjects.assertWindowsAlert(message);
})