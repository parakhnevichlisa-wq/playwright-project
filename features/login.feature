Feature: Login

  Scenario: Successful login
    Given user is on the login page
    When user enters username "standard_user" and password "secret_sauce"
    And user clicks the login button
    Then products page should be displayed