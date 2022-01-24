import BaseScreen from './Base.screen';

class DashboardScreen extends BaseScreen {
    constructor() {
        super("~dashboard");
    }

    async screen() {
        return await $('~dashboard');
    }

    async title() {
        return await $('~dashboard-title');
    }

    async titleText() {
        const text = await this.title();
        return await text.getText();
    }

}

export default new DashboardScreen();
