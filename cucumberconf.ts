import {Config, browser} from 'protractor';
import * as reporter from 'cucumber-html-reporter';
import { Driver } from 'selenium-webdriver/ie';

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // Capabilities to be passed to the webdriver instance.
    
    
    capabilities: {
      browserName: 'chrome'
    },

    /*multiCapabilities: [{
      browserName: 'chrome'
      }, {
      browserName: 'firefox'
      }, {
       browserName: 'MicrosoftEdge'
      }
    ],*/

  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Features/'],
  
    // Options to be passed to Jasmine-node.
    cucumberOpts: {
        tags: '@hackathon',
        format: 'json:./Reports/cucumberreport.json',
        // require step definitions
        require: [
          './StepDefinitions/*.js' // accepts a glob
        ]
      },
      onPrepare: () => {
        browser.manage().timeouts().implicitlyWait(10000);
      },
      onComplete: () => {
        let options = {
          theme: 'bootstrap',
          jsonFile: './Reports/cucumberreport.json',
          output: './Reports/cucumberreport.html',
          reportSuiteAsScenarios: true,
          launchReport: false,
          screenshotsDirectory: './Reports/Screenshots/',
          storeScreenshots: true,
          metadata: {
              "Platform": "Windows 10",
              "Parallel": "Scenarios",
              "Executed": "Remote"
          }
      };
        reporter.generate(options);

        const report = require('multiple-cucumber-html-reporter');
 
      report.generate({
        jsonFile: './Reports/cucumberreport.json',
        jsonDir: './Reports/',
        reportPath: './Reports/multicucumberreport.html',
        screenshotsDirectory: './Reports/Screenshots/',
        launchReport: true,
        metadata:{
          browser: {
              name: 'chrome',
              version: '72'
          },
          device: 'Local test machine',
          platform: {
              name: 'Windows',
              version: '10'
          }
        }
      });
    }
  }
