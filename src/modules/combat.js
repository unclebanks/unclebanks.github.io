/* eslint-disable no-redeclare */
import TYPES from './typeModifiers';
import { RNG, flash, $ } from './utilities';
import { POKEDEXFLAGS } from './data';
import ROUTES from './routes';
import { renderView } from './display';
import Poke from './poke';
import POKEDEX from './db';

export default (player, enemy) => {
    let dom;
    let userInteractions;

    const Combat = {
        paused: false,
        prof: null,
        profPoke: {},
        prof1: null,
        prof1Poke: {},
        prof2: null,
        prof2Poke: {},
        prof3: null,
        prof3Poke: {},
        gymLeader: null,
        gymLeaderPoke: {},
        gymLeader1: null,
        gymLeader1Poke: {},
        gymLeader2: null,
        gymLeader2Poke: {},
        gymLeader3: null,
        gymLeader3Poke: {},
        profCurrentID: 0,
        gymLeaderCurrentID: 0,
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
        enemyFaint: function () {
            if (enemy.activePoke().shiny()) {
                player.statistics.shinyBeaten++;
            }
            Combat.attemptCatch();
            Combat.findPokeballs(enemy.activePoke().level());
            const foundPokeCoins = Math.floor(Combat.enemyActivePoke.level() * 4) + 5;
            player.addPokeCoins(foundPokeCoins);

            const beforeExp = player.getPokemon().map((poke) => poke.level());
            const expToGive = (Combat.enemyActivePoke.baseExp() / 16) + (Combat.enemyActivePoke.level() * 3);
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
            if (Combat.prof1) {
            // remove the pokemon
                Combat.prof1Poke.splice(Combat.profCurrentID, 2);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.prof1Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.prof1Poke.length < 1) {
                    if (Combat.prof1.win) {
                        if (!player.wins[Combat.prof1.win]) {
                            player.wins[Combat.prof1.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.prof1 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.prof2) {
            // remove the pokemon
                Combat.prof2Poke.splice(Combat.profCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.prof2Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.prof2Poke.length < 1) {
                    if (Combat.prof2.win) {
                        if (!player.wins[Combat.prof2.win]) {
                            player.wins[Combat.prof2.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.prof2 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.prof3) {
            // remove the pokemon
                Combat.prof3Poke.splice(Combat.profCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.prof3Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.prof3Poke.length < 1) {
                    let renderRouteList = false;
                    if (Combat.prof3.win) {
                        if (!player.wins[Combat.prof3.win]) {
                            player.wins[Combat.prof3.win] = true;
                            renderRouteList = true;
                        }
                    }
                    if (Combat.prof3.reward) {
                        if (!player.unlocked[Combat.prof3.reward]) {
                            player.unlocked[Combat.prof3.reward] = true;
                            renderRouteList = true;
                        }
                    }
                    if (Combat.prof3.megaStone && player.unlocked.megaBracelet === true) {
                        if (player.megaStones[Combat.prof3.megaStone] === 0) {
                            player.megaStones[Combat.prof3.megaStone] += 1;
                            renderRouteList = true;
                        }
                    }
                    if (Combat.prof3.megaStones && player.unlocked.megaBracelet === true) {
                        for (let i = 0; i < Combat.prof3.megaStones.length; i++) {
                            const megaStone = Combat.prof3.megaStones[i];
                            if (player.megaStones[megaStone] === 0) {
                                player.megaStones[megaStone] += 1;
                                renderRouteList = true;
                            }
                        }
                    }
                    if (Combat.prof3.name === 'Prof. Oak') {
                        if (!player.hasPokemon('Bulbasaur')) {
                            player.addPoke(new Poke(POKEDEX[0], 5));
                        }
                        if (!player.hasPokemon('Squirtle')) {
                            player.addPoke(new Poke(POKEDEX[9], 5));
                        }
                        if (!player.hasPokemon('Charmander')) {
                            player.addPoke(new Poke(POKEDEX[4], 5));
                        }
                    }
                    if (Combat.prof3.name === 'Prof. Elm') {
                        if (!player.hasPokemon('Chikorita')) {
                            player.addPoke(new Poke(POKEDEX[184], 5));
                        }
                        if (!player.hasPokemon('Cyndaquil')) {
                            player.addPoke(new Poke(POKEDEX[187], 5));
                        }
                        if (!player.hasPokemon('Totodile')) {
                            player.addPoke(new Poke(POKEDEX[190], 5));
                        }
                    }
                    if (Combat.prof3.name === 'Prof. Birch') {
                        if (!player.hasPokemon('Treecko')) {
                            player.addPoke(new Poke(POKEDEX[284], 5));
                        }
                        if (!player.hasPokemon('Torchic')) {
                            player.addPoke(new Poke(POKEDEX[287], 5));
                        }
                        if (!player.hasPokemon('Mudkip')) {
                            player.addPoke(new Poke(POKEDEX[290], 5));
                        }
                    }
                    if (renderRouteList) {
                        dom.renderRouteList();
                    }
                    Combat.prof3 = null;
                    Combat.pause();
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
            if (Combat.gymLeader1) {
            // remove the pokemon
                Combat.gymLeader1Poke.splice(Combat.gymLeaderCurrentID, 2);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.gymLeader1Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.gymLeader1Poke.length < 1) {
                    if (Combat.gymLeader1.win) {
                        if (!player.wins[Combat.gymLeader1.win]) {
                            player.wins[Combat.gymLeader1.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.gymLeader1 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.gymLeader2) {
            // remove the pokemon
                Combat.gymLeader2Poke.splice(Combat.gymLeaderCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.gymLeader2Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.gymLeader2Poke.length < 1) {
                    if (Combat.gymLeader2.win) {
                        if (!player.wins[Combat.gymLeader2.win]) {
                            player.wins[Combat.gymLeader2.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.gymLeader2 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.gymLeader3) {
            // remove the pokemon
                Combat.gymLeader3Poke.splice(Combat.gymLeaderCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.gymLeader3Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.gymLeader3Poke.length < 1) {
                    if (Combat.gymLeader3.win) {
                        if (!player.wins[Combat.gymLeader3.win]) {
                            player.wins[Combat.gymLeader3.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    if (Combat.gymLeader3.reward) {
                        if (!player.unlocked[Combat.gymLeader3.reward]) {
                            player.unlocked[Combat.gymLeader3.reward] = true;
                            dom.renderRouteList();
                        }
                    }
                    if (Combat.gymLeader3.megaStone && player.unlocked.megaBracelet === true) {
                        if (player.megaStones[Combat.gymLeader3.megaStone] === 0) {
                            player.megaStones[Combat.gymLeader3.megaStone] += 1;
                            dom.renderRouteList();
                        }
                    }
                    Combat.gymLeader3 = null;
                    Combat.pause();
                    return false;
                }
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
            } else if (Combat.prof1) {
                enemy.prof1Poke(Combat.prof1Poke);
            } else if (Combat.prof2) {
                enemy.prof2Poke(Combat.prof2Poke);
            } else if (Combat.prof3) {
                enemy.prof3Poke(Combat.prof3Poke);
            } else if (Combat.gymLeader) {
                enemy.gymLeaderPoke(Combat.gymLeaderPoke);
            } else if (Combat.gymLeader1) {
                enemy.gymLeader1Poke(Combat.gymLeader1Poke);
            } else if (Combat.gymLeader2) {
                enemy.gymLeader2Poke(Combat.gymLeader2Poke);
            } else if (Combat.gymLeader3) {
                enemy.gymLeader3Poke(Combat.gymLeader3Poke);
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
                if (Combat.prof1) {
                    Combat.prof1 = null;
                    Combat.pause();
                }
                if (Combat.prof2) {
                    Combat.prof2 = null;
                    Combat.pause();
                }
                if (Combat.prof3) {
                    Combat.prof3 = null;
                    Combat.pause();
                }
                if (Combat.gymLeader) {
                    Combat.gymLeader = null;
                    Combat.pause();
                }
                if (Combat.gymLeader1) {
                    Combat.gymLeader1 = null;
                    Combat.pause();
                }
                if (Combat.gymLeader2) {
                    Combat.gymLeader2 = null;
                    Combat.pause();
                }
                if (Combat.gymLeader3) {
                    Combat.gymLeader3 = null;
                    Combat.pause();
                }
                flash($('#gameContainer'));
                if (ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].respawn) {
                    userInteractions.changeRoute(ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].respawn, true);
                }
            }
        },
        attemptCatch: function () {
            if (
                !Combat.prof && !Combat.prof1 && !Combat.prof2 && !Combat.prof3 && !Combat.gymLeader && !Combat.gymLeader1 && !Combat.gymLeader2 && !Combat.gymLeader3 && (
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
                        player.statistics[`${selectedBall}SuccessfulThrows`]++;
                        player.addCatchCoins(gainCatchCoins);
                        if (!player.hasPokemonLike(enemy.activePoke())) {
                            player.addPoke(enemy.activePoke());
                        }
                        player.addPokedex(enemy.activePoke().pokeName(), (enemy.activePoke().shiny() ? POKEDEXFLAGS.ownShiny : POKEDEXFLAGS.ownNormal));
                        if (enemy.activePoke().shiny()) {
                            player.statistics.shinyCaught++;
                            player.unlocked.shinyDex = 1;
                        } else {
                            player.statistics.caught++;
                        }
                        renderView(dom, enemy, player);
                    }
                }
            }
        },
        findPokeballs: function (pokeLevel) {
            const ballsAmount = Math.floor(Math.random() * (pokeLevel / 2)) + 1;
            const ballWeights = {
                'ultraball': 10,
                'greatball': 20,
                'pokeball': 100,
            };
            const rng = Math.floor(Math.random() * (2000 - (pokeLevel * 4)));
            for (const ballName in ballWeights) {
                if (rng < ballWeights[ballName]) {
                    player.addBalls(ballName, ballsAmount);
                    dom.renderBalls();
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
