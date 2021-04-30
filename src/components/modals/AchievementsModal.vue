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
        </button>
        <p>Pokemon Owned</p><button
          id="pokemonOwned"
          class="button"
          @click="ui.checkPokemonDefeated()"
        >
          0
        </button><br>
        <hr>
        <button
          class="button"
          @click="ui.viewStatistics()"
        >
          STATISTICS
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
