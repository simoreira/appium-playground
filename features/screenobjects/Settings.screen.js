import BaseScreen from './Base.screen';
import getSelectorByPlatform from '../helpers/getSelectorByPlatform';

const settingsScreenSelector = getSelectorByPlatform("settings");
const titleSelector = getSelectorByPlatform("settings-title");

class SettingsScreen extends BaseScreen {
    constructor() {
        super(settingsScreenSelector);
    }

    async screen() {
        return await $(settingsScreenSelector);
    }

    async title() {
        return await $(titleSelector);
    }

    async titleText() {
        const text = await this.title();
        return await text.getText();
    }

}

export default new SettingsScreen();
