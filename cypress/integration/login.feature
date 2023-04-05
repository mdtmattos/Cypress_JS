Feature: Login

    Background:
        Given I access the application
        When I click on Log in menu

    Scenario: Login with an exitent user
        Given I fill the fields with an existent user
        When I click on Log in button
        Then I assert the application is accessing

    Scenario: Logout user
        Given I fill the fields with an existent user
        When I click on Log in button
        And I assert the application is accessing
        Then I Logout

    Scenario: Login with a nonexistent user
        Given I fill with a nonexistent user
        When I click on Log in button
        Then I assert the message "User does not exist."

    Scenario: Login without type username
        Given I dont fill password field
        When I click on Log in button
        Then I assert the message "Please fill out Username and Password."

    Scenario: Login without type password
        Given I dont fill username field
        When I click on Log in button
        Then I assert the message "Please fill out Username and Password."

    Scenario: Login without type username and password
        Given I dont fill username and password
        When I click on Log in button
        Then I assert the message "Please fill out Username and Password."