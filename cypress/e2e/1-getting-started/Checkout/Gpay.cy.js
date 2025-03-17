import 'cypress-iframe';
import 'cypress-real-events/support';

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

  it("add to cart and place order with GPay", () => {
    cy.wait(3000);
    cy.get("button").contains("Add to cart").should("be.visible").click();
    cy.visit("https://kwh-kitchenwarehouse.netlify.app/checkout");

    cy.get('input[type="email"]').first().type("test@example.com");
    cy.get("button").contains("Continue").click();
    cy.wait(4000);
    
    // Enter promo code
    cy.get('.rounded-lg > .cursor-pointer').click();
    cy.get('.mt-8 > :nth-child(2) > .min-w-0').type('absolute10');
    cy.get('.mt-8 > :nth-child(2) > .flex').click();
    cy.wait(2000);

    // Fill in shipping details
    cy.get('input[placeholder="First name"]').first().type("D");
    cy.get('input[placeholder="Last name"]').first().type("Nrushimha");
    cy.get('input[placeholder="e.g. 0400 000 000"]').first().type("0400000000");
    cy.get("div").contains("Enter your address manually").should("be.visible").click();
    cy.get('input[placeholder="Address"]').first().type("47 street");
    cy.get('input[placeholder="Suburb"]').first().type("Sydney");
    cy.get("select#state").select("QLD");
    cy.get('input[placeholder="Postcode"]').first().type("4000");
    cy.wait(2000);

    // Choose GPay as payment method
    cy.get('.google-pay_wrapper_updated > .justify-between > ._checkout_CustomRadio__cCjDs > ._checkout_mark__RLB7n').click();
    cy.wait(8000);

    // **Intercept the dispatchOrder API before clicking "Place Order"**
    cy.wait('@dispatchOrder').then((interception) => {
      cy.log('Dispatch Order Response:', interception.response);
      expect(interception.response.statusCode).to.eq(200, `API response: ${JSON.stringify(interception.response.body)}`);
    });
    cy.intercept('POST', '**/dispatchorder', (req) => {
      console.log('Dispatch Order Request:', req.body); // Logs request body
    }).as('dispatchOrder');
    
  });
});
