<template>
  <CardModal
    name="pewtercity"
    title="Pewter City"
  >
    <template #body>
      <div
        id="pewterCityModalBox"
      >
        <button
          onclick="userInteractions.pewterMuseumEvent()"
          class="button"
        >
          Museum
        </button><br>
        <button
          onclick="userInteractions.pewterPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.pewterPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.pewterGym()"
          class="button"
        >
          Pewter Gym
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
