const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jrenke',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress - report',
    embeddedScreenshots: true,
    html: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: true
});