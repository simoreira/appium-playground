import BaseScreen from './Base.screen';

class SettingsScreen extends BaseScreen {
    constructor() {
        super("~settings");
    }

    async screen() {
        return await $('~settings');
    }

    async title() {
        return await $('~settings-title')
    }

    async titleText() {
        const text = await this.title();
        return await text.getText();
    }

}

export default new SettingsScreen();
