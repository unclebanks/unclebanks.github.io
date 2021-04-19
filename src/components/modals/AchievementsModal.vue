<template>
  <CardModal
    name="achievements"
    title="Achievements"
  >
    <template #body>
      <div>
        <p>Pokemon Defeated</p><button
          id="pokemonDefeated"
          @click="ui.checkPokemonDefeated()"
        >
          0
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },

    props: {
        ui: { type: Object, required: true },
    },
};
</script>
