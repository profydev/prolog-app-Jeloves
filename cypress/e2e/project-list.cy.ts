import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
      delay: 2000,
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders and removes loading screen", () => {
      cy.get("main")
        .find('[data-testid="loading-icon"]')
        .should("have.attr", "src", "/icons/loading-circle.svg");

      cy.wait("@getProjects");
      cy.get("main").should("not.contain", '[data-testid="loading-icon"]');
    });

    it("renders the projects", () => {
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
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
