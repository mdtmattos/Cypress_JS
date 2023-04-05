Feature: Browsing Main Categories

    Background:
        Given I access the application
        When I login

    Scenario: Browsing Phone Categorie
        Given I navigate to Phone categories
        When I wait to load
        Then I assert the phone cards

    Scenario: Browsing Laptops Categorie
        Given I navigate to Laptops categories
        When I wait to load
        Then I assert the Laptops cards

    Scenario: Browsing Monitors Categorie
        Given I navigate to Monitors categories
        When I wait to load
        Then I assert the Monitors cards