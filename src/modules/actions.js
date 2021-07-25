import display, { renderView } from './display';
import ROUTES from './routes';
// eslint-disable-next-line object-curly-newline
import { $, camelCaseToString, isEmpty, pokeById, pokeByIndex, pokeByName } from './utilities';
import ACHIEVEMENTS from './achievements';
import { POKEDEXFLAGS, VITAMINS, kantoTrainers } from './data';
import { openModal, closeModal } from './modalEvents';
import Poke from './poke';
import POKEDEX from './db';
import notify from './notify';
import pokedex from '../store/modules/pokedex';
import Combat from './combat';

export default (player, combatLoop, enemy, town, story, appModel) => {
    let dom;

    const UserActions = {

        changeRoute: function (newRouteId, force = false) {
            if (!force && player.alivePokeIndexes().length == 0) {
                notify('It is too dangerous to travel without a POKEMON.');
                return false;
            }
            if (combatLoop.prof || combatLoop.prof1 || combatLoop.prof2 || combatLoop.prof3) {
                notify('You cannot run away from a PROFESSOR battle.');
                return false;
            }
            if (combatLoop.gymLeader || combatLoop.gymLeader1 || combatLoop.gymLeader2 || combatLoop.gymLeader3) {
                notify('You cannot run away from a GYM LEADER battle.');
                return false;
            }
            if (!player.routeUnlocked(player.settings.currentRegionId, newRouteId)) {
                notify('You cannot go there yet.');
                return false;
            }
            player.settings.currentRouteId = newRouteId;
            if (ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].town) {
                combatLoop.pause();
            } else {
                combatLoop.unpause();
            }
            renderView(dom, enemy, player);
            player.savePokes();
            dom.renderRouteList();

            return true;
        },
        changePokemon: function (newActiveIndex) {
            player.setActive(newActiveIndex);
            renderView(dom, enemy, player);
        },
        goToKanto: function () {
            if (player.regionUnlocked('Kanto')) {
                player.settings.currentRegionId = 'Kanto';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToJohto: function () {
            if (player.regionUnlocked('Johto')) {
                player.settings.currentRegionId = 'Johto';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToHoenn: function () {
            if (player.regionUnlocked('Hoenn')) {
                player.settings.currentRegionId = 'Hoenn';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToSinnoh: function () {
            if (player.regionUnlocked('Sinnoh')) {
                player.settings.currentRegionId = 'Sinnoh';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToUnova: function () {
            if (player.regionUnlocked('Unova')) {
                player.settings.currentRegionId = 'Unova';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToKalos: function () {
            if (player.regionUnlocked('Kalos')) {
                player.settings.currentRegionId = 'Kalos';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToAlola: function () {
            if (player.regionUnlocked('Alola')) {
                player.settings.currentRegionId = 'Alola';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToGalar: function () {
            if (player.regionUnlocked('Galar')) {
                player.settings.currentRegionId = 'Galar';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToFandom: function () {
            if (player.regionUnlocked('Fandom')) {
                player.settings.currentRegionId = 'Fandom';
                if (Object.keys(ROUTES[player.settings.currentRegionId])[0].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[0]);
                } else if (Object.keys(ROUTES[player.settings.currentRegionId])[1].charAt(0) !== '_') {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[1]);
                } else {
                    this.changeRoute(Object.keys(ROUTES[player.settings.currentRegionId])[2]);
                }
            } else {
                notify('You have not unlocked this region yet');
            }
        },
        goToNone: function () {
            notify('This region is not implemented yet');
        },
        justTestStuff: function () {
            alert('Nothing is here yet.');
        },
        enablePokeListAutoSort: function () {
            player.settings.autoSort = $('#autoSort').checked;
            // hide or show sort dropdowns
            dom.renderPokeSort();
        },
        changeCatchOption: function (newCatchOption) {
            combatLoop.changeCatch(newCatchOption);
        },
        changeListView: function (view) {
            player.settings.listView = view;
        },
        clearGameData: function () {
            if (dom.checkConfirmed('#confirmClearData')) {
                localStorage.clear();
                player.purgeData = true;
                window.location.reload(true);
            }
        },
        changeSelectedBall: function (newBall) {
            player.changeSelectedBall(newBall);
        },
        pokemonToFirst: function (pokemonIndex, from = 'roster') {
            appModel.$store.commit('pokemon/moveToFirst', { pokemonIndex, from });
            player.savePokes();
        },
        pokemonToDown: function (pokemonIndex, from = 'roster') {
            appModel.$store.commit('pokemon/moveDown', { pokemonIndex, from });
            player.savePokes();
        },
        pokemonToUp: function (pokemonIndex, from = 'roster') {
            appModel.$store.commit('pokemon/moveUp', { pokemonIndex, from });
            player.savePokes();
        },
        evolvePokemon: function (pokemonIndex) {
            player.getPokemon()[pokemonIndex].tryEvolve(player.getPokemon()[pokemonIndex].shiny(), player);
            renderView(dom, enemy, player);
        },
        prestigePokemon: function (pokemonIndex) {
            player.getPokemon()[pokemonIndex].tryPrestige(player.getPokemon()[pokemonIndex].shiny());
            renderView(dom, enemy, player);
        },
        moveToStorage: function (pokemonIndex) {
            appModel.$store.commit('pokemon/deposit', pokemonIndex);
        },
        moveToRoster: function (pokemonIndex) {
            appModel.$store.commit('pokemon/withdraw', pokemonIndex);
        },
        moveToPokeFarm: function (pokemonIndex) {
            if (!appModel.$store.state.pokemon.pokeFarm[1]) {
                appModel.$store.commit('pokemon/depositPokeFarm', pokemonIndex);
            } else { alert('You can only send two Pokemon to the PokeRanch right now.'); }
        },
        withdrawFromPokeFarm: function (pokemonIndex) {
            appModel.$store.commit('pokemon/withdrawPokeFarm', pokemonIndex);
        },
        renderPokeRanchContainer: function () {
            const poke1Box = $('#pokemon1Box').querySelector('.pokeBox');
            const poke1Placement = appModel.$store.state.pokemon.pokeFarm[0];
            const poke2Placement = appModel.$store.state.pokemon.pokeFarm[1];
            const poke2Box = $('#pokemon2Box').querySelector('.pokeBox');
            const pokeStatusAsText1 = (poke1Placement) => {
                let output = '';
                output += `Happiness: ${poke1Placement.happiness()}<br>`;
                output += `\nAttack: ${poke1Placement.avgAttack()}<br>`;
                output += `\nDefense: ${poke1Placement.avgDefense()}<br>`;
                return output;
            };
            const pokeStatusAsText2 = (poke2Placement) => {
                let output = '';
                output += `Happiness: ${poke2Placement.happiness()}<br>`;
                output += `\nAttack: ${poke2Placement.avgAttack()}<br>`;
                output += `\nDefense: ${poke2Placement.avgDefense()}<br>`;
                return output;
            };
            const pokemon1Stats = {
                name: poke1Box.querySelector('.name'),
                img: poke1Box.querySelector('.img'),
                hp: poke1Box.querySelector('.hp'),
                hpBar: poke1Box.querySelector('.hpBar'),
                expBar: poke1Box.querySelector('.expBar'),
                status: poke1Box.querySelector('.status'),
            };
            const pokemon2Stats = {
                name: poke2Box.querySelector('.name'),
                img: poke2Box.querySelector('.img'),
                hp: poke2Box.querySelector('.hp'),
                hpBar: poke2Box.querySelector('.hpBar'),
                expBar: poke2Box.querySelector('.expBar'),
                status: poke2Box.querySelector('.status'),
            };
            if (appModel.$store.state.pokemon.pokeFarm[0]) {
                dom.setValue(pokemon1Stats.name, `${poke1Placement.pokeName()} (L${poke1Placement.level()}, P${poke1Placement.prestigeLevel})`);
                dom.setProp(pokemon1Stats.img, 'src', `assets/sprites/normal/front/${poke1Placement.pokeName()}.png`);
                dom.setValue(pokemon1Stats.hp, poke1Placement.lifeAsText());
                dom.setProp(pokemon1Stats.hpBar, 'value', poke1Placement.getHp());
                dom.setProp(pokemon1Stats.hpBar, 'max', poke1Placement.maxHp());
                dom.setProp(pokemon1Stats.expBar, 'value', Math.floor(poke1Placement.currentExp() - poke1Placement.thisLevelExp()));
                dom.setProp(pokemon1Stats.expBar, 'max', poke1Placement.nextLevelExp() - poke1Placement.thisLevelExp());
                dom.setValue(pokemon1Stats.status, pokeStatusAsText1(poke1Placement));
                if (appModel.$store.state.pokemon.pokeFarm[1]) {
                    dom.setValue(pokemon2Stats.name, `${poke2Placement.pokeName()} (L${poke2Placement.level()}, P${poke2Placement.prestigeLevel})`);
                    dom.setProp(pokemon2Stats.img, 'src', `assets/sprites/normal/front/${poke2Placement.pokeName()}.png`);
                    dom.setValue(pokemon2Stats.hp, poke2Placement.lifeAsText());
                    dom.setProp(pokemon2Stats.hpBar, 'value', poke2Placement.getHp());
                    dom.setProp(pokemon2Stats.hpBar, 'max', poke2Placement.maxHp());
                    dom.setProp(pokemon2Stats.expBar, 'value', Math.floor(poke2Placement.currentExp() - poke2Placement.thisLevelExp()));
                    dom.setProp(pokemon2Stats.expBar, 'max', poke2Placement.nextLevelExp() - poke2Placement.thisLevelExp());
                    dom.setValue(pokemon2Stats.status, pokeStatusAsText2(poke2Placement));
                }
            }
        },
        openPokeDex: function () {
            openModal($('#pokedexModal'));
        },
        forceSave: function () {
            player.savePokes();
            $('#forceSave').style.display = 'inline';
            setTimeout(() => { $('#forceSave').style.display = 'none'; }, 5000);
        },
        exportSaveDialog: function () {
            $('#savetextDialog .modal-card-title').innerHTML = 'Export your save';
            if (document.queryCommandSupported('copy')) {
                document.getElementById('copySaveText').style.display = 'initial';
            }
            document.getElementById('saveText').value = player.saveToString();
            document.getElementById('loadButtonContainer').style.display = 'none';
            openModal(document.getElementById('savetextModal'));
            closeModal($('#settingsModal'));
        },
        importSaveDialog: function () {
            $('#savetextDialog .modal-card-title').innerHTML = 'Import a save';
            document.getElementById('copySaveText').style.display = 'none';
            document.getElementById('saveText').value = '';
            document.getElementById('loadButtonContainer').style.display = 'block';
            openModal(document.getElementById('savetextModal'));
            closeModal($('#settingsModal'));
        },
        importSave: async function () {
            if (window.confirm('Loading a save will overwrite your current progress, are you sure you wish to continue?')) {
                await appModel.$store.dispatch('setLoading', true);
                player.loadFromString(document.getElementById('saveText').value.trim());
                await appModel.$store.dispatch('setLoading', false);
                closeModal(document.getElementById('savetextModal'));
                // reload everything
                renderView(dom, enemy, player);
                dom.renderPokeSort();
                dom.renderBalls();
                dom.renderPokeCoins();
            }
        },
        copySaveText: function () {
            document.getElementById('saveText').select();
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
        },
        openMenu: function () {
            document.getElementById('menu').style.right = '0px';
            document.getElementById('openMenu').style.display = 'none';
            document.getElementById('closeMenu').style.display = 'block';
        },
        closeMenu: function () {
            document.getElementById('menu').style.right = '-250px';
            document.getElementById('closeMenu').style.display = 'none';
            document.getElementById('openMenu').style.display = 'block';
        },
        changeSpriteChoice: function () {
            if (document.getElementById('spriteChoiceFront').checked) {
                player.settings.spriteChoice = 'front';
            } else {
                player.settings.spriteChoice = 'back';
            }
            player.savePokes();
            renderView(dom, enemy, player);
        },
        viewStatistics: function () {
            const statisticStrings = {
                'fireBeaten': 'Fire POKEMON Beaten',
                'waterBeaten': 'Water POKEMON Beaten',
                'grassBeaten': 'Grass POKEMON Beaten',
                'electricBeaten': 'Electric POKEMON Beaten',
                'normalBeaten': 'Normal POKEMON Beaten',
                'iceBeaten': 'Ice POKEMON Beaten',
                'fightingBeaten': 'Fighting POKEMON Beaten',
                'poisonBeaten': 'Poison POKEMON Beaten',
                'groundBeaten': 'Ground POKEMON Beaten',
                'flyingBeaten': 'Flying POKEMON Beaten',
                'psychicBeaten': 'Psychic POKEMON Beaten',
                'bugBeaten': 'Bug POKEMON Beaten',
                'rockBeaten': 'Rock POKEMON Beaten',
                'ghostBeaten': 'Ghost POKEMON Beaten',
                'darkBeaten': 'Dark POKEMON Beaten',
                'dragonBeaten': 'Dragon POKEMON Beaten',
                'steelBeaten': 'Steel POKEMON Beaten',
                'fairyBeaten': 'Fairy POKEMON Beaten',
                'fireCaught': 'Fire POKEMON Caught',
                'waterCaught': 'Water POKEMON Caught',
                'grassCaught': 'Grass POKEMON Caught',
                'electricCaught': 'Electric POKEMON Caught',
                'normalCaught': 'Normal POKEMON Caught',
                'iceCaught': 'Ice POKEMON Caught',
                'fightingCaught': 'Fighting POKEMON Caught',
                'poisonCaught': 'Poison POKEMON Caught',
                'groundCaught': 'Ground POKEMON Caught',
                'flyingCaught': 'Flying POKEMON Caught',
                'psychicCaught': 'Psychic POKEMON Caught',
                'bugCaught': 'Bug POKEMON Caught',
                'rockCaught': 'Rock POKEMON Caught',
                'ghostCaught': 'Ghost POKEMON Caught',
                'darkCaught': 'Dark POKEMON Caught',
                'dragonCaught': 'Dragon POKEMON Caught',
                'steelCaught': 'Steel POKEMON Caught',
                'fairyCaught': 'Fairy POKEMON Caught',
                'seen': 'Pokemon Seen',
                'caught': 'Pokemon Caught',
                'released': 'Pokemon Released',
                'sold': 'Pokemon Sold',
                'beaten': 'Pokemon Beaten',
                'shinySeen': 'Shiny Pokemon Seen',
                'shinyCaught': 'Shiny Pokemon Caught',
                'shinyReleased': 'Shiny Pokemon Released',
                'shinyBeaten': 'Shiny Pokemon Beaten',
                'totalDamage': 'Total Damage Dealt',
                'totalThrows': 'Total Catch Attempts',
                'successfulThrows': 'Successfully Caught',
                'pokeballThrows': 'Pokeball Throws',
                'pokeballSuccessfulThrows': 'Caught with Pokeball',
                'greatballThrows': 'Greatball Throws',
                'greatballSuccessfulThrows': 'Caught with Greatball',
                'ultraballThrows': 'Ultraball Throws',
                'ultraballSuccessfulThrows': 'Caught with Ultraball',
                'masterballThrows': 'Masterball Throws',
                'masterballSuccessfulThrows': 'Caught with Masterball',
                'totalPokeCoins': 'Total PokeCoins Obtained',
                'totalCatchCoins': 'Total CatchCoins Obtained',
                'totalBattleCoins': 'Total BattleCoins Obtained',
                'totalExp': 'Total Experience Earned',
            };
            let statList = '';
            for (const statValue in player.statistics) {
                statList += `<li>${statisticStrings[statValue]}: ${player.statistics[statValue]}</li>`;
            }
            document.getElementById('statisticsList').innerHTML = statList;
            openModal(document.getElementById('statisticsModal'));
        },
        viewInventory: function () {
            let inventoryHTML = '';
            const vitamins = Object.keys(VITAMINS);
            for (let i = 0; i < vitamins.length; i++) {
                const vitamin = vitamins[i];
                const vitaminName = VITAMINS[vitamin].display;
                const count = player.vitamins[vitamin];
                const image = `assets/images/vitamins/${vitamin}.png`;
                inventoryHTML += `<li class="vitaminItem"><div class="inventoryVitaminAlignmentHelper"></div><img src="${image}"></img><span class="itemName">${vitaminName}</span><button class="button" onclick="userInteractions.openVitaminModal('${vitamin}')">Use (${count} available)</button></li>`;
            }
            document.getElementById('inventoryList').innerHTML = inventoryHTML;
            openModal(document.getElementById('inventoryModal'));
        },
        renderBeatenAchievement: function () {
            const beatenReq = player.statisticsRequirements.beaten;
            const beaten1Req = player.statisticsRequirements.beaten1;
            if (player.statistics.beaten > beatenReq) { return beaten1Req; } else { return beatenReq; }
        },
        renderCaughtAchievement: function () {
            const caughtReq = player.statisticsRequirements.caught;
            const caught1Req = player.statisticsRequirements.caught1;
            if (player.statistics.caught > caughtReq) { return caught1Req; } else { return caughtReq; }
        },
        renderOwnedAchievement: function () {
            const ownedReq = player.statisticsRequirements.owned;
            const owned1Req = player.statisticsRequirements.owned1;
            if (player.countPokedex(5) + player.countPokedex(7) > ownedReq) { return owned1Req; } else { return ownedReq; }
        },
        renderPokemonDefeated: function () {
            const pokemonDefeatedElement = $('#pokemonDefeated');
            pokemonDefeatedElement.innerHTML = `${player.statistics.beaten}/${this.renderBeatenAchievement()}`;
        },
        renderPokemonCaught: function () {
            const pokemonCaughtElement = $('#pokemonCaught');
            pokemonCaughtElement.innerHTML = `${player.statistics.caught}/${this.renderCaughtAchievement()}`;
        },
        renderPokemonOwned: function () {
            const pokemonOwnedElement = $('#pokemonOwned');
            pokemonOwnedElement.innerHTML = `${player.countPokedex(5) + player.countPokedex(7)}/${this.renderOwnedAchievement()}`;
        },
        checkPokemonDefeated: function () {
            if (player.statistics.beaten > 49 && !player.events.beaten) {
                player.ballsAmount.masterball += 50;
                dom.renderBalls();
                alert('You defeated 50 POKEMON and earned 50 MASTERBALLS');
                player.events.beaten = true;
            }
            if (player.events.beaten && player.statistics.beaten > 99 && !player.events.beaten1) {
                player.ballsAmount.masterball += 100;
                dom.renderBalls();
                alert('You defeated 100 POKEMON and earned 100 MASTERBALLS');
                player.events.beaten1 = true;
            } else { alert('Defeat more Pokemon and try again'); }
        },
        checkPokemonCaught: function () {
            if (player.statistics.caught > 49 && !player.events.caught) {
                player.ballsAmount.masterball += 99;
                dom.renderBalls();
                alert('You caught 100 POKEMON and earned 50 MASTERBALLS');
                player.events.caught = true;
            }
            if (player.events.caught && player.statistics.caught > 999 && !player.events.caught1) {
                player.ballsAmount.masterball += 100;
                dom.renderBalls();
                alert('You caught 1000 POKEMON and earned 100 MASTERBALLS');
                player.events.caught1 = true;
            } else { alert('catch more Pokemon and try again'); }
        },
        checkPokemonOwned: function () {
            if (player.countPokedex(5) + player.countPokedex(7) > 100 && !player.events.owned) {
                player.ballsAmount.masterball += 99;
                dom.renderBalls();
                alert('You caught 100 POKEMON and earned 50 MASTERBALLS');
                player.events.owned = true;
            }
            if (player.events.owned && player.countPokedex(5) + player.countPokedex(7) > 150 && !player.events.owned1) {
                player.ballsAmount.masterball += 100;
                dom.renderBalls();
                alert('You caught 1000 POKEMON and earned 100 MASTERBALLS');
                player.events.owned1 = true;
            } else { alert('catch more varied Pokemon and try again'); }
        },
        viewAchievements: function () {
            this.renderPokemonDefeated();
            this.renderPokemonCaught();
            this.renderPokemonOwned();
            openModal(document.getElementById('achievementsModal'));
        },
        enterCode: function () {
            // eslint-disable-next-line prefer-const
            let secretCode = prompt('Please enter your secret code', 'Secret Code');
            const rando = Math.round(Math.random() * 898);
            if (secretCode === 'Charmander' && !player.secretCodes.charmander) {
                player.addPoke(new Poke(pokeByName('Charmander'), 50));
                player.secretCodes.charmander = true;
            } else if (secretCode === 'skipToTheEnd') {
                player.badges['Earth Badge'] = true;
                player.badges['Rising Badge'] = true;
            } else if (secretCode === 'ColdOre' && !player.secretCodes.coldOre) {
                player.addPoke(new Poke(pokeByName('Roggenrola'), 10));
                player.secretCodes.coldOre = true;
            } else if (secretCode === 'randoooo' && player.secretCodes.rando != true) {
                player.addPoke(new Poke(pokeByIndex(rando), 5));
                player.secretCodes.rando = true;
            } else if (secretCode === 'SHINYOMG' && player.secretCodes.shiny != true) {
                player.addPoke(new Poke(pokeByIndex(rando), 5, null, true));
                player.secretCodes.shiny = true;
            } else if (secretCode === 'gardevoir' && !player.secretCodes.gardevoir) {
                player.addPoke(new Poke(pokeByName('Ralts'), 12));
                player.secretCodes.gardevoir = true;
            } else if (secretCode === 'Apple' && !player.secretCodes.apple) {
                player.addPoke(new Poke(pokeByName('Rayquaza'), 1));
                player.secretCodes.apple = true;
            } else if (secretCode === 'Krush' && !player.secretCodes.krush) {
                player.addPoke(new Poke(pokeByName('Garchomp'), 55));
                player.secretCodes.krush = true;
            } else if (secretCode === 'Bulbasaur' && !player.secretCodes.bulbasaur) {
                player.addPoke(new Poke(pokeByName('Bulbasaur'), 5));
                player.secretCodes.bulbasaur = true;
            } else if (secretCode === 'MaimahsPo' && !player.secretCodes.bulbasaur) {
                player.addPoke(new Poke(pokeByName('Pancham'), 5));
                player.secretCodes.maimahspo = true;
            } else {
                alert('Code Invalid or Already Claimed');
            }
        },
        viewBadgeCase: function () {
            if (!isEmpty(player.badges)) {
                if (player.badges['Boulder Badge'] === true) {
                    document.getElementById('boulderBadge').style.visibility = 'visible';
                }
                if (player.badges['Cascade Badge'] === true) {
                    document.getElementById('cascadeBadge').style.visibility = 'visible';
                }
                if (player.badges['Thunder Badge'] === true) {
                    document.getElementById('thunderBadge').style.visibility = 'visible';
                }
                if (player.badges['Rainbow Badge'] === true) {
                    document.getElementById('rainbowBadge').style.visibility = 'visible';
                }
                if (player.badges['Soul Badge'] === true) {
                    document.getElementById('soulBadge').style.visibility = 'visible';
                }
                if (player.badges['Marsh Badge'] === true) {
                    document.getElementById('marshBadge').style.visibility = 'visible';
                }
                if (player.badges['Volcano Badge'] === true) {
                    document.getElementById('volcanoBadge').style.visibility = 'visible';
                }
                if (player.badges['Earth Badge'] === true) {
                    document.getElementById('earthBadge').style.visibility = 'visible';
                }
                if (player.badges['Zephyr Badge'] === true) {
                    document.getElementById('zephyrBadge').style.visibility = 'visible';
                }
                if (player.badges['Hive Badge'] === true) {
                    document.getElementById('hiveBadge').style.visibility = 'visible';
                }
                if (player.badges['Plain Badge'] === true) {
                    document.getElementById('plainBadge').style.visibility = 'visible';
                }
                if (player.badges['Fog Badge'] === true) {
                    document.getElementById('fogBadge').style.visibility = 'visible';
                }
                if (player.badges['Storm Badge'] === true) {
                    document.getElementById('stormBadge').style.visibility = 'visible';
                }
                if (player.badges['Mineral Badge'] === true) {
                    document.getElementById('mineralBadge').style.visibility = 'visible';
                }
                if (player.badges['Glacier Badge'] === true) {
                    document.getElementById('glacierBadge').style.visibility = 'visible';
                }
                if (player.badges['Rising Badge'] === true) {
                    document.getElementById('risingBadge').style.visibility = 'visible';
                }
                openModal(document.getElementById('badgecaseModal'));
                closeModal(document.getElementById('bagModal'));
            } else {
                notify('You have no Badges');
            }
        },
        renderBoulderBadge: function () {
            openModal(document.getElementById('brockModal'));
        },
        viewSettings: function () {
            openModal(document.getElementById('settingsModal'));
            closeModal(document.getElementById('bagModal'));
        },
        viewPokeDex: function () {
            openModal(document.getElementById('pokedexModal'));
        },
        viewEvoStones: function () {
            if (!isEmpty(player.evoStones)) {
                let evoStonesHTML = '';
                for (const evoStones in player.evoStones) {
                    evoStonesHTML += `${'<img src="assets/images/evoStones/'}${[evoStones]}.png"></img>`;
                }
                document.getElementById('evoStoneList').innerHTML = evoStonesHTML;
                openModal(document.getElementById('evoStonesModal'));
                closeModal(document.getElementById('bagModal'));
            } else {
                notify('You have no Evolution Stones');
            }
        },
        viewKeyItems: function () {
            if (!isEmpty(player.unlocked)) {
                let keyItemsHTML = '';
                for (const keyItems in player.unlocked) {
                    keyItemsHTML += `${'<img src="assets/images/keyItems/'}${[keyItems]}.png"></img>`;
                }
                document.getElementById('keyItemsList').innerHTML = keyItemsHTML;
                openModal(document.getElementById('keyItemsModal'));
                closeModal(document.getElementById('bagModal'));
            } else {
                notify('You have no Key Items');
            }
        },
        viewBag: function () {
            openModal(document.getElementById('bagModal'));
        },
        viewMap: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.modal) {
                openModal(document.getElementById(`${routeData.modal.replace(/ /g, '').toLowerCase()}Modal`));
            } else {
                openModal(document.getElementById(`${player.settings.currentRouteId.replace(/ /g, '').toLowerCase()}Modal`));
            }
        },
        viewRanch: function () {
            const routeData = player.settings.currentRegionId;
            if (routeData === 'Kanto') {
                if (appModel.$store.state.pokemon.pokeFarm[0]) {
                    openModal(document.getElementById('kantopokeranchModal'));
                    this.renderPokeRanchContainer();
                } else { alert('Send some Pokemon to the PokeRanch first.'); }
            } else {
                alert('Try Again.');
            }
        },
        viewTown: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            if (routeData === 'Pallet Town' && !player.events.oakParcelReceived) {
                openModal(document.getElementById('pallettownModal'));
            } else if (routeData === 'Pallet Town') {
                openModal(document.getElementById('pallettownnooakModal'));
            } else if (routeData === 'Viridian City') {
                openModal(document.getElementById('viridiancityModal'));
            } else if (routeData === 'Pewter City') {
                openModal(document.getElementById('pewtercityModal'));
            } else if (routeData === 'Cerulean City') {
                openModal(document.getElementById('ceruleancityModal'));
            } else if (routeData === 'Seaside Cottage') {
                openModal(document.getElementById('seasidecottageModal'));
            } else if (routeData === 'Vermilion City') {
                openModal(document.getElementById('vermilioncityModal'));
            } else if (routeData === 'Lavender Town') {
                openModal(document.getElementById('lavendertownModal'));
            } else if (routeData === 'Celadon City') {
                openModal(document.getElementById('celadoncityModal'));
            } else if (routeData === 'Saffron City') {
                openModal(document.getElementById('saffroncityModal'));
            } else if (routeData === 'Fuchsia City') {
                openModal(document.getElementById('fuchsiacityModal'));
            } else if (routeData === 'Cinnabar Island') {
                openModal(document.getElementById('cinnabarislandModal'));
            } else { alert('Not implemented yet'); }
        },
        renderTown: function () {
            const pokeMart = $('#pokeMartButton');
            const npc = $('#npcButton');
            const prof = $('#profButton');
            const story = $('#storyButton');
            const route = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            pokeMart.style.display = (route.pokeMart) ? '' : 'none';
            pokeMart.innerHTML = (route.pokeMart) ? 'PokeMart' : '';
            npc.style.display = (route.npc) ? '' : 'none';
            npc.innerHTML = (route.npc) ? route.npc.name : '';
            story.style.display = (route.story) ? '' : 'none';
            story.innerHTML = (route.story) ? route.story.name : '';
            prof.style.display = (route.prof) ? '' : 'none';
            prof.innerHTML = (route.prof) ? route.prof.name : '';
        },
        viewShop: function () {
            // closeModal(document.getElementById('townModal'));
            const region = player.settings.currentRegionId.toLowerCase();
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            town.renderPokeCoinShop(region);
            town.renderBattleCoinShop(region);
            town.renderCatchCoinShop(region);
            closeModal(document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokemartModal`));
            openModal(document.getElementById('shopModal'));
        },
        renderGym: function () {
            const gymTrainer1 = $('#gymTrainer1');
            const gymTrainer2 = $('#gymTrainer2');
            const gymTrainer3 = $('#gymTrainer3');
            const gymLeader = $('#gymLeader');
            const fanBoy = $('#fanBoy');
            const route = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            gymTrainer1.style.display = (route.gym.gymTrainer1) ? '' : 'none';
            gymTrainer1.innerHTML = (route.gym.gymTrainer1) ? route.gym.gymTrainer1.name : '';
            gymTrainer2.style.display = (route.gym.gymTrainer2) ? '' : 'none';
            gymTrainer2.innerHTML = (route.gym.gymTrainer2) ? route.gym.gymTrainer2.name : '';
            gymTrainer3.style.display = (route.gym.gymTrainer3) ? '' : 'none';
            gymTrainer3.innerHTML = (route.gym.gymTrainer3) ? route.gym.gymTrainer3.name : '';
            gymLeader.style.display = (route.gym.gymLeader) ? '' : 'none';
            gymLeader.innerHTML = (route.gym.gymLeader) ? route.gym.gymLeader.name : '';
            fanBoy.style.display = (route.gym.fanBoy) ? '' : 'none';
            fanBoy.innerHTML = (route.gym.fanBoy) ? route.gym.fanBoy.name : '';
        },
        viewGym: function () {
            this.renderGym();
            openModal(document.getElementById('gymModal'));
        },
        openVitaminModal: function (vitamin) {
            if (!VITAMINS[vitamin]) {
                return notify(`Invalid vitamin '${vitamin}'`);
            }
            const data = VITAMINS[vitamin];
            const name = data.display;
            const count = player.vitamins[vitamin];
            if (!count) {
                return notify('You don\'t have any of these.');
            }
            const vitaminModal = document.getElementById('vitaminModal');
            vitaminModal.setAttribute('data-vitamin', vitamin);
            this.updateVitaminModal();
            openModal(vitaminModal);
        },
        updateVitaminModal: function () {
            const vitaminModal = document.getElementById('vitaminModal');
            const vitamin = vitaminModal.getAttribute('data-vitamin');
            const data = VITAMINS[vitamin];
            const count = player.vitamins[vitamin];
            document.getElementById('vitaminName').innerText = data.display;
            document.getElementById('vitaminCount').innerText = count;
            let vitaminPokemonHTML = '';
            const list = player.getPokemon();
            for (let i = 0; i < list.length; i++) {
                const poke = list[i];
                vitaminPokemonHTML += `<li class="vitaminModalPokemon"><img src="${poke.image().party}"> <button class="button" onclick="userInteractions.useVitamin('${vitamin}', ${i})">${poke.getAppliedVitamins(data.stat)}/${poke.getMaxVitamins(data.stat)}</button></li>`;
            }
            document.getElementById('vitaminPokemon').innerHTML = vitaminPokemonHTML;
        },
        useVitamin: function (vitamin, pokemonIndex) {
            const vitaminData = VITAMINS[vitamin];
            const count = player.vitamins[vitamin];
            const poke = player.pokemons[pokemonIndex];
            if (count <= 0 || !vitaminData || !poke) {
                return;
            }
            if (poke.tryUsingVitamin(vitaminData.stat)) {
                player.vitamins[vitamin]--;
                this.updateVitaminModal();
            }
        },
        playerComputer: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            closeModal(document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokecenterModal`));
            openModal(document.getElementById('playercomputerModal'));
        },
        closePlayerComputer: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            openModal(document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokecenterModal`));
            closeModal(document.getElementById('playercomputerModal'));
        },
        checkGymLeaderBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (!player.wins[routeData.gymLeader.win]) {
                this.gymLeaderBattle();
            }
            if (player.wins[routeData.gymLeader.win] && !player.wins[routeData.gymLeader1.win]) {
                this.gymLeader1Battle();
            }
            if (player.wins[routeData.gymLeader.win] && player.wins[routeData.gymLeader1.win] && !player.wins[routeData.gymLeader2.win]) {
                this.gymLeader2Battle();
            }
            if (player.wins[routeData.gymLeader.win] && player.wins[routeData.gymLeader1.win] && player.wins[routeData.gymLeader2.win] && !player.wins[routeData.gymLeader3.win]) {
                this.gymLeader3Battle();
            }
            if (player.wins[routeData.gymLeader.win] && player.wins[routeData.gymLeader1.win] && player.wins[routeData.gymLeader2.win] && player.wins[routeData.gymLeader3.win]) {
                this.gymLeader3ABattle();
            }
        },
        checkNPCBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.npc.name === 'Nugget 5') {
                this.npcBattle();
            }
        },
        checkNPC: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].npc.name;
            if (routeData === 'Bill') {
                this.billEvent();
            }
            if (routeData === 'Steven\'s Home') {
                this.beldumEvent();
            }
            if (routeData === 'Shrine\'s Old Man') {
                this.abundantOldManEvent();
            }
            if (this.Freebie) {
                alert('GoodJob!');
            }
        },
        checkProf: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.prof.name === 'Prof. Oak\'s Lab') {
                this.oakLab();
            }
        },
        checkStory: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.story.name === 'Burgled House') {
                alert('Not implemented yet');
            }
        },
        viridianPokeMartEvent: function () {
            if (!player.events.oakParcelReceived) {
                alert('Hey! Did you come from Pallet Town? AWESOME!!! Can you give this to Prof. Oak for me?');
                player.events.oakParcelReceived = true;
            } else if (player.events.oakParcelReceived === true && !player.events.oakParcelGiven) {
                alert('Can you deliver that to Prof. Oak please? Come see me when you are done.');
            } else if (player.events.oakParcelGiven && !player.events.viridianPokeMartEvent) {
                alert('Thanks for helping me out. Take these POKEBALLS as a sign of my gratitude!');
                player.ballsAmount.pokeball += 20;
                dom.renderBalls();
                player.events.viridianPokeMartEvent = true;
            } else { alert('Thanks for delivering the parcel for me kid. I wish you the best in your endeavors'); }
        },
        vFisherman: function () {
            if (!player.unlocked.kantoOldRod) {
                alert('You seem like a good kid. Take this Fishing Rod.');
                player.unlocked.kantoOldRod = 1;
                dom.renderRouteList();
            } else { alert('How do you like fishing?'); }
        },
        renderGameTokens: function () {
            const gameTokensElement = $('#gameTokens');
            gameTokensElement.innerHTML = player.currencyAmount.gametokens;
        },
        renderPrizeTokens: function () {
            const gameTokensElement = $('#prizeTokens');
            gameTokensElement.innerHTML = player.currencyAmount.gametokens;
        },
        gameCorner: function () {
            closeModal(document.getElementById('celadoncityModal'));
            this.renderGameTokens();
            openModal(document.getElementById('gameCornerModal'));
        },
        prizeCorner: function () {
            closeModal(document.getElementById('celadoncityModal'));
            openModal(document.getElementById('prizeCornerModal'));
            this.renderPrizeTokens();
        },
        freebie: function () {
            if (player.currencyAmount.gametokens === 0) {
                player.currencyAmount.gametokens += 100;
                this.renderGameTokens();
            } else alert('You have enough tokens to play');
        },
        buyAbra: function () {
            let gametokens = player.currencyAmount.gametokens;
            const abra = 'Abra';
            if (player.hasPokemon(abra)) {
                alert('You already have an Abra, save your tokens');
            } else if (!player.hasPokemon(abra) && gametokens >= 1000) {
                player.addPoke(new Poke(abra, 9));
                gametokens -= 1000;
                alert('Enjoy your Abra');
            } else if (gametokens < 1000) {
                alert('Get more tokens and come back');
            } else {
                alert('Idk honestly');
            }
        },
        buyDratini: function () {
            let gametokens = player.currencyAmount.gametokens;
            const dratini = 'Dratini';
            if (player.hasPokemon(dratini)) {
                alert('You already have a Dratini, save your tokens');
            } else if (!player.hasPokemon(dratini) && gametokens >= 1000) {
                player.addPoke(new Poke(dratini, 9));
                gametokens -= 1000;
                alert('Enjoy your Dratini');
            } else if (gametokens < 1000) {
                alert('Get more tokens and come back');
            } else {
                alert('Idk honestly');
            }
        },
        buyPorygon: function () {
            let gametokens = player.currencyAmount.gametokens;
            const porygon = 'Porygon';
            if (player.hasPokemon(porygon)) {
                alert('You already have a Porygon, save your tokens');
            } else if (!player.hasPokemon(porygon) && gametokens >= 1000) {
                player.addPoke(new Poke(porygon, 9));
                gametokens -= 1000;
                alert('Enjoy your Porygon');
            } else if (gametokens < 1000) {
                alert('Get more tokens and come back');
            } else {
                alert('Idk honestly');
            }
        },
        betAllGameTokens: function () {
            const heads = Math.random();
            const totalAmount = player.currencyAmount.gametokens;
            if (totalAmount === 0) {
                alert('Go check Freebies');
            } else if (heads >= 0.6) {
                alert('You doubled your tokens');
                player.currencyAmount.gametokens += totalAmount;
                this.renderGameTokens();
            } else {
                alert('You lost it all');
                player.currencyAmount.gametokens -= totalAmount;
                this.renderGameTokens();
            }
        },
        betHalfGameTokens: function () {
            const heads = Math.random();
            const totalAmount = player.currencyAmount.gametokens;
            if (totalAmount === 0) {
                alert('Go check Freebies');
            } else if (heads >= 0.6) {
                alert('You won half of your tokens');
                player.currencyAmount.gametokens += (totalAmount * 0.5);
                this.renderGameTokens();
            } else {
                alert('You lost half of your tokens');
                player.currencyAmount.gametokens -= (totalAmount * 0.5);
                this.renderGameTokens();
            }
        },
        oakLab: function () {
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('oaklabModal'));
                closeModal(document.getElementById('pallettownnooakModal'));
            } else {
                openModal(document.getElementById('oaklabnooakModal'));
                closeModal(document.getElementById('pallettownModal'));
            }
        },
        oakLabExit: function () {
            closeModal(document.getElementById('oaklabModal'));
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('pallettownnooakModal'));
            } else {
                openModal(document.getElementById('pallettownModal'));
            }
        },
        redHouse: function () {
            closeModal(document.getElementById('pallettownModal'));
            closeModal(document.getElementById('pallettownnooakModal'));
            openModal(document.getElementById('redhouseModal'));
        },
        redHouseExit: function () {
            closeModal(document.getElementById('redhouseModal'));
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('pallettownnooakModal'));
            } else {
                openModal(document.getElementById('pallettownModal'));
            }
        },
        redMom: function () {
            alert('Hi! My Red is not home right now. Check back another time.');
        },
        redTV: function () {
            alert('Two kids are walking along some railroad tracks.');
        },
        redRoom: function () {
            closeModal(document.getElementById('redhouseModal'));
            openModal(document.getElementById('redroomModal'));
        },
        redRoomDown: function () {
            closeModal(document.getElementById('redroomModal'));
            openModal(document.getElementById('redhouseModal'));
        },
        redPC: function () {
            alert('The computer is powered off.');
        },
        redVideoGames: function () {
            alert('This is a pretty old console.');
        },
        redMap: function () {
            alert('I wonder why all these places on the map are crossed off.');
        },
        blueHouse: function () {
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('bluehouseModal'));
                closeModal(document.getElementById('pallettownnooakModal'));
            } else {
                openModal(document.getElementById('bluehouseModal'));
                closeModal(document.getElementById('pallettownModal'));
            }
        },
        blueHouseExit: function () {
            closeModal(document.getElementById('bluehouseModal'));
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('pallettownnooakModal'));
            } else {
                openModal(document.getElementById('pallettownModal'));
            }
        },
        blueSister: function () {
            alert('Hi! My brother is not home right now. Check back another time.');
        },
        oakAide1: function () {
            if (player.events.oakAide1 != true) {
                alert('I am just a simple aide. No need to talk to me again');
                player.events.oakAide1 = true;
            } else if (player.events.oakAide1 === true && !player.events.oakAide1A) {
                alert('No, honestly, I have work to do. Please leave me alone');
                player.events.oakAide1A = true;
            } else if (player.events.oakAide1A && !player.events.oakAide1B) {
                alert('Please just take the Pokeballs and leave me alone');
                player.events.oakAide1B = true;
                player.ballsAmount.pokeball += 10;
                dom.renderBalls();
            } else if (player.events.oakAide1B === true && !player.events.oakAide1C) {
                alert('Fine, start over... Leave me alone and check your Pokeballs');
                player.events.oakAide1C = true;
                player.ballsAmount.pokeball = 0;
                dom.renderBalls();
            } else if (player.events.oakAide1C) {
                alert('Leave me alone before something REALLY bad happens to you and your POKEMON');
            }
        },
        oakAide2: function () {
            if (!player.events.oakAide1) {
                alert('Have you talked to the other aide? They get a little overwhelmed sometimes, I would be careful if I were you.');
            } else if (player.events.oakAide1C === true && !player.events.oakAide2) {
                alert('I am sorry for my coworker. Please take these as an apology and try to avoid dangerous NPCs in the future.');
                player.ballsAmount.pokeball += 10;
                dom.renderBalls();
                player.events.oakAide2 = true;
            } else { alert('Hiya! I work as an Aide. Be sure to talk to other NPCs as well. Some of us do stuff, others not so much.'); }
        },
        oakLabOak: function () {
            if (player.events.oakParcelReceived && !player.events.oakParcelGiven) {
                alert('This must be the parcel I ordered, thank you for delivering it.');
                player.events.oakParcelGiven = true;
            } else if (!player.events.oakParcelReceived) {
                alert('I wonder where my parcel from Viridian City could be. . .');
            } else if (player.countPokedex(5) > 40 && !player.unlocked.kantoFirstStagePass) {
                alert('Great job on registering 40 POKEDEX entries. Take this Pass to unlock deeper areas previously inaccessible.');
                player.unlocked.kantoFirstStagePass = true;
                dom.renderRouteList();
            } else if (!player.unlocked.kantoFirstStagePass) {
                alert('It seems you need to research Pokemon a bit more thoroughly before I can grant you access to other areas.');
            } else if (player.countPokedex(5) < 80 && !player.unlocked.kantoSecondStagePass) {
                alert('Keep researching more pokemon to unlock more areas.');
            } else if (player.countPokedex(5) > 80 && !player.unlocked.kantoSecondStagePass) {
                alert('You have been an excellent help with my research. Take this Second Stage Pass to explore new areas.');
                player.unlocked.kantoSecondStagePass = true;
                dom.renderRouteList();
            } else { alert('There is more stuff to be implemented later on here.'); }
        },
        blueOakLab: function () {
            if (!player.events.oakParcelReceived) {
                alert('My grandpa Prof. Oak should be somewhere around Pallet Town waiting for his parcel to arrive.');
            } else if (player.events.oakParcelReceived && !player.events.oakParcelGiven) {
                alert('You should go talk to my grandpa. He has something important to tell us and I am tired of waiting.');
            } else if (player.events.oakParcelGiven) {
                if (!player.events.garyPallet1) {
                    alert('Hey, let\'s try out our new POKEMON?');
                    closeModal($('#oaklabModal'));
                    this.garyPallet1Battle();
                } else { alert('I hate to admit it but that was a pretty good battle.'); }
            }
        },
        palletToRoute1: function () {
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('kantoroute1Modal'));
                closeModal(document.getElementById('pallettownnooakModal'));
                this.changeRoute('kroute1');
            } else {
                openModal(document.getElementById('kantoroute1Modal'));
                closeModal(document.getElementById('pallettownModal'));
                this.changeRoute('kroute1');
            }
        },
        route1ToPallet: function () {
            if (player.events.oakParcelReceived) {
                openModal(document.getElementById('pallettownnooakModal'));
                closeModal(document.getElementById('kantoroute1Modal'));
                this.changeRoute('palletTown');
            } else {
                openModal(document.getElementById('pallettownModal'));
                closeModal(document.getElementById('kantoroute1Modal'));
                this.changeRoute('palletTown');
            }
        },
        route1ToViridian: function () {
            openModal(document.getElementById('viridiancityModal'));
            closeModal(document.getElementById('kantoroute1Modal'));
            this.changeRoute('viridianCity');
        },
        route22ToViridian: function () {
            openModal(document.getElementById('viridiancityModal'));
            closeModal(document.getElementById('kantoroute22Modal'));
            this.changeRoute('viridianCity');
        },
        route2BottomToViridian: function () {
            openModal(document.getElementById('viridiancityModal'));
            closeModal(document.getElementById('kantoroute2bottomModal'));
            this.changeRoute('viridianCity');
        },
        route2BottomToRoute2Top: function () {
            if (player.events.kantoCut) {
                openModal(document.getElementById('kantoroute2topModal'));
                closeModal(document.getElementById('kantoroute2bottomModal'));
            } else { alert('There is a small tree in the way. It can be removed by using CUT.'); }
        },
        route2BottomToKantoViridianForest: function () {
            openModal(document.getElementById('kantoviridianforestModal'));
            closeModal(document.getElementById('kantoroute2bottomModal'));
            this.changeRoute('viridianForest');
        },
        route2TopToPewter: function () {
            openModal(document.getElementById('pewtercityModal'));
            closeModal(document.getElementById('kantoroute2topModal'));
            this.changeRoute('pewterCity');
        },
        route2TopToRoute2Bottom: function () {
            openModal(document.getElementById('kantoroute2bottomModal'));
            closeModal(document.getElementById('kantoroute2topModal'));
        },
        route2TopToKantoViridianForest: function () {
            openModal(document.getElementById('kantoviridianforestModal'));
            closeModal(document.getElementById('kantoroute2topModal'));
            this.changeRoute('viridianForest');
        },
        viridianToRoute22: function () {
            openModal(document.getElementById('kantoroute22Modal'));
            closeModal(document.getElementById('viridiancityModal'));
            this.changeRoute('kroute22');
        },
        viridianToRoute1: function () {
            openModal(document.getElementById('kantoroute1Modal'));
            closeModal(document.getElementById('viridiancityModal'));
            this.changeRoute('kroute1');
        },
        viridianToRoute2Bottom: function () {
            openModal(document.getElementById('kantoroute2bottomModal'));
            closeModal(document.getElementById('viridiancityModal'));
            this.changeRoute('kroute2');
        },
        kantoViridianForestToRoute2Bottom: function () {
            openModal(document.getElementById('kantoroute2bottomModal'));
            closeModal(document.getElementById('kantoviridianforestModal'));
            this.changeRoute('kroute2');
        },
        kantoViridianForestToRoute2Top: function () {
            openModal(document.getElementById('kantoroute2topModal'));
            closeModal(document.getElementById('kantoviridianforestModal'));
            this.changeRoute('kroute2');
        },
        blueRoute22: function () {
            alert('Needs battle here');
        },
        viridianPokeCenter: function () {
            closeModal(document.getElementById('viridiancityModal'));
            openModal(document.getElementById('viridiancitypokecenterModal'));
        },
        viridianPokeCenterExit: function () {
            openModal(document.getElementById('viridiancityModal'));
            closeModal(document.getElementById('viridiancitypokecenterModal'));
        },
        viridianPokeCenterOldGuy: function () {
            alert('I need a purpose');
        },
        viridianPokeCenterHat: function () {
            alert('I need a purpose');
        },
        viridianPokeCenterNoHat: function () {
            alert('I need a purpose');
        },
        viridianNurseJoy: function () {
            alert('I need a purpose');
        },
        viridianDrunkard: function () {
            if (!player.events.oakParcelReceived) {
                alert('I am so hungover. Can you run to the PokeMart and grab me some medicine from the PokeMart Attendant?');
                player.events.viridianDrunkard = true;
            } else if (player.events.oakParcelReceived && !player.events.viridianDrunkard) {
                alert('I was feeling sick earlier and had a quest for you to grab me medicine with a nice reward but you missed it. Sometimes the order that you check NPCs in matters.');
            } else if (player.events.viridianDrunkard && !player.events.viridianDrunkard1) {
                alert('I felt better before you got here. Thanks anyways though, here are some GREATBALLS for your troubles');
                player.ballsAmount.greatball += 20;
                dom.renderBalls();
                player.events.viridianDrunkard1 = true;
            } else if (player.events.viridianDrunkard1) {
                alert('Thanks for taking the time to talk to me. Many other NPCs will offer you rewards or quests but be careful, sometimes the order you talk to us matters and you might miss some stuff.');
            }
        },
        viridianPokeMart: function () {
            closeModal(document.getElementById('viridiancityModal'));
            openModal(document.getElementById('viridiancitypokemartModal'));
        },
        viridianPokeMartExit: function () {
            openModal(document.getElementById('viridiancityModal'));
            closeModal(document.getElementById('viridiancitypokemartModal'));
        },
        viridianPokeMartHat: function () {
            alert('I need a purpose');
        },
        viridianPokeMartGirl: function () {
            alert('I need a purpose');
        },
        viridianGym: function () {
            if (!player.badges['Volcano Badge']) {
                alert('The door is locked. You should check back later.');
            } else {
                closeModal(document.getElementById('viridiancityModal'));
                openModal(document.getElementById('viridiangymModal'));
            }
        },
        pewterToRoute2Top: function () {
            openModal(document.getElementById('kantoroute2topModal'));
            closeModal(document.getElementById('pewtercityModal'));
            this.changeRoute('kroute2');
        },
        pewterToRoute3West: function () {
            if (player.badges['Boulder Badge'] === true) {
                openModal(document.getElementById('kantoroute3westModal'));
                closeModal(document.getElementById('pewtercityModal'));
                this.changeRoute('kroute3');
            } else { alert('Defeat Brock before moving on.'); }
        },
        route3WestToPewter: function () {
            openModal(document.getElementById('pewtercityModal'));
            closeModal(document.getElementById('kantoroute3westModal'));
        },
        route3WestToRoute3East: function () {
            openModal(document.getElementById('kantoroute3eastModal'));
            closeModal(document.getElementById('kantoroute3westModal'));
        },
        route3EastToRoute3West: function () {
            openModal(document.getElementById('kantoroute3westModal'));
            closeModal(document.getElementById('kantoroute3eastModal'));
        },
        route3EastToMtMoonEntrance: function () {
            openModal(document.getElementById('mtmoonentranceModal'));
            closeModal(document.getElementById('kantoroute3eastModal'));
        },
        mtMoonEntranceToRoute3East: function () {
            this.changeRoute('kroute3');
            openModal(document.getElementById('kantoroute3eastModal'));
            closeModal(document.getElementById('mtmoonentranceModal'));
        },
        mtMoonEntranceToMtMoonFirstFloor: function () {
            this.changeRoute('mtMoon');
            openModal(document.getElementById('mtmoonfirstfloorModal'));
            closeModal(document.getElementById('mtmoonentranceModal'));
        },
        mtMoonFirstFloorToMtMoonEntrance: function () {
            openModal(document.getElementById('mtmoonentranceModal'));
            closeModal(document.getElementById('mtmoonfirstfloorModal'));
        },
        mtMoonFirstFloorToMtMoonSecondFloor: function () {
            openModal(document.getElementById('mtmoonsecondfloorModal'));
            closeModal(document.getElementById('mtmoonfirstfloorModal'));
        },
        mtMoonSecondFloorToMtMoonFirstFloor: function () {
            openModal(document.getElementById('mtmoonfirstfloorModal'));
            closeModal(document.getElementById('mtmoonsecondfloorModal'));
        },
        mtMoonSecondFloorToRoute4West: function () {
            openModal(document.getElementById('kantoroute4westModal'));
            closeModal(document.getElementById('mtmoonsecondfloorModal'));
            this.changeRoute('kroute4');
        },
        route4WestToRoute4East: function () {
            openModal(document.getElementById('kantoroute4eastModal'));
            closeModal(document.getElementById('kantoroute4westModal'));
        },
        route4EastToRoute4West: function () {
            openModal(document.getElementById('kantoroute4westModal'));
            closeModal(document.getElementById('kantoroute4eastModal'));
        },
        route4WestToMtMoonSecondFloor: function () {
            this.changeRoute('mtMoon');
            openModal(document.getElementById('mtmoonsecondfloorModal'));
            closeModal(document.getElementById('kantoroute4westModal'));
        },
        route4EastToCeruleanCity: function () {
            this.changeRoute('ceruleanCity');
            openModal(document.getElementById('ceruleancityModal'));
            closeModal(document.getElementById('kantoroute4eastModal'));
        },
        pewterPokeMart: function () {
            closeModal(document.getElementById('pewtercityModal'));
            openModal(document.getElementById('pewtercitypokemartModal'));
        },
        pewterPokeCenter: function () {
            closeModal(document.getElementById('pewtercityModal'));
            openModal(document.getElementById('pewtercitypokecenterModal'));
        },
        pewterGym: function () {
            closeModal(document.getElementById('pewtercityModal'));
            openModal(document.getElementById('pewtergymModal'));
        },
        exitPewterGym: function () {
            closeModal(document.getElementById('pewtergymModal'));
            openModal(document.getElementById('pewtercityModal'));
        },
        pewterGymRef: function () {
            if (!player.badges['Boulder Badge']) {
                alert('Brock is a master of ROCK type Pokemon. It would be a good idea to use WATER, GRASS, or FIGHTING types against him. Once you win, stop by the museum.');
            } else {
                alert('Did you stop by the museum? If so, how did you like your surprise?');
            }
        },
        pewterMuseum: function () {
            closeModal(document.getElementById('pewtercityModal'));
            openModal(document.getElementById('pewtermuseumModal'));
        },
        kantoTest: function () {
            closeModal(document.getElementById('pallettownModal'));
            openModal(document.getElementById('kantoModal'));
        },
        test: function () {
            alert('PLACEHOLDER');
        },
        pewterMuseumScientist: function () {
            if (player.events.pewterMuseum1 === true) {
                alert('Did you take that fossil to Cinnabar Island?');
            }
            if (!player.badges['Boulder Badge']) {
                alert('Why not beat Brock and come back?');
            }
            if (player.badges['Boulder Badge'] === true && !player.events.pewterMuseum1) {
                player.unlocked.oldAmber = true;
                alert('Congrats on the win. Take this Old Amber as a bonus');
                player.events.pewterMuseum1 = true;
            }
        },
        ceruleanPokeMart: function () {
            closeModal(document.getElementById('ceruleancityModal'));
            openModal(document.getElementById('ceruleancitypokemartModal'));
        },
        ceruleanPokeCenter: function () {
            closeModal(document.getElementById('ceruleancityModal'));
            openModal(document.getElementById('ceruleancitypokecenterModal'));
        },
        ceruleanGym: function () {
            closeModal(document.getElementById('ceruleancityModal'));
            openModal(document.getElementById('ceruleangymModal'));
        },
        billsHouse: function () {
            if (!player.events.billPressTheButton) {
                closeModal(document.getElementById('seasidecottageModal'));
                openModal(document.getElementById('seasidebillhousebeforeconvertModal'));
            } else {
                closeModal(document.getElementById('seasidecottageModal'));
                openModal(document.getElementById('seasidebillhouseafterconvertModal'));
            }
        },
        billsBackyard: function () {
            alert('The gate is locked. . . For now.');
        },
        vermilionPokeMart: function () {
            closeModal(document.getElementById('vermilioncityModal'));
            openModal(document.getElementById('vermilioncitypokemartModal'));
        },
        vermilionPokeCenter: function () {
            closeModal(document.getElementById('vermilioncityModal'));
            openModal(document.getElementById('vermilioncitypokecenterModal'));
        },
        vermilionSSANNE: function () {
            if (player.events.ssAnneTicket) {
                closeModal(document.getElementById('vermilioncityModal'));
                openModal(document.getElementById('vermilioncityssanne1Modal'));
            } else { alert('Sorry, but you do need a ticket to board.'); }
        },
        vermilionGym: function () {
            if (player.events.kantoCut) {
                closeModal(document.getElementById('vermilioncityModal'));
                openModal(document.getElementById('vermiliongymModal'));
            } else { alert('There is a small tree blocking the way. It can be removed by using CUT'); }
        },
        vermilionGetCut: function () {
            if (!player.events.kantoCut) {
                alert('This is a temporary way to gain CUT until the CUT Master is implemented.');
                player.events.kantoCut = true;
            } else { alert('If you are still seeing this the dev team is being lazy :/'); }
        },
        celadonPokeMart: function () {
            closeModal(document.getElementById('celadoncityModal'));
            openModal(document.getElementById('celadoncitypokemartModal'));
        },
        celadonPokeCenter: function () {
            closeModal(document.getElementById('celadoncityModal'));
            openModal(document.getElementById('celadoncitypokecenterModal'));
        },
        celadonGym: function () {
            closeModal(document.getElementById('celadoncityModal'));
            openModal(document.getElementById('celadongymModal'));
        },
        fuchsiaPokeMart: function () {
            closeModal(document.getElementById('fuchsiacityModal'));
            openModal(document.getElementById('fuchsiacitypokemartModal'));
        },
        fuchsiaPokeCenter: function () {
            closeModal(document.getElementById('fuchsiacityModal'));
            openModal(document.getElementById('fuchsiacitypokecenterModal'));
        },
        fuchsiaGym: function () {
            closeModal(document.getElementById('fuchsiacityModal'));
            openModal(document.getElementById('fuchsiagymModal'));
        },
        saffronPokeMart: function () {
            closeModal(document.getElementById('saffroncityModal'));
            openModal(document.getElementById('saffroncitypokemartModal'));
        },
        saffronPokeCenter: function () {
            closeModal(document.getElementById('saffroncityModal'));
            openModal(document.getElementById('saffroncitypokecenterModal'));
        },
        saffronGym: function () {
            closeModal(document.getElementById('saffroncityModal'));
            openModal(document.getElementById('saffrongymModal'));
        },
        lavenderPokeMart: function () {
            closeModal(document.getElementById('lavendertownModal'));
            openModal(document.getElementById('lavendertownpokemartModal'));
        },
        lavenderPokeCenter: function () {
            closeModal(document.getElementById('lavendertownModal'));
            openModal(document.getElementById('lavendertownpokecenterModal'));
        },
        lavenderPokeTower1: function () {
            closeModal(document.getElementById('lavendertownModal'));
            openModal(document.getElementById('lavendertownpoketower1Modal'));
        },
        lavenderPokeTower1DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower2Modal'));
            openModal(document.getElementById('lavendertownpoketower1Modal'));
        },
        lavenderPokeTower2UP: function () {
            closeModal(document.getElementById('lavendertownpoketower1Modal'));
            openModal(document.getElementById('lavendertownpoketower2Modal'));
        },
        lavenderPokeTower2DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower3Modal'));
            openModal(document.getElementById('lavendertownpoketower2Modal'));
        },
        lavenderPokeTower3UP: function () {
            closeModal(document.getElementById('lavendertownpoketower2Modal'));
            openModal(document.getElementById('lavendertownpoketower3Modal'));
        },
        lavenderPokeTower3DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower4Modal'));
            openModal(document.getElementById('lavendertownpoketower3Modal'));
        },
        lavenderPokeTower4UP: function () {
            closeModal(document.getElementById('lavendertownpoketower3Modal'));
            openModal(document.getElementById('lavendertownpoketower4Modal'));
        },
        lavenderPokeTower4DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower5Modal'));
            openModal(document.getElementById('lavendertownpoketower4Modal'));
        },
        lavenderPokeTower5UP: function () {
            closeModal(document.getElementById('lavendertownpoketower4Modal'));
            openModal(document.getElementById('lavendertownpoketower5Modal'));
        },
        lavenderPokeTower5DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower6Modal'));
            openModal(document.getElementById('lavendertownpoketower5Modal'));
        },
        lavenderPokeTower6UP: function () {
            closeModal(document.getElementById('lavendertownpoketower5Modal'));
            openModal(document.getElementById('lavendertownpoketower6Modal'));
        },
        lavenderPokeTower6DOWN: function () {
            closeModal(document.getElementById('lavendertownpoketower7Modal'));
            openModal(document.getElementById('lavendertownpoketower6Modal'));
        },
        lavenderPokeTower7UP: function () {
            closeModal(document.getElementById('lavendertownpoketower6Modal'));
            openModal(document.getElementById('lavendertownpoketower7Modal'));
        },
        lavenderPokeTowerReceptionist: function () {
            alert('Welcome to the Pokemon Tower. There is nothing here yet but a questline will be implemented shortly');
        },
        nuggetBridgeEvent: function () {
            if (player.events.nugget5 === true && !player.hasPokemon('Charmander')) {
                alert('I think you would do great in Team Rocket. Here is a Charmander as a bribe.');
                player.addPoke(new Poke(POKEDEX[4], 25));
                player.addPokedex('Charmander', POKEDEXFLAGS.ownNormal);
            }
            if (!player.events.nugget5) {
                alert('Defeat the 5 of us in a row to win a special prize!');
                closeModal(document.getElementById('ceruleancityModal'));
                this.checkNPCBattle();
            }
            if (player.events.nugget5 === true && player.hasPokemon('Charmander')) {
                alert('You feel like joining us yet?');
            }
        },
        billEvent: function () {
            if (!player.events.billPressTheButton) {
                alert('Hey kid! I am not a POKEMON, my name is Bill and I am a little stuck. Could you help me out? Press the button on that computer over there. Once you do I will go into the machine. Thanks in advance.');
                player.events.billPressTheButton = true;
            } else if (player.events.billPressTheButton && !player.events.billConverted) {
                alert('Can you hurry up please?');
            } else if (player.events.billConverted && !player.events.ssAnneTicket) {
                alert('Thanks for helping me out. You would not believe how many people left me in that state. As a reward for being an awesome person, please accept this ticket to the S.S. Anne. I was invitied but it is not really my style.');
                player.events.ssAnneTicket = true;
            } else {
                alert('Have you been to see the S.S. Anne? If you have, check back with me after a later update as there is still more planned.');
            }
        },
        billsComputerKanto: function () {
            if (player.events.billPressTheButton && !player.events.billConverted) {
                alert('Bill entered the DNA machine and returned to normal form.');
                player.events.billConverted = true;
                closeModal(document.getElementById('seasidebillhousebeforeconvertModal'));
                openModal(document.getElementById('seasidebillhouseafterconvertModal'));
            } else {
                alert('this needs to be finished');
            }
        },
        openCinnabarLab: function () {
            closeModal(document.getElementById('cinnabarislandModal'));
            openModal(document.getElementById('cinnabarlabModal'));
        },
        cinnabarLabEvent: function () {
            if (!player.events.cinnabarLab1) {
                alert('Welcome, if you have any fossils we can restore them to the Pokemon they were.');
                player.events.cinnabarLab1 = true;
            }
            if (player.events.cinnabarLab1 === true && player.unlocked.oldAmber === true) {
                alert('Is that an Old Amber? Ha! Now it is an Aerodactyl');
                player.addPoke(new Poke(POKEDEX[171], 25));
                player.addPokedex('Aerodactyl', POKEDEXFLAGS.ownNormal);
            }
        },
        cinnabarPokeMart: function () {
            closeModal(document.getElementById('cinnabarislandModal'));
            openModal(document.getElementById('cinnabarislandpokemartModal'));
        },
        cinnabarPokeCenter: function () {
            closeModal(document.getElementById('cinnabarislandModal'));
            openModal(document.getElementById('cinnabarislandpokecenterModal'));
        },
        cinnabarGym: function () {
            closeModal(document.getElementById('cinnabarislandModal'));
            openModal(document.getElementById('cinnabargymModal'));
        },
        beldumEvent: function () {
            if (!player.events.beldum1) {
                alert('Congrats on being dope. Take this Beldum');
                player.addPoke(new Poke(pokeByName('Beldum'), 5));
                player.addPokedex('Beldum', POKEDEXFLAGS.ownNormal);
                player.events.beldum1 = true;
            } else {
                alert('No one is home');
            }
        },
        route20EastToSeafoamIslandsEntrance: function () {
            this.changeRoute('seafoamIsland');
            openModal(document.getElementById('seafoamislandsentranceModal'));
            closeModal(document.getElementById('kantoroute20eastModal'));
        },
        seafoamIslandsEntranceToRoute20East: function () {
            this.changeRoute('kroute20');
            openModal(document.getElementById('kantoroute20eastModal'));
            closeModal(document.getElementById('seafoamislandsentranceModal'));
        },
        route20WestToSeafoamIslandsEntrance: function () {
            this.changeRoute('seafoamIsland');
            openModal(document.getElementById('seafoamislandsentranceModal'));
            closeModal(document.getElementById('kantoroute20westModal'));
        },
        seafoamIslandsEntranceToRoute20West: function () {
            this.changeRoute('kroute20');
            openModal(document.getElementById('kantoroute20westModal'));
            closeModal(document.getElementById('seafoamislandsentranceModal'));
        },
        seafoamIslandsEntranceToSeafoamIslandsFirstFloor: function () {
            openModal(document.getElementById('seafoamislandsfirstfloorModal'));
            closeModal(document.getElementById('seafoamislandsentranceModal'));
        },
        seafoamIslandsFirstFloorToSeafoamIslandsEntrance: function () {
            openModal(document.getElementById('seafoamislandsentranceModal'));
            closeModal(document.getElementById('seafoamislandsfirstfloorModal'));
        },
        seafoamIslandsFirstFloorToSeafoamIslandsSecondFloor: function () {
            openModal(document.getElementById('seafoamislandssecondfloorModal'));
            closeModal(document.getElementById('seafoamislandsfirstfloorModal'));
        },
        seafoamIslandsSecondFloorToSeafoamIslandsFirstFloor: function () {
            openModal(document.getElementById('seafoamislandsfirstfloorModal'));
            closeModal(document.getElementById('seafoamislandssecondfloorModal'));
        },
        seafoamIslandsSecondFloorToSeafoamIslandsThirdFloor: function () {
            openModal(document.getElementById('seafoamislandsthirdfloorModal'));
            closeModal(document.getElementById('seafoamislandssecondfloorModal'));
        },
        seafoamIslandsThirdFloorToSeafoamIslandsSecondFloor: function () {
            openModal(document.getElementById('seafoamislandssecondfloorModal'));
            closeModal(document.getElementById('seafoamislandsthirdfloorModal'));
        },
        seafoamIslandsThirdFloorToSeafoamIslandsFourthFloor: function () {
            openModal(document.getElementById('seafoamislandsfourthfloorModal'));
            closeModal(document.getElementById('seafoamislandsthirdfloorModal'));
        },
        seafoamIslandsFourthFloorToSeafoamIslandsThirdFloor: function () {
            openModal(document.getElementById('seafoamislandsthirdfloorModal'));
            closeModal(document.getElementById('seafoamislandsfourthfloorModal'));
        },
        seafoamIslandsFourthFloorToSeafoamIslandsFifthFloor: function () {
            openModal(document.getElementById('seafoamislandsfifthfloorModal'));
            closeModal(document.getElementById('seafoamislandsfourthfloorModal'));
        },
        seafoamIslandsFifthFloorToSeafoamIslandsFourthFloor: function () {
            openModal(document.getElementById('seafoamislandsfourthfloorModal'));
            closeModal(document.getElementById('seafoamislandsfifthfloorModal'));
        },
        abundantOldManEvent: function () {
            if (!player.events.abundantShrineEvent && player.hasPokemon('Thundurus') && player.hasPokemon('Landorus') && player.hasPokemon('Tornadus')) {
                alert('Amazing that you\'ve tamed the Forces of Nature. Take this item to take them to the next level');
                player.evoStones.revealGlass = 1;
                player.events.abundantShrineEvent = true;
            }
            if (player.events.abundantShrineEvent === true) {
                alert('Have you tried using the Reveal Glass on the Forces of Nature yet?');
            }
            if (!player.events.abundantShrineEvent && !player.hasPokemon('Landorus')) {
                alert('Come back to me when you\'ve master the Forces of Nature');
            }
        },
        profBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.prof && routeData.prof.poke.length > 0) {
                combatLoop.prof = {
                    name: routeData.prof.name,
                    badge: routeData.prof.badge,
                    win: routeData.prof.win,
                    reward: routeData.prof.reward,
                };
                combatLoop.profPoke = Object.values({ ...routeData.prof.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            }
        },
        gymLeaderBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym;
            const gymModal = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym.name;
            closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
            if (routeData.gymLeader && routeData.gymLeader.poke.length > 0 && (!routeData.gymLeader.req || player.wins[routeData.gymLeader.req])) {
                combatLoop.gymLeader = { name: routeData.gymLeader.name, badge: routeData.gymLeader.badge, win: routeData.gymLeader.win };
                combatLoop.gymLeaderPoke = Object.values({ ...routeData.gymLeader.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else {
                alert('Defeat the previous trainers and try again.');
            }
        },
        gymTrainer1Battle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym;
            const gymModal = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym.name;
            closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
            if (routeData.gymTrainer1.req && !player.wins[routeData.gymTrainer1.req]) {
                alert('Defeat more GYM LEADERS and try again');
            } else if (routeData.gymTrainer1 && routeData.gymTrainer1.poke.length > 0) {
                combatLoop.gymLeader = { name: routeData.gymTrainer1.name, win: routeData.gymTrainer1.win };
                combatLoop.gymLeaderPoke = Object.values({ ...routeData.gymTrainer1.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else { alert('Something is broken :/'); }
        },
        gymTrainer2Battle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym;
            const gymModal = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym.name;
            closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
            if (routeData.gymTrainer2 && routeData.gymTrainer2.poke.length > 0 && player.wins[routeData.gymTrainer2.req]) {
                combatLoop.gymLeader = { name: routeData.gymTrainer2.name, win: routeData.gymTrainer2.win };
                combatLoop.gymLeaderPoke = Object.values({ ...routeData.gymTrainer2.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else {
                alert('Defeat the previous trainer and try again.');
            }
        },
        gymTrainer3Battle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym;
            const gymModal = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym.name;
            closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
            if (routeData.gymTrainer3 && routeData.gymTrainer3.poke.length > 0 && player.wins[routeData.gymTrainer3.req]) {
                combatLoop.gymLeader = { name: routeData.gymTrainer3.name, win: routeData.gymTrainer3.win };
                combatLoop.gymLeaderPoke = Object.values({ ...routeData.gymTrainer3.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else {
                alert('Defeat the previous trainer and try again.');
            }
        },
        npcBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.npc && routeData.npc.poke.length > 0) {
                combatLoop.npc = {
                    name: routeData.npc.name,
                    event: routeData.npc.event,
                };
                combatLoop.npcPoke = Object.values({ ...routeData.npc.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            }
        },
        garyPallet1Battle: function () {
            const gary = kantoTrainers.palletTown.trainers.gary1;
            if (player.events.Squirtle) {
                combatLoop.npc = {
                    name: gary.Squirtle.name,
                    event: gary.Squirtle.win,
                };
                combatLoop.npcPoke = Object.values({ ...gary.Squirtle.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else if (player.events.Charmander === true) {
                combatLoop.npc = {
                    name: gary.Charmander.name,
                    event: gary.Charmander.win,
                };
                combatLoop.npcPoke = Object.values({ ...gary.Charmander.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else if (player.events.Bulbasaur === true) {
                combatLoop.npc = {
                    name: gary.Bulbasaur.name,
                    event: gary.Bulbasaur.win,
                };
                combatLoop.npcPoke = Object.values({ ...gary.Bulbasaur.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else if (player.events.Pikachu === true) {
                combatLoop.npc = {
                    name: gary.Pikachu.name,
                    event: gary.Pikachu.win,
                };
                combatLoop.npcPoke = Object.values({ ...gary.Pikachu.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else { alert('I hate to admit it but that was a pretty good battle.'); }
        },
        megaBeedrillQuest: function () {
            if ((player.typeStats.bugBeaten + player.typeStats.poisonBeaten >= 500) && (!player.events.megaBeedrillQuest)) {
                alert("You've unlocked the Mega Beedrill quest!");
                player.defeatedWith.Beedrill = 0;
                if ((player.typeStats.bugBeaten >= 1000) && (player.typeStats.poisonBeaten >= 1000)) {
                    if (player.defeatedWith.Beedrill >= 2500) {
                        player.megaStones.beedrillite = 1;
                        player.statistics.MegaQuestCompleted++;
                        player.events.megaBeedrillQuest = true;
                    }
                }
            }
        },
        megaSableyeQuest: function () {
            if ((player.typeStats.ghostBeaten + player.typeStats.darkBeaten >= 250) && (!player.events.megaSableyeQuest)) {
                alert("You've unlocked the Mega Sableye quest!");
                player.defeatedWith.Sableye = 0;
                if ((player.typeStats.darkBeaten >= 500) && (player.typeStats.ghostBeaten >= 500)) {
                    if (player.defeatedWith.Sableye >= 5000) {
                        player.megaStones.sablenite = 1;
                        player.statistics.MegaQuestCompleted++;
                        player.events.megaSableyeQuest = true;
                    }
                }
            }
        },
        // This part ^^^ was not within the actions brackets, also, add poke was not correctly utilized.
        closeStory: function () {
            if (story.canClose) {
                $('#storyContainer').style.display = 'none';
            }
        },
        attachDOM: (_dom) => {
            dom = _dom;
        },
    };

    return UserActions;
};

export const dummy = new Proxy({}, {
    get(target, prop) {
        return () => {};
    },
});
