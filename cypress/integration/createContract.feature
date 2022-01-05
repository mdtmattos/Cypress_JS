Feature: Create a contract

    Scenario: Fixed Rate
        Given I access the application
        And I login
        When I click on Create A Contract on menu
        And click Fixed Rate option
        And I fill the fields
        Then I assert if the contract was created correctly