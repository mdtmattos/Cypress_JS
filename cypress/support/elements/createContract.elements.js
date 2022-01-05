class CreateContractElements {
    createContractOptions() {
        return cy.contains('Create A Contract');
    }

    fixedRateOptions() {
        return cy.contains('Fixed Rate');
    }

    inputContractName() {
        return cy.get('input[name="name"]');
    }

    taxResidence() {
        return cy.get('input[id="react-select-3-input"]');
    }

    dropdownList() {
        return cy.get('div[class="deel-ui__select__option-container');
    }

    chooseState() {
        return cy.get('input[id="react-select-5-input"]');
    }

    seniorityLevel() {
        return cy.get('input[id="react-select-4-input"]');
    }

    scopeText() {
        return cy.get('textarea[name="scope"]');
    }

    scopeDropdown() {
        return cy.get('h6[class="color-primary"]');
    }

    scopeDropdownList() {
        return cy.get('div[class="deel-ui__button__content"]');
    }

    currencySelect() {
        return cy.get('div[data-qa="currency-select"]').should('be.visible');
    }

    paymentRate() {
        return cy.get('input[name="rate"]');
    }

    paymentFrequency() {
        return cy.get('div[data-qa="cycle-select');
    }

    btnAddScpecialClause() {
        return cy.get('button[data-qa="add-a-special-clause');
    }

    btnCreateContract() {
        return cy.get('button[data-qa="create-contract');
    }

    formBenefits() {
        return cy.get('div[class="flex flex-dir-col extra-form');
    }

    textAreaSpecialClause() {
        return cy.get('div[class="textarea-container"]');
    }

    defineDatesPage() {
        return cy.get('h4[class="text-left mb-7 subtitle');
    }

    contractDate() {
        return cy.get('div[class="deel-ui__calendar-input-container__input_content"]');
    }

    calendarContract(){
        return cy.get('button[class="react-calendar__tile react-calendar__month-view__days__day"]');
    }

    jobTitle() {
        return cy.get('input[name="jobTitle"]');
    }

    jobTitleList() {
        return cy.get('p[class="suggestions-option"]');
    }

    btnNext() {
        return cy.get('button[data-qa="next"]');
    }

    contractFixed() {
        return cy.get('p[class="contract-layout-type mb-4 color-danger"]');
    }

    clientSignature() {
        return cy.get('div[data-qa="client-signatures"]');
    }

    contractDetails() {
        return cy.get('div[data-qa="contract-details"]');
    }

    jobRole() {
        return cy.get('div[data-qa="job-role"]');
    }

    paymentDetails() {
        return cy.get('div[data-qa="payment-details"]');
    }

    firstPayment() {
        return cy.get('div[data-qa="first-payment"]');
    }

    scopeInfoBox() {
        return cy.get('div[data-qa="scope-info-box"]');
    }

    otherSpecifics() {
        return cy.get('div[data-qa="other-specifics-box"]');
    }
}

export default CreateContractElements