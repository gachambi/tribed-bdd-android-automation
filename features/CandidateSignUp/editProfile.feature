Feature: Edit profile 

    Verify that a candidate can edit their profile information

    Scenario: user edits their profile on preview
    Given a user has signedup and is on the preview page 
    When the user edits any of the details
    Then the changes should be reflected on preview
