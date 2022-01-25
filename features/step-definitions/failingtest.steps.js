import { Given, When, Then } from '@wdio/cucumber-framework';
import BottomBar from '../screenobjects/components/BottomBar';
import DashboardScreen from '../screenobjects/Dashboard.screen';
import InstructionsScreen from '../screenobjects/Instructions.screen';

Given("I open the app and see the Instructions screen", async () => {
    await InstructionsScreen.waitForScreen();
})
When("I go to the Dashboard screen" , async () => {
    await BottomBar.clickDashboardTab();
    await DashboardScreen.waitForScreen();
});

// Test to be failing on purporse
Then("I should see the btc name", async () => {
    expect(await DashboardScreen.isBitcoinNameVisible()).toBe(false);
});