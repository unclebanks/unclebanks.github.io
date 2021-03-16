<template>
  <div id="listBox">
    <PokeStorage :ui="ui" />
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

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
