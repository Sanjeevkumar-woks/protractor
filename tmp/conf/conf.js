// An example configuration file.
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
    dest: '../target/screenshots',
    filename: '../my-report.html'
});
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/BankTest.js'],
    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },
    // Assign the test reporter to each running instance
    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: '../',
            filePrefix: 'xmlresults'
        }));
        var fs = require('fs-extra');
        fs.emptyDir('../screenshots/', function (err) {
            console.log(err);
        });
        jasmine.getEnv().addReporter({
            specDone: function (result) {
                if (result.status == 'failed') {
                    browser.getCapabilities().then(function (caps) {
                        var browserName = caps.get('browserName');
                        browser.takeScreenshot().then(function (png) {
                            var stream = fs.createWriteStream('../screenshots/' + browserName + '-' + result.fullName + '.png');
                            stream.write(new Buffer(png, 'base64'));
                            stream.end();
                        });
                    });
                }
            }
        });
        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: '../allure-results'
        }));
    },
    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },
    //HTMLReport called once tests are finished
    onComplete: function () {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');
            platform = caps.get('platform');
            var HTMLReport = require('protractor-html-reporter-2');
            testConfig = {
                reportTitle: 'Protractor Test Execution Report',
                outputPath: '../',
                outputFilename: 'ProtractorTestReport',
                screenshotPath: '../screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true,
                testPlatform: platform
            };
            new HTMLReport().from('../xmlresults.xml', testConfig);
        });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbmYvY29uZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFDakMsSUFBSSxzQkFBc0IsR0FBRyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUNoRixJQUFJLFFBQVEsR0FBRyxJQUFJLHNCQUFzQixDQUFDO0lBQ3hDLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsUUFBUSxFQUFFLG1CQUFtQjtDQUM5QixDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2YsYUFBYSxFQUFFLElBQUk7SUFFbkIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLGFBQWEsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsNENBQTRDO0lBQzVDLFNBQVMsRUFBRSxTQUFTO0lBRXBCLG1FQUFtRTtJQUNuRSx3QkFBd0I7SUFDeEIsS0FBSyxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFFL0IsbUNBQW1DO0lBQ25DLGVBQWUsRUFBRTtRQUNmLHNCQUFzQixFQUFFLEtBQUs7S0FDOUI7SUFDRCwwQ0FBMEM7SUFDMUMsWUFBWSxFQUFFO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU87WUFDbEMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsU0FBUyxFQUFFO1FBRVQsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsY0FBYyxFQUFFLElBQUk7WUFDcEIsUUFBUSxFQUFFLEtBQUs7WUFDZixVQUFVLEVBQUUsWUFBWTtTQUN6QixDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksRUFBRSxHQUFHLE9B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