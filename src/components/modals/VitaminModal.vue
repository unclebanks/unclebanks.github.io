<template>
  <CardModal
    name="vitamin"
    title="Apply vitamins"
  >
    <template #body>
      <div class="section">
        <h3 class="subtitle">
          <span id="vitaminName">Vitamin</span> -
          <span id="vitaminCount">?</span>
        </h3>
      </div>
      <hr>
      <div class="section">
        <h3 class="subtitle">
          Pokémon
        </h3>
        <ul id="vitaminPokemon">
          <li>Nothing</li>
        </ul>
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
};
</script>
