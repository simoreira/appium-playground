import { Given, When, Then } from '@wdio/cucumber-framework';
import Alert from '../screenobjects/components/Alert';
import BottomBar from '../screenobjects/components/BottomBar';
import SideMenu from '../screenobjects/components/SideMenu';
import DashboardScreen from '../screenobjects/Dashboard.screen';

import InstructionsScreen from '../screenobjects/Instructions.screen';
// import SecurePage from '../screenobjects/secure.page';

Given("I am on the instructions screen", async () => {
    await InstructionsScreen.waitForScreen();
});

When("I click on the dashboard tile on the bottom bar", async () => {
    // await BottomBar.waitDashboardTab();
    const dashBoardtab = await BottomBar.dashboardTab();
    console.log(dashBoardtab);
    // await dashBoardtab.waitForDisplayed();
    await dashBoardtab.click();
});

Then("I should navigate to the dashboard screen", async () => {
  await DashboardScreen.waitForScreen();
  // const screenSize = await driver.getWindowRect();
  await driver.performActions([
    {
        // 1. Create the event
        type: 'pointer',
        id: 'finger1',
        parameters: { pointerType: 'touch' },
        actions: [
            // 2. Move finger into start position where the element is
            //    Appium can automatically determine the location of the element instead
            //    of doing it ourselves
            { type: 'pointerMove', duration: 0, x: 0, y: 989 },
            // 3. Finger comes down into contact with screen
            { type: 'pointerDown', button: 0 },
            // 4. Pause for a little bit
            { type: 'pause', duration: 100 },
            // 5. Finger moves to the second element.
            //    Appium can automatically determine the location of the element instead
            //    of doing it ourselves
            { type: 'pointerMove', duration: 250, x: 540, y: 989},
            // 6. Finger lets up, off the screen
            { type: 'pointerUp', button: 0 },
        ],
    },
  ]);
  const sidemenu = await SideMenu.sideMenu();
  console.log(sidemenu)
  await sidemenu.waitForDisplayed();
  const sidemenuButton = await SideMenu.button();
  await sidemenuButton.click();
  const alert = await Alert.title();
  await alert.waitForDisplayed();
  const alertButton = await Alert.button();
  await alertButton.click();
  await DashboardScreen.waitForScreen();

});