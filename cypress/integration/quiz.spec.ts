/// <reference types="cypress"/>

describe("Quiz", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://opentdb.com/api.php/**").as("fetchQuestions");
    cy.visit("http://localhost:3000");
  });

  it("begins quiz", () => {
    cy.get("button").contains("Begin").click();
    cy.wait("@fetchQuestions");
    cy.contains("Question 1/10");
  });

  it("moves to next quiz", () => {
    cy.get("button").contains("Begin").click();
    cy.wait("@fetchQuestions");
    cy.contains("Question 1/10");

    cy.get("button").contains("Next").click();
    cy.contains("Question 2/10");
  });

  it("displays results", () => {
    cy.get("button").contains("Begin").click();
    cy.wait("@fetchQuestions");
    for (let i = 1; i <= 10; i++) {
      cy.contains(`Question ${i}/10`);
      cy.contains("True").click();
      cy.get("button").contains("Next").click();
    }
    cy.contains("You scored");
    cy.contains("Go Home");
    cy.contains("Play Again");
  });

  it("plays again", () => {
    cy.get("button").contains("Begin").click();
    cy.wait("@fetchQuestions");
    for (let i = 1; i <= 10; i++) {
      cy.contains(`Question ${i}/10`);
      cy.get("button").contains("Next").click();
    }
    cy.contains("Play Again").click();
    cy.wait("@fetchQuestions");
    cy.contains("Question 1/10");
  });

  it("goes back to home page", () => {
    cy.get("button").contains("Begin").click();
    cy.wait("@fetchQuestions");
    for (let i = 1; i <= 10; i++) {
      cy.contains(`Question ${i}/10`);
      cy.get("button").contains("Next").click();
    }
    cy.contains("Go Home").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
