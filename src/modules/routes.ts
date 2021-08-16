import { PokemonNameType } from './db';

interface UnlockData {
    badges: Record<string, boolean>,
}

interface GymLeader {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    badge?: string,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
    req?: string,
}

type ItemSpecialRequirement = {
    type: 'item',
    item: string, // do you have a proper "item" type?
  }

  type PokemonDefeatSpecialRequirement = {
    type: 'pokemonTypeDefeat',
    statistic: string,
    need: number,
  }

  type EvoStoneSpecialRequirement = {
      type: 'evoStone',
      evoStone: string,
  }

type SpecialRequirement = ItemSpecialRequirement | PokemonDefeatSpecialRequirement | EvoStoneSpecialRequirement;

interface SpecialPokemon {
    requirement: SpecialRequirement,
    pokemon: PokemonNameType[],
  }

interface GymTrainer1 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
    req?: string,
}

interface GymTrainer2 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
}

interface GymTrainer3 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
}

interface EliteFour1 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFour2 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFour3 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFour4 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFourChampion {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    req?: string,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface Gym {
    name: string,
    gymLeader?: GymLeader,
    gymTrainer1?: GymTrainer1,
    gymTrainer2?: GymTrainer2,
    gymTrainer3?: GymTrainer3,
    eliteFour1?: EliteFour1,
    eliteFour2?: EliteFour2,
    eliteFour3?: EliteFour3,
    eliteFour4?: EliteFour4,
    eliteFourChampion?: EliteFourChampion,
}

interface NPC {
    name: string,
    poke?: Array<[PokemonNameType, number]>,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}
// we might want professor specific stuff later, ignore warning
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Professor extends NPC {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Story extends NPC {}

interface Town {
    name: string,
    town: true,
    prof?: Professor,
    gym?: Gym,
    pokeMart?: true,
    npc?: NPC,
    story? : Story,
    _unlock?: UnlockData,
}

interface Route {
    name: string,
    pokes: PokemonNameType[],
    minLevel: number,
    maxLevel: number,
    // this should be a town name, but we don't know them all until later
    // may want to define all town names before this for stronger typing
    respawn: string,
    modal?: string,
    npc?: NPC,
    _unlock?: UnlockData,
    _special?: SpecialPokemon[],

    // Need to do something about these, can probably be made into
    // an unlock condition and become part of UnlockData.
    kantoOldRod?: 1
    kantoGoodRod?: 1
    kantoSuperRod?: 1

    johtoOldRod?: 1
    johtoGoodRod?: 1
    johtoSuperRod?: 1

    hoennOldRod?: 1
    hoennGoodRod?: 1
    hoennSuperRod?: 1

    sinnohOldRod?: 1
    sinnohGoodRod?: 1
    sinnohSuperRod?: 1

    unovaOldRod?: 1
    unovaGoodRod?: 1
    unovaSuperRod?: 1

    kalosOldRod?: 1
    kalosGoodRod?: 1
    kalosSuperRod?: 1

    alolaOldRod?: 1
    alolaGoodRod?: 1
    alolaSuperRod?: 1

    galarOldRod?: 1
    galarGoodRod?: 1
    galarSuperRod?: 1
}

interface RegionData {
    _global?: {
        pokes: PokemonNameType[],
        rarePokes?: PokemonNameType[],
        superRare?: PokemonNameType[],
    },

    _unlock?: UnlockData,
}

type RegionLocations = Record<string, Town | Route>

// This isn't perfect. We would like for typescript to know
// that `ROUTES.Kanto._global` can only be the type listed in RegionData,
// but it is unable to figure that out with the current definition.
type Routes = Record<string, RegionLocations | RegionData>

const ROUTES: Routes = {
    Kanto: {
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        palletTown: {
            name: 'Pallet Town',
            town: true,
            prof: {
                name: 'Prof. Oak\'s Lab',
                event: 'profOak1',
            },
        },
        kroute1: {
            name: 'Route 1',
            pokes: ['Pidgey', 'Rattata'],
            minLevel: 2,
            maxLevel: 5,
            modal: 'kantoRoute1',
            respawn: 'palletTown',
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Raticate'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot'] },
            ],
        },
        viridianCity: {
            name: 'Viridian City',
            town: true,
            pokeMart: true,
            npc: {
                name: 'PokeMart Attendant',
            },
            gym: {
                name: 'Viridian Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'viridianGym1',
                    req: 'volcano1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'viridianGym2',
                    req: 'viridianGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'viridianGym3',
                    req: 'viridianGym2',
                },
                gymLeader: {
                    name: 'Giovanni',
                    badge: 'Earth Badge',
                    poke: [
                        ['Rhyhorn', 45],
                        ['Dugtrio', 42],
                        ['Nidoqueen', 44],
                        ['Nidoking', 45],
                        ['Rhydon', 50],
                    ],
                    req: 'viridianGym3',
                },

            },
        },
        kroute22: {
            name: 'Route 22',
            pokes: ['Rattata', 'Nidoran F', 'Nidoran M', 'Mankey', 'Spearow'],
            modal: 'kantoRoute22',
            minLevel: 2,
            maxLevel: 6,
            respawn: 'viridianCity',
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Nidorina', 'Nidorino', 'Raticate'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Fearow', 'Primeape'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Nidoking', 'Nidoqueen'] },
            ],
        },
        kroute2: {
            name: 'Route 2',
            pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle', 'Nidoran F', 'Nidoran M'],
            minLevel: 3,
            maxLevel: 5,
            modal: 'kantoRoute2Bottom',
            respawn: 'viridianCity',
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Nidorina', 'Nidorino', 'Raticate', 'Kakuna', 'Metapod', 'Pidgeotto'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Butterfree', 'Beedrill', 'Pidgeot'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Nidoking', 'Nidoqueen'] },
            ],
        },
        viridianForest: {
            name: 'Virdian Forest',
            pokes: ['Caterpie', 'Weedle', 'Pidgey', 'Pikachu', 'Oddish'],
            minLevel: 3,
            maxLevel: 6,
            modal: 'kantoViridianForest',
            respawn: 'viridianCity',
            npc: {
                name: 'Bug Catcher Rick',
                event: 'kvForestTrainer1',
                poke: [
                    ['Caterpie', 6],
                    ['Weedle', 6],
                ],
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Gloom', 'Pidgeotto', 'Kakuna', 'Metapod'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Butterfree', 'Beedrill'] },
                { requirement: { type: 'evoStone', evoStone: 'thunderStone' }, pokemon: ['Raichu'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        pewterCity: {
            name: 'Pewter City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Pewter Gym',
                gymTrainer1: {
                    name: 'Jr. Trainer',
                    poke: [
                        ['Diglett', 11],
                        ['Sandshrew', 11],
                    ],
                    win: 'pewterGym1',
                },
                gymLeader: {
                    name: 'Brock',
                    badge: 'Boulder Badge',
                    win: 'boulder1',
                    poke: [
                        ['Geodude', 12],
                        ['Onix', 14],
                    ],
                    req: 'pewterGym1',
                },
            },
            npc: {
                name: 'Pewter Museum',
                event: 'pewterMuseum1',
            },
        },
        kroute3: {
            name: 'Route 3',
            pokes: ['Pidgey', 'Rattata', 'Spearow', 'Jigglypuff', 'Sandshrew', 'Mankey'],
            minLevel: 5,
            maxLevel: 12,
            respawn: 'pewterCity',
            modal: 'kantoRoute3West',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Pidgeotto', 'Sandslash'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Fearow', 'Primeape'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Wigglytuff'] },
            ],
        },
        mtMoon: {
            name: 'Mt. Moon',
            pokes: ['Zubat', 'Paras', 'Geodude', 'Sandshrew'],
            minLevel: 6,
            maxLevel: 12,
            modal: 'mtMoonFirstFloor',
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Clefairy', 'Graveler'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Golbat', 'Parasect', 'Golem', 'Sandslash'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Clefable'] },
            ],
        },
        kroute4: {
            name: 'Route 4',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey'],
            minLevel: 6,
            maxLevel: 12,
            modal: 'kantoRoute4West',
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Fearow', 'Raticate'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Arbok', 'Sandslash', 'Primeape'] },
            ],
        },
        ceruleanCity: {
            name: 'Cerulean City',
            town: true,
            pokeMart: true,
            story: {
                name: 'Burgled House',
                event: 'rocketThiefCerulean',
            },
            gym: {
                name: 'Cerulean Gym',
                gymTrainer1: {
                    name: 'Swimmer',
                    poke: [
                        ['Horsea', 16],
                        ['Shellder', 16],
                    ],
                    win: 'ceruleanGym1',
                },
                gymTrainer2: {
                    name: 'Jr. Trainer',
                    poke: [
                        ['Goldeen', 19],
                    ],
                    req: 'ceruleanGym1',
                    win: 'ceruleanGym2',
                },
                gymLeader: {
                    name: 'Misty',
                    badge: 'Cascade Badge',
                    win: 'cascade1',
                    poke: [
                        ['Staryu', 18],
                        ['Starmie', 21],
                    ],
                    req: 'ceruleanGym2',
                },
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        kroute24: {
            name: 'Route 24',
            pokes: ['Caterpie', 'Weedle', 'Pidgey', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            modal: 'kantoRoute24',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Kakuna', 'Metapod', 'Pidgeotto', 'Gloom', 'Kadabra', 'Weepinbell'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Beedrill', 'Butterfree', 'Pidgeot', 'Alakazam', 'Victreebel', 'Venomoth'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        kroute25: {
            name: 'Route 25',
            pokes: ['Caterpie', 'Weedle', 'Pidgey', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            modal: 'kantoRoute25',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Kakuna', 'Metapod', 'Pidgeotto', 'Gloom', 'Kadabra', 'Weepinbell'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Beedrill', 'Butterfree', 'Pidgeot', 'Alakazam', 'Victreebel', 'Venomoth'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        seasideCottage: {
            name: 'Seaside Cottage',
            town: true,
            npc: {
                name: 'Bill',
                event: 'bill1',
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        kroute5: {
            name: 'Route 5',
            pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            modal: 'kantoRoute5',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Kadabra', 'Weepinbell', 'Persian'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Alakazam', 'Victreebel', 'Venomoth', 'Primeape'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Wigglytuff'] },
            ],
        },
        kroute6: {
            name: 'Route 6',
            pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            modal: 'kantoRoute6',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Kadabra', 'Weepinbell', 'Persian'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Alakazam', 'Victreebel', 'Venomoth', 'Primeape'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Wigglytuff'] },
            ],
        },
        vermilionCity: {
            name: 'Vermilion City',
            town: true,
            pokeMart: true,
            npc: {
                name: 'Vermilion Fishing Guru',
            },
            story: {
                name: 'S.S. Anne',
            },
            gym: {
                name: 'Vermilion Gym',
                gymTrainer1: {
                    name: 'Sailor',
                    poke: [
                        ['Pikachu', 21],
                        ['Pikachu', 21],
                    ],
                    win: 'vermilionGym1',
                },
                gymTrainer2: {
                    name: 'Rocker',
                    poke: [
                        ['Voltorb', 20],
                        ['Magnemite', 20],
                        ['Voltorb', 20],
                    ],
                    win: 'vermilionGym2',
                    req: 'vermilionGym1',
                },
                gymTrainer3: {
                    name: 'Gentleman',
                    poke: [
                        ['Pikachu', 23],
                    ],
                    win: 'vermilionGym3',
                    req: 'vermilionGym2',
                },
                gymLeader: {
                    name: 'Lt. Surge',
                    badge: 'Thunder Badge',
                    win: 'thunder1',
                    req: 'vermilionGym3',
                    poke: [
                        ['Voltorb', 21],
                        ['Pikachu', 18],
                        ['Raichu', 24],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
        },
        diglettCave: {
            name: 'Diglett Cave',
            pokes: ['Diglett', 'Dugtrio'],
            minLevel: 15,
            maxLevel: 31,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
        },
        kroute11: {
            name: 'Route 11',
            pokes: ['Pidgey', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee'],
            minLevel: 18,
            maxLevel: 25,
            modal: 'kantoRoute11',
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Raticate', 'Fearow', 'Arbok'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Sandslash', 'Hypno'] },
            ],
        },
        kroute9: {
            name: 'Route 9',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M'],
            minLevel: 9,
            maxLevel: 17,
            modal: 'kantoRoute9',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Fearow', 'Arbok', 'Nidorina', 'Nidorino'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Sandslash', 'Hypno'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Nidoqueen', 'Nidoking'] },
            ],
        },
        kroute10: {
            name: 'Route 10',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M', 'Machop', 'Magnemite', 'Voltorb'],
            minLevel: 11,
            maxLevel: 17,
            modal: 'kantoRoute10',
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Fearow', 'Arbok', 'Nidorina', 'Nidorino', 'Machoke'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Sandslash', 'Machamp', 'Magneton', 'Electrode'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Nidoqueen', 'Nidoking'] },
            ],
        },
        rockTunnel: {
            name: 'Rock Tunnel',
            pokes: ['Zubat', 'Machop', 'Geodude', 'Onix'],
            minLevel: 11,
            maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Machoke', 'Graveler', 'Golbat'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Machamp', 'Golem'] },
            ],
        },
        powerPlant: {
            name: 'Power Plant',
            pokes: ['Pikachu', 'Magnemite', 'Grimer', 'Voltorb', 'Zapdos'],
            minLevel: 20,
            maxLevel: 50,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Magneton', 'Muk', 'Electrode'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Electabuzz'] },
                { requirement: { type: 'evoStone', evoStone: 'thunderStone' }, pokemon: ['Raichu'] },
            ],
        },
        lavenderTown: {
            name: 'Lavender Town',
            town: true,
            pokeMart: true,
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        pokemonTower: {
            name: 'Pokemon Tower',
            pokes: ['Gastly', 'Cubone'],
            minLevel: 13,
            maxLevel: 18,
            modal: 'lavenderPokeTower1',
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Haunter'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Marowak', 'Gengar'] },
            ],
        },
        kroute8: {
            name: 'Route 8',
            pokes: ['Pidgey', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jigglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra'],
            minLevel: 15,
            maxLevel: 20,
            modal: 'kantoRoute8',
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Raticate', 'Arbok', 'Kadabra'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Sandslash', 'Persian', 'Primeape', 'Alakazam'] },
                { requirement: { type: 'evoStone', evoStone: 'fireStone' }, pokemon: ['Ninetales', 'Arcanine'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Wigglytuff'] },
            ],
        },
        kroute7: {
            name: 'Route 7',
            pokes: ['Pidgey', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout'],
            minLevel: 18,
            maxLevel: 22,
            modal: 'kantoRoute7',
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Raticate', 'Arbok', 'Kadabra', 'Gloom', 'Weepinbell'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Sandslash', 'Persian', 'Primeape', 'Alakazam', 'Victreebel'] },
                { requirement: { type: 'evoStone', evoStone: 'fireStone' }, pokemon: ['Ninetales', 'Arcanine'] },
                { requirement: { type: 'evoStone', evoStone: 'moonStone' }, pokemon: ['Wigglytuff'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        celadonCity: {
            name: 'Celadon City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Celadon Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'celadonGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'celadonGym2',
                    req: 'celadonGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'celadonGym3',
                    req: 'celadonGym2',
                },
                gymLeader: {
                    name: 'Erika',
                    badge: 'Rainbow Badge',
                    win: 'rainbow1',
                    req: 'celadonGym3',
                    poke: [
                        ['Victreebel', 29],
                        ['Tangela', 24],
                        ['Vileplume', 29],
                    ],
                },
            },
            npc: {
                name: 'Game Corner',
                event: 'gameCorner',
            },
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        saffronCity: {
            name: 'Saffron City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Saffron Gym',
                gymTrainer1: {
                    name: 'Psychic',
                    poke: [
                        ['Mr. Mime', 34],
                        ['Kadabra', 34],
                    ],
                    win: 'saffronGym1',
                },
                gymTrainer2: {
                    name: 'Psychic',
                    poke: [
                        ['Kadabra', 34],
                        ['Slowbro', 38],
                        ['Mr. Mime', 38],
                        ['Haunter', 34],
                    ],
                    win: 'saffronGym2',
                    req: 'saffronGym1',
                },
                gymLeader: {
                    name: 'Sabrina',
                    badge: 'Marsh Badge',
                    win: 'marsh1',
                    req: 'saffronGym2',
                    poke: [
                        ['Kadabra', 38],
                        ['Mr. Mime', 37],
                        ['Venomoth', 38],
                        ['Alakazam', 43],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
        },
        kkarateDojo: {
            name: 'Karate Dojo',
            pokes: ['Hitmonlee', 'Hitmonchan'],
            minLevel: 45,
            maxLevel: 55,
            respawn: 'saffronCity',
            _unlock: {
                badges: {
                    'Marsh Badge': true,
                },
            },
        },
        kroute16: {
            name: 'Route 16',
            pokes: ['Rattata', 'Spearow', 'Doduo'],
            minLevel: 18,
            maxLevel: 30,
            modal: 'kantoRoute16',
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Fearow'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Dodrio', 'Snorlax'] },
            ],
        },
        kroute17: {
            name: 'Route 17',
            pokes: ['Rattata', 'Spearow', 'Ponyta', 'Doduo'],
            minLevel: 20,
            maxLevel: 29,
            modal: 'kantoRoute17',
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Fearow', 'Electrode'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Dodrio'] },
                { requirement: { type: 'evoStone', evoStone: 'fireStone' }, pokemon: ['Rapidash'] },
            ],
        },
        kroute18: {
            name: 'Route 18',
            pokes: ['Rattata', 'Spearow', 'Doduo'],
            minLevel: 20,
            maxLevel: 29,
            modal: 'kantoRoute18',
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Raticate', 'Fearow'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Dodrio'] },
            ],
        },
        fuchsiaCity: {
            name: 'Fuchsia City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Fuchsia Gym',
                gymTrainer1: {
                    name: 'Juggler',
                    poke: [
                        ['Drowzee', 32],
                        ['Hypno', 32],
                    ],
                    win: 'fuchsiaGym1',
                },
                gymTrainer2: {
                    name: 'Tamer',
                    poke: [
                        ['Arbok', 32],
                        ['Sandslash', 32],
                        ['Arbok', 32],
                    ],
                    win: 'fuchsiaGym2',
                    req: 'fuchsiaGym1',
                },
                gymTrainer3: {
                    name: 'Juggler',
                    poke: [
                        ['Hypno', 35],
                        ['Kadabra', 35],
                        ['Arbok', 35],
                    ],
                    win: 'fuchsiaGym3',
                    req: 'fuchsiaGym2',
                },
                gymLeader: {
                    name: 'Koga',
                    badge: 'Soul Badge',
                    poke: [
                        ['Koffing', 37],
                        ['Muk', 39],
                        ['Koffing', 37],
                        ['Weezing', 43],
                    ],
                    req: 'fuchsiaGym3',
                },
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
        },
        safariZone: {
            name: 'Safari Zone',
            pokes: ['Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Doduo', 'Exeggcute', 'Cubone', 'Marowak', 'Rhyhorn', 'Chansey', 'Tangela', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros'],
            minLevel: 22,
            maxLevel: 31,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute15: {
            name: 'Route 15',
            pokes: ['Pidgey', 'Oddish', 'Venonat', 'Bellsprout'],
            minLevel: 22,
            maxLevel: 30,
            modal: 'kantoRoute15',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Weepinbell'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Venomoth', 'Ditto', 'Victreebel'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        kroute14: {
            name: 'Route 14',
            pokes: ['Pidgey', 'Oddish', 'Venonat', 'Bellsprout'],
            minLevel: 23,
            maxLevel: 30,
            modal: 'kantoRoute14',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Weepinbell'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Venomoth', 'Ditto', 'Victreebel'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        kroute13: {
            name: 'Route 13',
            pokes: ['Pidgey', 'Oddish', 'Venonat', 'Bellsprout'],
            minLevel: 22,
            maxLevel: 30,
            modal: 'kantoRoute13',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Weepinbell', 'Farfetchd'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Venomoth', 'Ditto', 'Victreebel'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        kroute12: {
            name: 'Route 12',
            pokes: ['Pidgey', 'Oddish', 'Venonat', 'Bellsprout'],
            minLevel: 22,
            maxLevel: 30,
            modal: 'kantoRoute12',
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Pidgeotto', 'Gloom', 'Weepinbell', 'Farfetchd', 'Snorlax'] },
                { requirement: { type: 'item', item: 'kantoSecondStagePass' }, pokemon: ['Pidgeot', 'Venomoth', 'Ditto', 'Victreebel', 'Mr. Mime'] },
                { requirement: { type: 'evoStone', evoStone: 'leafStone' }, pokemon: ['Vileplume'] },
            ],
        },
        kroute19: {
            name: 'Route 19',
            pokes: ['Tentacool'],
            minLevel: 5,
            maxLevel: 40,
            modal: 'kantoRoute19',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            _special: [
                { requirement: { type: 'item', item: 'kantoFirstStagePass' }, pokemon: ['Tentacruel'] },
            ],
        },
        seafoamIsland: {
            name: 'Seafoam Island',
            pokes: ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Staryu', 'Jynx', 'Articuno'],
            minLevel: 9,
            maxLevel: 50,
            modal: 'seafoamIslandsEntrance',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute20: {
            name: 'Route 20',
            pokes: ['Tentacool'],
            minLevel: 5,
            maxLevel: 40,
            modal: 'kantoRoute20',
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        cinnabarIsland: {
            name: 'Cinnabar Island',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Cinnabar Gym',
                gymTrainer1: {
                    name: 'Burgler',
                    poke: [
                        ['Growlithe', 36],
                        ['Vulpix', 36],
                        ['Ninetales', 36],
                    ],
                    win: 'cinnabarGym1',
                },
                gymTrainer2: {
                    name: 'Super Nerd',
                    poke: [
                        ['Ponyta', 36],
                        ['Charmeleon', 36],
                        ['Growlithe', 36],
                        ['Rapidash', 36],
                    ],
                    win: 'cinnabarGym2',
                    req: 'cinnabarGym1',
                },
                gymTrainer3: {
                    name: 'Burgler',
                    poke: [
                        ['Growlithe', 36],
                        ['Rapidash', 36],
                        ['Arcanine', 36],
                    ],
                    win: 'cinnabarGym3',
                    req: 'cinnabarGym2',
                },
                gymLeader: {
                    name: 'Blaine',
                    badge: 'Volcano Badge',
                    win: 'volcano1',
                    req: 'cinnabarGym3',
                    poke: [
                        ['Growlithe', 42],
                        ['Ponyta', 40],
                        ['Rapidash', 42],
                        ['Arcanine', 47],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
            npc: {
                name: 'Cinnabar Lab',
                event: 'cinnabarLab1',
            },
        },
        pokemonMansion: {
            name: 'Pokemon Mansion',
            pokes: ['Rattata', 'Raticate', 'Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar', 'Ditto', 'Porygon'],
            minLevel: 26,
            maxLevel: 46,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        fossilCave: {
            name: 'Fossil Restorer',
            pokes: ['Omanyte', 'Kabuto', 'Lapras'],
            minLevel: 30,
            maxLevel: 30,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true,
                },
            },
        },
        kroute21: {
            name: 'Route 21',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tentacool', 'Tangela'],
            minLevel: 21,
            maxLevel: 32,
            modal: 'kantoRoute21',
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true,
                },
            },
        },
        kroute23: {
            name: 'Route 23',
            pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto'],
            minLevel: 33,
            maxLevel: 43,
            modal: 'kantoRoute23',
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true,
                },
            },
        },
        victoryRoad: {
            name: 'Victory Road',
            pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Moltres', 'Eevee'],
            minLevel: 36,
            maxLevel: 45,
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true,
                },
            },
        },
        ceruleanCave: {
            name: 'Cerulean Cave',
            pokes: ['Arbok', 'Raichu', 'Sandslash', 'Wigglytuff', 'Golbat', 'Gloom', 'Parasect', 'Venomoth', 'Kadabra', 'Weepinbell', 'Graveler', 'Magneton', 'Dodrio', 'Hypno', 'Electrode', 'Marowak', 'Lickitung', 'Rhyhorn', 'Rhydon', 'Chansey', 'Ditto', 'Mewtwo', 'Mew'],
            minLevel: 51,
            maxLevel: 60,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Earth Badge': true,
                },
            },
        },
        kOldRod: {
            name: 'Kanto Old Rod',
            pokes: ['Magikarp'],
            minLevel: 5,
            maxLevel: 5,
            respawn: 'palletTown',
            kantoOldRod: 1,
        },
        kGoodRod: {
            name: 'Kanto Good Rod',
            pokes: ['Poliwag', 'Goldeen', 'Magikarp'],
            minLevel: 5,
            maxLevel: 15,
            respawn: 'palletTown',
            kantoGoodRod: 1,
        },
        kSuperRod: {
            name: 'Kanto Super Rod',
            pokes: ['Psyduck', 'Poliwag', 'Poliwhirl', 'Tentacool', 'Tentacruel', 'Slowpoke', 'Slowbro', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Dragonair'],
            minLevel: 5,
            maxLevel: 40,
            respawn: 'palletTown',
            kantoSuperRod: 1,
        },
    },
    Johto: {
        _unlock: {
            badges: {
                'Earth Badge': true,
            },
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [
                'Raikou',
                'Entei',
            ],
        },
        newBarkTown: {
            name: 'New Bark Town',
            town: true,
        },
        johtoroute29: {
            name: 'Route 29',
            pokes: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot', 'Hoppip', 'Chikorita', 'Cyndaquil', 'Totodile'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'newBarkTown',
        },
        johtoroute46: {
            name: 'Route 46',
            pokes: ['Rattata', 'Spearow', 'Jigglypuff', 'Geodude', 'Phanpy'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'NewBarkTown',
        },
        cherrygroveCity: {
            name: 'Cherrygrove City',
            town: true,
            pokeMart: true,
        },
        johtoroute30: {
            name: 'Route 30',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'cherrygroveCity',
        },
        johtoroute31: {
            name: 'Route 31',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip'],
            minLevel: 3,
            maxLevel: 6,
            respawn: 'cherrygroveCity',
        },
        darkCave: {
            name: 'Dark Cave',
            pokes: ['Zubat', 'Geodude', 'Graveler', 'Krabby', 'Wobbuffet', 'Dunsparce', 'Shuckle', 'Teddiursa', 'Ursaring'],
            minLevel: 2,
            maxLevel: 30,
            respawn: 'cherrygroveCity',
        },
        violetCity: {
            name: 'Violet City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Violet Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'violetGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'violetGym2',
                    req: 'violetGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'violetGym3',
                    req: 'violetGym2',
                },
                gymLeader: {
                    name: 'Falkner',
                    win: 'falkner1',
                    req: 'violetGym3',
                    badge: 'Zephyr Badge',
                    poke: [
                        ['Pidgeotto', 25],
                        ['Noctowl', 25],
                        ['Pidgeot', 25],
                    ],
                },
            },
        },
        sproutTower: {
            name: 'Sprout Tower',
            pokes: ['Rattata', 'Gastly'],
            minLevel: 3,
            maxLevel: 6,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        johtoroute32: {
            name: 'Route 32',
            pokes: ['Pidgey', 'Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Gastly', 'Hoothoot', 'Mareep', 'Hoppip', 'Wooper'],
            minLevel: 4,
            maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        ruinsofAlph: {
            name: 'Ruins of Alph',
            pokes: ['Natu', 'Smeargle', 'Wooper'],
            minLevel: 18,
            maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        innerRuins: {
            name: 'Inner Ruins',
            pokes: ['Unown A'],
            minLevel: 5,
            maxLevel: 5,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        unionCave: {
            name: 'Union Cave',
            pokes: ['Rattata', 'Raticate', 'Sandshrew', 'Zubat', 'Golbat', 'Geodude', 'Onix', 'Wooper', 'Quagsire', 'Lapras'],
            minLevel: 4,
            maxLevel: 23,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        johtoroute33: {
            name: 'Route 33',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Zubat', 'Geodude', 'Hoppip'],
            minLevel: 6,
            maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        slowpokeWell: {
            name: 'Slowpoke Well',
            pokes: ['Zubat', 'Golbat', 'Slowpoke'],
            minLevel: 5,
            maxLevel: 23,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        azaleaTown: {
            name: 'Azalea Town',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Azalea Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'azaleaGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'azaleaGym2',
                    req: 'azaleaGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'azaleaGym3',
                    req: 'azaleaGym2',
                },
                gymLeader: {
                    name: 'Bugsy',
                    win: 'bugsy1',
                    req: 'azaleaGym3',
                    badge: 'Hive Badge',
                    poke: [
                        ['Butterfree', 25],
                        ['Beedrill', 25],
                        ['Scyther', 25],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Zephyr Badge': true,
                },
            },
        },
        ilexForest: {
            name: 'Ilex Forest',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Oddish', 'Paras', 'Venonat', 'Psyduck', 'Hoothoot'],
            minLevel: 5,
            maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        johtoroute34: {
            name: 'Route 34',
            pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Snubbull'],
            minLevel: 10,
            maxLevel: 12,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        daycareHouse: {
            name: 'Daycare House',
            pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'], // TODO: make these hatch from eggs
            minLevel: 5,
            maxLevel: 5,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        goldenrodCity: {
            name: 'Goldenrod City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Goldenrod Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'goldenrodGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'goldenrodGym2',
                    req: 'goldenrodGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'goldenrodGym3',
                    req: 'goldenrodGym2',
                },
                gymLeader: {
                    name: 'Whitney',
                    win: 'whitney1',
                    req: 'goldenrodGym3',
                    badge: 'Plain Badge',
                    poke: [
                        ['Clefairy', 18],
                        ['Miltank', 20],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        johtoroute35: {
            name: 'Route 35',
            pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Jigglypuff', 'Psyduck', 'Growlithe', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma', 'Snubbull'],
            minLevel: 10,
            maxLevel: 14,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        nationalPark: {
            name: 'National Park',
            pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Nidoran F', 'Nidoran M', 'Paras', 'Venonat', 'Psyduck', 'Scyther', 'Pinsir', 'Hoothoot', 'Ledyba', 'Spinarak', 'Sunkern'],
            minLevel: 10,
            maxLevel: 17,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        },
        johtoroute36: {
            name: 'Route 36',
            pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Vulpix', 'Growlithe', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler', 'Sudowoodo'],
            minLevel: 4,
            maxLevel: 15,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true,
                },
            },
        },
        johtoroute37: {
            name: 'Route 37',
            pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Stantler'],
            minLevel: 13,
            maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true,
                },
            },
        },
        ecruteakCity: {
            name: 'Ecruteak City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Ecruteak Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'ecruteakGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'ecruteakGym2',
                    req: 'ecruteakGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'ecruteakGym3',
                    req: 'ecruteakGym2',
                },
                gymLeader: {
                    name: 'Morty',
                    badge: 'Fog Badge',
                    req: 'ecruteakGym3',
                    poke: [
                        ['Gastly', 21],
                        ['Haunter', 21],
                        ['Haunter', 23],
                        ['Gengar', 25],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Plain Badge': true,
                },
            },
        },
        burnedTower: {
            name: 'Burned Tower',
            pokes: ['Rattata', 'Raticate', 'Zubat', 'Krabby', 'Koffing', 'Weezing', 'Magmar', 'Shuckle'],
            minLevel: 13,
            maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true,
                },
            },
        },
        tinTower: {
            name: 'Tin Tower',
            pokes: ['Rattata', 'Gastly', 'Ho-Oh'],
            minLevel: 20,
            maxLevel: 70,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        johtoroute38: {
            name: 'Route 38',
            pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Snubbull', 'Miltank'],
            minLevel: 13,
            maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true,
                },
            },
        },
        johtoroute39: {
            name: 'Route 39',
            pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Miltank'],
            minLevel: 15,
            maxLevel: 17,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true,
                },
            },
        },
        olivineCity: {
            name: 'Olivine City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Olivine Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'olivineGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'olivineGym2',
                    req: 'olivineGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'olivineGym3',
                    req: 'olivineGym2',
                },
                gymLeader: {
                    name: 'Jasmine',
                    win: 'jasmine1',
                    req: 'olivineGym3',
                    badge: 'Mineral Badge',
                    poke: [
                        ['Magneton', 45],
                        ['Forretress', 45],
                        ['Steelix', 45],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Fog Badge': true,
                },
            },
        },
        johtoroute40: {
            name: 'Route 40',
            pokes: ['Tentacool', 'Tentacruel', 'Krabby', 'Shuckle'],
            minLevel: 15,
            maxLevel: 24,
            respawn: 'olivineCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true,
                },
            },
        },
        johtoroute41: {
            name: 'Route 41',
            pokes: ['Mantine', 'Tentacool', 'Tentacruel'],
            minLevel: 15,
            maxLevel: 24,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true,
                },
            },
        },
        whirlIsland: {
            name: 'Whirl Island',
            pokes: ['Zubat', 'Golbat', 'Seel', 'Krabby', 'Lugia'],
            minLevel: 22,
            maxLevel: 70,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        cianwoodCity: {
            name: 'Cianwood City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Cianwood Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'cianwoodGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'cianwoodGym2',
                    req: 'cianwoodGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'cianwoodGym3',
                    req: 'cianwoodGym2',
                },
                gymLeader: {
                    name: 'Chuck',
                    badge: 'Storm Badge',
                    req: 'cianwoodGym3',
                    poke: [
                        ['Primeape', 27],
                        ['Poliwrath', 30],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Mineral Badge': true,
                },
            },
        },
        johtoroute47: {
            name: 'Route 47',
            pokes: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetchd', 'Ditto', 'Noctowl', 'Miltank'],
            minLevel: 31,
            maxLevel: 40,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true,
                },
            },
        },
        johtoroute48: {
            name: 'Route 48',
            pokes: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetchd', 'Tauros', 'Hoppip', 'Girafarig'],
            minLevel: 20,
            maxLevel: 25,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true,
                },
            },
        },
        johtoroute42: {
            name: 'Route 42',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Zubat', 'Golbat', 'Mankey', 'Mareep', 'Flaaffy', 'Marill'],
            minLevel: 13,
            maxLevel: 17,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        mtMortar: {
            name: 'Mt. Mortar',
            pokes: ['Rattata', 'Raticate', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marill'],
            minLevel: 14,
            maxLevel: 32,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        rocketHideout: {
            name: 'Rocket Hideout',
            pokes: ['Geodude', 'Voltorb', 'Electrode', 'Koffing'],
            minLevel: 23,
            maxLevel: 23,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        mahoganyTown: {
            name: 'Mahogany Town',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Mahogany Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'mahoganyGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'mahoganyGym2',
                    req: 'mahoganyGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'mahoganyGym3',
                    req: 'mahoganyGym2',
                },
                gymLeader: {
                    name: 'Pryce',
                    badge: 'Glacier Badge',
                    req: 'mahoganyGym3',
                    poke: [
                        ['Seel', 27],
                        ['Dewgong', 29],
                        ['Piloswine', 31],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        johtoroute43: {
            name: 'Route 43',
            pokes: ['Pidgeotto', 'Raticate', 'Venonat', 'Venomoth', 'Farfetchd', 'Sentret', 'Furret', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig'],
            minLevel: 15,
            maxLevel: 17,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        lakeofRage: {
            name: 'Lake of Rage',
            pokes: ['Gyarados', 'Magikarp'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Storm Badge': true,
                },
            },
        },
        johtoroute44: {
            name: 'Route 44',
            pokes: ['Poliwag', 'Poliwhirl', 'Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela'],
            minLevel: 22,
            maxLevel: 26,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        icePath: {
            name: 'Ice Path',
            pokes: ['Zubat', 'Golbat', 'Krabby', 'Jynx', 'Shuckle', 'Sneasel', 'Swinub', 'Delibird'],
            minLevel: 20,
            maxLevel: 26,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        dragonsDen: {
            name: 'Dragons Den',
            pokes: ['Magikarp', 'Dratini'],
            minLevel: 10,
            maxLevel: 19,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        blackthornCity: {
            name: 'Blackthorn City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Blackthorn Gym',
                gymTrainer1: {
                    name: 'Lass',
                    poke: [
                        ['Bellsprout', 21],
                        ['Weepinbell', 23],
                    ],
                    win: 'blackthornGym1',
                },
                gymTrainer2: {
                    name: 'Beauty',
                    poke: [
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                        ['Oddish', 21],
                        ['Bellsprout', 21],
                    ],
                    win: 'blackthornGym2',
                    req: 'blackthornGym1',
                },
                gymTrainer3: {
                    name: 'Cooltrainer',
                    poke: [
                        ['Weepinbell', 24],
                        ['Gloom', 24],
                        ['Ivysaur', 24],
                    ],
                    win: 'blackthornGym3',
                    req: 'blackthornGym2',
                },
                gymLeader: {
                    name: 'Clair',
                    badge: 'Rising Badge',
                    req: 'blackthornGym3',
                    poke: [
                        ['Dragonair', 37],
                        ['Dragonair', 37],
                        ['Dragonair', 37],
                        ['Kingdra', 40],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        johtoroute45: {
            name: 'Route 45',
            pokes: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy', 'Donphan'],
            minLevel: 20,
            maxLevel: 30,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true,
                },
            },
        },
        johtoroute27: {
            name: 'Route 27',
            pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire'],
            minLevel: 28,
            maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        johtoroute26: {
            name: 'Route 26',
            pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire'],
            minLevel: 28,
            maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        johtoroute7: {
            name: 'Route 7',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Vulpix', 'Jigglypuff', 'Meowth', 'Persian', 'Growlithe', 'Abra', 'Murkrow', 'Snubbull', 'Houndour'],
            minLevel: 15,
            maxLevel: 19,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        johtoroute16: {
            name: 'Route 16',
            pokes: ['Fearow', 'Grimer', 'Muk', 'Murkrow', 'Slugma'],
            minLevel: 26,
            maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        johtoroute28: {
            name: 'Route 28',
            pokes: ['Ponyta', 'Tangela', 'Ursaring', 'Donphan', 'Rapidash', 'Arbok', 'Doduo', 'Dodrio', 'Sneasel', 'Poliwhirl', 'Golbat'],
            minLevel: 39,
            maxLevel: 42,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        mtSilver: {
            name: 'Mt.Silver',
            pokes: ['Arbok', 'Golbat', 'Parasect', 'Golduck', 'Poliwhirl', 'Machoke', 'Graveler', 'Doduo', 'Dodrio', 'Ponyta', 'Rapidash', 'Onix', 'Tangela', 'Magmar', 'Quagsire', 'Misdreavus', 'Sneasel', 'Ursaring', 'Donphan', 'Larvitar', 'Pupitar'],
            minLevel: 38,
            maxLevel: 48,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true,
                },
            },
        },
        jOldRod: {
            name: 'Johto Old Rod',
            pokes: ['Poliwag', 'Tentacool', 'Krabby', 'Goldeen', 'Magikarp'],
            minLevel: 10,
            maxLevel: 10,
            respawn: 'NewBarkTown',
            johtoOldRod: 1,
        },
        jGoodRod: {
            name: 'Johto Good Rod',
            pokes: ['Poliwag', 'Tentacool', 'Shellder', 'Krabby', 'Horsea', 'Goldeen', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Chinchou', 'Corsola'],
            minLevel: 20,
            maxLevel: 20,
            respawn: 'NewBarkTown',
            johtoGoodRod: 1,
        },
        jSuperRod: {
            name: 'Johto Super Rod',
            pokes: ['Poliwag', 'Tentacool', 'Tentacruel', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Magikarp', 'Gyarados', 'Dratini', 'Dragonair', 'Chinchou', 'Lanturn', 'Qwilfish', 'Corsola', 'Remoraid'],
            minLevel: 40,
            maxLevel: 40,
            respawn: 'NewBarkTown',
            johtoSuperRod: 1,
        },
        headbutt: {
            name: 'Headbutt',
            pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Spearow', 'Ekans', 'Exeggcute', 'Hoothoot', 'Noctowl', 'Spinarak', 'Ledyba', 'Aipom', 'Pineco', 'Heracross', 'Shuckle', 'Raikou', 'Entei', 'Suicune', 'Celebi'],
            minLevel: 10,
            maxLevel: 10,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true,
                },
            },
        }, /*
        elite4Will: {
            name: 'Elite 4 Will',
            town: true,
            gymLeader: {
                name: 'Will',
                poke: [
                    ['Xatu', 40],
                    ['Jynx', 41],
                    ['Slowbro', 41],
                    ['Exeggutor', 42],
                    ['Xatu', 42],
                ],
            },
        },
        elite4Koga: {
            name: 'Elite 4 Koga',
            town: true,
            gymLeader: {
                name: 'Koga',
                poke: [
                    ['Koffing', 37],
                    ['Koffing', 37],
                    ['Muk', 39],
                    ['Weezing', 43],
                ],
            },
        },
        elite4JohtoBruno: {
            name: 'Elite 4 Bruno Johto',
            town: true,
            gymLeader: {
                name: 'Bruno',
                poke: [
                    ['Onix', 53],
                    ['Hitmonchan', 55],
                    ['Hitmonlee', 55],
                    ['Onix', 56],
                    ['Machamp', 58],
                ],
            },
        },
        elite4Karen: {
            name: 'Elite 4 Karen',
            town: true,
            gymLeader: {
                name: 'Karen',
                poke: [
                    ['Umbreon', 42],
                    ['Vileplume', 42],
                    ['Murkrow', 44],
                    ['Gengar', 45],
                    ['Houndoom', 47],
                ],
            },
        },
        championLance: {
            name: 'Champion Lance',
            town: true,
            gymLeader: {
                name: 'Lance',
                poke: [
                    ['Gyarados', 44],
                    ['Dragonite', 47],
                    ['Aerodactyl', 46],
                    ['Charizard', 46],
                    ['Dragonite', 47],
                    ['Dragonite', 50],
                ],
            },
        }, */
    },
    Hoenn: {
        _unlock: {
            badges: {
                'Rising Badge': true,
            },
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        littlerootTown: {
            name: 'Littleroot Town',
            town: true,
        },
        hroute101: {
            name: 'Route 101',
            pokes: ['Poochyena', 'Zigzagoon', 'Wurmple'],
            minLevel: 2,
            maxLevel: 3,
            respawn: 'littlerootTown',
        },
        oldaleTown: {
            name: 'Oldale Town',
            town: true,
        },
        hroute103: {
            name: 'Route 103',
            pokes: ['Poochyena', 'Zigzagoon', 'Wingull'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'oldaleTown',
        },
        hroute102: {
            name: 'Route 102',
            pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Lotad', 'Seedot', 'Ralts', 'Surskit'],
            minLevel: 3,
            maxLevel: 4,
            respawn: 'oldaleTown',
        },
        petalburgCity: {
            name: 'Petalburg City',
            town: true,
            gym: {
                name: 'Petalburg Gym',
                gymLeader: {
                    name: 'Norman',
                    badge: 'Balance Badge',
                    poke: [
                        ['Slaking', 57],
                        ['Blissey', 57],
                        ['Kangaskhan', 55],
                        ['Tauros', 57],
                        ['Spinda', 58],
                        ['Slaking', 60],
                    ],
                },
            },
        },
        hroute104: {
            name: 'Route 104',
            pokes: ['Marill', 'Poochyena', 'Zigzagoon', 'Wurmple', 'Taillow', 'Wingull'],
            minLevel: 3,
            maxLevel: 5,
            respawn: 'petalburgCity',
        },
        petalburgWoods: {
            name: 'Petalburg Woods',
            pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Silcoon', 'Cascoon', 'Taillow', 'Shroomish', 'Slakoth'],
            minLevel: 5,
            maxLevel: 6,
            respawn: 'petalburgCity',
        },
        rustboroCity: {
            name: 'Rustboro City',
            town: true,
            gym: {
                name: 'Rustboro Gym',
                gymLeader: {
                    name: 'Roxanne',
                    badge: 'Stone Badge',
                    poke: [
                        ['Aerodactyl', 47],
                        ['Golem', 47],
                        ['Omastar', 47],
                        ['Kabutops', 50],
                        ['Steelix', 50],
                        ['Nosepass', 52],
                    ],
                },
            },
        },
        hroute116: {
            name: 'Route 116',
            pokes: ['Abra', 'Poochyena', 'Zigzagoon', 'Taillow', 'Nincada', 'Whismur', 'Skitty', 'Shedinja'],
            minLevel: 6,
            maxLevel: 8,
            respawn: 'rustboroCity',
        },
        rusturfTunnel: {
            name: 'Rusturf Tunnel',
            pokes: ['Whismur'],
            minLevel: 5,
            maxLevel: 8,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Stone Badge': true,
                },
            },
        },
        hroute105: {
            name: 'Route 105',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'petalburgCity',
            _unlock: {
                badges: {
                    'Stone Badge': true,
                },
            },
        },
        hroute106: {
            name: 'Route 106',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'petalburgCity',
            _unlock: {
                badges: {
                    'Stone Badge': true,
                },
            },
        },
        dewfordTown: {
            name: 'Dewford Town',
            town: true,
            gym: {
                name: 'Dewford Gym',
                gymLeader: {
                    name: 'Brawly',
                    badge: 'Knuckle Badge',
                    poke: [
                        ['Hitmonlee', 47],
                        ['Hitmonchan', 47],
                        ['Machamp', 47],
                        ['Medicham', 50],
                        ['Hitmontop', 50],
                        ['Hariyama', 52],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Stone Badge': true,
                },
            },
        },
        graniteCave: {
            name: 'Granite Cave',
            pokes: ['Zubat', 'Abra', 'Geodude', 'Makuhita', 'Sableye', 'Mawile', 'Aron', 'Nosepass'],
            minLevel: 6,
            maxLevel: 12,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        hroute107: {
            name: 'Route 107',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        hroute108: {
            name: 'Route 108',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        abandonedShip: {
            name: 'Abandoned Ship',
            pokes: ['Tentacool', 'Tentacruel'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        hroute109: {
            name: 'Route 109',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        slateportCity: {
            name: 'Slateport City',
            town: true,
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        hroute110: {
            name: 'Route 110',
            pokes: ['Oddish', 'Zigzagoon', 'Poochyena', 'Wingull', 'Electrike', 'Plusle', 'Minun', 'Gulpin'],
            minLevel: 12,
            maxLevel: 13,
            respawn: 'slateportCity',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        mauvilleCity: {
            name: 'Mauville City',
            town: true,
            gym: {
                name: 'Mauville Gym',
                gymLeader: {
                    name: 'Wattson',
                    badge: 'Dynamo Badge',
                    poke: [
                        ['Electabuzz', 50],
                        ['Raichu', 51],
                        ['Ampharos', 53],
                        ['Electrode', 53],
                        ['Magneton', 53],
                        ['Manectric', 55],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        newMauville: {
            name: 'New Mauville',
            pokes: ['Magnemite', 'Magneton', 'Voltorb', 'Electrode'],
            minLevel: 22,
            maxLevel: 26,
            respawn: 'slateportCity',
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        hroute117: {
            name: 'Route 117',
            pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Seedot', 'Surskit', 'Volbeat', 'Illumise', 'Roselia'],
            minLevel: 13,
            maxLevel: 14,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Knuckle Badge': true,
                },
            },
        },
        hroute111: {
            name: 'Route 111',
            pokes: ['Sandshrew', 'Trapinch', 'Cacnea', 'Baltoy'],
            minLevel: 19,
            maxLevel: 22,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        hroute112: {
            name: 'Route 112',
            pokes: ['Machop', 'Marill', 'Numel'],
            minLevel: 14,
            maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        fieryPath: {
            name: 'Fiery Path',
            pokes: ['Machop', 'Grimer', 'Koffing', 'Slugma', 'Numel', 'Torkoal'],
            minLevel: 14,
            maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        hroute113: {
            name: 'Route 113',
            pokes: ['Sandshrew', 'Slugma', 'Skarmory', 'Spinda'],
            minLevel: 14,
            maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        fallarborTown: {
            name: 'Fallarbor Town',
            town: true,
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        hroute114: {
            name: 'Route 114',
            pokes: ['Lotad', 'Lombre', 'Seedot', 'Nuzleaf', 'Surskit', 'Swablu', 'Zangoose', 'Seviper'],
            minLevel: 15,
            maxLevel: 18,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        meteorFalls: {
            name: 'Meteor Falls',
            pokes: ['Zubat', 'Golbat', 'Lunatone', 'Solrock', 'Bagon', 'Deino'],
            minLevel: 14,
            maxLevel: 40,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        hroute115: {
            name: 'Route 115',
            pokes: ['Jigglypuff', 'Taillow', 'Swellow', 'Wingull', 'Swablu'],
            minLevel: 23,
            maxLevel: 26,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        jaggedPass: {
            name: 'Jagged Pass',
            pokes: ['Machop', 'Numel', 'Spoink'],
            minLevel: 18,
            maxLevel: 22,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        lavaridgeTown: {
            name: 'Lavaridge Town',
            town: true,
            gym: {
                name: 'Lavaridge Gym',
                gymLeader: {
                    name: 'Flannery',
                    badge: 'Heat Badge',
                    poke: [
                        ['Arcanine', 55],
                        ['Magcargo', 51],
                        ['Houndoom', 53],
                        ['Rapidash', 53],
                        ['Camerupt', 53],
                        ['Torkoal', 55],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Dynamo Badge': true,
                },
            },
        },
        hroute118: {
            name: 'Route 118',
            pokes: ['Zigzagoon', 'Linoone', 'Wingull', 'Electrike', 'Manectric', 'Kecleon'],
            minLevel: 24,
            maxLevel: 27,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        hroute119: {
            name: 'Route 119',
            pokes: ['Oddish', 'Zigzagoon', 'Linoone', 'Kecleon', 'Tropius'],
            minLevel: 24,
            maxLevel: 27,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        weatherInstitute: {
            name: 'Weather Institute',
            pokes: ['Castform'],
            minLevel: 25,
            maxLevel: 25,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        fortreeCity: {
            name: 'Fortree City',
            town: true,
            gym: {
                name: 'Fortree Gym',
                gymLeader: {
                    name: 'Winona',
                    badge: 'Feather Badge',
                    poke: [
                        ['Noctowl', 53],
                        ['Tropius', 55],
                        ['Pelipper', 55],
                        ['Dragonite', 58],
                        ['Skarmory', 57],
                        ['Altaria', 60],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Balance Badge': true,
                },
            },
        },
        hroute120: {
            name: 'Route 120',
            pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Linoone', 'Seedot', 'Surskit', 'Kecleon', 'Absol'],
            minLevel: 25,
            maxLevel: 27,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hroute121: {
            name: 'Route 121',
            pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull'],
            minLevel: 25,
            maxLevel: 28,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hoennSafarZone: {
            name: 'Hoenn Safari Zone',
            pokes: ['Pikachu', 'Oddish', 'Gloom', 'Doduo', 'Dodrio', 'Rhyhorn', 'Pinsir', 'Hoothoot', 'Spinarak', 'Natu', 'Xatu', 'Mareep', 'Aipom', 'Sunkern', 'Girafarig', 'Wobbuffet', 'Pineco', 'Gligar', 'Snubbull', 'Heracross', 'Teddiursa', 'Houndour', 'Phanpy', 'Stantler', 'Miltank'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hroute122: {
            name: 'Route 122',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        myPyre: {
            name: 'Mt. Pyre',
            pokes: ['Vulpix', 'Wingull', 'Meditite', 'Duskull', 'Shuppet', 'Chimecho'],
            minLevel: 22,
            maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hroute123: {
            name: 'Route 123',
            pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull'],
            minLevel: 25,
            maxLevel: 28,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        lilycoveCity: {
            name: 'Lilycove City',
            town: true,
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hroute124: {
            name: 'Route 124',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'lilycoveCity',
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        mossdeepCity: {
            name: 'Mossdeep City',
            town: true,
            gym: {
                name: 'Mossdeep Gym',
                gymLeader: {
                    name: 'Liza & Tate',
                    badge: 'Mind Badge',
                    poke: [
                        ['Hypno', 64],
                        ['Claydol', 66],
                        ['Slowking', 66],
                        ['Xatu', 68],
                        ['Lunatone', 70],
                        ['Solrock', 70],
                    ],
                },
            },
            npc: {
                name: 'Steven\'s Home',
                event: 'beldum1',
            },
            _unlock: {
                badges: {
                    'Feather Badge': true,
                },
            },
        },
        hroute125: {
            name: 'Route 125',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        shoalCave: {
            name: 'Shoal Cave',
            pokes: ['Zubat', 'Golbat', 'Snorunt', 'Spheal'],
            minLevel: 26,
            maxLevel: 32,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        hroute126: {
            name: 'Route 126',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        hroute127: {
            name: 'Route 127',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        hroute128: {
            name: 'Route 128',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        sootopolisCity: {
            name: 'Sootopolis City',
            town: true,
            gym: {
                name: 'Sootopolis Gym',
                gymLeader: {
                    name: 'Juan',
                    badge: 'Rain Badge',
                    poke: [
                        ['Lapras', 75],
                        ['Whiscash', 75],
                        ['Politoed', 78],
                        ['Walrein', 78],
                        ['Crawdaunt', 79],
                        ['Kingdra', 80],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        hVictoryRoad: {
            name: 'Victory Road',
            pokes: ['Zubat', 'Golbat', 'Whiscash', 'Loudred', 'Makuhita', 'Hariyama', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Meditite', 'Medicham', 'Treecko', 'Mudkip', 'Torchic', 'Deoxys', 'Jirachi', 'Rayquaza'],
            minLevel: 36,
            maxLevel: 42,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute129: {
            name: 'Route 129',
            pokes: ['Tentacool', 'Wingull', 'Pelipper', 'Wailord'],
            minLevel: 5,
            maxLevel: 40,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute130: {
            name: 'Route 130',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        mirageIsland: {
            name: 'Mirage Island',
            pokes: ['Wynaut'],
            minLevel: 5,
            maxLevel: 50,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute131: {
            name: 'Route 131',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        skyPillar: {
            name: 'Sky Pillar',
            pokes: ['Golbat', 'Sableye', 'Mawile', 'Altaria', 'Claydol', 'Banette', 'Dusclops'],
            minLevel: 34,
            maxLevel: 60,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        skyPillarRoof: {
            name: 'Sky Pillar Roof',
            pokes: ['Rayquaza'],
            minLevel: 70,
            maxLevel: 70,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        pacifidlogTown: {
            name: 'Pacifidlog Town',
            town: true,
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute132: {
            name: 'Route 132',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute133: {
            name: 'Route 133',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        hroute134: {
            name: 'Route 134',
            pokes: ['Tentacool', 'Wingull', 'Pelipper'],
            minLevel: 5,
            maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        sealdedChamber: {
            name: 'Sealed Chamber',
            pokes: ['Regice', 'Regirock', 'Registeel'],
            minLevel: 40,
            maxLevel: 40,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        southernIsland: {
            name: 'Southern Island',
            pokes: ['Latios', 'Latias'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'lilycoveCity',
            _unlock: {
                badges: {
                    'Rain Badge': true,
                },
            },
        },
        caveOfOrigin: {
            name: 'Cave of Origin',
            pokes: ['Kyogre', 'Groudon'],
            minLevel: 45,
            maxLevel: 45,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        underwater: {
            name: 'Underwater',
            pokes: ['Chinchou', 'Clamperl', 'Relicanth'],
            minLevel: 20,
            maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true,
                },
            },
        },
        hOldRod: {
            name: 'Hoenn Old Rod',
            pokes: ['Tentacool', 'Goldeen', 'Magikarp', 'Azurill', 'Feebas'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'littlerootTown',
            hoennOldRod: 1,
        },
        hGoodRod: {
            name: 'Hoenn Good Rod',
            pokes: ['Tentacool', 'Goldeen', 'Magikarp', 'Carvanha', 'Wailmer', 'Barboach', 'Corphish', 'Feebas', 'Luvdisc'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'littlerootTown',
            hoennGoodRod: 1,
        },
        hSuperRod: {
            name: 'Hoenn Super Rod',
            pokes: ['Horsea', 'Staryu', 'Magikarp', 'Corsola', 'Carvanha', 'Sharpedo', 'Wailmer', 'Barboach', 'Whiscash', 'Corphish', 'Feebas', 'Luvdisc'],
            minLevel: 25,
            maxLevel: 45,
            respawn: 'littlerootTown',
            hoennSuperRod: 1,
        },
        elite4Hoenn: {
            name: 'Hoenn Pokemon League',
            town: true,
            gym: {
                name: 'Elite 4',
                gymTrainer1: {
                    name: 'Sidney',
                    poke: [
                        ['Mightyena', 46],
                        ['Cacturne', 46],
                        ['Shiftry', 48],
                        ['Sharpedo', 48],
                        ['Absol', 49],
                    ],
                },
                gymTrainer2: {
                    name: 'Phoebe',
                    poke: [
                        ['Dusclops', 58],
                        ['Banette', 59],
                        ['Banette', 59],
                        ['Sableye', 60],
                        ['Dusclops', 61],
                    ],
                },
                gymTrainer3: {
                    name: 'Glacia',
                    poke: [
                        ['Glalie', 60],
                        ['Sealeo', 60],
                        ['Sealeo', 62],
                        ['Glalie', 62],
                        ['Walrein', 63],
                    ],
                },
            },
        }, /*
        elite4Drake: {
            name: 'Elite 4 Drake',
            town: true,
            gymLeader: {
                name: 'Drake',
                poke: [
                    ['Shelgon', 62],
                    ['Altaria', 64],
                    ['Flygon', 63],
                    ['Flygon', 63],
                    ['Salamence', 65],
                ],
            },
        },
        championWallace: {
            name: 'Champion Wallace',
            town: true,
            gymLeader: {
                name: 'Wallace',
                poke: [
                    ['Wailord', 67],
                    ['Whiscash', 66],
                    ['Tentacruel', 65],
                    ['Ludicolo', 66],
                    ['Gyarados', 66],
                    ['Milotic', 68],
                ],
            },
        }, */
    },
    Sinnoh: {
        _unlock: {
            badges: {
                'Mind Badge': true,
            },
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        twinleafTown: {
            name: 'Twinleaf Town',
            town: true,
        },
        sroute201: {
            name: 'Route 201',
            pokes: ['Starly', 'Bidoof', 'Kricketot', 'Turtwig', 'Chimchar', 'Piplup'],
            minLevel: 2,
            maxLevel: 3,
            respawn: 'twinleafTown',
        },
        lakeVerity: {
            name: 'Lake Verity',
            pokes: ['Starly', 'Bidoof'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'twinleafTown',
        },
        sandgemTown: {
            name: 'Sandgem Town',
            town: true,
        },
        sroute202: {
            name: 'Route 202',
            pokes: ['Starly', 'Bidoof', 'Kricketot', 'Shinx'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'sandgemTown',
        },
        jubilifeCity: {
            name: 'Jubilife City',
            town: true,
        },
        sroute203: {
            name: 'Route 203',
            pokes: ['Zubat', 'Abra', 'Starly', 'Bidoof', 'Kricketot', 'Shinx'],
            minLevel: 4,
            maxLevel: 7,
            respawn: 'jubilifeCity',
        },
        oreburghGate: {
            name: 'Oreburgh Gate',
            pokes: ['Zubat', 'Psyduck', 'Geodude'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'jubilifeCity',
        },
        oreburghCity: {
            name: 'Oreburgh City',
            town: true,
            gym: {
                name: 'Oreburgh Gym',
                gymLeader: {
                    name: 'Roark',
                    badge: 'Coal Badge',
                    poke: [
                        ['Geodude', 12],
                        ['Onix', 12],
                        ['Cranidos', 14],
                    ],
                },
            },
        },
        oreburghMine: {
            name: 'Oreburgh Mine',
            pokes: ['Geodude', 'Zubat', 'Onix'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'oreburghCity',
        },
        sroute204: {
            name: 'Route 204',
            pokes: ['Zubat', 'Wurmple', 'Starly', 'Bidoof', 'Kricketot', 'Shinx', 'Budew'],
            minLevel: 3,
            maxLevel: 6,
            respawn: 'jubilifeCity',
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        floaromaTown: {
            name: 'Floaroma Town',
            town: true,
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        floaromaMeadow: {
            name: 'Floaroma Meadow',
            pokes: ['Combee', 'Burmy', 'Cherubi', 'Munchlax', 'Wormadam'],
            minLevel: 5,
            maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        sroute205: {
            name: 'Route 205',
            pokes: ['Hoothoot', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Bidoof', 'Kricketot', 'Budew', 'Pachirisu', 'Buizel', 'Shellos'],
            minLevel: 8,
            maxLevel: 12,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        valleyWindworks: {
            name: 'Valley Windworks',
            pokes: ['Bidoof', 'Shinx', 'Pachirisu', 'Buizel', 'Shellos', 'Drifloon'],
            minLevel: 7,
            maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        fuegoIronworks: {
            name: 'Fuego Ironworks',
            pokes: ['Magnemite', 'Magmar', 'Wingull', 'Shinx', 'Luxio', 'Pachirisu', 'Floatzel', 'Shellos', 'Gastrodon'],
            minLevel: 28,
            maxLevel: 30,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        eternaForest: {
            name: 'Eterna Forest',
            pokes: ['Gastly', 'Hoothoot', 'Murkrow', 'Misdreavus', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Bidoof', 'Kricketot', 'Budew', 'Buneary'],
            minLevel: 10,
            maxLevel: 14,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        oldChateau: {
            name: 'Old Chateau',
            pokes: ['Gastly', 'Haunter', 'Gengar'],
            minLevel: 12,
            maxLevel: 17,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        strangeTV: {
            name: 'Strange TV',
            pokes: ['Rotom', 'Rotom-heat', 'Rotom-wash', 'Rotom-frost', 'Rotom-fan', 'Rotom-mow'],
            minLevel: 15,
            maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        eternaCity: {
            name: 'Eterna City',
            town: true,
            gym: {
                name: 'Eterna Gym',
                gymLeader: {
                    name: 'Gardenia',
                    badge: 'Forest Badge',
                    poke: [
                        ['Cherubi', 19],
                        ['Turtwig', 19],
                        ['Roserade', 22],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Coal Badge': true,
                },
            },
        },
        sroute206: {
            name: 'Route 206',
            pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Gligar', 'Kricketot', 'Kricketune', 'Stunky', 'Bronzor'],
            minLevel: 14,
            maxLevel: 19,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        waywardCave: {
            name: 'Wayward Cave',
            pokes: ['Zubat', 'Geodude', 'Onix', 'Bronzor', 'Gible'],
            minLevel: 14,
            maxLevel: 20,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        sroute207: {
            name: 'Route 207',
            pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Kricketot'],
            minLevel: 5,
            maxLevel: 8,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        mtCoronet: {
            name: 'Mt. Coronet',
            pokes: ['Clefairy', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Noctowl', 'Cleffa', 'Nosepass', 'Meditite', 'Medicham', 'Absol', 'Chimecho', 'Chingling', 'Bronzor', 'Bronzong', 'Snover', 'Abomasnow'],
            minLevel: 12,
            maxLevel: 40,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        sroute208: {
            name: 'Route 208',
            pokes: ['Zubat', 'Psyduck', 'Machop', 'Ralts', 'Meditite', 'Roselia', 'Bidoof', 'Bibarel', 'Budew'],
            minLevel: 16,
            maxLevel: 20,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        hearthomeCity: {
            name: 'Hearthome City',
            town: true,
            gym: {
                name: 'Eterna Gym',
                gymLeader: {
                    name: 'Fantina',
                    badge: 'Relic Badge',
                    poke: [
                        ['Duskull', 24],
                        ['Haunter', 24],
                        ['Mismagius', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },
        },
        amitySquare: {
            name: 'Amity Square',
            pokes: ['Happiny'],
            minLevel: 1,
            maxLevel: 1,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Forest Badge': true,
                },
            },

        },
        sroute209: {
            name: 'Route 209',
            pokes: ['Zubat', 'Gastly', 'Chansey', 'Ralts', 'Roselia', 'Duskull', 'Starly', 'Staravia', 'Bibarel', 'Bonsly', 'Mime Jr.'],
            minLevel: 16,
            maxLevel: 19,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        hallowedTower: {
            name: 'Hallowed Tower',
            pokes: ['Spiritomb'],
            minLevel: 25,
            maxLevel: 25,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        lostTower: {
            name: 'Lost Tower',
            pokes: ['Zubat', 'Gastly', 'Murkrow', 'Misdreavus', 'Duskull', 'Golbat'],
            minLevel: 16,
            maxLevel: 23,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        solaceonTown: {
            name: 'Solaceon Town',
            town: true,
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        solaceonRuins: {
            name: 'Solaceon Ruins',
            pokes: ['Unown A'],
            minLevel: 14,
            maxLevel: 30,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        sroute210: {
            name: 'Route 210',
            pokes: ['Psyduck', 'Machop', 'Machoke', 'Geodude', 'Ponyta', 'Chansey', 'Scyther', 'Hoothoot', 'Noctowl', 'Meditite', 'Roselia', 'Swablu', 'Staravia', 'Bibarel', 'Kricketune', 'Bonsly', 'Mime Jr.'],
            minLevel: 18,
            maxLevel: 30,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        sroute215: {
            name: 'Route 215',
            pokes: ['Abra', 'Kadabra', 'Geodude', 'Ponyta', 'Lickitung', 'Scyther', 'Marill', 'Staravia', 'Kricketune'],
            minLevel: 19,
            maxLevel: 22,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        veilstoneCity: {
            name: 'Veilstone City',
            town: true,
            gym: {
                name: 'Veilstone Gym',
                gymLeader: {
                    name: 'Maylene',
                    badge: 'Cobble Badge',
                    poke: [
                        ['Meditite', 24],
                        ['Machoke', 24],
                        ['Lucario', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Relic Badge': true,
                },
            },
        },
        sroute214: {
            name: 'Route 214',
            pokes: ['Zubat', 'Geodude', 'Graveler', 'Ponyta', 'Rhyhorn', 'Sudowoodo', 'Girafarig', 'Houndour', 'Kricketune', 'Stunky'],
            minLevel: 21,
            maxLevel: 24,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        ruinManiacCave: {
            name: 'Ruin Maniac Cave',
            pokes: ['Hippopotas'],
            minLevel: 22,
            maxLevel: 23,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        valorLakefront: {
            name: 'Valor Lakefront',
            pokes: ['Geodude', 'Graveler', 'Girafarig', 'Houndour', 'Staravia', 'Bibarel', 'Kricketune'],
            minLevel: 20,
            maxLevel: 27,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        sroute213: {
            name: 'Route 213',
            pokes: ['Wingull', 'Buizel', 'Floatzel', 'Shellos', 'Chatot'],
            minLevel: 20,
            maxLevel: 26,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        sendoffSpring: {
            name: 'Sendoff Spring',
            pokes: ['Bibarel', 'Staravia', 'Chingling'],
            minLevel: 37,
            maxLevel: 54,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        turnbackCave: {
            name: 'Turnback Cave',
            pokes: ['Bronzong', 'Bronzor', 'Chingling'],
            minLevel: 45,
            maxLevel: 65,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        pastoriaCity: {
            name: 'Pastoria City',
            town: true,
            gym: {
                name: 'Pastoria Gym',
                gymLeader: {
                    name: 'Crasher Wake',
                    badge: 'Fen Badge',
                    poke: [
                        ['Gyarados', 24],
                        ['Quagsire', 24],
                        ['Floatzel', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        greatMarsh: {
            name: 'Great Marsh',
            pokes: ['Paras', 'Psyduck', 'Golduck', 'Exeggcute', 'Tangela', 'Kangaskhan', 'Hoothoot', 'Noctowl', 'Marill', 'Yanma', 'Wooper', 'Quagsire', 'Shroomish', 'Azurill', 'Gulpin', 'Roselia', 'Kecleon', 'Tropius', 'Starly', 'Staravia', 'Bidoof', 'Bibarel', 'Budew', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine'],
            minLevel: 20,
            maxLevel: 30,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true,
                },
            },
        },
        sroute212: {
            name: 'Route 212',
            pokes: ['Marill', 'Wooper', 'Quagsire', 'Ralts', 'Kirlia', 'Roselia', 'Starly', 'Staravia', 'Bibarel', 'Kricketune', 'Budew', 'Buizel', 'Shellos', 'Croagunk'],
            minLevel: 16,
            maxLevel: 24,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        trophyGarden: {
            name: 'Trophy Garden',
            pokes: ['Pikachu', 'Clefairy', 'Jigglypuff', 'Meowth', 'Chansey', 'Ditto', 'Eevee', 'Porygon', 'Pichu', 'Cleffa', 'Igglybuff', 'Marill', 'Azurill', 'Plusle', 'Minun', 'Roselia', 'Castform', 'Staravia', 'Kricketune', 'Bonsly', 'Mime Jr.', 'Happiny'],
            minLevel: 16,
            maxLevel: 18,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        celesticTown: {
            name: 'Celestic Town',
            town: true,
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute211: {
            name: 'Route 211',
            pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Hoothoot', 'Meditite', 'Bidoof', 'Chingling', 'Bronzor'],
            minLevel: 27,
            maxLevel: 30,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute218: {
            name: 'Route 218',
            pokes: ['Mr. Mime', 'Wingull', 'Floatzel', 'Shellos', 'Gastrodon', 'Glameow', 'Chatot'],
            minLevel: 28,
            maxLevel: 31,
            respawn: 'jubilifeCity',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute219: {
            name: 'Route 219',
            pokes: ['Tentacool', 'Tentacruel', 'Wingull', 'Pelipper'],
            minLevel: 20,
            maxLevel: 40,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute220: {
            name: 'Route 220',
            pokes: ['Tentacool', 'Tentacruel', 'Wingull', 'Pelipper'],
            minLevel: 20,
            maxLevel: 40,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute221: {
            name: 'Route 221',
            pokes: ['Sudowoodo', 'Girafarig', 'Wingull', 'Roselia', 'Floatzel', 'Shellos', 'Gastrodon', 'Stunky', 'Skuntank'],
            minLevel: 28,
            maxLevel: 31,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        canalaveCity: {
            name: 'Canalave City',
            town: true,
            gym: {
                name: 'Canalave Gym',
                gymLeader: {
                    name: 'Byron',
                    badge: 'Mine Badge',
                    poke: [
                        ['Magneton', 24],
                        ['Steelix', 24],
                        ['Bastiodon', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        ironIsland: {
            name: 'Iron Island',
            pokes: ['Zubat', 'Golbat', 'Geodude', 'Graveler', 'Onix', 'Steelix', 'Riolu'],
            minLevel: 1,
            maxLevel: 1,
            respawn: 'canalaveCity',
            _unlock: {
                badges: {
                    'Fen Badge': true,
                },
            },
        },
        sroute216: {
            name: 'Route 216',
            pokes: ['Zubat', 'Machoke', 'Graveler', 'Noctowl', 'Sneasel', 'Meditite', 'Snorunt', 'Snover'],
            minLevel: 32,
            maxLevel: 35,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true,
                },
            },
        },
        sroute217: {
            name: 'Route 217',
            pokes: ['Zubat', 'Machoke', 'Noctowl', 'Sneasel', 'Swinub', 'Meditite', 'Medicham', 'Snorunt', 'Snover'],
            minLevel: 32,
            maxLevel: 35,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true,
                },
            },
        },
        lakeAcuity: {
            name: 'Lake Acuity',
            pokes: ['Psyduck', 'Golduck', 'Noctowl', 'Sneasel', 'Snorunt', 'Bibarel', 'Chingling', 'Snover'],
            minLevel: 34,
            maxLevel: 41,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true,
                },
            },
        },
        snowpointCity: {
            name: 'Snowpoint City',
            town: true,
            gym: {
                name: 'Snowpoint Gym',
                gymLeader: {
                    name: 'Candice',
                    badge: 'Icicle Badge',
                    poke: [
                        ['Sneasel', 24],
                        ['Piloswine', 24],
                        ['Abomasnow', 26],
                        ['Froslass', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Mine Badge': true,
                },
            },
        },
        snowpointTemple: {
            name: 'Snowpoint Temple',
            pokes: ['Golbat', 'Graveler', 'Onix', 'Jynx', 'Steelix', 'Sneasel', 'Smoochum', 'Regigigas'],
            minLevel: 47,
            maxLevel: 56,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute222: {
            name: 'Route 222',
            pokes: ['Magnemite', 'Magneton', 'Mr. Mime', 'Electabuzz', 'Wingull', 'Pelipper', 'Luxio', 'Floatzel', 'Gastrodon', 'Glameow', 'Purugly', 'Chatot'],
            minLevel: 38,
            maxLevel: 42,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        sunyshoreCity: {
            name: 'Sunyshore City',
            town: true,
            gym: {
                name: 'Sunyshore Gym',
                gymLeader: {
                    name: 'Volkner',
                    badge: 'Beacon Badge',
                    poke: [
                        ['Jolteon', 24],
                        ['Raichu', 24],
                        ['Luxray', 26],
                        ['Electivire', 26],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        sroute223: {
            name: 'Route 223',
            pokes: ['Tentacruel', 'Pelipper', 'Mantyke'],
            minLevel: 30,
            maxLevel: 50,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sVictoryRoad: {
            name: 'Victory Road',
            pokes: ['Golbat', 'Kadabra', 'Machoke', 'Graveler', 'Magneton', 'Dewgong', 'Onix', 'Rhyhorn', 'Azumarill', 'Steelix', 'Medicham', 'Floatzel', 'Gabite'],
            minLevel: 40,
            maxLevel: 46,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute224: {
            name: 'Route 224',
            pokes: ['Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Beautifly', 'Pelipper', 'Roselia', 'Buizel', 'Floatzel', 'Shellos', 'Gastrodon', 'Chatot'],
            minLevel: 49,
            maxLevel: 52,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        fightArea: {
            name: 'Fight Area',
            pokes: ['Gallade', 'Froslass'],
            minLevel: 30,
            maxLevel: 30,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute225: {
            name: 'Route 225',
            pokes: ['Fearow', 'Raticate', 'Banette', 'Roselia', 'Rattata', 'Spearow', 'Machoke', 'Graveler'],
            minLevel: 47,
            maxLevel: 51,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute226: {
            name: 'Route 226',
            pokes: ['Fearow', 'Raticate', 'Golduck', 'Machoke', 'Rattata', 'Spearow', 'Graveler', 'Wingull', 'Banette'],
            minLevel: 47,
            maxLevel: 53,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute227: {
            name: 'Route 227',
            pokes: ['Rhydon', 'Camerupt', 'Fearow', 'Weezing', 'Golbat', 'Banette', 'Graveler', 'Rhyhorn', 'Skarmory', 'Numel'],
            minLevel: 24,
            maxLevel: 56,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        starkMountain: {
            name: 'Stark Mountain',
            pokes: ['Magcargo', 'Graveler', 'Golbat', 'Machoke', 'Weezing', 'Geodude', 'Onix', 'Slugma', 'Camerupt', 'Heatran'],
            minLevel: 27,
            maxLevel: 58,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute228: {
            name: 'Route 228',
            pokes: ['Cacturne', 'Dugtrio', 'Rhydon', 'Diglett', 'Cacnea', 'Beldum'],
            minLevel: 23,
            maxLevel: 54,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute229: {
            name: 'Route 229',
            pokes: ['Gloom', 'Weepinbell', 'Ledian', 'Illumise', 'Roselia', 'Oddish', 'Bellsprout', 'Scyther', 'Volbeat', 'Pinsir', 'Pidgey', 'Beautifly', 'Dustox'],
            minLevel: 20,
            maxLevel: 52,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sroute230: {
            name: 'Route 230',
            pokes: ['Gloom', 'Weepinbell', 'Floatzel', 'Oddish', 'Bellsprout', 'Golduck', 'Beautifly', 'Gastrodon', 'Dustox', 'Wingull'],
            minLevel: 18,
            maxLevel: 51,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        lakes: {
            name: 'Lakes',
            pokes: ['Uxie', 'Azelf', 'Mesprit'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'twinleafTown',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        spearPillar: {
            name: 'Spear Pillar',
            pokes: ['Dialga', 'Palkia'],
            minLevel: 47,
            maxLevel: 47,
            respawn: 'celesticTown',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        distortionWorld: {
            name: 'Distortion World',
            pokes: ['Giratina'],
            minLevel: 47,
            maxLevel: 47,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true,
                },
            },
        },
        mysteriousSea: {
            name: 'Mysterious Sea',
            pokes: ['Phione', 'Manaphy'],
            minLevel: 1,
            maxLevel: 1,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        moonIsland: {
            name: 'Moon Island',
            pokes: ['Cresselia', 'Darkrai'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'canalaveCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        flowerParadise: {
            name: 'Flower Paradise',
            pokes: ['Shaymin'],
            minLevel: 30,
            maxLevel: 30,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        hallofOrigin: {
            name: 'Hall of Origin',
            pokes: ['Arceus'],
            minLevel: 80,
            maxLevel: 80,
            respawn: 'celesticTown',
            _unlock: {
                badges: {
                    'Beacon Badge': true,
                },
            },
        },
        sOldRod: {
            name: 'Sinnoh Old Rod',
            pokes: ['Finneon'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'twinleafTown',
            sinnohOldRod: 1,
        },
        sGoodRod: {
            name: 'Sinnoh Good Rod',
            pokes: ['Mantyke', 'Buizel'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'twinleafTown',
            sinnohGoodRod: 1,
        },
        sSuperRod: {
            name: 'Sinnoh Super Rod',
            pokes: ['Lumineon', 'Mantyke', 'Floatzel'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'twinleafTown',
            sinnohSuperRod: 1,
        },
        elite4Sinnoh: {
            name: 'Sinnoh Pokemon League',
            town: true,
            gym: {
                name: 'Elite 4',
                gymTrainer1: {
                    name: 'Aaron',
                    poke: [
                        ['Dustox', 53],
                        ['Vespiquen', 54],
                        ['Heracross', 54],
                        ['Beautifly', 53],
                        ['Drapion', 57],
                    ],
                },
                gymTrainer2: {
                    name: 'Bertha',
                    poke: [
                        ['Quagsire', 55],
                        ['Sudowoodo', 56],
                        ['Whiscash', 55],
                        ['Hippowdon', 59],
                        ['Golem', 56],
                    ],
                },
                gymTrainer3: {
                    name: 'Flint',
                    poke: [
                        ['Houndoom', 58],
                        ['Flareon', 57],
                        ['Rapidash', 53],
                        ['Infernape', 55],
                        ['Magmortar', 57],
                    ],
                },
                gymLeader: {
                    name: 'Lucian',
                    poke: [
                        ['Mr. Mime', 53],
                        ['Espeon', 55],
                        ['Bronzong', 54],
                        ['Alakazam', 56],
                        ['Gallade', 59],
                    ],
                },
            },
        }, /*
        championCynthia: {
            name: 'Champion Cynthia',
            town: true,
            gymLeader: {
                name: 'Cynthia',
                poke: [
                    ['Spiritomb', 61],
                    ['Gastrodon', 60],
                    ['Roserade', 60],
                    ['Lucario', 63],
                    ['Milotic', 63],
                    ['Garchomp', 66],
                ],
            },
        }, */
    }, /*
    Unova: {
        _unlock: {
            badges: {
                'Beacon Badge': true,
            },
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        aspertiaCity: {
            name: 'Aspertia City',
            town: true,
            prof: {
                name: 'Prof. Juniper',
                badge: null,
                poke: [
                    ['Snivy', 15],
                    ['Tepig', 15],
                    ['Oshawott', 15],
                ],
            },
            gymLeader: {
                name: 'Cheren',
                badge: 'Basic Badge',
                poke: [
                    ['Patrat', 11],
                    ['Lillipup', 13],
                ],
            },
        },
        route105: {
            name: 'Route 19',
            pokes: ['Patrat', 'Purrloin'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'aspertiaCity',
        },
        floccesyTown: {
            name: 'Floccesy Town',
            town: true,
        },
        route106: {
            name: 'Route 20',
            pokes: ['Pidove', 'Sunkern', 'Patrat', 'Purrloin', 'Sewaddle', 'Snivy', 'Oshawott', 'Tepig'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'floccesyTown',
        },
        special103: {
            name: 'Floccesy Ranch',
            pokes: ['Azurill', 'Mareep', 'Psyduck', 'Riolu', 'Lillipup', 'Pidove', 'Patrat'],
            minLevel: 4,
            maxLevel: 7,
            respawn: 'floccesyTown',
        },
        virbankCity: {
            name: 'Virbank City',
            town: true,
            gymLeader: {
                name: 'Roxie',
                badge: 'Toxic Badge',
                poke: [
                    ['Koffing', 16],
                    ['Whirlipede', 18],
                ],
            },
            _unlock: {
                badges: {
                    'Basic Badge': true,
                },
            },
        },
        special104: {
            name: 'Virbank Complex',
            pokes: ['Magby', 'Magnemite', 'Growlithe', 'Elekid', 'Koffing', 'Patrat', 'Pidove'],
            minLevel: 10,
            maxLevel: 14,
            respawn: 'virbankCity',
            _unlock: {
                badges: {
                    'Basic Badge': true,
                },
            },
        },
        casteliaCity: {
            name: 'Castelia City',
            town: true,
            gymLeader: {
                name: 'Burgh',
                badge: 'Insect Badge',
                poke: [
                    ['Swadloon', 22],
                    ['Dwebble', 22],
                    ['Leavanny', 24],
                ],
            },
            _unlock: {
                badges: {
                    'Toxic Badge': true,
                },
            },
        },
        special105: {
            name: 'Castelia City',
            pokes: ['Cottonee', 'Pidove', 'Petilil', 'Skitty', 'Rattata', 'Buneary', 'Eevee'],
            minLevel: 15,
            maxLevel: 18,
            respawn: 'casteliaCity',
            _unlock: {
                badges: {
                    'Toxic Badge': true,
                },
            },
        },
        special106: {
            name: 'Castelia Sewers',
            pokes: ['Rattata', 'Zubat', 'Grimer'],
            minLevel: 14,
            maxLevel: 17,
            respawn: 'casteliaCity',
            _unlock: {
                badges: {
                    'Toxic Badge': true,
                },
            },
        },
        route107: {
            name: 'Route 4',
            pokes: ['Sandile', 'Darumaka', 'Trubbish', 'Scraggy', 'Minccino'],
            minLevel: 14,
            maxLevel: 17,
            respawn: 'casteliaCity',
            _unlock: {
                badges: {
                    'Insect Badge': true,
                },
            },
        },
        special107: {
            name: 'Desert Resort',
            pokes: ['Sandile', 'Darumaka', 'Maractus', 'Sigilyph', 'Dwebble', 'Sandshrew', 'Trapinch'],
            minLevel: 18,
            maxLevel: 21,
            respawn: 'casteliaCity',
            _unlock: {
                badges: {
                    'Insect Badge': true,
                },
            },
        },
        special108: {
            name: 'Relic Castle',
            pokes: ['Sandile', 'Yamask', 'Sandshrew'],
            minLevel: 18,
            maxLevel: 21,
            respawn: 'casteliaCity',
            _unlock: {
                badges: {
                    'Insect Badge': true,
                },
            },
        },
        nimbasaCity: {
            name: 'Nimbasa City',
            town: true,
            gymLeader: {
                name: 'Elesa',
                badge: 'Bolt Badge',
                poke: [
                    ['Emolga', 28],
                    ['Flaaffy', 28],
                    ['Zebstrika', 30],
                ],
            },
        },
        route118: {
            name: 'Route 16',
            pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis'],
            minLevel: 21,
            maxLevel: 24,
            respawn: 'nimbasaCity',
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        special125: {
            name: 'Lostlorn Forest',
            pokes: ['Cottonee', 'Swadloon', 'Venipede', 'Petilil', 'Roselia', 'Combee', 'Heracross', 'Pinsir'],
            minLevel: 21,
            maxLevel: 24,
            respawn: 'nimbasaCity',
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        route108: {
            name: 'Route 5',
            pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis', 'Blitzle'],
            minLevel: 21,
            maxLevel: 24,
            respawn: 'nimbasaCity',
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        special109: {
            name: 'Driftveil Drawbridge',
            pokes: ['Ducklett'],
            minLevel: 22,
            maxLevel: 25,
            respawn: 'nimbasaCity',
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        driftveilCity: {
            name: 'Driftveil City',
            town: true,
            gymLeader: {
                name: 'Clay',
                badge: 'Quake Badge',
                poke: [
                    ['Krokorok', 31],
                    ['Sandslash', 31],
                    ['Excadrill', 33],
                ],
            },
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        special134: {
            name: 'Just an Illusion',
            pokes: ['Zorua'],
            minLevel: 25,
            maxLevel: 25,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Bolt Badge': true,
                },
            },
        },
        special143: {
            name: 'Relic Passage',
            pokes: ['Boldore', 'Woobat', 'Gurdurr', 'Raticate', 'Onix', 'Drilbur', 'Roggenrola', 'Timburr', 'Rattata'],
            minLevel: 16,
            maxLevel: 30,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special144: {
            name: 'Relic Castle',
            pokes: ['Yamask', 'Sandile', 'Sandslash', 'Krokorok', 'Baltoy'],
            minLevel: 27,
            maxLevel: 30,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special135: {
            name: 'Relic Castle (Maze End)',
            pokes: ['Larvesta', 'Volcarona'],
            minLevel: 65,
            maxLevel: 65,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        route109: {
            name: 'Route 6',
            pokes: ['Deerling', 'Karrablast', 'Tranquill', 'Foongus', 'Swadloon', 'Shelmet', 'Marill', 'Vanillite'],
            minLevel: 23,
            maxLevel: 26,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special110: {
            name: 'Mistralton Cave',
            pokes: ['Aron', 'Boldore', 'Woobat', 'Axew'],
            minLevel: 27,
            maxLevel: 31,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special111: {
            name: 'Chargestone Cave',
            pokes: ['Joltik', 'Klink', 'Ferroseed', 'Nosepass', 'Boldore', 'Tynamo', 'Drilbur'],
            minLevel: 24,
            maxLevel: 28,
            respawn: 'driftveilCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        misaltronCity: {
            name: 'Misaltron City',
            town: true,
            gymLeader: {
                name: 'Skyla',
                badge: 'Jet Badge',
                poke: [
                    ['Swoobat', 37],
                    ['Skarmory', 37],
                    ['Swanna', 39],
                ],
            },
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        route110: {
            name: 'Route 7',
            pokes: ['Cubchoo', 'Deerling', 'Zebstrika', 'Watchog', 'Tranquill', 'Foongus', 'Zangoose', 'Seviper'],
            minLevel: 30,
            maxLevel: 33,
            respawn: 'misaltronCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special115: {
            name: 'Celestial Tower',
            pokes: ['Golbat', 'Litwick', 'Elgyem'],
            minLevel: 30,
            maxLevel: 33,
            respawn: 'misaltronCity',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special116: {
            name: 'Twist Mountain',
            pokes: ['Onix', 'Boldore', 'Gurdurr', 'Heatmor', 'Durant', 'Woobat', 'Beartic', 'Cryogonal', 'Excadrill', 'Steelix'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'misaltronCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        lentimasTown: {
            name: 'Lentimas Town',
            town: true,
        },
        special113: {
            name: 'Strange House',
            pokes: ['Gothita', 'Gothorita', 'Solosis', 'Duosion', 'Litwick', 'Raticate', 'Golbat', 'Banette'],
            minLevel: 31,
            maxLevel: 34,
            respawn: 'lentimasTown',
            _unlock: {
                badges: {
                    'Quake Badge': true,
                },
            },
        },
        special112: {
            name: 'Reversal Mountain',
            pokes: ['Skorupi', 'Spoink', 'Drifblim', 'Trapinch', 'Grumpig', 'Skarmory', 'Numel', 'Camerupt', 'Woobat', 'Boldore'],
            minLevel: 32,
            maxLevel: 38,
            respawn: 'lentimasTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        undellaTown: {
            name: 'Undella Town',
            town: true,
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        special123: {
            name: 'Undella Town',
            pokes: ['Frillish', 'Basculin', 'Staryu'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'undellaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        special126: {
            name: 'Undella Bay',
            pokes: ['Mantyke', 'Remoraid', 'Spheal', 'Frillish'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'undellaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        route115: {
            name: 'Route 13',
            pokes: ['Tangela', 'Pelipper', 'Drifblim', 'Absol', 'Lunatone', 'Solrock', 'Frillish', 'Staryu', 'Basculin'],
            minLevel: 34,
            maxLevel: 37,
            respawn: 'undellaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        special122: {
            name: 'Giant Chasm',
            pokes: ['Tangela', 'Pelipper', 'Clefairy', 'Lunatone', 'Solrock', 'Delibird', 'Piloswine', 'Seel', 'Sneasel', 'Ditto', 'Metang', 'Vanillish', 'Excadrill', 'Basculin'],
            minLevel: 35,
            maxLevel: 52,
            respawn: 'undellaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special140: {
            name: 'Giant Chasm (Deep Cave)',
            pokes: ['Kyurem'],
            minLevel: 70,
            maxLevel: 70,
            respawn: 'undellaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        lacunosaTown: {
            name: 'Lacunosa Town',
            town: true,
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route114: {
            name: 'Route 12',
            pokes: ['Roselia', 'Combee', 'Heracross', 'Pinsir', 'Tranquill', 'Sewaddle'],
            minLevel: 39,
            maxLevel: 42,
            respawn: 'lacunosaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        special121: {
            name: 'Village Bridge',
            pokes: ['Golduck', 'Marill', 'Zangoose', 'Seviper', 'Basculin'],
            minLevel: 36,
            maxLevel: 39,
            respawn: 'lacunosaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        route113: {
            name: 'Route 11',
            pokes: ['Golduck', 'Gligar', 'Marill', 'Zangoose', 'Seviper', 'Karrablast', 'Shelmet', 'Amoonguss', 'Basculin', 'Buizel'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'lacunosaTown',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        opelucidCity: {
            name: 'Opelucid City',
            town: true,
            gymLeader: {
                name: 'Drayden',
                badge: 'Legend Badge',
                poke: [
                    ['Druddigon', 46],
                    ['Flygon', 46],
                    ['Haxorus', 48],
                ],
            },
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        route112: {
            name: 'Route 9',
            pokes: ['Gothorita', 'Minccino', 'Garbodor', 'Pawniard', 'Liepard', 'Duosion', 'Muk'],
            minLevel: 37,
            maxLevel: 39,
            respawn: 'opelucidCity',
            _unlock: {
                badges: {
                    'Jet Badge': true,
                },
            },
        },
        special145: {
            name: 'Humilau City',
            pokes: ['Frillish', 'Staryu', 'Basculin'],
            minLevel: 30,
            maxLevel: 45,
            _unlock: {
                badges: {
                    'Legend Badge': true,
                },
            },
            respawn: 'humilauCity',
        },
        humilauCity: {
            name: 'Humilau City',
            town: true,
            gymLeader: {
                name: 'Marlon',
                badge: 'Wave Badge',
                poke: [
                    ['Carracosta', 49],
                    ['Wailord', 49],
                    ['Jellicent', 51],
                ],
            },
            _unlock: {
                badges: {
                    'Legend Badge': true,
                },
            },
        },
        route120: {
            name: 'Route 22',
            pokes: ['Mienfoo', 'Amoonguss', 'Golduck', 'Marill', 'Pelipper', 'Lunatone', 'Solrock', 'Delibird', 'Basculin'],
            minLevel: 15,
            maxLevel: 42,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route119: {
            name: 'Route 21',
            pokes: ['Mantyke', 'Remoraid', 'Frillish'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special127: {
            name: 'Seaside Cave',
            pokes: ['Woobat', 'Boldore', 'Tynamo', 'Seel', 'Golduck', 'Frillish'],
            minLevel: 34,
            maxLevel: 37,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route121: {
            name: 'Route 23',
            pokes: ['Bouffalant', 'Sawk', 'Mienfoo', 'Amoonguss', 'Vullaby', 'Rufflet', 'Throh', 'Gligar', 'Golduck', 'Basculin', 'Buizel'],
            minLevel: 47,
            maxLevel: 51,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special120: {
            name: 'Victory Road',
            pokes: ['Golurk', 'Banette', 'Basculin', 'Marill', 'Cottonee', 'Petilil', 'Tranquill', 'Roselia', 'Altaria', 'Buizel', 'Boldore', 'Onix', 'Druddigon', 'Zweilous', 'Gurdurr', 'Throh', 'Excadrill', 'Deino'],
            minLevel: 35,
            maxLevel: 50,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special146: {
            name: 'Clay Tunnel',
            pokes: ['Boldore', 'Durant', 'Nosepass', 'Lairon', 'Woobat', 'Onix', 'Excadrill', 'Steelix', 'Basculin'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route116: {
            name: 'Route 14',
            pokes: ['Golduck', 'Swablu', 'Mienfoo', 'Drifblim', 'Absol', 'Altaria', 'Basculin', 'Buizel'],
            minLevel: 34,
            maxLevel: 37,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special124: {
            name: 'Abundant Shrine',
            town: true,
            npc: {
                name: 'Shrine\'s Old Man',
                event: 'abundantOldMan',
            },
        },
        route117: {
            name: 'Route 15',
            pokes: ['Sandslash', 'Gligar', 'Pupitar', 'Scrafty', 'Throh', 'Sawk'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special160: {
            name: 'Marvelous Bridge',
            pokes: ['Swanna', 'Cresselia'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special139: {
            name: 'Castle of N',
            pokes: ['Reshiram', 'Zekrom'],
            minLevel: 70,
            maxLevel: 70,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route111: {
            name: 'Route 8',
            pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast', 'Croagunk'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special119: {
            name: 'Moor of Icirrus',
            pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast', 'Croagunk'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        icirrusCity: {
            name: 'Icirrus City',
            town: true,
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special117: {
            name: 'Icirrus City',
            pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast', 'Croagunk'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'icirrusCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special118: {
            name: 'Dragonspiral Tower',
            pokes: ['Sawsbuck', 'Vanillish', 'Mienshao', 'Beartic', 'Druddigon', 'Golurk', 'Tranquill', 'Basculin'],
            minLevel: 55,
            maxLevel: 66,
            respawn: 'icirrusCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special150: {
            name: 'Pinwheel Forest',
            pokes: ['Gurdurr', 'Palpitoad', 'Throh', 'Sawk', 'Yanma', 'Toxicroak', 'Basculin', 'Marill', 'Cottonee', 'Swadloon', 'Petilil', 'Whirlipede', 'Pansage', 'Pansear', 'Panpour', 'Vigoroth'],
            minLevel: 54,
            maxLevel: 57,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        nacreneCity: {
            name: 'Nacrene City',
            town: true,
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special128: {
            name: 'Nacrene City',
            pokes: ['Tirtouga', 'Archen'],
            minLevel: 25,
            maxLevel: 25,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route122: {
            name: 'Route 3',
            pokes: ['Tranquill', 'Watchog', 'Zebstrika', 'Yanma', 'Herdier', 'Purrloin', 'Basculin', 'Corphish'],
            minLevel: 47,
            maxLevel: 51,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special129: {
            name: 'Wellspring Cave',
            pokes: ['Boldore', 'Woobat', 'Basculin'],
            minLevel: 55,
            maxLevel: 58,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        striatonCity: {
            name: 'Striaton City',
            town: true,
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special114: {
            name: 'Nature Preserve',
            pokes: ['Nuzleaf', 'Altaria', 'Golduck', 'Noctowl', 'Girafarig', 'Kecleon', 'Fraxure', 'Basculin', 'Buizel'],
            minLevel: 40,
            maxLevel: 60,
            respawn: 'striatonCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special130: {
            name: 'Dreamyard',
            pokes: ['Watchog', 'Liepard', 'Munna', 'Raticate', 'Jigglypuff', 'Golbat'],
            minLevel: 56,
            maxLevel: 59,
            respawn: 'striatonCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route123: {
            name: 'Route 2',
            pokes: ['Watchog', 'Herdier', 'Liepard', 'Jigglypuff', 'Lickitung'],
            minLevel: 56,
            maxLevel: 59,
            respawn: 'humilauCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        accumulaTown: {
            name: 'Accumula Town',
            town: true,
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route124: {
            name: 'Route 1',
            pokes: ['Herdier', 'Watchog', 'Jigglypuff'],
            minLevel: 56,
            maxLevel: 59,
            respawn: 'accumulaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route125: {
            name: 'Route 17',
            pokes: ['Frillish'],
            minLevel: 45,
            maxLevel: 60,
            respawn: 'accumulaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        route126: {
            name: 'Route 18',
            pokes: ['Scrafty', 'Crustle', 'Sawk', 'Throh', 'Tropius', 'Carnivine', 'Watchog'],
            minLevel: 57,
            maxLevel: 59,
            respawn: 'accumulaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special131: {
            name: 'P2 Laboratory',
            pokes: ['Watchog', 'Herdier', 'Klang', 'Scrafty', 'Magneton', 'Weezing'],
            minLevel: 56,
            maxLevel: 59,
            respawn: 'accumulaTown',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special132: {
            name: 'Shaking Spots',
            pokes: ['Audino', 'Drilbur', 'Emolga'],
            minLevel: 10,
            maxLevel: 20,
            respawn: 'aspertiaCity',
        },
        special136: {
            name: 'Liberty Garden',
            pokes: ['Victini'],
            minLevel: 15,
            maxLevel: 15,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special137: {
            name: 'Pledge Grove',
            pokes: ['Keldeo', 'Cobalion', 'Terrakion', 'Virizion'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special138: {
            name: 'Weather Guys',
            pokes: ['Tornadus', 'Thundurus', 'Landorus'],
            minLevel: 70,
            maxLevel: 70,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special141: {
            name: 'Serene Grace',
            pokes: ['Meloetta'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        special142: {
            name: 'Not Kabutops',
            pokes: ['Genesect'],
            minLevel: 15,
            maxLevel: 15,
            respawn: 'nacreneCity',
            _unlock: {
                badges: {
                    'Wave Badge': true,
                },
            },
        },
        uSuperRod: {
            name: 'Unova Super Rod',
            pokes: ['Alomomola', 'Tympole'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'aspertiaCity',
            unovaSuperRod: 1,
        },
        elite4Shauntal: {
            name: 'Elite 4 Shauntal',
            town: true,
            gymLeader: {
                name: 'Shauntal',
                poke: [
                    ['Cofagrigus', 72],
                    ['Mismagius', 72],
                    ['Froslass', 72],
                    ['Drifblim', 72],
                    ['Golurk', 72],
                    ['Chandelure', 74],
                ],
            },
        },
        elite4Grimsley: {
            name: 'Elite 4 Grimsley',
            town: true,
            gymLeader: {
                name: 'Grimsley',
                poke: [
                    ['Liepard', 77],
                    ['Honchkrow', 77],
                    ['Scrafty', 77],
                    ['Houndoom', 77],
                    ['Krookodile', 77],
                    ['Bisharp', 79],
                ],
            },
        },
        elite4Caitlin: {
            name: 'Elite 4 Caitlin',
            town: true,
            gymLeader: {
                name: 'Caitlin',
                poke: [
                    ['Musharna', 72],
                    ['Sigilyph', 72],
                    ['Gothitelle', 72],
                    ['Gallade', 72],
                    ['Reuniclus', 72],
                    ['Metagross', 74],
                ],
            },
        },
        elite4Marshal: {
            name: 'Elite 4 Marshal',
            town: true,
            gymLeader: {
                name: 'Marshal',
                poke: [
                    ['Throh', 72],
                    ['Sawk', 72],
                    ['Medicham', 72],
                    ['Lucario', 72],
                    ['Mienshao', 72],
                    ['Conkeldurr', 74],
                ],
            },
        },
        championIris: {
            name: 'Champion Iris',
            town: true,
            gymLeader: {
                name: 'Iris',
                poke: [
                    ['Hydreigon', 87],
                    ['Druddigon', 87],
                    ['Aggron', 87],
                    ['Archeops', 87],
                    ['Lapras', 87],
                    ['Haxorus', 89],
                ],
            },
        },
    },
    Kalos: {
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        vanivilleTown: {
            name: 'Vaniville Town',
            town: true,
        },
        aquacordeTown: {
            name: 'Aquacorde Town',
            town: true,
            prof: {
                name: 'Prof. Sycamore',
                badge: null,
                poke: [
                    ['Chespin', 15],
                    ['Fennekin', 15],
                    ['Froakie', 15],
                ],
            },
        },
        kalosroute2: {
            name: 'Route 2',
            pokes: ['Caterpie', 'Weedle', 'Pidgey', 'Zigzagoon', 'Fletchling', 'Bunnelby', 'Scatterbug', 'Froakie', 'Fennekin', 'Chespin'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'aquacordeTown',
        },
        santaluneForest: {
            name: 'Santalune Forest',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu', 'Pansage', 'Pansear', 'Panpour', 'Fletchling', 'Scatterbug', 'Diancie', 'Hoopa', 'Volcanion'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'aquacordeTown',
        },
        kalosroute3: {
            name: 'Route 3',
            pokes: ['Pidgey', 'Pikachu', 'Dunsparce', 'Azurill', 'Bidoof', 'Burmy', 'Bunnelby', 'Fletchling'],
            minLevel: 3,
            maxLevel: 5,
            respawn: 'aquacordeTown',
        },
        santaluneCity: {
            name: 'Santalune City',
            town: true,
            gymLeader: {
                name: 'Viola',
                badge: 'Bug Badge',
                poke: [
                    ['Surskit', 10],
                    ['Vivillon', 12],
                ],
            },
        },
        kalosroute22: {
            name: 'Route 22',
            pokes: ['Psyduck', 'Farfetchd', 'Azumarill', 'Dunsparce', 'Azurill', 'Bidoof', 'Bibarel', 'Riolu', 'Bunnelby', 'Diggersby', 'Litleo'],
            minLevel: 5,
            maxLevel: 27,
            respawn: 'santaluneCity',
        },
        chamberofEmptiness: {
            name: 'Chamber of Emptiness',
            town: true,
            prof: {
                name: 'Banette',
                win: 'Banette1',
                poke: [
                    ['Banette', 50],
                ],
            },
            _unlock: {
                badges: {
                    'Iceberg Badge': true,
                },
            },
        },
        kalosroute4: {
            name: 'Route 4',
            pokes: ['Ledyba', 'Ralts', 'Skitty', 'Budew', 'Combee', 'Flabebe'],
            minLevel: 6,
            maxLevel: 8,
            respawn: 'santaluneCity',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        lumioseCity: {
            name: 'Lumiose City',
            town: true,
            prof: {
                name: 'Prof. Sycamore',
                win: 'sycamore1',
                poke: [
                    ['Bulbasaur', 10],
                    ['Charmander', 10],
                    ['Squirtle', 10],
                ],
            },
            gymLeader: {
                name: 'Clemont',
                badge: 'Voltage Badge',
                poke: [
                    ['Emolga', 35],
                    ['Magneton', 35],
                    ['Heliolisk', 37],
                ],
            },
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute5: {
            name: 'Route 5',
            pokes: ['Abra', 'Doduo', 'Plusle', 'Minun', 'Gulpin', 'Bunnelby', 'Skiddo', 'Pancham', 'Furfrou'],
            minLevel: 8,
            maxLevel: 10,
            respawn: 'lumioseCity',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        camphrierTown: {
            name: 'Camphrier Town',
            town: true,
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute6: {
            name: 'Route 6',
            pokes: ['Oddish', 'Sentret', 'Nincada', 'Kecleon', 'Espurr', 'Honedge'],
            minLevel: 10,
            maxLevel: 12,
            respawn: 'camphrierTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute7: {
            name: 'Route 7',
            pokes: ['Snorlax', 'Smeargle', 'Volbeat', 'Illumise', 'Roselia', 'Croagunk', 'Ducklett', 'Flabebe', 'Spritzee', 'Swirlix'],
            minLevel: 10,
            maxLevel: 12,
            respawn: 'camphrierTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        connectingCave: {
            name: 'Connecting Cave',
            pokes: ['Zubat', 'Whismur', 'Meditite', 'Axew'],
            minLevel: 13,
            maxLevel: 15,
            respawn: 'camphrierTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute8: {
            name: 'Route 8',
            pokes: ['Spoink', 'Zangoose', 'Seviper', 'Absol', 'Bagon', 'Drifloon', 'Mienfoo', 'Inkay', 'Swirlix', 'Binacle'],
            minLevel: 13,
            maxLevel: 15,
            respawn: 'camphrierTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        ambretteTown: {
            name: 'Ambrette Town',
            town: true,
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosFossilLab: {
            name: 'Fossil Restorer',
            pokes: ['Omanyte', 'Kabuto', 'Aerodactyl', 'Lileep', 'Anorith', 'Cranidos', 'Shieldon', 'Tirtouga', 'Archen', 'Tyrunt', 'Amaura'],
            minLevel: 20,
            maxLevel: 20,
            respawn: 'ambretteTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute9: {
            name: 'Route 9',
            pokes: ['Hippopotas', 'Sandile', 'Helioptile'],
            minLevel: 15,
            maxLevel: 17,
            respawn: 'ambretteTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        glitteringCave: {
            name: 'Glittering Cave',
            pokes: ['Machop', 'Onix', 'Cubone', 'Rhyhorn', 'Kangaskhan', 'Mawile', 'Lunatone', 'Solrock', 'Woobat', 'Ferroseed'],
            minLevel: 15,
            maxLevel: 17,
            respawn: 'ambretteTown',
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        cyllageCity: {
            name: 'Cyllage City',
            town: true,
            gymLeader: {
                name: 'Grant',
                badge: 'Cliff Badge',
                poke: [
                    ['Amaura', 25],
                    ['Tyrunt', 25],
                ],
            },
            _unlock: {
                badges: {
                    'Bug Badge': true,
                },
            },
        },
        kalosroute10: {
            name: 'Route 10',
            pokes: ['Eevee', 'Snubbull', 'Houndour', 'Electrike', 'Sigilyph', 'Emolga', 'Golett', 'Hawlucha'],
            minLevel: 19,
            maxLevel: 21,
            respawn: 'cyllageCity',
            _unlock: {
                badges: {
                    'Cliff Badge': true,
                },
            },
        },
        geosengeTown: {
            name: 'Geosenge Town',
            town: true,
            _unlock: {
                badges: {
                    'Cliff Badge': true,
                },
            },
        },
        teamFlareHQ: {
            name: 'Team Flare Secret HQ',
            pokes: ['Xerneas', 'Yveltal'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'geosengeTown',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        kalosroute11: {
            name: 'Route 11',
            pokes: ['Nidorina', 'Nidorino', 'Hariyama', 'Staravia', 'Chingling', 'Stunky', 'Throh', 'Sawk', 'Dedenne'],
            minLevel: 21,
            maxLevel: 23,
            respawn: 'geosengeTown',
            _unlock: {
                badges: {
                    'Cliff Badge': true,
                },
            },
        },
        reflectionCave: {
            name: 'Reflection Cave',
            pokes: ['Mr. Mime', 'Wobbuffet', 'Sableye', 'Chingling', 'Roggenrola', 'Solosis', 'Carbink', 'Woobat', 'Ferroseed'],
            minLevel: 21,
            maxLevel: 23,
            respawn: 'geosengeTown',
            _unlock: {
                badges: {
                    'Cliff Badge': true,
                },
            },
        },
        shalourCity: {
            name: 'Shalour City',
            town: true,
            gymLeader: {
                name: 'Korrina',
                badge: 'Rumble Badge',
                poke: [
                    ['Mienfoo', 29],
                    ['Machoke', 28],
                    ['Hawlucha', 32],
                ],
            },
            _unlock: {
                badges: {
                    'Cliff Badge': true,
                },
            },
        },
        towerofMastery: {
            name: 'Tower of Mastery',
            town: true,
            prof: {
                name: 'Korrina',
                win: 'Korrina1',
                poke: [
                    ['Lucario', 32],
                ],
                reward: 'megaBracelet',
            },
            _unlock: {
                badges: {
                    'Rumble Badge': true,
                },
            },
        },
        kalosroute12: {
            name: 'Route 12',
            pokes: ['Slowpoke', 'Exeggcute', 'Pinsir', 'Tauros', 'Lapras', 'Heracross', 'Pachirisu', 'Chatot', 'Binacle'],
            minLevel: 23,
            maxLevel: 27,
            respawn: 'shalourCity',
            _unlock: {
                badges: {
                    'Rumble Badge': true,
                },
            },
        },
        azureBay: {
            name: 'Azure Bay',
            pokes: ['Slowpoke', 'Exeggcute', 'Chatot', 'Inkay', 'Binacle'],
            minLevel: 25,
            maxLevel: 27,
            respawn: 'shalourCity',
            _unlock: {
                badges: {
                    'Rumble Badge': true,
                },
            },
        },
        coumarineCity: {
            name: 'Coumarine City',
            town: true,
            gymLeader: {
                name: 'Ramos',
                badge: 'Plant Badge',
                poke: [
                    ['Jumpluff', 30],
                    ['Weepinbell', 31],
                    ['Gogoat', 34],
                ],
            },
            _unlock: {
                badges: {
                    'Rumble Badge': true,
                },
            },
        },
        kalosroute13: {
            name: 'Route 13',
            pokes: ['Dugtrio', 'Trapinch', 'Gible'],
            minLevel: 26,
            maxLevel: 28,
            respawn: 'coumarineCity',
            _unlock: {
                badges: {
                    'Plant Badge': true,
                },
            },
        },
        kalosroute14: {
            name: 'Route 14',
            pokes: ['Weepinbell', 'Haunter', 'Quagsire', 'Skorupi', 'Carnivine', 'Karrablast', 'Shelmet', 'Stunfisk', 'Goomy'],
            minLevel: 30,
            maxLevel: 32,
            respawn: 'lumioseCity',
            _unlock: {
                badges: {
                    'Voltage Badge': true,
                },
            },
        },
        laverreCity: {
            name: 'Laverre City',
            town: true,
            gymLeader: {
                name: 'Valerie',
                badge: 'Fairy Badge',
                poke: [
                    ['Mawile', 38],
                    ['Mr. Mime', 39],
                    ['Sylveon', 42],
                ],
            },
            _unlock: {
                badges: {
                    'Voltage Badge': true,
                },
            },
        },
        kalosroute15: {
            name: 'Route 15',
            pokes: ['Mightyena', 'Skorupi', 'Watchog', 'Liepard', 'Foongus', 'Pawniard', 'Klefki'],
            minLevel: 34,
            maxLevel: 36,
            respawn: 'laverreCity',
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        lostHotel: {
            name: 'Lost Hotel',
            pokes: ['Magneton', 'Electrode', 'Rotom', 'Trubbish', 'Garbodor', 'Litwick', 'Pawniard', 'Klefki'],
            minLevel: 34,
            maxLevel: 36,
            respawn: 'laverreCity',
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        dendemilleTown: {
            name: 'Dendemille Town',
            town: true,
            prof: {
                name: 'Krush',
                win: 'Krush1',
                poke: [
                    ['Treecko', 40],
                    ['Pupitar', 40],
                    ['Gible', 40],
                ],
                reward: 'megaBracelet',
            },
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        kalosroute16: {
            name: 'Route 16',
            pokes: ['Weepinbell', 'Murkrow', 'Floatzel', 'Skorupi', 'Foongus', 'Klefki', 'Phantump', 'Pumpkaboo'],
            minLevel: 34,
            maxLevel: 36,
            respawn: 'dendemilleTown',
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        frostCavern: {
            name: 'Frost Cavern',
            pokes: ['Haunter', 'Jynx', 'Piloswine', 'Beartic', 'Cryogonal', 'Bergmite', 'Vanillite'],
            minLevel: 38,
            maxLevel: 40,
            respawn: 'dendemilleTown',
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        frostCavern3F: {
            name: 'Frost Cavern 3F',
            town: true,
            prof: {
                name: 'Abomasnow',
                win: 'Abomasnow1',
                poke: [
                    ['Abomasnow', 50],
                ],
            },
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        kalosroute17: {
            name: 'Route 17',
            pokes: ['Sneasel', 'Delibird', 'Snover', 'Abomasnow'],
            minLevel: 38,
            maxLevel: 40,
            respawn: 'dendemilleTown',
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        anistarCity: {
            name: 'Anistar City',
            town: true,
            gymLeader: {
                name: 'Olympia',
                badge: 'Psychic Badge',
                poke: [
                    ['Sigilyph', 44],
                    ['Slowking', 45],
                    ['Meowstic', 48],
                ],
            },
            _unlock: {
                badges: {
                    'Fairy Badge': true,
                },
            },
        },
        kalosroute18: {
            name: 'Route 18',
            pokes: ['Sandslash', 'Graveler', 'Pupitar', 'Lairon', 'Torkoal', 'Gurdurr', 'Heatmor', 'Durant'],
            minLevel: 44,
            maxLevel: 46,
            respawn: 'anistarCity',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        terminusCave: {
            name: 'Terminus Cave',
            pokes: ['Sandslash', 'Graveler', 'Pupitar', 'Lairon', 'Durant', 'Zygarde'],
            minLevel: 44,
            maxLevel: 70,
            respawn: 'anistarCity',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        couriwayTown: {
            name: 'Couriway Town',
            town: true,
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        kalosroute19: {
            name: 'Route 19',
            pokes: ['Weepinbell', 'Haunter', 'Quagsire', 'Drapion', 'Carnivine', 'Shelmet', 'Stunfisk', 'Sliggoo'],
            minLevel: 46,
            maxLevel: 48,
            respawn: 'couriwayTown',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        snowbelleCity: {
            name: 'Snowbelle City',
            town: true,
            gymLeader: {
                name: 'Wulfric',
                badge: 'Iceberg Badge',
                poke: [
                    ['Abomasnow', 56],
                    ['Cryogonal', 55],
                    ['Avalugg', 59],
                ],
            },
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        kalosroute20: {
            name: 'Route 20',
            pokes: ['Jigglypuff', 'Noctowl', 'Zoroark', 'Gothorita', 'Amoonguss', 'Trevenant'],
            minLevel: 48,
            maxLevel: 50,
            respawn: 'snowbelleCity',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        pokemonVillage: {
            name: 'Pokemon Village',
            pokes: ['Jigglypuff', 'Ditto', 'Noctowl', 'Banette', 'Zoroark', 'Gothorita', 'Garbodor', 'Amoonguss'],
            minLevel: 48,
            maxLevel: 50,
            respawn: 'snowbelleCity',
            _unlock: {
                badges: {
                    'Psychic Badge': true,
                },
            },
        },
        unknownDungeon: {
            name: 'Unknown Dungeon',
            town: true,
            prof: {
                name: 'Mewtwo',
                win: 'Mewtwo1',
                poke: [
                    ['Mewtwo', 70],
                ],
            },
            _unlock: {
                badges: {
                    'Iceberg Badge': true,
                },
            },
        },
        kalosroute21: {
            name: 'Route 21',
            pokes: ['Scyther', 'Ursaring', 'Spinda', 'Altaria', 'Floatzel'],
            minLevel: 50,
            maxLevel: 52,
            respawn: 'snowbelleCity',
            _unlock: {
                badges: {
                    'Iceberg Badge': true,
                },
            },
        },
        kalosVictoryRoad: {
            name: 'Victory Road',
            pokes: ['Fearow', 'Graveler', 'Haunter', 'Lickitung', 'Ariados', 'Shuckle', 'Skarmory', 'Gurdurr', 'Druddigon', 'Zweilous', 'Hydreigon', 'Noibat'],
            minLevel: 57,
            maxLevel: 59,
            respawn: 'snowbelleCity',
            _unlock: {
                badges: {
                    'Iceberg Badge': true,
                },
            },
        },
        kiloudeCity: {
            name: 'Kiloude City',
            town: true,
            _unlock: {
                badges: {
                    'Iceberg Badge': true,
                },
            },
        },
        kaOldRod: {
            name: 'Kalos Old Rod',
            pokes: ['Poliwag', 'Magikarp', 'Luvdisc'],
            minLevel: 15,
            maxLevel: 15,
            respawn: 'vanivilleTown',
            kalosOldRod: 1,
        },
        kaGoodRod: {
            name: 'Kalos Good Rod',
            pokes: ['Poliwhirl', 'Shellder', 'Horsea', 'Goldeen', 'Staryu', 'Dratini', 'Chinchou', 'Remoraid', 'Carvanha', 'Barboach', 'Corphish', 'Clamperl', 'Basculin', 'Skrelp', 'Clauncher'],
            minLevel: 25,
            maxLevel: 35,
            respawn: 'vanivilleTown',
            kalosGoodRod: 1,
        },
        kaSuperRod: {
            name: 'Kalos Super Rod',
            pokes: ['Poliwhirl', 'Poliwrath', 'Cloyster', 'Seadra', 'Seaking', 'Starmie', 'Gyarados', 'Dragonair', 'Lanturn', 'Politoed', 'Qwilfish', 'Octillery', 'Sharpedo', 'Crawdaunt', 'Whiscash', 'Huntail', 'Gorebyss', 'Relicanth', 'Basculin', 'Alomomola', 'Dragalge', 'Clawitzer'],
            minLevel: 35,
            maxLevel: 35,
            respawn: 'vanivilleTown',
            kalosSuperRod: 1,
        },
        elite4Malva: {
            name: 'Elite 4 Malva',
            town: true,
            gymLeader: {
                name: 'Malva',
                poke: [
                    ['Pyroar', 63],
                    ['Torkoal', 63],
                    ['Chandelure', 63],
                    ['Talonflame', 65],
                ],
            },
        },
        elite4Siebold: {
            name: 'Elite 4 Siebold',
            town: true,
            gymLeader: {
                name: 'Siebold',
                poke: [
                    ['Clawitzer', 63],
                    ['Starmie', 63],
                    ['Gyarados', 63],
                    ['Barbaracle', 65],
                ],
            },
        },
        elite4Wikstrom: {
            name: 'Elite 4 Wikstrom',
            town: true,
            gymLeader: {
                name: 'Wikstrom',
                poke: [
                    ['Klefki', 63],
                    ['Probopass', 63],
                    ['Scizor', 63],
                    ['Aegislash', 65],
                ],
            },
        },
        elite4Drasna: {
            name: 'Elite 4 Drasna',
            town: true,
            gymLeader: {
                name: 'Drasna',
                poke: [
                    ['Dragalge', 63],
                    ['Altaria', 63],
                    ['Druddigon', 63],
                    ['Noivern', 65],
                ],
            },
        },
        championDiantha: {
            name: 'Champion Diantha',
            town: true,
            gymLeader: {
                name: 'Diantha',
                poke: [
                    ['Hawlucha', 64],
                    ['Tyrantrum', 65],
                    ['Aurorus', 65],
                    ['Gourgeist', 65],
                    ['Goodra', 66],
                    ['Gardevoir', 68],
                ],
            },
        },
    },
    Alola: {
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        ikiTown: {
            name: 'Iki Town',
            town: true,
            prof: {
                name: 'Prof. Kukui',
                badge: null,
                poke: [
                    ['Rowlet', 15],
                    ['Litten', 15],
                    ['Popplio', 15],
                ],
            },
        },
        alola1: {
            name: 'Route 1',
            pokes: ['Pikipek', 'Yungoos', 'Grubbin', 'Rowlet', 'Litten', 'Popplio'],
            minLevel: 2,
            maxLevel: 4,
            respawn: 'ikiTown',
        },
        hauoliTown: {
            name: 'Hauoli Town',
            town: true,
        },
        alola2: {
            name: 'Route 2',
            pokes: ['Alolan Rattata', 'Alolan Meowth', 'Abra', 'Drowzee', 'Smeargle', 'Yungoos', 'Spearow', 'Growlithe', 'Cutiefly', 'Makuhita'],
            minLevel: 5,
            maxLevel: 8,
            respawn: 'hauoliTown',
        },
        verdantCavern: {
            name: 'Verdant Cavern',
            pokes: ['Drowzee'],
            minLevel: 6,
            maxLevel: 9,
            respawn: 'hauoliTown',
        },
        alola3: {
            name: 'Route 3',
            pokes: ['Cutiefly', 'Rockruff', 'Oricorio', 'Crabrawler'],
            minLevel: 9,
            maxLevel: 12,
            respawn: 'ikiTown',
        },
        heaheaCity: {
            name: 'Heahea City',
            town: true,
        },
        alola4: {
            name: 'Route 4',
            pokes: ['Alolan Rattata', 'Eevee', 'Igglybuff', 'Lillipup', 'Pikipek', 'Yungoos', 'Mudbray', 'Crabrawler', 'Grubbin'],
            minLevel: 9,
            maxLevel: 12,
            respawn: 'ikiTown',
        },
        alola5: {
            name: 'Route 5',
            pokes: ['Mudbray', 'Dewpider', 'Salandit', 'Stufful'],
            minLevel: 13,
            maxLevel: 16,
            respawn: 'heaheaCity',
        },
        paniolaTown: {
            name: 'Paniola Town',
            town: true,
        },
        brookletHill: {
            name: 'Brooklet Hill',
            pokes: ['Paras', 'Psyduck', 'Poliwag', 'Wingull', 'Surskit', 'Lillipup', 'Dewpider', 'Morelull'],
            minLevel: 15,
            maxLevel: 18,
            respawn: 'paniolaTown',
        },
        alola6: {
            name: 'Route 6',
            pokes: ['Alolan Rattata', 'Eevee', 'Igglybuff', 'Lillipup', 'Pikipek', 'Yungoos', 'Mudbray', 'Crabrawler', 'Grubbin'],
            minLevel: 15,
            maxLevel: 18,
            respawn: 'paniolaTown',
        },
        alola7: {
            name: 'Route 7',
            pokes: ['Tentacool', 'Wingull', 'Alolan Diglett', 'Finneon', 'Pyukumuku', 'Staryu', 'Magikarp', 'Wishiwashi'],
            minLevel: 16,
            maxLevel: 18,
            respawn: 'paniolaTown',
        },
        welaVolcanoPark: {
            name: 'Wela Volcano Park',
            pokes: ['Cubone', 'Kangaskhan', 'Magby', 'Fletchling', 'Salandit', 'Nihilego'],
            minLevel: 16,
            maxLevel: 18,
            respawn: 'paniolaTown',
        },
        seawardCave: {
            name: 'Seaward Cave',
            pokes: ['Tentacool', 'Wingull', 'Finneon', 'Luvdisc', 'Magikarp', 'Corsola', 'Wishiwashi'],
            minLevel: 16,
            maxLevel: 18,
            respawn: 'paniolaTown',
        },
        alola8: {
            name: 'Route 8',
            pokes: ['Alolan Rattata', 'Fletchinder', 'Trumbeak', 'Yungoos', 'Salandit', 'Stufful', 'Crabrawler', 'Wimpod'],
            minLevel: 18,
            maxLevel: 20,
            respawn: 'paniolaTown',
        },
        lushJungle: {
            name: 'Lush Jungle',
            pokes: ['Fomantis', 'Morelull', 'Bounsweet', 'Comfey', 'Oranguru', 'Passimian'],
            minLevel: 18,
            maxLevel: 21,
            respawn: 'paniolaTown',
        },
        alola9: {
            name: 'Route 9',
            pokes: ['Luvdisc', 'Magikarp', 'Corsola', 'Wishiwashi', 'Ditto'],
            minLevel: 18,
            maxLevel: 21,
            respawn: 'paniolaTown',
        },
        konikoniCity: {
            name: 'Konikoni City',
            town: true,
        },
        specialSpots: {
            name: 'Special Spots',
            pokes: ['Wimpod', 'Sandygast', 'Pyukumuku'],
            minLevel: 20,
            maxLevel: 20,
            respawn: 'konikoniCity',
        },
        aetherParadise: {
            name: 'Aether Paradise',
            pokes: ['Type: Null', 'Nihilego'],
            minLevel: 22,
            maxLevel: 25,
            respawn: 'konikoniCity',
        },
        malieCity: {
            name: 'Malie City',
            town: true,
        },
        malieGarden: {
            name: 'Malie Garden',
            pokes: ['Alolan Meowth', 'Psyduck', 'Poliwhirl', 'Ledian', 'Ariados', 'Masquerain', 'Cottonee', 'Petilil', 'Araquanid'],
            minLevel: 22,
            maxLevel: 25,
            respawn: 'malieCity',
        },
        alola10: {
            name: 'Route 10',
            pokes: ['Ledian', 'Alolan Raticate', 'Ariados', 'Fearow', 'Skarmory', 'Pancham', 'Gumshoos'],
            minLevel: 22,
            maxLevel: 25,
            respawn: 'malieCity',
        },
        mountHokulani: {
            name: 'Mount Hokulani',
            pokes: ['Minior', 'Komala'],
            minLevel: 22,
            maxLevel: 25,
            respawn: 'malieCity',
        },
        alola11: {
            name: 'Route 11',
            pokes: ['Shiinotic', 'Komala', 'Trumbeak', 'Ariados', 'Ledian', 'Parasect', 'Trumbeak', 'Gumshoos', 'Morelull'],
            minLevel: 24,
            maxLevel: 27,
            respawn: 'malieCity',
        },
        alola12: {
            name: 'Route 12',
            pokes: ['Alolan Geodude', 'Elekid', 'Torkoal', 'Mudbray'],
            minLevel: 24,
            maxLevel: 27,
            respawn: 'malieCity',
        },
        alola13: {
            name: 'Route 13',
            pokes: ['Magikarp', 'Wishiwashi', 'Bruxish'],
            minLevel: 26,
            maxLevel: 29,
            respawn: 'malieCity',
        },
        alola14: {
            name: 'Route 14',
            pokes: ['Turtonator', 'Togedemaru', 'Mimikyu'],
            minLevel: 29,
            maxLevel: 32,
            respawn: 'malieCity',
        },
        alola15: {
            name: 'Route 15',
            pokes: ['Alolan Raticate', 'Slowpoke', 'Pelipper', 'Gumshoos'],
            minLevel: 29,
            maxLevel: 32,
            respawn: 'malieCity',
        },
        alola16: {
            name: 'Route 16',
            pokes: ['Alolan Raticate', 'Slowpoke', 'Pelipper', 'Gumshoos', 'Crabrawler', 'Zygarde-10', 'Zygarde'],
            minLevel: 29,
            maxLevel: 32,
            respawn: 'malieCity',
        },
        poTown: {
            name: 'Po Town',
            town: true,
            gymLeader: {
                name: 'Team Skull Grant',
                badge: null,
                poke: [
                    ['Ekans', 37],
                    ['Salandit', 37],
                ],
            },
        },
        alola17: {
            name: 'Route 17',
            pokes: ['Alolan Raticate', 'Fearow', 'Ledian', 'Ariados', 'Pancham', 'Gumshoos', 'Kartana'],
            minLevel: 32,
            maxLevel: 35,
            respawn: 'poTown',
        },
        seafolkVillage: {
            name: 'Seafolk Village',
            pokes: ['Magikarp', 'Wailmer', 'Dhelmise', 'Aerodactyl', 'Steenee'],
            minLevel: 32,
            maxLevel: 35,
            respawn: 'poTown',
        },
        ruinsOfHope: {
            name: 'Ruins of Hope',
            pokes: ['Tapu Fini'],
            minLevel: 36,
            maxLevel: 36,
            respawn: 'poTown',
        },
        exeggutorIsland: {
            name: 'Exeggutor Island',
            pokes: ['Exeggcute', 'Alolan Exeggutor', 'Pelipper', 'Gastrodon', 'Serperior'],
            minLevel: 35,
            maxLevel: 38,
            respawn: 'poTown',
        },
        vastPoniCanyon: {
            name: 'Vast Poni Canyon',
            pokes: ['Machoke', 'Skarmory', 'Boldore', 'Mienfoo', 'Carbink', 'Lycanroc-D', 'Lycanroc-M', 'Jangmo-o'],
            minLevel: 39,
            maxLevel: 42,
            respawn: 'poTown',
        },
        mountLanakila: {
            name: 'Mount Lanakila',
            pokes: ['Drampa', 'Jangmo-o'],
            minLevel: 42,
            maxLevel: 45,
            respawn: 'ikiTown',
        },
        custom1: {
            name: 'Welcome to Alola',
            pokes: ['Alolan Rattata', 'Alolan Sandshrew', 'Alolan Vulpix', 'Alolan Diglett', 'Alolan Meowth', 'Alolan Geodude', 'Alolan Grimer'],
            minLevel: 20,
            maxLevel: 20,
            respawn: 'ikiTown',
        },
        custom2: {
            name: 'Aether Paradise',
            pokes: ['Type: Null', 'Cosmog', 'Cosmoem', 'Silvally'],
            minLevel: 40,
            maxLevel: 40,
            respawn: 'ikiTown',
        },
        custom3: {
            name: 'Ruins',
            pokes: ['Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini'],
            minLevel: 60,
            maxLevel: 60,
            respawn: 'ikiTown',
        },
        custom4: {
            name: 'Altar',
            pokes: ['Solgaleo', 'Lunala'],
            minLevel: 55,
            maxLevel: 55,
            respawn: 'ikiTown',
        },
        custom5: {
            name: 'Ultra Wormholes',
            pokes: ['Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord', 'Poipole', 'Naganadel', 'Blacephalon', 'Stakataka'],
            minLevel: 55,
            maxLevel: 70,
            respawn: 'ikiTown',
        },
        custom6: {
            name: 'Not an Ultra Beast',
            pokes: ['Necrozma'],
            minLevel: 70,
            maxLevel: 70,
            respawn: 'ikiTown',
        },
        custom7: {
            name: 'Not a PokeBall',
            pokes: ['Magearna'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'ikiTown',
        },
        custom8: {
            name: 'Fighting Ghost',
            pokes: ['Marshadow'],
            minLevel: 50,
            maxLevel: 50,
            respawn: 'ikiTown',
        },
        custom9: {
            name: 'Zap Island',
            pokes: ['Zeraora'],
            minLevel: 60,
            maxLevel: 60,
            respawn: 'ikiTown',
        },
        custom10: {
            name: 'Spinny Steel Things',
            pokes: ['Meltan', 'Melmetal'],
            minLevel: 40,
            maxLevel: 40,
            respawn: 'ikiTown',
        },
        aOldRod: {
            name: 'Alola Old Rod',
            pokes: ['Wishiwashi'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'ikiTown',
            alolaOldRod: 1,
        },
        aGoodRod: {
            name: 'Alola Good Rod',
            pokes: ['Mareanie', 'Bruxish'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'ikiTown',
            alolaGoodRod: 1,
        },
        aSuperRod: {
            name: 'Alola Super Rod',
            pokes: ['Dhelmise'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'ikiTown',
            alolaSuperRod: 1,
        },
        elite4Hala: {
            name: 'Elite 4 Hala',
            town: true,
            gymLeader: {
                name: 'Hala',
                poke: [
                    ['Hariyama', 54],
                    ['Primeape', 54],
                    ['Bewear', 54],
                    ['Poliwrath', 54],
                    ['Crabominable', 55],
                ],
            },
        },
        elite4Olivia: {
            name: 'Elite 4 Olivia',
            town: true,
            gymLeader: {
                name: 'Olivia',
                poke: [
                    ['Relicanth', 63],
                    ['Carbink', 63],
                    ['Golem', 63],
                    ['Probopass', 63],
                    ['Lycanroc', 63],
                ],
            },
        },
        elite4Acerola: {
            name: 'Elite 4 Acerola',
            town: true,
            gymLeader: {
                name: 'Acerola',
                poke: [
                    ['Sableye', 54],
                    ['Drifblim', 54],
                    ['Dhelmise', 54],
                    ['Froslass', 54],
                    ['Palossand', 55],
                ],
            },
        },
        elite4Kahili: {
            name: 'Elite 4 Kahili',
            town: true,
            gymLeader: {
                name: 'Kahili',
                poke: [
                    ['Skarmory', 63],
                    ['Crobat', 63],
                    ['Oricorio', 63],
                    ['Mandibuzz', 63],
                    ['Toucannon', 63],
                ],
            },
        },
        championKukui: {
            name: 'Champion Kukui',
            town: true,
            gymLeader: {
                name: 'Kukui',
                poke: [
                    ['Lycanroc', 57],
                    ['Alolan Ninetales', 56],
                    ['Braviary', 56],
                    ['Magnezone', 56],
                    ['Snorlax', 56],
                    ['Primarina', 68],
                ],
            },
        },
    },  */
    Fandom: {
        _unlock: {
            badges: {
                'Earth Badge': true,
            },
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: [],
        },
        fanTown: {
            name: 'Fan Town',
            town: true,
            pokeMart: true,
        },
        kroute1: {
            name: 'Route 1',
            pokes: ['Pidgey', 'Rattata'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'kaliTown',
        },
        kaliTown: {
            name: 'Kali Town',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Kali Gym',
                gymTrainer1: {
                    name: 'Surfer',
                    poke: [
                        ['Poliwrath', 63],
                        ['Golisopod', 65],
                        ['Kingdra', 66],
                    ],
                    win: 'kaliGym1',
                },
                gymTrainer2: {
                    name: 'Tech Genius',
                    poke: [
                        ['Oranguru', 62],
                        ['Electivire', 64],
                        ['Alakazam', 65],
                        ['Metagross', 67],
                    ],
                    win: 'kaliGym2',
                    req: 'kaliGym1',
                },
                gymTrainer3: {
                    name: 'Liberal',
                    poke: [
                        ['Glaceon', 67],
                        ['Gyarados', 66],
                        ['Nidoqueen', 68],
                    ],
                    win: 'kaliGym3',
                    req: 'kaliGym2',
                },
                gymLeader: {
                    name: 'Krush',
                    win: 'power1',
                    req: 'kaliGym3',
                    poke: [
                        ['Mudsdale', 59],
                        ['Stoutland', 61],
                        ['Sceptile', 61],
                        ['Honchkrow', 62],
                        ['Garchomp', 64],
                    ],
                },
            },
        },
        penguinVille: {
            name: 'Penguinville',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Penguinville Gym',
                gymLeader: {
                    name: 'Penguin',
                    poke: [
                        ['Dewgong', 62],
                        ['Alolan Sandslash', 59],
                        ['Jynx', 61],
                        ['Glaceon', 60],
                        ['M-Abomasnow', 69],
                        ['Empoleon', 69],
                    ],
                },
            },
        },
        gabeCity: {
            name: 'Gabe City',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Gabe Gym',
                gymLeader: {
                    name: 'Gabe',
                    poke: [
                        ['M-Gardevoir', 62],
                        ['Serperior', 59],
                        ['Lucario', 61],
                        ['Zoroark', 60],
                    ],
                },
            },
        },
        randoHamlet: {
            name: 'Rando Hamlet',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Rando Gym',
                gymLeader: {
                    name: 'Rando',
                    poke: [
                        ['Decidueye', 62],
                        ['Salazzle', 59],
                        ['Mimikyu', 61],
                        ['Lycanroc', 60],
                        ['Zeraora', 69],
                        ['Kartana', 69],
                    ],
                },
            },
        },
        pixlSquare: {
            name: 'PixL Square',
            town: true,
            pokeMart: true,
            gym: {
                name: 'PixL Gym',
                gymLeader: {
                    name: 'PixL',
                    poke: [
                        ['Infernape', 69],
                        ['M-Lucario', 69],
                        ['Gardevoir', 69],
                        ['Gallade', 69],
                        ['Primarina', 69],
                        ['Celebi', 69],
                        ['Meloetta', 69],
                        ['Ho-Oh', 69],
                    ],
                },
            },
        },
        freezingMines: {
            name: 'Freezing Mines',
            town: true,
            pokeMart: true,
            gym: {
                name: 'Freezing Gym',
                gymTrainer1: {
                    name: 'Miner',
                    poke: [
                        ['Excadrill', 50],
                        ['Camerupt', 50],
                        ['Torterra', 50],
                        ['Probopass', 50],
                    ],
                    win: 'freezingGym1',
                },
                gymTrainer2: {
                    name: 'Ace Trainer',
                    poke: [
                        ['Manectric', 52],
                        ['Altaria', 52],
                        ['Blaziken', 52],
                        ['Sceptile', 52],
                    ],
                    win: 'freezingGym2',
                    req: 'freezingGym1',
                },
                gymTrainer3: {
                    name: 'Hiker',
                    poke: [
                        ['Weavile', 55],
                        ['Bronzong', 55],
                        ['Regice', 57],
                    ],
                    win: 'freezingGym3',
                    req: 'freezingGym2',
                },
                gymLeader: {
                    name: 'ColdOre',
                    req: 'freezingGym3',
                    poke: [
                        ['Boldore', 58],
                        ['M-Swampert', 57],
                        ['Staraptor', 57],
                        ['Swellow', 57],
                        ['Rayquaza', 56],
                        ['M-Charizard X', 60],
                    ],
                },
            },
        },
        PokeClicker: {
            name: 'PokeClicker',
            town: true,
            pokeMart: true,
            gym: {
                name: 'PokeClicker',
                gymLeader: {
                    name: 'PokeClicker Bot',
                    poke: [
                        ['Spearow', 96],
                        ['Pikachu', 96],
                        ['Groudon-P', 96],
                        ['Kyogre-P', 96],
                        ['Xerneas', 96],
                        ['M-Rayquaza', 96],
                    ],
                },
            },
        },
    },
};

export default ROUTES;
