Feature: Bottom bar validation

  Scenario Outline: As a user, I can navigate through the app via the bottom bar

    Given I am on the instructions screen
    When I click on the dashboard tile on the bottom bar
    Then I should navigate to the dashboard screen


