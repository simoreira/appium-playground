class Alert {
    async title() {
        return await $("id=android:id/alertTitle");
    }

    async message() {
        return await $("id=android:id/message");
    }

    async button() {
        return await $("id=android:id/button1");
    }

    async clickButton() {
        const button = await this.button();
        await button.click();
    }

    async isTitleVisible() {
        const title = await this.title();
        return await title.isDisplayed();
    }
}
export default new Alert();