describe('demo test', () => {
    it('should login into an application', () => {
        cy.visitLoginPage();
        cy.waitForLoading(2);
        
        cy.fixture('loginData').then((data) => {
            cy.login(data.username, data.password);
        });
    });

    it('should submit feedback form', () => {
        cy.visitFeedbackPage();
        cy.waitForLoading(2);
        cy.submitFeedback('Ryan', 'test@email.com', 'My subject', 'This is my awesome comment');
    });
});