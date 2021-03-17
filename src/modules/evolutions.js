const EVOLUTIONS = {
    'Bulbasaur': [
        { 'to': 'Ivysaur', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Ivysaur': [
        { 'to': 'Venusaur', 'requires': { 'type': 'level', 'level': '32' } },
    ],
    'Charmander': [
        { 'to': 'Charmeleon', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Charmeleon': [
        { 'to': 'Charizard', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Charizard': [
        { 'to': 'M-Charizard X', 'requires': { 'type': 'megaStone', 'megaStone': 'CharizarditeX' } },
        { 'to': 'M-Charizard Y', 'requires': { 'type': 'megaStone', 'megaStone': 'CharizarditeY' } },
    ],
    'Squirtle': [
        { 'to': 'Wartortle', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Wartortle': [
        { 'to': 'Blastoise', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Blastoise': [
        { 'to': 'M-Blastoise', 'requires': { 'type': 'megaStone', 'megaStone': 'Blastoisinite' } },
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
        { 'to': 'M-Beedrill', 'requires': { 'type': 'megaStone', 'megaStone': 'Beedrillite' } },
    ],
    'Pidgey': [
        { 'to': 'Pidgeotto', 'requires': { 'type': 'level', 'level': '18' } },
    ],
    'Pidgeotto': [
        { 'to': 'Pidgeot', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Pidgeot': [
        { 'to': 'M-Pidgeot', 'requires': { 'type': 'megaStone', 'megaStone': 'Pidgeotite' } },
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
        { 'to': 'Alolan Raichu', 'requires': { 'type': 'stone', 'stone': 'alolanStone' } },
    ],
    'Sandshrew': [
        { 'to': 'Sandslash', 'requires': { 'type': 'level', 'level': '22' } },
    ],
    'Alolan Sandshrew': [
        { 'to': 'Alolan Sandslash', 'requires': { 'type': 'level', 'level': '22' } },
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
        { 'to': 'Alolan Ninetales', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
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
        { 'to': 'M-Alakazam', 'requires': { 'type': 'megaStone', 'megaStone': 'Alakazite' } },
    ],
    'Kangaskhan': [
        { 'to': 'M-Kangaskhan', 'requires': { 'type': 'megaStone', 'megaStone': 'Kangaskhanite' } },
    ],
    'Pinsir': [
        { 'to': 'M-Pinsir', 'requires': { 'type': 'megaStone', 'megaStone': 'Pinsirite' } },
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
        { 'to': 'M-Slowbro', 'requires': { 'type': 'megaStone', 'megaStone': 'Slowbronite' } },
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
        { 'to': 'M-Gengar', 'requires': { 'type': 'megaStone', 'megaStone': 'Gengarite' } },
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
        { 'to': 'Alola Exeggutor', 'requires': { 'type': 'stone', 'stone': 'alolanStone' } },
    ],
    'Cubone': [
        { 'to': 'Marowak', 'requires': { 'type': 'level', 'level': '28' } },
        { 'to': 'Alolan Marowak', 'requires': { 'type': 'stone', 'stone': 'alolanStone' } },
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
        { 'to': 'M-Gyarados', 'requires': { 'type': 'megaStone', 'megaStone': 'Gyaradosite' } },
    ],
    'Aerodactyl': [
        { 'to': 'M-Aerodactyl', 'requires': { 'type': 'megaStone', 'megaStone': 'Aerodactylite' } },
    ],
    'Eevee': [
        { 'to': 'Flareon', 'requires': { 'type': 'stone', 'stone': 'fireStone' } },
        { 'to': 'Jolteon', 'requires': { 'type': 'stone', 'stone': 'thunderStone' } },
        { 'to': 'Vaporeon', 'requires': { 'type': 'stone', 'stone': 'waterStone' } },
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
        { 'to': 'M-Ampharos', 'requires': { 'type': 'megaStone', 'megaStone': 'Ampharosite' } },
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
        { 'to': 'M-Heracross', 'requires': { 'type': 'megaStone', 'megaStone': 'Heracronite' } },
    ],
    'Scizor': [
        { 'to': 'M-Scizor', 'requires': { 'type': 'megaStone', 'megaStone': 'Scizorite' } },
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
        { 'to': 'M-Steelix', 'requires': { 'type': 'megaStone', 'megaStone': 'Steelixite' } },
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
        { 'to': 'M-Houndoom', 'requires': { 'type': 'megaStone', 'megaStone': 'Houndoominite' } },
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
        { 'to': 'M-Tyranitar', 'requires': { 'type': 'megaStone', 'megaStone': 'Tyranitite' } },
    ],
    'Treecko': [
        { 'to': 'Grovyle', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Grovyle': [
        { 'to': 'Sceptile', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Sceptile': [
        { 'to': 'M-Sceptile', 'requires': { 'type': 'megaStone', 'megaStone': 'Sceptilite' } },
    ],
    'Torchic': [
        { 'to': 'Combusken', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Combusken': [
        { 'to': 'Blaziken', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Blaziken': [
        { 'to': 'M-Blaziken', 'requires': { 'type': 'megaStone', 'megaStone': 'Blazikenite' } },
    ],
    'Mudkip': [
        { 'to': 'Marshtomp', 'requires': { 'type': 'level', 'level': '16' } },
    ],
    'Marshtomp': [
        { 'to': 'Swampert', 'requires': { 'type': 'level', 'level': '36' } },
    ],
    'Swampert': [
        { 'to': 'M-Swampert', 'requires': { 'type': 'megaStone', 'megaStone': 'Swampertite' } },
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
        { 'to': 'M-Gardevoir', 'requires': { 'type': 'megaStone', 'megaStone': 'Gardevoirite' } },
    ],
    'Gallade': [
        { 'to': 'M-Gallade', 'requires': { 'type': 'megaStone', 'megaStone': 'Galladite' } },
    ],
    'Sableye': [
        { 'to': 'M-Sableye', 'requires': { 'type': 'megaStone', 'megaStone': 'Sablenite' } },
    ],
    'Mawile': [
        { 'to': 'M-Mawile', 'requires': { 'type': 'megaStone', 'megaStone': 'Mawilite' } },
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
        { 'to': 'M-Aggron', 'requires': { 'type': 'megaStone', 'megaStone': 'Aggronite' } },
    ],
    'Meditite': [
        { 'to': 'Medicham', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Medicham': [
        { 'to': 'M-Medicham', 'requires': { 'type': 'megaStone', 'megaStone': 'Medichamite' } },
    ],
    'Electrike': [
        { 'to': 'Manectric', 'requires': { 'type': 'level', 'level': '37' } },
    ],
    'Manectric': [
        { 'to': 'M-Manectric', 'requires': { 'type': 'megaStone', 'megaStone': 'Manectite' } },
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
        { 'to': 'M-Sharpedo', 'requires': { 'type': 'megaStone', 'megaStone': 'Sharpedonite' } },
    ],
    'Wailmer': [
        { 'to': 'Wailord', 'requires': { 'type': 'level', 'level': '40' } },
    ],
    'Numel': [
        { 'to': 'Camerupt', 'requires': { 'type': 'level', 'level': '33' } },
    ],
    'Camerupt': [
        { 'to': 'M-Camerupt', 'requires': { 'type': 'megaStone', 'megaStone': 'Cameruptite' } },
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
        { 'to': 'M-Altaria', 'requires': { 'type': 'megaStone', 'megaStone': 'Altarianite' } },
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
        { 'to': 'M-Banette', 'requires': { 'type': 'megaStone', 'megaStone': 'Banettite' } },
    ],
    'Absol': [
        { 'to': 'M-Absol', 'requires': { 'type': 'megaStone', 'megaStone': 'Absolite' } },
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
        { 'to': 'M-Glalie', 'requires': { 'type': 'megaStone', 'megaStone': 'Glalitite' } },
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
        { 'to': 'M-Salamence', 'requires': { 'type': 'megaStone', 'megaStone': 'Salamencite' } },
    ],
    'Beldum': [
        { 'to': 'Metang', 'requires': { 'type': 'level', 'level': '20' } },
    ],
    'Metang': [
        { 'to': 'Metagross', 'requires': { 'type': 'level', 'level': '45' } },
    ],
    'Metagross': [
        { 'to': 'M-Metagross', 'requires': { 'type': 'megaStone', 'megaStone': 'Metagrossite' } },
    ],
    'Latias': [
        { 'to': 'M-Latias', 'requires': { 'type': 'megaStone', 'megaStone': 'Latiasite' } },
    ],
    'Latios': [
        { 'to': 'M-Latios', 'requires': { 'type': 'megaStone', 'megaStone': 'Latiosite' } },
    ],
    'Rayquaza': [
        { 'to': 'M-Rayquaza', 'requires': { 'type': 'megaStone', 'megaStone': 'Rayquazite' } },
    ],
    'Lopunny': [
        { 'to': 'M-Lopunny', 'requires': { 'type': 'megaStone', 'megaStone': 'Lopunnite' } },
    ],
    'Garchomp': [
        { 'to': 'M-Garchomp', 'requires': { 'type': 'megaStone', 'megaStone': 'Garchompite' } },
    ],
    'Lucario': [
        { 'to': 'M-Lucario', 'requires': { 'type': 'megaStone', 'megaStone': 'Lucarionite' } },
    ],
    'Abomasnow': [
        { 'to': 'M-Abomasnow', 'requires': { 'type': 'megaStone', 'megaStone': 'Abomasnite' } },
    ],
    'Audino': [
        { 'to': 'M-Audino', 'requires': { 'type': 'megaStone', 'megaStone': 'Audinite' } },
    ],
    'Diancie': [
        { 'to': 'M-Diancie', 'requires': { 'type': 'megaStone', 'megaStone': 'Diancite' } },
    ],
};

export default EVOLUTIONS;
