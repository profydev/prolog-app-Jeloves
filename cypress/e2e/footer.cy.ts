import { version } from "../../package.json";

describe("Footer", () => {
  beforeEach(() => {
    // open projects page
    cy.visit("http://localhost:3000/dashboard");
  });

  it("renders the footer", () => {
    cy.get("footer").should("be.visible");
  });

  it("renders the footer links correctly", () => {
    cy.get("footer")
      .find('[data-testid="footer-link"]')
      .each(($link, index) => {
        cy.wrap($link).should("be.visible");

        // Test for correct link text
        const linkTexts = ["Docs", "API", "Help", "Community"];
        cy.wrap($link).contains(linkTexts[index]);

        // Links to the correct url
        const linkURLs = ["#", "#", "#", "#"];
        cy.wrap($link).should(
          "have.attr",
          "href",
          "/dashboard" + linkURLs[index],
        );
      });
  });

  it("renders the correct footer logo", () => {
    cy.get("footer")
      .find('[data-testid="footer-logo"]')
      .should("be.visible")
      .should("have.attr", "src", "/icons/logo-small.svg");
  });

  it("renders the correct version number", () => {
    cy.get("footer")
      .find("p")
      .invoke("text")
      .then((text: string) => {
        expect(text).to.equal(`Version: ${version}`);
      });
  });
});
