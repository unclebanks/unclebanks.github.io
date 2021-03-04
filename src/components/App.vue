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
    },
};
</script>
