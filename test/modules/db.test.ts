import fs from 'fs';
import POKEDEX from '../../src/modules/db';
import { pokeImage } from '../../src/modules/poke';

const fileExists = async (path) => Boolean(await fs.promises.stat(path).catch(() => false));

// // move this into some src file and import it
// const imagePath = (
//     type: 'normal' | 'shiny',
//     side: 'front' | 'back',
//     name: PokemonNameType,
// ) => `assets/sprites/${type}/${side}/${name.replace(/[:?]/g, '')}.png`;

describe('Pokedex', () => {
    describe('All pokemon', () => {
        describe('have images', () => {
            const types = ['normal', 'shiny'];
            const sides = ['front', 'back', 'party'];
            const testImage = (type, side) => (poke) => {
                const name = poke.name;
                const image = `./src/resources/${pokeImage(type, side, poke.name)}`;
                test(name, () => fileExists(image).then((data) => {
                    expect(data).toBe(true);
                }));
            };
            types.forEach((type) => {
                sides.forEach((side) => {
                    describe(type, () => {
                        describe(side, () => {
                            POKEDEX.forEach(testImage(type, side));
                        });
                    });
                });
            });
        });
    });
});
