import React from "react";

type MailLinkContextProviderProps = {
  openMailLink?: () => void;
  children?: React.ReactNode;
};

const defaultContext = {
  openMailLink: (
    recipient: string = "support@prolog-app.com",
    subject: string = "Support Request:",
  ) => {
    const mailToURL = encodeURI(`mailTo:${recipient}?subject=${subject}`);
    window.open(mailToURL, "_blank");
  },
};

export const MailLinkContext = React.createContext(defaultContext);

export function MailLinkProvider({
  openMailLink,
  children,
}: MailLinkContextProviderProps) {
  return (
    <MailLinkContext.Provider
      value={{ openMailLink: openMailLink || defaultContext.openMailLink }}
    >
      {children}
    </MailLinkContext.Provider>
  );
}
