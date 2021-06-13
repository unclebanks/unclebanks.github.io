<template>
  <CardModal
    name="fuchsiacity"
    title="Fuchsia City"
  >
    <template #body>
      <div
        id="fuchsiaCityModalBox"
      >
        <button
          onclick="userInteractions.justTestStuff()"
          class="button"
        >
          TEST
        </button><br>
        <button
          onclick="userInteractions.fuchsiaPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.fuchsiaPokeMart()"
          class="button"
        >
          PokeMart
        </button><br>
        <button
          id="pokemart"
          onclick="userInteractions.fuchsiaGym()"
          class="button"
        >
          Fuchsia Gym
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
