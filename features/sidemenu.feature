Feature: Sidemenu
  As a user, I want to access the sidemenu, to access the alert
  
Scenario: Open the sidemenu and accept the alert
    Given I open the app and am on the Instructions screen
    When I drag from the left edge of the screen to the right 
    Then I should see the sidemenu on the left
    And I click on the sidemenu button
    Then I should see an alert with a button
    And I click on the alert button
    Then The alert should disappear