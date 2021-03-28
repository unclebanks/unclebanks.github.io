import { PokemonNameType } from './db';

interface LevelEvolution {
    type: 'level';
    level: number | string;
}

interface regionEvolution {
    type: 'region';
    region: string;
}

interface MegaEvolution {
    type: 'megaStone';
    megaStone: string;
}

interface StoneEvolution {
    type: 'stone';
    stone: string;
}

interface TimeEvolution {
    type: 'time';
    time: [number, number];
}

type BasicEvolutionType = LevelEvolution | MegaEvolution | StoneEvolution | TimeEvolution | regionEvolution;

interface MultiEvolution {
    type: 'multi';
    requires: BasicEvolutionType[];
}

type EvolutionType = BasicEvolutionType | MultiEvolution;

interface Evolution {
    to: PokemonNameType;
    requires: EvolutionType;
}

const EVOLUTIONS: Partial<Record<PokemonNameType, Evolution[]>> = {
    'Bulbasaur': [
        { 'to': 'Ivysaur', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Ivysaur': [
        { 'to': 'Venusaur', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Venusaur': [
        { 'to': 'M-Venusaur', 'requires': { 'type': 'megaStone', 'megaStone': 'venusaurite' } },
    ],
    'Charmander': [
        { 'to': 'Charmeleon', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Charmeleon': [
        { 'to': 'Charizard', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Charizard': [
        { 'to': 'M-Charizard X', 'requires': { 'type': 'megaStone', 'megaStone': 'charizarditeX' } },
        { 'to': 'M-Charizard Y', 'requires': { 'type': 'megaStone', 'megaStone': 'charizarditeY' } },
    ],
    'Squirtle': [
        { 'to': 'Wartortle', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Wartortle': [
        { 'to': 'Blastoise', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Blastoise': [
        { 'to': 'M-Blastoise', 'requires': { 'type': 'megaStone', 'megaStone': 'blastoisinite' } },
    ],
    'Caterpie': [
        { 'to': 'Metapod', 'requires': { 'type': 'level', 'level': '7' } },
    ],
    'Metapod': [
        { 'to': 'Butterfree', 'requires': { 'type': 'level', 'level': '10' } },
    ],
    'Weedle': [
        { 'to': 'Kakuna', 'requires': { 'type': 'level', 'level': '7' } },
    ],
    'Kakuna': [
        { 'to': 'Beedrill', 'requires': { 'type': 'level', 'level': '10' } },
    ],
    'Beedrill': [
        { 'to': 'M-Beedrill', 'requires': { 'type': 'megaStone', 'megaStone': 'beedrillite' } },
    ],
    'Pidgey': [
        { 'to': 'Pidgeotto', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Pidgeotto': [
        { 'to': 'Pidgeot', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Pidgeot': [
        { 'to': 'M-Pidgeot', 'requires': { 'type': 'megaStone', 'megaStone': 'pidgeotite' } },
    ],
    'Rattata': [
        { 'to': 'Raticate', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Alolan Rattata': [
        { 'to': 'Alolan Raticate', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Spearow': [
        { 'to': 'Fearow', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Ekans': [
        { 'to': 'Arbok', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Pichu': [
        { 'to': 'Pikachu', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Pikachu': [
        { 'to': 'Raichu', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
        {
            'to': 'Alolan Raichu',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'stone', 'stone': 'thunderStone' },
                    { 'type': 'region', 'region': 'Alola' },
                ],
            },
        },
    ],
    'Sandshrew': [
        { 'to': 'Sandslash', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Alolan Sandshrew': [
        { 'to': 'Alolan Sandslash', 'requires': { 'type': 'stone', 'stone': 'iceStone' } },
    ],
    'Nidoran F': [
        { 'to': 'Nidorina', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Nidorina': [
        { 'to': 'Nidoqueen', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Nidoran M': [
        { 'to': 'Nidorino', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Nidorino': [
        { 'to': 'Nidoking', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Cleffa': [
        { 'to': 'Clefairy', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Clefairy': [
        { 'to': 'Clefable', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Vulpix': [
        { 'to': 'Ninetales', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
    ],
    'Alolan Vulpix': [
        { 'to': 'Alolan Ninetales', 'requires': { 'type': 'stone', 'stone': 'iceStone' } },
    ],
    'Igglybuff': [
        { 'to': 'Jigglypuff', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Jigglypuff': [
        { 'to': 'Wigglytuff', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Zubat': [
        { 'to': 'Golbat', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Golbat': [
        { 'to': 'Crobat', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Oddish': [
        { 'to': 'Gloom', 'requires': { 'type': 'level', 'level': '21' } },
    ],
    'Gloom': [
        { 'to': 'Vileplume', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
        { 'to': 'Bellossom', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Paras': [
        { 'to': 'Parasect', 'requires': { 'type': 'level', 'level': '24' } },
    ],
    'Venonat': [
        { 'to': 'Venomoth', 'requires': { 'type': 'level', 'level': '31' } },
    ],
    'Diglett': [
        { 'to': 'Dugtrio', 'requires': { 'type': 'level', 'level': '26' } },
    ],
    'Alolan Diglett': [
        { 'to': 'Alolan Dugtrio', 'requires': { 'type': 'level', 'level': '26' } },
    ],
    'Meowth': [
        { 'to': 'Persian', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Alolan Meowth': [
        { 'to': 'Alolan Persian', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Psyduck': [
        { 'to': 'Golduck', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Mankey': [
        { 'to': 'Primeape', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Growlithe': [
        { 'to': 'Arcanine', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
    ],
    'Poliwag': [
        { 'to': 'Poliwhirl', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Poliwhirl': [
        { 'to': 'Poliwrath', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
        { 'to': 'Politoed', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Abra': [
        { 'to': 'Kadabra', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Kadabra': [
        { 'to': 'Alakazam', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Alakazam': [
        { 'to': 'M-Alakazam', 'requires': { 'type': 'megaStone', 'megaStone': 'alakazite' } },
    ],
    'Kangaskhan': [
        { 'to': 'M-Kangaskhan', 'requires': { 'type': 'megaStone', 'megaStone': 'kangaskhanite' } },
    ],
    'Pinsir': [
        { 'to': 'M-Pinsir', 'requires': { 'type': 'megaStone', 'megaStone': 'pinsirite' } },
    ],
    'Machop': [
        { 'to': 'Machoke', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Machoke': [
        { 'to': 'Machamp', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Bellsprout': [
        { 'to': 'Weepinbell', 'requires': { 'type': 'level', 'level': '21' } },
    ],
    'Weepinbell': [
        { 'to': 'Victreebel', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
    ],
    'Tentacool': [
        { 'to': 'Tentacruel', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Geodude': [
        { 'to': 'Graveler', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Graveler': [
        { 'to': 'Golem', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Alolan Geodude': [
        { 'to': 'Alolan Graveler', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Alolan Graveler': [
        { 'to': 'Alolan Golem', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Ponyta': [
        { 'to': 'Rapidash', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Slowpoke': [
        { 'to': 'Slowbro', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Slowbro': [
        { 'to': 'M-Slowbro', 'requires': { 'type': 'megaStone', 'megaStone': 'slowbronite' } },
        { 'to': 'Slowking', 'requires': { 'type': 'stone', 'stone': 'kingsRock' } },
    ],
    'Magnemite': [
        { 'to': 'Magneton', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Doduo': [
        { 'to': 'Dodrio', 'requires': { 'type': 'level', 'level': '31' } },
    ],
    'Seel': [
        { 'to': 'Dewgong', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Grimer': [
        { 'to': 'Muk', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Alolan Grimer': [
        { 'to': 'Alolan Muk', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Shellder': [
        { 'to': 'Cloyster', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
    ],
    'Gastly': [
        { 'to': 'Haunter', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Haunter': [
        { 'to': 'Gengar', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Gengar': [
        { 'to': 'M-Gengar', 'requires': { 'type': 'megaStone', 'megaStone': 'gengarite' } },
    ],
    'Drowzee': [
        { 'to': 'Hypno', 'requires': { 'type': 'level', 'level': '26' } },
    ],
    'Krabby': [
        { 'to': 'Kingler', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Voltorb': [
        { 'to': 'Electrode', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Exeggcute': [
        { 'to': 'Exeggutor', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
        {
            'to': 'Alolan Exeggutor',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'stone', 'stone': 'leafStone' },
                    { 'type': 'region', 'region': 'Alola' },
                ],
            },
        },
    ],
    'Cubone': [
        { 'to': 'Marowak', 'requires': { 'type': 'level', 'level': '28' } },
        {
            'to': 'Alolan Marowak',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '28' },
                    { 'type': 'region', 'region': 'Alola' },
                ],
            },
        },
    ],
    'Koffing': [
        { 'to': 'Weezing', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Rhyhorn': [
        { 'to': 'Rhydon', 'requires': { 'type': 'level', 'level': '42' } },
    ],
    'Horsea': [
        { 'to': 'Seadra', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Seadra': [
        { 'to': 'Kingdra', 'requires': { 'type': 'stone', 'stone': 'dragonScale' } },
    ],
    'Goldeen': [
        { 'to': 'Seaking', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Staryu': [
        { 'to': 'Starmie', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
    ],
    'Magikarp': [
        { 'to': 'Gyarados', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Gyarados': [
        { 'to': 'M-Gyarados', 'requires': { 'type': 'megaStone', 'megaStone': 'gyaradosite' } },
    ],
    'Aerodactyl': [
        { 'to': 'M-Aerodactyl', 'requires': { 'type': 'megaStone', 'megaStone': 'aerodactylite' } },
    ],
    'Eevee': [
        { 'to': 'Flareon', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
        {
            'to': 'Espeon',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '30' },
                    { 'type': 'time', 'time': [6, 18] },
                ],
            },
        },
        {
            'to': 'Umbreon',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '30' },
                    { 'type': 'time', 'time': [18, 6] },
                ],
            },
        },
        { 'to': 'Jolteon', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
        { 'to': 'Vaporeon', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
        { 'to': 'Leafeon', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
        { 'to': 'Glaceon', 'requires': { 'type': 'stone', 'stone': 'iceStone' } },
    ],
    'Omanyte': [
        { 'to': 'Omastar', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Kabuto': [
        { 'to': 'Kabutops', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Dratini': [
        { 'to': 'Dragonair', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Dragonair': [
        { 'to': 'Dragonite', 'requires': { 'type': 'level', 'level': '55' } },
    ],
    'Mewtwo': [
        { 'to': 'M-Mewtwo X', 'requires': { 'type': 'megaStone', 'megaStone': 'mewtwoniteX' } },
        { 'to': 'M-Mewtwo Y', 'requires': { 'type': 'megaStone', 'megaStone': 'mewtwoniteY' } },
    ],
    'Chikorita': [
        { 'to': 'Bayleef', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Bayleef': [
        { 'to': 'Meganium', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Cyndaquil': [
        { 'to': 'Quilava', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Quilava': [
        { 'to': 'Typhlosion', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Totodile': [
        { 'to': 'Croconaw', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Croconaw': [
        { 'to': 'Feraligatr', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Sentret': [
        { 'to': 'Furret', 'requires': { 'type': 'level', 'level': '15' } },
    ],
    'Hoothoot': [
        { 'to': 'Noctowl', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Ledyba': [
        { 'to': 'Ledian', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Spinarak': [
        { 'to': 'Ariados', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Chinchou': [
        { 'to': 'Lanturn', 'requires': { 'type': 'level', 'level': '27' } },
    ],
    'Togepi': [
        { 'to': 'Togetic', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Togetic': [
        { 'to': 'Togekiss', 'requires': { 'type': 'stone', 'stone': 'shinyStone' } },
    ],
    'Natu': [
        { 'to': 'Xatu', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Mareep': [
        { 'to': 'Flaaffy', 'requires': { 'type': 'level', 'level': '15' } },
    ],
    'Flaaffy': [
        { 'to': 'Ampharos', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Ampharos': [
        { 'to': 'M-Ampharos', 'requires': { 'type': 'megaStone', 'megaStone': 'ampharosite' } },
    ],
    'Azurill': [
        { 'to': 'Marill', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Marill': [
        { 'to': 'Azumarill', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Hoppip': [
        { 'to': 'Skiploom', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Skiploom': [
        { 'to': 'Jumpluff', 'requires': { 'type': 'level', 'level': '27' } },
    ],
    'Bonsly': [
        { 'to': 'Sudowoodo', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Scyther': [
        { 'to': 'Scizor', 'requires': { 'type': 'stone', 'stone': 'metalCoat' } },
    ],
    'Heracross': [
        { 'to': 'M-Heracross', 'requires': { 'type': 'megaStone', 'megaStone': 'heracronite' } },
    ],
    'Scizor': [
        { 'to': 'M-Scizor', 'requires': { 'type': 'megaStone', 'megaStone': 'scizorite' } },
    ],
    'Sunkern': [
        { 'to': 'Sunflora', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Wooper': [
        { 'to': 'Quagsire', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Pineco': [
        { 'to': 'Forretress', 'requires': { 'type': 'level', 'level': '31' } },
    ],
    'Onix': [
        { 'to': 'Steelix', 'requires': { 'type': 'stone', 'stone': 'metalCoat' } },
    ],
    'Steelix': [
        { 'to': 'M-Steelix', 'requires': { 'type': 'megaStone', 'megaStone': 'steelixite' } },
    ],
    'Snubbull': [
        { 'to': 'Granbull', 'requires': { 'type': 'level', 'level': '23' } },
    ],
    'Teddiursa': [
        { 'to': 'Ursaring', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Slugma': [
        { 'to': 'Magcargo', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Swinub': [
        { 'to': 'Piloswine', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Remoraid': [
        { 'to': 'Octillery', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Houndour': [
        { 'to': 'Houndoom', 'requires': { 'type': 'level', 'level': '24' } },
    ],
    'Houndoom': [
        { 'to': 'M-Houndoom', 'requires': { 'type': 'megaStone', 'megaStone': 'houndoominite' } },
    ],
    'Phanpy': [
        { 'to': 'Donphan', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Larvitar': [
        { 'to': 'Pupitar', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Pupitar': [
        { 'to': 'Tyranitar', 'requires': { 'type': 'level', 'level': '55' } },
    ],
    'Tyranitar': [
        { 'to': 'M-Tyranitar', 'requires': { 'type': 'megaStone', 'megaStone': 'tyranitarite' } },
    ],
    'Treecko': [
        { 'to': 'Grovyle', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Grovyle': [
        { 'to': 'Sceptile', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Sceptile': [
        { 'to': 'M-Sceptile', 'requires': { 'type': 'megaStone', 'megaStone': 'sceptilite' } },
    ],
    'Torchic': [
        { 'to': 'Combusken', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Combusken': [
        { 'to': 'Blaziken', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Blaziken': [
        { 'to': 'M-Blaziken', 'requires': { 'type': 'megaStone', 'megaStone': 'blazikenite' } },
    ],
    'Mudkip': [
        { 'to': 'Marshtomp', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Marshtomp': [
        { 'to': 'Swampert', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Swampert': [
        { 'to': 'M-Swampert', 'requires': { 'type': 'megaStone', 'megaStone': 'swampertite' } },
    ],
    'Poochyena': [
        { 'to': 'Mightyena', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Zigzagoon': [
        { 'to': 'Linoone', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Wurmple': [
        { 'to': 'Silcoon', 'requires': { 'type': 'level', 'level': '7' } },
    ],
    'Silcoon': [
        { 'to': 'Beautifly', 'requires': { 'type': 'level', 'level': '10' } },
    ],
    'Lotad': [
        { 'to': 'Lombre', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Lombre': [
        { 'to': 'Ludicolo', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
    ],
    'Seedot': [
        { 'to': 'Nuzleaf', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Nuzleaf': [
        { 'to': 'Shiftry', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
    ],
    'Taillow': [
        { 'to': 'Swellow', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Wingull': [
        { 'to': 'Pelipper', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Ralts': [
        { 'to': 'Kirlia', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Kirlia': [
        { 'to': 'Gardevoir', 'requires': { 'type': 'level', 'level': '30' } },
        { 'to': 'Gallade', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Gardevoir': [
        { 'to': 'M-Gardevoir', 'requires': { 'type': 'megaStone', 'megaStone': 'gardevoirite' } },
    ],
    'Gallade': [
        { 'to': 'M-Gallade', 'requires': { 'type': 'megaStone', 'megaStone': 'galladite' } },
    ],
    'Sableye': [
        { 'to': 'M-Sableye', 'requires': { 'type': 'megaStone', 'megaStone': 'sablenite' } },
    ],
    'Mawile': [
        { 'to': 'M-Mawile', 'requires': { 'type': 'megaStone', 'megaStone': 'mawilite' } },
    ],
    'Surskit': [
        { 'to': 'Masquerain', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Shroomish': [
        { 'to': 'Breloom', 'requires': { 'type': 'level', 'level': '23' } },
    ],
    'Slakoth': [
        { 'to': 'Vigoroth', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Vigoroth': [
        { 'to': 'Slaking', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Nincada': [
        { 'to': 'Ninjask', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Whismur': [
        { 'to': 'Loudred', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Loudred': [
        { 'to': 'Exploud', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Makuhita': [
        { 'to': 'Hariyama', 'requires': { 'type': 'level', 'level': '24' } },
    ],
    'Nosepass': [
        { 'to': 'Probopass', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Skitty': [
        { 'to': 'Delcatty', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Aron': [
        { 'to': 'Lairon', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Lairon': [
        { 'to': 'Aggron', 'requires': { 'type': 'level', 'level': '42' } },
    ],
    'Aggron': [
        { 'to': 'M-Aggron', 'requires': { 'type': 'megaStone', 'megaStone': 'aggronite' } },
    ],
    'Meditite': [
        { 'to': 'Medicham', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Medicham': [
        { 'to': 'M-Medicham', 'requires': { 'type': 'megaStone', 'megaStone': 'medichamite' } },
    ],
    'Electrike': [
        { 'to': 'Manectric', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Manectric': [
        { 'to': 'M-Manectric', 'requires': { 'type': 'megaStone', 'megaStone': 'manectite' } },
    ],
    'Budew': [
        { 'to': 'Roselia', 'requires': { 'type': 'level', 'level': '12' } },
    ],
    'Roselia': [
        { 'to': 'Roserade', 'requires': { 'type': 'level', 'level': '27' } },
    ],
    'Gulpin': [
        { 'to': 'Swalot', 'requires': { 'type': 'level', 'level': '26' } },
    ],
    'Carvanha': [
        { 'to': 'Sharpedo', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Sharpedo': [
        { 'to': 'M-Sharpedo', 'requires': { 'type': 'megaStone', 'megaStone': 'sharpedonite' } },
    ],
    'Wailmer': [
        { 'to': 'Wailord', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Numel': [
        { 'to': 'Camerupt', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Camerupt': [
        { 'to': 'M-Camerupt', 'requires': { 'type': 'megaStone', 'megaStone': 'cameruptite' } },
    ],
    'Spoink': [
        { 'to': 'Grumpig', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Trapinch': [
        { 'to': 'Vibrava', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Vibrava': [
        { 'to': 'Flygon', 'requires': { 'type': 'level', 'level': '45' } },
    ],
    'Cacnea': [
        { 'to': 'Cacturne', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Swablu': [
        { 'to': 'Altaria', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Altaria': [
        { 'to': 'M-Altaria', 'requires': { 'type': 'megaStone', 'megaStone': 'altarianite' } },
    ],
    'Barboach': [
        { 'to': 'Whiscash', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Corphish': [
        { 'to': 'Crawdaunt', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Baltoy': [
        { 'to': 'Claydol', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Lileep': [
        { 'to': 'Cradily', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Anorith': [
        { 'to': 'Armaldo', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Feebas': [
        { 'to': 'Milotic', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Shuppet': [
        { 'to': 'Banette', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Banette': [
        { 'to': 'M-Banette', 'requires': { 'type': 'megaStone', 'megaStone': 'banettite' } },
    ],
    'Absol': [
        { 'to': 'M-Absol', 'requires': { 'type': 'megaStone', 'megaStone': 'absolite' } },
    ],
    'Duskull': [
        { 'to': 'Dusclops', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Dusclops': [
        { 'to': 'Dusknoir', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Chingling': [
        { 'to': 'Chimecho', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Snorunt': [
        { 'to': 'Glalie', 'requires': { 'type': 'level', 'level': '42' } },
    ],
    'Glalie': [
        { 'to': 'M-Glalie', 'requires': { 'type': 'megaStone', 'megaStone': 'glalitite' } },
    ],
    'Spheal': [
        { 'to': 'Sealeo', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Sealeo': [
        { 'to': 'Walrein', 'requires': { 'type': 'level', 'level': '44' } },
    ],
    'Clamperl': [
        { 'to': 'Gorebyss', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Bagon': [
        { 'to': 'Shelgon', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Shelgon': [
        { 'to': 'Salamence', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Salamence': [
        { 'to': 'M-Salamence', 'requires': { 'type': 'megaStone', 'megaStone': 'salamencite' } },
    ],
    'Beldum': [
        { 'to': 'Metang', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Metang': [
        { 'to': 'Metagross', 'requires': { 'type': 'level', 'level': '45' } },
    ],
    'Metagross': [
        { 'to': 'M-Metagross', 'requires': { 'type': 'megaStone', 'megaStone': 'metagrossite' } },
    ],
    'Latias': [
        { 'to': 'M-Latias', 'requires': { 'type': 'megaStone', 'megaStone': 'latiasite' } },
    ],
    'Latios': [
        { 'to': 'M-Latios', 'requires': { 'type': 'megaStone', 'megaStone': 'latiosite' } },
    ],
    'Rayquaza': [
        { 'to': 'M-Rayquaza', 'requires': { 'type': 'megaStone', 'megaStone': 'rayquazite' } },
    ],
    'Lopunny': [
        { 'to': 'M-Lopunny', 'requires': { 'type': 'megaStone', 'megaStone': 'lopunnite' } },
    ],
    'Gible': [
        { 'to': 'Gabite', 'requires': { 'type': 'level', 'level': '24' } },
    ],
    'Gabite': [
        { 'to': 'Garchomp', 'requires': { 'type': 'level', 'level': '48' } },
    ],
    'Garchomp': [
        { 'to': 'M-Garchomp', 'requires': { 'type': 'megaStone', 'megaStone': 'garchompite' } },
    ],
    'Lucario': [
        { 'to': 'M-Lucario', 'requires': { 'type': 'megaStone', 'megaStone': 'lucarionite' } },
    ],
    'Abomasnow': [
        { 'to': 'M-Abomasnow', 'requires': { 'type': 'megaStone', 'megaStone': 'abomasnite' } },
    ],
    'Snivy': [
        { 'to': 'Servine', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Servine': [
        { 'to': 'Serperior', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Tepig': [
        { 'to': 'Pignite', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Pignite': [
        { 'to': 'Emboar', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Oshawott': [
        { 'to': 'Dewott', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Dewott': [
        { 'to': 'Samurott', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Patrat': [
        { 'to': 'Watchog', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Purrloin': [
        { 'to': 'Liepard', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Pidove': [
        { 'to': 'Tranquill', 'requires': { 'type': 'level', 'level': '21' } },
    ],
    'Tranquill': [
        { 'to': 'Unfezant', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Sewaddle': [
        { 'to': 'Swadloon', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Swadloon': [
        { 'to': 'Leavanny', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Lillipup': [
        { 'to': 'Herdier', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Herdier': [
        { 'to': 'Stoutland', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Pansage': [
        { 'to': 'Simisage', 'requires': { 'type': 'stone', 'stone': 'leafStone' } },
    ],
    'Pansear': [
        { 'to': 'Simisear', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
    ],
    'Panpour': [
        { 'to': 'Simipour', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
    ],
    'Woobat': [
        { 'to': 'Swoobat', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Venipede': [
        { 'to': 'Whirlipede', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Whirlipede': [
        { 'to': 'Scolipede', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Roggenrola': [
        { 'to': 'Boldore', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Boldore': [
        { 'to': 'Gigalith', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Timburr': [
        { 'to': 'Gurdurr', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Gurdurr': [
        { 'to': 'Conkeldurr', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Drilbur': [
        { 'to': 'Excadrill', 'requires': { 'type': 'level', 'level': '31' } },
    ],
    'Cottonee': [
        { 'to': 'Whimsicott', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Petilil': [
        { 'to': 'Lilligant', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Munna': [
        { 'to': 'Musharna', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Sandile': [
        { 'to': 'Krokorok', 'requires': { 'type': 'level', 'level': '29' } },
    ],
    'Krokorok': [
        { 'to': 'Krookodile', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Darumaka': [
        { 'to': 'Darmanitan', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Trubbish': [
        { 'to': 'Garbodor', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Minccino': [
        { 'to': 'Cinccino', 'requires': { 'type': 'stone', 'stone': 'shinyStone' } },
    ],
    'Rufflet': [
        { 'to': 'Braviary', 'requires': { 'type': 'level', 'level': '54' } },
    ],
    'Vullaby': [
        { 'to': 'Mandibuzz', 'requires': { 'type': 'level', 'level': '54' } },
    ],
    'Dwebble': [
        { 'to': 'Crustle', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Scraggy': [
        { 'to': 'Scrafty', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Yamask': [
        { 'to': 'Cofagrigus', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Tirtouga': [
        { 'to': 'Carracosta', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Archen': [
        { 'to': 'Archeops', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Klink': [
        { 'to': 'Klang', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Klang': [
        { 'to': 'Klinklang', 'requires': { 'type': 'level', 'level': '49' } },
    ],
    'Gothita': [
        { 'to': 'Gothorita', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Gothorita': [
        { 'to': 'Gothitelle', 'requires': { 'type': 'level', 'level': '41' } },
    ],
    'Solosis': [
        { 'to': 'Duosion', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Duosion': [
        { 'to': 'Reuniclus', 'requires': { 'type': 'level', 'level': '41' } },
    ],
    'Blitzle': [
        { 'to': 'Zebstrika', 'requires': { 'type': 'level', 'level': '27' } },
    ],
    'Zorua': [
        { 'to': 'Zoroark', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Ducklett': [
        { 'to': 'Swanna', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Karrablast': [
        { 'to': 'Escavalier', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Shelmet': [
        { 'to': 'Accelgor', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Deerling': [
        { 'to': 'Sawsbuck', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Foongus': [
        { 'to': 'Amoonguss', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Larvesta': [
        { 'to': 'Volcarona', 'requires': { 'type': 'level', 'level': '59' } },
    ],
    'Joltik': [
        { 'to': 'Galvantula', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Ferroseed': [
        { 'to': 'Ferrothorn', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Tynamo': [
        { 'to': 'Eelektrik', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Axew': [
        { 'to': 'Fraxure', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Fraxure': [
        { 'to': 'Haxorus', 'requires': { 'type': 'level', 'level': '48' } },
    ],
    'Eelektrik': [
        { 'to': 'Eelektross', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
    ],
    'Frillish': [
        { 'to': 'Jellicent', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Elgyem': [
        { 'to': 'Beheeyem', 'requires': { 'type': 'level', 'level': '42' } },
    ],
    'Litwick': [
        { 'to': 'Lampent', 'requires': { 'type': 'level', 'level': '41' } },
    ],
    'Lampent': [
        { 'to': 'Chandelure', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Cubchoo': [
        { 'to': 'Beartic', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Mienfoo': [
        { 'to': 'Mienshao', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Pawniard': [
        { 'to': 'Bisharp', 'requires': { 'type': 'level', 'level': '52' } },
    ],
    'Tympole': [
        { 'to': 'Palpitoad', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Palpitoad': [
        { 'to': 'Seismitoad', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Vanillite': [
        { 'to': 'Vanillish', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Vanillish': [
        { 'to': 'Vanilluxe', 'requires': { 'type': 'level', 'level': '47' } },
    ],
    'Golett': [
        { 'to': 'Golurk', 'requires': { 'type': 'level', 'level': '43' } },
    ],
    'Deino': [
        { 'to': 'Zweilous', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Zweilous': [
        { 'to': 'Hydreigon', 'requires': { 'type': 'level', 'level': '64' } },
    ],
    'Audino': [
        { 'to': 'M-Audino', 'requires': { 'type': 'megaStone', 'megaStone': 'audinite' } },
    ],
    'Diancie': [
        { 'to': 'M-Diancie', 'requires': { 'type': 'megaStone', 'megaStone': 'diancite' } },
    ],
    'Froakie': [
        { 'to': 'Frogadier', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Frogadier': [
        { 'to': 'Greninja', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Fennekin': [
        { 'to': 'Braixen', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Braixen': [
        { 'to': 'Delphox', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Chespin': [
        { 'to': 'Quilladin', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Quilladin': [
        { 'to': 'Chesnaught', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Fletchling': [
        { 'to': 'Fletchinder', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Fletchinder': [
        { 'to': 'Talonflame', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Scatterbug': [
        { 'to': 'Spewpa', 'requires': { 'type': 'level', 'level': '9' } },
    ],
    'Spewpa': [
        { 'to': 'Vivillon', 'requires': { 'type': 'level', 'level': '12' } },
    ],
    'Bunnelby': [
        { 'to': 'Diggersby', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Litleo': [
        { 'to': 'Pyroar', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Skiddo': [
        { 'to': 'Gogoat', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Flabebe': [
        { 'to': 'Floette', 'requires': { 'type': 'level', 'level': '19' } },
    ],
    'Floette': [
        { 'to': 'Florges', 'requires': { 'type': 'stone', 'stone': 'shinyStone' } },
    ],
    'Pancham': [
        { 'to': 'Pangoro', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Espurr': [
        { 'to': 'Meowstic', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Honedge': [
        { 'to': 'Doublade', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Doublade': [
        { 'to': 'Aegislash', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Spritzee': [
        { 'to': 'Aromatisse', 'requires': { 'type': 'stone', 'stone': 'sachet' } },
    ],
    'Swirlix': [
        { 'to': 'Slurpuff', 'requires': { 'type': 'stone', 'stone': 'whippedDream' } },
    ],
    'Inkay': [
        { 'to': 'Malamar', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Binacle': [
        { 'to': 'Barbaracle', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Skrelp': [
        { 'to': 'Dragalge', 'requires': { 'type': 'level', 'level': '48' } },
    ],
    'Clauncher': [
        { 'to': 'Clawitzer', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Tyrunt': [
        { 'to': 'Tyrantrum', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Amaura': [
        { 'to': 'Aurorus', 'requires': { 'type': 'level', 'level': '39' } },
    ],
    'Helioptile': [
        { 'to': 'Heliolisk', 'requires': { 'type': 'stone', 'stone': 'sunStone' } },
    ],
    'Goomy': [
        { 'to': 'Sliggoo', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Sliggoo': [
        { 'to': 'Goodra', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Phantump': [
        { 'to': 'Trevenant', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Pumpkaboo': [
        { 'to': 'Gourgeist', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Bergmite': [
        { 'to': 'Avalugg', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Noibat': [
        { 'to': 'Noivern', 'requires': { 'type': 'level', 'level': '48' } },
    ],
    'Popplio': [
        { 'to': 'Brionne', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Brionne': [
        { 'to': 'Primarina', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Litten': [
        { 'to': 'Torracat', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Torracat': [
        { 'to': 'Incineroar', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Rowlet': [
        { 'to': 'Dartrix', 'requires': { 'type': 'level', 'level': '17' } },
    ],
    'Dartrix': [
        { 'to': 'Decidueye', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Turtwig': [
        { 'to': 'Grotle', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Grotle': [
        { 'to': 'Torterra', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Chimchar': [
        { 'to': 'Monferno', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Monferno': [
        { 'to': 'Infernape', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Piplup': [
        { 'to': 'Prinplup', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Prinplup': [
        { 'to': 'Empoleon', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Starly': [
        { 'to': 'Staravia', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Staravia': [
        { 'to': 'Staraptor', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Bidoof': [
        { 'to': 'Bibarel', 'requires': { 'type': 'level', 'level': '15' } },
    ],
    'Kricketot': [
        { 'to': 'Kricketune', 'requires': { 'type': 'level', 'level': '10' } },
    ],
    'Shinx': [
        { 'to': 'Luxio', 'requires': { 'type': 'level', 'level': '15' } },
    ],
    'Luxio': [
        { 'to': 'Luxray', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Cranidos': [
        { 'to': 'Rampardos', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Shieldon': [
        { 'to': 'Bastiodon', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Buizel': [
        { 'to': 'Floatzel', 'requires': { 'type': 'level', 'level': '26' } },
    ],
    'Aipom': [
        { 'to': 'Ambipom', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Drifloon': [
        { 'to': 'Drifblim', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Buneary': [
        { 'to': 'Lopunny', 'requires': { 'type': 'level', 'level': 'sootheBell' } },
    ],
    'Misdreavus': [
        { 'to': 'Mismagius', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Murkrow': [
        { 'to': 'Honchkrow', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Glameow': [
        { 'to': 'Purugly', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Stunky': [
        { 'to': 'Skuntank', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Bronzor': [
        { 'to': 'Bronzong', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Mime Jr.': [
        { 'to': 'Mr. Mime', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Happiny': [
        { 'to': 'Chansey', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Munchlax': [
        { 'to': 'Snorlax', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Riolu': [
        {
            'to': 'Lucario',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'stone', 'stone': 'sootheBell' },
                    { 'type': 'time', 'time': [6, 18] },
                ],
            },
        },
    ],
    'Hippopotas': [
        { 'to': 'Hippowdon', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Skorupi': [
        { 'to': 'Drapion', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Croagunk': [
        { 'to': 'Toxicroak', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Finneon': [
        { 'to': 'Lumineon', 'requires': { 'type': 'level', 'level': '31' } },
    ],
    'Mantyke': [
        { 'to': 'Mantine', 'requires': { 'type': 'stone', 'stone': 'sootheBell' } },
    ],
    'Snover': [
        { 'to': 'Abomasnow', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Sneasel': [
        { 'to': 'Weavile', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Magneton': [
        { 'to': 'Magnezone', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
    ],
    'Lickitung': [
        { 'to': 'Lickilicky', 'requires': { 'type': 'stone', 'stone': 'moonStone' } },
    ],
    'Rhydon': [
        { 'to': 'Rhyperior', 'requires': { 'type': 'level', 'level': '90' } },
    ],
    'Tangela': [
        { 'to': 'Tangrowth', 'requires': { 'type': 'level', 'level': '90' } },
    ],
    'Electabuzz': [
        { 'to': 'Electivire', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
    ],
    'Magmar': [
        { 'to': 'Magmortar', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
    ],
    'Yanma': [
        { 'to': 'Yanmega', 'requires': { 'type': 'level', 'level': '50' } },
    ],
    'Gligar': [
        { 'to': 'Gliscor', 'requires': { 'type': 'stone', 'stone': 'duskStone' } },
    ],
    'Piloswine': [
        { 'to': 'Mamoswine', 'requires': { 'type': 'stone', 'stone': 'iceStone' } },
    ],
    'Porygon2': [
        { 'to': 'Porygon-Z', 'requires': { 'type': 'level', 'level': '90' } },
    ],
    'Pikipek': [
        { 'to': 'Trumbeak', 'requires': { 'type': 'level', 'level': '14' } },
    ],
    'Trumbeak': [
        { 'to': 'Toucannon', 'requires': { 'type': 'level', 'level': '28' } },
    ],
    'Yungoos': [
        { 'to': 'Gumshoos', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Grubbin': [
        { 'to': 'Charjabug', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Charjabug': [
        { 'to': 'Vikavolt', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Crabrawler': [
        { 'to': 'Crabominable', 'requires': { 'type': 'region', 'region': 'Alola' } },
    ],
    'Cutiefly': [
        { 'to': 'Ribombee', 'requires': { 'type': 'level', 'level': '25' } },
    ],
    'Rockruff': [
        {
            'to': 'Lycanroc',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '25' },
                    { 'type': 'time', 'time': [6, 18] },
                ],
            },
        },
        {
            'to': 'Lycanroc-M',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '25' },
                    { 'type': 'time', 'time': [18, 6] },
                ],
            },
        },
        {
            'to': 'Lycanroc-D',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '25' },
                    { 'type': 'region', 'region': 'Alola' },
                ],
            },
        },
    ],
    'Mareanie': [
        { 'to': 'Toxapex', 'requires': { 'type': 'level', 'level': '38' } },
    ],
    'Mudbray': [
        { 'to': 'Mudsdale', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Dewpider': [
        { 'to': 'Araquanid', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Fomantis': [
        { 'to': 'Lurantis', 'requires': { 'type': 'level', 'level': '34' } },
    ],
    'Morelull': [
        { 'to': 'Shiinotic', 'requires': { 'type': 'level', 'level': '24' } },
    ],
    'Salandit': [
        { 'to': 'Salazzle', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Stufful': [
        { 'to': 'Bewear', 'requires': { 'type': 'level', 'level': '27' } },
    ],
    'Bounsweet': [
        { 'to': 'Steenee', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Steenee': [
        { 'to': 'Tsareena', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Wimpod': [
        { 'to': 'Golisopod', 'requires': { 'type': 'level', 'level': '30' } },
    ],
    'Sandygast': [
        { 'to': 'Palossand', 'requires': { 'type': 'level', 'level': '42' } },
    ],
    'Jangmo-o': [
        { 'to': 'Hakamo-o', 'requires': { 'type': 'level', 'level': '35' } },
    ],
    'Hakamo-o': [
        { 'to': 'Kommo-o', 'requires': { 'type': 'level', 'level': '45' } },
    ],
    'Cosmog': [
        { 'to': 'Cosmoem', 'requires': { 'type': 'level', 'level': '43' } },
    ],
    'Cosmoem': [
        {
            'to': 'Solgaleo',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '53' },
                    { 'type': 'time', 'time': [6, 18] },
                ],
            },
        },
        {
            'to': 'Lunala',
            'requires': {
                'type': 'multi',
                'requires': [
                    { 'type': 'level', 'level': '53' },
                    { 'type': 'time', 'time': [18, 6] },
                ],
            },
        },
    ],
};

export default EVOLUTIONS;
