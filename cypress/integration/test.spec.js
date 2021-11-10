/// <reference types="cypress" />

describe("test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test", () => {
    cy.pause()
    cy.get("button").contains("Login").click();
    cy.get("#username").type("emanuel@email.com");
    cy.get("#password").type("em4nuel!");
    cy.get("form").contains("Continue").click();
    cy.pause()
    cy.contains("Log out").click();
    cy.contains("Login").click();
    cy.get("#username").type("christina@schoolofcode.co.uk");
    cy.get("#password").type("christin4!");
    cy.get("form").contains("Continue").click();
    cy.pause()
    cy.contains("Log out").click();
  });
});
