Feature: preview profile test

    Verify that a user is able to preview their profile

    Scenario: user creates a profile
    Given a user has done the profile process
    When the user is on the final page and clicks preview 
    Then the user is shown an overview of their profile