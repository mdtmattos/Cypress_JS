/// <reference types="Cypress" />

import CreateContractElements from '../elements/createContract.elements'

const createContractElements = new CreateContractElements();

export class CreateContractPageObjects {
    clickCreateAContract(){
        createContractElements.createContractOptions().click();
    }

    clickFixedRate(){
        createContractElements.fixedRateOptions().click();
    }

    clickBtnNext(){
        createContractElements.btnNext().click();
    }

    clickBtnCreateContract(){
        createContractElements.btnCreateContract().click();
    }

    typeContractName(contractName){
        createContractElements.inputContractName().type(contractName);
    }

    selectContractorTaxResidence(taxResidence){
        createContractElements.taxResidence().click().type(taxResidence);
        createContractElements.dropdownList().contains(taxResidence).click();
    }

    selectState(state){
        createContractElements.chooseState().click().type(state);
        createContractElements.dropdownList().contains(state).click();
    }

    selectSeniorityLevel(seniority){
        createContractElements.seniorityLevel().click().type(seniority);
        createContractElements.dropdownList().contains(seniority).click();
    }

    selectJobTitle(jobTitle){
        createContractElements.jobTitle().first().click().type(jobTitle);
        createContractElements.jobTitleList().should('contain', jobTitle).contains(jobTitle).click();
    }

    selectCurrency(currency){
        createContractElements.currencySelect().click()
        createContractElements.dropdownList().contains(currency).click();
    }

    selectPaymentFrequency(paymentFrequency){
        createContractElements.paymentFrequency().first().click()
        createContractElements.dropdownList().contains(paymentFrequency).click();
    }

    setScopeWork(scopeText){
        createContractElements.scopeDropdown().click();
        createContractElements.scopeDropdownList().contains('span', scopeText).click();
    }

    inputPaymentRate(paymentRate){
        createContractElements.paymentRate().type(paymentRate);
    }

    assertDefineDatesPage(){
        createContractElements.defineDatesPage().should('have.text', 'Define dates of contract');
    }

    setSpecialClause(specialClause){
        createContractElements.btnAddScpecialClause().scrollIntoView().click();
        createContractElements.textAreaSpecialClause().type(specialClause);
    }

    inputDate(){
        const date = new Date()
        date.setDate(date.getDate() - 1)
        createContractElements.contractDate().click();
        createContractElements.calendarContract().contains(date.toLocaleDateString('en-US', { day: 'numeric'})).click()
    }

    assertContractItems(){
        createContractElements.contractFixed().should('have.text', 'FIXED');
        createContractElements.clientSignature().should('be.visible');
        createContractElements.contractDetails().should('be.visible');
        createContractElements.jobRole().should('be.visible');
        createContractElements.paymentDetails().should('be.visible');
        createContractElements.firstPayment().should('be.visible');
        createContractElements.scopeInfoBox().should('be.visible');
        createContractElements.otherSpecifics().should('be.visible');
    }
}
export default CreateContractPageObjects