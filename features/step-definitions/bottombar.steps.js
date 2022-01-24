import { Given, When, Then } from '@wdio/cucumber-framework';
import BottomBar from '../screenobjects/components/BottomBar';
import DashboardScreen from '../screenobjects/Dashboard.screen';
import InstructionsScreen from '../screenobjects/Instructions.screen';
import SettingsScreen from '../screenobjects/Settings.screen';

Given("I am on the Instructions screen", async () => {
    await InstructionsScreen.waitForScreen();
});

When("I click on the Dashboard tile on the bottom bar", async () => {
    await BottomBar.waitDashboardTab();
    await BottomBar.clickDashboardTab();
});

Then("I should navigate to the Dashboard screen", async () => {
    expect(await DashboardScreen.screen()).toBeDisplayed();
    expect(await DashboardScreen.titleText()).toBe("100 coins");

});

Then("I should see the screen title \"100 coins\"", async () => {
  expect(await DashboardScreen.titleText()).toBe("100 coins");
})

Given("I am on the Dashboard screen", async () => {
    await DashboardScreen.waitForScreen();
});

When("I click on the Settings tile on the bottom bar", async () => {
    await BottomBar.waitSettingsTab();
    await BottomBar.clickSettingsTab();
});

Then("I should navigate to the Settings screen", async () => {
    expect(await SettingsScreen.screen()).toBeDisplayed();
});

Then("I should see the screen title \"Application Settings\"", async () => {
    expect(await SettingsScreen.titleText()).toBe("Application Settings");
})
