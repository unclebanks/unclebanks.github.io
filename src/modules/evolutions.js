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
    "Seadra": {
        "stone": "dragonScale",
        "to": "Kingdra"
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
        "stone": "sunStone",
        "to": "Bellossom"
    },
    "Poliwrath": {
        "stone": "kingsRock",
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
    "Scyther": {
        "stone": "metalCoat",
        "to": "Scizor"
    },
    "Skiploom": {
        "level": "30",
        "to": "Jumpluff"
    },
    "Sunkern": {
        "stone": "sunStone",
        "to": "Sunflora"
    },
    "Wooper": {
        "level": "20",
        "to": "Quagsire"
    },
    "Slowbro": {
        "stone": "kingsRock",
        "to": "Slowking"
    },
    "Pineco": {
        "level": "31",
        "to": "Forretress"
    },
    "Onix": {
        "stone": "metalCoat",
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
    "Treecko": {
        "level": "16",
        "to": "Grovyle"
    },
    "Grovyle": {
        "level": "36",
        "to": "Sceptile"
    },
    "Torchic": {
        "level": "16",
        "to": "Combusken"
    },
    "Combusken": {
        "level": "36",
        "to": "Blaziken"
    },
    "Mudkip": {
        "level": "16",
        "to": "Marshtomp"
    },
    "Marshtomp": {
        "level": "36",
        "to": "Swampert"
    },
    "Poochyena": {
        "level": "18",
        "to": "Mightyena"
    },
    "Zigzagoon": {
        "level": "20",
        "to": "Linoone"
    },
    "Wurmple": {
        "level": "7",
        "to": "Silcoon"
    },
    "Silcoon": {
        "level": "10",
        "to": "Beautifly"
    },
    "Cascoon": {
        "level": "10",
        "to": "Dustox"
    },
    "Lotad": {
        "level": "14",
        "to": "Lombre"
    },
    "Lombre": {
        "stone": "waterStone",
        "to": "Ludicolo"
    },
    "Seedot": {
        "level": "14",
        "to": "Nuzleaf"
    },
    "Nuzleaf": {
        "stone": "leafStone",
        "to": "Shiftry"
    },
    "Taillow": {
        "level": "22",
        "to": "Swellow"
    },
    "Wingull": {
        "level": "25",
        "to": "Pelipper"
    },
    "Ralts": {
        "level": "20",
        "to": "Kirlia"
    },
    "Kirlia": {
        "level": "30",
        "to": "Gardevoir"
    },
    "Surskit": {
        "level": "22",
        "to": "Masquerain"
    },
    "Shroomish": {
        "level": "23",
        "to": "Breloom"
    },
    "Slakoth": {
        "level": "18",
        "to": "Vigoroth"
    },
    "Vigoroth": {
        "level": "36",
        "to": "Slaking"
    },
    "Nincada": {
        "level": "20",
        "to": "Ninjask"
    },
    "Whismur": {
        "level": "20",
        "to": "Loudred"
    },
    "Loudred": {
        "level": "40",
        "to": "Exploud"
    },
    "Makuhita": {
        "level": "24",
        "to": "Hariyama"
    },
    "Nosepass": {
        "level": "35",
        "to": "Probopass"
    },
    "Skitty": {
        "stone": "moonStone",
        "to": "Delcatty"
    },
    "Aron": {
        "level": "32",
        "to": "Lairon"
    },
    "Lairon": {
        "level": "42",
        "to": "Aggron"
    },
    "Meditite": {
        "level": "37",
        "to": "Medicham"
    },
    "Electrike": {
        "level": "37",
        "to": "Manectric"
    },
    "Budew": {
        "level": "12",
        "to": "Roselia"
    },
    "Roselia": {
        "level": "27",
        "to": "Roserade"
    },
    "Gulpin": {
        "level": "26",
        "to": "Swalot"
    },
    "Carvanha": {
        "level": "30",
        "to": "Sharpedo"
    },
    "Wailmer": {
        "level": "40",
        "to": "Wailord"
    },
    "Numel": {
        "level": "33",
        "to": "Camerupt"
    },
    "Spoink": {
        "level": "32",
        "to": "Grumpig"
    },
    "Trapinch": {
        "level": "35",
        "to": "Vibrava"
    },
    "Vibrava": {
        "level": "45",
        "to": "Flygon"
    },
    "Cacnea": {
        "level": "32",
        "to": "Cacturne"
    },
    "Swablu": {
        "level": "35",
        "to": "Altaria"
    },
    "Barboach": {
        "level": "30",
        "to": "Whiscash"
    },
    "Corphish": {
        "level": "30",
        "to": "Crawdaunt"
    },
    "Baltoy": {
        "level": "36",
        "to": "Claydol"
    },
    "Lileep": {
        "level": "40",
        "to": "Cradily"
    },
    "Anorith": {
        "level": "40",
        "to": "Armaldo"
    },
    "Feebas": {
        "level": "40",
        "to": "Milotic"
    },
    "Shuppet": {
        "level": "37",
        "to": "Banette"
    },
    "Duskull": {
        "level": "37",
        "to": "Dusclops"
    },
    "Dusclops": {
        "level": "50",
        "to": "Dusknoir"
    },
    "Chingling": {
        "level": "20",
        "to": "Chimecho"
    },
    "Snorunt": {
        "level": "42",
        "to": "Glalie"
    },
    "Spheal": {
        "level": "32",
        "to": "Sealeo"
    },
    "Sealeo": {
        "level": "44",
        "to": "Walrein"
    },
    "Clamperl": {
        "level": "30",
        "to": "Gorebyss"
    },
    "Bagon": {
        "level": "30",
        "to": "Shelgon"
    },
    "Shelgon": {
        "level": "50",
        "to": "Salamence"
    },
    "Beldum": {
        "level": "20",
        "to": "Metang"
    },
    "Metang": {
        "level": "45",
        "to": "Metagross"
    },
};

export default EVOLUTIONS;
