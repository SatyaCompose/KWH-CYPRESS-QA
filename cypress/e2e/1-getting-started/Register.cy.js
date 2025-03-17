describe('Registering to KWH project', () => {
    it('Verifying that a new email able to reister in KWH website', () => {
      cy.visit('https://kwh-kitchenwarehouse.netlify.app/').viewport(2560, 1080)
      
      cy.get(".items-center.gap-2 > .group > button.rounded >")
      .trigger("mouseover")
      .should("be.visible");
    cy.wait(500);
    cy.get("button:nth-child(2) span:nth-child(1) span:nth-child(1)").click({
      force: true,
    })

    cy.get('.inputField').type('nrushimha12ff3@gmail.com')
    cy.get("button[type='submit']").click();
    cy.get('#password').type('Hn@123456')
    cy.get('#confirm_password').type('Hn@123456')
    cy.get("button[type='submit']").click();
  })

    it('Verifying that a registered email able to reister in KWH website', () => {
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
    })
  })