/// <reference types="cypress" />

describe("test1", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.contains("Login").click();
    cy.get("#username").type("bootcamper@schoolofcode.co.uk");
    cy.get("#password").type("bootc4mper!");
    cy.get("form").contains("Continue").click();
    cy.contains("Log out").click();
  });
});
