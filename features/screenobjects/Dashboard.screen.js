import BaseScreen from './Base.screen';
import getSelectorByPlatform from '../helpers/getSelectorByPlatform';

const dashboardScreenSelector = getSelectorByPlatform("dashboard");
const titleSelector = getSelectorByPlatform("dashboard-title");
const btcNameSelector = getSelectorByPlatform("Coin-btc-name");

class DashboardScreen extends BaseScreen {
    constructor() {
        super(dashboardScreenSelector);
    }

    async screen() {
        return await $(dashboardScreenSelector);
    }

    async title() {
        return await $(titleSelector);
    }

    async bitcoinName() {
        return await $(btcNameSelector);
    }

    async titleText() {
        const text = await this.title();
        return await text.getText();
    }

    async isBitcoinNameVisible() {
        const btcName = await this.bitcoinName();
        const isDisplayed = btcName.isDisplayed();
        return isDisplayed;
    }

}

export default new DashboardScreen();
