<template>
  <div id="listBox">
    <PokeStorage />
    <Pokedex />
  </div>
</template>

<script>
import Pokedex from './Pokedex.vue';
import PokeStorage from './PokeStorage.vue';

export default {
    components: {
        Pokedex,
        PokeStorage,
    },
};
</script>
