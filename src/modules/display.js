// eslint-disable-next-line object-curly-newline
import { $, flash, pokeByName, requirementMetGenerator } from './utilities';
import ROUTES from './routes';
import { COLORS } from './data';
import Poke from './poke';

export const renderView = (dom, enemy, player, purge = true) => {
    dom.renderPokeOnContainer('enemy', enemy.activePoke());
    dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back');
};

export default (player, combatLoop, userInteractions) => {
    const Display = {
        healElement: $('#heal'),
        renderInitial: function () {
            this.bindEvents();
            this.renderBalls();
            this.renderCurrency();
            this.renderRoutesBox();
            this.renderRegionSelect();
            this.renderPokeSort();
            this.renderSavedTheme();
        },
        renderSavedTheme: function () {
            const savedTheme = player.settings.theme;
            this.renderTheme(savedTheme);
        },
        renderTheme: function (theme) {
            switch (theme) {
            case 'light': this.fulfillRenderTheme('rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'black');
                break;
            case 'dark': this.fulfillRenderTheme('rgb(58, 58, 58)', 'rgb(255, 255, 255)', 'white');
                break;
            default: alert('Error');
            }
        },
        fulfillRenderTheme: function (gCBGColor, gCTextColor, subsColor) {
            const gameContainer = document.getElementById('gameContainer').style;
            const subs = document.getElementsByClassName('subtitle');
            const buttonClass = document.getElementsByClassName('button');
            const buttonTag = document.getElementsByTagName('button');
            const modalHead = document.getElementsByClassName('modal-card-head');
            const modalBody = document.getElementsByClassName('modal-card-body');
            const modalFoot = document.getElementsByClassName('modal-card-foot');
            gameContainer.backgroundColor = gCBGColor;
            gameContainer.color = gCTextColor;
            this.loopColorChange(subs, subsColor);
            this.loopButtonChange(buttonClass, subsColor);
            this.loopButtonChange(buttonTag, subsColor);
            this.loopBackgroundChange(modalHead, gCBGColor, gCTextColor);
            this.loopBackgroundChange(modalBody, gCBGColor, gCTextColor);
            this.loopBackgroundChange(modalFoot, gCBGColor, gCTextColor);
        },
        loopColorChange: function (whatToLoop, newColor) {
            let i = 0;
            while (whatToLoop.length > i) {
                whatToLoop[i].style.color = newColor;
                i++;
            }
        },
        loopBackgroundChange: function (whatToLoop, newColor, gCTextColor) {
            let i = 0;
            while (whatToLoop.length > i) {
                whatToLoop[i].style.backgroundColor = newColor;
                whatToLoop[i].style.color = gCTextColor;
                i++;
            }
        },
        loopButtonChange: function (whatToLoop, newColor) {
            let i = 0;
            while (whatToLoop.length > i) {
                whatToLoop[i].style.color = newColor;
                whatToLoop[i].style.borderColor = newColor;
                i++;
            }
        },
        hideAll: function (parentElement) {
            const parentOfChild = document.getElementById(parentElement);
            let i = 0;
            while (parentOfChild.children.length > i) {
                parentOfChild.children[i].style.display = 'none';
                i++;
            }
        },
        setValue: function (domElement, newValue, append) {
            if (append === undefined) { append = false; }
            if (append) {
                domElement.innerHTML += newValue;
            }
            if (!append) {
                if (domElement.innerHTML !== newValue) {
                    domElement.innerHTML = newValue;
                }
            }
        },
        getValue: function (domElement) {
            return domElement.innerHTML;
        },
        setProp: function (domElement, attribute, newValue) {
            if (domElement[attribute] !== newValue) {
                domElement[attribute] = newValue;
            }
        },
        renderPokeOnContainer: function (id, poke, face) {
            const container = $(`#${id}Box`).querySelector('.pokeBox');
            const townBox = $('#townBox');
            if (!poke) {
                container.style.display = 'none';
                if (id == 'enemy') {
                    townBox.style.display = 'block';
                }
                return null;
            }
            container.style.display = 'block';
            if (id == 'enemy') townBox.style.display = 'none';

            face = face || 'front';
            const pokeStatusAsText = (poke) => {
                let output = '';
                output += `Attack Speed: ${poke.attackSpeed() / 1000}<br>`;
                output += `\nAttack: ${poke.avgAttack()}<br>`;
                output += `\nDefense: ${poke.avgDefense()}<br>`;
                return output;
            };
            const domElements = {
                name: container.querySelector('.name'),
                img: container.querySelector('.img'),
                hp: container.querySelector('.hp'),
                hpBar: container.querySelector('.hpBar'),
                expBar: container.querySelector('.expBar'),
                status: container.querySelector('.status'),
            };
            this.setValue(domElements.name, `${poke.pokeName()} (L${poke.level()}, P${poke.prestigeLevel})`);
            this.setProp(domElements.img, 'src', poke.image()[face]);
            this.setValue(domElements.hp, poke.lifeAsText());
            this.setProp(domElements.hpBar, 'value', poke.getHp());
            this.setProp(domElements.hpBar, 'max', poke.maxHp());
            if (id === 'player') {
                this.setProp(domElements.expBar, 'value', Math.floor(poke.currentExp() - poke.thisLevelExp()));
                this.setProp(domElements.expBar, 'max', poke.nextLevelExp() - poke.thisLevelExp());
            }
            this.setValue(domElements.status, pokeStatusAsText(poke));
        },
        renderHeal: function (timeToHeal, enemy) {
            if (timeToHeal <= 0) {
                this.setValue(this.healElement, 'Heal!');
                player.healAllPokemons();
                combatLoop.refresh();
                renderView(Display, enemy, player, false);
            } else {
                this.setValue(this.healElement, `Heal: ${Math.floor(((1 - timeToHeal / 30000) * 100))}%`);
            }
        },
        pokeStatus: function (poke) {
            if (poke.alive()) {
                if (poke === player.activePoke()) {
                    if (poke.shiny()) {
                        return 'activeShiny';
                    }
                    return 'activeNormal';
                }
                if (poke.shiny()) {
                    return 'inactiveShiny';
                }
                return 'inactiveNormal';
            }
            return 'dead';
        },
        renderPokeSort: function () {
            $('#autoSort').checked = player.settings.autoSort;
            if (player.settings.autoSort) {
                $('#pokeSortOrderSelect').style.display = 'inline';
                $('#pokeSortDirSelect').style.display = 'inline';
            } else {
                $('#pokeSortOrderSelect').style.display = 'none';
                $('#pokeSortDirSelect').style.display = 'none';
            }
        },
        renderRegionSelect: function () {
            for (const region in ROUTES) {
                if (player.regionUnlocked(region)) {
                    return true;
                } return false;
            }
        },
        renderRouteList: function () {
            const requirementMet = requirementMetGenerator(player);
            this.renderRegionSelect();
            const routes = ROUTES[player.settings.currentRegionId];
            const listElement = $('#routeList');
            $('#regionSelect').value = player.settings.currentRegionId;
            this.setValue(listElement, '');
            Object.keys(routes).forEach((routeId) => {
                if (routeId !== '_unlock' && routeId !== '_global') {
                    const route = routes[routeId];
                    const unlocked = player.routeUnlocked(player.settings.currentRegionId, routeId);
                    const routeOnClick = (unlocked) ? `userInteractions.changeRoute('${routeId}')` : '';
                    let routeColor; let
                        routeWeight;
                    if (unlocked) {
                        const isCurrentRoute = (routeId === player.settings.currentRouteId);
                        routeColor = isCurrentRoute ? COLORS.route.current : COLORS.route.unlocked;
                        routeWeight = isCurrentRoute ? 'bold' : 'normal';
                        if (route.pokes) {
                            let status = 2; // 2 for shiny caught, 1 for regular caught, 0 for missing
                            let encounters = route.pokes || [];
                            if (route._special) {
                                encounters = encounters.concat(route._special.filter(requirementMet).flatMap((s) => s.pokemon));
                            }
                            for (let i = 0; i < encounters.length; i++) {
                                const encounter = encounters[i];
                                const encounterPokemon = new Poke(pokeByName(encounter), 1, 0, false);
                                if (!player.hasPokemonLike(encounterPokemon)) {
                                    status = 0;
                                    break;
                                }
                                encounterPokemon.isShiny = true;
                                if (status === 2 && !player.hasPokemonLike(encounterPokemon)) {
                                    status = 1;
                                }
                            }
                            if (status === 2) {
                                routeColor = isCurrentRoute ? COLORS.route.currentCaughtAllShinies : COLORS.route.caughtAllShinies;
                            } else if (status === 1) {
                                routeColor = isCurrentRoute ? COLORS.route.currentCaughtAll : COLORS.route.caughtAll;
                            }
                        }
                    } else {
                        routeColor = COLORS.route.locked;
                        routeWeight = 'normal';
                    }
                    const boostedRoamer = player.routeGetBoostedRoamer(player.settings.currentRegionId, routeId);
                    const roamerIcon = boostedRoamer ? (`<img class="roamerIcon" src="assets/images/roamers/${boostedRoamer}.png">`) : '';
                    const routeLevels = (!route.town) ? ` (${route.minLevel}~${route.maxLevel})` : '';
                    const routeHTML = `<li><a href="#" onclick="${routeOnClick}" style="color: ${routeColor}; font-weight: ${routeWeight};" >${route.name}${routeLevels}</a>${roamerIcon}</li>`;
                    this.setValue(listElement, routeHTML, true);
                }
            });
        },
        renderRoutesBox: function () {
            this.renderRouteList();
        },
        checkConfirmed: function (id) {
            return $(id).checked;
        },
        attackAnimation: function (id, direction) {
            const toAnimate = $(`#${id}`);
            toAnimate.classList = `img attacked-${direction}`;
            window.setTimeout(() => toAnimate.classList = 'img', 80);
        },
        renderBalls: function () {
            Object.keys(player.ballsAmount).forEach((ballType) => {
                $(`.ball-amount.${ballType}`).innerHTML = player.ballsAmount[ballType];
            });
        },
        renderPokeCoins: function () {
            const pokeCoinsElement = $('#pokeCoins');
            pokeCoinsElement.innerHTML = player.currencyAmount.pokecoins;
        },
        renderCatchCoins: function () {
            const catchCoinsElement = $('#catchCoins');
            catchCoinsElement.innerHTML = player.currencyAmount.catchcoins;
        },
        renderBattleCoins: function () {
            const battleCoinsElement = $('#battleCoins');
            battleCoinsElement.innerHTML = player.currencyAmount.battlecoins;
        },
        renderCurrency: function () {
            this.renderBattleCoins();
            this.renderCatchCoins();
            this.renderPokeCoins();
        },
        renderRevive: function () {
            const reviveElement = $('#revive');
            reviveElement.innerHTML = player.battleItems.revive;
        },
        renderMaxRevive: function () {
            const maxReviveElement = $('#maxRevive');
            maxReviveElement.innerHTML = player.battleItems.maxRevive;
        },
        renderBattleItems: function () {
            this.renderRevive();
            this.renderMaxRevive();
        },
        refreshCatchOption: function (setCatchOption) {
            $('#enableCatchNew').checked = false;
            $('#enableCatchAll').checked = false;
            if (setCatchOption === 'new') {
                $('#enableCatchNew').checked = true;
            } else if (setCatchOption === 'all') {
                $('#enableCatchAll').checked = true;
            }
            userInteractions.changeCatchOption(setCatchOption);
        },
        showPopup: function (message) {
            $('#modalPopup').style.display = 'flex';
            $('#modalPopup #popupText').innerText = message;
            setTimeout(this.hidePopup, 2000);
        },
        hidePopup: function () {
            $('#modalPopup').style.display = 'none';
            $('#modalPopup #popupText').innerText = '';
        },
        bindEvents: function () {
            $('#autoSort').addEventListener('click', () => {
                userInteractions.enablePokeListAutoSort();
            });

            $('#enableCatchAll').addEventListener('click',
                () => {
                    let setCatchSetting;
                    if ($('#enableCatchAll').checked) {
                        $('#enableCatchNew').checked = false;
                        setCatchSetting = 'all';
                    } else {
                        setCatchSetting = false;
                    }
                    player.settings.catching = setCatchSetting;
                    userInteractions.changeCatchOption(setCatchSetting);
                });

            $('#enableCatchNew').addEventListener('click',
                () => {
                    let setCatchSetting;
                    if ($('#enableCatchNew').checked) {
                        $('#enableCatchAll').checked = false;
                        setCatchSetting = 'new';
                    } else {
                        setCatchSetting = false;
                    }
                    player.settings.catching = setCatchSetting;
                    userInteractions.changeCatchOption(setCatchSetting);
                });

            window.addEventListener('beforeunload', () => {
                if (!player.purgeData) player.savePokes(true);
            });
        },
    };

    return Display;
};
