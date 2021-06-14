<template>
  <CardModal
    name="vermilioncity"
    title="Vermilion City"
  >
    <template #body>
      <div
        id="vermilionCityModalBox"
      >
        <button
          onclick="userInteractions.vFisherman()"
          class="button"
        >
          Fishing Guru
        </button><br>
        <button
          onclick="userInteractions.vermilionSSANNE()"
          class="button"
        >
          S.S. ANNE
        </button><br>
        <button
          onclick="userInteractions.vermilionPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.vermilionPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.vermilionGym()"
          class="button"
        >
          Vermilion Gym
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
