const cucumber = require('cypress-cucumber-preprocessor').default;
const del = require('del');

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--start-fullscreen');

      return launchOptions;
    }

    if (browser.name === 'electron') {
      launchOptions.preferences.fullscreen = true;

      return launchOptions;
    }
  });
  on('after:spec', (spec, results) => {
    if (results.stats.failures === 0 && results.video) {
      // `del()` returns a promise, so it's important to return it to ensure
      // deleting the video is finished before moving on
      return del(results.video);
    }
  });
};
