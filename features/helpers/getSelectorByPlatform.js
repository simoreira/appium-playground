export default function getSelectorByPlatform(selector) {
    if (driver.isIOS) {
        return `~${selector}`
    }
    else {
        return `android=new UiSelector().resourceId(\"${selector}\")`
    }
}