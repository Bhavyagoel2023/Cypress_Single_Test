const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // return {
      //   browsers: config.browsers.filter(
      //     (b) => b.family === 'chrome'
      //   ),
      // }
    },
    headless:false,
    defaultCommandTimeout:20000,
    screenshotOnRunFailure: true,
    videosFolder: '/videos',
    video:true
  },
});
