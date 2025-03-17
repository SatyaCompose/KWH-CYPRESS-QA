describe('Verfy the schema failing or passing for recipies', () => {
    beforeEach(() => {
        cy.visit('https://validator.schema.org/').viewport(2560, 1080)  
    });
    it('Verifying the recipies URLs', () => {

        cy.get('#new-test-url-input').type('https://kwh-kitchenwarehouse.netlify.app/blog/recipes/rich-gingerbread-bundt-cake')
        cy.get('#new-test-submit-button').click();
        cy.wait(8000);
        cy.screenshot('fullpage');
        
    })
  })