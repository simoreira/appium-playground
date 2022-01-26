const { config } = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "Android",
        avd: "Pixel_5_API_30",
        automationName: "UIAutomator2",
        app: "./apps/AwesomeApp.apk",
        "settings[ignoreUnimportantViews]": true, // make the tree cleaner and the tests faster
        maxInstances: 1
    },
];

exports.config = config;