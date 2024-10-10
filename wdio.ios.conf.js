export const config = {
    // runner: 'local',
    // port: 4723,

    user: '<sauce-user>',
    key: '<sauce-key>',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'iOS',
            'appium:app': 'storage:filename=LojaEBAC.ipa', // The filename of the mobile app
            'appium:deviceName': 'iPhone 12',
            'appium:platformVersion': '17',
            'appium:automationName': 'XCUITest',
        }
    ],
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
    }
}
