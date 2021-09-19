Feature: Feature name

    Verify that on the user profile page there is a progress bar
    Scenario: user is updating their profile
    Given a user is on the create profile pages
    When a user completes a page and goes to the next
    Then the progressbar reflects their progress