describe('Paths', () => {

    beforeEach(() => {
        cy.visit('/exercise/index.html');
        Cypress.Screenshot.defaults({ screenshotOnRunFailure: false });
    });

    it('should check the correct answer for Question 1 (Path to students.html inside humber folder)', () => {
        cy.get('#q1-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/college/humber/students.html');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 2 (Resolved path of ./../assets/js/script.js)', () => {
        cy.get('#q2-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/var/home/user/assets/js/script.js');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 3 (Resolved path of ../../../hi.txt from /home/user/docs/)', () => {
        cy.get('#q3-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/hi.txt');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 4 (Resolved path of ../../home/user/docs/hi.txt)', () => {
        cy.get('#q4-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/home/home/user/docs/hi.txt');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 5 (Resolved path of ../../home/../user/docs/hi.txt)', () => {
        cy.get('#q5-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/home/user/docs/hi.txt');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 6 (Resolved path of ../../home/../var/hi.txt)', () => {
        cy.get('#q6-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/home/var/hi.txt');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 7 (Resolved path of ../../home/var/hi.txt)', () => {
        cy.get('#q7-answer').invoke('text').then((text) => {
            try {
                const cleanedText = text.replace(/['"]/g, '').trim();
                assert.equal(cleanedText, '/home/home/var/hi.txt');
            } catch (error) {
                throw new Error('');
            }
        });
    });

    it('should check the correct answer for Question 8 (implicit relative path to logo.png in index.html)', () => {
        cy.get('#q8-answer img').should('have.attr', 'src').and('include', '../assets/images/icons/logo.png');
    });

    it('should check the correct answer for Question 8 (implicit relative path to app.js in index.html)', () => {
        cy.get('#q8-answer script').should('have.attr', 'src').and('include', '../scripts/js/app.js');
    });

    it('should check the correct answer for Question 8 (explicit relative path to style.css in home.html)', () => {
        cy.get('#q8-answer link').should('have.attr', 'href').and('include', './assets/styles/style.css');
    });

    it('should check the correct answer for Question 8 (explicit relative path to index.html in home.html)', () => {
        cy.get('#q8-answer a').should('have.attr', 'href').and('include', './templates/index.html');
    });

});
