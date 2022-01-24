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
        await this.instructionsTab().waitForDisplayed({ timeout: 20000 });
    }

    async waitDashboardTab() {
        await this.dashboardTab().waitForDisplayed({ timeout: 20000 });
    }

    async waitSettingsTab() {
        await this.settingsTab().waitForDisplayed({ timeout: 20000 });
    }

    async clickInstructionsTab() {
        await this.instructionsTab.click();
    }

    async clickDashboardTab() {
        await this.dashboardTab.click();
    }

    async clickSettingsTab() {
        await this.settingsTab.click();
    }
    
    
} 

export default new BottomBar();