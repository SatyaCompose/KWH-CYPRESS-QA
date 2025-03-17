///<reference types="cypress" />
const neatCSV = require("neat-csv");

describe("Create a New Manufacturer", () => {

    beforeEach(() => {
      cy.fixture("manufacturer").as("manufacturerData"); // Load fixture data
      
      cy.visit('http://ramanasoft123-001-site1.anytempurl.com/',{
        auth: {
            username: '11211719',
            password: '60-dayfreetrial',
        }
    })
   
})
it('To Test the  Login  with studio commands',()=>{
    cy.log("in this test we can record cypress studio commands ")

    cy.get('.ico-login').click();

cy.get('.new-wrapper > .buttons > .button-1')

    });
  });