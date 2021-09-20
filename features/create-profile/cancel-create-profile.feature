@create_profile
Feature: cancel create profile
        
        Verify that a user is able to cancel create profile process

    Scenario: user cancels create profile journey
    Given user has logged in to the App
    When they select the cancel button 
    Then can skip the create profile process  
    And be directed to My matches page
