import { Given, When, Then } from '@wdio/cucumber-framework';
import Alert from '../screenobjects/components/Alert';
import SideMenu from '../screenobjects/components/SideMenu';
import InstructionsScreen from '../screenobjects/Instructions.screen';

Given("I open the app and am on the Instructions screen", async () => {
    await InstructionsScreen.waitForScreen();
});

When("I drag from the left edge of the screen to the right", async () => {
    const screenSize = await driver.getWindowRect();
    await driver.performActions([
        {
            type: 'pointer',
            id: 'finger',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 0, y: Math.ceil(screenSize.height/2)},
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 100 },
                { type: 'pointerMove', duration: 250, x: Math.ceil(screenSize.width/2), y: Math.ceil(screenSize.height/2)},
                { type: 'pointerUp', button: 0 },
            ],
        },
      ]);
});

Then("I should see the sidemenu on the left", async () => {
    expect(await SideMenu.sideMenu()).toBeDisplayed();
});

When("I click on the sidemenu button", async () => {
    await SideMenu.clickSidemenuButton();
})

Then("I should see an alert with a button", async () => {
    expect(await Alert.button()).toBeDisplayed();
})

When("I click on the alert button", async () => {
    await Alert.clickButton();
})

Then("The alert should disappear", async () => {
    expect(await Alert.isAlertVisible()).toBe(false);
})



