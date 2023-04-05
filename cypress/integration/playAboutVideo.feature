Feature: Play About Video

    Scenario: Play Video
        Given I access the application
        And I login
        When I navigate to About page
        Then I play the video
        And I assert the video
