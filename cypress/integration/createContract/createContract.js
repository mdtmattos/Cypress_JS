/* global Given, Then, When */

import MainPageObjects from '../../support/pages/main.po'
import CreateContractPageObjects from '../../support/pages/createContract.po'

const mainPageObjects = new MainPageObjects
const createContractPageObjects = new CreateContractPageObjects

Given('I access the application',() => {
	mainPageObjects.accessApplication();
})

Given('I login',() => {
	mainPageObjects.login();
	mainPageObjects.waitLoad();
})

When('I click on Create A Contract on menu',() => {
	createContractPageObjects.clickCreateAContract();
	
})

When('click Fixed Rate option',() => {
	createContractPageObjects.clickFixedRate();
	
})

When('I fill the fields',() => {
	createContractPageObjects.typeContractName('QA Engineer');
	createContractPageObjects.selectContractorTaxResidence('United States');
	createContractPageObjects.selectState('Colorado');
	createContractPageObjects.selectSeniorityLevel('Senior (Individual Contributor Level 3)')
	createContractPageObjects.selectJobTitle('QA Engineer');
	createContractPageObjects.setScopeWork('Quality Assurance Engineer');
	createContractPageObjects.inputDate();
	createContractPageObjects.clickBtnNext();
	createContractPageObjects.selectCurrency('GBP - British Pound');
	createContractPageObjects.inputPaymentRate('1000');
	createContractPageObjects.selectPaymentFrequency('Weekly');
	createContractPageObjects.clickBtnNext();
	createContractPageObjects.assertDefineDatesPage();
	createContractPageObjects.clickBtnNext();
	createContractPageObjects.setSpecialClause('Special clause for testing.');
	createContractPageObjects.clickBtnNext();
	createContractPageObjects.clickBtnCreateContract();
	
})

Then('I assert if the contract was created correctly',() => {
	createContractPageObjects.assertContractItems();
})


