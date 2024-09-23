const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',

    env: {
      'DEFAULT_USERNAME': 'admin@example.com',
      'DEFAULT_PASSWORD': 'password'
    },

    experimentalStudio: true,
    userAgent: 'Cypress Testing',
    downloadsFolder: 'tmp/downloads',
    screenshotsFolder: 'tmp/screenshots',
    videosFolder: 'tmp/videos'
  }
})
