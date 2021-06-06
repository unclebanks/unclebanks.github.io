<template>
  <CardModal
    name="viridiancity"
    title="Viridian City"
  >
    <template #body>
      <div
        id="viridianCityModalBox"
      >
        <button
          onclick="userInteractions.viridianDrunkard()"
          class="button"
        >
          Drunken Old Man
        </button><br>
        <button
          onclick="userInteractions.viridianPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.viridianPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.viridianGym()"
          class="button"
        >
          Viridian Gym
        </button><br>
      </div>
    </template>
  </CardModal>
</template>

<script>
import CardModal from '../../../common/CardModal.vue';

export default {
    components: {
        CardModal,
    },
};
</script>
