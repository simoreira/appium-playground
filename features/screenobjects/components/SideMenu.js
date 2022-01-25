class SideMenu {
    async sideMenu() {
        return await $('~sidemenu');

    }

    async button() {
        return await $('android=new UiSelector().resourceId(\"sidemenuButton\")')
    }

    async clickSidemenuButton() {
        const button = await this.button();
        await button.click();
    }
}

export default new SideMenu();