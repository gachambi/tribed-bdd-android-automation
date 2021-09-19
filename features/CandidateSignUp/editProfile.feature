Feature: Edit profile tests

    Verify that a candidate can edit their profile

    Scenario: user edits their profile
    Given a user has signedup and selected build your profile button
    When the user enetrs their details
    Then the user should be able to edit their profile details