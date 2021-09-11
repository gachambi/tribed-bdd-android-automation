@create_profile
Feature: create profile

    Scenario: user creates a profile
    Given user has not created a profile
    When user logs in 
    Then they can create a profile

