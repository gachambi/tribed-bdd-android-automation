Feature: Candidate sign up

    Verify that a candidate is able to sign up

    Scenario: user enters wrong password
    Given a user is in signup page
    When a user enters the wrong email format
    Then The application should display and error for wrong email format with a guidance of the correct email format  

    Scenario: user enters wrong password
    Given a user is in signup page
    When a user enters the wrong password combination
    Then The application should display an error with a guidance on what is expected for the password

    Scenario: user enters correct signup details
    Given a user is in a signup page
    When a user should be able to enter the following information Full Name, Email Address ,Create password
    And the user clicks create account button  
    Then the candidate should be able to sign up