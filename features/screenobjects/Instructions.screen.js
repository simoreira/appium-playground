import BaseScreen from './Base.screen';
import getSelectorByPlatform from '../helpers/getSelectorByPlatform';

const instructionsScreenSelector = getSelectorByPlatform("instructions");

class InstructionsScreen extends BaseScreen {
    constructor() {
        super(instructionsScreenSelector);
    }

    async screen() {
        return await $(instructionsScreenSelector);
    }

}

export default new InstructionsScreen();
