<template>
  <div id="gameContainer">
    <PokemonList />
    <RoutesBox />
    <Inventory />
    <EnemyBox />
    <PlayerBox />
    <NavBox />
    <RegionBox />
    <PartyBox :ui="ui" />
    <PokeGear />
  </div>

  <Modals :ui="ui" />
</template>

<script>

import PokemonList from './PokemonList/PokemonList.vue';
import RoutesBox from './RoutesBox.vue';
import Inventory from './Inventory.vue';
import EnemyBox from './EnemyBox.vue';
import PlayerBox from './PlayerBox.vue';
import NavBox from './NavBox.vue';
import RegionBox from './RegionBox.vue';
import PartyBox from './PartyBox.vue';
import PokeGear from './PokeGear.vue';
import Modals from './Modals.vue';

// Fake userInteractions object that does nothing
// to be replaced on game start when a real one is created.
import { dummy } from '../modules/actions';

export default {
    components: {
        PokemonList,
        RoutesBox,
        Inventory,
        EnemyBox,
        PlayerBox,
        NavBox,
        RegionBox,
        PartyBox,
        PokeGear,
        Modals,
    },

    data() {
        return {
            ui: dummy,
        };
    },
};
</script>
