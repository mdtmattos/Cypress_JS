Feature: Shopping Cart

    Background:
        Given I access the application
        When I login
    
    Scenario: Shopping Cart
        Given I pick a product
        When I assert the product
        And I click on Add to cart button
        Then I assert the product on Cart
        And I delete the product

