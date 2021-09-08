Feature: Events  


  Scenario: Select a date from calendar to see events on that day
    Given I am at "Today's" page
    When I select "9th September" date from the calendar
    Then I see "3" events happening on "9th September"
  
  Scenario: Check for a date with no events
    Given that current date is "September 2nd, 2021"
    When I click on "Today’s Events"
    Then I see there are no events

  Scenario: Check for a date with an event 
    Given that current date is "November 20th, 2021"
    When I click on "Today’s Events"
    Then I see "1" event happening on that date  
    
  Scenario: Open Featured Events and event details
    Given I clicked on "Featured Events"
    And I see all "3" upcoming featured events
    When I click on the "QA Task Submission" event card
    Then I see details about the event

  Scenario: Search an Event
    Given I typed in "Tokyo" in the Search Input on navigation bar
    When I click search button
    Then I see "1" event matching the "Tokyo" phrase

  Scenario: Filter events by Organization
    Given I'm on the home page
    When I select the "Model UN" organization from the "Filter by Organization" dropdown
    Then I see "3" upcoming events matching "Model UN" organization

  Scenario: Check for an invalid date
    Given I'm on the home page
    When I nagivate to an invalid date url
    Then I see invalid date message
    And on clicking home page link it re-direct's to home page
    
  

  