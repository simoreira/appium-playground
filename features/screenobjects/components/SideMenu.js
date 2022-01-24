class SideMenu {
    async sideMenu() {
        return await $('~sidemenu');

    }

    async button() {
        return await $('android=new UiSelector().resourceId(\"sidemenuButton\")')
    }

    async clickSidemenuButton() {
        await this.button().click();
    }
}

export default new SideMenu();