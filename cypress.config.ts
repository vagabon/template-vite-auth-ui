const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'ryc-app-front',
  ciBuildId: 'jenkins',
  e2e: {
    baseUrl: 'http://localhost:3005',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
