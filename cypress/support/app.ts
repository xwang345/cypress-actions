declare namespace Cypress {
    /**
     * Represents a chainable object that provides commands for interacting with the application.
     */
    interface Chainable {
        visitHomepage(): Chainable<Element>; // this is the name of the command, visitHomepage, that you will use in your tests
        visitLoginPage(): Chainable<Element>;// this is the name of the command, visitLoginPage, that you will use in your tests
        visitFeedbackPage(): Chainable<Element>;// this is the name of the command, visitFeedbackPage, that you will use in your tests
        /*
        * @param seconds - take seconds as parameter
        */
        waitForLoading(seconds: number): Chainable<Element>;// this is the name of the command, waitForLoading, that you will use in your tests
    }
}

Cypress.Commands.add('visitHomepage', () => {
    cy.visit('http://zero.webappsecurity.com/');
})

Cypress.Commands.add('visitLoginPage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

Cypress.Commands.add('visitFeedbackPage', () => {
    cy.visit('http://zero.webappsecurity.com/feedback.html');
});

Cypress.Commands.add('waitForLoading', (seconds) => {
    cy.wait(seconds * 1000);
});