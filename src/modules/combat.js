/* eslint-disable no-redeclare */
import TYPES from './typeModifiers';
import { RNG, flash, $ } from './utilities';
import { POKEDEXFLAGS, PokemonTypes } from './data';
import ROUTES from './routes';
import { renderView } from './display';
import { openModal, closeModal } from './modalEvents';
import Poke from './poke';
import POKEDEX from './db';
import actions from '../store/actions';
import notify from './notify';

export default (player, enemy) => {
    let dom;
    let userInteractions;

    const Combat = {
        paused: false,
        prof: null,
        profPoke: {},
        gymLeader: null,
        gymLeaderPoke: {},
        npc: null,
        npcPoke: {},
        profCurrentID: 0,
        gymLeaderCurrentID: 0,
        npcCurrentID: 0,
        enemyActivePoke: null,
        playerTimerId: null,
        enemyTimerId: null,
        catchEnabled: false,
        init: function () {
            if (!Combat.paused) {
                Combat.enemyActivePoke = enemy.activePoke();
                Combat.playerTimer();
                Combat.enemyTimer();
            }
        },
        pause: function () {
            Combat.paused = true;
            Combat.stop();
            enemy.clear();
            Combat.enemyActivePoke = null;
        },
        unpause: function () {
            Combat.paused = false;
            Combat.stop();
            Combat.newEnemy();
            Combat.init();
        },
        stop: function () {
            window.clearTimeout(Combat.playerTimerId);
            window.clearTimeout(Combat.enemyTimerId);
        },
        refresh: function () {
            Combat.stop();
            Combat.init();
        },
        playerTimer: function () {
            const nextAttack = player.activePoke().attackSpeed();
            Combat.playerTimerId = window.setTimeout(
                () => Combat.dealDamage(player.activePoke(), Combat.enemyActivePoke, 'player'),
                nextAttack,
            );
        },
        enemyTimer: function () {
            const nextAttack = Combat.enemyActivePoke.attackSpeed();
            Combat.enemyTimerId = window.setTimeout(
                () => Combat.dealDamage(Combat.enemyActivePoke, player.activePoke(), 'enemy'),
                nextAttack,
            );
        },
        calculateDamageMultiplier: function (attackingTypes, defendingTypes) {
            const typeEffectiveness = (attackingType, defendingTypes) => TYPES[attackingType][defendingTypes[0]] * (defendingTypes[1] && TYPES[attackingType][defendingTypes[1]] || 1);
            return Math.max(
                typeEffectiveness(attackingTypes[0], defendingTypes),
                attackingTypes[1] && typeEffectiveness(attackingTypes[1], defendingTypes) || 0,
            );
        },
        dealDamage: function (attacker, defender, who) {
            if (!attacker || !defender) return null;
            if (attacker.alive() && defender.alive()) {
                // calculate damage done
                const missRNG = RNG(5);
                if (!missRNG) {
                    const critRNG = RNG(5);
                    const critMultiplier = (critRNG) ? 1 + (attacker.level() / 100) : 1;
                    const damageMultiplier = Combat.calculateDamageMultiplier(attacker.types(), defender.types()) * critMultiplier;
                    const damage = defender.takeDamage(attacker.avgAttack() * damageMultiplier);
                    if (who === 'player') {
                    // TODO add some flair
                    }
                    dom.renderPokeOnContainer('enemy', enemy.activePoke());
                    dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back');
                }
                if (who === 'player') {
                    dom.attackAnimation('playerImg', 'right');
                    Combat.playerTimer();
                } else {
                    dom.attackAnimation('enemyImg', 'left');
                    Combat.enemyTimer();
                }
            }
            if (!attacker.alive() || !defender.alive()) {
            // one is dead
                window.clearTimeout(Combat.playerTimerId);
                window.clearTimeout(Combat.enemyTimerId);

                if ((who === 'enemy') && !attacker.alive()
                || (who === 'player') && !defender.alive()) {
                    Combat.enemyFaint();
                } else {
                    Combat.playerFaint();
                }
                dom.renderPokeOnContainer('enemy', enemy.activePoke());
            }
        },
        clickDamage: function () {
            if (!enemy.activePoke()) return null;
            if (enemy.activePoke().alive()) {
                const damageMultiplier = player.activePoke().avgAttack() + player.activePoke().level();
                const damage = enemy.activePoke().takeDamage(damageMultiplier);
                dom.renderPokeOnContainer('enemy', enemy.activePoke());
            }
            if (!enemy.activePoke().alive()) {
                window.clearTimeout(Combat.playerTimerId);
                window.clearTimeout(Combat.enemyTimerId);
                Combat.enemyFaint();
            }
            dom.renderPokeOnContainer('enemy', enemy.activePoke());
        },
        enemyFaint: function () {
            if (enemy.activePoke().shiny()) {
                player.statistics.shinyBeaten++;
            }
            for (let x = 0; x < player.defeatedWith.length; x++) {
                if (player.activePoke().pokeName() === player.defeatedWith[x]) {
                    player.defeatedWith[x]++;
                }
            }
            for (let a = 0; a < enemy.activePoke().types().length; a++) {
                player.typeStats.defeatedType[enemy.activePoke().types()[a]]++;
            }
            player.statistics.beaten++;
            Combat.attemptCatch();
            const foundPokeCoins = Math.floor(Combat.enemyActivePoke.level() * 4);
            player.addPokeCoins(foundPokeCoins);

            const beforeExp = player.getPokemon().map((poke) => poke.level());
            const expToGive = (Combat.enemyActivePoke.baseExp() / 16) * 10000;
            player.statistics.totalExp += expToGive;
            player.activePoke().giveExp(expToGive);
            player.getPokemon().forEach((poke) => poke.giveExp((Combat.enemyActivePoke.baseExp() / 100) + (Combat.enemyActivePoke.level() / 10)));
            const afterExp = player.getPokemon().map((poke) => poke.level());

            // was it a prof poke
            if (Combat.prof) {
            // remove the pokemon
                Combat.profPoke.splice(Combat.profCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.profPoke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.profPoke.length < 1) {
                    if (Combat.prof.badge) {
                        if (!player.badges[Combat.prof.badge]) {
                            player.badges[Combat.prof.badge] = true;
                            dom.renderRouteList();
                        }
                    }
                    if (Combat.prof.win) {
                        if (!player.wins[Combat.prof.win]) {
                            player.wins[Combat.prof.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    if (Combat.prof.reward) {
                        if (!player.unlocked[Combat.prof.reward]) {
                            player.unlocked[Combat.prof.reward] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.prof = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.npc) {
            // remove the pokemon
                Combat.npcPoke.splice(Combat.npcCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.npcPoke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.npcPoke.length < 1) {
                    if (Combat.npc.event) {
                        if (!player.events[Combat.npc.event]) {
                            player.events[Combat.npc.event] = true;
                            dom.renderRouteList();
                        }
                    }
                    notify('Congratulations! You\'ve won the trainer battle!');
                    Combat.npc = null;
                    Combat.init();
                    return false;
                }
            }
            // was it a gymLeader poke
            if (Combat.gymLeader) {
            // remove the pokemon
                Combat.gymLeaderPoke.splice(Combat.gymLeaderCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.gymLeaderPoke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.gymLeaderPoke.length < 1) {
                    if (Combat.gymLeader.badge) {
                        if (!player.badges[Combat.gymLeader.badge]) {
                            player.badges[Combat.gymLeader.badge] = true;
                            dom.renderRouteList();
                        }
                    }
                    if (Combat.gymLeader.win) {
                        if (!player.wins[Combat.gymLeader.win]) {
                            player.wins[Combat.gymLeader.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.gymLeader = null;
                    Combat.pause();
                    return false;
                }
            }

            if (player.checkBoostedRoamer()) {
                dom.renderRouteList();
            }

            player.savePokes();
            Combat.newEnemy();
            Combat.enemyTimer();
            Combat.playerTimer();
            dom.renderPokeOnContainer('player', player.activePoke(), player.settings.spriteChoice || 'back');
        },
        newEnemy: function () {
            if (Combat.prof) {
                enemy.profPoke(Combat.profPoke);
            } else if (Combat.gymLeader) {
                enemy.gymLeaderPoke(Combat.gymLeaderPoke);
            } else if (Combat.npc) {
                enemy.npcPoke(Combat.npcPoke);
            } else {
                enemy.generateNew(player.settings.currentRegionId, player.settings.currentRouteId);
            }
            Combat.enemyActivePoke = enemy.activePoke();
            player.addPokedex(enemy.activePoke().pokeName(), (enemy.activePoke().shiny() ? POKEDEXFLAGS.seenShiny : POKEDEXFLAGS.seenNormal));
            if (enemy.activePoke().shiny()) {
                player.statistics.shinySeen++;
            } else {
                player.statistics.seen++;
            }
        },
        playerFaint: function () {
            const alivePokeIndexes = player.alivePokeIndexes();
            if (alivePokeIndexes.length > 0) {
                player.setActive(player.getPokemon().indexOf(alivePokeIndexes[0]));
                Combat.refresh();
            } else {
                if (Combat.prof) {
                    Combat.prof = null;
                    Combat.pause();
                }
                if (Combat.gymLeader) {
                    Combat.gymLeader = null;
                    Combat.pause();
                }
                if (Combat.npc) {
                    Combat.npc = null;
                    Combat.pause();
                }
                flash($('#gameContainer'));
                const routeData = ROUTES[player.settings.currentRegionId][player.settings.currentRouteId];
                if (routeData.respawn) {
                    userInteractions.changeRoute(ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].respawn, true);
                    openModal(document.getElementById(`${player.settings.currentRouteId.replace(/ /g, '').toLowerCase()}Modal`));
                }
            }
        },
        attemptCatch: function () {
            if (
                !Combat.prof && !Combat.gymLeader && !Combat.npc && (
                    (Combat.catchEnabled == 'all')
                    || (Combat.catchEnabled == 'new' && !player.hasPokemonLike(enemy.activePoke()))
                )
            ) {
                const selectedBall = (enemy.activePoke().shiny() ? player.bestAvailableBall() : player.selectedBall);
                if (player.consumeBall(selectedBall)) {
                // add throw to statistics
                    player.statistics.totalThrows++;
                    player.statistics[`${selectedBall}Throws`]++;
                    dom.renderBalls();
                    const gainCatchCoins = Math.floor(Combat.enemyActivePoke.level() * 1) + 1;
                    const catchBonus = (player.unlocked.razzBerry) ? 1.25 : 1;
                    const rngHappened = RNG(((enemy.activePoke().catchRate() * player.ballRNG(selectedBall)) / 3) * catchBonus);
                    if (rngHappened) {
                        player.statistics.successfulThrows++;
                        player.statistics.caught++;
                        player.statistics[`${selectedBall}SuccessfulThrows`]++;
                        player.addCatchCoins(gainCatchCoins);
                        if (player.hasPokemonLike(enemy.activePoke())) {
                            if (dom.checkConfirmed('#oldCaughtNotification')) {
                                notify(`You caught ${enemy.activePoke().pokeName()}`);
                            }
                        }
                        if (!player.hasPokemonLike(enemy.activePoke())) {
                            player.addPoke(enemy.activePoke());
                            if (dom.checkConfirmed('#newCaughtNotification')) {
                                notify(`You caught ${enemy.activePoke().pokeName()}`);
                            }
                        }
                        player.addPokedex(enemy.activePoke().pokeName(), (enemy.activePoke().shiny() ? POKEDEXFLAGS.ownShiny : POKEDEXFLAGS.ownNormal));
                        if (enemy.activePoke().shiny()) {
                            player.statistics.shinyCaught++;
                        } else {
                            player.statistics.caught++;
                        }
                        renderView(dom, enemy, player);
                    }
                    if (!rngHappened) {
                        if (dom.checkConfirmed('#missCatchNotification')) {
                            notify(`You did not catch ${enemy.activePoke().pokeName()}`);
                        }
                    }
                }
            }
        },
        changeEnemyPoke: function (newPoke) {
            Combat.enemyActivePoke = newPoke;
            Combat.refresh();
        },
        changeCatch: function (shouldCatch) { Combat.catchEnabled = shouldCatch; },
        attachDOM: (_dom) => {
            dom = _dom;
        },
        attachUI: (_ui) => userInteractions = _ui,
    };

    return Combat;
};
