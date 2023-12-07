import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // setup cypress-mochawesome-reporter here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});

