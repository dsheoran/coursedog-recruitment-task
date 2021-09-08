/**
 * Wait for reload page.
 * @param {number} timeLimitMs 
 */
export function waitForReload(timeLimitMs = 5000) {
    cy.get("#main-content section.page-leave-active", {timeout: timeLimitMs}).should("exist")
    cy.get("#main-content section.page-enter-to").should("not.exist")
    waitForFadingToEnd()
}

function waitForFadingToEnd() {
    cy.wait(500) // wait for fading to end. Needed for cypress failed screenshots
}

/**
 * Wait for url change to match pattern.
 * 
 * @param {RegExp} rgx Pattern of new navigation url
 */
export function waitForNavigation(rgx, timeout = 5000) {
    cy.location('href', { timeout }).should("match", rgx)
}