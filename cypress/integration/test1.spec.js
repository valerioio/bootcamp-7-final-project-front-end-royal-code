/// <reference types="cypress" />

describe("test1", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.contains("Login").click();
    cy.get("#username");
    cy.get("#password");
  });
});
