/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'
import ProductPageObjects from '../../support/pages/product.po'
import CartPageObjects from '../../support/pages/cart.po'
import PlaceOrderFactory from '../../support/factory/placeOrder.factory'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects
const productPageObjects = new ProductPageObjects
const cartPageObjects = new CartPageObjects
const placeOrderFactory = new PlaceOrderFactory()

let country
let city
let card

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
})

Then('I purchase the product',() => {
	country = placeOrderFactory.country();
	city = placeOrderFactory.city();
	card = placeOrderFactory.card();
	cartPageObjects.clickPlaceOrderButton();
	mainPageObjects.waitSeconds(2000);
	cartPageObjects.typeName('Murilo_TestAutomation');
	cartPageObjects.typeCountry(country);
	cartPageObjects.typeCity(city);
	cartPageObjects.typeCreditCard(card);
	cartPageObjects.typeMonth('12');
	cartPageObjects.typeYear('2050');
	cartPageObjects.clickPurchaseButton();
	mainPageObjects.waitSeconds(2000);
})

Then('I click Ok button',() => {
	cartPageObjects.clickOKButton();
})

Then('I assert the message {string}',(message) => {
	cy.wait(1500);
	cartPageObjects.assertPurchaseSuccessMessage(message);
})