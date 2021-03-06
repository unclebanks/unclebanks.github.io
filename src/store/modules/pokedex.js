import { POKEDEXFLAGS } from '../../modules/data';
import POKEDEX from '../../modules/db';

const MAX_POKEMON = POKEDEX.length;

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

            const list = state.data
                .sort((a, b) => a.id - b.id)
                .reduce((list, entry) => [
                    // What we have so far
                    ...list,
                    // Some ??? to fill in between
                    ...Array(entry.id - list.length - 1).fill(unseen),
                    // The next one to add
                    entry,
                ], []);

            const extra = Math.max(0, Math.min(5, MAX_POKEMON - list.length));

            return list.concat(Array(extra).fill(unseen));
        },
    },
};
