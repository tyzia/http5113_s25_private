describe('Syntax Errors', () => {

    beforeEach(() => {
        cy.visit('/exercise/syntax_error_practice.html');
        Cypress.Screenshot.defaults({ screenshotOnRunFailure: false });
    });

    it('should have all syntax errors fixed', () => {
        cy.get('#result').should('have.css', 'display', 'block');
    });

});

describe('Runtime Errors', () => {

    beforeEach(() => {
        cy.visit('/exercise/runtime_error_practice.html');
        Cypress.Screenshot.defaults({ screenshotOnRunFailure: false });
    });

    it('should have all syntax errors fixed', () => {
        cy.get('#result').should('have.css', 'display', 'block');
    });
    it('should have tax solved', () => {
        cy.get('.tax-container').should('have.css', 'display', 'block');
    });
    it('should have background color for instruction', () => {
        cy.get('.instructions')
            .should('have.css', 'background-color')
            .and('equal', 'rgb(144, 238, 144)');
    });
});

describe('Logical Errors', () => {

    beforeEach(() => {
        cy.visit('/exercise/logical_error_practice.html');
        Cypress.Screenshot.defaults({ screenshotOnRunFailure: false });
    });

    it('should have all syntax errors fixed', () => {
        cy.get('#result').should('have.css', 'display', 'block');
    });

});