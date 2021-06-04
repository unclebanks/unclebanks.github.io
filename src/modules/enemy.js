// eslint-disable-next-line object-curly-newline
import { mergeArray, pokeByName, randomArrayElement, requirementMetGenerator } from './utilities';
import ROUTES from './routes';

export default (starter, player, Poke) => {
    let active = starter;
    let combatLoop;

    const generator = (poke, level, prestigeLevel) => new Poke(
        poke,
        level,
        false,
        Math.random() < (1 / (2 ** 13)),
        false,
        prestigeLevel,
    );

    const profPoke = (pokemonList) => {
        const selected = 0;
        combatLoop.profCurrentID = selected;
        const poke = pokeByName(pokemonList[selected][0]);
        return generator(poke, pokemonList[selected][1]);
    };
    const gymLeaderPoke = (pokemonList) => {
        const selected = 0;
        combatLoop.gymLeaderCurrentID = selected;
        const poke = pokeByName(pokemonList[selected][0]);
        return generator(poke, pokemonList[selected][1]);
    };
    const npcPoke = (pokemonList) => {
        const selected = 0;
        combatLoop.npcCurrentID = selected;
        const poke = pokeByName(pokemonList[selected][0]);
        return generator(poke, pokemonList[selected][1]);
    };

    const requirementMet = requirementMetGenerator(player);

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
        }
        if (routeData._special) {
            pokemonList = mergeArray(pokemonList, routeData._special.filter(requirementMet).flatMap((s) => s.pokemon));
        }
        const boostedRoamer = player.routeGetBoostedRoamer(regionId, routeId, false);
        let pokeSpecies = false;
        let level = 1;
        let prestigeLevel = 0;
        if (boostedRoamer) { // remove boosted roamer from regular spawn pool
            pokemonList = pokemonList.filter((pokemon) => pokemon !== boostedRoamer.pokemon);
        }
        if (boostedRoamer && Math.random() < 0.05) {
            pokeSpecies = boostedRoamer.pokemon;
            level = boostedRoamer.level || 50;
            player.boostedRoamerExpired();
        } else {
            pokeSpecies = randomArrayElement(pokemonList);
            level = routeData.minLevel + Math.round((Math.random() * (routeData.maxLevel - routeData.minLevel)) * (player.activePoke().prestigeLevel * (player.activePoke().prestigeLevel * player.activePoke().prestigeLevel * 2) + 1));
            if (level > 100) {
                level -= 100;
                prestigeLevel += 1;
                if (level > 100) {
                    level -= 100;
                    prestigeLevel += 1;
                    if (level <= 0) {
                        level = 1;
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                    if (level > 100) {
                        level -= 100;
                        prestigeLevel += 1;
                        if (level <= 0) {
                            level = 1;
                        }
                    }
                }
            }
        }
        const poke = pokeByName(pokeSpecies);
        return generator(poke, level, prestigeLevel);
    };

    return {
        activePoke: () => active,
        clear: () => active = null,
        profPoke: (pokemonList) => active = profPoke(pokemonList),
        gymLeaderPoke: (pokemonList) => active = gymLeaderPoke(pokemonList),
        npcPoke: (pokemonList) => active = npcPoke(pokemonList),
        generateNew: (regionId, routeId) => active = generateNew(regionId, routeId),
        attachCL: (_combatLoop) => combatLoop = _combatLoop,
    };
};
