Feature: preview profile test

    Verify that a user is able to preview their profile

    Scenario: user creates a profile
    Given a user has added their profile information
    When the user is on My files and links page and clicks preview 
    Then the user is shown an overview of their profile
