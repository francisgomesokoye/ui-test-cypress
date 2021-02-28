

const companyLogo = 'dh_logo'

export const homePage = {

    goToHomePage(){
        cy.visit('/')
    },

    companyLogoIsDisplayed(){
        cy.get(companyLogo)
        .invoke('text')
        .should('contain', "")

    }
}