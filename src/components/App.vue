<template>
  <div id="gameContainer">
    <PokemonList />
    <RoutesBox />
    <ViewSelect />
    <Inventory />
    <EnemyBox />
    <PlayerBox />
    <Console />
    <NavBox />
    <RegionBox />
    <PartyBox />
  </div>
</template>

<script>

import PokemonList from './PokemonList.vue';
import RoutesBox from './RoutesBox.vue';
import ViewSelect from './ViewSelect.vue';
import Inventory from './Inventory.vue';
import EnemyBox from './EnemyBox.vue';
import PlayerBox from './PlayerBox.vue';
import Console from './Console.vue';
import NavBox from './NavBox.vue';
import RegionBox from './RegionBox.vue';
import PartyBox from './PartyBox.vue';

export default {
    components: {
        PokemonList,
        RoutesBox,
        ViewSelect,
        Inventory,
        EnemyBox,
        PlayerBox,
        Console,
        NavBox,
        RegionBox,
        PartyBox,
    },
};
</script>
