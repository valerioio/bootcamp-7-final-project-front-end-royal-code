/// <reference types="cypress" />

describe("test1", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.get("button").contains("Login").click();
    cy.pause()
    cy.get("#username").type("bootcamper@schoolofcode.co.uk");
    cy.get("#password").type("bootc4mper!");
    cy.get("form").contains("Continue").click();
    cy.pause()
    cy.contains("Log out").click();
    cy.contains("Login").click();
    cy.get("#username").type("coach@schoolofcode.co.uk");
    cy.get("#password").type("co4ches!");
    cy.get("form").contains("Continue").click();
    cy.pause()
    cy.contains("Log out").click();
  });
});
