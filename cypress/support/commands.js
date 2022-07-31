Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Hugo Leonardo')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type("hugoleo3129@gmail.com")
    cy.get('#open-text-area').type('Teste')
    cy.contains('button','Enviar').click()

})