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
  
    it("Guest User with new Email", () => {
      cy.wait(3000);
      cy.get("button").contains("Add to cart").should("be.visible").click();
      cy.visit("https://kwh-kitchenwarehouse.netlify.app/checkout");
      cy.get('input[type="email"]').first().type("test@example.com");
      cy.get("button").contains("Continue").click();
      cy.wait(2000);
      cy.get('input[placeholder="First name"]').first().type("D");
      cy.get('input[placeholder="Last name"]').first().type("Nrushimha");
      cy.get('input[placeholder="e.g. 0400 000 000"]').first().type("0400000000");
      cy.get("div")
        .contains("Enter your address manually")
        .should("be.visible")
        .click();
  
      cy.get('input[placeholder="Address"]').first().type("47 street");
      cy.get('input[placeholder="Suburb"]').first().type("Sydney");
      cy.get("select#state").select("QLD");
      cy.get('input[placeholder="Postcode"]').first().type("4000");
      cy.wait(2000);
  
      Cypress.Commands.add("getIframeBody", (iframeSelector) => {
        return cy
          .get(iframeSelector)
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap);
      });
      const enterTextInIframe = (iframeSelector, inputSelector, text) => {
        cy.get(iframeSelector)
          .should("be.visible")
          .then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find(inputSelector)
              .should("be.visible")
              .type(text, { force: true });
          });
      };
      cy.get('.afterpay_wrapper_updated > .justify-between > ._checkout_CustomRadio__cCjDs > ._checkout_mark__RLB7n').click()  //paypal clicking option

      cy.get('.m-0').click();

      cy.wait(6000);

      cy.get('[data-testid="back-link-container"]').click()

      cy.get('[data-testid="login-identity-input"]').clear().type('nitin@noodle.digital')

      cy.get('[data-testid="login-identity-button"]').click()

      cy.get('[data-testid="login-password-input"]').type('Welcome@123')
      cy.get('[data-testid="login-password-button"]').click()

      cy.wait(7000);

      cy.contains('Confirm').click()
cy.wait(15000);

cy.screenshot('fullpage');
    });
  

  it("Guest user with existed email", () => {

    cy.wait(3000);
      cy.get("button").contains("Add to cart").should("be.visible").click();
      cy.visit("https://kwh-kitchenwarehouse.netlify.app/checkout");
      cy.get('input[type="email"]').first().type("nrushimhadevulapalli@gmail.com");
      cy.get("button").contains("Continue").click();
      cy.wait(2000);
      cy.get('.border').click();
      cy.wait(2000);  
      cy.get('input[placeholder="First name"]').first().type("D");
      cy.get('input[placeholder="Last name"]').first().type("Nrushimha");
      cy.get('input[placeholder="e.g. 0400 000 000"]').first().type("0400000000");
      cy.get("div")
        .contains("Enter your address manually")
        .should("be.visible")
        .click();
  
      cy.get('input[placeholder="Address"]').first().type("47 street");
      cy.get('input[placeholder="Suburb"]').first().type("Sydney");
      cy.get("select#state").select("QLD");
      cy.get('input[placeholder="Postcode"]').first().type("4000");
      cy.wait(2000);
  
      Cypress.Commands.add("getIframeBody", (iframeSelector) => {
        return cy
          .get(iframeSelector)
          .its("0.contentDocument.body")
          .should("not.be.empty")
          .then(cy.wrap);
      });
      const enterTextInIframe = (iframeSelector, inputSelector, text) => {
        cy.get(iframeSelector)
          .should("be.visible")
          .then(($iframe) => {
            const $body = $iframe.contents().find("body");
            cy.wrap($body)
              .find(inputSelector)
              .should("be.visible")
              .type(text, { force: true });
          });
      };
      cy.get('.afterpay_wrapper_updated > .justify-between > ._checkout_CustomRadio__cCjDs > ._checkout_mark__RLB7n').click()  //paypal clicking option

      cy.get('.m-0').click();

      cy.wait(6000);

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
  