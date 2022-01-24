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
        return await this.button().click();
    }
}
export default new Alert();