/// <reference types="cypress" />
import "cypress-real-events";
import '@4tw/cypress-drag-drop'
// describe("test1", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });
//   it("test1", () => {
//     cy.get("button").contains("Login").click();
//     cy.get("#username").type("bootcamper@schoolofcode.co.uk");
//     cy.get("#password").type("bootc4mper!");
//     cy.get("form").contains("Continue").click();
//     cy.contains("Log out").click();
//     cy.contains("Login").click();
//     cy.get("#username").type("coach@schoolofcode.co.uk");
//     cy.get("#password").type("co4ches!");
//     cy.get("form").contains("Continue").click();
//     cy.contains("Log out").click();
//   });
// });

describe("Log in ", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.get("button").contains("Login").click();
    cy.wait(1500);
    cy.wait(1000);
    //  cy.get("#username").type("emanuel@email.com");
    //  cy.get("#password").type("em4nuel!");
    //  cy.wait(1000);
    //  cy.get("form").contains("Continue").click();
    cy.get("button").contains("+").realHover().wait(1500);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("x").realHover().wait(1500);
    cy.get("button").contains("x").click().wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(5)").move({ deltaX: 100, deltaY: -1000 }).wait(1500);
    cy.scrollTo('bottom').wait(1500);
  });
});
