const { config } = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "iOS",
        deviceName: "iPhone 11",
        platformVersion: "15.2",
        automationName: "XCUITest",
        app: "./apps/AwesomeApp.app",
        maxInstances: 1
    },
];

exports.config = config;