/// <reference types="cypress" />
import "cypress-real-events";
import "@4tw/cypress-drag-drop";
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

describe("Bootcamper Demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.get("button").contains("Login").click();
    cy.wait(1500);
    cy.wait(1000);
    //Login Part
    //  cy.get("#username").type("emanuel@email.com");
    //  cy.get("#password").type("em4nuel!");
    //  cy.wait(1000);
    //  cy.get("form").contains("Continue").click();
    cy.get(".PinBoard_pinBoard__3Ba5f")
      .scrollIntoView({ duration: 1000 })
      .wait(1000);
    cy.get("button").contains("+").realHover().wait(1500);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("x").realHover().wait(1500);
    cy.get("button").contains("x").click().wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(5)")
      .move({ deltaX: 100, deltaY: -700 })
      .wait(1500);
    cy.get("p").contains("Yrral").scrollIntoView({ duration: 2000 }).wait(1000);
    cy.get('a[href*="/journey"]').realHover().wait(1500).click().wait(1500);
    cy.get(`span[class="chakra-switch__thumb css-7roig"]`).click().wait(2000);
    cy.get(`span[class="chakra-switch__thumb css-7roig"]`).click().wait(1000);
    cy.scrollTo("bottom", { duration: 2000 }).wait(1000);
    cy.get('a[href*="/reading-list"]').realHover().wait(1000).click().wait(500);
    cy.scrollTo("bottom", { duration: 2000 }).wait(1000);
    cy.get('a[href*="/lecture-recordings"]')
      .realHover()
      .wait(1000)
      .click()
      .wait(500);
    cy.scrollTo("bottom", { duration: 2000 }).wait(1000);
    cy.get(`button[class="LogoutButton_logout__3XION"]`).click();
  });
});

describe("Coach Demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.get("button").contains("Login").click();
    cy.wait(1500);
    cy.wait(1000);
    //Login part
    //  cy.get("#username").type("christina@schoolofcode.co.uk");
    //  cy.get("#password").type("christin4!");
    //  cy.wait(1000);
    //  cy.get("form").contains("Continue").click();
    cy.get(".PinBoard_pinBoard__3Ba5f")
      .scrollIntoView({ duration: 1000 })
      .wait(1000);
    cy.get("button").contains("+").realHover().wait(1500);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("x").realHover().wait(1500);
    cy.get("button").contains("x").click().wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(5)")
      .move({ deltaX: 100, deltaY: -700 })
      .wait(1500);
    cy.get("h2")
      .contains("Today's energiser is:")
      .scrollIntoView({ duration: 500 })
      .wait(1000);
    cy.get(`button`).contains("Randomise").click().wait(1500);
    cy.get(`button`).contains("Randomise").click().wait(1000);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get("p").contains("Yrral").scrollIntoView({ duration: 500 }).wait(1000);
    cy.get('a[href*="/energisers"]').click().wait(1500);
    cy.scrollTo("bottom", { duration: 1000 }).wait(1000);
    cy.get(`a`).contains("Gartic").realHover().wait(1000).click().wait(1000);
    cy.scrollTo("bottom", { duration: 1000 }).wait(1000);
    cy.get('a[href*="/cohorts"]').realHover().wait(1000).click().wait(500);
    cy.scrollTo("bottom", { duration: 2000 }).wait(1000);
    cy.get(`a`).contains("7").click();
    cy.get(`button[class="LogoutButton_logout__3XION"]`).click();
  });
});
