import getSelectorByPlatform from "../../helpers/getSelectorByPlatform";

const titleSelector = getSelectorByPlatform("android:id/alertTitle");
const messageSelector = getSelectorByPlatform("android:id/message");
const buttonSelector = getSelectorByPlatform("android:id/button1");

class Alert {
    async title() {
        return await $(titleSelector);
    }

    async message() {
        return await $(messageSelector);
    }

    async button() {
        return await $(buttonSelector);
    }

    async clickButton() {
        const button = await this.button();
        await button.click();
    }

    async isTitleVisible() {
        const title = await this.title();
        const isDisplayed = await title.isDisplayed();
        return isDisplayed;
    }
}
export default new Alert();