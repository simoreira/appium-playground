import getSelectorByPlatform from "../../helpers/getSelectorByPlatform";

const instructionsTabSelector = getSelectorByPlatform("Instructions tab");
const dashboardTabSelector = getSelectorByPlatform("Dashboard tab");
const settingsTabSelector = getSelectorByPlatform("Settings tab");

class BottomBar {
    async instructionsTab() {
        return await $(instructionsTabSelector);
    }

    async dashboardTab() {
        return await $(dashboardTabSelector);
    }

    async settingsTab() {
        return await $(settingsTabSelector);
    }

    async waitInstructionsTab() {
        const instructionsTab = await this.instructionsTab();
        await instructionsTab.waitForDisplayed({ timeout: 20000 });
    }

    async waitDashboardTab() {
        const dashboardTab = await this.dashboardTab();
        await dashboardTab.waitForDisplayed({ timeout: 20000 });
    }

    async waitSettingsTab() {
        const settingsTab = await this.settingsTab();
        await settingsTab.waitForDisplayed({ timeout: 20000 });
    }

    async clickInstructionsTab() {
        const instructionsTab = await this.instructionsTab();
        return await instructionsTab.click();
    }

    async clickDashboardTab() {
        const dashboardTab = await this.dashboardTab();
        return await dashboardTab.click();
    }

    async clickSettingsTab() {
        const settingsTab = await this.settingsTab();
        return await settingsTab.click();
    }
    
    
} 

export default new BottomBar();