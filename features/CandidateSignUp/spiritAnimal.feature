Feature: spirit animal tests

    	Verify that a user is assigned an animal after sign up
        
    Scenario: User is assigned a spirit animal
    Given a user has verified their email 
    When they log in to the App
    Then they should be able to see their spirit animal 
    
    	Verify that a user is able to see why they are assigned to an animal
        
    Scenario: User view why they are a specific animal
    Given a user has been assigned an animal
    When they select why am i link
    Then they should be able to navigate to the next page and see the reason 
