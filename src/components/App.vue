<template>
  <div id="gameContainer">
    <Regions />
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

import Regions from './Regions.vue';
import PlayerBox from './PlayerBox.vue';
import NavBox from './NavBox.vue';
import PartyBox from './PartyBox.vue';
import Modals from './Modals.vue';

// Fake userInteractions object that does nothing
// to be replaced on game start when a real one is created.
import { dummy } from '../modules/actions';

export default {
    components: {
        Regions,
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
