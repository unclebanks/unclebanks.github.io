<template>
  <CardModal
    name="lavendertownpoketower5"
    title="Pokemon Tower Fifth Floor"
  >
    <template #body>
      <div
        id="lavenderPokeTower5ModalBox"
      >
        <button
          onclick="userInteractions.lavenderPokeTower6UP()"
          class="button"
        >
          Sixth Floor
        </button><br>
        <button
          onclick="userInteractions.lavenderPokeTower4DOWN()"
          class="button"
        >
          Fourth Floor
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
