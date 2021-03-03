import TYPES from './typeModifiers';
import { RNG, flash, $ } from './utilities';
import { POKEDEXFLAGS } from './data';
import ROUTES from './routes';
import { renderView } from './display';

export default (player, enemy) => {
    let dom;
    let userInteractions;

    const Combat = {
        paused: false,
        trainer: null,
        trainerPoke: {},
        trainerCurrentID: 0,
        playerActivePoke: null,
        enemyActivePoke: null,
        playerTimerId: null,
        enemyTimerId: null,
        catchEnabled: false,
        init: function () {
            if (!Combat.paused) {
                Combat.playerActivePoke = player.activePoke();
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
            const nextAttack = Combat.playerActivePoke.attackSpeed();
            Combat.playerTimerId = window.setTimeout(
                () => Combat.dealDamage(Combat.playerActivePoke, Combat.enemyActivePoke, 'player'),
                nextAttack,
            );
        },
        enemyTimer: function () {
            const nextAttack = Combat.enemyActivePoke.attackSpeed();
            Combat.enemyTimerId = window.setTimeout(
                () => Combat.dealDamage(Combat.enemyActivePoke, Combat.playerActivePoke, 'enemy'),
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
                const consoleColor = (who === 'player') ? 'green' : 'rgb(207, 103, 59)';
                // calculate damage done
                const missRNG = RNG(5);
                if (missRNG) {
                    dom.gameConsoleLog(`${attacker.pokeName()} missed!`, consoleColor);
                } else {
                    const critRNG = RNG(5);
                    const critMultiplier = (critRNG) ? 1 + (attacker.level() / 100) : 1;
                    const damageMultiplier = Combat.calculateDamageMultiplier(attacker.types(), defender.types()) * critMultiplier;
                    const damage = defender.takeDamage(attacker.avgAttack() * damageMultiplier);
                    if (critRNG) {
                        dom.gameConsoleLog('Critical Hit!!', consoleColor);
                    }
                    if (who === 'player') {
                    // TODO add some flair
                        dom.gameConsoleLog(`${attacker.pokeName()} Attacked for ${damage}`, 'green');
                        player.statistics.totalDamage += damage;
                    } else {
                    // TODO add some flair
                        dom.gameConsoleLog(`${attacker.pokeName()} Attacked for ${damage}`, 'rgb(207, 103, 59)');
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
            } else {
                player.statistics.beaten++;
            }
            Combat.attemptCatch();
            Combat.findPokeballs(enemy.activePoke().level());
            const foundPokeCoins = Math.floor(Combat.enemyActivePoke.level() * 4) + 5;
            player.addPokeCoins(foundPokeCoins);

            const beforeExp = player.getPokemon().map((poke) => poke.level());
            const expToGive = (Combat.enemyActivePoke.baseExp() / 16) + (Combat.enemyActivePoke.level() * 3);
            player.statistics.totalExp += expToGive;
            Combat.playerActivePoke.giveExp(expToGive);
            dom.gameConsoleLog(`${Combat.playerActivePoke.pokeName()} won ${Math.floor(expToGive)}xp`, 'rgb(153, 166, 11)');
            player.getPokemon().forEach((poke) => poke.giveExp((Combat.enemyActivePoke.baseExp() / 100) + (Combat.enemyActivePoke.level() / 10)));
            const afterExp = player.getPokemon().map((poke) => poke.level());

            // check if a pokemon leveled up
            if (beforeExp.join('') !== afterExp.join('')) {
                dom.gameConsoleLog('Your pokemon gained a level', 'rgb(153, 166, 11)');
                if (player.settings.listView == 'roster') {
                    dom.renderPokeList(false);
                }
            }

            // was it a trainer poke
            if (Combat.trainer) {
            // remove the pokemon
                Combat.trainerPoke.splice(Combat.trainerCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.trainerPoke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.trainerPoke.length < 1) {
                    dom.gameConsoleLog(`You have defeated ${Combat.trainer.name}`, 'blue');
                    if (Combat.trainer.badge) {
                        if (!player.badges[Combat.trainer.badge]) {
                            player.badges[Combat.trainer.badge] = true;
                            dom.gameConsoleLog(`You have earned the <b>${Combat.trainer.badge}</b>.`, 'purple');
                            dom.renderRouteList();
                        }
                    }
                    Combat.trainer = null;
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
            if (Combat.trainer) {
                enemy.trainerPoke(Combat.trainerPoke);
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
            dom.gameConsoleLog(`${Combat.playerActivePoke.pokeName()} Fainted! `);
            const alivePokeIndexes = player.alivePokeIndexes();
            if (alivePokeIndexes.length > 0) {
                player.setActive(player.getPokemon().indexOf(alivePokeIndexes[0]));
                Combat.playerActivePoke = player.activePoke();
                dom.gameConsoleLog(`Go ${Combat.playerActivePoke.pokeName()}!`);
                Combat.refresh();
            } else {
                dom.gameConsoleLog('You have no more usable pokemon. You blacked out!', 'red');
                if (Combat.trainer) {
                    dom.gameConsoleLog('You have been defeated', 'red');
                    Combat.trainer = null;
                    Combat.pause();
                }
                flash($('#gameContainer'));
                dom.gameConsoleLog('You reawaken at the nearest pokecenter.', 'blue');
                if (ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].respawn) {
                    userInteractions.changeRoute(ROUTES[player.settings.currentRegionId][player.settings.currentRouteId].respawn, true);
                }
            }
            dom.renderPokeList(false);
        },
        attemptCatch: function () {
            if (Combat.catchEnabled == 'all' && !Combat.trainer || (Combat.catchEnabled == 'new' && !player.hasPokemon(enemy.activePoke().pokeName(), 0)) && !Combat.trainer) {
                const selectedBall = (enemy.activePoke().shiny() ? player.bestAvailableBall() : player.selectedBall);
                if (player.consumeBall(selectedBall)) {
                // add throw to statistics
                    dom.gameConsoleLog(`Trying to catch ${enemy.activePoke().pokeName()}...`, 'purple');
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
                        dom.gameConsoleLog(`You caught ${enemy.activePoke().pokeName()}and gained${gainCatchCoins}!!`, 'purple');
                        if (!player.hasPokemon(enemy.activePoke().pokeName(), 0)) {
                            player.addPoke(enemy.activePoke(), 0);
                            dom.renderPokeList();
                        }
                        player.addPokedex(enemy.activePoke().pokeName(), (enemy.activePoke().shiny() ? POKEDEXFLAGS.ownShiny : POKEDEXFLAGS.ownNormal));
                        if (enemy.activePoke().shiny()) {
                            player.statistics.shinyCaught++;
                            player.unlocked.shinyDex = 1;
                        } else {
                            player.statistics.caught++;
                        }
                        renderView(dom, enemy, player);
                    } else {
                        dom.gameConsoleLog(`${enemy.activePoke().pokeName()} escaped!!`, 'purple');
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
                    dom.gameConsoleLog(`You found ${ballsAmount} ${ballName}s!!`, 'purple');
                    dom.renderBalls();
                }
            }
        },
        changePlayerPoke: function (newPoke) {
            Combat.playerActivePoke = newPoke;
            Combat.refresh();
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
