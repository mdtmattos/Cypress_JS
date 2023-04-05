/* global Given, Then, When */
import MainPageObjects from '../../support/pages/main.po'
import LoginPageObjects from '../../support/pages/login.po'
import AboutPageObjects from '../../support/pages/aboutPage.po'

const mainPageObjects = new MainPageObjects
const loginPageObjects = new LoginPageObjects
const aboutPageObjects = new AboutPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I login',() => {
	mainPageObjects.clickLoginMenu();
	mainPageObjects.login();
	loginPageObjects.clickLogin();
})

When('I navigate to About page',() => {
	mainPageObjects.clickAboutMenu();
})

Then('I play the video',() => {
	aboutPageObjects.clickPlayVideo();
})

Then('I assert the video',() => {
	aboutPageObjects.assertProgressControl();
	aboutPageObjects.assertRemainingTimeDisplay();
})