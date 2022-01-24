import BaseScreen from './Base.screen';

class InstructionsScreen extends BaseScreen {
    constructor() {
        super("~instructions");
    }

    async screen() {
        return await $('~instructions');
    }

}

export default new InstructionsScreen();
