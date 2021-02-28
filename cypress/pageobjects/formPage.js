

const inputField ='input#hello-input.form-control'
const goButton = 'button#hello-submit.btn.btn-default'

export const formPage = {

    enterSearchText(args) {
        cy.get(inputField)
          .clear()
          .type(args)
      },

    clickGo(){
        cy.get(goButton)
        .click()
    
    },
    
}