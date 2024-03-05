import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Error Screen", () => {
  beforeEach(() => {
    // Intercept the failed API request
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      forceNetworkError: true,
    }).as("getProjectsFailure");

    cy.visit("http://localhost:3000/dashboard");

    cy.wait("@getProjectsFailure");
    cy.wait(7000);
  });

  it("renders the error screen", () => {
    cy.get('[data-testid="error-screen"]').should("be.visible");
  });

  it("renders correct alert logo and right-arrow logo", () => {
    cy.get('[data-testid="alert-icon"]').should("be.visible");
    cy.get('[data-testid="retry-icon"]').should("be.visible");
  });

  it("renders correct text", () => {
    cy.get('[data-testid="error-text"]')
      .should("be.visible")
      .contains("There was a problem while loading the project data");

    cy.get('[data-testid="retry-text"]')
      .should("be.visible")
      .contains("Try Again");
  });

  it("reloads data when retry button is clicked", () => {
    // Clicking the retry button
    cy.get('[data-testid="retry-button"]').should("be.visible").click();

    // Intercepting the successful API request
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delay: 2000,
    }).as("getProjects");

    cy.wait("@getProjects");

    const languageNames = ["React", "Node.js", "Python"];
    const statusTexts = new Map([
      ["error", "critical"],
      ["warning", "warning"],
      ["info", "stable"],
    ]);

    // get all project cards
    cy.get("main")
      .find("li")
      .each(($el, index) => {
        // check that project data is rendered
        cy.wrap($el).contains(mockProjects[index].name);
        cy.wrap($el).contains(languageNames[index]);
        cy.wrap($el).contains(mockProjects[index].numIssues);
        cy.wrap($el).contains(mockProjects[index].numEvents24h);
        cy.wrap($el).contains(
          capitalize(statusTexts.get(mockProjects[index].status)),
        );
        cy.wrap($el).find("a").should("have.attr", "href", "/dashboard/issues");
      });
  });
});
