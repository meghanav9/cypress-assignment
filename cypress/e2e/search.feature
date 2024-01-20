Feature: Search Engine Google/Bing Test

Scenario: Perform a search on Google and assert the first returned item
    Given I open the Google search engine
    When I submit a search term
    Then I assert the first returned item as the expected result

Scenario: Perform a search on Bing and assert the first returned item
    Given I open the Bing search engine
    When I submit a search term
    Then I assert the first returned item as the expected result