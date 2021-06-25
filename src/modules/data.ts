/* eslint-disable dot-notation */

export const EXP_TABLE: Record<string, number[]> = {};
EXP_TABLE['Slow'] = [1, 10, 34, 80, 156, 270, 429, 640, 911, 1250, 1664, 2160, 2746, 3430, 4219, 5120, 6141, 7290, 8574, 10000, 11576, 13310, 15209, 17280, 19531, 21970, 24604, 27440, 30486, 33750, 37239, 40960, 44921, 49130, 53594, 58320, 63316, 68590, 74149, 80000, 86151, 92610, 99384, 106480, 113906, 121670, 129779, 138240, 147061, 156250, 165814, 175760, 186096, 196830, 207969, 219520, 231491, 243890, 256724, 270000, 283726, 297910, 312559, 327680, 343281, 359370, 375954, 393040, 410636, 428750, 447389, 466560, 486271, 506530, 527344, 548720, 570666, 593190, 616299, 640000, 664301, 689210, 714734, 740880, 767656, 795070, 823129, 851840, 881211, 911250, 941964, 973360, 1005446, 1038230, 1071719, 1105920, 1140841, 1176490, 1212874, 1250000];
EXP_TABLE['Medium Slow'] = [1, 9, 30, 71, 139, 240, 381, 569, 810, 1111, 1479, 1920, 2441, 3049, 3750, 4551, 5459, 6480, 7621, 8889, 10290, 11831, 13519, 15360, 17361, 19529, 21870, 24391, 27099, 30000, 33101, 36409, 39930, 43671, 47639, 51840, 56281, 60969, 65910, 71111, 76579, 82320, 88341, 94649, 101250, 108151, 115359, 122880, 130721, 138889, 147390, 156231, 165419, 174960, 184861, 195129, 205770, 216791, 228199, 240000, 252201, 264809, 277830, 291271, 305139, 319440, 334181, 349369, 365010, 381111, 397679, 414720, 432241, 450249, 468750, 487751, 507259, 527280, 547821, 568889, 590490, 612631, 635319, 658560, 682361, 706729, 731670, 757191, 783299, 810000, 837301, 865209, 893730, 922871, 952639, 983040, 1014081, 1045769, 1078110, 1111111];
EXP_TABLE['Medium Fast'] = [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, 2197, 2744, 3375, 4096, 4913, 5832, 6859, 8000, 9261, 10648, 12167, 13824, 15625, 17576, 19683, 21952, 24389, 27000, 29791, 32768, 35937, 39304, 42875, 46656, 50653, 54872, 59319, 64000, 68921, 74088, 79507, 85184, 91125, 97336, 103823, 110592, 117649, 125000, 132651, 140608, 148877, 157464, 166375, 175616, 185193, 195112, 205379, 216000, 226981, 238328, 250047, 262144, 274625, 287496, 300763, 314432, 328509, 343000, 357911, 373248, 389017, 405224, 421875, 438976, 456533, 474552, 493039, 512000, 531441, 551368, 571787, 592704, 614125, 636056, 658503, 681472, 704969, 729000, 753571, 778688, 804357, 830584, 857375, 884736, 912673, 941192, 970299, 1000000];
EXP_TABLE['Fast'] = [1, 6, 22, 51, 100, 173, 274, 410, 583, 800, 1065, 1382, 1758, 2195, 2700, 3277, 3930, 4666, 5487, 6400, 7409, 8518, 9734, 11059, 12500, 14061, 15746, 17562, 19511, 21600, 23833, 26214, 28750, 31443, 34300, 37325, 40522, 43898, 47455, 51200, 55137, 59270, 63606, 68147, 72900, 77869, 83058, 88474, 94119, 100000, 106121, 112486, 119102, 125971, 133100, 140493, 148154, 156090, 164303, 172800, 181585, 190662, 200038, 209715, 219700, 229997, 240610, 251546, 262807, 274400, 286329, 298598, 311214, 324179, 337500, 351181, 365226, 379642, 394431, 409600, 425153, 441094, 457430, 474163, 491300, 508845, 526802, 545178, 563975, 583200, 602857, 622950, 643486, 664467, 685900, 707789, 730138, 752954, 776239, 800000];

export type PokemonGrowthRate = keyof typeof EXP_TABLE;

export const COLORS: Record<string, Record<string, string>> = {};
COLORS['route'] = {};
COLORS['route']['locked'] = 'rgb(255, 0, 0)';
COLORS['route']['unlocked'] = 'rgb(255, 255, 255)';
COLORS['route']['caughtAll'] = 'rgb(0, 127, 0)';
COLORS['route']['caughtAllShinies'] = 'rgb(127, 127, 0)';
COLORS['route']['current'] = 'rgb(139, 69, 19)';
COLORS['route']['currentCaughtAll'] = 'rgb(0, 244, 0)';
COLORS['route']['currentCaughtAllShinies'] = 'rgb(223, 223, 0)';

export const POKEDEXFLAGS: Record<string, number> = {};
POKEDEXFLAGS['unseen'] = 0;
POKEDEXFLAGS['seenNormal'] = 1;
POKEDEXFLAGS['seenShiny'] = 2;
POKEDEXFLAGS['releasedNormal'] = 3; // from releasing into wild
POKEDEXFLAGS['releasedShiny'] = 4; // from releasing into wild
POKEDEXFLAGS['ownedNormal'] = 5; // from evolution
POKEDEXFLAGS['ownNormal'] = 6; // in current rosta
POKEDEXFLAGS['ownedShiny'] = 7; // from evolution
POKEDEXFLAGS['ownShiny'] = 8; // in current rosta

export type PokedexFlagName = keyof typeof POKEDEXFLAGS;

export const BALLRNG: Record<string, number> = {
    pokeball: 1,
    greatball: 1.5,
    ultraball: 2,
    masterball: 100,
};

export const PokemonTypes = [
    'Normal',
    'Fighting',
    'Flying',
    'Poison',
    'Ground',
    'Rock',
    'Bug',
    'Ghost',
    'Steel',
    'Fire',
    'Water',
    'Grass',
    'Electric',
    'Psychic',
    'Ice',
    'Dragon',
    'Dark',
    'Fairy',
] as const;

export const MegaWithoutQuest = [
    'Beedrill',
    'Aggron',
    'Alakazam',
    'Banette',
    'Garchomp',
    'Gyarados',
    'Heracross',
    'Houdoom',
    'Kangaskhan',
    'Medicham',
    'Pinsir',
    'Scizor',
    'Tyranitar',
    'Manectric',
    'Glalie',
    'Lopunny',
    'Sableye',
    'Steelix',
] as const;

export type PokemonType = typeof PokemonTypes[number];

export type PokemonStatType = 'hp' | 'attack' | 'defense' | 'sp atk' | 'sp def' | 'speed';

interface VitaminData {
    display: string,
    stat: PokemonStatType,
}

export const VITAMINS: Record<string, VitaminData> = {
    hpUp: {
        display: 'HP Up',
        stat: 'hp',
    },
    protein: {
        display: 'Protein',
        stat: 'attack',
    },
    iron: {
        display: 'Iron',
        stat: 'defense',
    },
    calcium: {
        display: 'Calcium',
        stat: 'sp atk',
    },
    zinc: {
        display: 'Zinc',
        stat: 'sp def',
    },
    carbos: {
        display: 'Carbos',
        stat: 'speed',
    },
};
