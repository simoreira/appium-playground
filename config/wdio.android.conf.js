const { config } = require("./wdio.conf");

config.capabilities = [
    {
        platformName: "Android",
        avd: "Pixel_5_API_30",
        automationName: "UIAutomator2",
        app: "./apps/AwesomeApp.apk",
        "settings[ignoreUnimportantViews]": true,
        maxInstances: 1
    },
];

exports.config = config;