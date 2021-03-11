import { createStore } from 'vuex';
import rootActions from './actions';
import rootMutations from './mutations';

import pokedex from './modules/pokedex';
import pokemon from './modules/pokemon';

const rootState = () => {};

export default createStore({
    rootState,
    rootActions,
    rootMutations,

    modules: {
        pokedex,
        pokemon,
    },
});
