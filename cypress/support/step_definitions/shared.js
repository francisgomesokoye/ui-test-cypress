import { formPage } from "../../pageobjects/formPage";

/*
assertions
*/
Then(`I should see title {string}`, (title) => {
    cy.title()
        .should('include', title)
})
Then(`I should see {string} text displayed`, (string) => {
    cy.contains(string)
        .invoke('show').should('be.visible');
})
Then('The header should contain {string}', (string) => {
    cy.get('h1')
        .should('contain', string)
})

Then('I should see {string} in p tag', (string) => {
    cy.get('p')
        .should('contain', string)
})
Then('The sub-header should contain {string}', (string) => {
    cy.get('h2')
        .should('contain', string)
})
Then('The header title should contain {string}', (string) => {
    cy.get('.header__title').invoke('text').then(function (text) {
        expect(text).to.include(string);
    })
})
Then(`I should not see {string}`, (string) => {
    cy.contains(string, { timeout: 0 })
        .should('not.be.visible');
})
Then('The current url should contain {string}', function (string) {
    cy.url()
        .should('contain', string)
});

Then('I should see a form displayed', function(){
    cy.get('input#hello-input.form-control').should('be.visible');
    cy.get('button#hello-submit.btn.btn-default').should('be.visible');
});

/**
* click action
*/
When('I click on {string}', (string) => {
    cy.contains(string)
    .click();
    cy.wait(1000)
});

When('I search for {string} using the form', (string) => {
    formPage.enterSearchText(string)
    formPage.clickGo()
});

Then('I press button {string}', (string) => {
    cy.contains(string)
        .click();
    cy.wait(1000);
});


// wait cmmds
Then('I wait for {string} secs', (string) => {
    cy.wait(string * 1000);
});

Then('I wait for few secs', () => {
    cy.wait(2000);
})