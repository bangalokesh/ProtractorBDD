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
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../Features/'],
    // Options to be passed to Jasmine-node.
    cucumberOpts: {
        tags: '@smokeTest',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDJDQUEyQztBQUMzQyxpRUFBbUQ7QUFHeEMsUUFBQSxNQUFNLEdBQVc7SUFDeEIsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELHVEQUF1RDtJQUV2RCxZQUFZLEVBQUU7UUFDWixXQUFXLEVBQUUsUUFBUTtLQUN0QjtJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztJQUV2Qix3Q0FBd0M7SUFDeEMsWUFBWSxFQUFFO1FBQ1YsSUFBSSxFQUFFLFlBQVk7UUFDbEIsTUFBTSxFQUFFLG9DQUFvQztRQUM1QywyQkFBMkI7UUFDM0IsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBQzNDO0tBQ0Y7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ2Qsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxLQUFLO1lBQ25CLG9CQUFvQixFQUFFLHdCQUF3QjtZQUM5QyxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFFBQVEsRUFBRTtnQkFDTixVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUNBLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFFNUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNkLFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLG9DQUFvQztZQUNoRCxvQkFBb0IsRUFBRSx3QkFBd0I7WUFDOUMsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFDO2dCQUNQLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxPQUFPLEVBQUUsSUFBSTtpQkFDaEI7Z0JBQ0QsTUFBTSxFQUFFLG9CQUFvQjtnQkFDNUIsUUFBUSxFQUFFO29CQUNOLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxJQUFJO2lCQUNoQjthQUNGO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUEifQ==