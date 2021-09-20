@create_profile
Feature: create profile
        
        Verify that a user is able to add culture information

    Scenario: user adds culture information
    Given user has logged in to the App
    And is on the My culture preferences page
    When they edit culture, Development, well-being and benefits
    Then they should be able to click next 
    And be directed to the My skills & Experience page 
    
    	Verify that a user is able to add My skills & Experience 
        
    Scenario: User adds skills and experience
    Given a user is on the  My skills & Experience page 
    When they enter their technical, leadership, sectors and qualification
    Then they should be able to click next 
    And be redirected to the My workstyle page 
    
    	Verify that a user is able to add My workstyle
        
    Scenario: User adds workstyle
    Given a user is on the  My workstyle page 
    When they enter their job flexibility, office location, contract type, role level, minimum salary and company size 
    Then they should be able to click next 
    And be redirected to the My files & links page 
    
        Verify that a user is able to add files and links
        
    Scenario: User adds files and links
    Given a user is on the  My files and links page 
    When they upload their CV and add professional links
    Then they should be able to click preview
    And be redirected to the Preview page
    
    
    
    
    
    

