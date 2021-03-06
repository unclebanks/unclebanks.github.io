<template>
  <div id="gameContainer">
    <PokemonList />
    <RoutesBox />
    <Inventory />
    <EnemyBox />
    <PlayerBox />
    <NavBox />
    <RegionBox />
    <PartyBox />
    <PokeGear />
  </div>
</template>

<script>

import PokemonList from './PokemonList.vue';
import RoutesBox from './RoutesBox.vue';
import Inventory from './Inventory.vue';
import EnemyBox from './EnemyBox.vue';
import PlayerBox from './PlayerBox.vue';
import NavBox from './NavBox.vue';
import RegionBox from './RegionBox.vue';
import PartyBox from './PartyBox.vue';
import PokeGear from './PokeGear.vue';

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
    },
};
</script>
