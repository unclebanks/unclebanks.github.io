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
        trainer1: null,
        trainer1Poke: {},
        trainer2: null,
        trainer2Poke: {},
        trainer3: null,
        trainer3Poke: {},
        trainerCurrentID: 0,
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
                        player.statistics.totalDamage += damage;
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
            if (enemy.activePoke().types() == 'Fire') {
                player.statistics.fireBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Normal') {
                player.statistics.fireBeaten += 1;
                player.statistics.normalBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Water') {
                player.statistics.fireBeaten += 1;
                player.statistics.waterBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Electric') {
                player.statistics.fireBeaten += 1;
                player.statistics.electricBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Ice') {
                player.statistics.fireBeaten += 1;
                player.statistics.iceBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Fighting') {
                player.statistics.fireBeaten += 1;
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Poison') {
                player.statistics.fireBeaten += 1;
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Ground') {
                player.statistics.fireBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Flying') {
                player.statistics.fireBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Psychic') {
                player.statistics.fireBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Bug') {
                player.statistics.fireBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Rock') {
                player.statistics.fireBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Ghost') {
                player.statistics.fireBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Dark') {
                player.statistics.fireBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Dragon') {
                player.statistics.fireBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fire' && 'Steel') {
                player.statistics.fireBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water') {
                player.statistics.waterBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Normal') {
                player.statistics.waterBeaten += 1;
                player.statistics.normalBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Grass') {
                player.statistics.waterBeaten += 1;
                player.statistics.grassBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Electric') {
                player.statistics.waterBeaten += 1;
                player.statistics.electricBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Ice') {
                player.statistics.waterBeaten += 1;
                player.statistics.iceBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Fighting') {
                player.statistics.waterBeaten += 1;
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Poison') {
                player.statistics.waterBeaten += 1;
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Ground') {
                player.statistics.waterBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Flying') {
                player.statistics.waterBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Psychic') {
                player.statistics.waterBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Bug') {
                player.statistics.waterBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Rock') {
                player.statistics.waterBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Ghost') {
                player.statistics.waterBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Dark') {
                player.statistics.waterBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Dragon') {
                player.statistics.waterBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Steel') {
                player.statistics.waterBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Water' && 'Fairy') {
                player.statistics.waterBeaten += 1;
                player.statistics.fairyBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass') {
                player.statistics.grassBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Normal') {
                player.statistics.grassBeaten += 1;
                player.statistics.normalBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Electric') {
                player.statistics.grassBeaten += 1;
                player.statistics.electricBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Ice') {
                player.statistics.grassBeaten += 1;
                player.statistics.iceBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Fighting') {
                player.statistics.grassBeaten += 1;
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Poison') {
                player.statistics.grassBeaten += 1;
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Ground') {
                player.statistics.grassBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Flying') {
                player.statistics.grassBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Psychic') {
                player.statistics.grassBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Bug') {
                player.statistics.grassBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Rock') {
                player.statistics.grassBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Ghost') {
                player.statistics.grassBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Dark') {
                player.statistics.grassBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Dragon') {
                player.statistics.grassBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Steel') {
                player.statistics.grassBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Grass' && 'Fairy') {
                player.statistics.grassBeaten += 1;
                player.statistics.fairyBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric') {
                player.statistics.electricBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Normal') {
                player.statistics.electricBeaten += 1;
                player.statistics.normalBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Ice') {
                player.statistics.electricBeaten += 1;
                player.statistics.iceBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Poison') {
                player.statistics.electricBeaten += 1;
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Ground') {
                player.statistics.electricBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Flying') {
                player.statistics.electricBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Psychic') {
                player.statistics.electricBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Bug') {
                player.statistics.electricBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Rock') {
                player.statistics.electricBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Ghost') {
                player.statistics.electricBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Dark') {
                player.statistics.electricBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Dragon') {
                player.statistics.electricBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Steel') {
                player.statistics.electricBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Electric' && 'Fairy') {
                player.statistics.electricBeaten += 1;
                player.statistics.fairyBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal') {
                player.statistics.normalBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Fighting') {
                player.statistics.normalBeaten += 1;
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Ground') {
                player.statistics.normalBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Flying') {
                player.statistics.normalBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Psychic') {
                player.statistics.normalBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Dark') {
                player.statistics.normalBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Dragon') {
                player.statistics.normalBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Normal' && 'Fairy') {
                player.statistics.normalBeaten += 1;
                player.statistics.fairyBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice') {
                player.statistics.iceBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Fighting') {
                player.statistics.iceBeaten += 1;
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Ground') {
                player.statistics.iceBeaten += 1;
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Flying') {
                player.statistics.iceBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Psychic') {
                player.statistics.iceBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Bug') {
                player.statistics.iceBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Rock') {
                player.statistics.iceBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Ghost') {
                player.statistics.iceBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Dark') {
                player.statistics.iceBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Dragon') {
                player.statistics.iceBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Steel') {
                player.statistics.iceBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ice' && 'Fairy') {
                player.statistics.iceBeaten += 1;
                player.statistics.fairyBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting') {
                player.statistics.fightingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Poison') {
                player.statistics.fightingBeaten += 1;
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Flying') {
                player.statistics.fightingBeaten += 1;
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Psychic') {
                player.statistics.fightingBeaten += 1;
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Bug') {
                player.statistics.fightingBeaten += 1;
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Rock') {
                player.statistics.fightingBeaten += 1;
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Ghost') {
                player.statistics.fightingBeaten += 1;
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Dark') {
                player.statistics.fightingBeaten += 1;
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Dragon') {
                player.statistics.fightingBeaten += 1;
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fighting' && 'Steel') {
                player.statistics.fightingBeaten += 1;
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Poison') {
                player.statistics.poisonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ground') {
                player.statistics.groundBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Flying') {
                player.statistics.flyingBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Psychic') {
                player.statistics.psychicBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Bug') {
                player.statistics.bugBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Rock') {
                player.statistics.rockBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Ghost') {
                player.statistics.ghostBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Dark') {
                player.statistics.darkBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Dragon') {
                player.statistics.dragonBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Steel') {
                player.statistics.steelBeaten += 1;
            }
            if (enemy.activePoke().types() == 'Fairy') {
                player.statistics.fairyBeaten += 1;
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
            player.activePoke().giveExp(expToGive);
            player.getPokemon().forEach((poke) => poke.giveExp((Combat.enemyActivePoke.baseExp() / 100) + (Combat.enemyActivePoke.level() / 10)));
            const afterExp = player.getPokemon().map((poke) => poke.level());

            // was it a trainer poke
            if (Combat.trainer) {
            // remove the pokemon
                Combat.trainerPoke.splice(Combat.trainerCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.trainerPoke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.trainerPoke.length < 1) {
                    if (Combat.trainer.badge) {
                        if (!player.badges[Combat.trainer.badge]) {
                            player.badges[Combat.trainer.badge] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.trainer = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.trainer1) {
            // remove the pokemon
                Combat.trainer1Poke.splice(Combat.trainerCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.trainer1Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.trainer1Poke.length < 1) {
                    if (Combat.trainer1.win) {
                        if (!player.wins[Combat.trainer1.win]) {
                            player.wins[Combat.trainer1.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.trainer1 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.trainer2) {
            // remove the pokemon
                Combat.trainer2Poke.splice(Combat.trainerCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.trainer2Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.trainer2Poke.length < 1) {
                    if (Combat.trainer2.win) {
                        if (!player.wins[Combat.trainer2.win]) {
                            player.wins[Combat.trainer2.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.trainer2 = null;
                    Combat.pause();
                    return false;
                }
            }
            if (Combat.trainer3) {
            // remove the pokemon
                Combat.trainer3Poke.splice(Combat.trainerCurrentID, 1);
                const foundBattleCoins = Math.floor(Combat.enemyActivePoke.level() * Combat.trainer3Poke.length) + 5;
                player.addBattleCoins(foundBattleCoins);
                if (Combat.trainer3Poke.length < 1) {
                    if (Combat.trainer3.win) {
                        if (!player.wins[Combat.trainer3.win]) {
                            player.wins[Combat.trainer3.win] = true;
                            dom.renderRouteList();
                        }
                    }
                    Combat.trainer3 = null;
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
            } else if (Combat.trainer1) {
                enemy.trainer1Poke(Combat.trainer1Poke);
            } else if (Combat.trainer2) {
                enemy.trainer2Poke(Combat.trainer2Poke);
            } else if (Combat.trainer3) {
                enemy.trainer3Poke(Combat.trainer3Poke);
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
                if (Combat.trainer) {
                    Combat.trainer = null;
                    Combat.pause();
                }
                if (Combat.trainer1) {
                    Combat.trainer1 = null;
                    Combat.pause();
                }
                if (Combat.trainer2) {
                    Combat.trainer2 = null;
                    Combat.pause();
                }
                if (Combat.trainer3) {
                    Combat.trainer3 = null;
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
                !Combat.trainer && !Combat.trainer1 && !Combat.trainer2 && !Combat.trainer3 && (
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
                        if (enemy.activePoke().types() == 'Fire') {
                            player.statistics.fireCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Normal') {
                            player.statistics.fireCaught += 1;
                            player.statistics.normalCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Water') {
                            player.statistics.fireCaught += 1;
                            player.statistics.waterCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Electric') {
                            player.statistics.fireCaught += 1;
                            player.statistics.electricCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Ice') {
                            player.statistics.fireCaught += 1;
                            player.statistics.iceCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Fighting') {
                            player.statistics.fireCaught += 1;
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Poison') {
                            player.statistics.fireCaught += 1;
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Ground') {
                            player.statistics.fireCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Flying') {
                            player.statistics.fireCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Psychic') {
                            player.statistics.fireCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Bug') {
                            player.statistics.fireCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Rock') {
                            player.statistics.fireCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Ghost') {
                            player.statistics.f += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Dark') {
                            player.statistics.fireCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Dragon') {
                            player.statistics.fireCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fire' && 'Steel') {
                            player.statistics.fireCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water') {
                            player.statistics.waterCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Normal') {
                            player.statistics.waterCaught += 1;
                            player.statistics.normalCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Grass') {
                            player.statistics.waterCaught += 1;
                            player.statistics.grassCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Electric') {
                            player.statistics.waterCaught += 1;
                            player.statistics.electricCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Ice') {
                            player.statistics.waterCaught += 1;
                            player.statistics.iceCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Fighting') {
                            player.statistics.waterCaught += 1;
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Poison') {
                            player.statistics.waterCaught += 1;
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Ground') {
                            player.statistics.waterCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Flying') {
                            player.statistics.waterCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Psychic') {
                            player.statistics.waterCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Bug') {
                            player.statistics.waterCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Rock') {
                            player.statistics.waterCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Ghost') {
                            player.statistics.waterCaught += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Dark') {
                            player.statistics.waterCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Dragon') {
                            player.statistics.waterCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Steel') {
                            player.statistics.waterCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Water' && 'Fairy') {
                            player.statistics.waterCaught += 1;
                            player.statistics.fairyCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass') {
                            player.statistics.grassCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Normal') {
                            player.statistics.grassCaught += 1;
                            player.statistics.normalCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Electric') {
                            player.statistics.grassCaught += 1;
                            player.statistics.electricCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Ice') {
                            player.statistics.grassCaught += 1;
                            player.statistics.iceCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Fighting') {
                            player.statistics.grassCaught += 1;
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Poison') {
                            player.statistics.grassCaught += 1;
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Ground') {
                            player.statistics.grassCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Flying') {
                            player.statistics.grassCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Psychic') {
                            player.statistics.grassCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Bug') {
                            player.statistics.grassCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Rock') {
                            player.statistics.grassCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Ghost') {
                            player.statistics.grassCaught += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Dark') {
                            player.statistics.grassCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Dragon') {
                            player.statistics.grassCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Steel') {
                            player.statistics.grassCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Grass' && 'Fairy') {
                            player.statistics.grassCaught += 1;
                            player.statistics.fairyCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric') {
                            player.statistics.electricCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Normal') {
                            player.statistics.electricCaught += 1;
                            player.statistics.normalCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Ice') {
                            player.statistics.electricCaught += 1;
                            player.statistics.iceCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Poison') {
                            player.statistics.electricCaught += 1;
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Ground') {
                            player.statistics.electricCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Flying') {
                            player.statistics.electricCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Psychic') {
                            player.statistics.electricCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Bug') {
                            player.statistics.electricCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Rock') {
                            player.statistics.electricCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Ghost') {
                            player.statistics.electricCaught += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Dark') {
                            player.statistics.electricCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Dragon') {
                            player.statistics.electricCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Steel') {
                            player.statistics.electricCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Electric' && 'Fairy') {
                            player.statistics.electricCaught += 1;
                            player.statistics.fairyCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal') {
                            player.statistics.normalCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Fighting') {
                            player.statistics.normalCaught += 1;
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Ground') {
                            player.statistics.normalCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Flying') {
                            player.statistics.normalCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Psychic') {
                            player.statistics.normalCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Dark') {
                            player.statistics.normalCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Dragon') {
                            player.statistics.normalCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Normal' && 'Fairy') {
                            player.statistics.normalCaught += 1;
                            player.statistics.fairyCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice') {
                            player.statistics.iceCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Fighting') {
                            player.statistics.iceCaught += 1;
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Ground') {
                            player.statistics.iceCaught += 1;
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Flying') {
                            player.statistics.iceCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Psychic') {
                            player.statistics.iceCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Bug') {
                            player.statistics.iceCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Rock') {
                            player.statistics.iceCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Ghost') {
                            player.statistics.iceCaught += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Dark') {
                            player.statistics.iceCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Dragon') {
                            player.statistics.iceCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Steel') {
                            player.statistics.iceCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ice' && 'Fairy') {
                            player.statistics.iceCaught += 1;
                            player.statistics.fairyCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting') {
                            player.statistics.fightingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Poison') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Flying') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Psychic') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Bug') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Rock') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Ghost') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Dark') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Dragon') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fighting' && 'Steel') {
                            player.statistics.fightingCaught += 1;
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Poison') {
                            player.statistics.poisonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ground') {
                            player.statistics.groundCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Flying') {
                            player.statistics.flyingCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Psychic') {
                            player.statistics.psychicCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Bug') {
                            player.statistics.bugCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Rock') {
                            player.statistics.rockCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Ghost') {
                            player.statistics.ghostCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Dark') {
                            player.statistics.darkCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Dragon') {
                            player.statistics.dragonCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Steel') {
                            player.statistics.steelCaught += 1;
                        }
                        if (enemy.activePoke().types() == 'Fairy') {
                            player.statistics.fairyCaught += 1;
                        }
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
