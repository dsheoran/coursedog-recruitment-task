export class HomePage{
    navigate(){
        cy.visit("https://damian-events.coursedog.com")
    }

    navigateToInvalidDateUrl(){
        cy.visit("https://damian-events.coursedog.com/221/11/200", {failOnStatusCode: false})
    }

    getTitle(){
        cy.title().should('eq', 'Upcoming Events: Dev\'s School Events Calendar')
    }

    homePageLink(){
        cy.get(`a[href="/"].no-underline`).click()
    }

    noEventMessage(){
        cy.get('#main-content .flex h1').should("contain.text", "No events today")
    }

    invalidDateMessage(){
        cy.get('#main-content .flex h1').should("contain.text", "Invalid date.")
    }

    eventCards(count){
        cy.get("div[role=group] .card").should("have.length", count)
    }

    qaTask(){
        cy.contains("QA Task Submission").click()
    }

    eventDetails() {
        cy.get("article#main-content div.flex.mt-2.mb-4 > button[type=\"button\"]").should("be.visible")
        cy.get("article#main-content a > button[type=\"button\"]").should("be.visible")
        cy.get("label").contains("Event Type").next().should("not.be.empty")
        cy.get("label").contains("Contacts").next().should("not.be.empty")
        cy.get("label").contains("Organized by").next().should("not.be.empty")
        cy.get("h3.text-theme-darker").contains("Event Description").should("be.visible")
    }

    searchText(){
        cy.get("form[role=search] > input").type("Tokyo")
    }

    searchButton(){
        cy.get("button[aria-label='Press to search']").click()
    }

    searchResult() {
        cy.get("#search-results a[aria-label^='Event name']")
            .should("have.length", 1)
            .should("contain.text", "Tokyo")
    }

    filterOrganization(){
        cy.get("#orgSelect").select("Model UN")
    }

    filterResult() {
        cy.get("#search-results a[aria-label^='Event name']").should("have.length", 3)
        cy.get("#search-results").contains("Organized by").each((el) => {
            expect(el.next().text()).contain("Model UN")
        })
    }

    selectDate(){
        cy.get(".vc-w-full .vc-day-content").contains(/^9$/)
        .click()
    }

    enterDate(date) {
        const dateObj = new Date(date)
        if(!dateObj.toString() == "Invalid Date") 
        
        cy.log(`Today is ${date}`)
        cy.clock(dateObj.valueOf())
    }

    clickTab(tabName) {
        cy.get(`a[href="/${tabName}"]`).click()
    }

    getEventName() {
        cy.get(".card-content.flex-col").should("contain.text", "Tokyo: Art and Photography")
    }
}