/// <reference types="cypress" />
import "cypress-real-events";
import "@4tw/cypress-drag-drop";

describe("Bootcamper Demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("test1", () => {
    cy.get("button").contains("Login").click();
    cy.wait(1500);
    cy.wait(1000);
    //Login Part
    cy.get("#username").type("emanuel@email.com");
    cy.get("#password").type("em4nuel!");
    cy.wait(1000);
    cy.get("form").contains("Continue").click();
    cy.get(".PinBoard_pinBoard__3Ba5f")
      .scrollIntoView({ duration: 1000 })
      .wait(1000);
    cy.get("button").contains("+").realHover().wait(1500);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("x").realHover().wait(1500);
    cy.get("button").contains("x").click().wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(5)").type("To believe in the heart of the cards!")
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
    cy.get("#username").type("christina@schoolofcode.co.uk");
    cy.get("#password").type("christin4!");
    cy.wait(1000);
    cy.get("form").contains("Continue").click();
    cy.get(".PinBoard_pinBoard__3Ba5f")
      .scrollIntoView({ duration: 1000 })
      .wait(1000);
    cy.get("button").contains("+").realHover().wait(1500);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("+").click().wait(1000);
    cy.get("button").contains("x").realHover().wait(1500);
    cy.get("button").contains("x").click().wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(6)")
      .contains("x")
      .click()
      .wait(1000);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(5)")
      .type("gotta catchem all!")
      .move({ deltaX: 300, deltaY: 0 })
      .wait(1500);
    cy.get(".PinBoard_pinBoard__3Ba5f>div:nth-child(4)")
      .move({ deltaX: -500, deltaY: 300 })
      .wait(1500);
    cy.get("h2")
      .contains("Today's energiser is:")
      .scrollIntoView({ duration: 500 })
      .wait(1000);
    cy.get(`button`).contains("Randomise").realHover().wait(1500);
    cy.get(`button`).contains("Randomise").click().wait(1000);
    cy.get(`button`).contains("Randomise").click().wait(1000);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get(`button`).contains("Randomise").click().wait(500);
    cy.get("p").contains("Yrral").scrollIntoView({ duration: 500 }).wait(1000);
    cy.get('a[href*="/energisers"]').click().wait(2000);
    cy.scrollTo("bottom", { duration: 1000 }).wait(1000);
    cy.get(`a`).contains("Gartic").realHover().wait(1000).click().wait(1000);
    cy.scrollTo("bottom", { duration: 1000 }).wait(1000);
    cy.get('a[href*="/cohorts"]').realHover().wait(1000).click().wait(500);
    cy.scrollTo("bottom", { duration: 2000 }).wait(1000);
    cy.get(`a`).contains("7").click().wait(1000);
    cy.get(`a[href="https://main.d3rc3gpot85iux.amplifyapp.com/student/122"]`)
      .scrollIntoView({ duration: 1000 })
      .wait(1500)
      .click();
    cy.get("button").contains("Log In").click().wait(1000);
    cy.get(`a[href="https://main.d3rc3gpot85iux.amplifyapp.com/student/122"]`)
      .contains("Cassandra")
      .click()
      .wait(7500);
    cy.go("back").go("back").go("back").wait(1000);
    cy.get("a").contains("Pairs").click().wait(1000);
    cy.get("button").contains("Next").click().wait(1500);
    cy.scrollTo("bottom", { duration: 2000 }).wait(500);
    cy.get('a[href*="/home"]').click().wait(1500);
  });
});
