// Because this file imports from  protractor, you'll need to have it as a
// project dependency. Please see the reference config: lib/config.ts for more
// information.
//
// Why you might want to create your config with typescript:
// Editors like Microsoft Visual Studio Code will have autocomplete and
// description hints.
//
// To run this example, first transpile it to javascript with `npm run tsc`,
// then run `protractor conf.js`.
import { Config } from 'protractor';


export let config: Config = {
  // set to "custom" instead of cucumber.
  framework: 'custom',

  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: ['../features/addUser.feature',
           '../features/editUser.feature',
           '../features/deleteUser.feature',
          '../features/listUsers.feature'],
  directConnect: true,

  cucumberOpts: {
    // require step definitions

    format: 'json:./testreport.json',

    require: [
      './stepDefinations/*.js' // accepts a glob

    ]
  },
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');

    var options = {
      theme: 'bootstrap',
      jsonFile: './testreport.json',
      output: './testreport.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      metadata: {
        "App Version": "3.4.4",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
      }
    };

    reporter.generate(options);
  },

  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};