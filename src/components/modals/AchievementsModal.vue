<template>
  <CardModal
    name="achievements"
    title="Achievements"
  >
    <template #body>
      <div id="achievements">
        <p>Pokemon Defeated</p><button
          id="pokemonDefeated"
          class="button"
          @click="ui.checkPokemonDefeated()"
        >
          0
        </button>
        <p>Pokemon Caught</p><button
          id="pokemonCaught"
          class="button"
          @click="ui.checkPokemonCaught()"
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
