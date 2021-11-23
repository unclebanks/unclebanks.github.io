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
                this.renderTown();
            } else {
                combatLoop.unpause();
                this.removeTown();
                this.setBackground();
            }
            renderView(dom, enemy, player);
            player.savePokes();
            dom.renderRouteList();

            return true;
        },
        setBackground: function () {
            const routeBackground = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].background;
            const playerBackground = document.getElementById('playerActivePokemon').style;
            const enemyBackground = document.getElementById('enemyBox').style;
            playerBackground.backgroundImage = `url(./assets/backgrounds/kanto/${routeBackground}.png)`;
            playerBackground.backgroundSize = 'cover';
            playerBackground.backgroundRepeat = 'no-repeat';
            enemyBackground.backgroundImage = `url(./assets/backgrounds/kanto/${routeBackground}.png)`;
            enemyBackground.backgroundSize = 'cover';
            enemyBackground.backgroundRepeat = 'no-repeat';
        },
        changePokemon: function (newActiveIndex) {
            player.setActive(newActiveIndex);
            renderView(dom, enemy, player);
        },
        goToDifferentRegion: function (region) {
            if (player.regionUnlocked(region)) {
                player.settings.currentRegionId = region;
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
        changeTheme: function () {
            const newTheme = document.getElementById('themes').value;
            player.settings.theme = newTheme;
            dom.renderTheme(newTheme);
        },
        regionBoxSelector: function (pageTo) {
            const pageToOpen = document.getElementById(pageTo);
            switch (pageTo) {
            case 'bagButtons': dom.hideAll('regionSelectorBottomButtons');
                pageToOpen.style.display = 'block';
                break;
            case 'regionButtons': dom.hideAll('regionSelectorBottomButtons');
                pageToOpen.style.display = 'block';
                break;
            default: alert('test');
                break;
            }
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
            } else if (secretCode === 'MaimahsPo' && !player.secretCodes.maimahspo) {
                player.addPoke(new Poke(pokeByName('Pancham'), 5));
                player.secretCodes.maimahspo = true;
            } else if (secretCode === 'Delphic' && !player.secretCodes.delphic) {
                player.addPoke(new Poke(pokeByName('Fennekin'), 5));
                player.secretCodes.delphic = true;
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
        viewPokeGear: function () {
            openModal(document.getElementById('pokegearModal'));
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
        viewTown: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            if (routeData === 'Pallet Town') {
                openModal(document.getElementById('oaklabModal'));
            } else { alert('Not implemented yet'); }
        },
        checkProf: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            switch (routeData) {
            case 'Pallet Town': this.palletProf();
                break;
            default: alert('Error somewhere');
            }
        },
        palletProf: function () {
            const playerFlags = player.events;
            const caughtMons = player.countPokedex(5);
            if (!playerFlags.boulderBadge) {
                if (caughtMons > 5) {
                    const shouldBattle = window.confirm(`You seem to have caught ${caughtMons} POKEMON. Would you like to battle to unlock the next area?`);
                    if (shouldBattle === true) {
                        alert('You have made it to the first battle.');
                        player.badges['Boulder Badge'] = true;
                        playerFlags.boulderBadge = true;
                        dom.renderRouteList();
                        // this.profOakBattle();
                    } else { notify('I will be here any time you would like to take the exam.'); }
                } else { notify('Come see me again after you have obtained at least 5 different POKEMON.'); }
            } else if (playerFlags.boulderBadge === true && !playerFlags.cascadeBadge) {
                if (caughtMons > 15) {
                    if (shouldBattle === true) {
                        alert('You have made it to the first battle.');
                        player.badges['Cascade Badge'] = true;
                        dom.renderRouteList();
                        // this.profOakBattle();
                    } else { notify('I will be here any time you would like to take the exam.'); }
                } else { notify('Catch more and come back'); }
            } else if (playerFlags.cascadeBadge === true && !playerFlags.thunderBadge) {
                if (caughtMons > 25) {
                    if (shouldBattle === true) {
                        alert('You have made it to the first battle.');
                        player.badges['Thunder Badge'] = true;
                        dom.renderRouteList();
                        // this.profOakBattle();
                    } else { notify('I will be here any time you would like to take the exam.'); }
                } else { notify('Catch more and come back'); }
            }
        },
        checkQuests: function () {
            alert('this is still a work in progress. check back after a few updates.');
        },
        renderTown: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            const townBox = document.getElementById('enemyBox');
            const playerBox = document.getElementById('playerActivePokemon');
            if (routeData === 'Pallet Town') {
                townBox.style.backgroundImage = "url('../assets/backgrounds/kanto/palletTown/oakLab/oaksLab.png')";
                townBox.style.backgroundSize = 'cover';
                townBox.style.backgroundRepeat = 'no-repeat';
                playerBox.style.background = '';
            }
        },
        removeTown: function () {
            const townBox = document.getElementById('enemyBox');
            townBox.style.backgroundImage = '';
            townBox.style.backgroundSize = '';
        },
        viewShop: function () {
            // closeModal(document.getElementById('townModal'));
            const region = player.settings.currentRegionId.toLowerCase();
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].name;
            town.renderPokeCoinShop(region);
            town.renderBattleCoinShop(region);
            town.renderCatchCoinShop(region);
            if (document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokemartModal`) && document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokemartModal`).classList[1] === 'is-active') {
                closeModal(document.getElementById(`${routeData.replace(/ /g, '').toLowerCase()}pokemartModal`));
            }
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
        openPC: function () {
            openModal(document.getElementById('pokemonstorageModal'));
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
            if (routeData.gymLeader && routeData.gymLeader.poke.length > 0 && (!routeData.gymLeader.req || player.wins[routeData.gymLeader.req])) {
                if (document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`) && document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`).classList[1] === 'is-active') {
                    closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
                }
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
            if (routeData.gymTrainer1.req && !player.wins[routeData.gymTrainer1.req]) {
                alert('Defeat more GYM LEADERS and try again');
            } else if (routeData.gymTrainer1 && routeData.gymTrainer1.poke.length > 0) {
                if (document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`) && document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`).classList[1] === 'is-active') {
                    closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
                }
                combatLoop.gymLeader = { name: routeData.gymTrainer1.name, win: routeData.gymTrainer1.win };
                combatLoop.gymLeaderPoke = Object.values({ ...routeData.gymTrainer1.poke });
                combatLoop.unpause();
                combatLoop.refresh();
            } else { alert('Something is broken :/'); }
        },
        gymTrainer2Battle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym;
            const gymModal = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].gym.name;
            if (routeData.gymTrainer2 && routeData.gymTrainer2.poke.length > 0 && player.wins[routeData.gymTrainer2.req]) {
                if (document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`) && document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`).classList[1] === 'is-active') {
                    closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
                }
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
            if (routeData.gymTrainer3 && routeData.gymTrainer3.poke.length > 0 && player.wins[routeData.gymTrainer3.req]) {
                if (document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`) && document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`).classList[1] === 'is-active') {
                    closeModal(document.getElementById(`${gymModal.replace(/ /g, '').toLowerCase()}Modal`));
                }
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
