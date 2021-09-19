Feature: publish profile tests

    Verify that a user is able to publish a profile

    Scenario: user sets and saves a profile
    Given user has gone through the create profile process
    When the user clicks publish profile
    Then the users profile is created