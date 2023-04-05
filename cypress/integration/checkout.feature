Feature: Checkout

    Background:
        Given I access the application
        When I login
    
    Scenario: Checkout
        Given I pick a product
        And I assert the product
        And I click on Add to cart button
        When I assert the product on Cart
        Then I purchase the product
        And I assert the message "Thank you for your purchase!"
        And I click Ok button