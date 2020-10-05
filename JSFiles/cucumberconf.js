"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
        protractor_1.browser.manage().timeouts().implicitlyWait(10000);
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
            metadata: {
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyxpRUFBbUQ7QUFHeEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELHVEQUF1RDtJQUd2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVEOzs7Ozs7O1FBT0k7SUFHSix1RUFBdUU7SUFDdkUsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQyxLQUFLLEVBQUUsQ0FBQyxjQUFjLENBQUM7SUFFdkIsd0NBQXdDO0lBQ3hDLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxZQUFZO1FBQ2xCLE1BQU0sRUFBRSxvQ0FBb0M7UUFDNUMsMkJBQTJCO1FBQzNCLE9BQU8sRUFBRTtZQUNQLHdCQUF3QixDQUFDLGlCQUFpQjtTQUMzQztLQUNGO0lBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNkLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsS0FBSztZQUNuQixvQkFBb0IsRUFBRSx3QkFBd0I7WUFDOUMsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixRQUFRLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFDQSxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBRTVELE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDZCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLFVBQVUsRUFBRSxvQ0FBb0M7WUFDaEQsb0JBQW9CLEVBQUUsd0JBQXdCO1lBQzlDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBQztnQkFDUCxPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2dCQUNELE1BQU0sRUFBRSxvQkFBb0I7Z0JBQzVCLFFBQVEsRUFBRTtvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDRjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBIn0=