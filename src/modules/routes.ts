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
}

interface GymTrainer1 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
}

interface GymTrainer2 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
}

interface GymTrainer3 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
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
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFour3 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFour4 {
    name: string,
    poke: Array<[PokemonNameType, number]>,
    win?: string,
    reward?: string,
    event?: string,
    megaStone?: string,
    megaStones?: string[],
}

interface EliteFourChampion {
    name: string,
    poke: Array<[PokemonNameType, number]>,
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

interface Town {
    name: string,
    town: true,
    prof?: Professor,
    gym?: Gym,
    npc?: NPC,
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
    _unlock?: UnlockData,

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
            npc: {
                name: 'Prof. Oak',
                event: 'profOak1',
            },
        },
        kroute1: {
            name: 'Route 1',
            pokes: ['Pidgey', 'Rattata'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'palletTown',
        },
        viridianCity: {
            name: 'Viridian City',
            town: true,
            gym: {
                name: 'Viridian Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
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
                },

            },
        },
        kroute22: {
            name: 'Route 22',
            pokes: ['Rattata', 'Nidoran F', 'Nidoran M', 'Mankey', 'Spearow'],
            minLevel: 2,
            maxLevel: 5,
            respawn: 'viridianCity',
        },
        kroute2: {
            name: 'Route 2',
            pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle', 'Nidoran F', 'Nidoran M'],
            minLevel: 3,
            maxLevel: 5,
            respawn: 'viridianCity',
        },
        viridianForest: {
            name: 'Virdian Forest',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Pikachu'],
            minLevel: 3,
            maxLevel: 6,
            respawn: 'viridianCity',
        },
        pewterCity: {
            name: 'Pewter City',
            town: true,
            gym: {
                name: 'Pewter Gym',
                gymTrainer1: {
                    name: 'Camper Jerry',
                    poke: [
                        ['Diglett', 11],
                        ['Sandshrew', 11],
                    ],
                },
                gymLeader: {
                    name: 'Brock',
                    badge: 'Boulder Badge',
                    win: 'boulder1',
                    poke: [
                        ['Geodude', 12],
                        ['Onix', 14],
                    ],
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
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        mtMoon: {
            name: 'Mt. Moon',
            pokes: ['Zubat', 'Clefairy', 'Paras', 'Geodude', 'Sandshrew'],
            minLevel: 6,
            maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        kroute4: {
            name: 'Route 4',
            pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey'],
            minLevel: 6,
            maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        ceruleanCity: {
            name: 'Cerulean City',
            town: true,
            gym: {
                name: 'Cerulean Gym',
                gymTrainer1: {
                    name: 'Swimmer Parker',
                    poke: [
                        ['Horsea', 16],
                        ['Shellder', 16],
                    ],
                },
                gymTrainer2: {
                    name: 'Jr. Trainer Brianna',
                    poke: [
                        ['Goldeen', 19],
                    ],
                },
                gymLeader: {
                    name: 'Misty',
                    badge: 'Cascade Badge',
                    win: 'cascade1',
                    poke: [
                        ['Staryu', 18],
                        ['Starmie', 21],
                    ],
                },
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        nuggetBridge: {
            name: 'Nugget Bridge',
            town: true,
            npc: {
                name: 'Nugget 5',
                event: 'nugget5',
                poke: [
                    ['Staryu', 18],
                    ['Starmie', 21],
                ],
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        kroute24: {
            name: 'Route 24',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
        },
        kroute25: {
            name: 'Route 25',
            pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
            minLevel: 7,
            maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true,
                },
            },
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
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
        },
        kroute6: {
            name: 'Route 6',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            minLevel: 10,
            maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
        },
        vermilionCity: {
            name: 'Vermilion City',
            town: true,
            gym: {
                name: 'Vermilion Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
                },
                gymLeader: {
                    name: 'Lt. Surge',
                    badge: 'Thunder Badge',
                    win: 'thunder1',
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
            pokes: ['Diglett', 'Dugtrio', 'Bulbasaur', 'Squirtle'],
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
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee'],
            minLevel: 18,
            maxLevel: 25,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true,
                },
            },
        },
        kroute9: {
            name: 'Route 9',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino'],
            minLevel: 9,
            maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        kroute10: {
            name: 'Route 10',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M', 'Machop', 'Magnemite', 'Voltorb'],
            minLevel: 11,
            maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
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
        },
        powerPlant: {
            name: 'Power Plant',
            pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Voltorb', 'Electrode', 'Electabuzz', 'Zapdos'],
            minLevel: 20,
            maxLevel: 50,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        lavenderTown: {
            name: 'Lavender Town',
            town: true,
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        pokemonTower: {
            name: 'Pokemon Tower',
            pokes: ['Gastly', 'Haunter', 'Cubone'],
            minLevel: 13,
            maxLevel: 18,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        kroute8: {
            name: 'Route 8',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jigglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
            minLevel: 15,
            maxLevel: 20,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        kroute7: {
            name: 'Route 7',
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout'],
            minLevel: 18,
            maxLevel: 22,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true,
                },
            },
        },
        celadonCity: {
            name: 'Celadon City',
            town: true,
            gym: {
                name: 'Celadon Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
                },
                gymLeader: {
                    name: 'Erika',
                    badge: 'Rainbow Badge',
                    win: 'rainbow1',
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
            gym: {
                name: 'Saffron Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
                },
                gymLeader: {
                    name: 'Sabrina',
                    badge: 'Marsh Badge',
                    win: 'marsh1',
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
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax'],
            minLevel: 18,
            maxLevel: 30,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
        },
        kroute17: {
            name: 'Route 17',
            pokes: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio'],
            minLevel: 20,
            maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
        },
        kroute18: {
            name: 'Route 18',
            pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo'],
            minLevel: 20,
            maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true,
                },
            },
        },
        fuchsiaCity: {
            name: 'Fuchsia City',
            town: true,
            gym: {
                name: 'Fuchsia Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
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
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
            minLevel: 22,
            maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute14: {
            name: 'Route 14',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
            minLevel: 23,
            maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute13: {
            name: 'Route 13',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto', 'Farfetchd'],
            minLevel: 22,
            maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute12: {
            name: 'Route 12',
            pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax', 'Mr. Mime', 'Farfetchd'],
            minLevel: 22,
            maxLevel: 30,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        kroute19: {
            name: 'Route 19',
            pokes: ['Tentacool'],
            minLevel: 5,
            maxLevel: 40,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true,
                },
            },
        },
        seafoamIsland: {
            name: 'Seafoam Island',
            pokes: ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Staryu', 'Jynx', 'Articuno'],
            minLevel: 9,
            maxLevel: 50,
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
            gym: {
                name: 'Cinnabar Gym',
                gymTrainer1: {
                    name: 'Test',
                    poke: [
                        ['Pikachu', 5],
                    ],
                },
                gymLeader: {
                    name: 'Blaine',
                    badge: 'Volcano Badge',
                    win: 'volcano1',
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
        /* elite4Lorelei: {
            name: 'Elite 4 Lorelei',
            town: true,
            gymLeader: {
                name: 'Lorelei',
                poke: [
                    ['Dewgong', 54],
                    ['Cloyster', 53],
                    ['Slowbro', 54],
                    ['Jynx', 56],
                    ['Lapras', 56],
                ],
            },
        },
        elite4KantoBruno: {
            name: 'Elite 4 Bruno Kanto',
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
        elite4Agatha: {
            name: 'Elite 4 Agatha',
            town: true,
            gymLeader: {
                name: 'Agatha',
                poke: [
                    ['Gengar', 56],
                    ['Golbat', 56],
                    ['Haunter', 55],
                    ['Arbok', 58],
                    ['Gengar', 60],
                ],
            },
        },
        elite4Lance: {
            name: 'Elite 4 Lance',
            town: true,
            gymLeader: {
                name: 'Lance',
                poke: [
                    ['Gyarados', 58],
                    ['Dragonair', 56],
                    ['Dragonair', 56],
                    ['Aerodactyl', 60],
                    ['Dragonite', 62],
                ],
            },
        },
        championBlue: {
            name: 'Champion Blue',
            town: true,
            gymLeader: {
                name: 'Blue',
                poke: [
                    ['Exeggutor', 58],
                    ['Arcanine', 54],
                    ['Alakazam', 58],
                    ['Rhydon', 56],
                    ['Gyarados', 58],
                    ['Pidgeot', 56],
                ],
            },
        }, */
    },
};

export default ROUTES;
