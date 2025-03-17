describe("visit kwh", () => {
  beforeEach(() => {
    cy.visit(
      "https://kwh-kitchenwarehouse.netlify.app/product/wolstead-steeltek-ultra-stainless-steel-frypan-with-helper-handle-30cm",
      {
        failOnStatusCode: false,
        headers: {
          accept: "application/json, text/plain, */*",
          "user-agent": "axios/0.27.2",
        },
      }
    );
  });

  it("Guest User with new Email", () => {
    cy.wait(3000);
    cy.get("button").contains("Add to cart").should("be.visible").click();
    cy.visit("https://kwh-kitchenwarehouse.netlify.app/checkout");
    cy.get('input[type="email"]').first().type("nrushimha@compose.co.in");
    cy.get("button").contains("Continue").click();
    cy.wait(2000);
    cy.get('#password').type('Devulapalli@123')
    cy.get("button").contains("Continue").click();
    cy.wait(2000);
    cy.reload();
    cy.wait(20000); 
    
    cy.get('.afterpay_wrapper_updated > .justify-between > ._checkout_CustomRadio__cCjDs > ._checkout_mark__RLB7n').click()  //paypal clicking option 

    cy.wait(2000);
    cy.get('.m-0').click(); //order place button 

    cy.wait(10000);

    cy.get('[data-testid="login-identity-input"]').clear().type('nitin@noodle.digital')

    cy.get('[data-testid="login-identity-button"]').click()

    cy.get('[data-testid="login-password-input"]').type('Welcome@123')
    cy.get('[data-testid="login-password-button"]').click()

    cy.wait(7000);

    cy.contains('Confirm').click()
cy.wait(15000);

cy.screenshot('fullpage');  
  });
});