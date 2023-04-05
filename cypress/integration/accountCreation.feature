Feature: Account creation

    Background:
        Given I access the application
        When I click on Sign up menu
    
    Scenario: Creating a new account
        Given I fill the fields
        When I click on Sign up button
        Then I assert the message "Sign up successful."

    Scenario: Creating a new account without username
        Given I dont fill username field
        When I click on Sign up button
        Then I assert the message "Please fill out Username and Password."

    Scenario: Creating a new account without password
        Given I dont fill password field
        When I click on Sign up button
        Then I assert the message "Please fill out Username and Password."

    Scenario: Creating a new account without username and password
        Given I dont fill username and password field
        When I click on Sign up button
        Then I assert the message "Please fill out Username and Password."