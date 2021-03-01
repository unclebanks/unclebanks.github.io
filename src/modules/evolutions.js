/* eslint-disable comma-dangle */
/* eslint-disable quotes */
const EVOLUTIONS = {
    "Bulbasaur": {
        "level": "16",
        "to": "Ivysaur"
    },
    "Ivysaur": {
        "level": "32",
        "to": "Venusaur"
    },
    "Charmander": {
        "level": "16",
        "to": "Charmeleon"
    },
    "Charmeleon": {
        "level": "36",
        "to": "Charizard"
    },
    "Charizard": {
        "level": "100",
        "to": "M-Charizard X"
    },
    "Squirtle": {
        "level": "16",
        "to": "Wartortle"
    },
    "Wartortle": {
        "level": "36",
        "to": "Blastoise"
    },
    "Caterpie": {
        "level": "7",
        "to": "Metapod"
    },
    "Metapod": {
        "level": "10",
        "to": "Butterfree"
    },
    "Weedle": {
        "level": "7",
        "to": "Kakuna"
    },
    "Kakuna": {
        "level": "10",
        "to": "Beedrill"
    },
    "Pidgey": {
        "level": "18",
        "to": "Pidgeotto"
    },
    "Pidgeotto": {
        "level": "36",
        "to": "Pidgeot"
    },
    "Rattata": {
        "level": "20",
        "to": "Raticate"
    },
    "Spearow": {
        "level": "20",
        "to": "Fearow"
    },
    "Ekans": {
        "level": "22",
        "to": "Arbok"
    },
    "Pikachu": {
        "stone": "thunderStone",
        "to": "Raichu"
    },
    "Sandshrew": {
        "level": "22",
        "to": "Sandslash"
    },
    "Nidoran F": {
        "level": "16",
        "to": "Nidorina"
    },
    "Nidorina": {
        "stone": "moonStone",
        "to": "Nidoqueen"
    },
    "Nidoran M": {
        "level": "16",
        "to": "Nidorino"
    },
    "Nidorino": {
        "stone": "moonStone",
        "to": "Nidoking"
    },
    "Clefairy": {
        "stone": "moonStone",
        "to": "Clefable"
    },
    "Vulpix": {
        "stone": "fireStone",
        "to": "Ninetales"
    },
    "Jigglypuff": {
        "stone": "moonStone",
        "to": "Wigglytuff"
    },
    "Zubat": {
        "level": "22",
        "to": "Golbat"
    },
    "Golbat": {
        "level": "45",
        "to": "Crobat"
    },
    "Oddish": {
        "level": "21",
        "to": "Gloom"
    },
    "Gloom": {
        "stone": "leafStone",
        "to": "Vileplume"
    },
    "Paras": {
        "level": "24",
        "to": "Parasect"
    },
    "Venonat": {
        "level": "31",
        "to": "Venomoth"
    },
    "Diglett": {
        "level": "26",
        "to": "Dugtrio"
    },
    "Meowth": {
        "level": "28",
        "to": "Persian"
    },
    "Psyduck": {
        "level": "33",
        "to": "Golduck"
    },
    "Mankey": {
        "level": "28",
        "to": "Primeape"
    },
    "Growlithe": {
        "stone": "fireStone",
        "to": "Arcanine"
    },
    "Poliwag": {
        "level": "25",
        "to": "Poliwhirl"
    },
    "Poliwhirl": {
        "stone": "waterStone",
        "to": "Poliwrath"
    },
    "Abra": {
        "level": "16",
        "to": "Kadabra"
    },
    "Kadabra": {
        "level": "40",
        "to": "Alakazam"
    },
    "Machop": {
        "level": "28",
        "to": "Machoke"
    },
    "Machoke": {
        "level": "40",
        "to": "Machamp"
    },
    "Bellsprout": {
        "level": "21",
        "to": "Weepinbell"
    },
    "Weepinbell": {
        "stone": "leafStone",
        "to": "Victreebel"
    },
    "Tentacool": {
        "level": "30",
        "to": "Tentacruel"
    },
    "Geodude": {
        "level": "25",
        "to": "Graveler"
    },
    "Graveler": {
        "level": "40",
        "to": "Golem"
    },
    "Ponyta": {
        "level": "40",
        "to": "Rapidash"
    },
    "Slowpoke": {
        "level": "37",
        "to": "Slowbro"
    },
    "Magnemite": {
        "level": "30",
        "to": "Magneton"
    },
    "Doduo": {
        "level": "31",
        "to": "Dodrio"
    },
    "Seel": {
        "level": "34",
        "to": "Dewgong"
    },
    "Grimer": {
        "level": "38",
        "to": "Muk"
    },
    "Shellder": {
        "stone": "waterStone",
        "to": "Cloyster"
    },
    "Gastly": {
        "level": "25",
        "to": "Haunter"
    },
    "Haunter": {
        "level": "40",
        "to": "Gengar"
    },
    "Drowzee": {
        "level": "26",
        "to": "Hypno"
    },
    "Krabby": {
        "level": "28",
        "to": "Kingler"
    },
    "Voltorb": {
        "level": "30",
        "to": "Electrode"
    },
    "Exeggcute": {
        "stone": "leafStone",
        "to": "Exeggutor"
    },
    "Cubone": {
        "level": "28",
        "to": "Marowak"
    },
    "Koffing": {
        "level": "35",
        "to": "Weezing"
    },
    "Rhyhorn": {
        "level": "42",
        "to": "Rhydon"
    },
    "Horsea": {
        "level": "32",
        "to": "Seadra"
    },
    "Goldeen": {
        "level": "33",
        "to": "Seaking"
    },
    "Staryu": {
        "stone": "waterStone",
        "to": "Starmie"
    },
    "Magikarp": {
        "level": "20",
        "to": "Gyarados"
    },
    "Eevee": {
        "stone": "fireStone",
        "to": "Flareon"
    },
    "Eevee": {
        "stone": "waterStone",
        "to": "Vaporeon"
    },
    "Eevee": {
        "stone": "thunderStone",
        "to": "Jolteon"
    },
    "Omanyte": {
        "level": "40",
        "to": "Omastar"
    },
    "Kabuto": {
        "level": "40",
        "to": "Kabutops"
    },
    "Dratini": {
        "level": "30",
        "to": "Dragonair"
    },
    "Dragonair": {
        "level": "55",
        "to": "Dragonite"
    },
    "Chikorita": {
        "level": "16",
        "to": "Bayleef"
    },
    "Bayleef": {
        "level": "32",
        "to": "Meganium"
    },
    "Cyndaquil": {
        "level": "14",
        "to": "Quilava"
    },
    "Quilava": {
        "level": "36",
        "to": "Typhlosion"
    },
    "Totodile": {
        "level": "18",
        "to": "Croconaw"
    },
    "Croconaw": {
        "level": "30",
        "to": "Feraligatr"
    },
    "Sentret": {
        "level": "15",
        "to": "Furret"
    },
    "Hoothoot": {
        "level": "20",
        "to": "Noctowl"
    },
    "Ledyba": {
        "level": "18",
        "to": "Ledian"
    },
    "Spinarak": {
        "level": "22",
        "to": "Ariados"
    },
    "Chinchou": {
        "level": "27",
        "to": "Lanturn"
    },
    "Pichu": {
        "level": "10",
        "to": "Pikachu"
    },
    "Cleffa": {
        "level": "10",
        "to": "Clefairy"
    },
    "Igglybuff": {
        "level": "10",
        "to": "Jigglypuff"
    },
    "Togepi": {
        "level": "20",
        "to": "Togetic"
    },
    "Natu": {
        "level": "25",
        "to": "Xatu"
    },
    "Mareep": {
        "level": "15",
        "to": "Flaaffy"
    },
    "Flaaffy": {
        "level": "30",
        "to": "Ampharos"
    },
    "Vileplume": {
        "level": "40",
        "to": "Bellossom"
    },
    "Poliwrath": {
        "level": "60",
        "to": "Politoad"
    },
    "Marill": {
        "level": "18",
        "to": "Azumarill"
    },
    "Hoppip": {
        "level": "18",
        "to": "Skiploom"
    },
    "Skiploom": {
        "level": "30",
        "to": "Jumpluff"
    },
    "Sunkern": {
        "level": "25",
        "to": "Sunflora"
    },
    "Wooper": {
        "level": "20",
        "to": "Quagsire"
    },
    "Slowbro": {
        "level": "50",
        "to": "Slowking"
    },
    "Pineco": {
        "level": "31",
        "to": "Forretress"
    },
    "Onix": {
        "level": "50",
        "to": "Steelix"
    },
    "Snubbull": {
        "level": "23",
        "to": "Granbull"
    },
    "Teddiursa": {
        "level": "30",
        "to": "Ursaring"
    },
    "Slugma": {
        "level": "38",
        "to": "Magcargo"
    },
    "Swinub": {
        "level": "33",
        "to": "Piloswine"
    },
    "Remoraid": {
        "level": "25",
        "to": "Octillery"
    },
    "Houndour": {
        "level": "24",
        "to": "Houndoom"
    },
    "Phanpy": {
        "level": "25",
        "to": "Donphan"
    },
    "Larvitar": {
        "level": "30",
        "to": "Pupitar"
    },
    "Pupitar": {
        "level": "55",
        "to": "Tyranitar"
    },
    "M-Mewtwo X": {
        "level": "100",
        "to": "M-Mewtwo Y"
    },
    "M-Mewtwo Y": {
        "level": "100",
        "to": "M-Mewtwo X"
    },
};

export default EVOLUTIONS;
