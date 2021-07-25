import { $, pokeByIndex } from './utilities';
import POKEDEX from './db.ts';
import { renderView } from './display';
import { POKEDEXFLAGS } from './data';
import { openModal, closeModal } from './modalEvents';
import { pokeImage } from './poke';

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
                const title = 'NoNamePokemonGame';
                let storyHTML = '<p>Hello there! Welcome to the world of NoNamePokemonGame</p>';
                storyHTML += '<p>This game is a bit different than traditional POKEMON games.</p>';
                storyHTML += '<p>NNPG encompasses two forms of gameplay, Idle and Engaged.</p>';
                storyHTML += '<p>The only requirements to progress are the GYM badges.</p>';
                storyHTML += '<p>If you would like to join the community our discord is located at https://discord.gg/9WbZkm7yKx.</p>';
                storyHTML += '<p>For now, click a POKEMON below to get started.</p>';
                storyHTML += `<p><img src="${Story.helpers.getPokeImg(1)}" onclick="story.helpers.selectFirstPoke(1)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(5)}" onclick="story.helpers.selectFirstPoke(5)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(10)}" onclick="story.helpers.selectFirstPoke(10)">`;
                storyHTML += `<img src="${Story.helpers.getPokeImg(33)}" onclick="story.helpers.selectFirstPoke(33)"></p>`;
                Story.displayStory(title, storyHTML, false);
            },
        },
        helpers: {
            getPokeImg: function (id) {
                return pokeImage('normal', 'front', POKEDEX[id - 1].name);
            },
            selectFirstPoke: function (id) {
                const starterPoke = new Poke(pokeByIndex(id), 5);
                player.addPoke(starterPoke);
                player.addPokedex(starterPoke.pokeName(), POKEDEXFLAGS.ownNormal);
                player.setActive(0);
                player.events[starterPoke.pokeName()] = true;
                combatLoop.unpause();
                renderView(dom, enemy, player);
                dom.renderRoutesBox();
                closeModal($('#storyModal'));
            },
        },
        attachDOM: (_dom) => dom = _dom,
    };

    return Story;
};
