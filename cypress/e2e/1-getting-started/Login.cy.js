describe('Login in to KWH project', () => {
    it('Verifying that a existin email able to login in KWH website', () => {
      cy.visit('https://kwh-kitchenwarehouse.netlify.app/').viewport(2560, 1080)
      
      cy.get(".items-center.gap-2 > .group > button.rounded >")
      .trigger("mouseover")
      .should("be.visible");
    cy.wait(500);
    cy.get("button:nth-child(2) span:nth-child(1) span:nth-child(1)").click({
      force: true,
    })

    cy.get('.inputField').type('nrushimha@compose.co.in')
    cy.get("button[type='submit']").click();
    cy.get('#password').type('Devulapalli@123')
    cy.get("button[type='submit']").click();
  })

    it('Verifying that a unrigister email able to login in KWH website', () => {
        cy.visit('https://kwh-kitchenwarehouse.netlify.app/').viewport(2560, 1080)
      
        cy.get(".items-center.gap-2 > .group > button.rounded >")
        .trigger("mouseover")
        .should("be.visible");
      cy.wait(500);
      cy.get("button:nth-child(2) span:nth-child(1) span:nth-child(1)").click({
        force: true,
      })
  
      cy.get('.inputField').type('nrushimhacompose.co.in')
      cy.get("button[type='submit']").click()
      cy.get(".mt-2.text-sm.text-crRed").should('be.visible')
        .and('contain', 'Email is required');
      //cy.get('#password').type('Devulapalli@123')
      //cy.get("button[type='submit']").click()
    })

    it('Verifying that user able to login with valid email and icorrect password in KWH website', () => {
        cy.visit('https://kwh-kitchenwarehouse.netlify.app/').viewport(2560, 1080)
      
        cy.get(".items-center.gap-2 > .group > button.rounded >")
        .trigger("mouseover")
        .should("be.visible");
      cy.wait(500);
      cy.get("button:nth-child(2) span:nth-child(1) span:nth-child(1)").click({
        force: true,
      })
  
      cy.get('.inputField').type('nrushimha@compose.co.in')
      cy.get("button[type='submit']").click()
      cy.get('#password').type('Devulapalli123')
      cy.get("button[type='submit']").click()
      cy.get(".font-bold.leading-5.text-red-500").should('be.visible')
        .and('contain', 'The email or password you entered do not match. Please try again or reset your password.');
    })
  })