import { createStore } from 'vuex';
import rootActions from './actions';
import rootMutations from './mutations';

import pokedex from './modules/pokedex';
import pokemon from './modules/pokemon';

const rootState = () => ({
    loading: false,
});

export default createStore({
    state: rootState(),
    actions: rootActions,
    mutations: rootMutations,

    modules: {
        pokedex,
        pokemon,
    },
});
