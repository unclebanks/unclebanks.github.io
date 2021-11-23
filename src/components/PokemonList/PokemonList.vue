<template>
  <CardModal
    name="pokemonstorage"
    title="Pokemon Storage"
  >
    <template #body>
      <div id="listBox">
        <PokeStorage :ui="ui" />
      </div>
    </template>
  </CardModal>
</template>

<script>
import PokeStorage from './PokeStorage.vue';
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        PokeStorage,
        CardModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
