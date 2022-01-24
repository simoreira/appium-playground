class BottomBar {
    async instructionsTab() {
        return await $('android=new UiSelector().resourceId(\"Instructions tab\")');
    }

    async dashboardTab() {
        return await $('android=new UiSelector().resourceId(\"Dashboard tab\")');
    }

    async settingsTab() {
        return await $('android=new UiSelector().resourceId(\"Settings tab\")');
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