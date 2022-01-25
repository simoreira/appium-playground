import getSelectorByPlatform from "../../helpers/getSelectorByPlatform";

const sidemenuSelector = getSelectorByPlatform("sidemenu");
const sidemenuButtonSelector = getSelectorByPlatform("sidemenuButton");

class SideMenu {
    async sideMenu() {
        return await $(sidemenuSelector);

    }

    async button() {
        return await $(sidemenuButtonSelector);
    }

    async clickSidemenuButton() {
        const button = await this.button();
        await button.click();
    }
}

export default new SideMenu();