import getSelectorByPlatform from "../../helpers/getSelectorByPlatform";

class Alert {
    async alert() {
       return driver.isAndroid ? await $(getSelectorByPlatform("android:id/alertTitle")) : await $("-ios predicate string:type == \'XCUIElementTypeAlert\'");
    }

    async button() {
        return driver.isAndroid ? await $(getSelectorByPlatform("android:id/button1")) : await $("~Ok");
    }

    async clickButton() {
        const button = await this.button();
        await button.click();
    }

    async isAlertVisible() {
        const alert = await this.alert();
        const isDisplayed = await alert.isDisplayed();
        return isDisplayed;
    }
}
export default new Alert();