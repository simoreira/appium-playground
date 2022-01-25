Feature: Bottom bar navigation
  As a user, I want to navigate through the bottom bar, so I can access other app screens

Scenario: Go to the Dashboard screen
    Given I am on the Instructions screen
    When I click on the Dashboard tile on the bottom bar
    Then I should navigate to the Dashboard screen
    Then I should see the screen title "100 coins"
  
Scenario: Go to the Settings screen
    Given I am on the Dashboard screen
    When I click on the Settings tile on the bottom bar
    Then I should navigate to the Settings screen
    Then I should see the screen title "Application Settings"