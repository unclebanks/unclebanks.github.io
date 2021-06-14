<template>
  <CardModal
    name="saffroncity"
    title="Saffron City"
  >
    <template #body>
      <div
        id="saffronCityModalBox"
      >
        <button
          onclick="userInteractions.justTestStuff()"
          class="button"
        >
          TEST
        </button><br>
        <button
          onclick="userInteractions.saffronPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.saffronPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.saffronGym()"
          class="button"
        >
          Saffron Gym
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
