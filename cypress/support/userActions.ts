declare namespace Cypress {
    interface Chainable {
        /**
         * @param username - take username as parameter
         * @param password - take password as parameter
         */
        login(username: string, password: string): Chainable<Element>;

        /**
         * @param name - take name as parameter
         * @param email - take email as parameter
         * @param subject - take subject as parameter
         * @param comment - take comment as parameter
         */
        submitFeedback(name: string, email: string, subject: string, comment: string): Chainable<Element>;
    }
}

Cypress.Commands.add('login', (username, password) => {
    cy.get('#user_login').type(username);
    cy.get('#user_password').type(password);
    cy.contains('Sign in').click();
});

Cypress.Commands.add('submitFeedback', (name, email, subject, comment) => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#subject').type(subject);
    cy.get('#comment').type(comment);
    cy.contains('Send Message').screenshot().click();
});