<template>
  <CardModal
    name="lavendertown"
    title="Lavender Town"
  >
    <template #body>
      <div
        id="lavenderTownModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower1()"
          class="button"
        >
          Pokemon Tower
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeCenter()"
          class="button"
        >
          Pokemon Center
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeMart()"
          class="button"
        >
          PokeMart
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
