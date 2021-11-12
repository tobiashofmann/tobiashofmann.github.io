exports.config = {
    profile: 'integration',

    baseUrl: 'http://localhost:8080/',

    browsers: [{
        browserName: 'chrome'
    }],

    reporters: [{
        name: './reporter/junitReporter',
        reportName: 'target/report/myReport.xml',
        prefix: 'mySuitePrefix',
        postfix: 'mySuitePostfix'
    },
    {
        name: './reporter/jsonReporter',
        reportName: 'target/report/myReport.json'
    },
    {
        name: './reporter/htmlReporter',
        reportName: 'target/report/myReport.html',
        templateName: 'myTemplate.tpl.html'
    },
    {
        name: './reporter/screenshotReporter'
    }],
    
    takeScreenshot: {
        onExpectFailure: true,
        onExpectSuccess: false,
        onAction: false
      }
      
};
