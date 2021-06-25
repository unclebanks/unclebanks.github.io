import { pokedexMaps } from '../../modules/db';
import notify from '../../modules/notify';

const moveToFirst = (list, index) => [
    list[index],
    ...list.slice(0, index),
    ...list.slice(index + 1),
];

const moveDown = (list, index) => [
    ...list.slice(0, parseInt(index)),
    list[parseInt(index) + 1],
    list[parseInt(index)],
    ...list.slice(parseInt(index) + 2),
];

const moveUp = (list, index) => [
    ...list.slice(0, parseInt(index) - 1),
    list[parseInt(index)],
    list[parseInt(index) - 1],
    ...list.slice(parseInt(index) + 1),
];

const cmpFunctions = {
    lvl: (lhs, rhs) => lhs.level() - rhs.level(),
    dex: (lhs, rhs) => {
        const index = (p) => pokedexMaps.name[p.pokeName()];
        return index(lhs) - index(rhs);
    },
    vlv: (lhs, rhs) => lhs.level() - rhs.level() || lhs.avgAttack() - rhs.avgAttack(),
    time: (lhs, rhs) => lhs.caughtAt - rhs.caughtAt,
};

const inverseCmp = (cmpFunc) => (lhs, rhs) => -cmpFunc(lhs, rhs);

export default {
    namespaced: true,

    state: {
        party: [],
        //
        storage: [],
        pinnedStorage: new Set([]),
        pokeFarm: [],
        storageSortDirection: 'asc',
        storageSortMethod: 'dex',
        //
        activePokeID: 0,
        lastHeal: Date.now(),
    },

    mutations: {
        load(state, {
            party, storage, pinnedStorage, pokeFarm,
        }) {
            state.party = party;
            state.storage = storage;
            state.pokeFarm = pokeFarm;
            state.pinnedStorage = new Set(pinnedStorage);
        },

        add(state, poke) {
            if (state.party.length < 6) {
                state.party.push(poke);
            } else {
                state.storage.push(poke);
            }
        },

        remove(state, { from, index }) {
            if (from == 'roster') {
                if (index !== state.activePokeID) {
                    state.party.splice(index, 1);
                    if (index < state.activePokeID) {
                        state.activePokeID -= 1;
                    }
                }
            } else {
                state.storage.splice(index, 1);
            }
        },

        deposit(state, partyIndex) {
            if (state.party.length > 1) {
                const poke = state.party[partyIndex];
                state.party.splice(partyIndex, 1);
                state.storage.push(poke);
            } else {
                // dom.showPopup('You must have at least one active pokemon!');
                notify('You must have at least one active pokemon!');
            }
        },

        withdraw(state, storageIndex) {
            if (state.party.length < 6) {
                const poke = state.storage[storageIndex];
                state.storage.splice(storageIndex, 1);
                state.party.push(poke);
            } else {
                // dom.showPopup('You can only have six active pokemon!');
                notify('You can only have six active pokemon!');
            }
        },

        depositPokeFarm(state, partyIndex) {
            if (state.party.length > 1) {
                const poke = state.party[partyIndex];
                state.party.splice(partyIndex, 1);
                state.pokeFarm.push(poke);
            } else {
                // dom.showPopup('You must have at least one active pokemon!');
                notify('You must have at least one active pokemon!');
            }
        },

        withdrawPokeFarm(state, pokeFarmIndex) {
            if (state.party.length < 6) {
                const poke = state.pokeFarm[pokeFarmIndex];
                state.pokeFarm.splice(pokeFarmIndex, 1);
                state.party.push(poke);
            } else {
                // dom.showPopup('You can only have six active pokemon!');
                notify('You can only have six active pokemon!');
            }
        },

        moveToFirst(state, { pokemonIndex, from = 'roster' }) {
            if (from === 'roster') {
                state.party = moveToFirst(state.party, pokemonIndex);
            } else {
                state.storage = moveToFirst(state.storage, pokemonIndex);
            }
        },

        moveDown(state, { pokemonIndex, from = 'roster' }) {
            const pokeList = (from === 'roster') ? state.party : state.storage;

            if (pokeList.length >= pokemonIndex) {
                const newPokemonList = moveDown(pokeList, pokemonIndex);

                if (from === 'roster') {
                    state.party = newPokemonList;
                } else {
                    state.storage = newPokemonList;
                }
            }
        },

        moveUp(state, { pokemonIndex, from = 'roster' }) {
            const pokeList = (from === 'roster') ? state.party : state.storage;

            if (pokemonIndex > 0) {
                const newPokemonList = moveUp(pokeList, pokemonIndex);

                if (from === 'roster') {
                    state.party = newPokemonList;
                } else {
                    state.storage = newPokemonList;
                }
            }
        },

        pinStorage(state, poke) {
            state.pinnedStorage.add(poke.pokeName());
        },

        unpinStorage(state, poke) {
            state.pinnedStorage.delete(poke.pokeName());
        },

        healAll(state) {
            state.party.forEach((poke) => poke.heal());
            state.storage.forEach((poke) => poke.heal());
            state.pokeFarm.forEach((poke) => poke.heal());
            state.lastHeal = Date.now();
        },
    },

    getters: {
        sortedStorage(state) {
            let cmpFunc = cmpFunctions[state.storageSortMethod];
            if (state.storageSortDirection === 'desc') {
                cmpFunc = inverseCmp(cmpFunc);
            }

            const pinned = (poke) => state.pinnedStorage.has(poke.pokeName());
            const pinCheck = (a, b) => Number(pinned(b)) - Number(pinned(a));

            return state.storage.sort((a, b) => pinCheck(a, b) || cmpFunc(a, b));
        },

        isPinned(state) {
            return (poke) => state.pinnedStorage.has(poke.pokeName());
        },

        // sortedParty,
        timeToHeal(state) {
            return Math.max(0, 30000 - (Date.now() - state.lastHeal));
        },

        all(state) {
            return [...state.party, ...state.storage, ...state.pokeFarm];
        },

        active(state) {
            return state.party[state.activePokeID];
        },
    },
};
