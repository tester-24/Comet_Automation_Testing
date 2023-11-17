const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'comet_project',
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'cypress - report',
    embeddedScreenshots: true,
    html: true,
    inlineAssets: true,
    saveAllAttempts: true,
    
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

});