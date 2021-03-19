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
                ],
                reward: 'megaBracelet'
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
            , pokes: ['Rattata', 'Nidoran F', 'Nidoran M', 'Mankey', 'Spearow']
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Pikachu']
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
            , pokes: ['Pidgey', 'Rattata', 'Spearow', 'Jigglypuff', 'Sandshrew', 'Mankey']
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
            , pokes: ['Zubat', 'Clefairy', 'Paras', 'Geodude', 'Sandshrew']
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
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey']
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
                megaStone: 'blastoisinite',
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout']
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
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
            , pokes: ['Diglett', 'Dugtrio', 'Bulbasaur', 'Squirtle']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
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
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino']
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
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran F', 'Nidoran M', 'Machop', 'Magnemite', 'Voltorb']
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
            pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jiglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout']
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
                megaStone: 'venusaurite',
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
                    ['Kadabra', 50],
                    ['Mr. Mime', 50],
                    ['Venomoth', 50],
                    ['Alakazam', 50]
                ]
            },
            trainer2: {
                name: 'Sabrina',
                win: 'marsh3',
                poke: [
                    ['Kadabra', 70],
                    ['Mr. Mime', 70],
                    ['Venomoth', 70],
                    ['Alakazam', 70]
                ]
            },
            trainer3: {
                name: 'Sabrina',
                win: 'marsh4',
                poke: [
                    ['Kadabra', 100],
                    ['Mr. Mime', 100],
                    ['Venomoth', 100],
                    ['Alakazam', 100]
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
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax']
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
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio']
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
            pokes: ['Nidoran F', 'Nidorina', 'Nidoran M', 'Nidorino', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Doduo', 'Exeggcute', 'Cubone', 'Marowak', 'Rhyhorn', 'Chansey', 'Tangela', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros'],
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto', 'Farfetchd']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax', 'Mr. Mime', 'Farfetchd']
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
            , pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Voltorb', 'Electrode', 'Electabuzz', 'Zapdos']
            , minLevel: 25
            , maxLevel: 35,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
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
            pokes: ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Staryu', 'Jynx', 'Articuno'],
            minLevel: 30,
            maxLevel: 40,
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
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
                win: 'volcano1',
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
            },
            trainer1: {
                name: 'Blaine',
                win: 'volcano2',
                poke: [
                    ['Growlithe', 60],
                    ['Ponyta', 60],
                    ['Rapidash', 60],
                    ['Arcanine', 60]
                ]
            },
            trainer2: {
                name: 'Blaine',
                win: 'volcano3',
                poke: [
                    ['Growlithe', 80],
                    ['Ponyta', 80],
                    ['Rapidash', 80],
                    ['Arcanine', 80]
                ]
            },
            trainer3: {
                name: 'Blaine',
                win: 'volcano4',
                poke: [
                    ['Growlithe', 100],
                    ['Ponyta', 100],
                    ['Rapidash', 100],
                    ['Arcanine', 100]
                ],
                megaStone: 'charizarditeX',
            },
        }
        , pokemonMansion: {
            name: 'Pokemon Mansion'
            , pokes: ['Rattata', 'Ratiate', 'Vulpix', 'Growlithe', 'Ponyta', 'Grimer', 'Muk', 'Koffing', 'Weezing', 'Magmar', 'Ditto']
            , minLevel: 32
            , maxLevel: 40,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            },
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela']
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
            , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto']
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
            , pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Moltres']
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
            pokes: ['Arbok', 'Raichu', 'Sandslash', 'Wigglytuff', 'Golbat', 'Gloom', 'Parasect', 'Venomoth', 'Kadabra', 'Weepinbell', 'Graveler', 'Magneton', 'Dodrio', 'Hypno', 'Electrode', 'Marowak', 'Lickitung', 'Rhyhorn', 'Rhydon', 'Chansey', 'Ditto', 'Mewtwo'],
            minLevel: 51,
            maxLevel: 60,
            respawn: 'ceruleanCity',
            _unlock: {
                badges: {
                    'Earth Badge': true
                }
            }
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
            , pokes: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot', 'Hoppip']
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip']
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Rattata', 'Zubat', 'Poliwag', 'Bellsprout', 'Gastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Hoppip']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'cherrygroveCity'
        }
        , darkCave: {
            name: 'Dark Cave'
            , pokes: ['Zubat', 'Geodude', 'Graveler', 'Wobbuffet', 'Dunsparce', 'Teddiursa', 'Ursaring']
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
            , pokes: ['Pidgey', 'Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Gastly', 'Hoothoot', 'Mareep', 'Hoppip', 'Wooper']
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
            , pokes: ['Rattata', 'Raticate', 'Sandshrew', 'Zubat', 'Golbat', 'Geodude', 'Onix', 'Wooper', 'Quagsire', 'Lapras']
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
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Zubat', 'Geodude', 'Hoppip']
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
            , pokes: ['Zubat', 'Golbat', 'Slowpoke', 'Slowking']
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
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Zubat', 'Oddish', 'Paras', 'Venonat', 'Psyduck', 'Hoothoot']
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
            , pokes: ['Pidgey', 'Rattata', 'Jigglypuff', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Snubbull']
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
            , pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Jigglypuff', 'Psyduck', 'Growlithe', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma', 'Snubbull']
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
            , pokes: ['Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Nidoran F', 'Nidoran M', 'Paras', 'Venonat', 'Psyduck', 'Scyther', 'Pinsir', 'Hoothoot', 'Ledyba', 'Spinarak', 'Sunkern']
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
            , pokes: ['Pidgey', 'Nidoran F', 'Nidoran M', 'Vulpix', 'Growlithe', 'Bellsprout', 'Ghastly', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler', 'Sudowoodo']
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
            , pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Stantler']
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
            , pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Snubbull', 'Miltank']
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
            , pokes: ['Pidgeotto', 'Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetchd', 'Tauros', 'Noctowl', 'Miltank']
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
            , pokes: ['Zubat', 'Golbat', 'Seel', 'Krabby']
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
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Zubat', 'Golbat', 'Mankey', 'Mareep', 'Flaaffy', 'Marill']
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
            , pokes: ['Rattata', 'Raticate', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marill']
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
            , pokes: ['Geodude', 'Voltorb', 'Electrode', 'Koffing']
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
            , pokes: ['Pidgeotto', 'Raticate', 'Venonat', 'Venomoth', 'Farfetchd', 'Sentret', 'Furret', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig']
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
            , pokes: ['Poliwag', 'Poliwhirl', 'Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela']
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
            , pokes: ['Zubat', 'Golbat', 'Jynx', 'Sneasel', 'Swinub', 'Delibird']
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
            , pokes: ['Magikarp', 'Dratini']
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
            , pokes: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy', 'Donphan']
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
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Gloom', 'Farfetchd', 'Ditto', 'Noctowl', 'Miltank']
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
        , jroute27: {
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
        , jroute28: {
            name: 'Route 28'
            , pokes: ['Ponyta', 'Tangela', 'Ursaring', 'Donphan', 'Rapidash', 'Arbok', 'Doduo', 'Dodrio', 'Sneasel', 'Poliwhirl', 'Golbat']
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
            , pokes: ['Arbok', 'Golbat', 'Parasect', 'Golduck', 'Poliwhirl', 'Machoke', 'Graveler', 'Doduo', 'Dodrio', 'Ponyta', 'Rapidash', 'Onix', 'Tangela', 'Magmar', 'Quagsire', 'Misdreavus', 'Sneasel', 'Ursaring', 'Donphan', 'Larvitar']
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
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple']
            , minLevel: 2
            , maxLevel: 3,
            respawn: 'littlerootTown',
        },
        oldaleTown: {
            name: 'Oldale Town',
            town: true,
        },
        hroute103: {
            name: 'Route 103'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wingull']
            , minLevel: 2
            , maxLevel: 4,
            respawn: 'oldaleTown',
        },
        hroute102: {
            name: 'Route 102'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Lotad', 'Seedot', 'Ralts', 'Surskit']
            , minLevel: 3
            , maxLevel: 4,
            respawn: 'oldaleTown',
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
            , pokes: ['Marill', 'Poochyena', 'Zigzagoon', 'Wurmple', 'Taillow', 'Wingull']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'petalburgCity',
        },
        petalburgWoods: {
            name: 'Petalburg Woods'
            , pokes: ['Poochyena', 'Zigzagoon', 'Wurmple', 'Silcoon', 'Cascoon', 'Taillow', 'Shroomish', 'Slakoth']
            , minLevel: 5
            , maxLevel: 6,
            respawn: 'petalburgCity',
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
            , pokes: ['Abra', 'Poochyena', 'Zigzagoon', 'Taillow', 'Nincada', 'Whismur', 'Skitty']
            , minLevel: 6
            , maxLevel: 8,
            respawn: 'rustboroCity',
        }
        , rusturfTunnel: {
            name: 'Rusturf Tunnel'
            , pokes: ['Whismur']
            , minLevel: 5
            , maxLevel: 8,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        }
        , hroute105: {
            name: 'Route 105'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'petalburgCity',
            _unlock: {
                badges: {
                    'Stone Badge': true
                }
            }
        },
        hroute106: {
            name: 'Route 106'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'petalburgCity',
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
            , pokes: ['Zubat', 'Abra', 'Geodude', 'Makuhita', 'Sableye', 'Mawile', 'Aron', 'Nosepass']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute107: {
            name: 'Route 107'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute108: {
            name: 'Route 108'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , abandonedShip: {
            name: 'Abandoned Ship'
            , pokes: ['Tentacool', 'Tentacruel']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute109: {
            name: 'Route 109'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'dewfordTown',
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
            , pokes: ['Oddish', 'Zigzagoon', 'Poochyena', 'Wingull', 'Electrike', 'Plusle', 'Minun', 'Gulpin']
            , minLevel: 12
            , maxLevel: 13,
            respawn: 'slateportCity',
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
            respawn: 'slateportCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute117: {
            name: 'Route 117'
            , pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Seedot', 'Surskit', 'Volbeat', 'Illumise', 'Roselia']
            , minLevel: 13
            , maxLevel: 14,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Knuckle Badge': true
                }
            }
        }
        , hroute111: {
            name: 'Route 111'
            , pokes: ['Sandshrew', 'Trapinch', 'Cacnea', 'Baltoy']
            , minLevel: 19
            , maxLevel: 22,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute112: {
            name: 'Route 112'
            , pokes: ['Machop', 'Marill', 'Numel']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , fieryPath: {
            name: 'Fiery Path'
            , pokes: ['Machop', 'Grimer', 'Koffing', 'Slugma', 'Numel', 'Torkoal']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        }
        , hroute113: {
            name: 'Route 113'
            , pokes: ['Sandshrew', 'Slugma', 'Skarmory', 'Spinda']
            , minLevel: 14
            , maxLevel: 16,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        fallarborTown: {
            name: 'Fallarbor Town',
            town: true,
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute114: {
            name: 'Route 114'
            , pokes: ['Lotad', 'Lombre', 'Seedot', 'Nuzleaf', 'Surskit', 'Swablu', 'Zangoose', 'Seviper']
            , minLevel: 15
            , maxLevel: 18,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        meteorFalls: {
            name: 'Meteor Falls'
            , pokes: ['Zubat', 'Golbat', 'Lunatone', 'Solrock', 'Bagon']
            , minLevel: 14
            , maxLevel: 40,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        hroute115: {
            name: 'Route 115'
            , pokes: ['Jigglypuff', 'Taillow', 'Swellow', 'Wingull', 'Swablu']
            , minLevel: 23
            , maxLevel: 26,
            respawn: 'fallarborTown',
            _unlock: {
                badges: {
                    'Dynamo Badge': true
                }
            }
        },
        jaggedPass: {
            name: 'Jagged Pass'
            , pokes: ['Machop', 'Numel', 'Spoink']
            , minLevel: 18
            , maxLevel: 22,
            respawn: 'mauvilleCity',
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
            , pokes: ['Zigzagoon', 'Linoone', 'Wingull', 'Electrike', 'Manectric', 'Kecleon']
            , minLevel: 24
            , maxLevel: 27,
            respawn: 'mauvilleCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , hroute119: {
            name: 'Route 119'
            , pokes: ['Oddish', 'Zigzagoon', 'Linoone', 'Kecleon', 'Tropius']
            , minLevel: 24
            , maxLevel: 27,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
                }
            }
        }
        , weatherInstitute: {
            name: 'Weather Institute'
            , pokes: ['Castform']
            , minLevel: 25
            , maxLevel: 25,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Balance Badge': true
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
                    'Balance Badge': true
                }
            }
        },
        hroute120: {
            name: 'Route 120'
            , pokes: ['Oddish', 'Marill', 'Poochyena', 'Zigzagoon', 'Linoone', 'Seedot', 'Surskit', 'Kecleon', 'Absol']
            , minLevel: 25
            , maxLevel: 27,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute121: {
            name: 'Route 121'
            , pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull']
            , minLevel: 25
            , maxLevel: 28,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hoennSafarZone: {
            name: 'Hoenn Safari Zone',
            pokes: ['Pikachu', 'Oddish', 'Gloom', 'Doduo', 'Dodrio', 'Rhyhorn', 'Pinsir', 'Hoothoot', 'Spinarak', 'Natu', 'Xatu', 'Mareep', 'Aipom', 'Sunkern', 'Girafarig', 'Wobbuffet', 'Pineco', 'Gligar', 'Snubbull', 'Heracross', 'Teddiursa', 'Houndour', 'Phanpy', 'Stantler', 'Miltank'],
            minLevel: 25,
            maxLevel: 40,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute122: {
            name: 'Route 122'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , myPyre: {
            name: 'Mt. Pyre'
            , pokes: ['Vulpix', 'Wingull', 'Meditite', 'Duskull', 'Shuppet', 'Chimecho']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'fortreeCity',
            _unlock: {
                badges: {
                    'Feather Badge': true
                }
            }
        }
        , hroute123: {
            name: 'Route 123'
            , pokes: ['Oddish', 'Gloom', 'Poochyena', 'Mightyena', 'Zigzagoon', 'Linoone', 'Wingull', 'Kecleon', 'Shuppet', 'Duskull']
            , minLevel: 25
            , maxLevel: 28,
            respawn: 'fortreeCity',
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
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'lilycoveCity',
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
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , shoalCave: {
            name: 'Shoal Cave'
            , pokes: ['Zubat', 'Golbat', 'Snorunt', 'Spheal']
            , minLevel: 26
            , maxLevel: 32,
            respawn: 'rustboroCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute126: {
            name: 'Route 126'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute127: {
            name: 'Route 127'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'mossdeepCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hroute128: {
            name: 'Route 128'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 10
            , maxLevel: 30,
            respawn: 'mossdeepCity',
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
            pokes: ['Zubat', 'Golbat', 'Whiscash', 'Loudred', 'Makuhita', 'Hariyama', 'Sableye', 'Mawile', 'Aron', 'Lairon', 'Meditite', 'Medicham'],
            minLevel: 36,
            maxLevel: 42,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute129: {
            name: 'Route 129'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper', 'Wailord']
            , minLevel: 5
            , maxLevel: 40,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute130: {
            name: 'Route 130'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'sootopolisCity',
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
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute131: {
            name: 'Route 131'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , skyPillar: {
            name: 'Sky Pillar'
            , pokes: ['Golbat', 'Sableye', 'Mawile', 'Altaria', 'Claydoll', 'Banette', 'Dusclops']
            , minLevel: 34
            , maxLevel: 60,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , skyPillarRoof: {
            name: 'Sky Pillar Roof'
            , pokes: ['Rayquaza']
            , minLevel: 70
            , maxLevel: 70,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        },
        pacifidlogTown: {
            name: 'Pacifidlog Town',
            town: true,
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute132: {
            name: 'Route 132'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute133: {
            name: 'Route 133'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , hroute134: {
            name: 'Route 134'
            , pokes: ['Tentacool', 'Wingull', 'Pelipper']
            , minLevel: 5
            , maxLevel: 35,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Rain Badge': true
                }
            }
        }
        , sealdedChamber: {
            name: 'Sealed Chamber'
            , pokes: ['Regice', 'Regirock', 'Registeel']
            , minLevel: 40
            , maxLevel: 40,
            respawn: 'pacifidlogTown',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , southernIsland: {
            name: 'Southern Island'
            , pokes: ['Latios', 'Latias']
            , minLevel: 50
            , maxLevel: 50,
            respawn: 'lilycoveCity',
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
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , underwater: {
            name: 'Underwater'
            , pokes: ['Chinchou', 'Clamperl', 'Relicanth']
            , minLevel: 20
            , maxLevel: 35,
            respawn: 'sootopolisCity',
            _unlock: {
                badges: {
                    'Mind Badge': true
                }
            }
        }
        , hOldRod: {
            name: 'Hoenn Old Rod',
            pokes: ['Tentacool', 'Goldeen', 'Magikarp', 'Azurill', 'Feebas'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'littlerootTown',
            hoennOldRod: 1
        }
        , hGoodRod: {
            name: 'Hoenn Good Rod',
            pokes: ['Tentacool', 'Goldeen', 'Magikarp', 'Carvanha', 'Wailmer', 'Barboach', 'Corphish', 'Feebas', 'Luvdisc'],
            minLevel: 10,
            maxLevel: 30,
            respawn: 'littlerootTown',
            hoennGoodRod: 1
        }
        , hSuperRod: {
            name: 'Hoenn Super Rod',
            pokes: ['Horsea', 'Staryu', 'Magikarp', 'Corsola', 'Carvanha', 'Sharpedo', 'Wailmer', 'Barboach', 'Whiscash', 'Corphish', 'Feebas', 'Luvdisc'],
            minLevel: 25,
            maxLevel: 45,
            respawn: 'littlerootTown',
            hoennSuperRod: 1
        }
    }
    ,
    Sinnoh: {
        _unlock: {
            badges: {
                'Mind Badge': true
            }
        }
        , _global: {
            pokes: ['Turtwig', 'Chimchar', 'Piplup'],
            rarePokes: [],
            superRare: []
        },
        twinleafTown: {
            name: 'Twinleaf Town',
            town: true,
            trainer: {
                name: 'Prof. Rowan',
                badge: null,
                poke: [
                    ['Turtwig', 15],
                    ['Chimchar', 15],
                    ['Piplup', 15]
                ]
            }
        },
        sroute201: {
            name: 'Route 201'
            , pokes: ['Starly', 'Bidoof', 'Kricketot']
            , minLevel: 2
            , maxLevel: 3,
            respawn: 'twinleafTown',
        }
        , lakeVerity: {
            name: 'Lake Verity'
            , pokes: ['Starly', 'Bidoof']
            , minLevel: 2
            , maxLevel: 4,
            respawn: 'twinleafTown',
        }
        , sandgemTown: {
            name: 'Sandgem Town',
            town: true,
        }
        , sroute202: {
            name: 'Route 202'
            , pokes: ['Starly', 'Bidoof', 'Kricketot', 'Shinx']
            , minLevel: 2
            , maxLevel: 4,
            respawn: 'sandgemTown',
        }
        , jubilifeCity: {
            name: 'Jubilife City',
            town: true,
        }
        , sroute203: {
            name: 'Route 203'
            , pokes: ['Zubat', 'Abra', 'Starly', 'Bidoof', 'Kricketot', 'Shinx']
            , minLevel: 4
            , maxLevel: 7,
            respawn: 'jubilifeCity',
        }
        , oreburghGate: {
            name: 'Oreburgh Gate'
            , pokes: ['Zubat', 'Psyduck', 'Geodude']
            , minLevel: 5
            , maxLevel: 10,
            respawn: 'jubilifeCity',
        }
        , oreburghCity: {
            name: 'Oreburgh City',
            town: true,
            trainer: {
                name: 'Roark',
                badge: 'Coal Badge',
                poke: [
                    ['Geodude', 12],
                    ['Onix', 12],
                    ['Cranidos', 14],
                ]
            },
        }
        , oreburghMine: {
            name: 'Oreburgh Mine'
            , pokes: ['Geodude', 'Zubat', 'Onix']
            , minLevel: 5
            , maxLevel: 10,
            respawn: 'oreburghCity',
        }
        , sroute204: {
            name: 'Route 204'
            , pokes: ['Zubat', 'Wurmple', 'Starly', 'Bidoof', 'Kricketot', 'Shinx', 'Budew']
            , minLevel: 3
            , maxLevel: 6,
            respawn: 'jubilifeCity',
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , floaromaTown: {
            name: 'Floaroma Town',
            town: true,
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , floaromaMeadow: {
            name: 'Floaroma Meadow'
            , pokes: ['Combee', 'Burmy', 'Cherubi', 'Munchlax']
            , minLevel: 5
            , maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , sroute205: {
            name: 'Route 205'
            , pokes: ['Hoothoot', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Bidoof', 'Kricketot', 'Budew', 'Pachirisu', 'Buizel', 'Shellos']
            , minLevel: 8
            , maxLevel: 12,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , valleyWindworks: {
            name: 'Valley Windworks'
            , pokes: ['Bidoof', 'Shinx', 'Pachirisu', 'Buizel', 'Shellos', 'Drifloon']
            , minLevel: 7
            , maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , fuegoIronworks: {
            name: 'Fuego Ironworks'
            , pokes: ['Magnemite', 'Magmar', 'Wingull', 'Shinx', 'Luxio', 'Pachirisu', 'Floatzel', 'Shellos', 'Gastrodon']
            , minLevel: 28
            , maxLevel: 30,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , eternaForest: {
            name: 'Eterna Forest'
            , pokes: ['Gastly', 'Hoothoot', 'Murkrow', 'Misdreavus', 'Wurmple', 'Silcoon', 'Beautifly', 'Cascoon', 'Dustox', 'Bidoof', 'Kricketot', 'Budew', 'Buneary']
            , minLevel: 10
            , maxLevel: 14,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , oldChateau: {
            name: 'Old Chateau'
            , pokes: ['Gastly', 'Haunter', 'Gengar']
            , minLevel: 12
            , maxLevel: 17,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , strangeTV: {
            name: 'Strange TV'
            , pokes: ['Rotom']
            , minLevel: 15
            , maxLevel: 15,
            respawn: 'floaromaTown',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , eternaCity: {
            name: 'Eterna City',
            town: true,
            trainer: {
                name: 'Gardenia',
                badge: 'Forest Badge',
                poke: [
                    ['Cherubi', 19],
                    ['Turtwig', 19],
                    ['Roserade', 22],
                ]
            },
            _unlock: {
                badges: {
                    'Coal Badge': true
                }
            }
        }
        , sroute206: {
            name: 'Route 206'
            , pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Gligar', 'Kricketot', 'Kricketune', 'Stunky', 'Bronzor']
            , minLevel: 14
            , maxLevel: 19,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , waywardCave: {
            name: 'Wayward Cave'
            , pokes: ['Zubat', 'Geodude', 'Onix', 'Bronzor', 'Gible']
            , minLevel: 14
            , maxLevel: 20,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , sroute207: {
            name: 'Route 207'
            , pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Kricketot']
            , minLevel: 5
            , maxLevel: 8,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , mtCoronet: {
            name: 'Mt. Coronet'
            , pokes: ['Clefairy', 'Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Noctowl', 'Cleffa', 'Nosepass', 'Meditite', 'Medicham', 'Absol', 'Chimecho', 'Chingling', 'Bronzor', 'Bronzong', 'Snover', 'Abomasnow']
            , minLevel: 12
            , maxLevel: 40,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , sroute208: {
            name: 'Route 208'
            , pokes: ['Zubat', 'Psyduck', 'Machop', 'Ralts', 'Meditite', 'Roselia', 'Bidoof', 'Bibarel', 'Budew']
            , minLevel: 16
            , maxLevel: 20,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , hearthomeCity: {
            name: 'Hearthome City',
            town: true,
            trainer: {
                name: 'Fantina',
                badge: 'Relic Badge',
                poke: [
                    ['Duskull', 24],
                    ['Haunter', 24],
                    ['Mismagius', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }
        }
        , amitySquare: {
            name: 'Amity Square'
            , pokes: ['Happiny']
            , minLevel: 1
            , maxLevel: 1,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Forest Badge': true
                }
            }

        }
        , sroute209: {
            name: 'Route 209'
            , pokes: ['Zubat', 'Gastley', 'Chansey', 'Ralts', 'Roselia', 'Duskull', 'Starly', 'Staravia', 'Bibarel', 'Bonsly', 'Mime Jr.']
            , minLevel: 16
            , maxLevel: 19,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , hallowedTower: {
            name: 'Hallowed Tower'
            , pokes: ['Spiritomb']
            , minLevel: 25
            , maxLevel: 25,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , lostTower: {
            name: 'Lost Tower'
            , pokes: ['Zubat', 'Gastly', 'Murkrow', 'Misdreavus', 'Duskull', 'Golbat']
            , minLevel: 16
            , maxLevel: 23,
            respawn: 'hearthomeCity',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , solaceonTown: {
            name: 'Solaceon Town',
            town: true,
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , solaceonRuins: {
            name: 'Solaceon Ruins'
            , pokes: ['Unown']
            , minLevel: 14
            , maxLevel: 30,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , sroute210: {
            name: 'Route 210'
            , pokes: ['Psyduck', 'Machop', 'Machoke', 'Geodude', 'Ponyta', 'Chansey', 'Scyther', 'Hoothoot', 'Noctowl', 'Meditite', 'Roselia', 'Swablu', 'Staravia', 'Bibarel', 'Kricketune', 'Bonsly', 'Mime Jr.']
            , minLevel: 18
            , maxLevel: 30,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , sroute215: {
            name: 'Route 215'
            , pokes: ['Abra', 'Kadabra', 'Geodude', 'Ponyta', 'Lickitung', 'Scyther', 'Marill', 'Staravia', 'Kricketune']
            , minLevel: 19
            , maxLevel: 22,
            respawn: 'solaceonTown',
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , veilstoneCity: {
            name: 'Veilstone City',
            town: true,
            trainer: {
                name: 'Maylene',
                badge: 'Cobble Badge',
                poke: [
                    ['Meditite', 24],
                    ['Machoke', 24],
                    ['Lucario', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Relic Badge': true
                }
            }
        }
        , sroute214: {
            name: 'Route 214'
            , pokes: ['Zubat', 'Geodude', 'Graveler', 'Ponyta', 'Rhyhorn', 'Sudowoodo', 'Girafarig', 'Houndour', 'Kricketune', 'Stunky']
            , minLevel: 21
            , maxLevel: 24,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , ruinManiacCave: {
            name: 'Ruin Maniac Cave'
            , pokes: ['Hippopotas']
            , minLevel: 22
            , maxLevel: 23,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , valorLakefront: {
            name: 'Valor Lakefront'
            , pokes: ['Geodude', 'Graveler', 'Girafarig', 'Houndour', 'Staravia', 'Bibarel', 'Kricketune']
            , minLevel: 20
            , maxLevel: 27,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , sroute213: {
            name: 'Route 213'
            , pokes: ['Wingull', 'Buizel', 'Floatzel', 'Shellos', 'Chatot']
            , minLevel: 20
            , maxLevel: 26,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , sendoffSpring: {
            name: 'Sendoff Spring'
            , pokes: ['Bibarel', 'Staravia', 'Chingling']
            , minLevel: 37
            , maxLevel: 54,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , turnbackCave: {
            name: 'Turnback Cave'
            , pokes: ['Bronzong', 'Bronzor', 'Chingling']
            , minLevel: 45
            , maxLevel: 65,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , pastoriaCity: {
            name: 'Pastoria City',
            town: true,
            trainer: {
                name: 'Crasher Wake',
                badge: 'Fen Badge',
                poke: [
                    ['Gyarados', 24],
                    ['Quagsire', 24],
                    ['Floatzel', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , greatMarsh: {
            name: 'Great Marsh'
            , pokes: ['Paras', 'Psyduck', 'Golduck', 'Exeggcute', 'Tangela', 'Kangaskhan', 'Hoothoot', 'Noctowl', 'Marill', 'Yanma', 'Wooper', 'Quagsire', 'Shroomish', 'Azurill', 'Gulpin', 'Roselia', 'Kecleon', 'Tropius', 'Starly', 'Staravia', 'Bidoof', 'Bibarel', 'Budew', 'Skorupi', 'Drapion', 'Croagunk', 'Toxicroak', 'Carnivine']
            , minLevel: 20
            , maxLevel: 30,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Cobble Badge': true
                }
            }
        }
        , sroute212: {
            name: 'Route 212'
            , pokes: ['Marill', 'Wooper', 'Quagsire', 'Ralts', 'Kirlia', 'Roselia', 'Starly', 'Staravia', 'Bibarel', 'Kricketune', 'Budew', 'Buizel', 'Shellos', 'Croagunk']
            , minLevel: 16
            , maxLevel: 24,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , trophyGarden: {
            name: 'Trophy Garden'
            , pokes: ['Pikachu', 'Clefairy', 'Jigglypuff', 'Meowth', 'Chansey', 'Ditto', 'Eevee', 'Porygon', 'Pichu', 'Cleffa', 'Igglybuff', 'Marill', 'Azurill', 'Plusle', 'Minun', 'Roselia', 'Castform', 'Staravia', 'Kricketune', 'Bonsly', 'Mime Jr.', 'Happiny']
            , minLevel: 16
            , maxLevel: 18,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , celesticTown: {
            name: 'Celestic Town',
            town: true,
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute211: {
            name: 'Route 211'
            , pokes: ['Zubat', 'Machop', 'Geodude', 'Ponyta', 'Hoothoot', 'Meditite', 'Bidoof', 'Chingling', 'Bronzor']
            , minLevel: 27
            , maxLevel: 30,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute218: {
            name: 'Route 218'
            , pokes: ['Mr. Mime', 'Wingull', 'Floatzel', 'Shellos', 'Gastrodon', 'Glameow', 'Chatot']
            , minLevel: 28
            , maxLevel: 31,
            respawn: 'jubilifeCity',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute219: {
            name: 'Route 219'
            , pokes: ['Tentacool', 'Tentacruel', 'Wingull', 'Pelipper']
            , minLevel: 20
            , maxLevel: 40,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute220: {
            name: 'Route 220'
            , pokes: ['Tentacool', 'Tentacruel', 'Wingull', 'Pelipper']
            , minLevel: 20
            , maxLevel: 40,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute221: {
            name: 'Route 221'
            , pokes: ['Sudowoodo', 'Girafarig', 'Wingull', 'Roselia', 'Floatzel', 'Shellos', 'Gastrodon', 'Stunky', 'Skuntank']
            , minLevel: 28
            , maxLevel: 31,
            respawn: 'sandgemTown',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , canalaveCity: {
            name: 'Canalave City',
            town: true,
            trainer: {
                name: 'Byron',
                badge: 'Mine Badge',
                poke: [
                    ['Magneton', 24],
                    ['Steelix', 24],
                    ['Bastiodon', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , ironIsland: {
            name: 'Iron Island'
            , pokes: ['Zubat', 'Golbat', 'Geodude', 'Graveler', 'Onix', 'Steelix', 'Riolu']
            , minLevel: 1
            , maxLevel: 1,
            respawn: 'canalaveCity',
            _unlock: {
                badges: {
                    'Fen Badge': true
                }
            }
        }
        , sroute216: {
            name: 'Route 216'
            , pokes: ['Zubat', 'Machoke', 'Graveler', 'Noctowl', 'Sneasel', 'Meditite', 'Snorunt', 'Snover']
            , minLevel: 32
            , maxLevel: 35,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true
                }
            }
        }
        , sroute217: {
            name: 'Route 217'
            , pokes: ['Zubat', 'Machoke', 'Noctowl', 'Sneasel', 'Swinub', 'Meditite', 'Medicham', 'Snorunt', 'Snover']
            , minLevel: 32
            , maxLevel: 35,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true
                }
            }
        }
        , lakeAcuity: {
            name: 'Lake Acuity'
            , pokes: ['Psyduck', 'Golduck', 'Noctowl', 'Sneasel', 'Snorunt', 'Bibarel', 'Chingling', 'Snover']
            , minLevel: 34
            , maxLevel: 41,
            respawn: 'eternaCity',
            _unlock: {
                badges: {
                    'Mine Badge': true
                }
            }
        }
        , snowpointCity: {
            name: 'Snowpoint City',
            town: true,
            trainer: {
                name: 'Candice',
                badge: 'Icicle Badge',
                poke: [
                    ['Sneasel', 24],
                    ['Piloswine', 24],
                    ['Abomasnow', 26],
                    ['Froslass', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Mine Badge': true
                }
            }
        }
        , snowpointTemple: {
            name: 'Snowpoint Temple'
            , pokes: ['Golbat', 'Graveler', 'Onix', 'Jynx', 'Steelix', 'Sneasel', 'Smoochum', 'Regigigas']
            , minLevel: 47
            , maxLevel: 56,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute222: {
            name: 'Route 222'
            , pokes: ['Magnemite', 'Magneton', 'Mr. Mime', 'Electabuzz', 'Wingull', 'Pelipper', 'Luxio', 'Floatzel', 'Gastrodon', 'Glameow', 'Purugly', 'Chatot']
            , minLevel: 38
            , maxLevel: 42,
            respawn: 'pastoriaCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , sunyshoreCity: {
            name: 'Sunyshore City',
            town: true,
            trainer: {
                name: 'Volkner',
                badge: 'Beacon Badge',
                poke: [
                    ['Jolteon', 24],
                    ['Raichu', 24],
                    ['Luxray', 26],
                    ['Electivire', 26],
                ]
            },
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , sroute223: {
            name: 'Route 223'
            , pokes: ['Tentacruel', 'Pelipper', 'Mantyke']
            , minLevel: 30
            , maxLevel: 50,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sVictoryRoad: {
            name: 'Victory Road'
            , pokes: ['Golbat', 'Kadabra', 'Machoke', 'Graveler', 'Magneton', 'Dewgong', 'Onix', 'Rhyhorn', 'Azumarill', 'Steelix', 'Medicham', 'Floatzel', 'Gabite']
            , minLevel: 40
            , maxLevel: 46,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute224: {
            name: 'Route 224'
            , pokes: ['Oddish', 'Gloom', 'Bellsprout', 'Weepinbell', 'Beautifly', 'Pelipper', 'Roselia', 'Buizel', 'Floatzel', 'Shellos', 'Gastrodon', 'Chatot']
            , minLevel: 49
            , maxLevel: 52,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , fightArea: {
            name: 'Fight Area'
            , pokes: ['Gallade', 'Froslass']
            , minLevel: 30
            , maxLevel: 30,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute225: {
            name: 'Route 225'
            , pokes: ['Fearow', 'Raticate', 'Banette', 'Roselia', 'Rattata', 'Spearow', 'Machoke', 'Graveler']
            , minLevel: 47
            , maxLevel: 51,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute226: {
            name: 'Route 226'
            , pokes: ['Fearow', 'Raticate', 'Golduck', 'Machoke', 'Rattata', 'Spearow', 'Graveler', 'Wingull', 'Banette']
            , minLevel: 47
            , maxLevel: 53,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute227: {
            name: 'Route 227'
            , pokes: ['Rhydon', 'Camerupt', 'Fearow', 'Weezing', 'Golbat', 'Banette', 'Graveler', 'Rhyhorn', 'Skarmory', 'Numel']
            , minLevel: 24
            , maxLevel: 56,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , starkMountain: {
            name: 'Stark Mountain'
            , pokes: ['Magcargo', 'Graveler', 'Golbat', 'Machoke', 'Weezing', 'Geodude', 'Onix', 'Slugma', 'Camerupt', 'Heatran']
            , minLevel: 27
            , maxLevel: 58,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute228: {
            name: 'Route 228'
            , pokes: ['Cacturne', 'Dugtrio', 'Rhydon', 'Diglett', 'Cacnea']
            , minLevel: 23
            , maxLevel: 54,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute229: {
            name: 'Route 229'
            , pokes: ['Gloom', 'Weepinbell', 'Ledian', 'Illumise', 'Roselia', 'Oddish', 'Bellsprout', 'Scyther', 'Volbeat', 'Pinsir', 'Pidgey', 'Beautifly', 'Dustox']
            , minLevel: 20
            , maxLevel: 52,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sroute230: {
            name: 'Route 230'
            , pokes: ['Gloom', 'Weepinbell', 'Floatzel', 'Oddish', 'Bellsprout', 'Golduck', 'Beautifly', 'Gastrodon', 'Dustox', 'Wingull']
            , minLevel: 18
            , maxLevel: 51,
            respawn: 'snowpointCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , lakes: {
            name: 'Lakes'
            , pokes: ['Uxie', 'Azelf', 'Mesprit']
            , minLevel: 50
            , maxLevel: 50,
            respawn: 'twinleafTown',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , spearPillar: {
            name: 'Spear Pillar'
            , pokes: ['Dialga', 'Palkia']
            , minLevel: 47
            , maxLevel: 47,
            respawn: 'celesticTown',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , distortionWorld: {
            name: 'Distortion World'
            , pokes: ['Giratina']
            , minLevel: 47
            , maxLevel: 47,
            respawn: 'veilstoneCity',
            _unlock: {
                badges: {
                    'Icicle Badge': true
                }
            }
        }
        , mysteriousSea: {
            name: 'Mysterious Sea'
            , pokes: ['Phione', 'Manaphy']
            , minLevel: 1
            , maxLevel: 1,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , moonIsland: {
            name: 'Moon Island'
            , pokes: ['Cresselia', 'Darkrai']
            , minLevel: 50
            , maxLevel: 50,
            respawn: 'canalaveCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , flowerParadise: {
            name: 'Flower Paradise'
            , pokes: ['Shaymin']
            , minLevel: 30
            , maxLevel: 30,
            respawn: 'sunyshoreCity',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , hallofOrigin: {
            name: 'Hall of Origin'
            , pokes: ['Arceus']
            , minLevel: 80
            , maxLevel: 80,
            respawn: 'celesticTown',
            _unlock: {
                badges: {
                    'Beacon Badge': true
                }
            }
        }
        , sOldRod: {
            name: 'Sinnoh Old Rod',
            pokes: ['Finneon'],
            minLevel: 5,
            maxLevel: 10,
            respawn: 'twinleafTown',
            sinnohOldRod: 1
        }
        , sGoodRod: {
            name: 'Sinnoh Good Rod',
            pokes: ['Mantyke', 'Buizel'],
            minLevel: 15,
            maxLevel: 25,
            respawn: 'twinleafTown',
            sinnohGoodRod: 1
        }
        , sSuperRod: {
            name: 'Sinnoh Super Rod',
            pokes: ['Lumineon', 'Mantyke', 'Floatzel'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'twinleafTown',
            sinnohSuperRod: 1
        }
    },
    Unova: {
        _unlock: {
            badges: {
                'Beacon Badge': true
            }
        }
        , _global: {
            pokes: ['Snivy', 'Oshawott', 'Tepig'],
            rarePokes: [],
            superRare: []
        },
        aspertiaCity: {
            name: 'Aspertia City',
            town: true,
            trainer: {
                name: 'Prof. Juniper',
                badge: null,
                poke: [
                    ['Snivy', 15],
                    ['Tepig', 15],
                    ['Oshawott', 15]
                ]
            }
        },
        route105: {
            name: 'Route 19'
            , pokes: ['Patrat', 'Purrloin']
            , minLevel: 2
            , maxLevel: 4
            , respawn: 'aspertiaCity'
        }
        , floccesyTown: {
            name: 'Floccesy Town',
            town: true
        }
        , route106: {
            name: 'Route 20'
            , pokes: ['Pidove', 'Sunkern', 'Patrat', 'Purrloin', 'Sewaddle']
            , minLevel: 2
            , maxLevel: 4
            , respawn: 'floccesyTown'
        }
        , special103: {
            name: 'Floccesy Ranch'
            , pokes: ['Azurill', 'Mareep', 'Psyduck', 'Riolu', 'Lillipup', 'Pidove', 'Patrat']
            , minLevel: 4
            , maxLevel: 7
            , respawn: 'floccesyTown'
        }
        , virbankCity: {
            name: 'Virbank City',
            town: true,
            trainer: {
                name: 'Roxie',
                badge: 'Toxic Badge',
                poke: [
                    ['Koffing', 16],
                    ['Whirlipede', 18],
                ]
            }
        }
        , special104: {
            name: 'Virbank Complex'
            , pokes: ['Magby', 'Magnemite', 'Growlithe', 'Elekid', 'Koffing', 'Patrat', 'Pidove']
            , minLevel: 10
            , maxLevel: 14
            , respawn: 'virbankCity'
        }
        , casteliaCity: {
            name: 'Castelia City',
            town: true,
            trainer: {
                name: 'Burgh',
                badge: 'Insect Badge',
                poke: [
                    ['Swadloon', 22],
                    ['Dwebble', 22],
                    ['Leavanny', 24],
                ]
            }
            , _unlock: {
                badges: {
                    'Toxic Badge': true
                }
            }
        }
        , special105: {
            name: 'Castelia City'
            , pokes: ['Cottonee', 'Pidove', 'Petilil', 'Skitty', 'Rattata', 'Buneary', 'Eevee']
            , minLevel: 15
            , maxLevel: 18
            , _unlock: {
                badges: {
                    'Toxic Badge': true
                }
            }
        }
        , special106: {
            name: 'Castelia Sewers'
            , pokes: ['Rattata', 'Zubat', 'Grimer']
            , minLevel: 14
            , maxLevel: 17
            , _unlock: {
                badges: {
                    'Toxic Badge': true
                }
            }
        }
        , route107: {
            name: 'Route 4'
            , pokes: ['Sandile', 'Darumaka', 'Trubbish', 'Scraggy', 'Minccino']
            , minLevel: 14
            , maxLevel: 17
            , _unlock: {
                badges: {
                    'Insect Badge': true
                }
            }
        }
        , special107: {
            name: 'Desert Resort'
            , pokes: ['Sandile', 'Darumaka', 'Maractus', 'Sigilyph', 'Dwebble', 'Sandshrew', 'Trapinch']
            , minLevel: 18
            , maxLevel: 21
            , _unlock: {
                badges: {
                    'Insect Badge': true
                }
            }
        }
        , special108: {
            name: 'Relic Castle'
            , pokes: ['Sandile', 'Yamask', 'Sandshrew']
            , minLevel: 18
            , maxLevel: 21
            , _unlock: {
                badges: {
                    'Insect Badge': true
                }
            }
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
        , uSuperRod: {
            name: 'Unova Super Rod',
            pokes: ['Alomomola', 'Tympole'],
            minLevel: 30,
            maxLevel: 45,
            respawn: 'aspertiaCity',
            unovaSuperRod: 1
        }
    },
    Kalos: {
        _global: {
            pokes: ['Froakie', 'Fennekin', 'Chespin'],
            rarePokes: [],
            superRare: []
        },
        aquacordeTown: {
            name: 'Aquacorde Town',
            town: true,
            trainer: {
                name: 'Prof. Sycamore',
                badge: null,
                poke: [
                    ['Chespin', 15],
                    ['Fennekin', 15],
                    ['Froakie', 15]
                ]
            }
        },
        custom1: {
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
        , kaOldRod: {
            name: 'Kalos Old Rod',
            pokes: ['Skrelp', 'Clauncher'],
            minLevel: 5,
            maxLevel: 10,
            kalosOldRod: 1
        }
    },
    Alola: {
        _global: {
            pokes: ['Rowlet', 'Litten', 'Popplio'],
            rarePokes: [],
            superRare: []
        },
        ikiTown: {
            name: 'Iki Town',
            town: true,
            trainer: {
                name: 'Prof. Kukui',
                badge: null,
                poke: [
                    ['Rowlet', 15],
                    ['Litten', 15],
                    ['Popplio', 15]
                ]
            }
        },
        custom16: {
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
        , aOldRod: {
            name: 'Alola Old Rod',
            pokes: ['Wishiwashi'],
            minLevel: 5,
            maxLevel: 10,
            alolaOldRod: 1
        }
        , aGoodRod: {
            name: 'Alola Good Rod',
            pokes: ['Mareanie', 'Bruxish'],
            minLevel: 15,
            maxLevel: 25,
            alolaGoodRod: 1
        }
        , aSuperRod: {
            name: 'Alola Super Rod',
            pokes: ['Dhelmise'],
            minLevel: 30,
            maxLevel: 45,
            alolaSuperRod: 1
        }
    }
};

export default ROUTES;
