
Feature: My Deloitte Net Demo Test

@smokeTests
Scenario Outline: Go to talent on Demand ~ from My Deloitte Net
    Given I go to the site
    When I search for "<searchText>"
    Then I am navigated to 
Examples:
| searchText        |
| Talent On Demand  |

@smokeTests
Scenario: Navigate to talent on Demand ~ directly
    Given i go to talentonDemand
    #When i enter pin number
    #Then get remaining PTO
    #Then get remaining WellBeing Subsidy