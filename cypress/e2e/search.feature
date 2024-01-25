Feature: Search Engine Google, Bing and Yahoo Test

Scenario Outline: Perform a search on <SearchEngine> and assert the first returned item
    Given I open the "<SearchEngine>" search engine
    When I submit a search term "<SearchTerm>"
    Then I assert the first returned item as the "<ExpectedDescription>"
    Then I assert the first returned item's url has https
    Then I assert the first returned item's url as "<ExpectedUrl>"

Examples:
    | SearchEngine | SearchTerm                                 | ExpectedDescription                       | ExpectedUrl               |
    | Google       | Test automation with Cypress and Cucumber  | How to Run Tests with Cypress and Cucumber|https://www.browserstack.com/guide/how-to-run-cypress-cucumber-test|
    | Google       | what does && mean in java                  | Java Operator – &                         |https://www.freecodecamp.org/news/java-operator-and-or-logical-operators/|
    | Yahoo        | Test automation with Cypress and Cucumber  | How to Run Tests with Cypress and Cucumber|https://www.browserstack.com/guide/how-to-run-cypress-cucumber-test|
    | Yahoo        | 12345                                      | D Billions Kids Songs - YouTube           |https://www.youtube.com/watch?v=LRXDfJh9ZKc |
    | Bing         | Test automation with Cypress and Cucumber  | Cypress and Cucumber                      |https://www.browserstack.com/guide/how-to-run-cypress-cucumber-test|
    | Bing         | 12345                                      | D Billions Kids Songs                     |https://www.youtube.com/watch?v=LRXDfJh9ZKc |

Scenario Outline: Perform a search on <SearchEngine> and assert result returns an error message
    Given I open the "<SearchEngine>" search engine
    When I submit a search term "<SearchTerm>"
    Then I assert there are no results returned with an error message "<ErrorMessage>"

Examples:
    | SearchEngine | SearchTerm                                 | ErrorMessage                               |
    | Google       | freferfferferfrerferferferferferferferfer  | Make sure all words are spelled correctly. |