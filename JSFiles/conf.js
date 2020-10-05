"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An example configuration file
exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    seleniumAddress: 'http://192.168.1.8:4444/wd/hub',
    directConnect: false,
    // Capabilities to be passed to the webdriver instance.
    /*capabilities: {
      browserName: 'firefox'
    },*/
    multiCapabilities: [{
            browserName: 'firefox'
        }, {
            browserName: 'chrome'
        }, {
            browserName: 'MicrosoftEdge'
        }
    ],
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['testSpec1.js'],
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxnQ0FBZ0M7QUFDckIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsNENBQTRDO0lBQzVDLGtEQUFrRDtJQUNsRCxlQUFlLEVBQUUsZ0NBQWdDO0lBQ2pELGFBQWEsRUFBRSxLQUFLO0lBRXBCLHVEQUF1RDtJQUV2RDs7UUFFSTtJQUVKLGlCQUFpQixFQUFFLENBQUM7WUFDbEIsV0FBVyxFQUFFLFNBQVM7U0FDckIsRUFBRTtZQUNILFdBQVcsRUFBRSxRQUFRO1NBQ3BCLEVBQUU7WUFDRixXQUFXLEVBQUUsZUFBZTtTQUM1QjtLQUNGO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBRXZCLHdDQUF3QztJQUN4QyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNqQjtDQUNGLENBQUMifQ==