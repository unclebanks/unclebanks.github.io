import Player from './modules/player';
import makeEnemy from './modules/enemy';
import Town from './modules/town';
import Display, { renderView } from './modules/display';
import Combat from './modules/combat';
import UserActions from './modules/actions';
import Story from './modules/story';
import mkPoke from './modules/poke';
import setupModals from './modules/modalEvents';
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
const player = Player(lastSave);
const { Poke, makeRandomPoke } = mkPoke(player);
const enemy = makeEnemy(null, player, Poke);
const combatLoop = Combat(player, enemy);
const town = Town(player, Poke);
const story = Story(player, enemy, combatLoop, Poke);
const userInteractions = UserActions(player, combatLoop, enemy, town, story);
const dom = Display(player, combatLoop, userInteractions);

// Provide data to Vue components
models.settings.ui = userInteractions;

combatLoop.attachUI(userInteractions);
enemy.attachCL(combatLoop);
[
    player,
    userInteractions,
    combatLoop,
    story,
    town,
].forEach((obj) => obj.attachDOM(dom));

const globals = {
    userInteractions,
    story,
    town,
};

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
    document.getElementById('spriteChoiceFront').checked = true;
    document.getElementById('player').className += ' frontSprite';
} else {
    document.getElementById('spriteChoiceBack').checked = true;
}

dom.bindEvents();
dom.renderBalls();
dom.renderCurrency();

renderView(dom, enemy, player);
dom.renderRoutesBox();
dom.renderListBox();
dom.renderRegionSelect();
dom.renderPokeSort();

combatLoop.init();

requestAnimationFrame(function renderTime() {
    dom.renderHeal(player.canHeal(), enemy);
    requestAnimationFrame(renderTime);
});
