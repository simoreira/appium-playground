/**
* main page object containing all methods, selectors and functionality
* that is shared across all screen objects
*/
export default class BaseScreen {

    constructor(screenSelector) {
        this.screenSelector = screenSelector;
    }
    
    async waitForScreen() {
        const sel = await $(this.screenSelector);
        const isReady = await sel.waitForDisplayed({ timeout: 20000 });
        return isReady;
    }
}
    
