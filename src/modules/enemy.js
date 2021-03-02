import { mergeArray, pokeByName, randomArrayElement } from './utilities';
import ROUTES from './routes';

export default (starter, player, Poke) => {
    let active = starter;
    let combatLoop;

    const generator = (poke, level) => new Poke(
        poke,
        level,
        false,
        Math.random() < (1 / (1 << 5 << 8)),
    );

    const trainerPoke = (pokemonList) => {
        const selected = 0;
        combatLoop.trainerCurrentID = selected;
        const poke = pokeByName(pokemonList[selected][0]);
        return generator(poke, pokemonList[selected][1]);
    };

    const generateNew = (regionId, routeId) => {
        const regionData = ROUTES[regionId];
        const routeData = regionData[routeId];
        let pokemonList = [];
        if (routeData.fishing) {
            for (let i = player.unlocked.fishing; i > 0; i--) {
                if (routeData.pokes[i]) {
                    pokemonList = mergeArray(pokemonList, routeData.pokes[i]);
                }
            }
        } else {
            pokemonList = routeData.pokes;
        }
        if (regionData._global) {
            if (regionData._global.pokes && Math.random() < (1 / (1 << 8))) {
                pokemonList = mergeArray(pokemonList, regionData._global.pokes);
            }
            if (regionData._global.rarePokes && Math.random() < (1 / (1 << 14))) {
                pokemonList = mergeArray(pokemonList, regionData._global.rarePokes);
            }
            if (regionData._global.superRare && Math.random() < (1 / (1 << 16))) {
                pokemonList = mergeArray(pokemonList, regionData._global.superRare);
            }
        }
        const poke = pokeByName(randomArrayElement(pokemonList));
        const level = routeData.minLevel + Math.round((Math.random() * (routeData.maxLevel - routeData.minLevel)));
        return generator(poke, level);
    };

    return {
        activePoke: () => active,
        clear: () => active = null,
        trainerPoke: (pokemonList) => active = trainerPoke(pokemonList),
        generateNew: (regionId, routeId) => active = generateNew(regionId, routeId),
        attachCL: (_combatLoop) => combatLoop = _combatLoop,
    };
};
