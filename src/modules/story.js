import { $, pokeById } from './utilities';
import POKEDEX from './db';
import { renderView } from './display';
import { POKEDEXFLAGS } from './data';
import { openModal, closeModal } from './modalEvents';

export default (player, enemy, combatLoop, Poke) => {
    let dom;

    const Story = {
        canClose: true,
        displayStory: function (title, content, canClose) {
            this.canClose = canClose;
            openModal($('#storyModal'));
            $('#storyDialog .modal-card-title').innerHTML = title;
            $('#storyContent').innerHTML = content;
        },
        stories: {
            firstPoke: function () {
                const title = 'Welcome to the world of pokemon';
                let storyHTML = '<p>To help you get started please take one of my old pokemon</p>';
                storyHTML += `<p><img src="${Story.helpers.getPokeImg(1)}" onclick="story.helpers.selectFirstPoke(1)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(4)}" onclick="story.helpers.selectFirstPoke(4)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(7)}" onclick="story.helpers.selectFirstPoke(7)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(25)}" onclick="story.helpers.selectFirstPoke(25)"></p>`;
                Story.displayStory(title, storyHTML, false);
            },
        },
        helpers: {
            getPokeImg: function (id) {
                return POKEDEX[id - 1].images.normal.front;
            },
            selectFirstPoke: function (id) {
                const starterPoke = new Poke(pokeById(id), 5);
                player.addPoke(starterPoke);
                player.addPokedex(starterPoke.pokeName(), POKEDEXFLAGS.ownNormal);
                player.setActive(0);
                combatLoop.unpause();
                renderView(dom, enemy, player);
                dom.renderRoutesBox();
                dom.renderListBox();
                dom.renderPokeList();
                closeModal($('#storyModal'));
            },
        },
        attachDOM: (_dom) => dom = _dom,
    };

    return Story;
};
