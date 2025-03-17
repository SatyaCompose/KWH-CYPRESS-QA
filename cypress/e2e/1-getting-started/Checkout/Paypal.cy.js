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
  
    it("add to cart", () => {
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
      cy.get('.paypal_wrapper_updated > .justify-between > ._checkout_CustomRadio__cCjDs > ._checkout_mark__RLB7n').click()  //paypal clicking option
cy.wait(8000)

cy.get('iframe').first() // This will get the first iframe on the page
cy.get('iframe.your_specific_class')



      //cy.wait(10000);

      
      /*
        cy.wait(3000);
        cy.get('#email').type('sb-6u8wk15197846@personal.example.com');
        cy.get('#password').type('ZB/6f0]<');   */
      });
    });
  
  

