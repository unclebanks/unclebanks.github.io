import {
    POKEDEXFLAGS, BALLRNG, PokemonTypes, MegaWithoutQuest,
} from './data';
import POKEDEX from './db.ts';
import Poke from './poke';
import ROUTES from './routes';
import { pokeByName, randomArrayElement } from './utilities';

export default (lastSave, appModel) => {
    let dom;

    const Player = {
        pokedexHighestID: 0,
        activePokeID: 0,
        lastHeal: Date.now(),
        currentBoostedRoamer: {
            region: 'Kanto',
            route: '1',
            pokemon: 'Raikou',
            start: 0,
            length: 5 * 60 * 1000,
            expired: false,
        },
        selectedBall: 'pokeball',
        ballsAmount: {
            pokeball: 20,
            greatball: 0,
            ultraball: 0,
            masterball: 0,
        },
        unlocked: {},
        secretCodes: {},
        megaStones: {
            abomasite: 0,
            absolite: 0,
            aerodactylite: 0,
            aggronite: 0,
            alakazite: 0,
            altarianite: 0,
            ampharosite: 0,
            audinite: 0,
            banettite: 0,
            blastoisinite: 0,
            blazikenite: 0,
            cameruptite: 0,
            charizarditeX: 0,
            charizarditeY: 0,
            diancite: 0,
            galladite: 0,
            garchompite: 0,
            gardevoirite: 0,
            gengarite: 0,
            glalitite: 0,
            gyaradosite: 0,
            heracronite: 0,
            houndoominite: 0,
            kangaskhanite: 0,
            latiasite: 0,
            latiosite: 0,
            lopunnite: 0,
            lucarionite: 0,
            manectite: 0,
            mawilite: 0,
            medichamite: 0,
            metagrossite: 0,
            mewtwoniteX: 0,
            mewtwoniteY: 0,
            pidgeotite: 0,
            pinsirite: 0,
            sablenite: 0,
            salamencite: 0,
            sceptilite: 0,
            scizorite: 0,
            sharpedonite: 0,
            slowbronite: 0,
            steelixite: 0,
            swampertite: 0,
            tyranitarite: 0,
            venusaurite: 0,
            beedrillite: 0,
        },
        defeatedWith:
            MegaWithoutQuest.reduce((a, b) => { a[b] = 0; return a; }, {}),
        typeStats: {
            defeatedType:
              PokemonTypes.reduce((a, b) => { a[b] = 0; return a; }, {}),
            caughtType:
              PokemonTypes.reduce((a, b) => { a[b] = 0; return a; }, {}),
        },
        evoStones: {},
        currencyAmount: {
            pokecoins: 0,
            catchcoins: 0,
            battlecoins: 0,
            gametokens: 0,
        },
        battleItems: {
            xAttack: 0,
            xDefense: 0,
            xSpeed: 0,
            xSpAttack: 0,
            xSpDefense: 0,
            expBoost: 0,
            currencyBoost: 0,
            revive: 0,
            maxRevive: 0,
        },
        vitamins: {
            hpUp: 0,
            protein: 0,
            iron: 0,
            calcium: 0,
            zinc: 0,
            carbos: 0,
        },
        settings: {
            currentRegionId: 'Kanto',
            currentRouteId: 'kViridianForest',
            listView: 'pokeDex',
            autoSort: true,
            dexView: 'all',
            dexVersion: 194, // check if users dex is out of date
            spriteChoice: 'back',
            catching: false,
        },
        skills: {
            breeding: 0,
            throwing: 0,
            training: 0,
        },
        statistics: {
            seen: 0,
            caught: 0,
            beaten: 0,
            shinySeen: 0,
            shinyCaught: 0,
            shinyBeaten: 0,
            totalDamage: 0,
            totalThrows: 0,
            successfulThrows: 0,
            pokeballThrows: 0,
            pokeballSuccessfulThrows: 0,
            greatballThrows: 0,
            greatballSuccessfulThrows: 0,
            ultraballThrows: 0,
            ultraballSuccessfulThrows: 0,
            masterballThrows: 0,
            masterballSuccessfulThrows: 0,
            totalPokeCoins: 0,
            totalCatchCoins: 0,
            totalBattleCoins: 0,
            totalExp: 0,
            megaQuestsCompleted: 0,
        },
        statisticsRequirements: {
            beaten: 50,
            beaten1: 100,
            caught: 100,
            caught1: 1000,
            owned: 100,
            owned1: 150,
        },
        badges: {},
        wins: {},
        events: {},
        purgeData: false,

        checksum: function (s) {
            let chk = 0x12345679;
            const len = s.length;
            for (let i = 0; i < len; i++) {
                chk += (s.charCodeAt(i) * (i + 1));
            }
            // eslint-disable-next-line no-bitwise
            return (chk & 0xffffffff).toString(16);
        },
        addPoke: function (poke) {
            const existing = this.getPokemonByName(poke.pokeName());
            if (existing) {
                // if we already have something like this, just update shiny
                existing.isShiny = existing.shiny() || poke.shiny();
                return;
            }

            appModel.$store.commit('pokemon/add', poke);
        },
        findDexIndex: (p) => POKEDEX.findIndex((x) => x.name == p.name),
        addPokedex: function (pokeName, flag) {
            appModel.$store.commit('pokedex/addData', { pokeName, flag });
        },
        hasDexEntry: function (pokeName, flag, exact = false) {
            function findFlag(obj) { return (this == obj.name); }
            const dexEntry = this.getPokedexData().find(findFlag, pokeName);
            if (typeof dexEntry !== 'undefined') {
                if ((exact && dexEntry.flag == flag)
                || (!exact && dexEntry.flag >= flag)) {
                    return true;
                }
            }
            return false;
        },
        getHighestPokeDex: function () {
            const dex = (lhs, rhs) => this.findDexIndex(rhs) - this.findDexIndex(lhs);
            this.pokedexHighestID = Player.getPokedexData().sort(dex)[0];
            return this.pokedexHighestID;
        },
        countPokedex: function (flag, exactMatch = false) {
            let counter = 0;
            let i;
            for (i in this.getPokedexData()) {
                const pData = this.getPokedexData()[i];
                if (exactMatch && flag == pData.flag) {
                    counter++;
                } else if (!exactMatch && flag <= pData.flag) {
                    counter++;
                }
            }
            return counter;
        },
        setActive: function (index) {
            appModel.$store.state.pokemon.activePokeID = index;
        },
        alivePokeIndexes: function () {
            const alive = this.getPokemon().filter((poke) => poke.alive());
            return alive;
        },
        activePoke: function () { return appModel.$store.getters['pokemon/active']; },
        getPokemon: function () { return appModel.$store.state.pokemon.party; },
        getPokedexData: function () { return appModel.$store.state.pokedex.data; },
        // reorderPokes: function (newList, list = 'roster') {
        //     if (list === 'roster') {
        //         this.pokemons = newList;
        //     } else {
        //         this.storage = newList;
        //     }
        // },
        healAllPokemons: function () {
            const timeToHeal = appModel.$store.getters['pokemon/timeToHeal'];

            if (timeToHeal <= 0) {
                appModel.$store.commit('pokemon/healAll');
                return 'healed';
            }

            return timeToHeal;
        },
        hasPokemonLike(pokemon) {
            return this.hasPokemon(pokemon.pokeName(), pokemon.shiny());
        },
        // Return true if we have this pokemon in the same shininess or better
        hasPokemon: function (pokemonName, shiny) {
            // match if the name matches and we don't care about shiny, or the pokemon is shiny
            const match = (p) => p.pokeName() === pokemonName && (!shiny || p.isShiny);
            // findIndex will return > -1 if there is a match
            return appModel.$store.getters['pokemon/all'].findIndex(match) > -1;
        },
        getPokemonByName: function (pokemonName) {
            return appModel.$store.getters['pokemon/all'].find((p) => p.pokeName() === pokemonName);
        },
        deletePoke: function (index, from = 'roster') {
            appModel.$store.commit('pokemon/remove', { index, from });
        },
        ballRNG: function (ballName) {
            return BALLRNG[ballName];
        },
        changeSelectedBall: function (newBall) {
            this.selectedBall = newBall;
        },
        consumeBall: function (ballName) {
            if (this.ballsAmount[ballName] > 0) {
                this.ballsAmount[ballName] -= 1;
                return true;
            }
            return false;
        },
        bestAvailableBall: function () {
            const ballsFromBestToWorst = ['masterball', 'ultraball', 'greatball', 'pokeball'];
            for (let i = 0; i < ballsFromBestToWorst.length; i++) {
                if (this.ballsAmount[ballsFromBestToWorst[i]] > 0) {
                    return ballsFromBestToWorst[i];
                }
            }

            return null;
        },
        addBalls: function (ballName, amount) {
            this.ballsAmount[ballName] += amount;
        },
        addPokeCoins: function (amount) {
            this.currencyAmount.pokecoins += amount;
            this.statistics.totalPokeCoins += amount;
            dom.renderPokeCoins();
        },
        addCatchCoins: function (amount) {
            this.currencyAmount.catchcoins += amount;
            this.statistics.totalCatchCoins += amount;
            dom.renderCatchCoins();
        },
        addBattleCoins: function (amount) {
            this.currencyAmount.battlecoins += amount;
            this.statistics.totalBattleCoins += amount;
            dom.renderBattleCoins();
        },
        meetsCriteria: function (criteriaObj) {
            for (const group in criteriaObj) {
                if (typeof criteriaObj[group] === 'object') {
                    for (const criteria in criteriaObj[group]) {
                    // if pokedex criteria
                        if (group == 'dex') {
                            if (criteria == 'caughtCount'
                            && this.countPokedex(POKEDEXFLAGS.releasedNormal) < criteriaObj[group][criteria]) {
                                return false;
                            }
                        } else if (typeof Player[group][criteria] === 'undefined') return false;
                        else if (typeof criteriaObj[group][criteria] === 'boolean' && Player[group][criteria] < criteriaObj[group][criteria]) return false;
                        else if (Player[group][criteria] < criteriaObj[group][criteria]) return false;
                    }
                } else if (Player[group] < criteriaObj[group]) return false;
            }
            return true;
        },
        regionUnlocked: function (region) {
            const unlockData = ROUTES[region]._unlock;
            if (unlockData) {
                return this.meetsCriteria(unlockData);
            }
            return true;
        },
        routeUnlocked: function (region, route) {
            const routeData = ROUTES[region][route];
            if (routeData.kantoOldRod && !Player.unlocked.kantoOldRod) {
                return false;
            }
            if (routeData.kantoGoodRod && !Player.unlocked.kantoGoodRod) {
                return false;
            }
            if (routeData.kantoSuperRod && !Player.unlocked.kantoSuperRod) {
                return false;
            }
            if (routeData.johtoOldRod && !Player.unlocked.johtoOldRod) {
                return false;
            }
            if (routeData.johtoGoodRod && !Player.unlocked.johtoGoodRod) {
                return false;
            }
            if (routeData.johtoSuperRod && !Player.unlocked.johtoSuperRod) {
                return false;
            }
            if (routeData.hoennOldRod && !Player.unlocked.hoennOldRod) {
                return false;
            }
            if (routeData.hoennGoodRod && !Player.unlocked.hoennGoodRod) {
                return false;
            }
            if (routeData.hoennSuperRod && !Player.unlocked.hoennSuperRod) {
                return false;
            }
            if (routeData.sinnohOldRod && !Player.unlocked.sinnohOldRod) {
                return false;
            }
            if (routeData.sinnohGoodRod && !Player.unlocked.sinnohGoodRod) {
                return false;
            }
            if (routeData.sinnohSuperRod && !Player.unlocked.sinnohSuperRod) {
                return false;
            }
            if (routeData.unovaOldRod && !Player.unlocked.unovaOldRod) {
                return false;
            }
            if (routeData.unovaGoodRod && !Player.unlocked.unovaGoodRod) {
                return false;
            }
            if (routeData.unovaSuperRod && !Player.unlocked.unovaSuperRod) {
                return false;
            }
            if (routeData.kalosOldRod && !Player.unlocked.kalosOldRod) {
                return false;
            }
            if (routeData.kalosGoodRod && !Player.unlocked.kalosGoodRod) {
                return false;
            }
            if (routeData.kalosSuperRod && !Player.unlocked.kalosSuperRod) {
                return false;
            }
            if (routeData.alolaOldRod && !Player.unlocked.alolaOldRod) {
                return false;
            }
            if (routeData.alolaGoodRod && !Player.unlocked.alolaGoodRod) {
                return false;
            }
            if (routeData.alolaSuperRod && !Player.unlocked.alolaSuperRod) {
                return false;
            }
            if (routeData._unlock) {
                return this.meetsCriteria(routeData._unlock);
            }
            return true;
        },
        getBoostedRoamer: function (allowExpired = false) { // returns the current boosted roamer (including additional data) or a falsy value
            if (!this.currentBoostedRoamer) {
                return null;
            }
            if (this.currentBoostedRoamer.start + this.currentBoostedRoamer.length < Date.now() && !allowExpired) { // time ran out
                return null;
            }
            if (this.currentBoostedRoamer.expired && !allowExpired) { // boost expired, probably because the player encountered it
                return null;
            }
            return this.currentBoostedRoamer;
        },
        routeGetBoostedRoamer: function (region, route, returnNameOnly = true) {
            const roamer = this.getBoostedRoamer();
            if (roamer && roamer.region.toLowerCase() === region.toLowerCase() && roamer.route === route) {
                return returnNameOnly ? roamer.pokemon : roamer;
            }
            return null;
        },
        boostedRoamerExpired: function () {
            const roamer = this.getBoostedRoamer(true);
            if (roamer) {
                roamer.expired = true;
                dom.renderRouteList();
            }
        },
        generateBoostedRoamer: function () {
            const regions = [
                'Kanto',
            ];
            const allowedRoamers = [
                'Raikou',
                'Entei',
            ];
            const region = randomArrayElement(regions);
            const allowedRegionRoamers = ROUTES[region]._global.superRare.filter((pokemon) => allowedRoamers.indexOf(pokemon) > -1);
            if (!allowedRegionRoamers.length) {
                return false;
            }
            const roamer = randomArrayElement(allowedRegionRoamers);
            const routes = Object.keys(ROUTES[region]).filter((routeName) => routeName !== '_unlock' && routeName !== '_global' && !ROUTES[region][routeName].town);
            const route = randomArrayElement(routes);
            const boostedRoamer = {
                region: region,
                route: route,
                pokemon: roamer,
                level: 40,
                start: Date.now(),
                length: 5 * 60 * 1000,
                expired: false,
            };
            this.currentBoostedRoamer = boostedRoamer;
            return roamer;
        },
        checkBoostedRoamer: function () {
            const current = this.getBoostedRoamer(true);
            const delay = 10 * 60 * 1000;
            if (!current || current.start + delay < Date.now()) {
                this.generateBoostedRoamer();
                return true;
            }
            this.checkBoostedRoamerDisplay();
            return false;
        },
        checkBoostedRoamerDisplay: function () {
            if (this.lastDisplayedRoamer !== this.getBoostedRoamer()) {
                this.lastDisplayedRoamer = this.getBoostedRoamer();
                dom.renderRouteList();
            }
        },
        // Load and Save functions
        savePokes: function (force = false) {
        // Don't save more then every 60 seconds
            if (force || (lastSave + (1000 * 60) < Date.now())) {
                lastSave = Date.now();
                localStorage.setItem('totalPokes', appModel.$store.state.pokemon.party.length);
                appModel.$store.state.pokemon.party.forEach((poke, index) => {
                    localStorage.setItem(`poke${index}`, JSON.stringify(poke.save()));
                });
                localStorage.setItem('totalStorage', appModel.$store.state.pokemon.storage.length);
                appModel.$store.state.pokemon.storage.forEach((poke, index) => {
                    localStorage.setItem(`storage${index}`, JSON.stringify(poke.save()));
                });
                localStorage.setItem(
                    'pinnedStorage',
                    JSON.stringify([...appModel.$store.state.pokemon.pinnedStorage]),
                );
                localStorage.setItem('totalPokeFarm', appModel.$store.state.pokemon.pokeFarm.length);
                appModel.$store.state.pokemon.pokeFarm.forEach((poke, index) => {
                    localStorage.setItem(`pokeFarm${index}`, JSON.stringify(poke.save()));
                });
                localStorage.setItem('ballsAmount', JSON.stringify(this.ballsAmount));
                localStorage.setItem('battleItems', JSON.stringify(this.battleItems));
                localStorage.setItem('vitamins', JSON.stringify(this.vitamins));
                localStorage.setItem('pokedexData', JSON.stringify(this.getPokedexData()));
                localStorage.setItem('statistics', JSON.stringify(this.statistics));
                localStorage.setItem('statisticsRequirements', JSON.stringify(this.statisticsRequirements));
                localStorage.setItem('settings', JSON.stringify(this.settings));
                localStorage.setItem('badges', JSON.stringify(this.badges));
                localStorage.setItem('wins', JSON.stringify(this.wins));
                localStorage.setItem('events', JSON.stringify(this.events));
                localStorage.setItem('unlocked', JSON.stringify(this.unlocked));
                localStorage.setItem('megaStones', JSON.stringify(this.megaStones));
                localStorage.setItem('secretCodes', JSON.stringify(this.secretCodes));
                localStorage.setItem('evoStones', JSON.stringify(this.evoStones));
                localStorage.setItem('currencyAmount', JSON.stringify(this.currencyAmount));
                localStorage.setItem('defeatedWith', JSON.stringify(this.defeatedWith));
                localStorage.setItem('currentBoostedRoamer', JSON.stringify(this.currentBoostedRoamer));
            }
        },
        saveToString: function () {
            const saveData = JSON.stringify({
                pokes: appModel.$store.state.pokemon.party.map((poke) => poke.save()),
                storage: appModel.$store.state.pokemon.storage.map((poke) => poke.save()),
                pokeFarm: appModel.$store.state.pokemon.pokeFarm.map((poke) => poke.save()),
                pinnedStorage: [...appModel.$store.state.pokemon.pinnedStorage],
                pokedexData: this.getPokedexData(),
                statistics: this.statistics,
                statisticsRequirements: this.statisticsRequirements,
                settings: this.settings,
                ballsAmount: this.ballsAmount,
                badges: this.badges,
                wins: this.wins,
                events: this.events,
                unlocked: this.unlocked,
                megaStones: this.megaStones,
                secretCodes: this.secretCodes,
                evoStones: this.evoStones,
                defeatedWith: this.defeatedWith,
                currencyAmount: this.currencyAmount,
                battleItems: this.battleItems,
                vitamins: this.vitamins,
                currentBoostedRoamer: this.currentBoostedRoamer,
            });
            return btoa(`${this.checksum(saveData)}|${saveData}`);
        },
        loadPokes: function () {
        // reset pokemon array
            const party = [];
            let pokeCount = 0;
            // reset storage array
            const storage = [];
            const pokeFarm = [];
            Array(Number(localStorage.getItem('totalPokes'))).fill(0).forEach((el, index) => {
                const loadedPoke = JSON.parse(localStorage.getItem(`poke${index}`));
                if (loadedPoke) {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    if (pokeCount < 6) {
                        party.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                    } else {
                        storage.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                    }
                    pokeCount++;
                }
            });
            Array(Number(localStorage.getItem('totalStorage'))).fill(0).forEach((el, index) => {
                const loadedPoke = JSON.parse(localStorage.getItem(`storage${index}`));
                if (loadedPoke) {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    storage.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                }
            });
            Array(Number(localStorage.getItem('totalPokeFarm'))).fill(0).forEach((el, index) => {
                const loadedPoke = JSON.parse(localStorage.getItem(`pokeFarm${index}`));
                if (loadedPoke) {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    pokeFarm.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                }
            });
            const pinnedStorage = JSON.parse(localStorage.getItem('pinnedStorage'));
            appModel.$store.commit('pokemon/load', {
                party, storage, pinnedStorage, pokeFarm,
            });

            if (JSON.parse(localStorage.getItem('ballsAmount'))) {
                this.ballsAmount = JSON.parse(localStorage.getItem('ballsAmount'));
            }
            if (JSON.parse(localStorage.getItem('pokedexData'))) {
                appModel.$store.commit('pokedex/loadData', JSON.parse(localStorage.getItem('pokedexData')));
            }
            if (JSON.parse(localStorage.getItem('statistics'))) {
                const loadedStats = JSON.parse(localStorage.getItem('statistics'));
                this.statistics = { ...this.statistics, ...loadedStats };
            }
            if (JSON.parse(localStorage.getItem('statisticsRequirements'))) {
                this.statisticsRequirements = JSON.parse(localStorage.getItem('statisticsRequirements'));
            }
            if (JSON.parse(localStorage.getItem('settings'))) {
                this.settings = JSON.parse(localStorage.getItem('settings'));
            }
            if (JSON.parse(localStorage.getItem('badges'))) {
                this.badges = JSON.parse(localStorage.getItem('badges'));
            }
            if (JSON.parse(localStorage.getItem('wins'))) {
                this.wins = JSON.parse(localStorage.getItem('wins'));
            }
            if (JSON.parse(localStorage.getItem('events'))) {
                this.events = JSON.parse(localStorage.getItem('events'));
            }
            if (JSON.parse(localStorage.getItem('unlocked'))) {
                const loadedUnlocked = JSON.parse(localStorage.getItem('unlocked'));
                this.unlocked = { ...this.unlocked, ...loadedUnlocked };
            }
            if (JSON.parse(localStorage.getItem('currencyAmount'))) {
                this.currencyAmount = JSON.parse(localStorage.getItem('currencyAmount'));
            }
            if (JSON.parse(localStorage.getItem('defeatedWith'))) {
                this.defeatedWith = JSON.parse(localStorage.getItem('defeatedWith'));
            }
            if (JSON.parse(localStorage.getItem('megaStones'))) {
                this.megaStones = JSON.parse(localStorage.getItem('megaStones'));
            }
            if (JSON.parse(localStorage.getItem('evoStones'))) {
                this.evoStones = JSON.parse(localStorage.getItem('evoStones'));
            }
            if (JSON.parse(localStorage.getItem('battleItems'))) {
                this.battleItems = JSON.parse(localStorage.getItem('battleItems'));
            }
            if (JSON.parse(localStorage.getItem('vitamins'))) {
                this.vitamins = JSON.parse(localStorage.getItem('vitamins'));
            }
            if (JSON.parse(localStorage.getItem('currentBoostedRoamer'))) {
                this.currentBoostedRoamer = JSON.parse(localStorage.getItem('currentBoostedRoamer'));
            }
            if (JSON.parse(localStorage.getItem('secretCodes'))) {
                this.secretCodes = JSON.parse(localStorage.getItem('secretCodes'));
            }
        },
        loadFromString: function (_saveData) {
            let saveData = atob(_saveData);
            saveData = saveData.split('|');
            if (this.checksum(saveData[1]) === saveData[0]) {
                try {
                    saveData = JSON.parse(saveData[1]);
                } catch (err) {
                    alert('Failed to parse save data, loading canceled!');
                    localStorage.clear();
                    this.purgeData = true;
                    window.location.reload(true);
                    return;
                }
                const party = [];
                let pokeCount = 0;
                const storage = [];
                const pokeFarm = [];
                saveData.pokes.forEach((loadedPoke) => {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    if (pokeCount < 6) {
                        party.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                    } else {
                        storage.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                    }
                    pokeCount++;
                });
                saveData.storage.forEach((loadedPoke) => {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    storage.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                });
                saveData.pokeFarm.forEach((loadedPoke) => {
                    const pokeName = loadedPoke[0];
                    const exp = loadedPoke[1];
                    const shiny = (loadedPoke[2] === true);
                    const caughtAt = loadedPoke[3];
                    const prestigeLevel = loadedPoke[4] || 0;
                    const appliedVitamins = loadedPoke[5];
                    pokeFarm.push(new Poke(pokeByName(pokeName), false, Number(exp), shiny, caughtAt, prestigeLevel, appliedVitamins));
                });

                const pinnedStorage = saveData.pinnedStorage;
                appModel.$store.commit('pokemon/load', {
                    party, storage, pinnedStorage, pokeFarm,
                });

                this.ballsAmount = saveData.ballsAmount; // import from old spelling mistake
                this.currencyAmount = saveData.currencyAmount;
                this.battleItems = saveData.battleItems;
                this.defeatedWith = saveData.defeatedWith;
                this.vitamins = saveData.vitamins;
                appModel.$store.commit('pokedex/loadData', saveData.pokedexData ? saveData.pokedexData : []);
                const loadedStats = saveData.statistics ? saveData.statistics : {};
                this.statistics = { ...this.statistics, ...loadedStats };
                if (saveData.settings) {
                    this.settings = saveData.settings;
                }
                this.statisticsRequirements = saveData.statisticsRequirements;
                this.badges = saveData.badges ? saveData.badges : {};
                this.wins = saveData.wins ? saveData.wins : {};
                this.currentBoostedRoamer = saveData.currentBoostedRoamer;
                this.events = saveData.events ? saveData.events : {};
                const loadedUnlocked = saveData.unlocked ? saveData.unlocked : [];
                this.unlocked = { ...this.unlocked, ...loadedUnlocked };
            } else {
                alert('Invalid save data, loading canceled!');
            }
        },

        attachDOM: (_dom) => {
            dom = _dom;
        },
    };

    return Player;
};
