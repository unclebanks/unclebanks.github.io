const ROUTES = {
    Kanto: {
        _global: {
            pokes: ['Pidgey', 'Rattata'],
            rarePokes: ['Bulbasaur', 'Charmander', 'Squirtle', 'Omanyte', 'Kabuto', 'Aerodactyl', 'Hitmonlee', 'Hitmonchan', 'Lapras', 'Eevee'],
            superRare: ['Mewtwo', 'Mew', 'Articuno', 'Zapdos', 'Moltres', 'Porygon']
        },
        palletTown: {
            name: 'Pallet Town',
            town: true,
            trainer: {
                name: 'Prof. Oak',
                badge: null,
                poke: [
                        ['Bulbasaur', 15],
                        ['Charmander', 15],
                        ['Squirtle', 15]
                    ]
            }
        }
        , route1: {
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
        , route2: {
            name: 'Route 2'
            , pokes: ['Pidgey', 'Rattata', 'Caterpie', 'Weedle']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'viridianCity'
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
                poke: [
                    ['Geodude', 12],
                    ['Onix', 14]
                ]
            }
        }
        , route3: {
            name: 'Route 3'
            , pokes: ['Pidgey', 'Spearow', 'Jigglypuff']
            , minLevel: 5
            , maxLevel: 12,
            respawn: 'special1',
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
            respawn: 'special1',
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , route4: {
            name: 'Route 4'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew']
            , minLevel: 6
            , maxLevel: 12,
            respawn: 'special1',
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
                poke: [
                    ['Staryu', 18],
                    ['Starmie', 21]
                ]
            },
            _unlock: {
                badges: {
                    'Boulder Badge': true
                }
            }
        }
        , route5: {
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
        },
        saffronCity: {
            name: 'Saffron City',
            town: true,
            trainer: {
                name: 'Sabrina',
                badge: 'Marsh Badge',
                poke: [
                    ['Kadabra', 38],
                    ['Mr. Mime', 37],
                    ['Venomoth', 38],
                    ['Alakazam', 43]
                ]
            },
            _unlock: {
                badges: {
                    'Cascade Badge': true
                }
            }
        }
        , route6: {
            name: 'Route 6'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout']
            , minLevel: 10
            , maxLevel: 16,
            respawn: 'special8',
            _unlock: {
                badges: {
                    'Marsh Badge': true
                }
            }
        },
        vermilionCity: {
            name: 'Vermilion City',
            town: true,
            trainer: {
                name: 'Lt. Surge',
                badge: 'Thunder Badge',
                poke: [
                    ['Voltorb', 21],
                    ['Pikachu', 18],
                    ['Raichu', 24]
                ]
            },
            _unlock: {
                badges: {
                    'Marsh Badge': true
                }
            }
        }
        , route7: {
            name: 'Route 7'
            , pokes: ['Pidgey', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Bellsprout']
            , minLevel: 18
            , maxLevel: 22,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , route8: {
            name: 'Route 8',
            pokes: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra', 'Bellsprout'],
            minLevel: 15,
            maxLevel: 20,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
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
        , route9: {
            name: 'Route 9'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
            , minLevel: 9
            , maxLevel: 17,
            respawn: 'vermilionCity',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , route10: {
            name: 'Route 10'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Voltorb']
            , minLevel: 11
            , maxLevel: 17,
            respawn: 'vermilionCity',
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
        , rockTunnel: {
            name: 'Rock Tunnel'
            , pokes: ['Zubat', 'Machop', 'Geodude', 'Onix']
            , minLevel: 11
            , maxLevel: 17,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , powerPlant: {
            name: 'Power Plant'
            , pokes: ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Voltorb', 'Electrode', 'Electabuzz']
            , minLevel: 25
            , maxLevel: 35,
            respawn: 'lavenderTown',
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
        , route11: {
            name: 'Route 11'
            , pokes: ['Spearow', 'Ekans', 'Sandshrew', 'Drowzee']
            , minLevel: 18
            , maxLevel: 25,
            respawn: 'lavenderTown',
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , celadonCity: {
            name: 'Celadon City',
            town: true,
            trainer: {
                name: 'Erika',
                badge: 'Rainbow Badge',
                poke: [
                    ['Victreebel', 29],
                    ['Tangela', 24],
                    ['Vileplume', 29]
                ]
            },
            _unlock: {
                badges: {
                    'Thunder Badge': true
                }
            }
        }
        , route12: {
            name: 'Route 12'
            , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Snorlax']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route13: {
            name: 'Route 13'
            , pokes: ['Pidgey', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route14: {
            name: 'Route 14'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 23
            , maxLevel: 30,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route15: {
            name: 'Route 15'
            , pokes: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Ditto']
            , minLevel: 22
            , maxLevel: 30,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route16: {
            name: 'Route 16'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Doduo', 'Snorlax']
            , minLevel: 18
            , maxLevel: 30,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route17: {
            name: 'Route 17'
            , pokes: ['Raticate', 'Spearow', 'Fearow', 'Doduo']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'special7',
            _unlock: {
                badges: {
                    'Rainbow Badge': true
                }
            }
        }
        , route18: {
            name: 'Route 18'
            , pokes: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo']
            , minLevel: 20
            , maxLevel: 29,
            respawn: 'special7',
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
        }
        , safariZone: {
            name: 'Safari Zone',
            pokes: ['Nidoran f', 'Nidorina', 'Nidoran m', 'Nidorino', 'Parasect', 'Venonat', 'Exeggcute', 'Rhyhorn', 'Kangaskhan', 'Scyther', 'Pinsir', 'Tauros'],
            minLevel: 22,
            maxLevel: 31,
            respawn: 'fuchsiaCity',
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        },
        route19: {
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
            town: true,
            _unlock: {
                badges: {
                    'Soul Badge': true
                }
            }
        }
        , route20: {
            name: 'Route 20'
            , pokes: ['Raticate', 'Pidgeotto', 'Weepinbell', 'Kadabra']
            , minLevel: 27
            , maxLevel: 31,
            respawn: 'special11',
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
                }
            }
        }
        , route21: {
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
        , route22: {
            name: 'Route 22'
            , pokes: ['Pidgey', 'Rattata', 'Nidoran f', 'Nidoran m']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , route23: {
            name: 'Route 23'
            , pokes: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Ditto']
            , minLevel: 33
            , maxLevel: 43,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , route24: {
            name: 'Route 24'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Oddish', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , route25: {
            name: 'Route 25'
            , pokes: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Oddish', 'Abra', 'Bellsprout']
            , minLevel: 7
            , maxLevel: 14,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , victoryRoad: {
            name: 'Victory Road'
            , pokes: ['Zubat', 'Golbat', 'Venomoth', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Marowak']
            , minLevel: 36
            , maxLevel: 45,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , ceruleanCave: {
            name: 'Cerulean Cave',
            pokes: ['Wigglytuff', 'Venomoth', 'Kadabra', 'Dodrio', 'Electrode', 'Marowak', 'Rhydon', 'Chansey', 'Ditto'],
            minLevel: 51,
            maxLevel: 60,
            respawn: 'cinnabarIsland',
            _unlock: {
                badges: {
                    'Volcano Badge': true
                }
            }
        }
        , water: {
            name: 'Fishing',
            pokes: {
                1: ['Magikarp'],
                2: ['Psyduck', 'Poliwag', 'Goldeen', 'Tentacool'],
                3: ['Shellder', 'Krabby', 'Horsea', 'Staryu', 'Dratini']
            },
            minLevel: 5,
            maxLevel: 40,
            fishing: 1
        }
    }
    /*Johto: {
        _unlock: {
            dex: {
                caughtCount: 140
            }
        },
        _global: {
            pokes: [],
            rarePokes: ['Chikorita', 'Cyndaquil', 'Totodile', 'Shuckle'],
            superRare: ['Raikou', 'Entei', 'Suicune', 'Ho-Oh', 'Celebi', 'Lugia']
        },
        starter2: {
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
        , route25: {
            name: 'Route 29'
            , pokes: ['Sentret', 'Hoothoot', 'Hoppip']
            , minLevel: 2
            , maxLevel: 3,
            respawn: 'starter2'
        },
        cherrygroveCity: {
            name: 'Cherrygrove City',
            town: true
        }
        , route27: {
            name: 'Route 30'
            , pokes: ['Ledyba', 'Hoppip', 'Spinarak', 'Hoothoot']
            , minLevel: 3
            , maxLevel: 5,
            respawn: 'cherrygroveCity'
        }
        , route26: {
            name: 'Route 46'
            , pokes: ['Geodude', 'Rattata', 'Spearow', 'Jigglypuff']
            , minLevel: 2
            , maxLevel: 5,
            respawn: 'cherrygroveCity'
        }
        , special17: {
            name: 'Dark Cave'
            , pokes: ['Teddiursa', 'Dunsparce', 'Ursaring', 'Wobbuffet', 'Slugma']
            , minLevel: 2
            , maxLevel: 25,
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
        , special18: {
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
        , route28: {
            name: 'Route 32'
            , pokes: ['Mareep', 'Hoppip', 'Wooper', 'Hoothoot']
            , minLevel: 4
            , maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , special19: {
            name: 'Ruin of Alph'
            , pokes: ['Natu', 'Smeargle']
            , minLevel: 18
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , special20: {
            name: 'Inside the Ruins'
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
        , special21: {
            name: 'Union Cave'
            , pokes: ['Zubat', 'Geodude', 'Onix', 'Rattata', 'Golbat', 'Raticate', 'Lapras']
            , minLevel: 6
            , maxLevel: 23,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , route29: {
            name: 'Route 33'
            , pokes: ['Rattata', 'Spearow', 'Ekans', 'Geodude', 'Zubat']
            , minLevel: 6
            , maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , special22: {
            name: 'Slowpoke Well'
            , pokes: ['Zubat', 'Slowpoke', 'Slowbro', 'Golbat', 'Slowking']
            , minLevel: 5
            , maxLevel: 24,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        }
        , special23: {
            name: 'Ilex Forest'
            , pokes: ['Caterpie', 'Weedle', 'Metapod', 'Kakuna', 'Paras', 'Pidgey', 'Venonat']
            , minLevel: 5
            , maxLevel: 7,
            respawn: 'violetCity',
            _unlock: {
                badges: {
                    'Zephyr Badge': true
                }
            }
        },
        azaleaTown: {
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
        , route30: {
            name: 'Route 34'
            , pokes: ['Snubbull', 'Murkrow', 'Houndour']
            , minLevel: 10
            , maxLevel: 10,
            respawn: 'azaleaTown',
            _unlock: {
                badges: {
                    'Hive Badge': true
                }
            }
        },
        
        , special24: {
            name: 'Daycare House'
            , pokes: ['Pichu', 'Cleffa', 'Igglybuff', 'Tyrogue', 'Smoochum', 'Elekid', 'Magby', 'Togepi'] // TODO: make these hatch from eggs
            , minLevel: 5
            , maxLevel: 5
        }
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
        , route31: {
            name: 'Route 35'
            , pokes: ['Yanma', 'Noctowl']
            , minLevel: 20
            , maxLevel: 20,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , special26: {
            name: 'National Park'
            , pokes: ['Sunkern', 'Ledyba', 'Spinarak', 'Hoothoot']
            , minLevel: 10
            , maxLevel: 15,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , route32: {
            name: 'Route 36'
            , pokes: ['Stantler', 'Sudowoodo', 'Ledyba', 'Spinarak', 'Hoothoot']
            , minLevel: 13
            , maxLevel: 20,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , route33: {
            name: 'Route 37'
            , pokes: ['Stantler', 'Spinarak', 'Ledyba', 'Hoothoot', 'Ledian', 'Ariados']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , special27: {
            name: 'Burned Tower'
            , pokes: ['Rattata', 'Raticate', 'Zubat', 'Koffing', 'Weezing', 'Magmar']
            , minLevel: 12
            , maxLevel: 16,
            respawn: 'goldenrodCity',
            _unlock: {
                badges: {
                    'Plain Badge': true
                }
            }
        }
        , special28: {
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
        , route34: {
            name: 'Route 38'
            , pokes: ['Snubbull', 'Miltank', 'Noctowl']
            , minLevel: 13
            , maxLevel: 16,
            respawn: 'ecruteakCity',
            _unlock: {
                badges: {
                    'Fog Badge': true
                }
            }
        }
        , route35: {
            name: 'Route 39'
            , pokes: ['Miltank', 'Noctowl']
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
        , route36: {
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
        , route37: {
            name: 'Route 41'
            , pokes: ['Mantine']
            , minLevel: 20
            , maxLevel: 24,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , special29: {
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
        , route38: {
            name: 'Route 42'
            , pokes: ['Mareep', 'Flaaffy', 'Marill']
            , minLevel: 13
            , maxLevel: 17,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , special31: {
            name: 'Mt.Mortar'
            , pokes: ['Zubat', 'Golbat', 'Machop', 'Machoke', 'Geodude', 'Graveler', 'Raticate']
            , minLevel: 15
            , maxLevel: 32,
            respawn: 'cianwoodCity',
            _unlock: {
                badges: {
                    'Storm Badge': true
                }
            }
        }
        , special32: {
            name: 'Rocket Hideout'
            , pokes: ['Electrode']
            , minLevel: 23
            , maxLevel: 23,
            respawn: 'cianwoodCity',
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
        , route39: {
            name: 'Route 43'
            , pokes: ['Girafarig', 'Flaaffy', 'Mareep', 'Noctowl', 'Sentret', 'Furret']
            , minLevel: 15
            , maxLevel: 17,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , special33: {
            name: 'Lake of Rage'
            , pokes: ['Gyarados']
            , minLevel: 30
            , maxLevel: 30,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , route40: {
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
        , special34: {
            name: 'Ice Path'
            , pokes: ['Swinub', 'Delibird', 'Sneasel']
            , minLevel: 21
            , maxLevel: 24,
            respawn: 'mahoganyTown',
            _unlock: {
                badges: {
                    'Glacier Badge': true
                }
            }
        }
        , special35: {
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
        , route41: {
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
        , route42: {
            name: 'Route 48'
            , pokes: ['Ursaring', 'Sneasel', 'Donphan']
            , minLevel: 40
            , maxLevel: 43,
            respawn: 'blackthornCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , special36: {
            name: 'Mt.Silver'
            , pokes: ['Ursaring', 'Donphan', 'Misdreavus', 'Larvitar', 'Pupitar']
            , minLevel: 44
            , maxLevel: 48,
            respawn: 'blackthornCity',
            _unlock: {
                badges: {
                    'Rising Badge': true
                }
            }
        }
        , special41: {
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
        , water3: {
            name: 'Fishing'
            , pokes: {
                1: ['Remoraid'],
                2: ['Marill', 'Chinchou', 'Wooper'],
                3: ['Corsola', 'Qwilfish', 'Lanturn', 'Octillery']
            }
            , minLevel: 10
            , maxLevel: 40
            , fishing: 1
        }
    }*/
};
