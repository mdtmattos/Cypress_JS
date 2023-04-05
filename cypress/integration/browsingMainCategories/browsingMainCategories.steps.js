/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'
import MainCategoriesPageObjects from '../../support/pages/mainCategories.po'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects
const mainCategoriesPageObjects = new MainCategoriesPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I login',() => {
	mainPageObjects.clickLoginMenu();
	mainPageObjects.login();
	loginPageObjects.clickLogin();
})

Given('I navigate to Phone categories',() => {
	mainCategoriesPageObjects.clickPhones();
})

Given('I assert the phone cards',() => {
	mainCategoriesPageObjects.assertGrids();
	mainCategoriesPageObjects.assertImage();
	mainCategoriesPageObjects.assertTitle();
	mainCategoriesPageObjects.assertDetails();
})

When('I navigate to Laptops categories',() => {
	mainCategoriesPageObjects.clickLaptops();
})

When('I wait to load',() => {
	mainPageObjects.waitSeconds(3000);
})

When('I assert the Laptops cards',() => {
	mainCategoriesPageObjects.assertGrids();
	mainCategoriesPageObjects.assertImage();
	mainCategoriesPageObjects.assertTitle();
	mainCategoriesPageObjects.assertDetails();
})

Then('I navigate to Monitors categories',() => {
	mainCategoriesPageObjects.clickMonitors();
})

Then('I assert the Monitors cards',() => {
	mainCategoriesPageObjects.assertGrids();
	mainCategoriesPageObjects.assertImage();
	mainCategoriesPageObjects.assertTitle();
	mainCategoriesPageObjects.assertDetails();
})