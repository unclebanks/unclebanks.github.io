<template>
  <div id="gameContainer">
    <PokemonList :ui="ui" />
    <RoutesBox />
    <Regions />
    <EnemyBox />
    <PlayerBox />
    <NavBox />
    <PartyBox
      :ui="ui"
      :player="player"
    />
  </div>

  <Modals :ui="ui" />
</template>

<script>

import PokemonList from './PokemonList/PokemonList.vue';
import RoutesBox from './RoutesBox.vue';
import Regions from './Regions.vue';
import EnemyBox from './EnemyBox.vue';
import PlayerBox from './PlayerBox.vue';
import NavBox from './NavBox.vue';
import PartyBox from './PartyBox.vue';
import Modals from './Modals.vue';

// Fake userInteractions object that does nothing
// to be replaced on game start when a real one is created.
import { dummy } from '../modules/actions';

export default {
    components: {
        PokemonList,
        RoutesBox,
        Regions,
        EnemyBox,
        PlayerBox,
        NavBox,
        PartyBox,
        Modals,
    },

    data() {
        return {
            ui: dummy,
            player: {},
        };
    },
};
</script>
