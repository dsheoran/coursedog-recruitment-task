import { Before, Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { HomePage } from '../../pages/home-Page';


const { waitForReload } = require("../../support/util")
const homePage = new HomePage

Before(() => {
    homePage.navigate()
})


Given('I am at "Today\'s" page', () => {
    homePage.clickTab("today")
})

When('I select "9th September" date from the calendar', () => {
    homePage.selectDate()
    waitForReload()
})

Then('I see "3" events happening on "9th September"', () => {
    homePage.eventCards(3)
})

Given('that current date is "September 2nd, 2021"', () => {
    homePage.enterDate("2021-09-02")
})

When('I click on "Today’s Events"', () => {
    homePage.clickTab("today")
})

Then('I see there are no events', () => {
    homePage.noEventMessage()
})

Given('I clicked on "Featured Events"', () => {
    homePage.clickTab("featured")
})

And('I see all "3" upcoming featured events', () => {
    homePage.eventCards(3)
})

When('I click on the "QA Task Submission" event card', () => {
    homePage.qaTask()
    waitForReload()
})

Then('I see details about the event', () => {
    homePage.eventDetails()
})

Given('that current date is "November 20th, 2021"', () => {
    homePage.enterDate("2021-11-20")
})

Then('I see "1" event happening on that date', () => {
    homePage.eventCards(1)
    homePage.getEventName()
})

Given('I typed in "Tokyo" in the Search Input on navigation bar', () => {
    homePage.searchText()
})

When('I click search button', () => {
    homePage.searchButton()
})

Then('I see "1" event matching the "Tokyo" phrase', () => {
    homePage.searchResult()
})

When('I select the "Model UN" organization from the "Filter by Organization" dropdown', () => {
    homePage.filterOrganization()
})

Then('I see "3" upcoming events matching "Model UN" organization', () => {
    homePage.filterResult()
})

Given('I\'m on the home page', () => {
    homePage.getTitle()
})

When('I nagivate to an invalid date url', () => {
    homePage.navigateToInvalidDateUrl()
})

Then('I see invalid date message', () => {
    homePage.invalidDateMessage()
})

And('on clicking home page link it re-direct\'s to home page', () => {
    homePage.homePageLink()
    homePage.getTitle()
})