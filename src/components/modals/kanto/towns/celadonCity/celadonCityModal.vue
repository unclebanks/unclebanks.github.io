<template>
  <CardModal
    name="celadoncity"
    title="Celadon City"
  >
    <template #body>
      <div
        id="celadonCityModalBox"
      >
        <button
          onclick="userInteractions.gameCorner()"
          class="button"
        >
          Game Corner
        </button><br>
        <button
          onclick="userInteractions.celadonPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.celadonPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.celadonGym()"
          class="button"
        >
          Celadon Gym
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
