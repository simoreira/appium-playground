import BaseScreen from './Base.screen';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardScreen extends BaseScreen {
    constructor() {
        super("~dashboard");
    }
    async screen() {
        return await $('~dashboard');
    }

}

export default new DashboardScreen();
