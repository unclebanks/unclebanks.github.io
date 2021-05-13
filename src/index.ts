import Player from './modules/player';
import makeEnemy from './modules/enemy';
import Town from './modules/town';
import Display, { renderView } from './modules/display';
import Combat from './modules/combat';
import UserActions from './modules/actions';
import Story from './modules/story';
import Poke, { pokeImage } from './modules/poke';
import setupModals from './modules/modalEvents';
import POKEDEX from './modules/db';
import * as utilities from './modules/utilities';
import notify from './modules/notify';
// include styles in webpack bundle
import './index.scss';

import initApp from './app';

// import just the bits of fontawesome we want
import(/* webpackChunkName: "fontawesome" */ './modules/fontawesome');

const models = initApp();

document.addEventListener('DOMContentLoaded', () => {
    setupModals();
});

// load everything we need
const lastSave = Date.now();
const player = Player(lastSave, models.app);
const enemy = makeEnemy(null, player, Poke);
const combatLoop = Combat(player, enemy);
const town = Town(player, Poke);
const story = Story(player, enemy, combatLoop, Poke);
const userInteractions = UserActions(player, combatLoop, enemy, town, story, models.app);
const dom = Display(player, combatLoop, userInteractions);

// Provide data to Vue components
// @ts-expect-error  -- not sure what to do about this yet, so ignore error
models.app.ui = userInteractions;
// @ts-expect-error  -- as above
models.app.player = player;

combatLoop.attachUI(userInteractions);
enemy.attachCL(combatLoop);
[
    player,
    userInteractions,
    combatLoop,
    story,
    town,
].forEach((obj) => obj.attachDOM(dom));

let globals;
if (process.env.NODE_ENV === 'development') {
    // Expose all of the things in development, for easier debugging
    globals = {
        lastSave,
        player,
        Poke,
        enemy,
        combatLoop,
        town,
        story,
        userInteractions,
        dom,
        models,
        POKEDEX,
        pokeImage,
        ...utilities,
        notify,
    };
} else {
    // Otherwise, just the things we need to make the game run
    globals = {
        userInteractions,
        story,
        town,
        combatLoop,
    };
}

// expose globals for use on inline event handlers in html
Object.assign(window, globals);

// load old save data
if (localStorage.getItem('totalPokes') !== null) {
    player.loadPokes();
    dom.refreshCatchOption(player.settings.catching);
    userInteractions.changeRoute(player.settings.currentRouteId);
} else {
    combatLoop.pause();
    story.stories.firstPoke();
}

if (player.settings.spriteChoice === 'front') {
    (document.getElementById('spriteChoiceFront') as HTMLInputElement).checked = true;
} else {
    (document.getElementById('spriteChoiceBack') as HTMLInputElement).checked = true;
}

dom.bindEvents();
dom.renderBalls();
dom.renderCurrency();

renderView(dom, enemy, player);
dom.renderRoutesBox();
dom.renderRegionSelect();
dom.renderPokeSort();

combatLoop.init();

requestAnimationFrame(function renderTime() {
    dom.renderHeal(models.app.$store.getters['pokemon/timeToHeal'], enemy);
    requestAnimationFrame(renderTime);
});
