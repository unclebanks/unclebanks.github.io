import { POKEDEXFLAGS } from '../../modules/data';
import POKEDEX from '../../modules/db';

const MAX_POKEMON = POKEDEX.length;

const getPokemonId = (name) => POKEDEX.findIndex((p) => p.name === name) + 1;

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
                const id = getPokemonId(pokeName);
                state.data.push({ id, name: pokeName, flag: flag });
            }
        },

        loadData(state, list) {
            const dexEntries = list.map(({ name, flag }) => {
                const id = getPokemonId(name);
                return { id, name, flag };
            });

            state.data = dexEntries;
        },
    },

    getters: {
        dataWithUnseen(state) {
            const unseen = (id) => ({ id, name: POKEDEX[id - 1].name, flag: 0 });
            const fill = (fromId, toId) => Array(toId - fromId - 1)
                .fill(fromId).map((i, j) => unseen(i + j + 1));

            const list = state.data
                .sort((a, b) => a.id - b.id)
                .reduce((list, entry, i) => [
                    // What we have so far
                    ...list,
                    // Some ??? to fill in between
                    ...fill(list.length, entry.id),
                    // The next one to add
                    entry,
                ], []);

            const extra = Math.max(0, Math.min(5, MAX_POKEMON - list.length));

            return list.concat(fill(list.length, list.length + extra + 1));
        },
    },
};
