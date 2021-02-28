Feature: Docler Login Test

    #REQ-UI-01, REQ-UI-03
    Scenario: can load main home page
        Given I open docler homepage
        Then I should see title "UI Testing Site"
    
    #REQ-UI-05, REQ-UI-08, REQ-UI-07, 
    Scenario Outline: can navigate to pages page
        Given I open docler homepage
        When I click on <Page>
        Then The current url should contain <Url>
        And I should see <Text> text displayed
        Examples:
            | Page            | Url              | Text                                         |
            | "Form"          | "/form.html"     |"Simple Form Submission"                      |
            | "Error"         | "/error"         | "404 Error: File not found :-("              |
            |"Welcome to the Docler Holding QA Department"|"duodecadits.com/"|"Welcome to the Docler Holding QA Department" |
            |"Home"           |"duodecadits.com/"|"This site is dedicated to perform some exercises and demonstrate automated web testing."|

    #REQ-UI-10
    Scenario: Text in p tag is visible
        Given I open docler homepage
        When I click on "Home"
        Then I should see "This site is dedicated to perform some exercises and demonstrate automated web testing." in p tag
        
    #REQ-UI-09
    Scenario: Text in h tag is visible
        Given I open docler homepage
        When I click on "Home"
        Then The header should contain "Welcome to the Docler Holding QA Department"
    
    #REQ-UI-11
    Scenario: can see input box and submit button on page
        Given I open docler homepage
        When I click on "Form"
        Then I should see a form displayed
    
    #REQ-UI-12
    Scenario Outline: can use search form
        Given I open docler homepage
        When I click on "Form"
        And I search for <SearchText> using the form
        And I should see <Text> text displayed
        Examples:
            | SearchText | Text           | 
            | "John"     | "Hello John!"  | 
            |"Sophia"    |"Hello Sophia!" |
            |"Charlie"   |"Hello Charlie!"|
            |"Emily"     |"Hello Emily!"  |  




