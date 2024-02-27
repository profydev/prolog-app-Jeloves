// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount as mountComponent } from "cypress/react18";

// Export the mount function
export const mount = mountComponent;

// Example use:
// cy.mount(<MyComponent />)
