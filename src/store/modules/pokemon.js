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

export default {
    namespaced: true,

    state: {
        party: [],
        storage: [],
        //
        activePokeID: 0,
        lastHeal: Date.now(),
    },

    mutations: {
        load(state, { party, storage }) {
            state.party = party;
            state.storage = storage;
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
                alert('You must have at least one active pokemon!');
            }
        },

        withdraw(state, storageIndex) {
            if (state.party.length < 6) {
                const poke = state.storage[storageIndex];
                state.storage.splice(storageIndex, 1);
                state.party.push(poke);
            } else {
                // dom.showPopup('You can only have six active pokemon!');
                alert('You can only have six active pokemon!');
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

        healAll(state) {
            state.party.forEach((poke) => poke.heal());
            state.storage.forEach((poke) => poke.heal());
            state.lastHeal = Date.now();
        },
    },

    getters: {
        // sortedStorage,
        // sortedParty,
        timeToHeal(state) {
            return Math.max(0, 30000 - (Date.now() - state.lastHeal));
        },

        all(state) {
            return [...state.party, ...state.storage];
        },

        active(state) {
            return state.party[state.activePokeID];
        },
    },
};
