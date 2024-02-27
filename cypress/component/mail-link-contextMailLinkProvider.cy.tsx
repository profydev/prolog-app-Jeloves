import React from "react";
import {
  MailLinkProvider,
  MailLinkContext,
} from "../../features/layout/sidebar-navigation/mail-link-context";

describe("<MailLinkProvider />", () => {
  it("mounts", () => {
    cy.mount(<MailLinkProvider />);
  });

  it("opens mail link with default values", () => {
    cy.window().then((window: Window) => {
      cy.stub(window, "open").as("openStub");

      const MailLinkConsumer = () => {
        const mailLinkContext = React.useContext(MailLinkContext);
        React.useEffect(() => {
          mailLinkContext.openMailLink();
        }, [mailLinkContext]);
        return null;
      };

      cy.mount(
        <MailLinkProvider>
          <MailLinkConsumer />
        </MailLinkProvider>,
      );

      const recipient: string = "support@prolog-app.com";
      const subject: string = "Support Request:";
      const mailToURL = encodeURI(`mailTo:${recipient}?subject=${subject}`);

      cy.get("@openStub").should("be.calledWithMatch", mailToURL);
    });
  });
});
