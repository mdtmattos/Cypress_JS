Feature: Send a message through Contact

    Scenario: Send a message through Contact
        Given I access the application
        And I login
        When I navigate to Contact page
        And I fill the message fields
        Then I click on Send Message button
        And I assert the message "Thanks for the message!!"
