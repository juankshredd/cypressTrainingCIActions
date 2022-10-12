const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
        }
    },
  video: false,
  screenshotOnRunFailure: false,

  "defaultCommandTimeout": 20000,
  "responseTimeout": 20000,

  e2e: {
    setupNodeEvents(on, config) {
      config.chromeWebSecurity = false;
      return config;
    },
  },
});
