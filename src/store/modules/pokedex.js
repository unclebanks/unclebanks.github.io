import { POKEDEXFLAGS } from '../../modules/data';
import POKEDEX from '../../modules/db';

export default {
    namespaced: true,

    state: {
        // contains objects in shape
        // { name: 'pokemon name', flag: 'some pokedex flag'}
        data: [],
    },

    mutations: {
        addData(state, { pokeName, flag }) {
            const dexEntry = state.data.find((entry) => entry.name === pokeName);
            if (typeof dexEntry === 'object') {
                if (dexEntry.flag < flag
                || (dexEntry.flag == POKEDEXFLAGS.ownShiny && flag == POKEDEXFLAGS.releasedShiny) // own can be released
                || (dexEntry.flag == POKEDEXFLAGS.ownNormal && flag == POKEDEXFLAGS.releasedNormal)
                || (dexEntry.flag == POKEDEXFLAGS.ownShiny && flag == POKEDEXFLAGS.ownedShiny) // own can be come owned
                || (dexEntry.flag == POKEDEXFLAGS.ownNormal && flag == POKEDEXFLAGS.ownedNormal)) {
                    if (dexEntry.flag !== flag) {
                        dexEntry.flag = flag;
                    }
                }
            } else {
                const id = POKEDEX.findIndex((p) => p.pokemon[0].Pokemon === pokeName) + 1;
                state.data.push({ id, name: pokeName, flag: flag });
            }
        },
    },

    getters: {
        dataWithUnseen(state) {
            const unseen = { name: '???', flag: 0 };
            return state.data
                .sort((a, b) => a.id - b.id)
                .reduce((list, entry) => [
                    ...list,
                    ...Array(entry.id - list.length - 1).fill(unseen),
                    entry,
                ], []);
        },
    },
};
