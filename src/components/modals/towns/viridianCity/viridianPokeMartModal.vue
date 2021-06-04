<template>
  <CardModal
    name="viridianpokemart"
    title="PokeMart"
  >
    <template #body>
      <div
        id="viridianPokeMartModalBox"
      >
        <button
          onclick="userInteractions.viridianPokeMartEvent()"
          class="button"
        >
          PokeMart Attendant
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
