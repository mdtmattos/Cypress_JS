/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'
import ProductPageObjects from '../../support/pages/product.po'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects
const productPageObjects = new ProductPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I login',() => {
	mainPageObjects.clickLoginMenu();
	mainPageObjects.login();
	loginPageObjects.clickLogin();
})

Given('I pick a product',() => {
	productPageObjects.getProductName();
	productPageObjects.clickFirstProduct();
})

Given('I assert the product',() => {
	productPageObjects.assertProductName();
})

Then('I click on Add to cart button',() => {
	productPageObjects.clickAddToCartButton();
})

Then('I assert the product on Cart',() => {
	mainPageObjects.clickCartMenu();
	productPageObjects.assertProductOnCart();
})

Then('I delete the product',() => {
	productPageObjects.deleteProduct();
	mainPageObjects.waitSeconds(2000);
})

Then('I assert the message {string}',(message) => {
	cy.wait(1500);
	mainPageObjects.assertWindowsAlert(message);
})