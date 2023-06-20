Feature: Gourav-GoingHome

Scenario: Gourav will not go home
    Given I have money to purchase train ticket
    When I not get train ticket
    Then It should not grant

Scenario: Gourav will go home
    Given I have money to purchase train ticket
    When I have got the train ticket
    Then It should grant