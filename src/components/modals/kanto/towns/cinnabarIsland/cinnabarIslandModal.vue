<template>
  <CardModal
    name="cinnabarisland"
    title="Cinnabar Island"
  >
    <template #body>
      <div
        id="cinnabarIslandModalBox"
      >
        <button
          onclick="userInteractions.cinnabarPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          onclick="userInteractions.openCinnabarLab()"
          class="button"
        >
          Cinnabar Lab
        </button><br>
        <button
          onclick="userInteractions.cinnabarPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.cinnabarPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.cinnabarGym()"
          class="button"
        >
          Cinnabar Gym
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
