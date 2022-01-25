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

    async bitcoinButton() {
        return await $("~Coin-btc");
    }

    async isBitcoinButtonVisible() {
        const btcButton = await this.bitcoinButton();
        return await btcButton.isDisplayed();
    }

}

export default new DashboardScreen();
