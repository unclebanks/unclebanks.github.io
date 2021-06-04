import POKEDEX, {
    PokedexData, pokedexMaps, PokemonIdType, PokemonNameType,
} from './db';

export function requirementMetGenerator(player) {
    return (req) => {
        switch (req.requirement.type) {
        case 'item':
            return player.unlocked[req.requirement.item];
        case 'evoStone':
            return player.evoStones[req.requirement.evoStone];
        case 'pokemonTypeDefeat':
            return player.statistics[req.requirement.statistic] > [req.requirement.need];
        default:
            return false;
        }
    };
}

export function RNG(chance: number): boolean {
    const rnd = Math.random() * 100;
    return (rnd < chance);
}

export function cloneJsonObject<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}

export function randomArrayElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export function mergeArray<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
    if (arr1.length === 0 && arr2.length > 0) {
        return arr2;
    }
    if (arr2.length === 0 && arr1.length > 0) {
        return arr1;
    }
    if (arr1.length > 0 && arr2.length > 0) {
        return [...arr1, ...arr2];
    }
    return [];
}

export function isEmpty(obj: unknown): boolean {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
export function camelCaseToString(text: string): string {
    const result = text.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}
export function flash(element: HTMLElement): void {
    let op = 1; // initial opacity
    let fadeOut = true;
    const timer = setInterval(() => {
        if (op <= 0.1) {
            fadeOut = false;
        }
        if (op >= 1 && !fadeOut) {
            clearInterval(timer);
        }
        element.style.opacity = String(op);
        element.style.filter = `alpha(opacity=${op * 100})`;
        if (fadeOut) {
            op -= op * 0.1;
        } else {
            op += op * 0.1;
        }
    }, 10);
}

export const pokeByIndex = (id: number): PokedexData => POKEDEX[id - 1];
export const pokeById = (id: PokemonIdType): PokedexData => POKEDEX[pokedexMaps.id[id]];
export const pokeByName = (name: PokemonNameType): PokedexData => POKEDEX[pokedexMaps.name[name]];

export const $ = (cssQuery: string): HTMLElement => document.querySelector(cssQuery);
export const $all = (cssQuery: string): HTMLElement[] => Array.prototype.slice.call(document.querySelectorAll(cssQuery), 0);
