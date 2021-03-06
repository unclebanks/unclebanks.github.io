import { renderView } from './display';
import ROUTES from './routes';
import { $, camelCaseToString, isEmpty } from './utilities';
import ACHIEVEMENTS from './achievements';
import { POKEDEXFLAGS } from './data';
import { openModal, closeModal } from './modalEvents';

export default (player, combatLoop, enemy, town, story) => {
    let dom;

    const UserActions = {

        changeRoute: function (newRouteId, force = false) {
            if (!force && player.alivePokeIndexes().length == 0) {
                alert('It is too dangerous to travel without a pokemon.');
                return false;
            }
            if (combatLoop.trainer) {
                alert('You cannot run away from a trainer battle.');
                return false;
            }
            if (!player.routeUnlocked(player.settings.currentRegionId, newRouteId)) {
                alert('You cannot go there yet.');
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
            combatLoop.changePlayerPoke(player.activePoke());
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
                alert('You have not unlocked this region yet');
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
                alert('You have not unlocked this region yet');
            }
        },
        enablePokeListDelete: function () {
            dom.renderListBox();
            dom.renderPokeList();
        },
        enablePokeListAutoSort: function () {
            player.settings.autoSort = $('#autoSort').checked;
            // hide or show sort dropdowns
            dom.renderPokeSort();
            dom.renderListBox();
        },
        changeCatchOption: function (newCatchOption) {
            combatLoop.changeCatch(newCatchOption);
        },
        changeListView: function (view) {
            player.settings.listView = view;
            dom.renderListBox();
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
            const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
            const moveToFirst = (index, arr) => {
                arr.splice(0, 0, arr.splice(index, 1)[0]);
            };

            moveToFirst(pokemonIndex, pokeList);
            player.savePokes();
            if (from === 'roster') {
                combatLoop.changePlayerPoke(player.activePoke());
                dom.renderPokeList();
            } else {
                dom.renderStorage();
            }
        },
        pokemonToDown: function (pokemonIndex, from = 'roster') {
            const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
            const moveToDown = (index) => (arr) => [
                ...arr.slice(0, parseInt(index)),
                arr[parseInt(index) + 1],
                arr[parseInt(index)],
                ...arr.slice(parseInt(index) + 2),
            ];
            if (pokeList[pokemonIndex + 1]) {
                const newPokemonList = moveToDown(pokemonIndex)(pokeList);
                player.reorderPokes(newPokemonList, from);
                if (from === 'roster') {
                    combatLoop.changePlayerPoke(player.activePoke());
                    dom.renderPokeList();
                } else {
                    dom.renderStorage();
                }
                player.savePokes();
            }
        },
        pokemonToUp: function (pokemonIndex, from = 'roster') {
            const pokeList = (from === 'roster') ? player.getPokemon() : player.storage;
            const moveToUp = (index) => (arr) => [
                ...arr.slice(0, parseInt(index) - 1),
                arr[parseInt(index)],
                arr[parseInt(index) - 1],
                ...arr.slice(parseInt(index) + 1),
            ];
            if (pokeList[pokemonIndex - 1]) {
                const newPokemonList = moveToUp(pokemonIndex)(pokeList);
                player.reorderPokes(newPokemonList, from);
                if (from === 'roster') {
                    combatLoop.changePlayerPoke(player.activePoke());
                    dom.renderPokeList();
                } else {
                    dom.renderStorage();
                }
                player.savePokes();
            }
        },
        evolvePokemon: function (pokemonIndex) {
            player.getPokemon()[pokemonIndex].tryEvolve(player.getPokemon()[pokemonIndex].shiny());
            dom.renderPokeList();
            renderView(dom, enemy, player);
        },
        prestigePokemon: function (pokemonIndex) {
            player.getPokemon()[pokemonIndex].tryPrestige(player.getPokemon()[pokemonIndex].shiny());
            dom.renderPokeList();
            renderView(dom, enemy, player);
        },
        moveToStorage: function (pokemonIndex) {
        // you must keep at least one active pokemon
            if (player.pokemons.length > 1) {
                const poke = player.getPokemon()[pokemonIndex];
                player.pokemons.splice(pokemonIndex, 1);
                player.storage.push(poke);
                dom.renderPokeList();
            } else {
                dom.showPopup('You must have at least one active pokemon!');
            }
        },
        moveToRoster: function (pokemonIndex) {
        // check you have space
            if (player.pokemons.length < 6) {
                const poke = player.storage[pokemonIndex];
                player.storage.splice(pokemonIndex, 1);
                player.pokemons.push(poke);
                dom.renderStorage();
                dom.renderPokeList();
            } else {
                dom.showPopup('You can only have six active pokemon!');
            }
        },
        forceSave: function () {
            player.savePokes();
            $('#forceSave').style.display = 'inline';
            setTimeout(() => { $('#forceSave').style.display = 'none'; }, 5000);
        },
        exportSaveDialog: function () {
            document.getElementById('saveDialogTitle').innerHTML = 'Export your save';
            if (document.queryCommandSupported('copy')) {
                document.getElementById('copySaveText').style.display = 'initial';
            }
            document.getElementById('saveText').value = player.saveToString();
            document.getElementById('loadButtonContainer').style.display = 'none';
            document.getElementById('saveDialogContainer').style.display = 'block';
            closeModal($('#settingsContainer'));
        },
        importSaveDialog: function () {
            document.getElementById('saveDialogTitle').innerHTML = 'Import a save';
            document.getElementById('copySaveText').style.display = 'none';
            document.getElementById('saveText').value = '';
            document.getElementById('loadButtonContainer').style.display = 'block';
            document.getElementById('saveDialogContainer').style.display = 'block';
            closeModal($('#settingsContainer'));
        },
        importSave: function () {
            if (window.confirm('Loading a save will overwrite your current progress, are you sure you wish to continue?')) {
                player.loadFromString(document.getElementById('saveText').value.trim());
                document.getElementById('saveDialogContainer').style.display = 'none';
                // reload everything
                renderView(dom, enemy, player);
                dom.renderListBox();
                dom.renderPokeList();
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
        changePokeSortOrder: function () {
            player.sortPokemon();
            player.savePokes();
            dom.renderStorage();
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
                'totalPokeCoins': 'Total Coin Obtained',
                'totalExp': 'Total Experience Earned',
            };
            let statList = '';
            for (const statValue in player.statistics) {
                statList += `<li>${statisticStrings[statValue]}: ${player.statistics[statValue]}</li>`;
            }
            document.getElementById('statisticsList').innerHTML = statList;
            document.getElementById('statisticsContainer').style.display = 'block';
        },
        viewAchievements: function () {
            let achievementHTML = '';
            let completeState; let
                complete;
            for (const subgroup in ACHIEVEMENTS.statistics) {
                for (let i = 0, count = ACHIEVEMENTS.statistics[subgroup].length; i < count; i++) {
                    complete = (player.statistics[subgroup] >= ACHIEVEMENTS.statistics[subgroup][i].value);
                    completeState = complete ? ACHIEVEMENTS.statistics[subgroup][i].value : player.statistics[subgroup];
                    achievementHTML += `<li${complete ? ' class="complete"' : ''}><b>${ACHIEVEMENTS.statistics[subgroup][i].name}</b>: ${camelCaseToString(subgroup)} ${completeState}/${ACHIEVEMENTS.statistics[subgroup][i].value}</li>`;
                }
            }
            for (let i = 0, count = ACHIEVEMENTS.dex.caughtCount.length; i < count; i++) {
                const progress = player.countPokedex(POKEDEXFLAGS.releasedNormal);
                complete = (progress >= ACHIEVEMENTS.dex.caughtCount[i].value);
                completeState = complete ? ACHIEVEMENTS.dex.caughtCount[i].value : progress;
                achievementHTML += `<li${complete ? ' class="complete"' : ''}><b>${ACHIEVEMENTS.dex.caughtCount[i].name}</b>: Unique Caught ${completeState}/${ACHIEVEMENTS.dex.caughtCount[i].value}</li>`;
            }
            for (let i = 0, count = ACHIEVEMENTS.dex.caught.length; i < count; i++) {
                let progress = 0;
                const needed = ACHIEVEMENTS.dex.caught[i].pokes.length;
                let string = '';
                for (let j = 0; j < needed; j++) {
                    const pokeName = ACHIEVEMENTS.dex.caught[i].pokes[j];
                    string += (j > 0) ? ', ' : '';
                    if (player.hasDexEntry(pokeName, POKEDEXFLAGS.releasedNormal)) {
                        string += `<s>${pokeName}</s>`;
                        progress++;
                    } else {
                        string += pokeName;
                    }
                }
                complete = (progress >= needed);
                completeState = complete ? needed : progress;
                achievementHTML += `<li${complete ? ' class="complete"' : ''}><b>${ACHIEVEMENTS.dex.caught[i].name}</b>: Catch ${string}</li>`;
            }
            document.getElementById('achievementsList').innerHTML = achievementHTML;
            document.getElementById('achievementsContainer').style.display = 'block';
        },
        viewInventory: function () {
            if (!isEmpty(player.badges)) {
                let badgesHTML = '';
                for (const badge in player.badges) {
                    badgesHTML += `${'<li><img src="assets/images/badges/'}${[badge]}.png"></img></li>`;
                }
                document.getElementById('badgeList').innerHTML = badgesHTML;
            }
            const inventoryHTML = 'To do';
            document.getElementById('inventoryList').innerHTML = inventoryHTML;
            document.getElementById('inventoryContainer').style.display = 'block';
        },
        viewTown: function () {
            town.renderPokeCoinShop();
            town.renderBattleCoinShop();
            town.renderCatchCoinShop();
            document.getElementById('townContainer').style.display = 'block';
        },
        trainerBattle: function () {
            const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
            if (routeData.trainer && routeData.trainer.poke.length > 0) {
                combatLoop.trainer = { name: routeData.trainer.name, badge: routeData.trainer.badge };
                combatLoop.trainerPoke = Object.values({ ...routeData.trainer.poke });
                combatLoop.unpause();
                combatLoop.refresh();
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
