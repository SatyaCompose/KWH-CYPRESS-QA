const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        },
        
        chromeWebSecurity: false,
        defaultCommandTimeout: 20000,
        pageLoadTimeout: 60000,
        watchForFileChanges: false,
        experimentalModifyObstructiveThirdPartyCode: true,
        experimentalSessionAndOrigin: true

  },
});
