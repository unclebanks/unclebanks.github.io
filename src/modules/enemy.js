import { mergeArray, pokeByName, randomArrayElement } from './utilities';
import ROUTES from './routes';

export default (starter, player, Poke) => {
    let active = starter;
    let combatLoop;

    const generator = (poke, level) => new Poke(
        poke,
        level,
        false,
        Math.random() < (1 / (2 ** 13)),
    );

    const trainerPoke = (pokemonList) => {
        const selected = 0;
        combatLoop.trainerCurrentID = selected;
        const poke = pokeByName(pokemonList[selected][0]);
        return generator(poke, pokemonList[selected][1]);
    };

    const requirementMet = (req) => {
        switch (req.requirement.type) {
        case 'item':
            return player.unlocked[req.requirement.item];
        default:
            return false;
        }
    };

    const generateNew = (regionId, routeId) => {
        const regionData = ROUTES[regionId];
        const routeData = regionData[routeId];
        let pokemonList = [];
        pokemonList = routeData.pokes;
        if (regionData._global) {
            if (regionData._global.pokes && Math.random() < (1 / (2 ** 8))) {
                pokemonList = mergeArray(pokemonList, regionData._global.pokes);
            }
            if (regionData._global.rarePokes && Math.random() < (1 / (2 ** 14))) {
                pokemonList = mergeArray(pokemonList, regionData._global.rarePokes);
            }
            if (regionData._global.superRare && Math.random() < (1 / (2 ** 16))) {
                pokemonList = mergeArray(pokemonList, regionData._global.superRare);
            }
            if (regionData._special) {
                pokemonList = mergeArray(pokemonList, regionData._special.filter(requirementMet).flatMap((s) => s.pokemon));
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
