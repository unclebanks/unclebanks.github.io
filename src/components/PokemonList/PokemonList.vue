<template>
  <div id="listBox">
    <PokeStorage :ui="ui" />
  </div>
</template>

<script>
import PokeStorage from './PokeStorage.vue';

export default {
    components: {
        PokeStorage,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
