@AccountManagement
Feature: Account Management

  @CreateAccount
  Scenario Outline: Create an account with a valid email
    Given I am create an account page
    When  I enter "<Firstname>" "<Lastname>" "<Email>" "<Password>" "<ConfirmPassword>"
    And I click on create account
    Then Account creation is successful



    Examples:
      | Firstname | Lastname | Email           | Password | ConfirmPassword |
      | Mark      | Jackson  | mjack@gmail.com | Test-123 | Test-123        |
