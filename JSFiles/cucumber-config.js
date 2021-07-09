var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/addUser.feature',
        '../features/editUser.feature',
        '../features/deleteUser.feature',
        '../features/listUsers.feature'
        ],
    directConnect: true,
    cucumberOpts: {
        // require step definitions
        format: 'json:./testreport.json',
        require: [
            './stepDefinations/*.js' // accepts a glob
        ]
    },

    // onPrepare: () => {
    //     jasmine.getEnv().addReporter(new SpecReporter({
    //         displayFailuresSummary: false,
    //         displayFailedSpec: true,
    //         displaySuiteNumber: true,
    //         displaySpecDuration: true
    //     }));
    // },

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXItY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXItY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQWFXLFFBQUEsTUFBTSxHQUFXO0lBQzFCLHVDQUF1QztJQUN2QyxTQUFTLEVBQUUsUUFBUTtJQUVuQiwyQ0FBMkM7SUFDM0MsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsNkJBQTZCO1FBQzdCLDhCQUE4QjtRQUM5QixnQ0FBZ0M7UUFDaEMsK0JBQStCLENBQUM7SUFDeEMsYUFBYSxFQUFFLElBQUk7SUFFbkIsWUFBWSxFQUFFO1FBQ1osMkJBQTJCO1FBRTNCLE1BQU0sRUFBRSx3QkFBd0I7UUFFaEMsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBRTNDO0tBQ0Y7SUFDRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFakQsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDUixhQUFhLEVBQUUsT0FBTztnQkFDdEIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUNyQjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxtREFBbUQ7SUFFbkQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtDQUNoQixDQUFDIn0=