/* eslint-disable comma-style */
/* eslint-disable comma-dangle */
const ROUTES = {
    Kanto: {
        _global: {
            pokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Eevee', 'Porygon'],
            rarePokes: ['Mew'],
            superRare: []
        },
        palletTown: {
            name: 'Pallet Town',
            town: true,
            trainer: {
                name: 'Prof. Oak',
                win: 'oak1',
                poke: [
                    ['Bulbasaur', 15],
                    ['Charmander', 15],
                    ['Squirtle', 15]
                ]
            },
            trainer1: {
                name: 'Prof. Oak',
                win: 'oak2',
                poke: [
                    ['Ivysaur', 30],
                    ['Charmeleon', 30],
                    ['Wartortle', 30]
                ]
            },
            trainer2: {
                name: 'Prof. Oak',
                win: 'oak3',
                poke: [
                    ['Venusaur', 60],
                    ['Charizard', 60],
                    ['Blastoise', 60]
                ]
            },
            trainer3: {
                name: 'Prof. Oak',
                win: 'oak4',
                poke: [
                    ['Venusaur', 100],
                    ['Charizard', 100],
                    ['Blastoise', 100]
                ]
            }
        }
        , kroute1: {
            name: 'Route 1'
            , pokes: ['Pidgey', 'Rattata']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'palletTown'
        },
        viridianCity: {
            name: 'Viridian City',
            town: true,
            trainer: {
                name: 'Giovanni',
                badge: 'Earth Badge',
                poke: [
                    ['Rhyhorn', 45],
                    ['Dugtrio', 42],
                    ['Nidoqueen', 44],
                    ['Nidoking', 45],
                    ['Rhydon', 50]
                ]
            }
        }
        , kroute22: {
            name: 'Route 22'
            , pokes: ['Pidgey', 'Rattata', 'Nidoran F', 'Nidoran M']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'viridianCity'
        }
        , kroute2: {
            name: 'Route 2'
            , pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle', 'Nidoran F', 'Nidoran M']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'viridianCity',
        }
        , viridianForest: {
            name: 'Virdian Forest'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pikachu']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'viridianCity'
        }
        , pewterCity: {
            name: 'Pewter City',
            town: true,
            trainer: {
                name: 'Brock',
                badge: 'Boulder Badge',
                win: 'boulder1',
                poke: [
                    ['Geodude', 12],
                    ['Onix', 14]
                ]
            },
            trainer1: {
                name: 'Brock',
                win: 'Boulder2',
                poke: [
                    ['Geodude', 30],
                    ['Onix', 30],
                    ['Aerodactyl', 30]
                ]
            },
            trainer2: {
                name: 'Brock',
                win: 'Boulder3',
                poke: [
                    ['Golem', 50],
                    ['Onix', 50],
                    ['Aerodactyl', 50],
                    ['Kabutops', 50],
                    ['Omastar', 50]
                ]
            },
            trainer3: {
                name: 'Brock',
                win: 'Boulder4',
                poke: [
                    ['Golem', 75],
                    ['Onix', 75],
                    ['Aerodactyl', 75],
                    ['Kabutops', 75],
                    ['Omastar', 75]
                ]
            }
        }
        , kroute3: {
            name: 'Route 3'
            , pokes: ['Pidgey', 'Spearow', 'Jigglypuff']
            , minLevel: 5
            , maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , mtMoon: {
            name: 'Mt. Moon'
            , pokes: ['Zubat', 'Clefairy', 'Paras', 'Geodude']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kroute4: {
            name: 'Route 4'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'pewterCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        },
        ceruleanCity: {
            name: 'Cerulean City',
            town: true,
            trainer: {
                name: 'Misty',
                badge: 'Cascade Badge',
                win: 'cascade1',
                poke: [
                    ['Staryu', 18],
                    ['Starmie', 21]
                ],
            },
            trainer1: {
                name: 'Misty',
                win: 'cascade2',
                poke: [
                    ['Horsea', 40],
                    ['Psyduck', 40],
                    ['Starmie', 40],
                    ['Goldeen', 40]
                ]
            },
            trainer2: {
                name: 'Misty',
                win: 'cascade3',
                poke: [
                    ['Seaking', 70],
                    ['Seaking', 70],
                    ['Golduck', 70],
                    ['Starmie', 70]
                ]
            },
            trainer3: {
                name: 'Misty',
                win: 'cascade4',
                poke: [
                    ['Seaking', 100],
                    ['Seadra', 100],
                    ['Golduck', 100],
                    ['Starmie', 100],
                    ['Gyarados', 100]
                ]
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kroute24: {
            name: 'Route 24'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Oddish', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kroute25: {
            name: 'Route 25'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Oddish', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , kroute5: {
            name: 'Route 5'
            , pokes: ['Pidgey', 'Oddish', 'Meowth', 'Mankey', 'Bellsprout']
            , minLevel: 10
            , maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        }
        , kroute6: {
            name: 'Route 6'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
            , minLevel: 10
            , maxLevel: 16,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        },
        vermilionCity: {
            name: 'Vermilion City',
            town: true,
            trainer: {
                name: 'Lt. Surge',
                badge: 'Thunder Badge',
                win: 'thunder1',
                poke: [
                    ['Voltorb', 21],
                    ['Pikachu', 18],
                    ['Raichu', 24]
                ]
            },
            trainer1: {
                name: 'Lt. Surge',
                win: 'thunder2',
                poke: [
                    ['Electrode', 40],
                    ['Pikachu', 40],
                    ['Magnemite', 40],
                    ['Raichu', 40]
                ]
            },
            trainer2: {
                name: 'Lt. Surge',
                win: 'thunder3',
                poke: [
                    ['Electrode', 70],
                    ['Electabuzz', 70],
                    ['Magneton', 70],
                    ['Raichu', 70],
                ]
            },
            trainer3: {
                name: 'Lt. Surge',
                win: 'thunder4',
                poke: [
                    ['Electrode', 100],
                    ['Electabuzz', 100],
                    ['Magneton', 100],
                    ['Raichu', 100],
                    ['Jolteon', 100]
                ]
            },
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        }
        , diglettCave: {
            name: 'Diglett Cave'
            , pokes: ['Diglett', 'Dugtrio']
            , minLevel: 15
            , maxLevel: 31,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , kroute11: {
            name: 'Route 11'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
            , minLevel: 18
            , maxLevel: 25,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , kroute9: {
            name: 'Route 9'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
            , minLevel: 9
            , maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , rockTunnel: {
            name: 'Rock Tunnel'
            , pokes: ['Zubat', 'Machop', 'Geodude', 'Onix']
            , minLevel: 11
            , maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        kroute10: {
            name: 'Route 10'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Voltorb']
            , minLevel: 11
            , maxLevel: 17,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        lavenderTown: {
            name: 'Lavender Town',
            town: true,
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , pokemonTower: {
            name: 'Pokemon Tower'
            , pokes: ['Gastly', 'Haunter', 'Cubone']
            , minLevel: 13
            , maxLevel: 18,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , kroute8: {
            name: 'Route 8',
            pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra', 'Bellsprout'],
            minLevel: 15,
            maxLevel: 20,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , kroute7: {
            name: 'Route 7'
            , pokes: ['Pidgey', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Bellsprout']
            , minLevel: 18
            , maxLevel: 22,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        celadonCity: {
            name: 'Celadon City',
            town: true,
            trainer: {
                name: 'Erika',
                badge: 'Rainbow Badge',
                win: 'rainbow1',
                poke: [
                    ['Victreebel', 29],
                    ['Tangela', 24],
                    ['Vileplume', 29]
                ]
            },
            trainer1: {
                name: 'Erika',
                win: 'rainbow2',
                poke: [
                    ['Victreebel', 50],
                    ['Tangela', 50],
                    ['Gloom', 50],
                    ['Vileplume', 50]
                ]
            },
            trainer2: {
                name: 'Erika',
                win: 'rainbow3',
                poke: [
                    ['Victreebel', 75],
                    ['Tangela', 75],
                    ['Parasect', 75],
                    ['Exeggutor', 75],
                    ['Vileplume', 75]
                ]
            },
            trainer3: {
                name: 'Erika',
                win: 'rainbow4',
                poke: [
                    ['Victreebel', 100],
                    ['Tangela', 100],
                    ['Parasect', 100],
                    ['Exeggutor', 100],
                    ['Venusaur', 100],
                    ['Vileplume', 100]
                ]
            },
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        },
        saffronCity: {
            name: 'Saffron City',
            town: true,
            trainer: {
                name: 'Sabrina',
                badge: 'Marsh Badge',
                win: 'marsh1',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            trainer1: {
                name: 'Sabrina',
                win: 'marsh2',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            trainer2: {
                name: 'Sabrina',
                win: 'marsh3',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            trainer3: {
                name: 'Sabrina',
                win: 'marsh4',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        kkarateDojo: {
            name: 'Karate Dojo',
            pokes: ['Hitmonlee', 'Hitmonchan'],
            minLevel: 45,
            maxLevel: 55,
            respawn: 'saffronCity',
            _unlock: {
                badges: {
                    'Marsh Badge': true
                }
            }
        },
        kroute16: {
            name: 'Route 16'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Doduo', 'Snorlax']
            , minLevel: 18
            , maxLevel: 30,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , kroute17: {
            name: 'Route 17'
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Doduo']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , kroute18: {
            name: 'Route 18'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'celadonCity',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        fuchsiaCity: {
            name: 'Fuchsia City',
            town: true,
            trainer: {
                name: 'Koga',
                badge: 'Soul Badge',
                poke: [
                    ['Koffing', 37],
                    ['Muk', 39],
                    ['Koffing', 37],
                    ['Weezing', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        },
        safariZone: {
            name: 'Safari Zone',
            pokes: ['Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino', 'Parasect', 'Venonat', 'Exeggcute', 'Rhyhorn', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros'],
            minLevel: 22,
            maxLevel: 31,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        kroute15: {
            name: 'Route 15'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , kroute14: {
            name: 'Route 14'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 23
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , kroute13: {
            name: 'Route 13'
            , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        kroute12: {
            name: 'Route 12'
            , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax', 'Mr. Mime']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        powerPlant: {
            name: 'Power Plant'
            , pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Voltorb', 'Electrode', 'Electabuzz', 'Lickitung']
            , minLevel: 25
            , maxLevel: 35,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            },
            _special: [
                { requirement: { type: 'pokemonTypeDefeat', statistic: 'electricBeaten', need: 1000 }, pokemon: ['Zapdos'] },
            ],
        },
        kroute19: {
            name: 'Route 19'
            , pokes: ['Raticate', 'Pidgeotto', 'Oddish', 'Ditto']
            , minLevel: 26
            , maxLevel: 30,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , seafoamIsland: {
            name: 'Seafoam Island',
            pokes: ['Psyduck', 'Slowpoke', 'Seel', 'Shellder', 'Krabby', 'Horsea', 'Staryu', 'Jynx'],
            minLevel: 30,
            maxLevel: 40,
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            },
            _special: [
                { requirement: { type: 'pokemonTypeDefeat', statistic: 'iceBeaten', need: 1000 }, pokemon: ['Articuno'] },
            ],
        }
        , kroute20: {
            name: 'Route 20'
            , pokes: ['Raticate', 'Pidgeotto', 'Weepinbell', 'Kadabra']
            , minLevel: 27
            , maxLevel: 31,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        cinnabarIsland: {
            name: 'Cinnabar Island',
            town: true,
            trainer: {
                name: 'Blaine',
                badge: 'Volcano Badge',
                poke: [
                    ['Growlithe', 42],
                    ['Ponyta', 40],
                    ['Rapidash', 42],
                    ['Arcanine', 47]
                ]
            },
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , pokemonMansion: {
            name: 'Pokemon Mansion'
            , pokes: ['Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar']
            , minLevel: 32
            , maxLevel: 40,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                },
                statistics: {
                    'fireBeaten': 100
                }
            },
            _special: [
                { requirement: { type: 'pokemonTypeDefeat', statistic: 'fireBeaten', need: 1000 }, pokemon: ['Moltres'] },
            ],
        }
        , fossilCave: {
            name: 'Fossil Restorer'
            , pokes: ['Aerodactyl', 'Omanyte', 'Kabuto', 'Lapras']
            , minLevel: 32
            , maxLevel: 40,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , kroute21: {
            name: 'Route 21'
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela', 'Farfetchd']
            , minLevel: 21
            , maxLevel: 32,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , kroute23: {
            name: 'Route 23'
            , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Ditto']
            , minLevel: 33
            , maxLevel: 43,
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        }
        , victoryRoad: {
            name: 'Victory Road'
            , pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marowak']
            , minLevel: 36
            , maxLevel: 45,
            respawn: 'viridianCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
        }
        , ceruleanCave: {
            name: 'Cerulean Cave',
            pokes: ['Wigglytuff', 'Venomoth', 'Kadabra', 'Dodrio', 'Electrode', 'Marowak', 'Rhydon', 'Chansey', 'Ditto'],
            minLevel: 51,
            maxLevel: 60,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            },
            _special: [
                { requirement: { type: 'pokemonTypeDefeat', statistic: 'psychicBeaten', need: 10000 }, pokemon: ['Mewtwo'] },
            ],
        }
        , kOldRod: {
            name: 'Kanto Old Rod',
            pokes: ['Magikarp'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'palletTown',
            kantoOldRod: 1
        }
        , kGoodRod: {
            name: 'Kanto Good Rod',
            pokes: ['Psyduck', 'Goldeen', 'Poliwag', 'Tentacool'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'palletTown',
            kantoGoodRod: 1
        }
        , kSuperRod: {
            name: 'Kanto Super Rod',
            pokes: ['Shellder', 'Krabby', 'Horsea', 'Staryu', 'Dratini'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'palletTown',
            kantoSuperRod: 1
        }
    }
    , Johto: {
        _unlock: {
            badges: {
                'Earth Badge': true
            }
        },
        _global: {
            pokes: ['Chikorita', 'Cyndaquil', 'Totodile'],
            rarePokes: ['Shuckle', 'Raikou', 'Entei', 'Suicune', 'Ho-Oh', 'Celebi', 'Lugia'],
            superRare: []
        },
        NewBarkTown: {
            name: 'New Bark Town',
            town: true,
            trainer: {
                name: 'Prof. Elm',
                badge: null,
                poke: [
                    ['Chikorita', 15],
                    ['Cyndaquil', 15],
                    ['Totodile', 15]
                ]
            }
        }
        , jroute29: {
            name: 'Route 29'
            , pokes: ['Sentret', 'Hoothoot', 'Hoppip', 'Pidgey', 'Rattata']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'starter2'
        },
        cherrygroveCity: {
            name: 'Cherrygrove City',
            town: true
        }
        , jroute30: {
            name: 'Route 30'
            , pokes: ['Ledyba', 'Hoppip', 'Spinarak', 'Hoothoot', 'Caterpie', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Poliwag', 'Rattata', 'Metapod']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'cherrygroveCity'
        }
        , jroute46: {
            name: 'Route 46'
            , pokes: ['Rattata', 'Spearow', 'Jigglypuff', 'Geodude', 'Phanpy']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'NewBarkTown',
        }
        , jroute31: {
            name: 'Route 31'
            , pokes: ['Hoothoot', 'Rattata', 'Ledyba', 'Spinarak', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Poliwag', 'Hoppip', 'Gastly', 'Bellsprout']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'cherrygroveCity'
        }
        , darkCave: {
            name: 'Dark Cave'
            , pokes: ['Teddiursa', 'Dunsparce', 'Ursaring', 'Wobbuffet', 'Shuckle', 'Krabby', 'Geodude', 'Zubat', 'Goldeen', 'Magikarp']
            , minLevel: 2
            , maxLevel: 30,
            respawn: 'cherrygroveCity'
        },
        violetCity: {
            name: 'Violet City',
            town: true,
            trainer: {
                name: 'Falkner',
                badge: 'Zephyr Badge',
                poke: [
                    ['Pidgey', 7],
                    ['Pidgeotto', 9]
                ]
            }
        }
        , sproutTower: {
            name: 'Sprout Tower'
            , pokes: ['Rattata', 'Gastly']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , jroute32: {
            name: 'Route 32'
            , pokes: ['Mareep', 'Hoppip', 'Wooper', 'Hoothoot', 'Gastly', 'Ekans', 'Zubat', 'Rattata', 'Bellsprout', 'Pidgey']
            , minLevel: 4
            , maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , ruinsofAlph: {
            name: 'Ruins of Alph'
            , pokes: ['Natu', 'Smeargle', 'Wooper']
            , minLevel: 18
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , innerRuins: {
            name: 'Inner Ruins'
            , pokes: ['Unown']
            , minLevel: 5
            , maxLevel: 5,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , unionCave: {
            name: 'Union Cave'
            , pokes: ['Zubat', 'Geodude', 'Onix', 'Rattata', 'Golbat', 'Raticate', 'Lapras', 'Sandshrew', 'Wooper', 'Quagsire']
            , minLevel: 6
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , jroute33: {
            name: 'Route 33'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Geodude', 'Zubat', 'Hoppip']
            , minLevel: 6
            , maxLevel: 8,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , slowpokeWell: {
            name: 'Slowpoke Well'
            , pokes: ['Zubat', 'Slowpoke', 'Slowbro', 'Golbat', 'Slowking']
            , minLevel: 5
            , maxLevel: 25,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , azaleaTown: {
            name: 'Azalea Town',
            town: true,
            trainer: {
                name: 'Bugsy',
                badge: 'Hive Badge',
                poke: [
                    ['Metapod', 14],
                    ['Kakuna', 14],
                    ['Scyther', 16]
                ]
            },
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , ilexForest: {
            name: 'Ilex Forest'
            , pokes: ['Caterpie', 'Weedle', 'Metapod', 'Kakuna', 'Paras', 'Pidgey', 'Venonat', 'Zubat', 'Oddish', 'Psyduck']
            , minLevel: 5
            , maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        }
        , jroute34: {
            name: 'Route 34'
            , pokes: ['Snubbull', 'Ditto', 'Hoothoot', 'Abra', 'Jigglypuff', 'Drowzee', 'Rattata', 'Pidgey']
            , minLevel: 10
            , maxLevel: 12,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        },
        daycareHouse: {
            name: 'Daycare House'
            , pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'] // TODO: make these hatch from eggs
            , minLevel: 5
            , maxLevel: 5
        },
        goldenrodCity: {
            name: 'Goldenrod City',
            town: true,
            trainer: {
                name: 'Whitney',
                badge: 'Plain Badge',
                poke: [
                    ['Clefairy', 18],
                    ['Miltank', 20]
                ]
            },
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        }
        , jroute35: {
            name: 'Route 35'
            , pokes: ['Yanma', 'Noctowl', 'Pidgey', 'Nidoran M', 'Nidoran F', 'Jigglypuff', 'Psyduck', 'Growlithe', 'Abra', 'Drowzee', 'Hoothoot', 'Ditto', 'Snubbull']
            , minLevel: 10
            , maxLevel: 14,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , nationalPark: {
            name: 'National Park'
            , pokes: ['Sunkern', 'Ledyba', 'Spinarak', 'Hoothoot', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Nidoran M', 'Nidoran F', 'Venonat', 'Psyduck']
            , minLevel: 10
            , maxLevel: 15,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute36: {
            name: 'Route 36'
            , pokes: ['Stantler', 'Sudowoodo', 'Ledyba', 'Spinarak', 'Hoothoot', 'Pidgey', 'Nidoran M', 'Nidoran F', 'Vulpix', 'Growlithe', 'Bellsprout', 'Gastly']
            , minLevel: 13
            , maxLevel: 20,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute37: {
            name: 'Route 37'
            , pokes: ['Stantler', 'Spinarak', 'Ledyba', 'Hoothoot', 'Ledian', 'Ariados', 'Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , burnedTower: {
            name: 'Burned Tower'
            , pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , tinTower: {
            name: 'Tin Tower'
            , pokes: ['Rattata', 'Gastly']
            , minLevel: 20
            , maxLevel: 24,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        },
        ecruteakCity: {
            name: 'Ecruteak City',
            town: true,
            trainer: {
                name: 'Morty',
                badge: 'Fog Badge',
                poke: [
                    ['Gastly', 21],
                    ['Haunter', 21],
                    ['Haunter', 23],
                    ['Gengar', 25]
                ]
            },
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , jroute38: {
            name: 'Route 38'
            , pokes: ['Snubbull', 'Miltank', 'Noctowl', 'Pidgeotto', 'Rattata', 'Meowth', 'Raticate', 'Magnemite', 'Farfetchd', 'Tauros']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        }
        , jroute39: {
            name: 'Route 39'
            , pokes: ['Miltank', 'Noctowl', 'Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros']
            , minLevel: 15
            , maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        },
        olivineCity: {
            name: 'Olivine City',
            town: true,
            trainer: {
                name: 'Jasmine',
                badge: 'Mineral Badge',
                poke: [
                    ['Magnemite', 30],
                    ['Magnemite', 30],
                    ['Steelix', 35]
                ]
            },
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        }
        , jroute40: {
            name: 'Route 40'
            , pokes: ['Tentacool', 'Tentacruel']
            , minLevel: 15
            , maxLevel: 24,
            respawn: 'olivineCity',
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        },
        cianwoodCity: {
            name: 'Cianwood City',
            town: true,
            trainer: {
                name: 'Chuck',
                badge: 'Storm Badge',
                poke: [
                    ['Primeape', 27],
                    ['Poliwrath', 30]
                ]
            },
            _unlock: {
                badges: {
                    'Mineral Badge': true
                }
            }
        }
        , jroute41: {
            name: 'Route 41'
            , pokes: ['Mantine', 'Tentacool', 'Tentacruel']
            , minLevel: 20
            , maxLevel: 24,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , whirlIsland: {
            name: 'Whirl Island'
            , pokes: ['Krabby', 'Zubat', 'Seel', 'Golbat']
            , minLevel: 22
            , maxLevel: 26,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , jroute42: {
            name: 'Route 42'
            , pokes: ['Mareep', 'Flaaffy', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Zubat', 'Golbat', 'Mankey']
            , minLevel: 13
            , maxLevel: 17,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , mtMortar: {
            name: 'Mt. Mortar'
            , pokes: ['Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Raticate']
            , minLevel: 15
            , maxLevel: 32,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , rocketHideout: {
            name: 'Rocket Hideout'
            , pokes: ['Electrode', 'Voltorb', 'Geodude', 'Koffing']
            , minLevel: 23
            , maxLevel: 23,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        },
        mahoganyTown: {
            name: 'Mahogany Town',
            town: true,
            trainer: {
                name: 'Pryce',
                badge: 'Glacier Badge',
                poke: [
                    ['Seel', 27],
                    ['Dewgong', 29],
                    ['Piloswine', 31]
                ]
            },
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , jroute43: {
            name: 'Route 43'
            , pokes: ['Girafarig', 'Flaaffy', 'Mareep', 'Noctowl', 'Sentret', 'Furret', 'Pidgeotto', 'Raticate', 'Venonat', 'Venomoth']
            , minLevel: 15
            , maxLevel: 17,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , lakeofRage: {
            name: 'Lake of Rage'
            , pokes: ['Gyarados', 'Magikarp']
            , minLevel: 30
            , maxLevel: 30,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , jroute44: {
            name: 'Route 44'
            , pokes: ['Lickitung', 'Tangela', 'Bellsprout', 'Weepinbell', 'Poliwag', 'Poliwhirl']
            , minLevel: 22
            , maxLevel: 26,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , icePath: {
            name: 'Ice Path'
            , pokes: ['Swinub', 'Delibird', 'Sneasel', 'Zubat', 'Golbat', 'Jynx']
            , minLevel: 21
            , maxLevel: 24,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , dragonsDen: {
            name: 'Dragons Den'
            , pokes: ['Dratini']
            , minLevel: 10
            , maxLevel: 14,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , jroute45: {
            name: 'Route 45'
            , pokes: ['Teddiursa', 'Gligar', 'Phanpy', 'Skarmory', 'Donphan']
            , minLevel: 20
            , maxLevel: 27,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        },
        blackthornCity: {
            name: 'Blackthorn City',
            town: true,
            trainer: {
                name: 'Clair',
                badge: 'Rising Badge',
                poke: [
                    ['Dragonair', 37],
                    ['Dragonair', 37],
                    ['Dragonair', 37],
                    ['Kingdra', 40]
                ]
            },
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , jroute47: {
            name: 'Route 47'
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Ditto', 'Farfetchd', 'Noctowl', 'Miltank']
            , minLevel: 40
            , maxLevel: 43,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute48: {
            name: 'Route 48'
            , pokes: ['Fearow', 'Vulpix', 'Gloom', 'Diglett', 'Growlithe', 'Farfetchd', 'Tauros', 'Hoppip', 'Girafarig']
            , minLevel: 40
            , maxLevel: 43,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute26: {
            name: 'Route 26'
            , pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire']
            , minLevel: 28
            , maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute27: {
            name: 'Route 27'
            , pokes: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Noctowl', 'Quagsire']
            , minLevel: 28
            , maxLevel: 32,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jroute28: {
            name: 'Route 28'
            , pokes: ['Ponyta', 'Tangela', 'Ursaring', 'Donphan', 'Rapidash', 'Arbok', 'Doduo', 'Sneasel', 'Poliwhirl', 'Golbat']
            , minLevel: 39
            , maxLevel: 42,
            respawn: 'NewBarkTown',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , mtSilver: {
            name: 'Mt.Silver'
            , pokes: ['Ursaring', 'Donphan', 'Misdreavus', 'Larvitar', 'Pupitar', 'Arbok', 'Golbat', 'Poliwhirl', 'Dodrio', 'Rapidash', 'Sneasel', 'Onix']
            , minLevel: 38
            , maxLevel: 48,
            respawn: 'blackthornCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , jOldRod: {
            name: 'Johto Old Rod',
            pokes: ['Remoraid'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'NewBarkTown',
            johtoOldRod: 1
        }
        , jGoodRod: {
            name: 'Johto Good Rod',
            pokes: ['Marill', 'Chinchou', 'Wooper'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'NewBarkTown',
            johtoGoodRod: 1
        }
        , jSuperRod: {
            name: 'Johto Super Rod',
            pokes: ['Corsola', 'Qwilfish', 'Lanturn', 'Octillery'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'NewBarkTown',
            johtoSuperRod: 1
        }
        , headbutt: {
            name: 'Headbutt'
            , pokes: ['Aipom', 'Pineco', 'Heracross', 'Spinarak', 'Ledyba', 'Hoothoot', 'Noctowl']
            , minLevel: 10
            , maxLevel: 10,
            respawn: 'blackthornCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
    },
    Hoenn: {
        _unlock: {
            badges: {
                'Rising Badge': true
            }
        },
        _global: {
            pokes: ['Treecko', 'Mudkip', 'Torchic'],
            rarePokes: ['Deoxys', 'Jirachi', 'Rayquaza'],
            superRare: []
        },
        littlerootTown: {
            name: 'Littleroot Town',
            town: true,
            trainer: {
                name: 'Prof. Birch',
                badge: null,
                poke: [
                    ['Treecko', 15],
                    ['Mudkip', 15],
                    ['Torchic', 15]
                ]
            }
        },
        hroute101: {
            name: 'Route 101'
            , pokes: ['Zigzagoon', 'Wurmple', 'Poochyena']
            , minLevel: 2
            , maxLevel: 3
        },
        oldaleTown: {
            name: 'Oldale Town',
            town: true,
        },
        hroute103: {
            name: 'Route 103'
            , pokes: ['Zigzagoon', 'Poochyena', 'Wingull']
            , minLevel: 2
            , maxLevel: 4
        },
        hroute102: {
            name: 'Route 102'
            , pokes: ['Zigzagoon', 'Poochyena', 'Lotad', 'Wurmple', 'Seedot', 'Ralts', 'Surskit']
            , minLevel: 3
            , maxLevel: 4
        },
        petalburgCity: {
            name: 'Petalburg City',
            town: true,
            trainer: {
                name: 'Norman',
                badge: 'Balance Badge',
                poke: [
                    ['Slaking', 57],
                    ['Blissey', 57],
                    ['Kangaskhan', 55],
                    ['Tauros', 57],
                    ['Spinda', 58],
                    ['Slaking', 60],
                ]
            },
        },
        hroute104: {
            name: 'Route 104'
            , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Wingull', 'Taillow']
            , minLevel: 3
            , maxLevel: 5
        },
        petalburgWoods: {
            name: 'Petalburg Woods'
            , pokes: ['Zigzagoon', 'Poochyena', 'Wurmple', 'Shroomish', 'Silcoon', 'Cascoon', 'Taillow', 'Slakoth']
            , minLevel: 5
            , maxLevel: 6
        },
        rustboroCity: {
            name: 'Rustboro City',
            town: true,
            trainer: {
                name: 'Roxanne',
                badge: 'Stone Badge',
                poke: [
                    ['Aerodactyl', 47],
                    ['Golem', 47],
                    ['Omastar', 47],
                    ['Kabutops', 50],
                    ['Steelix', 50],
                    ['Nosepass', 52],
                ]
            },
        },
        hroute116: {
            name: 'Route 116'
            , pokes: ['Zigzagoon', 'Poochyena', 'Whismur', 'Taillow', 'Nincada', 'Skitty']
            , minLevel: 6
            , maxLevel: 8,
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        }
        , rusturfTunnel: {
            name: 'Rusturf Tunnel'
            , pokes: ['Whismur']
            , minLevel: 5
            , maxLevel: 8,
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        }
        , hroute105: {
            name: 'Route 105'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        hroute106: {
            name: 'Route 106'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        dewfordTown: {
            name: 'Dewford Town',
            town: true,
            trainer: {
                name: 'Brawly',
                badge: 'Knuckle Badge',
                poke: [
                    ['Hitmonlee', 47],
                    ['Hitmonchan', 47],
                    ['Machamp', 47],
                    ['Medicham', 50],
                    ['Hitmontop', 50],
                    ['Hariyama', 52],
                ]
            },
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        graniteCave: {
            name: 'Granite Cave'
            , pokes: ['Makuhita', 'Aron', 'Mawile', 'Sableye', 'Nosepass']
            , minLevel: 6
            , maxLevel: 12,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute107: {
            name: 'Route 107'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute108: {
            name: 'Route 108'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute109: {
            name: 'Route 109'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        slateportCity: {
            name: 'Slateport City',
            town: true,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        hroute110: {
            name: 'Route 110'
            , pokes: ['Zigzagoon', 'Poochyena', 'Electrike', 'Gulpin', 'Minun', 'Wingull', 'Plusle']
            , minLevel: 12
            , maxLevel: 13,
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        mauvilleCity: {
            name: 'Mauville City',
            town: true,
            trainer: {
                name: 'Wattson',
                badge: 'Dynamo Badge',
                poke: [
                    ['Electabuzz', 50],
                    ['Raichu', 51],
                    ['Ampharos', 53],
                    ['Electrode', 53],
                    ['Magneton', 53],
                    ['Manectric', 55],
                ]
            },
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        },
        newMauville: {
            name: 'New Mauville'
            , pokes: ['Magnemite', 'Magneton', 'Voltorb', 'Electrode']
            , minLevel: 22
            , maxLevel: 26,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute117: {
            name: 'Route 117'
            , pokes: ['Poochyena', 'Zigzagoon', 'Roselia', 'Illumise', 'Volbeat', 'Seedot', 'Surskit']
            , minLevel: 13
            , maxLevel: 14,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute111: {
            name: 'Route 111'
            , pokes: ['Trapinch', 'Baltoy', 'Cacnea']
            , minLevel: 19
            , maxLevel: 22,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , fieryPath: {
            name: 'Fiery Path'
            , pokes: ['Numel', 'Torkoal']
            , minLevel: 14
            , maxLevel: 16,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , jaggedPass: {
            name: 'Jagged Pass'
            , pokes: ['Numel', 'Spoink']
            , minLevel: 20
            , maxLevel: 22,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute113: {
            name: 'Route 113'
            , pokes: ['Spinda']
            , minLevel: 14
            , maxLevel: 16,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute114: {
            name: 'Route 114'
            , pokes: ['Swablu', 'Seedot', 'Zangoose', 'Nuzleaf', 'Surskit', 'Lotad', 'Seviper', 'Lombre']
            , minLevel: 15
            , maxLevel: 18,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        meteorFalls: {
            name: 'Meteor Falls'
            , pokes: ['Solrock', 'Lunatone', 'Bagon']
            , minLevel: 14
            , maxLevel: 35,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute115: {
            name: 'Route 115'
            , pokes: ['Taillow', 'Swablu', 'Swellow', 'Wingull']
            , minLevel: 23
            , maxLevel: 26,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        lavaridgeTown: {
            name: 'Lavaridge Town',
            town: true,
            trainer: {
                name: 'Flannery',
                badge: 'Heat Badge',
                poke: [
                    ['Arcanine', 55],
                    ['Magcargo', 51],
                    ['Houndoom', 53],
                    ['Rapidash', 53],
                    ['Camerupt', 53],
                    ['Torkoal', 55],
                ]
            },
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute118: {
            name: 'Route 118'
            , pokes: ['Zigzagoon', 'Electrike', 'Wingull', 'Linoone', 'Manectric', 'Kecleon']
            , minLevel: 24
            , maxLevel: 27,
            _unlock: {
                badges: {
                    'Heat Badge': true
                }
            }
        }
        , hroute119: {
            name: 'Route 119'
            , pokes: ['Zigzagoon', 'Linoone', 'Tropius', 'Kecleon']
            , minLevel: 25
            , maxLevel: 27,
            _unlock: {
                badges: {
                    'Heat Badge': true
                }
            }
        }
        , weatherInstitute: {
            name: 'Weather Institute'
            , pokes: ['Castform']
            , minLevel: 25
            , maxLevel: 25,
            _unlock: {
                badges: {
                    'Heat Badge': true
                }
            }
        },
        fortreeCity: {
            name: 'Fortree City',
            town: true,
            trainer: {
                name: 'Winona',
                badge: 'Feather Badge',
                poke: [
                    ['Noctowl', 53],
                    ['Tropius', 55],
                    ['Pelipper', 55],
                    ['Dragonite', 58],
                    ['Skarmory', 57],
                    ['Altaria', 60],
                ]
            },
            _unlock: {
                badges: {
                    'Heat Badge': true
                }
            }
        },
        hroute120: {
            name: 'Route 120'
            , pokes: ['Linoone', 'Mightyena', 'Zigzagoon', 'Poochyena', 'Seedot', 'Surskit', 'Absol']
            , minLevel: 25
            , maxLevel: 27,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute121: {
            name: 'Route 121'
            , pokes: ['Duskull', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon']
            , minLevel: 25
            , maxLevel: 28,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hoennSafarZone1: {
            name: 'Hoenn Safari Zone (R/S)'
            ,
            pokes: ['Oddish', 'Girafarig', 'Doduo', 'Natu', 'Wobbuffet', 'Pikachu', 'Gloom', 'Rhyhorn', 'Phanpy', 'Dodrio', 'Xatu', 'Heracross', 'Pinsir']
            ,
            minLevel: 25
            ,
            maxLevel: 31,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hoennSafarZone2: {
            name: 'Hoenn Safari Zone (E)',
            pokes: ['Aipom', 'Teddiursa', 'Ledyba', 'Sunkern', 'Hoothoot', 'Pineco', 'Houndour', 'Miltank', 'Mareep', 'Spinarak', 'Gligar', 'Snubbull', 'Stantler'],
            minLevel: 33,
            maxLevel: 40,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute122: {
            name: 'Route 122'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , myPyre: {
            name: 'Mt. Pyre'
            , pokes: ['Duskull', 'Shuppet', 'Meditite', 'Chimecho', 'Wingull']
            , minLevel: 22
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute123: {
            name: 'Route 123'
            , pokes: ['Shuppet', 'Duskull', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Wingull', 'Linoone', 'Kecleon']
            , minLevel: 25
            , maxLevel: 28,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        lilycoveCity: {
            name: 'Lilycove City',
            town: true,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        hroute124: {
            name: 'Route 124'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        mossdeepCity: {
            name: 'Mossdeep City',
            town: true,
            trainer: {
                name: 'Liza & Tate',
                badge: 'Mind Badge',
                poke: [
                    ['Hypno', 64],
                    ['Claydol', 66],
                    ['Slowking', 66],
                    ['Xatu', 68],
                    ['Lunatone', 70],
                    ['Solrock', 70],
                ]
            },
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        },
        hroute125: {
            name: 'Route 125'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , shoalCave: {
            name: 'Shoal Cave'
            , pokes: ['Spheal', 'Snorunt']
            , minLevel: 26
            , maxLevel: 32,
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute126: {
            name: 'Route 126'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute127: {
            name: 'Route 127'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute128: {
            name: 'Route 128'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        },
        sootopolisCity: {
            name: 'Sootopolis City',
            town: true,
            trainer: {
                name: 'Juan',
                badge: 'Rain Badge',
                poke: [
                    ['Lapras', 75],
                    ['Whiscash', 75],
                    ['Politoed', 78],
                    ['Walrein', 78],
                    ['Crawdaunt', 79],
                    ['Kingdra', 80],
                ]
            },
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        },
        hVictoryRoad: {
            name: 'Victory Road',
            pokes: ['Lairon', 'Hariyama', 'Medicham', 'Loudred', 'Makuhita', 'Lairon', 'Whismur', 'Aron', 'Sableye', 'Mawile'],
            minLevel: 36,
            maxLevel: 42,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute129: {
            name: 'Route 129'
            , pokes: ['Wingull', 'Pelipper', 'Wailord']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute130: {
            name: 'Route 130'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , mirageIsland: {
            name: 'Mirage Island'
            , pokes: ['Wynaut']
            , minLevel: 5
            , maxLevel: 50,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute131: {
            name: 'Route 131'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , skyPillar: {
            name: 'Sky Pillar'
            , pokes: ['Mawile', 'Claydol', 'Dusclops', 'Sableye', 'Banette', 'Altaria']
            , minLevel: 34
            , maxLevel: 60,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute132: {
            name: 'Route 132'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute133: {
            name: 'Route 133'
            , pokes: ['Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , regiRuins: {
            name: 'Ruins of Regi'
            , pokes: ['Regice', 'Regirock', 'Registeel']
            , minLevel: 40
            , maxLevel: 40,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , southernIsland: {
            name: 'Southern Island'
            , pokes: ['Latios', 'Latias']
            , minLevel: 50
            , maxLevel: 50,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , caveOfOrigin: {
            name: 'Cave of Origin'
            , pokes: ['Kyogre', 'Groudon']
            , minLevel: 45
            , maxLevel: 45,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , underwater: {
            name: 'Underwater'
            , pokes: ['Clamperl', 'Relicanth']
            , minLevel: 20
            , maxLevel: 35,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hOldRod: {
            name: 'Hoenn Old Rod',
            pokes: ['Feebas', 'Azurill'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'littlerootTown',
            hoennOldRod: 1
        }
        , hGoodRod: {
            name: 'Hoenn Good Rod',
            pokes: ['Luvdisc', 'Barboach', 'Corphish'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'littlerootTown',
            hoennGoodRod: 1
        }
        , hSuperRod: {
            name: 'Hoenn Super Rod',
            pokes: ['Wailmer', 'Carvanha'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'littlerootTown',
            hoennSuperRod: 1
        }
    }
    /*
    ,
    Sinnoh: {
        _unlock: {
            statistics: {
                beaten: 5000,
                shinyCaught: 1
            },
            dex: {
                caughtCount: 370
            }
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: []
        },
        starter4: {
            name: 'Twinleaf Town'
            , pokes: ['Turtwig', 'Chimchar', 'Piplup']
            , minLevel: 5
            , maxLevel: 5
        }
        , route76: {
            name: 'Route 201'
            , pokes: ['Starly', 'Bidoof', 'Kricketot']
            , minLevel: 2
            , maxLevel: 3
        }
        , special66: {
            name: 'Lake Verity'
            , pokes: ['Starly', 'Bidoof']
            , minLevel: 2
            , maxLevel: 4
        }
        , route77: {
            name: 'Route 202'
            , pokes: ['Starly', 'Bidoof', 'Shinx', 'Kricketot']
            , minLevel: 2
            , maxLevel: 4
        }
        , route78: {
            name: 'Route 203'
            , pokes: ['Starly', 'Bidoof', 'Shinx', 'Kricketot']
            , minLevel: 4
            , maxLevel: 6
        }
        , special67: {
            name: 'Oreburgh Gate'
            , pokes: ['Zubat', 'Psyduck', 'Geodude']
            , minLevel: 5
            , maxLevel: 8
        }
        , special67a: {
            name: 'Oreburgh City'
            , pokes: ['Cranidos', 'Shieldon']
            , minLevel: 20
            , maxLevel: 20
        }
        , special68: {
            name: 'Oreburgh Mine'
            , pokes: ['Geodude', 'Zubat', 'Onix']
            , minLevel: 5
            , maxLevel: 10
        }
        , route79: {
            name: 'Route 204'
            , pokes: ['Starly', 'Bidoof', 'Shinx', 'Budew', 'Kricketot']
            , minLevel: 3
            , maxLevel: 6
        }
        , special69: {
            name: 'Floaroma Town'
            , pokes: ['Combee', 'Burmy', 'Cherubi', 'Munchlax']
            , minLevel: 5
            , maxLevel: 15
        }
        , route80: {
            name: 'Route 205'
            , pokes: ['Shellos', 'Buizel', 'Bidoof', 'Pachirisu']
            , minLevel: 8
            , maxLevel: 12
        }
        , special70: {
            name: 'Valley Windworks'
            , pokes: ['Shellos', 'Buizel', 'Shinx', 'Pachirisu', 'Bidoof']
            , minLevel: 7
            , maxLevel: 12
        }
        , special71: {
            name: '99 Luftballons'
            , pokes: ['Drifloon']
            , minLevel: 20
            , maxLevel: 20
        }
        , special72: {
            name: 'Fuego Ironworks'
            , pokes: ['Floatzel', 'Shellos', 'Gastrodon', 'Shinx', 'Luxio', 'Pachirisu']
            , minLevel: 28
            , maxLevel: 30
        }
        , special73: {
            name: 'Eterna Forest'
            , pokes: ['Budew', 'Buneary', 'Bidoof', 'Kricketot']
            , minLevel: 10
            , maxLevel: 14
        }
        , special74: {
            name: 'Old Chateau'
            , pokes: ['Gastly', 'Haunter']
            , minLevel: 12
            , maxLevel: 16
        }
        , special75: {
            name: 'Strange TV'
            , pokes: ['Rotom']
            , minLevel: 15
            , maxLevel: 15
        }
        , route81: {
            name: 'Route 206'
            , pokes: ['Kricketune', 'Bronzor', 'Kricketot', 'Stunky']
            , minLevel: 14
            , maxLevel: 19
        }
        , special76: {
            name: 'Wayward Cave'
            , pokes: ['Bronzor', 'Gible']
            , minLevel: 14
            , maxLevel: 20
        }
        , route82: {
            name: 'Route 207'
            , pokes: ['Machop', 'Geodude', 'Ponyta']
            , minLevel: 5
            , maxLevel: 7
        }
        , special77: {
            name: 'Mt. Coronet'
            , pokes: ['Chingling', 'Bronzor', 'Bronzong', 'Snover', 'Abomasnow']
            , minLevel: 12
            , maxLevel: 40
        }
        , route83: {
            name: 'Route 208'
            , pokes: ['Bidoof', 'Bibarel']
            , minLevel: 16
            , maxLevel: 18
        }
        , special78: {
            name: 'Hearthome City'
            , pokes: ['Happiny']
            , minLevel: 1
            , maxLevel: 1
        }
        , route84: {
            name: 'Route 209'
            , pokes: ['Bibarel', 'Mime Jr.', 'Starly', 'Staravia', 'Bonsly']
            , minLevel: 16
            , maxLevel: 18
        }
        , special79: {
            name: 'Hallowed Tower'
            , pokes: ['Spiritomb']
            , minLevel: 25
            , maxLevel: 25
        }
        , special80: {
            name: 'Lost Tower'
            , pokes: ['Zubat', 'Gastly', 'Murkrow', 'Misdreavus', 'Duskull', 'Golbat']
            , minLevel: 16
            , maxLevel: 19
        }
        , special81: {
            name: 'Solaceon Ruins'
            , pokes: ['Unown']
            , minLevel: 14
            , maxLevel: 30
        }
        , route85: {
            name: 'Route 210'
            , pokes: ['Mime Jr.', 'Kricketune', 'Bonsly', 'Staravia']
            , minLevel: 19
            , maxLevel: 21
        }
        , route86: {
            name: 'Route 211'
            , pokes: ['Chingling', 'Bronzor']
            , minLevel: 27
            , maxLevel: 30
        }
        , route87: {
            name: 'Route 212'
            , pokes: ['Budew', 'Starly', 'Kricketune', 'Staravia']
            , minLevel: 16
            , maxLevel: 24
        }
        , special82: {
            name: 'Trophy Garden'
            ,
            pokes: ['Clefairy', 'Jigglypuff', 'Meowth', 'Chansey', 'Ditto', 'Eevee', 'Cleffa', 'Igglybuff', 'Marill', 'Azurill', 'Plusle', 'Minun', 'Castform']
            ,
            minLevel: 16
            ,
            maxLevel: 18
        }
        , special83: {
            name: 'Great Marsh'
            ,
            pokes: ['Bibarel', 'Starly', 'Budew', 'Bidoof', 'Staravia', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine']
            ,
            minLevel: 20
            ,
            maxLevel: 30
        }
        , route88: {
            name: 'Route 213'
            , pokes: ['Shellos', 'Buizel', 'Chatot', 'Floatzel']
            , minLevel: 20
            , maxLevel: 26
        }
        , special84: {
            name: 'Valor Lakefront'
            , pokes: ['Staravia', 'Bibarel', 'Kricketune']
            , minLevel: 21
            , maxLevel: 27
        }
        , route89: {
            name: 'Route 214'
            , pokes: ['Stunky', 'Kricketune']
            , minLevel: 21
            , maxLevel: 24
        }
        , special93: {
            name: 'Ruin Maniac Cave'
            , pokes: ['Hippopotas']
            , minLevel: 22
            , maxLevel: 23
        }
        , special85: {
            name: 'Sendoff Spring'
            , pokes: ['Bibarel', 'Staravia', 'Chingling']
            , minLevel: 37
            , maxLevel: 54
        }
        , special86: {
            name: 'Turnback Cave'
            , pokes: ['Bronzong', 'Bronzor', 'Chingling']
            , minLevel: 45
            , maxLevel: 65
        }
        , route90: {
            name: 'Route 215'
            , pokes: ['Kricketune', 'Staravia']
            , minLevel: 19
            , maxLevel: 22
        }
        , route91: {
            name: 'Route 216'
            , pokes: ['Snover']
            , minLevel: 32
            , maxLevel: 35
        }
        , route217: {
            name: 'Route 217'
            , pokes: ['Sneasel', 'Machoke', 'Medicham', 'Meditite', 'Swinub', 'Snorunt']
            , minLevel: 32
            , maxLevel: 35
        }
        , special87: {
            name: 'Lake Acuity'
            , pokes: ['Bibarel', 'Chingling', 'Snover']
            , minLevel: 34
            , maxLevel: 41
        }
        , special88: {
            name: 'Snowpoint Temple'
            , pokes: ['Golbat', 'Sneasel', 'Onix', 'Graveler', 'Steelix', 'Smoochum', 'Jynx', 'Sneasel']
            , minLevel: 47
            , maxLevel: 56
        }
        , route92: {
            name: 'Route 218'
            , pokes: ['Floatzel', 'Shellos', 'Gastrodon', 'Glameow', 'Chatot']
            , minLevel: 28
            , maxLevel: 31
        }
        , special89: {
            name: 'Iron Island'
            , pokes: ['Riolu']
            , minLevel: 1
            , maxLevel: 1
        }
        , route93: {
            name: 'Route 219'
            , pokes: ['Tentacool', 'Wingull', 'Tentacruel', 'Pelipper']
            , minLevel: 20
            , maxLevel: 40
        }
        , route94: {
            name: 'Route 220'
            , pokes: ['Tentacool', 'Wingull', 'Tentacruel', 'Pelipper']
            , minLevel: 20
            , maxLevel: 40
        }
        , route95: {
            name: 'Route 221'
            , pokes: ['Floatzel', 'Stunky', 'Skuntank', 'Shellos', 'Gastrodon']
            , minLevel: 28
            , maxLevel: 31
        }
        , route96: {
            name: 'Route 222'
            , pokes: ['Gastrodon', 'Floatzel', 'Chatot', 'Glameow', 'Luxio', 'Purugly']
            , minLevel: 38
            , maxLevel: 42
        }
        , route97: {
            name: 'Route 223'
            , pokes: ['Mantyke']
            , minLevel: 30
            , maxLevel: 45
        }
        , special90: {
            name: 'Victory Road'
            , pokes: ['Machoke', 'Golbat', 'Graveler', 'Medicham', 'Onix', 'Steelix', 'Rhyhorn', 'Rhydon']
            , minLevel: 40
            , maxLevel: 46
        }
        , route98: {
            name: 'Route 224'
            , pokes: ['Roselia', 'Gloom', 'Weepinbell', 'Beautifly', 'Dustox', 'Bellsprout', 'Pelipper', 'Oddish']
            , minLevel: 49
            , maxLevel: 52
        }
        , special91: {
            name: 'Fight Area'
            , pokes: ['Gallade', 'Froslass']
            , minLevel: 30
            , maxLevel: 30
        }
        , route99: {
            name: 'Route 225'
            , pokes: ['Fearow', 'Raticate', 'Banette', 'Roselia', 'Rattata', 'Spearow', 'Machoke', 'Graveler']
            , minLevel: 47
            , maxLevel: 51
        }
        , route100: {
            name: 'Route 226'
            ,
            pokes: ['Fearow', 'Raticate', 'Golduck', 'Machoke', 'Rattata', 'Spearow', 'Graveler', 'Wingull', 'Banette']
            ,
            minLevel: 47
            ,
            maxLevel: 53
        }
        , route101: {
            name: 'Route 227'
            ,
            pokes: ['Rhydon', 'Camerupt', 'Fearow', 'Weezing', 'Golbat', 'Banette', 'Graveler', 'Rhyhorn', 'Skarmory', 'Numel']
            ,
            minLevel: 24
            ,
            maxLevel: 56
        }
        , special92: {
            name: 'Stark Mountain'
            , pokes: ['Magcargo', 'Graveler', 'Golbat', 'Machoke', 'Weezing', 'Geodude', 'Onix', 'Slugma', 'Camerupt']
            , minLevel: 27
            , maxLevel: 58
        }
        , route102: {
            name: 'Route 228'
            , pokes: ['Cacturne', 'Dugtrio', 'Rhydon', 'Diglett', 'Cacnea']
            , minLevel: 23
            , maxLevel: 54
        }
        , route103: {
            name: 'Route 229'
            ,
            pokes: ['Gloom', 'Weepinbell', 'Ledian', 'Illumise', 'Roselia', 'Oddish', 'Bellsprout', 'Scyther', 'Volbeat', 'Pinsir', 'Pidgey', 'Beautifly', 'Dustox']
            ,
            minLevel: 20
            ,
            maxLevel: 52
        }
        , route104: {
            name: 'Route 230'
            ,
            pokes: ['Gloom', 'Weepinbell', 'Floatzel', 'Oddish', 'Bellsprout', 'Golduck', 'Beautifly', 'Gastrodon', 'Dustox', 'Wingull']
            ,
            minLevel: 18
            ,
            maxLevel: 51
        }
        , special94: {
            name: 'Lakes'
            , pokes: ['Uxie', 'Azelf', 'Mesprit']
            , minLevel: 50
            , maxLevel: 50
        }
        , special95: {
            name: 'Spear Pillar'
            , pokes: ['Dialga', 'Palkia']
            , minLevel: 47
            , maxLevel: 47
        }
        , special96: {
            name: 'Distortion World'
            , pokes: ['Giratina']
            , minLevel: 47
            , maxLevel: 47
        }
        , special97: {
            name: 'Slow Down'
            , pokes: ['Regigigas']
            , minLevel: 70
            , maxLevel: 70
        }
        , special98: {
            name: 'Volcano'
            , pokes: ['Heatran']
            , minLevel: 70
            , maxLevel: 70
        }
        , special99: {
            name: 'Mysterious Sea'
            , pokes: ['Phione', 'Manaphy']
            , minLevel: 1
            , maxLevel: 1
        }
        , special100: {
            name: 'Moon Island'
            , pokes: ['Cresselia', 'Darkrai']
            , minLevel: 50
            , maxLevel: 50
        }
        , special101: {
            name: 'Flower Paradise'
            , pokes: ['Shaymin']
            , minLevel: 30
            , maxLevel: 30
        }
        , special102: {
            name: 'Hall of Origin'
            , pokes: ['Arceus']
            , minLevel: 80
            , maxLevel: 80
        }
        , water6: {
            name: 'Fishing'
            , pokes: {
                1: ['Finneon'],
                2: ['Mantyke', 'Buizel'],
                3: ['Lumineon', 'Mantyke', 'Floatzel']
            }
            , minLevel: 3
            , maxLevel: 55
            , fishing: 1
        }
    },
    Unova: {
        _unlock: {
            currency: 10000,
            statistics: {
                beaten: 25000,
                shinyCaught: 25
            },
            dex: {
                caughtCount: 480
            }
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: []
        },
        starter5: {
            name: 'Aspertia City'
            , pokes: ['Snivy', 'Tepig', 'Oshawott']
            , minLevel: 5
            , maxLevel: 5
        }
        , route105: {
            name: 'Route 19'
            , pokes: ['Patrat', 'Purrloin', 'Lillipup']
            , minLevel: 2
            , maxLevel: 4
        }
        , route106: {
            name: 'Route 20'
            , pokes: ['Pidove', 'Venipede', 'Patrat', 'Purrloin', 'Sewaddle']
            , minLevel: 2
            , maxLevel: 4
        }
        , special103: {
            name: 'Floccesy Ranch'
            , pokes: ['Azurill', 'Mareep', 'Psyduck', 'Riolu']
            , minLevel: 4
            , maxLevel: 7
        }
        , special104: {
            name: 'Virbank Complex'
            , pokes: ['Magby', 'Magnemite', 'Growlithe', 'Elekid', 'Koffing']
            , minLevel: 10
            , maxLevel: 13
        }
        , special105: {
            name: 'Castelia City'
            , pokes: ['Cottonee', 'Pidove', 'Petilil', 'Whimsicott', 'Lilligant']
            , minLevel: 16
            , maxLevel: 18
        }
        , special106: {
            name: 'Castelia Sewers'
            , pokes: ['Rattata', 'Zubat', 'Grimer']
            , minLevel: 14
            , maxLevel: 17
        }
        , route107: {
            name: 'Route 4'
            , pokes: ['Sandile', 'Darumaka', 'Trubbish', 'Scraggy', 'Minccino']
            , minLevel: 14
            , maxLevel: 17
        }
        , special107: {
            name: 'Desert Resort'
            , pokes: ['Sandile', 'Darumaka', 'Maractus', 'Sigilyph', 'Dwebble']
            , minLevel: 18
            , maxLevel: 21
        }
        , special108: {
            name: 'Relic Castle'
            , pokes: ['Sandile', 'Yamask', 'Krokorok']
            , minLevel: 18
            , maxLevel: 30
        }
        , special133: {
            name: 'Ancient Path'
            , pokes: ['Roggenrola', 'Timburr', 'Woobat']
            , minLevel: 16
            , maxLevel: 18
        }
        , route108: {
            name: 'Route 5'
            , pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis']
            , minLevel: 21
            , maxLevel: 24
        }
        , special109: {
            name: 'Driftveil Drawbridge'
            , pokes: ['Ducklett']
            , minLevel: 22
            , maxLevel: 25
        }
        , route109: {
            name: 'Route 6'
            , pokes: ['Deerling', 'Karrablast', 'Tranquill', 'Foongus', 'Swadloon', 'Shelmet']
            , minLevel: 23
            , maxLevel: 26
        }
        , special110: {
            name: 'Mistralton Cave'
            , pokes: ['Deino', 'Boldore', 'Woobat', 'Axew']
            , minLevel: 27
            , maxLevel: 31
        }
        , special111: {
            name: 'Chargestone Cave'
            , pokes: ['Joltik', 'Klink', 'Ferroseed', 'Boldore', 'Tynamo']
            , minLevel: 24
            , maxLevel: 28
        }
        , special112: {
            name: 'Reversal Mountain'
            , pokes: ['Skorupi', 'Spoink', 'Drifblim', 'Trapinch', 'Grumpig', 'Skarmory', 'Numel', 'Camerupt']
            , minLevel: 32
            , maxLevel: 38
        }
        , special113: {
            name: 'Strange House'
            , pokes: ['Gothita', 'Gothorita', 'Solosis', 'Duosion']
            , minLevel: 31
            , maxLevel: 34
        }
        , special114: {
            name: 'Nature Preserve'
            , pokes: ['Nuzleaf', 'Altaria', 'Golduck', 'Noctowl', 'Girafarig', 'Kecleon']
            , minLevel: 64
            , maxLevel: 67
        }
        , route110: {
            name: 'Route 7'
            , pokes: ['Blitzle', 'Cubchoo', 'Deerling', 'Zebstrika', 'Watchog', 'Tranquill', 'Foongus']
            , minLevel: 30
            , maxLevel: 33
        }
        , special115: {
            name: 'Celestial Tower'
            , pokes: ['Golett', 'Litwick', 'Elgyem']
            , minLevel: 30
            , maxLevel: 33
        }
        , special116: {
            name: 'Twist Mountain'
            , pokes: ['Vanillite', 'Boldore', 'Gurdurr', 'Heatmor', 'Durant', 'Woobat', 'Beartic', 'Cryogonal']
            , minLevel: 54
            , maxLevel: 57
        }
        , special117: {
            name: 'Icirrus City'
            , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast']
            , minLevel: 54
            , maxLevel: 57
        }
        , special118: {
            name: 'Dragonspiral Tower'
            , pokes: ['Sawsbuck', 'Vanillish', 'Mienshao', 'Beartic', 'Druddigon', 'Golurk', 'Druddigon']
            , minLevel: 55
            , maxLevel: 66
        }
        , route111: {
            name: 'Route 8'
            , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast']
            , minLevel: 54
            , maxLevel: 57
        }
        , special119: {
            name: 'Moor of Icirrus'
            , pokes: ['Palpitoad', 'Shelmet', 'Stunfisk', 'Karrablast']
            , minLevel: 54
            , maxLevel: 57
        }
        , route112: {
            name: 'Route 9'
            , pokes: ['Gothorita', 'Minccino', 'Garbodor', 'Pawniard', 'Liepard', 'Duosion']
            , minLevel: 37
            , maxLevel: 39
        }
        , special120: {
            name: 'Victory Road'
            ,
            pokes: ['Golurk', 'Tranquill', 'Cottonee', 'Petilil', 'Gurdurr', 'Throh', 'Boldore', 'Druddigon', 'Zweilous']
            ,
            minLevel: 41
            ,
            maxLevel: 50
        }
        , route113: {
            name: 'Route 11'
            , pokes: ['Golduck', 'Gligar', 'Marill', 'Zangoose', 'Seviper']
            , minLevel: 40
            , maxLevel: 43
        }
        , special121: {
            name: 'Village Bridge'
            , pokes: ['Golduck', 'Marill', 'Zangoose', 'Seviper']
            , minLevel: 36
            , maxLevel: 39
        }
        , route114: {
            name: 'Route 12'
            , pokes: ['Roselia', 'Combee', 'Heracross', 'Pinsir']
            , minLevel: 39
            , maxLevel: 42
        }
        , route115: {
            name: 'Route 13'
            , pokes: ['Tangela', 'Pelipper', 'Drifblim', 'Absol', 'Lunatone', 'Solrock']
            , minLevel: 34
            , maxLevel: 37
        }
        , special122: {
            name: 'Giant Chasm'
            ,
            pokes: ['Tangela', 'Pelipper', 'Clefairy', 'Lunatone', 'Solrock', 'Delibird', 'Piloswine', 'Jynx', 'Sneasel', 'Ditto', 'Metang']
            ,
            minLevel: 49
            ,
            maxLevel: 52
        }
        , special123: {
            name: 'Undella Town'
            , pokes: ['Frillish', 'Basculin']
            , minLevel: 25
            , maxLevel: 40
        }
        , route116: {
            name: 'Route 14'
            , pokes: ['Golduck', 'Swablu', 'Mienfoo', 'Drifblim', 'Absol', 'Altaria']
            , minLevel: 34
            , maxLevel: 37
        }
        , special124: {
            name: 'Abundant Shrine'
            , pokes: ['Cottonee', 'Swablu', 'Bronzor', 'Vulpix', 'Marill', 'Golduck', 'Altaria']
            , minLevel: 33
            , maxLevel: 36
        }
        , route117: {
            name: 'Route 15'
            , pokes: ['Sandslash', 'Gligar', 'Pupitar']
            , minLevel: 54
            , maxLevel: 57
        }
        , special160: {
            name: 'Marvelous Bridge'
            , pokes: ['Swanna']
            , minLevel: 54
            , maxLevel: 57
        }
        , route118: {
            name: 'Route 16'
            , pokes: ['Gothita', 'Minccino', 'Trubbish', 'Liepard', 'Solosis']
            , minLevel: 21
            , maxLevel: 24
        }
        , special125: {
            name: 'Lostlorn Forest'
            , pokes: ['Cottonee', 'Swadloon', 'Venipede', 'Petilil']
            , minLevel: 21
            , maxLevel: 24
        }
        , special126: {
            name: 'Undella Bay'
            , pokes: ['Mantyke', 'Remoraid', 'Spheal']
            , minLevel: 25
            , maxLevel: 40
        }
        , route119: {
            name: 'Route 21'
            , pokes: ['Mantyke', 'Remoraid', 'Spheal']
            , minLevel: 30
            , maxLevel: 45
        }
        , special127: {
            name: 'Seaside Cave'
            , pokes: ['Woobat', 'Boldore', 'Tynamo']
            , minLevel: 34
            , maxLevel: 37
        }
        , route120: {
            name: 'Route 22'
            , pokes: ['Pelipper', 'Golduck', 'Lunatone', 'Solrock', 'Marill', 'Delibird']
            , minLevel: 39
            , maxLevel: 42
        }
        , route121: {
            name: 'Route 23'
            , pokes: ['Bouffalant', 'Sawk', 'Mienfoo', 'Amoonguss', 'Vullaby', 'Rufflet']
            , minLevel: 47
            , maxLevel: 51
        }
        , special150: {
            name: 'Pinwheel Forest'
            ,
            pokes: ['Gurdurr', 'Palpitoad', 'Throh', 'Cottonee', 'Swadloon', 'Petilil', 'Whirlipede', 'Pansage', 'Pansear', 'Panpour']
            ,
            minLevel: 54
            ,
            maxLevel: 57
        }
        , special128: {
            name: 'Nacrene City'
            , pokes: ['Tirtouga', 'Archen']
            , minLevel: 25
            , maxLevel: 25
        }
        , route122: {
            name: 'Route 3'
            , pokes: ['Tranquill', 'Watchog', 'Zebstrika', 'Herdier', 'Purrloin']
            , minLevel: 47
            , maxLevel: 51
        }
        , special129: {
            name: 'Wellspring Cave'
            , pokes: ['Boldore', 'Woobat']
            , minLevel: 55
            , maxLevel: 58
        }
        , special130: {
            name: 'Dreamyard'
            , pokes: ['Watchog', 'Liepard', 'Munna']
            , minLevel: 56
            , maxLevel: 59
        }
        , route123: {
            name: 'Route 2'
            , pokes: ['Watchog', 'Herdier', 'Liepard']
            , minLevel: 56
            , maxLevel: 59
        }
        , route124: {
            name: 'Route 1'
            , pokes: ['Herdier', 'Watchog']
            , minLevel: 56
            , maxLevel: 59
        }
        , route125: {
            name: 'Route 17'
            , pokes: ['Frillish']
            , minLevel: 45
            , maxLevel: 60
        }
        , route126: {
            name: 'Route 18'
            , pokes: ['Scrafty', 'Crustle', 'Sawk', 'Throh']
            , minLevel: 57
            , maxLevel: 59
        }
        , special131: {
            name: 'P2 Laboratory'
            , pokes: ['Watchog', 'Herdier', 'Klang', 'Scrafty']
            , minLevel: 56
            , maxLevel: 59
        }
        , special132: {
            name: 'Shaking Spots'
            , pokes: ['Audino', 'Drilbur', 'Emolga']
            , minLevel: 10
            , maxLevel: 20
        }
        , special134: {
            name: 'Just an Illusion'
            , pokes: ['Zorua']
            , minLevel: 25
            , maxLevel: 25
        }
        , special135: {
            name: 'Relic Castle (Maze End)'
            , pokes: ['Larvesta', 'Volcarona']
            , minLevel: 65
            , maxLevel: 65
        }
        , special136: {
            name: 'Liberty Garden'
            , pokes: ['Victini']
            , minLevel: 15
            , maxLevel: 15
        }
        , special137: {
            name: 'Pledge Grove'
            , pokes: ['Keldeo', 'Cobalion', 'Terrakion', 'Virizion']
            , minLevel: 50
            , maxLevel: 50
        }
        , special138: {
            name: 'Weather Guys'
            , pokes: ['Tornadus', 'Thundurus', 'Landorus']
            , minLevel: 70
            , maxLevel: 70
        }
        , special139: {
            name: 'Castle of N'
            , pokes: ['Reshiram', 'Zekrom']
            , minLevel: 70
            , maxLevel: 70
        }
        , special140: {
            name: 'Giant Chasm (Deep Cave)'
            , pokes: ['Kyurem']
            , minLevel: 70
            , maxLevel: 70
        }
        , special141: {
            name: 'Serene Grace'
            , pokes: ['Meloetta']
            , minLevel: 50
            , maxLevel: 50
        }
        , special142: {
            name: 'Not Kabutops'
            , pokes: ['Genesect']
            , minLevel: 15
            , maxLevel: 15
        }
        , water9: {
            name: 'Fishing',
            pokes: {
                3: ['Alomomola', 'Tympole']
            },
            minLevel: 40,
            maxLevel: 40,
            fishing: 3
        }
    },
    Kalos: {
        _unlock: {
            currency: 50000,
            statistics: {
                caught: 640,
                beaten: 75000,
                shinyCaught: 100
            },
            dex: {
                caughtCount: 640
            }
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: []
        },
        starter6: {
            name: 'Aquacorde Town'
            , pokes: ['Chespin', 'Fennekin', 'Froakie']
            , minLevel: 5
            , maxLevel: 5
        }
        , custom1: {
            name: 'Santalune City'
            , pokes: ['Bunnelby', 'Fletchling', 'Litleo']
            , minLevel: 2
            , maxLevel: 4
        }
        , custom2: {
            name: 'Camphrier Town'
            , pokes: ['Scatterbug', 'Flabebe', 'Skiddo', 'Spewpa']
            , minLevel: 5
            , maxLevel: 8
        }
        , custom3: {
            name: 'Geosenge Town'
            , pokes: ['Furfrou', 'Spritzee', 'Swirlix']
            , minLevel: 10
            , maxLevel: 16
        }
        , custom4: {
            name: 'Coumarine City'
            , pokes: ['Hawlucha', 'Pancham', 'Inkay', 'Espurr']
            , minLevel: 15
            , maxLevel: 22
        }
        , custom5: {
            name: 'Laverre City'
            , pokes: ['Phantump', 'Pumpkaboo']
            , minLevel: 20
            , maxLevel: 25
        }
        , custom6: {
            name: 'Ambrette Town'
            , pokes: ['Amaura', 'Tyrunt']
            , minLevel: 20
            , maxLevel: 20
        }
        , custom7: {
            name: 'Anistar City'
            , pokes: ['Dedenne', 'Helioptile', 'Klefki', 'Honedge']
            , minLevel: 27
            , maxLevel: 32
        }
        , custom8: {
            name: 'Couriway Town'
            , pokes: ['Bergmite', 'Carbink', 'Binacle', 'Goomy', 'Noibat']
            , minLevel: 32
            , maxLevel: 38
        }
        , custom10: {
            name: 'Team Flare Secret HQ'
            , pokes: ['Xerneas', 'Yveltal']
            , minLevel: 50
            , maxLevel: 50
        }
        , custom11: {
            name: 'Terminus Cave'
            , pokes: ['Zygarde']
            , minLevel: 70
            , maxLevel: 70
        }
        , custom12: {
            name: 'Queen of Rocks'
            , pokes: ['Diancie']
            , minLevel: 50
            , maxLevel: 50
        }
        , custom13: {
            name: 'The Magician'
            , pokes: ['Hoopa']
            , minLevel: 50
            , maxLevel: 50
        }
        , custom14: {
            name: 'Steam Siege'
            , pokes: ['Volcanion']
            , minLevel: 70
            , maxLevel: 70
        }
        , custom15: {
            name: 'Fishing'
            , pokes: {3: ['Skrelp', 'Clauncher']}
            , minLevel: 20
            , maxLevel: 20
            , fishing: 3
        }
    },
    Alola: {
        _unlock: {
            currency: 150000,
            statistics: {
                beaten: 250000,
                shinyCaught: 500
            },
            dex: {
                caughtCount: 710
            }
        },
        _global: {
            pokes: [],
            rarePokes: [],
            superRare: []
        },
        starter7: {
            name: 'Iki Town'
            , pokes: ['Rowlet', 'Litten', 'Popplio']
            , minLevel: 5
            , maxLevel: 5
        }
        , custom16: {
            name: 'Route 1'
            , pokes: ['Pikipek', 'Yungoos', 'Grubbin']
            , minLevel: 2
            , maxLevel: 4
        }
        , custom17: {
            name: 'Route 3'
            , pokes: ['Cutiefly', 'Rockruff', 'Oricorio', 'Crabrawler']
            , minLevel: 9
            , maxLevel: 12
        }
        , custom18: {
            name: 'Route 5'
            , pokes: ['Mudbray', 'Dewpider', 'Salandit', 'Stufful']
            , minLevel: 13
            , maxLevel: 16
        }
        , custom19: {
            name: 'Lush Jungle'
            , pokes: ['Fomantis', 'Morelull', 'Bounsweet', 'Comfey', 'Oranguru', 'Passimian']
            , minLevel: 18
            , maxLevel: 21
        }
        , custom20: {
            name: 'Special Spots'
            , pokes: ['Wimpod', 'Sandygast', 'Pyukumuku']
            , minLevel: 20
            , maxLevel: 20
        }
        , custom21: {
            name: 'Mount Hokulani'
            , pokes: ['Minior', 'Komala']
            , minLevel: 25
            , maxLevel: 28
        }
        , custom22: {
            name: 'Route 14'
            , pokes: ['Turtonator', 'Togedemaru', 'Mimikyu']
            , minLevel: 29
            , maxLevel: 32
        }
        , custom23: {
            name: 'Mount Lanakila'
            , pokes: ['Drampa', 'Jangmo-o']
            , minLevel: 42
            , maxLevel: 45
        }
        , custom24: {
            name: 'Welcome to Alola'
            , pokes: ['A-Rattata', 'A-Sandshrew', 'A-Vulpix', 'A-Diglett', 'A-Meowth', 'A-Geodude', 'A-Grimer']
            , minLevel: 20
            , maxLevel: 20
        }
        , custom25: {
            name: 'Aether Paradise'
            , pokes: ['Type: Null', 'Cosmog']
            , minLevel: 40
            , maxLevel: 40
        }
        , custom26: {
            name: 'Ruins'
            , pokes: ['Tapu Koko', 'Tapu Lele', 'Tapu Bulu', 'Tapu Fini']
            , minLevel: 60
            , maxLevel: 60
        }
        , custom27: {
            name: 'Altar'
            , pokes: ['Solgaleo', 'Lunala']
            , minLevel: 55
            , maxLevel: 55
        }
        , custom28: {
            name: 'Ultra Wormholes'
            , pokes: ['Nihilego', 'Buzzwole', 'Pheromosa', 'Xurkitree', 'Celesteela', 'Kartana', 'Guzzlord']
            , minLevel: 55
            , maxLevel: 70
        }
        , custom29: {
            name: 'Not an Ultra Beast'
            , pokes: ['Necrozma']
            , minLevel: 70
            , maxLevel: 70
        }
        , custom30: {
            name: 'Not a PokeBall'
            , pokes: ['Magearna']
            , minLevel: 50
            , maxLevel: 50
        }
        , custom31: {
            name: 'Fighting Ghost'
            , pokes: ['Marshadow']
            , minLevel: 50
            , maxLevel: 50
        }
        , custom32: {
            name: 'Fishing'
            , pokes: {2: ['Wishiwashi', 'Mareanie', 'Bruxish', 'Dhelmise']}
            , minLevel: 30
            , maxLevel: 30
            , fishing: true
        }
    } */
};

export default ROUTES;
